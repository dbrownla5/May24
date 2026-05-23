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

export default router;
