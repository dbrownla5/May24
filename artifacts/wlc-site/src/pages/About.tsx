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
              There isn't really a service for this. That's exactly what I do.
            </h1>
            <p style={{ fontSize: "1.1rem", fontWeight: 300, color: "rgba(248,244,227,0.75)", lineHeight: 1.8 }}>
              My background is retail, operations, and resale. My skill is people, problem-solving, and knowing where things go. The Well Lived Citizen is built for the parts of life that don't fit neatly into one job description — the closet you can't face, the inherited furniture you don't know what to do with, the parent across the country who needs someone local to actually show up.
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
                My skill is operations, efficiency, and people. This is just how I see the world.
              </h2>
              <p className="body-lg" style={{ marginBottom: "1.5rem" }}>
                I spent 15+ years in retail — luxury, outdoor, men's, mass-market. I've designed and built product lines. I ran operations across categories. But the through-line in all of it is resale and the human side of how things actually move through a household. I know where to send things. I know what they're worth. I know who's buying. My apartment is set up to receive, photograph, list, and ship. I've been doing this for clients for years.
              </p>
              <p className="body-lg" style={{ marginBottom: "1.5rem" }}>
                I built The Well Lived Citizen because there's a category of help nobody offers cleanly. When you're moving in a hurry and not ready to make decisions, you need someone to hold things, sell what you want sold, and ship the rest once you have a place to put it. When your closet has become something you can't face alone, you need a person you actually trust to be in there with you. When your mom is in LA and you're in Ohio for work, you need someone local who'll change the smoke detector batteries, fix the Wi-Fi, take the donations, and tell you honestly whether she should still be driving.
              </p>
              <p className="body-lg" style={{ marginBottom: "1.5rem" }}>
                Everyone's talking about the wealth transfer. Nobody's talking about the lifestyle transfer happening alongside it. We don't all live in big houses. We live in apartments. We're divorced, single, blended. We don't always want the chandelier or the three sets of china. The inheritance can feel more like an inconvenience than a gift. It doesn't have to. The gift is one person who can handle all of it — who knows the value, the platforms, the timing, and what's actually worth keeping. That's the work.
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
              <span className="eyebrow eyebrow-light">How It Actually Shows Up</span>
              <h2 className="display-md" style={{ color: "var(--parchment)", marginBottom: "2rem" }}>
                The kinds of calls I get.
              </h2>
              <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(248,244,227,0.78)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                The person who's tried to clean out the closet four times. They know there's value sitting there — the handbags, the clothes, the gifts that never got used. They don't know where to send it, who to send it to, or how to deal with the people. I do. I have the eye, the apartment set up for intake, and accounts on every platform that matters.
              </p>
              <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(248,244,227,0.78)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                The family in a hurried move who isn't ready to make decisions about everything. The adult child in another city whose parent in LA needs someone to actually show up — to fix the smoke detectors, handle the donations, flag the things nobody else will. The kinds of problems that don't fit a single service category.
              </p>
              <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(248,244,227,0.78)", lineHeight: 1.8 }}>
                And underneath all of it: the lifestyle transfer that's quietly happening alongside the wealth transfer. We don't live the way our parents lived. We have less space, more transitions, and a different relationship to objects. The Well Lived Citizen exists to be the one person who can handle the whole thing — who knows the value, the platforms, the timing, and the difference between something worth selling and something worth saving.
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
                That's the promise. The shift is from quietly overwhelmed to genuinely taken care of. That's the work.
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
