import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>;
}

const HERO_IMG = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80&fit=crop";

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--parchment)", minHeight: "100vh" }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "flex-end", paddingBottom: "5rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(56,48,46,0.90) 0%, rgba(56,48,46,0.48) 45%, rgba(56,48,46,0.1) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <span className="eyebrow eyebrow-light" style={{ marginBottom: "1.25rem" }}>The Well Lived Citizen · Los Angeles</span>
          <h1 className="display-xl" style={{ color: "var(--parchment)", maxWidth: 720, marginBottom: "1.5rem" }}>
            Practical help for the parts of life that quietly pile up.
          </h1>
          <p style={{ fontSize: "1.1rem", fontWeight: 300, color: "rgba(248,244,227,0.82)", maxWidth: 580, lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Organization, resale, inventory, transitions, and thoughtful household support — handled with care and real follow-through.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-ink" style={{ backgroundColor: "var(--parchment)", color: "var(--ink)", borderColor: "var(--parchment)" }}>Schedule a Call</Link>
            <Link href="/services" className="btn btn-outline-light">See All Services</Link>
          </div>
        </div>
      </section>

      {/* ── START HERE ── */}
      <section style={{ backgroundColor: "var(--parchment-mid)", padding: "6rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow eyebrow-sage">Where Most People Begin</span>
            <h2 className="display-md" style={{ color: "var(--ink)", maxWidth: 560, marginBottom: "0.75rem" }}>What I actually do.</h2>
            <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--sage-dark)", maxWidth: 640, lineHeight: 1.85, marginBottom: "3.5rem" }}>
              Want to get started right now but not sure where to dig in? These are the three things clients book most.
            </p>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5px", backgroundColor: "var(--warm-gray-lt)" }}>
            <FadeUp delay={0}>
              <div style={{ backgroundColor: "var(--parchment)", padding: "2.5rem", height: "100%" }}>
                <div className="underlay-tag underlay-tag-sage" style={{ marginBottom: "1.5rem" }}>01 — The Reset</div>
                <h3 className="display-sm" style={{ color: "var(--ink)", marginBottom: "1rem" }}>The 4-Hour Reset</h3>
                <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.8, color: "var(--ink-soft)", marginBottom: "2rem" }}>
                  A focused four-hour session for the one space you keep meaning to fix. Closets, kitchens, overflow rooms, post-move unpacking — whatever's been on the list longest. I show up, we get it done.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/the-reset" className="btn btn-ink">Book a Reset</Link>
                  <span style={{ fontSize: "0.8rem", color: "var(--sage-dark)", fontWeight: 500 }}>$495 flat rate</span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={60}>
              <div style={{ backgroundColor: "var(--parchment)", padding: "2.5rem", height: "100%" }}>
                <div className="underlay-tag" style={{ marginBottom: "1.5rem" }}>02 — Curated Resale</div>
                <h3 className="display-sm" style={{ color: "var(--ink)", marginBottom: "1rem" }}>Fast Bag Fill</h3>
                <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.8, color: "var(--ink-soft)", marginBottom: "2rem" }}>
                  A simple way to start letting things leave the house. Fill a bag or pickup pile with items you no longer want to manage. Pickup is complimentary within our service area — we handle the evaluation, routing, and resale from there.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/fast-bag-fill" className="btn btn-ink">Schedule a Pickup</Link>
                  <span style={{ fontSize: "0.8rem", color: "var(--sage-dark)", fontWeight: 500 }}>Commission-based</span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={120}>
              <div style={{ backgroundColor: "var(--parchment)", padding: "2.5rem", height: "100%" }}>
                <div className="underlay-tag" style={{ marginBottom: "1.5rem" }}>03 — House Calls</div>
                <h3 className="display-sm" style={{ color: "var(--ink)", marginBottom: "1rem" }}>The 2-Hour House Call</h3>
                <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.8, color: "var(--ink-soft)", marginBottom: "2rem" }}>
                  Practical, hourly help with the everyday running of a household — tech setup, vendor oversight, donation routing, safety checks, remote family check-ins. The things that keep getting pushed to the bottom of the list until they don't.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/house-calls" className="btn btn-ink">Book a House Call</Link>
                  <span style={{ fontSize: "0.8rem", color: "var(--sage-dark)", fontWeight: 500 }}>$175/hr · 2-hr min</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── HOUSE CALLS PITCH ── */}
      <section style={{ backgroundColor: "var(--ink)", padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <FadeUp>
              <span className="eyebrow eyebrow-sage">House Calls</span>
              <h2 className="display-md" style={{ color: "var(--parchment)", marginBottom: "1.25rem", lineHeight: 1.15 }}>
                Quietly taking the things you've been meaning to do off your plate.
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(248,244,227,0.72)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Technology that has stopped working. Home safety items that have been on the list for months. The room that has slowly become harder to move through. The things that accumulate in the space between "not urgent enough" and "I really need to address this."
              </p>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(248,244,227,0.72)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                Life accumulates faster than most people have time to address. House Calls are for exactly that — not crisis, not caregiving. Just thoughtful, hands-on help with the everyday things, from someone who actually enjoys figuring them out.
              </p>
              <Link href="/house-calls" className="btn btn-sage">Learn About House Calls</Link>
            </FadeUp>
            <FadeUp delay={100}>
              <div style={{ backgroundColor: "var(--sage)", padding: "3rem", boxShadow: "6px 6px 0px rgba(248,244,227,0.15)" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink)", opacity: 0.55, marginBottom: "1.5rem" }}>Client · House Calls</p>
                <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.4, marginBottom: "1.5rem" }}>
                  "You made my TV work better, and my clicker is right there next to the bed, and all my lights turn on. It's great. It's amazing. I love you."
                </p>
                <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--ink)", opacity: 0.6, letterSpacing: "0.08em" }}>— Gayle · Los Angeles</p>
                <div style={{ borderTop: "1px solid rgba(56,48,46,0.2)", paddingTop: "1.5rem", marginTop: "2rem" }}>
                  <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink)", opacity: 0.65, marginBottom: "1rem" }}>
                    A House Call might include
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {["Technology setup & troubleshooting", "Home safety updates", "Reorganizing for easier access", "Resale & donation preparation", "Remote family check-ins", "Post-move settling"].map(item => (
                      <li key={item} style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--ink)", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                        <span style={{ color: "var(--ink)", opacity: 0.4, flexShrink: 0, marginTop: "0.15rem" }}>—</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section style={{ backgroundColor: "var(--parchment)", padding: "6rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow eyebrow-sage">Four Areas of Service</span>
            <h2 className="display-md" style={{ color: "var(--ink)", maxWidth: 520, marginBottom: "1rem" }}>One consistent approach.</h2>
            <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--sage-dark)", maxWidth: 600, lineHeight: 1.8, marginBottom: "3.5rem" }}>
              Each pillar addresses a distinct dimension of household life — the reset after accumulation, the trusted ongoing presence, the resale and dispersal of what no longer belongs, the preservation of what should never be lost.
            </p>
          </FadeUp>
          <div style={{ display: "grid", gap: "1px", backgroundColor: "var(--warm-gray-lt)" }}>
            {[
              { num: "01", name: "Home Reset & Move Support", desc: "Organization, unpacking, room functionality, and post-move support. The 4-Hour Reset lives here.", href: "/the-reset" },
              { num: "02", name: "Legacy Planning & Inventory", desc: "Creating clarity around the belongings and stories families should not lose track of — before urgency forces the decisions.", href: "/legacy-planning" },
              { num: "03", name: "House Calls", desc: "Practical household help for busy professionals, independent adults, and families managing life from a distance.", href: "/house-calls" },
              { num: "04", name: "Curated Resale & Consignment", desc: "Pickup or send your items. We identify the best resale route, manage listings, and recover value from the things you no longer need.", href: "/fast-bag-fill" },
            ].map((s, i) => (
              <FadeUp key={s.num} delay={i * 40}>
                <Link href={s.href}>
                  <div style={{
                    backgroundColor: "var(--parchment)", padding: "2rem 2.5rem",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem",
                    transition: "background-color 0.18s ease", cursor: "pointer",
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "var(--parchment-mid)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "var(--parchment)"}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "2rem" }}>
                      <span className="service-num" style={{ paddingTop: "0.2rem", flexShrink: 0 }}>{s.num}</span>
                      <div>
                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.35rem" }}>{s.name}</h3>
                        <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--sage-dark)", lineHeight: 1.65, maxWidth: 480 }}>{s.desc}</p>
                      </div>
                    </div>
                    <span style={{ color: "var(--sage)", fontSize: "1.2rem", fontWeight: 300, flexShrink: 0 }}>→</span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={200}>
            <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem" }}>
              <Link href="/services" className="btn btn-outline-ink">All Services</Link>
              <Link href="/pricing" className="btn btn-outline-ink">Pricing</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section style={{ backgroundColor: "var(--sage)", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <FadeUp>
              <span className="eyebrow" style={{ color: "var(--sage-dark)" }}>Dayna Brown · Founder</span>
              <h2 className="display-sm" style={{ color: "var(--ink)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
                15+ years in retail and operations. My whole career was about knowing where things go.
              </h2>
              <Link href="/about" className="btn btn-ink">About Dayna</Link>
            </FadeUp>
            <FadeUp delay={80}>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--ink)", lineHeight: 1.85, opacity: 0.85 }}>
                I built this because there's a category of help nobody offers cleanly — too specific for a big company, too complex for a quick hire. The closet that needs editing, the parent who needs someone local to actually show up, the inherited furniture nobody knows what to do with. One person who can be all of it.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ backgroundColor: "var(--ink)", padding: "6rem 0" }}>
        <div className="container">
          <FadeUp>
            <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
              <span className="eyebrow" style={{ color: "rgba(248,244,227,0.45)" }}>Ready to start?</span>
              <h2 className="display-md" style={{ color: "var(--parchment)", marginBottom: "1.25rem" }}>
                Someone thoughtful is finally paying attention.
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(248,244,227,0.65)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Reach out. Tell me what's been quietly weighing on you. I'll take it from there.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-sage">Schedule a Call</Link>
                <Link href="/pricing" className="btn btn-outline-light">See Pricing</Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
