import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { listPosts, getListPostsQueryKey, useUpdatePost, useDeletePost } from "@workspace/api-client-react";

const PLATFORMS = ["All", "@thewelllivedcitizen", "@thewelllivedcloset", "@welldressedcitizen", "Facebook", "Poshmark", "eBay"];
const STATUSES = ["All", "draft", "scheduled", "published"];

const PLATFORM_COLORS: Record<string, string> = {
  "@thewelllivedcitizen": "#A2A392",
  "@thewelllivedcloset": "#C9A87C",
  "@welldressedcitizen": "#8B9B8E",
  "Facebook": "#6B7DB3",
  "Poshmark": "#C06262",
  "eBay": "#6BA3BE",
};

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  draft: { bg: "hsl(40, 25%, 90%)", color: "hsl(25, 15%, 45%)" },
  scheduled: { bg: "hsl(210, 30%, 90%)", color: "hsl(210, 40%, 35%)" },
  published: { bg: "hsl(140, 25%, 88%)", color: "hsl(140, 30%, 32%)" },
};

export default function Posts() {
  const queryClient = useQueryClient();
  const [platformFilter, setPlatformFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editCaption, setEditCaption] = useState("");

  const params = {
    ...(platformFilter !== "All" ? { platform: platformFilter } : {}),
    ...(statusFilter !== "All" ? { status: statusFilter } : {}),
  };

  const { data: posts, isLoading } = useQuery({
    queryKey: getListPostsQueryKey(params),
    queryFn: () => listPosts(params),
  });

  const updatePost = useUpdatePost();
  const deletePost = useDeletePost();

  async function handleStatusChange(id: number, status: string) {
    await updatePost.mutateAsync({ id, data: { status } });
    queryClient.invalidateQueries({ queryKey: getListPostsQueryKey() });
  }

  async function handleSaveEdit(id: number) {
    await updatePost.mutateAsync({ id, data: { caption: editCaption } });
    queryClient.invalidateQueries({ queryKey: getListPostsQueryKey() });
    setEditingId(null);
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this post?")) return;
    await deletePost.mutateAsync({ id });
    queryClient.invalidateQueries({ queryKey: getListPostsQueryKey() });
    if (expandedId === id) setExpandedId(null);
  }

  return (
    <div className="px-10 py-10 max-w-4xl">
      <div className="mb-8">
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "hsl(20, 14%, 15%)", marginBottom: "6px" }}>
          Post Library
        </div>
        <div style={{ fontSize: "0.875rem", color: "hsl(25, 15%, 50%)" }}>
          All your drafts, scheduled posts, and published content.
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <div>
          <select
            value={platformFilter}
            onChange={e => setPlatformFilter(e.target.value)}
            className="border rounded px-3 py-1.5 text-sm outline-none"
            style={{ borderColor: "hsl(40, 20%, 82%)", backgroundColor: "hsl(40, 25%, 96%)", color: "hsl(20, 14%, 20%)" }}
          >
            {PLATFORMS.map(p => <option key={p} value={p}>{p === "All" ? "All Platforms" : p}</option>)}
          </select>
        </div>
        <div>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="border rounded px-3 py-1.5 text-sm outline-none"
            style={{ borderColor: "hsl(40, 20%, 82%)", backgroundColor: "hsl(40, 25%, 96%)", color: "hsl(20, 14%, 20%)" }}
          >
            {STATUSES.map(s => <option key={s} value={s}>{s === "All" ? "All Statuses" : s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
          </select>
        </div>
        <div style={{ marginLeft: "auto", fontSize: "0.8rem", color: "hsl(25, 15%, 60%)", alignSelf: "center" }}>
          {posts?.length ?? 0} posts
        </div>
      </div>

      {/* List */}
      {isLoading ? (
        <div style={{ fontSize: "0.875rem", color: "hsl(25, 15%, 55%)" }}>Loading…</div>
      ) : posts?.length === 0 ? (
        <div className="border rounded-lg px-8 py-12 text-center" style={{ borderColor: "hsl(40, 20%, 88%)", borderStyle: "dashed" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "hsl(25, 15%, 55%)" }}>No posts match this filter.</div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {posts?.map(post => {
            const isExpanded = expandedId === post.id;
            const isEditing = editingId === post.id;
            const statusStyle = STATUS_STYLES[post.status] ?? STATUS_STYLES.draft;

            return (
              <div key={post.id} className="border rounded-lg overflow-hidden" style={{ borderColor: "hsl(40, 20%, 88%)", backgroundColor: "hsl(40, 33%, 98%)" }}>
                {/* Row */}
                <div
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-black/[0.015] transition-colors"
                  onClick={() => setExpandedId(isExpanded ? null : post.id)}
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: PLATFORM_COLORS[post.platform] ?? "#A2A392" }} />
                  <span style={{ fontSize: "0.72rem", color: "hsl(25, 15%, 50%)", minWidth: "170px" }}>{post.platform}</span>
                  <p style={{ fontSize: "0.85rem", color: "hsl(20, 14%, 20%)", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {post.caption}
                  </p>
                  <span className="px-2 py-0.5 rounded-full text-xs shrink-0" style={{ backgroundColor: statusStyle.bg, color: statusStyle.color }}>
                    {post.status}
                  </span>
                  <span style={{ fontSize: "0.7rem", color: "hsl(25, 15%, 65%)", minWidth: "80px", textAlign: "right" }}>
                    {post.scheduledDate ? new Date(post.scheduledDate).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "—"}
                  </span>
                </div>

                {/* Expanded */}
                {isExpanded && (
                  <div className="px-5 pb-4 border-t" style={{ borderColor: "hsl(40, 20%, 90%)" }}>
                    <div className="pt-4 mb-3">
                      {isEditing ? (
                        <textarea
                          value={editCaption}
                          onChange={e => setEditCaption(e.target.value)}
                          rows={6}
                          className="w-full border rounded px-3 py-2 text-sm resize-none outline-none"
                          style={{ borderColor: "hsl(40, 20%, 82%)", backgroundColor: "hsl(40, 25%, 95%)", color: "hsl(20, 14%, 18%)", lineHeight: 1.7 }}
                        />
                      ) : (
                        <p style={{ fontSize: "0.875rem", color: "hsl(20, 14%, 18%)", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{post.caption}</p>
                      )}
                    </div>

                    {post.hashtags && !isEditing && (
                      <div className="mb-3 p-2.5 rounded" style={{ backgroundColor: "hsl(40, 25%, 93%)", fontSize: "0.78rem", color: "hsl(20, 14%, 35%)" }}>
                        {post.hashtags.split(",").map((h: string) => `#${h.trim()}`).join(" ")}
                      </div>
                    )}

                    <div className="flex gap-2 flex-wrap mt-3">
                      {isEditing ? (
                        <>
                          <button onClick={() => handleSaveEdit(post.id)} className="px-3 py-1.5 rounded text-xs font-semibold" style={{ backgroundColor: "hsl(20, 14%, 15%)", color: "hsl(40, 33%, 98%)" }}>
                            Save
                          </button>
                          <button onClick={() => setEditingId(null)} className="px-3 py-1.5 rounded text-xs border" style={{ borderColor: "hsl(40, 20%, 82%)", color: "hsl(20, 14%, 35%)" }}>
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => { setEditingId(post.id); setEditCaption(post.caption); }} className="px-3 py-1.5 rounded text-xs border transition-colors hover:bg-black/5" style={{ borderColor: "hsl(40, 20%, 82%)", color: "hsl(20, 14%, 30%)" }}>
                            Edit
                          </button>
                          {post.status === "draft" && (
                            <button onClick={() => handleStatusChange(post.id, "scheduled")} className="px-3 py-1.5 rounded text-xs border transition-colors hover:bg-black/5" style={{ borderColor: "hsl(40, 20%, 82%)", color: "hsl(210, 40%, 40%)" }}>
                              Mark Scheduled
                            </button>
                          )}
                          {post.status === "scheduled" && (
                            <button onClick={() => handleStatusChange(post.id, "published")} className="px-3 py-1.5 rounded text-xs border transition-colors hover:bg-black/5" style={{ borderColor: "hsl(40, 20%, 82%)", color: "hsl(140, 35%, 38%)" }}>
                              Mark Published
                            </button>
                          )}
                          <button onClick={() => handleDelete(post.id)} className="px-3 py-1.5 rounded text-xs border transition-colors hover:bg-red-50 ml-auto" style={{ borderColor: "hsl(0, 40%, 82%)", color: "hsl(0, 50%, 55%)" }}>
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
