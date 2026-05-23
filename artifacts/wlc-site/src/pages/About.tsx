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

      {/* ── FOUNDER ── */}
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
                I built The Well Lived Citizen because there's a category of help nobody offers cleanly — too specific for a big company, too complex for a quick hire. One person who can be all of it.
              </p>
              <p style={{
                fontSize: "1rem", fontWeight: 600, color: "var(--ink)", lineHeight: 1.5,
                borderLeft: "3px solid var(--sage)", paddingLeft: "1.25rem", marginTop: "2rem",
              }}>— Dayna Brown, Founder</p>
            </FadeUp>

            <FadeUp delay={100}>
              <div style={{ backgroundColor: "var(--parchment-mid)", padding: "3rem", boxShadow: "6px 6px 0px var(--sage)" }}>
                <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--sage-dark)", marginBottom: "1.5rem" }}>
                  At a Glance
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    "15+ years in retail operations and logistics",
                    "Resale active on 10+ platforms — Poshmark Ambassador, eBay, Vestiaire, Chairish, Grailed, and more",
                    "Apartment set up for intake, staging, photography, and fulfillment",
                    "Home organization, move support, vendor coordination",
                    "Based in Los Angeles · Serving greater LA",
                    "Est. 2020 · By appointment only",
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

      {/* ── HOW IT ACTUALLY SHOWS UP ── */}
      <section style={{ backgroundColor: "var(--ink)", padding: "6rem 0" }}>
        <div className="container">
          <FadeUp>
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow eyebrow-light">How It Actually Shows Up</span>
              <h2 className="display-md" style={{ color: "var(--parchment)", marginBottom: "2rem" }}>
                The kinds of calls I get.
              </h2>
              <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(248,244,227,0.78)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                The person who's tried to clean out the closet four times. They know there's value in there — the handbags, the clothes, the gifts that never got used. They don't know where to send it, who to send it to, or how to deal with the people. I do. I have the eye, the apartment set up for intake, and accounts on every platform that matters.
              </p>
              <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(248,244,227,0.78)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                The family in a hurried move who isn't ready to make decisions about everything. The adult child who moved to Ohio for work while their mom is still in LA — and they need someone local to actually show up. To change the smoke detector batteries. To fix the Wi-Fi. To take the donations. To flag the things nobody else will say out loud.
              </p>
              <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(248,244,227,0.78)", lineHeight: 1.8 }}>
                And underneath all of it: the lifestyle transfer that's quietly happening alongside the wealth transfer. We don't live the way our parents lived. We have less space, more transitions, and a different relationship to objects. The inheritance can feel more like an inconvenience than a gift. It doesn't have to. The gift is one person who can handle all of it — who knows the value, the platforms, the timing, and what's worth keeping. That's the work.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY THIS WORK EXISTS ── */}
      <section style={{ backgroundColor: "var(--parchment-mid)", padding: "6rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow eyebrow-sage">Why This Exists</span>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem", maxWidth: 560 }}>
              Everyone deserves to have that person.
            </h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              { label: "Your call", text: "You get to make decisions about your own stuff, on your own terms, without someone else's urgency rushing you." },
              { label: "The story stays", text: "The things people have lived with carry meaning. That meaning deserves to be captured, not tossed because nobody had time." },
              { label: "Small things add up", text: "The smoke detector, the unreachable shelf, the tech that stopped working — they're not a big deal until they are." },
              { label: "No crisis required", text: "Good support shouldn't have to wait for a bad moment. The best time to get ahead of things is before you need to." },
              { label: "More choices later", text: "Dealing with things thoughtfully now keeps your options open — for you and for the people who come after you." },
              { label: "One person, not five", text: "You shouldn't have to hire a different person for every category of problem. That's the whole point." },
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
                  {["Caregiving", "Medical advice", "Financial advice", "Therapy", "Cleaning", "Handyman work", "Estate law", "Forced minimalism", "The KonMari method"].map((item) => (
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
                  {[
                    "A consistent presence",
                    "Actually taking care of it",
                    "Seeing things before they become a problem",
                    "A home that works",
                    "Getting things done efficiently",
                    "Reading a room and a person",
                    "An eye for what sells and where",
                    "Seeing the whole picture",
                    "One person, not a company",
                  ].map((item) => (
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
