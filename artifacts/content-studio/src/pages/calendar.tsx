import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCalendarPosts, getGetCalendarPostsQueryKey } from "@workspace/api-client-react";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const PLATFORM_COLORS: Record<string, string> = {
  "@thewelllivedcitizen": "#A2A392",
  "@thewelllivedcloset": "#C9A87C",
  "@welldressedcitizen": "#8B9B8E",
  "Facebook": "#6B7DB3",
  "Poshmark": "#C06262",
  "eBay": "#6BA3BE",
};

export default function Calendar() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const { data } = useQuery({
    queryKey: getGetCalendarPostsQueryKey({ year, month }),
    queryFn: () => getCalendarPosts({ year, month }),
  });

  const days = (data?.days ?? {}) as Record<string, Array<{ id: number; platform: string; caption: string; status: string; postType: string }>>;

  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  function prevMonth() {
    if (month === 1) { setYear(y => y - 1); setMonth(12); }
    else setMonth(m => m - 1);
    setSelectedDay(null);
  }
  function nextMonth() {
    if (month === 12) { setYear(y => y + 1); setMonth(1); }
    else setMonth(m => m + 1);
    setSelectedDay(null);
  }

  const selectedPosts = selectedDay ? (days[selectedDay] ?? []) : [];

  return (
    <div className="px-10 py-10 max-w-5xl">
      <div className="mb-8">
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "hsl(20, 14%, 15%)", marginBottom: "6px" }}>
          Calendar
        </div>
        <div style={{ fontSize: "0.875rem", color: "hsl(25, 15%, 50%)" }}>
          See your scheduled posts across all platforms.
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <button onClick={prevMonth} className="px-3 py-1.5 border rounded text-sm hover:bg-black/5 transition-colors" style={{ borderColor: "hsl(40, 20%, 82%)", color: "hsl(20, 14%, 25%)" }}>
          ‹
        </button>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "hsl(20, 14%, 15%)", minWidth: "160px", textAlign: "center" }}>
          {MONTHS[month - 1]} {year}
        </span>
        <button onClick={nextMonth} className="px-3 py-1.5 border rounded text-sm hover:bg-black/5 transition-colors" style={{ borderColor: "hsl(40, 20%, 82%)", color: "hsl(20, 14%, 25%)" }}>
          ›
        </button>
      </div>

      <div className="flex gap-6">
        <div className="flex-1">
          <div className="grid grid-cols-7 mb-1">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
              <div key={d} style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "hsl(25, 15%, 60%)", textAlign: "center", padding: "6px 0" }}>{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const posts = days[dateStr] ?? [];
              const isToday = dateStr === now.toISOString().slice(0, 10);
              const isSelected = dateStr === selectedDay;

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(isSelected ? null : dateStr)}
                  className="rounded p-1.5 text-left transition-colors min-h-[60px]"
                  style={{
                    backgroundColor: isSelected ? "hsl(20, 14%, 15%)" : isToday ? "hsl(40, 25%, 92%)" : "hsl(40, 33%, 97%)",
                    border: `1px solid ${isSelected ? "hsl(20, 14%, 15%)" : "hsl(40, 20%, 88%)"}`,
                    color: isSelected ? "hsl(40, 33%, 98%)" : "hsl(20, 14%, 20%)",
                  }}
                >
                  <div style={{ fontSize: "0.8rem", fontWeight: isToday ? 700 : 400, marginBottom: "4px" }}>{day}</div>
                  <div className="flex flex-wrap gap-0.5">
                    {posts.slice(0, 3).map((post, pi) => (
                      <span key={pi} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isSelected ? "rgba(255,255,255,0.6)" : (PLATFORM_COLORS[post.platform] ?? "#A2A392") }} />
                    ))}
                    {posts.length > 3 && (
                      <span style={{ fontSize: "0.6rem", color: isSelected ? "rgba(255,255,255,0.7)" : "hsl(25, 15%, 55%)" }}>+{posts.length - 3}</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {selectedDay && (
          <div className="w-72 shrink-0 border rounded-lg p-5" style={{ borderColor: "hsl(40, 20%, 85%)", backgroundColor: "hsl(40, 33%, 98%)" }}>
            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "hsl(20, 14%, 20%)", marginBottom: "12px", fontFamily: "'Playfair Display', serif" }}>
              {new Date(selectedDay + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            </div>
            {selectedPosts.length === 0 ? (
              <div style={{ fontSize: "0.8rem", color: "hsl(25, 15%, 60%)" }}>No posts scheduled.</div>
            ) : (
              <div className="flex flex-col gap-3">
                {selectedPosts.map(post => (
                  <div key={post.id} className="border rounded p-3" style={{ borderColor: "hsl(40, 20%, 88%)" }}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: PLATFORM_COLORS[post.platform] ?? "#A2A392" }} />
                      <span style={{ fontSize: "0.7rem", color: "hsl(25, 15%, 50%)" }}>{post.platform}</span>
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "hsl(20, 14%, 22%)", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {post.caption}
                    </p>
                    <div className="mt-2" style={{ fontSize: "0.68rem", color: "hsl(25, 15%, 60%)", textTransform: "capitalize" }}>{post.status}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
