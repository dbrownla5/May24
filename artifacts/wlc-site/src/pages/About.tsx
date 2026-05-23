import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
  return <div ref={ref} className="fade-up">{children}</div>;
}

export default function About() {
  return (
    <div style={{ backgroundColor: "var(--parchment)", minHeight: "100vh" }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ backgroundColor: "var(--ink)", paddingTop: "10rem", paddingBottom: "7rem" }}>
        <div className="container">
          <div style={{ maxWidth: 680 }}>
            <span className="eyebrow eyebrow-light">About</span>
            <h1 className="display-lg" style={{ color: "var(--parchment)", marginBottom: "2rem" }}>
              The trusted bridge between memory, value, function, and next steps.
            </h1>
            <p style={{ fontSize: "1.1rem", fontWeight: 300, color: "rgba(248,244,227,0.7)", lineHeight: 1.8 }}>
              A private household stewardship company helping people navigate the emotional and operational realities of modern life — before they become overwhelming.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOUNDER PHOTO + STATEMENT ── */}
      <section style={{ backgroundColor: "var(--parchment)", padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "start" }}>
            <FadeUp>
              <span className="eyebrow eyebrow-sage">Dayna Brown · Founder</span>
              <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "2rem" }}>
                My career was built seeing the whole picture, from the warehouse floor to the executive suite.
              </h2>
              <p className="body-lg" style={{ marginBottom: "1.5rem" }}>
                I've always believed the most meaningful work is helping people feel truly taken care of. Across retail, product development, legacy craft, and now household stewardship, my work has always centered on creating experiences that leave people feeling more confident, more capable, and more at ease in their lives.
              </p>
              <p className="body-lg" style={{ marginBottom: "1.5rem" }}>
                My background spans executive operations, luxury client services, and founder-led product development — including designing, prototyping, and building a turnkey drop-ship product solution for the outdoor industry. That experience sharpened my ability to identify overlooked friction points, build practical solutions, and translate complex needs into clear, repeatable systems for real people.
              </p>
              <p className="body-lg" style={{ marginBottom: "1.5rem" }}>
                This taught me to build elegant, real-world solutions for the operational friction people learn to accept. I approach every household with that same capable, observant perspective — ready to tend to the practical realities of a life in motion.
              </p>
              <p style={{
                fontSize: "1rem", fontWeight: 600, color: "var(--ink)", lineHeight: 1.5,
                borderLeft: "3px solid var(--sage)", paddingLeft: "1.25rem", marginTop: "2rem",
              }}>— Dayna Brown, Founder</p>
            </FadeUp>

            <FadeUp delay={100}>
              <div style={{ backgroundColor: "var(--parchment-mid)", padding: "3rem", boxShadow: "6px 6px 0px var(--sage)" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--sage-dark)", marginBottom: "1.5rem" }}>Background</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    "15+ years retail operations, logistics, and financial planning",
                    "Experience across luxury, outdoor, men's, and mass-market retail",
                    "Resale market expertise: Poshmark, ThredUp, eBay, direct buyer networks",
                    "Home organization, vendor coordination, and estate support",
                    "Based in Los Angeles · Serving greater LA and surrounding areas",
                    "Est. 2020 · A Well Dressed Citizen Company",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", paddingBottom: "0.75rem", borderBottom: i < 5 ? "1px solid var(--warm-gray-lt)" : "none" }}>
                      <span style={{ color: "var(--sage)", flexShrink: 0, marginTop: "0.2rem", fontSize: "0.7rem" }}>—</span>
                      <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.6 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── THE WORK ── */}
      <section style={{ backgroundColor: "var(--ink)", padding: "6rem 0" }}>
        <div className="container">
          <FadeUp>
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow eyebrow-light">The Work</span>
              <h2 className="display-md" style={{ color: "var(--parchment)", marginBottom: "2rem" }}>
                Noticing what quietly stops working before it becomes a problem.
              </h2>
              <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(248,244,227,0.75)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Most services address the surface — the clutter, the move, the checklist. This practice addresses the friction underneath.
              </p>
              <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(248,244,227,0.75)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Families need someone they trust to translate life, belongings, logistics, memory, and safety into a clear path forward. The Well Lived Citizen was built to be that presence — the person who observes the signals before they become emergencies, and acts on them with care.
              </p>
              <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(248,244,227,0.75)", lineHeight: 1.8 }}>
                Making invisible household realities visible again.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY THIS WORK EXISTS ── */}
      <section style={{ backgroundColor: "var(--parchment-mid)", padding: "6rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow eyebrow-sage">Why This Work Exists</span>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem", maxWidth: 560 }}>
              People deserve to age, transition, and part with belongings without losing dignity, value, or story.
            </h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              { label: "Autonomy", text: "The right to make decisions about your own space and belongings, on your own terms, without urgency forcing the outcome." },
              { label: "Memory", text: "The things people have lived with carry stories. Those stories deserve to be captured, not discarded." },
              { label: "Practical Safety", text: "Small household friction points — the smoke detector, the unreachable shelf, the outdated technology — quietly accumulate into real risk." },
              { label: "Family Harmony", text: "When households are documented and organized proactively, the people who love each other don't have to become project managers during grief." },
              { label: "Preserved Options", text: "Thoughtful stewardship now means more choices later — for you, and for the people who come after you." },
              { label: "Reducing Burden", text: "Competence does not eliminate the need to be cared for. Thoughtful support should not require a crisis first." },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 40}>
                <div style={{ backgroundColor: "var(--parchment)", padding: "2rem", borderTop: "3px solid var(--sage)" }}>
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--sage-dark)", marginBottom: "0.75rem" }}>{item.label}</p>
                  <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.7 }}>{item.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT THIS IS / IS NOT ── */}
      <section style={{ backgroundColor: "var(--parchment)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "start" }}>
              <div>
                <span className="eyebrow eyebrow-sage">What This Is Not</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
                  {["Caregiving", "Medical", "Financial", "Therapy", "Cleaning", "Handyman work", "Estate law", "Minimalism", "Declutter culture"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0", borderBottom: "1px solid var(--warm-gray-lt)" }}>
                      <span style={{ width: 6, height: 6, backgroundColor: "var(--warm-gray-md)", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--ink-soft)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="eyebrow eyebrow-sage">What This Is</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
                  {["Continuity", "Stewardship", "Practical foresight", "Household functionality", "Operational intelligence", "Emotional intelligence", "Resale discernment", "Systems thinking", "Relationship-driven service"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0", borderBottom: "1px solid var(--warm-gray-lt)" }}>
                      <span style={{ width: 6, height: 6, backgroundColor: "var(--sage)", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--ink)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── THESIS ── */}
      <section style={{ backgroundColor: "var(--sage)", padding: "6rem 0" }}>
        <div className="container">
          <FadeUp>
            <div style={{ maxWidth: 680 }}>
              <p style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.3, marginBottom: "2rem" }}>
                "Someone thoughtful is finally paying attention to the things that quietly matter."
              </p>
              <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--ink)", opacity: 0.75, lineHeight: 1.75, marginBottom: "2.5rem" }}>
                That is the promise. The transition is from invisible overwhelm to thoughtful continuity. That is the work.
              </p>
              <Link href="/contact" className="btn btn-ink">Schedule a Call</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
