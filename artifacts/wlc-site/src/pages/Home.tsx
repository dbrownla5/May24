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
            Thoughtful stewardship<br />for your household.
          </h1>
          <p style={{ fontSize: "1.1rem", fontWeight: 300, color: "rgba(248,244,227,0.82)", maxWidth: 580, lineHeight: 1.8, marginBottom: "2.5rem" }}>
            We address the invisible friction and deferred decisions that accumulate over time — restoring clarity and functional calm to your home.
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
            <h2 className="display-md" style={{ color: "var(--ink)", maxWidth: 560, marginBottom: "0.75rem" }}>Practical household stewardship.</h2>
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
                  A focused working session for the space that has quietly accumulated friction. Closets, kitchens, overflow rooms, post-move unpacking — whatever has been deferred longest. Four hours of real, practical momentum.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/the-reset" className="btn btn-ink">Book a Reset</Link>
                  <span style={{ fontSize: "0.8rem", color: "var(--sage-dark)", fontWeight: 500 }}>$150/hr · 3-hr min</span>
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
                  For the capable individual who simply needs a trusted hand with life's small, persistent tasks. Discreet, practical support — the kind of observant help a neighbor once offered, designed to resolve minor friction before it grows.
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
                Resolving the invisible friction of everyday life.
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(248,244,227,0.72)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Technology that has stopped working. Home safety items that have been on the list for months. The room that has slowly become harder to move through. The things that accumulate in the space between "not urgent enough" and "I really need to address this."
              </p>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(248,244,227,0.72)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                Life accumulates faster than most people have time to address. House Calls are for exactly that space — not crisis, not caregiving, but thoughtful, capable support for the operational side of a well-lived life.
              </p>
              <Link href="/house-calls" className="btn btn-sage">Learn About House Calls</Link>
            </FadeUp>
            <FadeUp delay={100}>
              <div style={{ backgroundColor: "var(--sage)", padding: "3rem", boxShadow: "6px 6px 0px rgba(248,244,227,0.15)" }}>
                <p className="pull-quote" style={{ color: "var(--ink)", fontSize: "1.15rem", marginBottom: "2rem" }}>
                  "Often, the things creating the most stress in a household are the ones no one has had time to properly address."
                </p>
                <div style={{ borderTop: "1px solid rgba(56,48,46,0.2)", paddingTop: "1.5rem" }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink)", opacity: 0.7, marginBottom: "1rem" }}>
                    A House Call might include
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {["Technology setup & troubleshooting", "Home safety updates", "Reorganizing for easier access", "Resale & donation preparation", "Post-move settling", "Support after loss or transition"].map(item => (
                      <li key={item} style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--ink)", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                        <span style={{ color: "var(--ink)", opacity: 0.5, flexShrink: 0, marginTop: "0.15rem" }}>—</span>{item}
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
                My career was built seeing the whole picture, from the warehouse floor to the executive suite.
              </h2>
              <Link href="/about" className="btn btn-ink">About Dayna</Link>
            </FadeUp>
            <FadeUp delay={80}>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--ink)", lineHeight: 1.85, opacity: 0.85 }}>
                This taught me to build elegant, real-world solutions for the operational friction people learn to accept. I approach every household with that same capable, observant perspective — ready to tend to the practical realities of a life in motion.
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
