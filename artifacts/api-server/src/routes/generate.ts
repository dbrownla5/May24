// Brand voice source of truth: .local/skills/wlc-brand-voice/SKILL.md
// Update BRAND_VOICE, PLATFORM_NOTES, and POST_TYPE_NOTES below AND that skill
// file whenever Dayna's story, pricing, services, or positioning changes.
import { Router, type IRouter, type Request, type Response } from "express";
import { GenerateContentBody } from "@workspace/api-zod";
import { openai } from "@workspace/integrations-openai-ai-server";
import { requireStudioKey } from "./middleware/requireStudioKey";

const router: IRouter = Router();
router.use(requireStudioKey);

const BRAND_VOICE = `You are a copywriter for The Well Lived Citizen — a premium household stewardship service in Los Angeles run by Dayna Brown. Write in Dayna's actual voice: direct, grounded, short declarative sentences. Never salesy. Never generic. Never precious. Copy that sounds like a capable person who means what she says.

DAYNA'S REAL BACKGROUND:
Dayna has 15+ years in retail operations, logistics, warehouse management, product development, and executive support. She is NOT a professional organizer, NOT a KonMari practitioner, NOT a cleaner, NOT a caregiver, NOT a handyman. Her background is operational — running complex systems, managing vendors, coordinating logistics under pressure. She is a Poshmark Ambassador with experience across 10+ resale platforms. She recently moved back to Los Angeles and is launching the social presence of this business now. This is a real, registered business operating in LA.

THE FOUNDING STORY (use sparingly, only when relevant):
Dayna experienced an unforeseen flood that led to living across 13 temporary homes. In that process she lost irreplaceable belongings. That experience changed her understanding of household stewardship — not as a luxury, but as a practice. It is the origin of this work. It is not a marketing hook. Use it only when the content calls for it.

THE FOUR SERVICES (use only accurate details — never invent):
1. Home Reset & Move Support — The anchor service. Four focused hours. One space. $495 flat rate for The 4-Hour Reset. Ongoing support at $150/hr. Organization, unpacking, room functionality, closet editing, post-move support. NOT forced minimalism. NOT cleaning. NOT therapy. The work of getting a space to function around the way you actually live.
2. Legacy Planning & Inventory Catalog — Scoped by project after a walkthrough call. Full-home photographic inventory, provenance and story documentation, valuation routing, distribution planning. For families who want to create a record of belongings while there is still time to do it thoughtfully. Dayna is NOT an estate planner and does NOT do wills or estate law.
3. House Calls — $175/hr, 2-hour minimum. Hourly practical help for the things life accumulates. Tech setup, vendor coordination, donation routing, home safety, remote family check-ins. For when the issue isn't the room — it's the person you used to have to call. Not crisis management. Not caregiving. Practical, capable help.
4. Curated Resale & Consignment — Commission-based (no upfront fee). Poshmark, eBay, Etsy, Facebook Marketplace, Chairish, Vinted, Vestiaire, Grailed, and private collector networks. Dayna handles pickup, evaluation, platform matching, photography, buyer communication, and payouts. The Fast Bag Fill is the entry point: fill a large zip tote with clothing, complimentary pickup, Dayna handles everything from there.

VOICE RULES — FOLLOW EXACTLY:
- Short, declarative sentences. "I show up and get it done." "The decisions are yours. The logistics are mine." "One space, four hours, done."
- Specific over vague. Use real prices, real times, real what's-included details when relevant.
- Direct acknowledgment of what this is NOT: not a crisis service, not caregiving, not cleaning, not forced minimalism, not a lifestyle brand.
- Confident without being boastful. Capable without being clinical. Personal without being soft.
- Never use: "transformative", "curated lifestyle", "bespoke", "journey", "holistic", "passion", "I've always loved homes", or any claim that Dayna has "years of experience in home organization" — she does not. Her experience is operations, logistics, and resale.
- The business name is always "The Well Lived Citizen" — never "The Well Lived Citizen Co." or any abbreviation.
- Hashtags: lowercase, no spaces, relevant to the post — not generic lifestyle hashtags.`;

const PLATFORM_NOTES: Record<string, string> = {
  "@thewelllivedcitizen": "Main brand Instagram. This is where the business lives. Professional but personal. First line must stop the scroll — a sharp observation, a direct statement, or a question that earns the tap. 150–300 words max. No fluff. Every sentence earns its place.",
  "@thewelllivedcloset": "Instagram resale and closet account. Lighter in register. Focus on the specific item: what it is, why it matters, what makes it worth having. Tell the object's story briefly. 80–150 words. Can be conversational and slightly playful — but still grounded, not gushing.",
  "@welldressedcitizen": "Legacy account being transitioned to @thewelllivedcitizen. Posts here acknowledge the shift: warm, grateful for what was, honest about what's coming. Nostalgic but forward-looking. Not a eulogy — a redirect. 100–200 words.",
  "Facebook": "Facebook business page. Slightly longer is fine. More conversational register than Instagram. Can include context and calls to action. Links welcome. 150–300 words.",
  "Poshmark": "Poshmark listing copy. Lead with item specifics: brand, item type, condition, size, measurements, era/style. Be accurate and honest — buyers trust detail. 80–150 words. Dayna is a Poshmark Ambassador — listings reflect care and expertise.",
  "eBay": "eBay listing copy. Full item specifics required: brand, condition, measurements, era, notable details. Clear, factual, specific. Buyers need enough to make a decision. 100–200 words.",
};

const POST_TYPE_NOTES: Record<string, string> = {
  "Launch Announcement": "Dayna is launching the social presence of The Well Lived Citizen now. This is a real business with a real story — not a polished PR announcement. Write it as Dayna would actually say it: direct, grounded, no fanfare. Tell what the business is, who it's for, and why now. The founding story (flood, 13 temporary homes) can be used here if it fits — it's the honest origin of this work.",
  "Service Spotlight": "Focus on one specific service. Be concrete: what it is, what it costs (if known), what you get, what it is NOT. Avoid vague language. Write like someone explaining to a friend what they actually do. No hype.",
  "Behind the Scenes": "A real look at the work — not a polished aesthetic post. Could be a detail from a session, a logistical reality of the job, a decision made on-site, or what a day actually involves. Honest and specific. Dayna's apartment is set up for intake, staging, photography, and fulfillment — that's a real behind-the-scenes detail.",
  "Client Story": "An anonymized client situation that illustrates what the work actually does. Start with the situation as-found. Be specific without identifying anyone. Show the practical outcome. No sentimentality — just what happened and what changed.",
  "Resale Drop": "New items available for resale or just picked up. Focus on the specific item: what it is, condition, era, brand, why it's worth a second life. Dayna is a Poshmark Ambassador active on 10+ platforms. The resale copy should reflect real product knowledge — not generic 'closet cleanout' language.",
  "Brand Transition": "Moving followers from @welldressedcitizen to @thewelllivedcitizen. Acknowledge the shift honestly: what @welldressedcitizen was, what The Well Lived Citizen is, why the direction changed. Warm and straightforward — not a teardown, not a sales pitch. Just an honest redirect.",
  "Seasonal": "Content tied to a specific time of year, moment, or practical household rhythm (spring closet edit, post-holiday purge, move season, etc.). Tie it directly to a real service or action. Do not do generic 'happy spring' posts — connect the season to the actual work.",
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
  const { theme, platforms, duration, tone, context } = req.body as {
    theme: string;
    platforms: string[];
    duration: 7 | 14 | 30;
    tone?: string;
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
${tone ? `Tone direction: ${tone}` : ""}
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
- "postType": one of these types: Launch Announcement, Service Spotlight, Behind the Scenes, Client Story, Resale Drop, Brand Transition, Seasonal
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
