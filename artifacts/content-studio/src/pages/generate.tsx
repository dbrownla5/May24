import { useState } from "react";
import { useCreatePost, useGenerateContent, getListPostsQueryKey, getGetPostStatsQueryKey } from "@workspace/api-client-react";
import { customFetch } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { useGenerationHistory, type HistoryItem } from "@/hooks/use-generation-history";

// ─── Shared constants ────────────────────────────────────────────────────────

const PLATFORMS = [
  "@thewelllivedcitizen",
  "@thewelllivedcloset",
  "@welldressedcitizen",
  "Facebook",
  "Pinterest",
  "Nextdoor",
  "Google Business Posts",
  "Poshmark",
  "eBay",
];

const PLATFORM_COLORS: Record<string, string> = {
  "@thewelllivedcitizen": "#A2A392",
  "@thewelllivedcloset": "#C9A87C",
  "@welldressedcitizen": "#8B9B8E",
  "Facebook": "#6B7DB3",
  "Pinterest": "#B95A5A",
  "Nextdoor": "#5E8B6B",
  "Google Business Posts": "#7A8FA8",
  "Poshmark": "#C06262",
  "eBay": "#6BA3BE",
};

const POST_TYPES = [
  "Problem Post",
  "Object Post",
  "Process Post",
  "Launch Announcement",
  "Service Spotlight",
  "Behind the Scenes",
  "Client Story",
  "Resale Drop",
  "Brand Transition",
  "Seasonal",
];

const TONES = [
  { value: "Direct", label: "Direct", description: "Short declarative sentences. No softening." },
  { value: "Warm", label: "Warm", description: "Personal and grounded — still capable, not soft." },
  { value: "Story-driven", label: "Story-driven", description: "Lead with a real situation or moment." },
  { value: "Practical", label: "Practical", description: "Operational clarity — what it is, what you get." },
];

const INK = "hsl(20, 14%, 15%)";
const PARCHMENT = "hsl(40, 33%, 98%)";
const SAGE_BORDER = "hsl(40, 20%, 88%)";
const MUTED = "hsl(25, 15%, 55%)";
const INPUT_BG = "hsl(40, 25%, 96%)";
const INPUT_BORDER = "hsl(40, 20%, 82%)";

// ─── Main component ───────────────────────────────────────────────────────────

type LoadedEntry = {
  platform: string;
  postType: string;
  tone: string;
  context: string;
  result: { caption: string; hashtags: string; alternates: string[] };
};

export default function Generate() {
  const [tab, setTab] = useState<"single" | "plan" | "history">("single");
  const [loadedEntry, setLoadedEntry] = useState<LoadedEntry | null>(null);
  const { history, addItem, removeItem, clearHistory } = useGenerationHistory();

  function handleLoadFromHistory(item: HistoryItem) {
    setLoadedEntry({
      platform: item.platform,
      postType: item.postType,
      tone: item.tone,
      context: item.context ?? "",
      result: { caption: item.caption, hashtags: item.hashtags, alternates: item.alternates },
    });
    setTab("single");
  }

  const historyCount = history.length;

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
        {([
          { id: "single", label: "Single Post" },
          { id: "plan", label: "Content Plan" },
          { id: "history", label: historyCount > 0 ? `History (${historyCount})` : "History" },
        ] as const).map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className="px-4 py-2.5 text-sm transition-colors relative"
            style={{ color: tab === t.id ? INK : MUTED, fontWeight: tab === t.id ? 600 : 400 }}
          >
            {t.label}
            {tab === t.id && (
              <span className="absolute bottom-0 left-0 right-0" style={{ height: "2px", backgroundColor: INK }} />
            )}
          </button>
        ))}
      </div>

      {tab === "single" && (
        <SinglePost
          onGenerated={addItem}
          loadedEntry={loadedEntry}
          onLoadedEntryConsumed={() => setLoadedEntry(null)}
        />
      )}
      {tab === "plan" && <ContentPlan />}
      {tab === "history" && (
        <GenerationHistory
          history={history}
          onLoad={handleLoadFromHistory}
          onRemove={removeItem}
          onClear={clearHistory}
        />
      )}
    </div>
  );
}

// ─── Single Post tab ──────────────────────────────────────────────────────────

type SinglePostProps = {
  onGenerated: (item: Omit<HistoryItem, "id" | "timestamp">) => void;
  loadedEntry: LoadedEntry | null;
  onLoadedEntryConsumed: () => void;
};

function SinglePost({ onGenerated, loadedEntry, onLoadedEntryConsumed }: SinglePostProps) {
  const queryClient = useQueryClient();
  const [platform, setPlatform] = useState(loadedEntry?.platform ?? "");
  const [postType, setPostType] = useState(loadedEntry?.postType ?? "");
  const [tone, setTone] = useState(loadedEntry?.tone ?? "Direct");
  const [context, setContext] = useState(loadedEntry?.context ?? "");
  const [result, setResult] = useState<{ caption: string; hashtags: string; alternates: string[] } | null>(
    loadedEntry?.result ?? null
  );
  const [savedId, setSavedId] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeCaption, setActiveCaption] = useState(loadedEntry?.result.caption ?? "");
  const [isRestored, setIsRestored] = useState(!!loadedEntry);

  // When a new entry is loaded from history, apply it
  if (loadedEntry && !isRestored) {
    setPlatform(loadedEntry.platform);
    setPostType(loadedEntry.postType);
    setTone(loadedEntry.tone);
    setContext(loadedEntry.context);
    setResult(loadedEntry.result);
    setActiveCaption(loadedEntry.result.caption);
    setSavedId(null);
    setIsRestored(true);
    onLoadedEntryConsumed();
  }

  const generate = useGenerateContent();
  const save = useCreatePost();

  async function handleGenerate() {
    if (!platform || !postType) return;
    setResult(null);
    setSavedId(null);
    setIsRestored(false);
    const data = await generate.mutateAsync({ data: { platform, postType, context: context || undefined, tone } });
    const typed = data as { caption: string; hashtags: string; alternates: string[] };
    setResult(typed);
    setActiveCaption(typed.caption);
    onGenerated({
      platform,
      postType,
      tone,
      context: context || undefined,
      caption: typed.caption,
      hashtags: typed.hashtags,
      alternates: typed.alternates,
    });
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
      {isRestored && (
        <div className="mb-4 px-4 py-2.5 flex items-center gap-2" style={{ backgroundColor: "hsl(40, 30%, 93%)", borderLeft: `3px solid ${INK}` }}>
          <span style={{ fontSize: "0.78rem", color: INK }}>Loaded from history — edit and regenerate, or copy as-is.</span>
        </div>
      )}

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
        {/* Tone */}
        <div className="mb-4">
          <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, display: "block", marginBottom: "10px" }}>Tone</label>
          <div className="flex flex-wrap gap-2">
            {TONES.map(t => (
              <button key={t.value} onClick={() => setTone(t.value)} title={t.description}
                className="px-3 py-1.5 text-xs border transition-colors"
                style={{
                  backgroundColor: tone === t.value ? INK : INPUT_BG,
                  borderColor: tone === t.value ? INK : INPUT_BORDER,
                  color: tone === t.value ? PARCHMENT : "hsl(20, 14%, 30%)",
                }}>
                {t.label}
              </button>
            ))}
          </div>
          <div style={{ fontSize: "0.72rem", color: MUTED, marginTop: "6px" }}>
            {TONES.find(t => t.value === tone)?.description}
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

// ─── Generation History tab ───────────────────────────────────────────────────

type GenerationHistoryProps = {
  history: HistoryItem[];
  onLoad: (item: HistoryItem) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
};

function GenerationHistory({ history, onLoad, onRemove, onClear }: GenerationHistoryProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [confirmClear, setConfirmClear] = useState(false);

  async function handleCopy(item: HistoryItem) {
    const text = item.caption + (item.hashtags ? `\n\n${item.hashtags.split(",").map(h => `#${h.trim()}`).join(" ")}` : "");
    await navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  function formatTimestamp(ts: number): string {
    const d = new Date(ts);
    const now = new Date();
    const diffMs = now.getTime() - ts;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  if (history.length === 0) {
    return (
      <div className="border px-8 py-12 text-center" style={{ borderColor: SAGE_BORDER, borderStyle: "dashed" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: MUTED, marginBottom: "8px" }}>
          No generations yet
        </div>
        <div style={{ fontSize: "0.82rem", color: MUTED }}>
          Every caption you generate on the Single Post tab is saved here automatically.
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header row */}
      <div className="flex items-center justify-between mb-5">
        <div style={{ fontSize: "0.8rem", color: MUTED }}>
          {history.length} generation{history.length !== 1 ? "s" : ""} saved
        </div>
        <div className="flex items-center gap-2">
          {confirmClear ? (
            <>
              <span style={{ fontSize: "0.78rem", color: MUTED }}>Clear all?</span>
              <button
                onClick={() => { onClear(); setConfirmClear(false); }}
                className="px-3 py-1.5 text-xs border"
                style={{ borderColor: "hsl(0, 55%, 60%)", color: "hsl(0, 55%, 45%)" }}>
                Yes, clear
              </button>
              <button
                onClick={() => setConfirmClear(false)}
                className="px-3 py-1.5 text-xs border"
                style={{ borderColor: INPUT_BORDER, color: MUTED }}>
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setConfirmClear(true)}
              className="px-3 py-1.5 text-xs border transition-colors hover:bg-black/5"
              style={{ borderColor: INPUT_BORDER, color: MUTED }}>
              Clear history
            </button>
          )}
        </div>
      </div>

      {/* History items */}
      <div className="flex flex-col gap-3">
        {history.map(item => (
          <HistoryCard
            key={item.id}
            item={item}
            isCopied={copiedId === item.id}
            onCopy={() => handleCopy(item)}
            onLoad={() => onLoad(item)}
            onRemove={() => onRemove(item.id)}
            formatTimestamp={formatTimestamp}
          />
        ))}
      </div>
    </>
  );
}

// ─── History card ─────────────────────────────────────────────────────────────

type HistoryCardProps = {
  item: HistoryItem;
  isCopied: boolean;
  onCopy: () => void;
  onLoad: () => void;
  onRemove: () => void;
  formatTimestamp: (ts: number) => string;
};

function HistoryCard({ item, isCopied, onCopy, onLoad, onRemove, formatTimestamp }: HistoryCardProps) {
  const [expanded, setExpanded] = useState(false);
  const platformColor = PLATFORM_COLORS[item.platform] ?? "#A2A392";

  return (
    <div className="border overflow-hidden" style={{ borderColor: SAGE_BORDER, backgroundColor: PARCHMENT }}>
      {/* Collapsed header */}
      <div
        className="flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-black/[0.015] transition-colors"
        onClick={() => setExpanded(v => !v)}
      >
        <span className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: platformColor }} />
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span style={{ fontSize: "0.82rem", fontWeight: 600, color: INK }}>{item.platform}</span>
            <span style={{ fontSize: "0.75rem", color: MUTED }}>{item.postType}</span>
            <span style={{ fontSize: "0.72rem", color: "hsl(25, 15%, 68%)", marginLeft: "auto" }}>{formatTimestamp(item.timestamp)}</span>
          </div>
          {!expanded && (
            <div style={{ fontSize: "0.8rem", color: "hsl(20, 14%, 35%)", marginTop: "3px", lineHeight: 1.5 }}
              className="line-clamp-2">
              {item.caption}
            </div>
          )}
        </div>
        <span style={{ fontSize: "0.65rem", color: MUTED, flexShrink: 0, marginTop: "2px" }}>
          {expanded ? "▲" : "▼"}
        </span>
      </div>

      {/* Expanded body */}
      {expanded && (
        <div className="px-4 pb-4 border-t" style={{ borderColor: SAGE_BORDER }}>
          {/* Meta row */}
          <div className="flex items-center gap-3 pt-3 pb-3 flex-wrap">
            <span className="px-2 py-0.5 text-xs" style={{ backgroundColor: "hsl(40, 25%, 90%)", color: INK }}>
              {item.tone}
            </span>
            {item.context && (
              <span style={{ fontSize: "0.75rem", color: MUTED, fontStyle: "italic" }} className="truncate max-w-xs">
                "{item.context}"
              </span>
            )}
          </div>

          {/* Caption */}
          <div style={{ fontSize: "0.84rem", color: "hsl(20, 14%, 20%)", lineHeight: 1.7, whiteSpace: "pre-wrap", marginBottom: "12px" }}>
            {item.caption}
          </div>

          {/* Hashtags */}
          {item.hashtags && (
            <div className="mb-3 p-2.5" style={{ backgroundColor: "hsl(40, 25%, 93%)" }}>
              <div style={{ fontSize: "0.72rem", color: MUTED, marginBottom: "3px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Hashtags</div>
              <div style={{ fontSize: "0.78rem", color: "hsl(20, 14%, 35%)" }}>
                {item.hashtags.split(",").map(h => `#${h.trim()}`).join(" ")}
              </div>
            </div>
          )}

          {/* Alternates */}
          {item.alternates && item.alternates.length > 0 && (
            <div className="mb-4">
              <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: MUTED, marginBottom: "6px" }}>Alternates</div>
              <div className="flex flex-col gap-1.5">
                {item.alternates.map((alt, i) => (
                  <div key={i} className="px-3 py-2 border" style={{ borderColor: "hsl(40, 20%, 87%)", fontSize: "0.8rem", color: "hsl(20, 14%, 30%)", lineHeight: 1.5 }}>
                    {alt}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={onCopy}
              className="px-4 py-2 text-sm border transition-colors hover:bg-black/5"
              style={{ borderColor: INPUT_BORDER, color: "hsl(20, 14%, 25%)" }}>
              {isCopied ? "Copied!" : "Copy caption"}
            </button>
            <button
              onClick={onLoad}
              className="px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ backgroundColor: INK, color: PARCHMENT }}>
              Load into editor
            </button>
            <button
              onClick={onRemove}
              className="ml-auto px-3 py-2 text-xs border transition-colors hover:bg-black/5"
              style={{ borderColor: INPUT_BORDER, color: MUTED }}>
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
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
  const [tone, setTone] = useState("Direct");
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
        body: JSON.stringify({ theme: theme.trim(), platforms: selectedPlatforms, duration, tone, context: context || undefined }),
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

        {/* Tone */}
        <div className="mb-4">
          <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, display: "block", marginBottom: "10px" }}>Tone</label>
          <div className="flex flex-wrap gap-2">
            {TONES.map(t => (
              <button key={t.value} onClick={() => setTone(t.value)} title={t.description}
                className="px-3 py-1.5 text-xs border transition-colors"
                style={{
                  backgroundColor: tone === t.value ? INK : INPUT_BG,
                  borderColor: tone === t.value ? INK : INPUT_BORDER,
                  color: tone === t.value ? PARCHMENT : "hsl(20, 14%, 30%)",
                }}>
                {t.label}
              </button>
            ))}
          </div>
          <div style={{ fontSize: "0.72rem", color: MUTED, marginTop: "6px" }}>
            {TONES.find(t => t.value === tone)?.description}
          </div>
        </div>

        {/* Context */}
        <div className="mb-4">
          <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, display: "block", marginBottom: "8px" }}>
            Context <span style={{ color: "hsl(25, 15%, 70%)", textTransform: "none", letterSpacing: 0 }}>(optional)</span>
          </label>
          <textarea value={context} onChange={e => setContext(e.target.value)}
            placeholder="Any specifics — services to highlight, dates to work around, items to feature…"
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
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <span style={{ fontSize: "0.82rem", fontWeight: 600, color: INK }}>{post.platform}</span>
            <span style={{ fontSize: "0.75rem", color: MUTED }}>{post.postType}</span>
          </div>
          {!expanded && (
            <div style={{ fontSize: "0.78rem", color: "hsl(20, 14%, 40%)", marginTop: "2px" }} className="truncate">
              {post.caption.slice(0, 80)}…
            </div>
          )}
        </div>
        {isSaved && <span style={{ fontSize: "0.7rem", color: "hsl(140, 20%, 40%)", flexShrink: 0 }}>Saved ✓</span>}
        <span style={{ fontSize: "0.65rem", color: MUTED }}>{expanded ? "▲" : "▼"}</span>
      </div>

      {/* Expanded */}
      {expanded && (
        <div className="px-4 pb-4 border-t" style={{ borderColor: SAGE_BORDER }}>
          <textarea value={editedCaption} onChange={e => setEditedCaption(e.target.value)} rows={6}
            className="w-full border px-3 py-3 text-sm resize-none outline-none mt-3 mb-3"
            style={{ borderColor: INPUT_BORDER, backgroundColor: "hsl(40, 25%, 95%)", color: "hsl(20, 14%, 18%)", lineHeight: 1.7 }} />
          {post.hashtags && (
            <div className="mb-3 p-2.5" style={{ backgroundColor: "hsl(40, 25%, 93%)" }}>
              <div style={{ fontSize: "0.7rem", color: MUTED, marginBottom: "3px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Hashtags</div>
              <div style={{ fontSize: "0.78rem", color: "hsl(20, 14%, 35%)" }}>
                {post.hashtags.split(",").map(h => `#${h.trim()}`).join(" ")}
              </div>
            </div>
          )}
          <div className="flex gap-2">
            <button onClick={handleCopy} className="px-4 py-2 text-sm border transition-colors hover:bg-black/5"
              style={{ borderColor: INPUT_BORDER, color: "hsl(20, 14%, 25%)" }}>
              {copied ? "Copied!" : "Copy"}
            </button>
            <button onClick={onSave} disabled={isSaved} className="px-4 py-2 text-sm font-semibold"
              style={{ backgroundColor: isSaved ? "hsl(140, 20%, 45%)" : INK, color: PARCHMENT }}>
              {isSaved ? "Saved" : "Save to Library"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
