import { useQuery } from "@tanstack/react-query";
import { getPostStats, listPosts, getGetPostStatsQueryKey, getListPostsQueryKey } from "@workspace/api-client-react";
import { Link } from "wouter";

const PLATFORM_COLORS: Record<string, string> = {
  "@thewelllivedcitizen": "#A2A392",
  "@thewelllivedcloset": "#C9A87C",
  "@welldressedcitizen": "#8B9B8E",
  "Facebook": "#6B7DB3",
  "Poshmark": "#C06262",
  "eBay": "#6BA3BE",
};

export default function Dashboard() {
  const { data: stats } = useQuery({ queryKey: getGetPostStatsQueryKey(), queryFn: () => getPostStats() });
  const { data: posts } = useQuery({ queryKey: [...getListPostsQueryKey({ status: "draft" })], queryFn: () => listPosts({ status: "draft" }) });

  const drafts = posts?.slice(0, 4) ?? [];

  return (
    <div className="px-10 py-10 max-w-5xl">
      <div className="mb-10">
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "hsl(20, 14%, 15%)", marginBottom: "6px" }}>
          Good to see you, Dayna.
        </div>
        <div style={{ fontSize: "0.875rem", color: "hsl(25, 15%, 50%)" }}>
          Plan your launch. Generate captions. Schedule your story.
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-10">
        {[
          { label: "Total Posts", value: stats?.total ?? 0 },
          { label: "Drafts", value: (stats?.byStatus as Record<string,number>)?.["draft"] ?? 0 },
          { label: "Scheduled", value: (stats?.byStatus as Record<string,number>)?.["scheduled"] ?? 0 },
          { label: "Upcoming", value: stats?.upcomingCount ?? 0 },
        ].map(({ label, value }) => (
          <div key={label} className="border rounded-lg px-5 py-4" style={{ backgroundColor: "hsl(40, 33%, 97%)", borderColor: "hsl(40, 20%, 88%)" }}>
            <div style={{ fontSize: "1.75rem", fontWeight: 700, fontFamily: "'Playfair Display', serif", color: "hsl(20, 14%, 15%)" }}>{value}</div>
            <div style={{ fontSize: "0.75rem", color: "hsl(25, 15%, 55%)", marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
          </div>
        ))}
      </div>

      {stats && Object.keys((stats.byPlatform as Record<string,number>) ?? {}).length > 0 && (
        <div className="mb-10">
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(25, 15%, 55%)", marginBottom: "12px" }}>By Platform</div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(stats.byPlatform as Record<string,number>).map(([platform, count]) => (
              <span key={platform} className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border" style={{ borderColor: "hsl(40, 20%, 85%)", backgroundColor: "hsl(40, 25%, 96%)", color: "hsl(20, 14%, 25%)" }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: PLATFORM_COLORS[platform] ?? "#A2A392" }} />
                {platform} <span style={{ color: "hsl(25, 15%, 55%)" }}>({count})</span>
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mb-10">
        <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(25, 15%, 55%)", marginBottom: "12px" }}>Quick Actions</div>
        <div className="flex gap-3">
          <Link href="/generate" className="px-5 py-2.5 rounded text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ backgroundColor: "hsl(20, 14%, 15%)", color: "hsl(40, 33%, 98%)" }}>
            Generate a Post
          </Link>
          <Link href="/calendar" className="px-5 py-2.5 rounded text-sm border transition-colors hover:bg-black/5"
              style={{ borderColor: "hsl(40, 20%, 82%)", color: "hsl(20, 14%, 25%)" }}>
            View Calendar
          </Link>
          <Link href="/campaigns" className="px-5 py-2.5 rounded text-sm border transition-colors hover:bg-black/5"
              style={{ borderColor: "hsl(40, 20%, 82%)", color: "hsl(20, 14%, 25%)" }}>
            Launch Campaigns
          </Link>
        </div>
      </div>

      <div>
        <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(25, 15%, 55%)", marginBottom: "12px" }}>Recent Drafts</div>
        {drafts.length === 0 ? (
          <div className="border rounded-lg px-8 py-12 text-center" style={{ borderColor: "hsl(40, 20%, 88%)", borderStyle: "dashed" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "hsl(25, 15%, 55%)", marginBottom: "8px" }}>No drafts yet.</div>
            <div style={{ fontSize: "0.8rem", color: "hsl(25, 15%, 65%)" }}>Head to Generate to create your first post.</div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {drafts.map((post) => (
              <Link key={post.id} href="/posts" className="border rounded-lg px-5 py-4 block transition-colors hover:bg-black/[0.02]" style={{ borderColor: "hsl(40, 20%, 88%)", backgroundColor: "hsl(40, 33%, 98%)" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: PLATFORM_COLORS[post.platform] ?? "#A2A392" }} />
                  <span style={{ fontSize: "0.72rem", color: "hsl(25, 15%, 55%)", letterSpacing: "0.06em" }}>{post.platform}</span>
                  <span style={{ fontSize: "0.72rem", color: "hsl(25, 15%, 65%)", marginLeft: "auto" }}>{post.postType}</span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "hsl(20, 14%, 20%)", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {post.caption}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
