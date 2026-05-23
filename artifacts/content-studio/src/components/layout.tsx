import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Dashboard" },
  { href: "/generate", label: "Generate" },
  { href: "/calendar", label: "Calendar" },
  { href: "/posts", label: "Post Library" },
  { href: "/campaigns", label: "Campaigns" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "hsl(40, 33%, 98%)" }}>
      {/* Sidebar */}
      <aside className="w-60 shrink-0 border-r flex flex-col" style={{ backgroundColor: "hsl(40, 30%, 95%)", borderColor: "hsl(40, 20%, 85%)" }}>
        <div className="px-6 py-8 border-b" style={{ borderColor: "hsl(40, 20%, 85%)" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "hsl(25, 15%, 50%)", marginBottom: "4px" }}>
            The Well Lived Citizen
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: "hsl(20, 14%, 15%)" }}>
            Content Studio
          </div>
        </div>
        <nav className="flex-1 px-3 py-6 flex flex-col gap-0.5">
          {NAV.map(({ href, label }) => {
            const active = href === "/" ? location === "/" : location.startsWith(href);
            return (
              <Link key={href} href={href} className={cn(
                  "block px-3 py-2 rounded text-sm transition-colors",
                  active ? "font-semibold" : "hover:bg-black/5"
                )}
                style={active ? {
                  backgroundColor: "hsl(20, 14%, 15%)",
                  color: "hsl(40, 33%, 98%)",
                  fontWeight: 600,
                } : {
                  color: "hsl(20, 14%, 30%)",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="px-6 py-5 border-t" style={{ borderColor: "hsl(40, 20%, 85%)" }}>
          <div style={{ fontSize: "0.72rem", color: "hsl(25, 15%, 55%)", lineHeight: 1.4 }}>
            Dayna Brown<br />
            <span style={{ color: "hsl(25, 15%, 65%)" }}>Los Angeles, CA</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0 overflow-auto">
        {children}
      </main>
    </div>
  );
}
