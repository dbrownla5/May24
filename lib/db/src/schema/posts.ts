import { pgTable, text, serial, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const campaignsTable = pgTable("campaigns", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull().default(""),
  isTemplate: boolean("is_template").notNull().default(false),
  launchDate: text("launch_date"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const postsTable = pgTable("posts", {
  id: serial("id").primaryKey(),
  platform: text("platform").notNull(),
  caption: text("caption").notNull(),
  postType: text("post_type").notNull(),
  status: text("status").notNull().default("draft"),
  hashtags: text("hashtags"),
  notes: text("notes"),
  scheduledDate: text("scheduled_date"),
  campaignId: integer("campaign_id").references(() => campaignsTable.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertCampaignSchema = createInsertSchema(campaignsTable).omit({ id: true, createdAt: true });
export type InsertCampaign = z.infer<typeof insertCampaignSchema>;
export type Campaign = typeof campaignsTable.$inferSelect;

export const insertPostSchema = createInsertSchema(postsTable).omit({ id: true, createdAt: true, updatedAt: true });
export type InsertPost = z.infer<typeof insertPostSchema>;
export type Post = typeof postsTable.$inferSelect;
