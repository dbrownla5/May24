import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Dashboard", icon: "⊞" },
  { href: "/generate", label: "Generate", icon: "✦" },
  { href: "/calendar", label: "Calendar", icon: "▦" },
  { href: "/posts", label: "Library", icon: "≡" },
  { href: "/campaigns", label: "Campaigns", icon: "◈" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col md:flex-row" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "hsl(40, 33%, 98%)" }}>
      {/* Sidebar — desktop only */}
      <aside className="hidden md:flex w-60 shrink-0 border-r flex-col" style={{ backgroundColor: "hsl(40, 30%, 95%)", borderColor: "hsl(40, 20%, 85%)" }}>
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

      {/* Mobile header */}
      <header className="flex md:hidden items-center px-5 py-4 border-b shrink-0" style={{ backgroundColor: "hsl(40, 30%, 95%)", borderColor: "hsl(40, 20%, 85%)" }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "hsl(25, 15%, 55%)" }}>
            The Well Lived Citizen
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "hsl(20, 14%, 15%)" }}>
            Content Studio
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 min-w-0 overflow-auto pb-20 md:pb-0">
        {children}
      </main>

      {/* Bottom nav — mobile only */}
      <nav className="fixed bottom-0 left-0 right-0 flex md:hidden border-t z-50" style={{ backgroundColor: "hsl(40, 30%, 96%)", borderColor: "hsl(40, 20%, 85%)" }}>
        {NAV.map(({ href, label, icon }) => {
          const active = href === "/" ? location === "/" : location.startsWith(href);
          return (
            <Link key={href} href={href} className="flex-1 flex flex-col items-center py-2.5 gap-0.5 transition-colors"
              style={{ color: active ? "hsl(20, 14%, 15%)" : "hsl(25, 15%, 55%)" }}
            >
              <span style={{ fontSize: "1rem", lineHeight: 1 }}>{icon}</span>
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.04em", fontWeight: active ? 700 : 400 }}>{label}</span>
              {active && (
                <span className="absolute bottom-0 w-8" style={{ height: "2px", backgroundColor: "hsl(20, 14%, 15%)", borderRadius: "2px 2px 0 0" }} />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
