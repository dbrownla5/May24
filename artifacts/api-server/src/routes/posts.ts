import { Router, type IRouter, type Request, type Response } from "express";
import { db, postsTable, campaignsTable } from "@workspace/db";
import {
  ListPostsQueryParams,
  CreatePostBody,
  GetCalendarPostsQueryParams,
  GetPostParams,
  UpdatePostParams,
  UpdatePostBody,
  DeletePostParams,
} from "@workspace/api-zod";
import { eq, and, desc, sql } from "drizzle-orm";
import { requireStudioKey } from "./middleware/requireStudioKey";

const router: IRouter = Router();
router.use(requireStudioKey);

// GET /posts
router.get("/posts", async (req: Request, res: Response) => {
  const parsed = ListPostsQueryParams.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid query params" });
    return;
  }
  const { platform, status, campaign_id } = parsed.data;

  const conditions = [];
  if (platform) conditions.push(eq(postsTable.platform, platform));
  if (status) conditions.push(eq(postsTable.status, status));
  if (campaign_id != null) conditions.push(eq(postsTable.campaignId, campaign_id));

  const posts = await db
    .select()
    .from(postsTable)
    .where(conditions.length > 0 ? and(...conditions) : undefined)
    .orderBy(desc(postsTable.createdAt));

  res.json(posts.map(formatPost));
});

// POST /posts
router.post("/posts", async (req: Request, res: Response) => {
  const parsed = CreatePostBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid body" });
    return;
  }
  const data = parsed.data;
  const [post] = await db.insert(postsTable).values({
    platform: data.platform,
    caption: data.caption,
    postType: data.postType,
    status: data.status ?? "draft",
    hashtags: data.hashtags ?? null,
    notes: data.notes ?? null,
    scheduledDate: data.scheduledDate ?? null,
    campaignId: data.campaignId ?? null,
  }).returning();
  res.status(201).json(formatPost(post));
});

// GET /posts/calendar
router.get("/posts/calendar", async (req: Request, res: Response) => {
  const parsed = GetCalendarPostsQueryParams.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid query params" });
    return;
  }
  const { year, month } = parsed.data;

  const startDate = `${year}-${String(month).padStart(2, "0")}-01`;
  const endMonth = month === 12 ? 1 : month + 1;
  const endYear = month === 12 ? year + 1 : year;
  const endDate = `${endYear}-${String(endMonth).padStart(2, "0")}-01`;

  const posts = await db
    .select()
    .from(postsTable)
    .where(
      and(
        sql`${postsTable.scheduledDate} >= ${startDate}`,
        sql`${postsTable.scheduledDate} < ${endDate}`
      )
    )
    .orderBy(postsTable.scheduledDate);

  const days: Record<string, ReturnType<typeof formatPost>[]> = {};
  for (const post of posts) {
    if (!post.scheduledDate) continue;
    const key = post.scheduledDate.slice(0, 10);
    if (!days[key]) days[key] = [];
    days[key].push(formatPost(post));
  }

  res.json({ year, month, days });
});

// GET /posts/stats
router.get("/posts/stats", async (req: Request, res: Response) => {
  const allPosts = await db.select().from(postsTable);
  const now = new Date().toISOString().slice(0, 10);

  const byPlatform: Record<string, number> = {};
  const byStatus: Record<string, number> = {};
  let upcomingCount = 0;

  for (const post of allPosts) {
    byPlatform[post.platform] = (byPlatform[post.platform] ?? 0) + 1;
    byStatus[post.status] = (byStatus[post.status] ?? 0) + 1;
    if (post.scheduledDate && post.scheduledDate >= now && post.status === "scheduled") {
      upcomingCount++;
    }
  }

  res.json({ total: allPosts.length, byPlatform, byStatus, upcomingCount });
});

// GET /posts/:id
router.get("/posts/:id", async (req: Request, res: Response) => {
  const parsed = GetPostParams.safeParse({ id: Number(req.params.id) });
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }
  const [post] = await db.select().from(postsTable).where(eq(postsTable.id, parsed.data.id));
  if (!post) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.json(formatPost(post));
});

// PATCH /posts/:id
router.patch("/posts/:id", async (req: Request, res: Response) => {
  const params = UpdatePostParams.safeParse({ id: Number(req.params.id) });
  const body = UpdatePostBody.safeParse(req.body);
  if (!params.success || !body.success) {
    res.status(400).json({ error: "Invalid request" });
    return;
  }

  const updates: Record<string, unknown> = { updatedAt: new Date() };
  const d = body.data;
  if (d.platform !== undefined) updates.platform = d.platform;
  if (d.caption !== undefined) updates.caption = d.caption;
  if (d.postType !== undefined) updates.postType = d.postType;
  if (d.status !== undefined) updates.status = d.status;
  if (d.hashtags !== undefined) updates.hashtags = d.hashtags;
  if (d.notes !== undefined) updates.notes = d.notes;
  if ("scheduledDate" in d) updates.scheduledDate = d.scheduledDate ?? null;
  if ("campaignId" in d) updates.campaignId = d.campaignId ?? null;

  const [updated] = await db
    .update(postsTable)
    .set(updates)
    .where(eq(postsTable.id, params.data.id))
    .returning();

  if (!updated) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.json(formatPost(updated));
});

// DELETE /posts/:id
router.delete("/posts/:id", async (req: Request, res: Response) => {
  const parsed = DeletePostParams.safeParse({ id: Number(req.params.id) });
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }
  await db.delete(postsTable).where(eq(postsTable.id, parsed.data.id));
  res.status(204).send();
});

function formatPost(post: typeof postsTable.$inferSelect) {
  return {
    id: post.id,
    platform: post.platform,
    caption: post.caption,
    postType: post.postType,
    status: post.status,
    hashtags: post.hashtags ?? null,
    notes: post.notes ?? null,
    scheduledDate: post.scheduledDate ?? null,
    campaignId: post.campaignId ?? null,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  };
}

export default router;
