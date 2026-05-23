import { useQuery, useQueryClient } from "@tanstack/react-query";
import { listCampaigns, getListCampaignsQueryKey, useCreateCampaign } from "@workspace/api-client-react";
import { useState } from "react";

export default function Campaigns() {
  const queryClient = useQueryClient();
  const [showNew, setShowNew] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [launchDate, setLaunchDate] = useState("");

  const { data: campaigns, isLoading } = useQuery({
    queryKey: getListCampaignsQueryKey(),
    queryFn: () => listCampaigns(),
  });

  const createCampaign = useCreateCampaign();

  async function handleCreate() {
    if (!name.trim()) return;
    await createCampaign.mutateAsync({
      data: { name, description: description || undefined, launchDate: launchDate || undefined }
    });
    queryClient.invalidateQueries({ queryKey: getListCampaignsQueryKey() });
    setName(""); setDescription(""); setLaunchDate(""); setShowNew(false);
  }

  return (
    <div className="px-10 py-10 max-w-4xl">
      <div className="flex items-start justify-between mb-8">
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "hsl(20, 14%, 15%)", marginBottom: "6px" }}>
            Campaigns
          </div>
          <div style={{ fontSize: "0.875rem", color: "hsl(25, 15%, 50%)" }}>
            Organize your content around launch campaigns and moments.
          </div>
        </div>
        <button
          onClick={() => setShowNew(v => !v)}
          className="px-4 py-2 rounded text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ backgroundColor: "hsl(20, 14%, 15%)", color: "hsl(40, 33%, 98%)" }}
        >
          {showNew ? "Cancel" : "+ New Campaign"}
        </button>
      </div>

      {/* New campaign form */}
      {showNew && (
        <div className="border rounded-lg p-6 mb-6" style={{ borderColor: "hsl(40, 20%, 85%)", backgroundColor: "hsl(40, 33%, 98%)" }}>
          <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "hsl(25, 15%, 55%)", marginBottom: "16px" }}>
            New Campaign
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "hsl(25, 15%, 60%)", display: "block", marginBottom: "6px" }}>Name</label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Business Launch Week"
                className="w-full border rounded px-3 py-2 text-sm outline-none"
                style={{ borderColor: "hsl(40, 20%, 82%)", backgroundColor: "hsl(40, 25%, 96%)", color: "hsl(20, 14%, 20%)" }}
              />
            </div>
            <div>
              <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "hsl(25, 15%, 60%)", display: "block", marginBottom: "6px" }}>Launch Date</label>
              <input
                type="date"
                value={launchDate}
                onChange={e => setLaunchDate(e.target.value)}
                className="w-full border rounded px-3 py-2 text-sm outline-none"
                style={{ borderColor: "hsl(40, 20%, 82%)", backgroundColor: "hsl(40, 25%, 96%)", color: "hsl(20, 14%, 20%)" }}
              />
            </div>
          </div>
          <div className="mb-4">
            <label style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "hsl(25, 15%, 60%)", display: "block", marginBottom: "6px" }}>Description</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="What is this campaign for?"
              rows={2}
              className="w-full border rounded px-3 py-2 text-sm resize-none outline-none"
              style={{ borderColor: "hsl(40, 20%, 82%)", backgroundColor: "hsl(40, 25%, 96%)", color: "hsl(20, 14%, 20%)" }}
            />
          </div>
          <button
            onClick={handleCreate}
            disabled={!name.trim() || createCampaign.isPending}
            className="px-5 py-2 rounded text-sm font-semibold"
            style={{ backgroundColor: name.trim() ? "hsl(20, 14%, 15%)" : "hsl(20, 14%, 75%)", color: "hsl(40, 33%, 98%)", cursor: name.trim() ? "pointer" : "not-allowed" }}
          >
            {createCampaign.isPending ? "Creating…" : "Create Campaign"}
          </button>
        </div>
      )}

      {/* Campaign list */}
      {isLoading ? (
        <div style={{ fontSize: "0.875rem", color: "hsl(25, 15%, 55%)" }}>Loading…</div>
      ) : campaigns?.length === 0 ? (
        <div className="border rounded-lg px-8 py-12 text-center" style={{ borderColor: "hsl(40, 20%, 88%)", borderStyle: "dashed" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "hsl(25, 15%, 55%)", marginBottom: "8px" }}>No campaigns yet.</div>
          <div style={{ fontSize: "0.8rem", color: "hsl(25, 15%, 65%)" }}>Create one to organize your launch content.</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {campaigns?.map(campaign => (
            <div key={campaign.id} className="border rounded-lg px-6 py-5" style={{ borderColor: "hsl(40, 20%, 88%)", backgroundColor: "hsl(40, 33%, 98%)" }}>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 600, color: "hsl(20, 14%, 15%)" }}>
                  {campaign.name}
                </div>
                {campaign.launchDate && (
                  <div className="shrink-0 px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "hsl(40, 25%, 90%)", color: "hsl(25, 15%, 45%)" }}>
                    {new Date(campaign.launchDate + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </div>
                )}
              </div>
              {campaign.description && (
                <p style={{ fontSize: "0.85rem", color: "hsl(25, 15%, 45%)", lineHeight: 1.6 }}>
                  {campaign.description}
                </p>
              )}
              {campaign.isTemplate && (
                <div className="mt-3" style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "hsl(25, 15%, 65%)" }}>
                  Template
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
