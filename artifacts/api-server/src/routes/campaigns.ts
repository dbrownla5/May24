import { Router, type IRouter, type Request, type Response } from "express";
import { db, campaignsTable } from "@workspace/db";
import { CreateCampaignBody } from "@workspace/api-zod";
import { desc } from "drizzle-orm";
import { requireStudioKey } from "./middleware/requireStudioKey";

const router: IRouter = Router();
router.use(requireStudioKey);

// GET /campaigns
router.get("/campaigns", async (req: Request, res: Response) => {
  const campaigns = await db
    .select()
    .from(campaignsTable)
    .orderBy(desc(campaignsTable.createdAt));

  res.json(campaigns.map(formatCampaign));
});

// POST /campaigns
router.post("/campaigns", async (req: Request, res: Response) => {
  const parsed = CreateCampaignBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid body" });
    return;
  }
  const data = parsed.data;
  const [campaign] = await db.insert(campaignsTable).values({
    name: data.name,
    description: data.description,
    isTemplate: data.isTemplate ?? false,
    launchDate: data.launchDate ?? null,
  }).returning();

  res.status(201).json(formatCampaign(campaign));
});

function formatCampaign(c: typeof campaignsTable.$inferSelect) {
  return {
    id: c.id,
    name: c.name,
    description: c.description,
    isTemplate: c.isTemplate,
    launchDate: c.launchDate ?? null,
    createdAt: c.createdAt.toISOString(),
  };
}

export default router;
