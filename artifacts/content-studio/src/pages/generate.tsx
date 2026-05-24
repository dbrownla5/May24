import { useState } from "react";
import { useCreatePost, useGenerateContent, getListPostsQueryKey, getGetPostStatsQueryKey } from "@workspace/api-client-react";
import { customFetch } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";

// ─── Shared constants ────────────────────────────────────────────────────────

const PLATFORMS = [
  "@thewelllivedcitizen",
  "@thewelllivedcloset",
  "@welldressedcitizen",
  "Facebook",
  "Poshmark",
  "eBay",
];

const PLATFORM_COLORS: Record<string, string> = {
  "@thewelllivedcitizen": "#A2A392",
  "@thewelllivedcloset": "#C9A87C",
  "@welldressedcitizen": "#8B9B8E",
  "Facebook": "#6B7DB3",
  "Poshmark": "#C06262",
  "eBay": "#6BA3BE",
};

const POST_TYPES = [
  "Launch Announcement",
  "Service Spotlight",
  "Behind the Scenes",
  "Client Story",
  "Resale Drop",
  "Brand Transition",
  "Seasonal",
];

const INK = "hsl(20, 14%, 15%)";
const PARCHMENT = "hsl(40, 33%, 98%)";
const SAGE_BORDER = "hsl(40, 20%, 88%)";
const MUTED = "hsl(25, 15%, 55%)";
const INPUT_BG = "hsl(40, 25%, 96%)";
const INPUT_BORDER = "hsl(40, 20%, 82%)";

// ─── Main component ───────────────────────────────────────────────────────────

export default function Generate() {
  const [tab, setTab] = useState<"single" | "plan">("single");

  return (
    <div className="px-5 py-8 md:px-10 md:py-10 max-w-3xl">
      <div className="mb-6">
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem, 5vw, 1.75rem)", fontWeight: 700, color: INK, marginBottom: "6px" }}>
          Generate
        </div>
        <div style={{ fontSize: "0.875rem", color: MUTED }}>
          Create a single caption or a full content plan.
        </div>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-0 mb-6 border-b" style={{ borderColor: SAGE_BORDER }}>
        {(["single", "plan"] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className="px-4 py-2.5 text-sm transition-colors relative"
            style={{ color: tab === t ? INK : MUTED, fontWeight: tab === t ? 600 : 400 }}
          >
            {t === "single" ? "Single Post" : "Content Plan"}
            {tab === t && (
              <span className="absolute bottom-0 left-0 right-0" style={{ height: "2px", backgroundColor: INK }} />
            )}
          </button>
        ))}
      </div>

      {tab === "single" ? <SinglePost /> : <ContentPlan />}
    </div>
  );
}

// ─── Single Post tab ──────────────────────────────────────────────────────────

function SinglePost() {
  const queryClient = useQueryClient();
  const [platform, setPlatform] = useState("");
  const [postType, setPostType] = useState("");
  const [context, setContext] = useState("");
  const [result, setResult] = useState<{ caption: string; hashtags: string; alternates: string[] } | null>(null);
  const [savedId, setSavedId] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeCaption, setActiveCaption] = useState("");

  const generate = useGenerateContent();
  const save = useCreatePost();

  async function handleGenerate() {
    if (!platform || !postType) return;
    setResult(null);
    setSavedId(null);
    const data = await generate.mutateAsync({ data: { platform, postType, context: context || undefined } });
    setResult(data as { caption: string; hashtags: string; alternates: string[] });
    setActiveCaption((data as { caption: string }).caption);
  }

  async function handleSave() {
    if (!result || !platform || !postType) return;
    const post = await save.mutateAsync({
      data: { platform, caption: activeCaption, postType, hashtags: result.hashtags, status: "draft" }
    });
    setSavedId(post.id);
    queryClient.invalidateQueries({ queryKey: getListPostsQueryKey() });
    queryClient.invalidateQueries({ queryKey: getGetPostStatsQueryKey() });
  }

  async function handleCopy() {
    const text = activeCaption + (result?.hashtags ? `\n\n${result.hashtags.split(",").map((h: string) => `#${h.trim()}`).join(" ")}` : "");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const canGenerate = platform && postType && !generate.isPending;

  return (
    <>
      <div className="border p-5 md:p-6 mb-6" style={{ borderColor: SAGE_BORDER, backgroundColor: PARCHMENT }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, display: "block", marginBottom: "8px" }}>Platform</label>
            <select value={platform} onChange={e => setPlatform(e.target.value)}
              className="w-full border px-3 py-2.5 text-sm outline-none"
              style={{ borderColor: INPUT_BORDER, backgroundColor: INPUT_BG, color: INK }}>
              <option value="">Select platform…</option>
              {PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, display: "block", marginBottom: "8px" }}>Post Type</label>
            <select value={postType} onChange={e => setPostType(e.target.value)}
              className="w-full border px-3 py-2.5 text-sm outline-none"
              style={{ borderColor: INPUT_BORDER, backgroundColor: INPUT_BG, color: INK }}>
              <option value="">Select type…</option>
              {POST_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, display: "block", marginBottom: "8px" }}>
            Context <span style={{ color: "hsl(25, 15%, 70%)", textTransform: "none", letterSpacing: 0 }}>(optional)</span>
          </label>
          <textarea value={context} onChange={e => setContext(e.target.value)}
            placeholder="Add details — service name, client situation, specific angle, items to mention…"
            rows={3} className="w-full border px-3 py-2.5 text-sm resize-none outline-none"
            style={{ borderColor: INPUT_BORDER, backgroundColor: INPUT_BG, color: INK }} />
        </div>
        <button onClick={handleGenerate} disabled={!canGenerate}
          className="w-full md:w-auto px-6 py-3 text-sm font-semibold transition-opacity"
          style={{ backgroundColor: canGenerate ? INK : "hsl(20, 14%, 75%)", color: PARCHMENT, cursor: canGenerate ? "pointer" : "not-allowed" }}>
          {generate.isPending ? "Generating…" : "Generate Caption"}
        </button>
        {generate.isError && (
          <p style={{ fontSize: "0.8rem", color: "hsl(0, 60%, 50%)", marginTop: "8px" }}>Generation failed. Check that the API server is running.</p>
        )}
      </div>

      {result && (
        <div className="border p-5 md:p-6" style={{ borderColor: SAGE_BORDER, backgroundColor: PARCHMENT }}>
          <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, marginBottom: "12px" }}>Caption</div>
          <textarea value={activeCaption} onChange={e => setActiveCaption(e.target.value)} rows={8}
            className="w-full border px-3 py-3 text-sm resize-none outline-none mb-4"
            style={{ borderColor: INPUT_BORDER, backgroundColor: "hsl(40, 25%, 95%)", color: "hsl(20, 14%, 18%)", lineHeight: 1.7 }} />

          {result.hashtags && (
            <div className="mb-4 p-3" style={{ backgroundColor: "hsl(40, 25%, 93%)" }}>
              <div style={{ fontSize: "0.7rem", color: MUTED, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Hashtags</div>
              <div style={{ fontSize: "0.8rem", color: "hsl(20, 14%, 30%)" }}>
                {result.hashtags.split(",").map((h: string) => `#${h.trim()}`).join(" ")}
              </div>
            </div>
          )}

          {result.alternates && result.alternates.length > 0 && (
            <div className="mb-5">
              <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, marginBottom: "10px" }}>Alternates — tap to use</div>
              <div className="flex flex-col gap-2">
                {result.alternates.map((alt: string, i: number) => (
                  <button key={i} onClick={() => setActiveCaption(alt)}
                    className="text-left border px-4 py-3 text-sm transition-colors hover:bg-black/[0.03]"
                    style={{ borderColor: "hsl(40, 20%, 85%)", color: "hsl(20, 14%, 25%)", lineHeight: 1.6 }}>{alt}</button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 md:flex md:gap-3">
            <button onClick={handleCopy} className="px-4 py-2.5 text-sm border transition-colors hover:bg-black/5"
              style={{ borderColor: INPUT_BORDER, color: "hsl(20, 14%, 25%)" }}>
              {copied ? "Copied!" : "Copy"}
            </button>
            <button onClick={handleSave} disabled={save.isPending || !!savedId} className="px-4 py-2.5 text-sm font-semibold"
              style={{ backgroundColor: savedId ? "hsl(140, 20%, 45%)" : INK, color: PARCHMENT }}>
              {savedId ? "Saved" : save.isPending ? "Saving…" : "Save to Library"}
            </button>
            <button onClick={handleGenerate} className="col-span-2 md:col-span-1 md:ml-auto px-4 py-2.5 text-sm border transition-colors hover:bg-black/5"
              style={{ borderColor: INPUT_BORDER, color: MUTED }}>
              Regenerate
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Content Plan tab ─────────────────────────────────────────────────────────

type PlanPost = {
  date: string;
  platform: string;
  postType: string;
  caption: string;
  hashtags: string;
};

function ContentPlan() {
  const queryClient = useQueryClient();
  const [theme, setTheme] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["@thewelllivedcitizen", "Facebook"]);
  const [duration, setDuration] = useState<7 | 14 | 30>(14);
  const [context, setContext] = useState("");
  const [plan, setPlan] = useState<PlanPost[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [savingAll, setSavingAll] = useState(false);
  const [allSaved, setAllSaved] = useState(false);

  const save = useCreatePost();

  function togglePlatform(p: string) {
    setSelectedPlatforms(prev =>
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  }

  async function handleGeneratePlan() {
    if (!theme.trim() || selectedPlatforms.length === 0) return;
    setLoading(true);
    setError(null);
    setPlan(null);
    setSavedIds(new Set());
    setAllSaved(false);

    try {
      const data = await customFetch<{ plan: PlanPost[] }>("/api/content/plan", {
        method: "POST",
        body: JSON.stringify({ theme: theme.trim(), platforms: selectedPlatforms, duration, context: context || undefined }),
        headers: { "Content-Type": "application/json" },
      });
      setPlan(data.plan ?? []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to generate plan. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function savePost(post: PlanPost, key: string) {
    await save.mutateAsync({
      data: { platform: post.platform, caption: post.caption, postType: post.postType, hashtags: post.hashtags, status: "draft",
        scheduledDate: post.date }
    });
    setSavedIds(prev => new Set([...prev, key]));
    queryClient.invalidateQueries({ queryKey: getListPostsQueryKey() });
    queryClient.invalidateQueries({ queryKey: getGetPostStatsQueryKey() });
  }

  async function handleSaveAll() {
    if (!plan) return;
    setSavingAll(true);
    for (let i = 0; i < plan.length; i++) {
      const post = plan[i];
      const key = `${post.date}-${post.platform}-${i}`;
      if (!savedIds.has(key)) {
        try { await savePost(post, key); } catch { /* continue */ }
      }
    }
    setSavingAll(false);
    setAllSaved(true);
  }

  // Group plan by date
  const byDate: Record<string, Array<PlanPost & { key: string }>> = {};
  plan?.forEach((post, i) => {
    const key = `${post.date}-${post.platform}-${i}`;
    if (!byDate[post.date]) byDate[post.date] = [];
    byDate[post.date].push({ ...post, key });
  });
  const sortedDates = Object.keys(byDate).sort();

  const canGenerate = theme.trim() && selectedPlatforms.length > 0 && !loading;

  return (
    <>
      {/* Config form */}
      <div className="border p-5 md:p-6 mb-6" style={{ borderColor: SAGE_BORDER, backgroundColor: PARCHMENT }}>
        {/* Theme */}
        <div className="mb-4">
          <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, display: "block", marginBottom: "8px" }}>
            Campaign Theme
          </label>
          <input value={theme} onChange={e => setTheme(e.target.value)}
            placeholder="e.g. Business Launch, Fall Closet Drop, House Reset Season…"
            className="w-full border px-3 py-2.5 text-sm outline-none"
            style={{ borderColor: INPUT_BORDER, backgroundColor: INPUT_BG, color: INK }} />
        </div>

        {/* Platforms */}
        <div className="mb-4">
          <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, display: "block", marginBottom: "10px" }}>
            Platforms
          </label>
          <div className="flex flex-wrap gap-2">
            {PLATFORMS.map(p => {
              const active = selectedPlatforms.includes(p);
              return (
                <button key={p} onClick={() => togglePlatform(p)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs border transition-colors"
                  style={{
                    backgroundColor: active ? INK : INPUT_BG,
                    borderColor: active ? INK : INPUT_BORDER,
                    color: active ? PARCHMENT : "hsl(20, 14%, 30%)",
                  }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: active ? "rgba(255,255,255,0.6)" : (PLATFORM_COLORS[p] ?? "#A2A392") }} />
                  {p}
                </button>
              );
            })}
          </div>
        </div>

        {/* Duration */}
        <div className="mb-4">
          <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, display: "block", marginBottom: "10px" }}>
            Duration
          </label>
          <div className="flex gap-2">
            {([7, 14, 30] as const).map(d => (
              <button key={d} onClick={() => setDuration(d)}
                className="px-4 py-2 text-sm border transition-colors"
                style={{
                  backgroundColor: duration === d ? INK : INPUT_BG,
                  borderColor: duration === d ? INK : INPUT_BORDER,
                  color: duration === d ? PARCHMENT : "hsl(20, 14%, 30%)",
                }}>
                {d === 7 ? "1 week" : d === 14 ? "2 weeks" : "1 month"}
              </button>
            ))}
          </div>
        </div>

        {/* Context */}
        <div className="mb-4">
          <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, display: "block", marginBottom: "8px" }}>
            Context <span style={{ color: "hsl(25, 15%, 70%)", textTransform: "none", letterSpacing: 0 }}>(optional)</span>
          </label>
          <textarea value={context} onChange={e => setContext(e.target.value)}
            placeholder="Any specifics — services to highlight, dates to work around, tone direction, items to feature…"
            rows={2} className="w-full border px-3 py-2.5 text-sm resize-none outline-none"
            style={{ borderColor: INPUT_BORDER, backgroundColor: INPUT_BG, color: INK }} />
        </div>

        <button onClick={handleGeneratePlan} disabled={!canGenerate}
          className="w-full md:w-auto px-6 py-3 text-sm font-semibold transition-opacity"
          style={{ backgroundColor: canGenerate ? INK : "hsl(20, 14%, 75%)", color: PARCHMENT, cursor: canGenerate ? "pointer" : "not-allowed" }}>
          {loading ? "Building your plan…" : "Generate Content Plan"}
        </button>

        {loading && (
          <p style={{ fontSize: "0.8rem", color: MUTED, marginTop: "10px" }}>
            This takes 15–30 seconds — the AI is writing every caption from scratch.
          </p>
        )}
        {error && (
          <p style={{ fontSize: "0.8rem", color: "hsl(0, 60%, 50%)", marginTop: "8px" }}>{error}</p>
        )}
      </div>

      {/* Plan results */}
      {plan && plan.length > 0 && (
        <div>
          {/* Header + bulk save */}
          <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 600, color: INK }}>
                {plan.length} posts across {sortedDates.length} days
              </div>
              <div style={{ fontSize: "0.78rem", color: MUTED, marginTop: "2px" }}>
                Review and edit, then save to your library.
              </div>
            </div>
            <button onClick={handleSaveAll} disabled={savingAll || allSaved}
              className="shrink-0 px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ backgroundColor: allSaved ? "hsl(140, 20%, 45%)" : INK, color: PARCHMENT }}>
              {allSaved ? "All Saved ✓" : savingAll ? "Saving…" : "Save All to Library"}
            </button>
          </div>

          {/* Day-by-day */}
          <div className="flex flex-col gap-6">
            {sortedDates.map(date => (
              <div key={date}>
                {/* Date header */}
                <div className="flex items-center gap-3 mb-3">
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", fontWeight: 600, color: INK }}>
                    {new Date(date + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                  </div>
                  <div className="flex-1 border-t" style={{ borderColor: SAGE_BORDER }} />
                </div>

                {/* Posts on this day */}
                <div className="flex flex-col gap-3">
                  {byDate[date].map(post => (
                    <PlanPostCard
                      key={post.key}
                      post={post}
                      isSaved={savedIds.has(post.key)}
                      onSave={() => savePost(post, post.key)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {plan && plan.length === 0 && (
        <div className="border px-8 py-10 text-center" style={{ borderColor: SAGE_BORDER, borderStyle: "dashed" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: MUTED }}>No posts were generated. Try a different theme or duration.</div>
        </div>
      )}
    </>
  );
}

// ─── Plan post card ───────────────────────────────────────────────────────────

function PlanPostCard({ post, isSaved, onSave }: { post: PlanPost; isSaved: boolean; onSave: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [editedCaption, setEditedCaption] = useState(post.caption);

  async function handleCopy() {
    const text = editedCaption + (post.hashtags ? `\n\n${post.hashtags.split(",").map((h: string) => `#${h.trim()}`).join(" ")}` : "");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="border overflow-hidden" style={{ borderColor: SAGE_BORDER, backgroundColor: PARCHMENT }}>
      {/* Collapsed row */}
      <div className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-black/[0.015] transition-colors"
        onClick={() => setExpanded(v => !v)}>
        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: PLATFORM_COLORS[post.platform] ?? "#A2A392" }} />
        <span className="text-xs shrink-0 hidden sm:block" style={{ color: MUTED, minWidth: "130px" }}>{post.platform}</span>
        <span className="text-xs shrink-0" style={{ color: "hsl(25, 15%, 65%)", backgroundColor: "hsl(40, 25%, 92%)", padding: "2px 8px" }}>{post.postType}</span>
        <p className="flex-1 text-sm overflow-hidden text-ellipsis whitespace-nowrap" style={{ color: "hsl(20, 14%, 22%)" }}>{editedCaption}</p>
        {isSaved && <span className="shrink-0 text-xs" style={{ color: "hsl(140, 30%, 42%)" }}>✓ saved</span>}
        <span style={{ color: MUTED, fontSize: "0.7rem" }}>{expanded ? "▲" : "▼"}</span>
      </div>

      {/* Expanded */}
      {expanded && (
        <div className="px-4 pb-4 border-t" style={{ borderColor: "hsl(40, 20%, 90%)" }}>
          {/* Platform on mobile */}
          <div className="sm:hidden flex items-center gap-2 pt-3 mb-2">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: PLATFORM_COLORS[post.platform] ?? "#A2A392" }} />
            <span className="text-xs" style={{ color: MUTED }}>{post.platform}</span>
          </div>
          <div className="pt-3 mb-3">
            <textarea value={editedCaption} onChange={e => setEditedCaption(e.target.value)} rows={7}
              className="w-full border px-3 py-3 text-sm resize-none outline-none"
              style={{ borderColor: INPUT_BORDER, backgroundColor: "hsl(40, 25%, 95%)", color: "hsl(20, 14%, 18%)", lineHeight: 1.7 }} />
          </div>
          {post.hashtags && (
            <div className="mb-3 p-2.5" style={{ backgroundColor: "hsl(40, 25%, 93%)", fontSize: "0.78rem", color: "hsl(20, 14%, 35%)" }}>
              {post.hashtags.split(",").map((h: string) => `#${h.trim()}`).join(" ")}
            </div>
          )}
          <div className="flex gap-2 flex-wrap">
            <button onClick={handleCopy} className="px-3 py-2 text-xs border transition-colors hover:bg-black/5"
              style={{ borderColor: INPUT_BORDER, color: "hsl(20, 14%, 30%)" }}>
              {copied ? "Copied!" : "Copy"}
            </button>
            <button onClick={onSave} disabled={isSaved}
              className="px-3 py-2 text-xs font-semibold"
              style={{ backgroundColor: isSaved ? "hsl(140, 20%, 45%)" : INK, color: PARCHMENT }}>
              {isSaved ? "Saved ✓" : "Save to Library"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
