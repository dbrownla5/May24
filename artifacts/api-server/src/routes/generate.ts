import { Router, type IRouter, type Request, type Response } from "express";
import { GenerateContentBody } from "@workspace/api-zod";
import { openai } from "@workspace/integrations-openai-ai-server";
import { requireStudioKey } from "./middleware/requireStudioKey";

const router: IRouter = Router();
router.use(requireStudioKey);

const BRAND_VOICE = `You are a copywriter for The Well Lived Citizen, a premium household stewardship service in Los Angeles run by Dayna Brown. The brand voice is: warm, confident, and intentional. Never salesy, never frantic. The client is a thoughtful adult — often a homeowner going through a major life transition (downsizing, estate, new home). Copy feels considered and personal, never generic. Services include: The Reset (home organization reset), House Calls (ongoing household management), Legacy Planning (estate/senior transitions), Curated Resale & Consignment, and Fast Bag Fill (closet purge).`;

const PLATFORM_NOTES: Record<string, string> = {
  "@thewelllivedcitizen": "Main brand Instagram. Professional but personal. Speaks to LA homeowners and people in transition. Up to 2,200 chars but aim for 150-300 words. First line must stop the scroll.",
  "@thewelllivedcloset": "Instagram resale/closet account. Lighter, more playful. Focus on the pieces, the find, the story of an item. 100-200 words.",
  "@welldressedcitizen": "Legacy Instagram account being transitioned. Posts here are about the transition — warm send-off, redirecting followers. Keep it nostalgic and forward-looking.",
  "Facebook": "Facebook business page. More conversational, slightly longer OK. Can include links and calls to action. 100-250 words.",
  "Poshmark": "Poshmark listing copy. Lead with the item details, condition, measurements. Brand/style/era. 80-150 words.",
  "eBay": "eBay listing copy. Include item specifics: brand, condition, measurements, era. Clear and detailed. 100-200 words.",
};

const POST_TYPE_NOTES: Record<string, string> = {
  "Launch Announcement": "This is the official business launch. Announce The Well Lived Citizen. Warm, confident, exciting. Not a press release — personal.",
  "Service Spotlight": "Highlight one specific service in depth. Explain what it is, who it's for, and what transformation it creates.",
  "Behind the Scenes": "A peek into the work. Authentic, grounded. Could be a before/after, a day in the life, a detail shot.",
  "Client Transformation": "Share a client story (anonymized if needed). Before state → transformation → outcome. Emotional, specific.",
  "Resale Drop": "New items available for resale/consignment. Highlight the pieces, their story, how to get them.",
  "Brand Transition": "Transitioning followers from an old account to new ones. Warm, grateful, forward-looking.",
  "Seasonal": "Timely content tied to a season, holiday, or moment. Make it feel current and relevant.",
};

router.post("/content/generate", async (req: Request, res: Response) => {
  const parsed = GenerateContentBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid body" });
    return;
  }

  const { platform, postType, context, tone } = parsed.data;

  const platformNote = PLATFORM_NOTES[platform] ?? `Platform: ${platform}.`;
  const postTypeNote = POST_TYPE_NOTES[postType] ?? `Post type: ${postType}.`;

  const userPrompt = `Generate a social media post for ${platform}.

Post type: ${postType}
${context ? `Context/details: ${context}` : ""}
${tone ? `Tone direction: ${tone}` : ""}

Platform guidance: ${platformNote}
Post type guidance: ${postTypeNote}

Return a JSON object with:
- "caption": the main post caption (ready to copy-paste, no placeholder text)
- "hashtags": a string of 5-10 relevant hashtags (no # needed — just the words, comma separated)
- "alternates": array of 2 shorter alternate versions of the caption

Only return valid JSON. No extra text.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5.4",
      max_completion_tokens: 2048,
      messages: [
        { role: "system", content: BRAND_VOICE },
        { role: "user", content: userPrompt },
      ],
    });

    const raw = response.choices[0]?.message?.content ?? "{}";
    let parsed: { caption?: string; hashtags?: string; alternates?: string[] };
    try {
      parsed = JSON.parse(raw);
    } catch {
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : {};
    }

    res.json({
      caption: parsed.caption ?? "",
      hashtags: parsed.hashtags ?? "",
      alternates: parsed.alternates ?? [],
    });
  } catch (err) {
    console.error("AI generation error:", err);
    res.status(503).json({ error: "AI generation unavailable. Please try again." });
  }
});

const PLAN_DURATIONS: Record<number, string> = {
  7: "one week (7 days)",
  14: "two weeks (14 days)",
  30: "one month (30 days)",
};

router.post("/content/plan", async (req: Request, res: Response) => {
  const { theme, platforms, duration, context } = req.body as {
    theme: string;
    platforms: string[];
    duration: 7 | 14 | 30;
    context?: string;
  };

  if (!theme || !platforms?.length || !duration) {
    res.status(400).json({ error: "theme, platforms, and duration are required" });
    return;
  }

  const today = new Date();
  const startDate = today.toISOString().slice(0, 10);

  const platformList = platforms.map(p => {
    const note = PLATFORM_NOTES[p] ?? `Platform: ${p}`;
    return `- ${p}: ${note}`;
  }).join("\n");

  const userPrompt = `You are planning a social media content calendar for The Well Lived Citizen.

Campaign theme: ${theme}
${context ? `Additional context: ${context}` : ""}
Duration: ${PLAN_DURATIONS[duration] ?? `${duration} days`}
Start date: ${startDate}
Platforms to include: ${platforms.join(", ")}

Platform notes:
${platformList}

Create a realistic content calendar. Guidelines:
- Spread posts across the duration — don't post on every platform every day. A realistic cadence is every 2-4 days per platform.
- Vary post types meaningfully. Build a narrative arc: start with awareness/announcement, then deepen with service spotlights and behind-the-scenes, end with urgency or client stories.
- Each caption should be platform-appropriate and ready to copy-paste. No placeholder text.
- For Poshmark and eBay, only include if they are in the platform list and tie the content to the campaign theme (e.g. a resale drop related to the campaign).

Return a JSON array (no extra text) of post objects. Each object must have:
- "date": ISO date string (YYYY-MM-DD), starting from ${startDate}
- "platform": one of the platforms listed above
- "postType": one of these types: Launch Announcement, Service Spotlight, Behind the Scenes, Client Transformation, Resale Drop, Brand Transition, Seasonal
- "caption": full ready-to-post caption
- "hashtags": comma-separated hashtags (no # symbol, 5-10 tags)

Aim for ${Math.round(duration * platforms.length * 0.35)} posts total, distributed across the ${duration} days.

Only return the JSON array. No markdown, no extra text.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5.4",
      max_completion_tokens: 4096,
      messages: [
        { role: "system", content: BRAND_VOICE },
        { role: "user", content: userPrompt },
      ],
    });

    const raw = response.choices[0]?.message?.content ?? "[]";
    let plan: Array<{ date: string; platform: string; postType: string; caption: string; hashtags: string }>;
    try {
      plan = JSON.parse(raw);
    } catch {
      const jsonMatch = raw.match(/\[[\s\S]*\]/);
      plan = jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    }

    res.json({ plan, theme, duration, platforms });
  } catch (err) {
    console.error("AI plan generation error:", err);
    res.status(503).json({ error: "AI generation unavailable. Please try again." });
  }
});

export default router;
