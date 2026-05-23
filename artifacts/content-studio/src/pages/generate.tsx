import { useState } from "react";
import { useCreatePost, useGenerateContent, getListPostsQueryKey, getGetPostStatsQueryKey } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";

const PLATFORMS = [
  "@thewelllivedcitizen",
  "@thewelllivedcloset",
  "@welldressedcitizen",
  "Facebook",
  "Poshmark",
  "eBay",
];

const POST_TYPES = [
  "Launch Announcement",
  "Service Spotlight",
  "Behind the Scenes",
  "Client Transformation",
  "Resale Drop",
  "Brand Transition",
  "Seasonal",
];

export default function Generate() {
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
    <div className="px-10 py-10 max-w-3xl">
      <div className="mb-8">
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "hsl(20, 14%, 15%)", marginBottom: "6px" }}>
          Generate
        </div>
        <div style={{ fontSize: "0.875rem", color: "hsl(25, 15%, 50%)" }}>
          Select a platform and post type, add context, and let the AI draft in Dayna's voice.
        </div>
      </div>

      <div className="border rounded-lg p-6 mb-6" style={{ borderColor: "hsl(40, 20%, 88%)", backgroundColor: "hsl(40, 33%, 98%)" }}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "hsl(25, 15%, 55%)", display: "block", marginBottom: "8px" }}>
              Platform
            </label>
            <select
              value={platform}
              onChange={e => setPlatform(e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm outline-none"
              style={{ borderColor: "hsl(40, 20%, 82%)", backgroundColor: "hsl(40, 25%, 96%)", color: "hsl(20, 14%, 20%)" }}
            >
              <option value="">Select platform…</option>
              {PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "hsl(25, 15%, 55%)", display: "block", marginBottom: "8px" }}>
              Post Type
            </label>
            <select
              value={postType}
              onChange={e => setPostType(e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm outline-none"
              style={{ borderColor: "hsl(40, 20%, 82%)", backgroundColor: "hsl(40, 25%, 96%)", color: "hsl(20, 14%, 20%)" }}
            >
              <option value="">Select type…</option>
              {POST_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "hsl(25, 15%, 55%)", display: "block", marginBottom: "8px" }}>
            Context <span style={{ color: "hsl(25, 15%, 70%)", textTransform: "none", letterSpacing: 0 }}>(optional)</span>
          </label>
          <textarea
            value={context}
            onChange={e => setContext(e.target.value)}
            placeholder="Add details — service name, client situation, specific angle, items to mention…"
            rows={3}
            className="w-full border rounded px-3 py-2 text-sm resize-none outline-none"
            style={{ borderColor: "hsl(40, 20%, 82%)", backgroundColor: "hsl(40, 25%, 96%)", color: "hsl(20, 14%, 20%)" }}
          />
        </div>
        <button
          onClick={handleGenerate}
          disabled={!canGenerate}
          className="px-6 py-2.5 rounded text-sm font-semibold transition-opacity"
          style={{
            backgroundColor: canGenerate ? "hsl(20, 14%, 15%)" : "hsl(20, 14%, 75%)",
            color: "hsl(40, 33%, 98%)",
            cursor: canGenerate ? "pointer" : "not-allowed",
          }}
        >
          {generate.isPending ? "Generating…" : "Generate Caption"}
        </button>
        {generate.isError && (
          <p style={{ fontSize: "0.8rem", color: "hsl(0, 60%, 50%)", marginTop: "8px" }}>
            Generation failed. Check that the API server is running.
          </p>
        )}
      </div>

      {result && (
        <div className="border rounded-lg p-6" style={{ borderColor: "hsl(40, 20%, 88%)", backgroundColor: "hsl(40, 33%, 98%)" }}>
          <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "hsl(25, 15%, 55%)", marginBottom: "12px" }}>
            Caption
          </div>
          <textarea
            value={activeCaption}
            onChange={e => setActiveCaption(e.target.value)}
            rows={8}
            className="w-full border rounded px-3 py-3 text-sm resize-none outline-none mb-4"
            style={{ borderColor: "hsl(40, 20%, 82%)", backgroundColor: "hsl(40, 25%, 95%)", color: "hsl(20, 14%, 18%)", lineHeight: 1.7 }}
          />

          {result.hashtags && (
            <div className="mb-4 p-3 rounded" style={{ backgroundColor: "hsl(40, 25%, 93%)" }}>
              <div style={{ fontSize: "0.7rem", color: "hsl(25, 15%, 55%)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Hashtags</div>
              <div style={{ fontSize: "0.8rem", color: "hsl(20, 14%, 30%)" }}>
                {result.hashtags.split(",").map((h: string) => `#${h.trim()}`).join(" ")}
              </div>
            </div>
          )}

          {result.alternates && result.alternates.length > 0 && (
            <div className="mb-5">
              <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "hsl(25, 15%, 55%)", marginBottom: "10px" }}>
                Alternates — click to use
              </div>
              <div className="flex flex-col gap-2">
                {result.alternates.map((alt: string, i: number) => (
                  <button key={i} onClick={() => setActiveCaption(alt)} className="text-left border rounded px-4 py-3 text-sm transition-colors hover:bg-black/[0.03]"
                    style={{ borderColor: "hsl(40, 20%, 85%)", color: "hsl(20, 14%, 25%)", lineHeight: 1.6 }}>
                    {alt}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 flex-wrap">
            <button onClick={handleCopy} className="px-4 py-2 rounded text-sm border transition-colors hover:bg-black/5"
              style={{ borderColor: "hsl(40, 20%, 82%)", color: "hsl(20, 14%, 25%)" }}>
              {copied ? "Copied!" : "Copy"}
            </button>
            <button
              onClick={handleSave}
              disabled={save.isPending || !!savedId}
              className="px-4 py-2 rounded text-sm font-semibold"
              style={{ backgroundColor: savedId ? "hsl(140, 20%, 45%)" : "hsl(20, 14%, 15%)", color: "hsl(40, 33%, 98%)" }}
            >
              {savedId ? "Saved to Library" : save.isPending ? "Saving…" : "Save to Library"}
            </button>
            <button onClick={handleGenerate} className="px-4 py-2 rounded text-sm border transition-colors hover:bg-black/5 ml-auto"
              style={{ borderColor: "hsl(40, 20%, 82%)", color: "hsl(25, 15%, 50%)" }}>
              Regenerate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
