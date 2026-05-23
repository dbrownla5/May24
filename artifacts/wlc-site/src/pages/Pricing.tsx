import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";

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

export default function Pricing() {
  return (
    <div style={{ backgroundColor: "var(--parchment)", minHeight: "100vh" }}>
      <Nav />

      <section style={{ backgroundColor: "var(--ink)", paddingTop: "10rem", paddingBottom: "7rem" }}>
        <div className="container">
          <div style={{ maxWidth: 680 }}>
            <span className="eyebrow eyebrow-light">Pricing</span>
            <h1 className="display-lg" style={{ color: "var(--parchment)", marginBottom: "2rem" }}>
              Transparent. Disclosed upfront. No surprises.
            </h1>
            <p style={{ fontSize: "1.1rem", fontWeight: 300, color: "rgba(248,244,227,0.7)", lineHeight: 1.8 }}>
              Every rate is disclosed before we begin. If the scope changes, we talk about it. That's the standard.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE PRICING ── */}
      <section style={{ backgroundColor: "var(--parchment)", padding: "6rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow eyebrow-sage">Service Rates</span>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem", maxWidth: 440 }}>What each service costs.</h2>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                num: "01", service: "Home Reset & Organization", href: "/home-reset-move-support",
                rate: "$150", unit: "/hr",
                min: "3-hour minimum",
                details: [
                  "Closet edits, unpacking, room resets",
                  "Intake call and pre-planning included",
                  "Setup, install, and label systems included",
                  "Tools and utility hardware included",
                  "Org supply add-ons available (quoted separately)",
                ],
                note: "The 4-Hour Reset Quick Book starts at $450.",
                featured: true,
              },
              {
                num: "02", service: "House Calls", href: "/house-calls-pillar",
                rate: "$175", unit: "/hr",
                min: "2-hour minimum",
                details: [
                  "Technology, organization, transitions",
                  "Home safety and vendor coordination",
                  "Donation and return routing",
                  "Remote family check-ins",
                  "Monthly retainer packages available",
                ],
                note: "The 2-Hour House Call Quick Book starts at $350.",
                featured: false,
              },
              {
                num: "03", service: "Legacy Planning & Inventory", href: "/legacy-planning",
                rate: "Project-based",
                unit: "",
                min: "Scoped after walkthrough",
                details: [
                  "Full-home photographic inventory",
                  "Story and provenance documentation",
                  "Valuation routing and appraisal coordination",
                  "Distribution planning included",
                  "Deliverable: complete digital catalog",
                ],
                note: "Priced by scope after a complimentary walkthrough call.",
                featured: false,
              },
              {
                num: "04", service: "Curated Resale & Consignment", href: "/curated-resale-consignment",
                rate: "Free", unit: " pickup",
                min: "Commission on sales",
                details: [
                  "Complimentary pickup within service area",
                  "Evaluation, photography, and platform matching",
                  "Buyer communication handled entirely",
                  "Monthly reporting and payouts by the 5th",
                  "Donation rerouting for unsold items",
                ],
                note: null,
                featured: false,
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 60}>
                <div style={{
                  backgroundColor: item.featured ? "var(--ink)" : "var(--parchment)",
                  border: item.featured ? "none" : "1.5px solid var(--warm-gray-lt)",
                  padding: "2.5rem", height: "100%", display: "flex", flexDirection: "column",
                  boxShadow: item.featured ? "8px 8px 0px var(--sage)" : "none",
                }}>
                  <div style={{ marginBottom: "auto" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                      <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.2em", color: "var(--sage)" }}>{item.num}</span>
                      {item.featured && <span style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", backgroundColor: "var(--sage)", color: "var(--ink)", padding: "0.2rem 0.6rem" }}>Most Booked</span>}
                    </div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: item.featured ? "var(--parchment)" : "var(--ink)", marginBottom: "0.75rem" }}>{item.service}</h3>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.2rem", marginBottom: "0.5rem" }}>
                      <span style={{ fontSize: "2.2rem", fontWeight: 800, color: item.featured ? "var(--parchment)" : "var(--ink)", lineHeight: 1 }}>{item.rate}</span>
                      {item.unit && <span style={{ fontSize: "0.9rem", fontWeight: 400, color: item.featured ? "rgba(248,244,227,0.5)" : "var(--sage-dark)" }}>{item.unit}</span>}
                    </div>
                    <p style={{ fontSize: "0.78rem", fontWeight: 500, color: item.featured ? "rgba(248,244,227,0.55)" : "var(--sage-dark)", marginBottom: "1.5rem" }}>{item.min}</p>
                    <div style={{ marginBottom: "1.5rem" }}>
                      {item.details.map((d, j) => (
                        <div key={j} style={{
                          padding: "0.55rem 0",
                          borderBottom: `1px solid ${item.featured ? "rgba(248,244,227,0.1)" : "var(--warm-gray-lt)"}`,
                          fontSize: "0.82rem", fontWeight: 300,
                          color: item.featured ? "rgba(248,244,227,0.65)" : "var(--sage-dark)",
                          display: "flex", gap: "0.6rem", alignItems: "flex-start",
                        }}>
                          <span style={{ color: "var(--sage)", flexShrink: 0, marginTop: 1 }}>→</span>{d}
                        </div>
                      ))}
                    </div>
                    {item.note && (
                      <p style={{ fontSize: "0.78rem", fontWeight: 300, color: item.featured ? "rgba(248,244,227,0.45)" : "var(--sage-dark)", lineHeight: 1.6, fontStyle: "italic", marginBottom: "1.5rem" }}>
                        {item.note}
                      </p>
                    )}
                  </div>
                  <Link href={item.href} className={`btn ${item.featured ? "btn-sage" : "btn-outline-ink"}`} style={{ textAlign: "center", justifyContent: "center" }}>
                    Learn More
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESALE COMMISSION ── */}
      <section style={{ backgroundColor: "var(--parchment-mid)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "start" }}>
              <div>
                <span className="eyebrow eyebrow-sage">Resale Commission Structure</span>
                <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>Fair splits. Disclosed upfront.</h2>
                <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                  Proceeds are split after platform fees and shipping costs are deducted. You receive your share by the 5th of each month.
                </p>
                <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.75, fontStyle: "italic" }}>
                  Consignment agreement required before pickup for items over $150 estimated value.
                </p>
              </div>
              <div>
                {[
                  { category: "Clothing & Accessories", split: "55% client / 45% WLC", note: "Standard items, shoes, bags, jewelry" },
                  { category: "Designer & Luxury Items", split: "50% client / 50% WLC", note: "Designer handbags, luxury clothing, fine jewelry" },
                  { category: "Furniture & Home Decor", split: "50% client / 50% WLC", note: "Furniture, art, significant home pieces" },
                  { category: "Fast Bag Fill", split: "55% client / 45% WLC", note: "Complimentary pickup; standard commission applies" },
                ].map((row, i) => (
                  <div key={i} style={{ padding: "1.25rem 0", borderBottom: "1px solid var(--warm-gray-lt)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.35rem" }}>
                      <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--ink)" }}>{row.category}</span>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--sage-dark)", whiteSpace: "nowrap" }}>{row.split}</span>
                    </div>
                    <p style={{ fontSize: "0.78rem", fontWeight: 300, color: "var(--sage-dark)" }}>{row.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FLEX BLOCKS ── */}
      <section style={{ backgroundColor: "var(--ink)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow" style={{ color: "rgba(248,244,227,0.45)" }}>Flex Blocks</span>
            <h2 className="display-md" style={{ color: "var(--parchment)", marginBottom: "1rem" }}>Pre-purchased time at a better rate.</h2>
            <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(248,244,227,0.65)", lineHeight: 1.75, marginBottom: "3rem", maxWidth: 560 }}>
              For clients who know they'll need recurring or extended support. Use hours across any combination of services. Blocks must be used within 6 months of purchase.
            </p>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              { size: "10 hrs", price: "$1,250", perHr: "$125/hr", label: "Home Organization Block", service: "Home org / The Reset" },
              { size: "25 hrs", price: "$3,150", perHr: "$126/hr", label: "Home Organization Block", service: "Home org / The Reset" },
              { size: "10 hrs", price: "$1,500", perHr: "$150/hr", label: "House Calls Block", service: "House Calls / Mixed" },
              { size: "25 hrs", price: "$3,650", perHr: "$146/hr", label: "House Calls Block", service: "House Calls / Mixed" },
            ].map((block, i) => (
              <FadeUp key={i} delay={i * 50}>
                <div style={{ backgroundColor: "rgba(248,244,227,0.06)", border: "1px solid rgba(248,244,227,0.12)", padding: "2rem" }}>
                  <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sage)", marginBottom: "0.75rem" }}>{block.label}</p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.25rem" }}>
                    <span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--parchment)", lineHeight: 1 }}>{block.price}</span>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "rgba(248,244,227,0.5)", marginBottom: "0.75rem" }}>{block.size} · {block.perHr}</p>
                  <p style={{ fontSize: "0.78rem", fontWeight: 300, color: "rgba(248,244,227,0.45)", lineHeight: 1.6 }}>{block.service}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOVE RESET FLAT RATES ── */}
      <section style={{ backgroundColor: "var(--sage)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow" style={{ color: "var(--sage-dark)" }}>Move Reset Flat Rates</span>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem", maxWidth: 440 }}>
              For move-in day and same-day landing.
            </h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              { size: "Studio / 1BR", price: "$1,200", note: "Full landing setup" },
              { size: "2BR", price: "Quoted", note: "Based on scope" },
              { size: "3BR+", price: "Quoted", note: "Based on scope" },
            ].map((flat, i) => (
              <FadeUp key={i} delay={i * 50}>
                <div style={{ backgroundColor: "var(--parchment)", padding: "2rem" }}>
                  <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sage-dark)", marginBottom: "0.75rem" }}>{flat.size}</p>
                  <p style={{ fontSize: "2rem", fontWeight: 800, color: "var(--ink)", lineHeight: 1, marginBottom: "0.5rem" }}>{flat.price}</p>
                  <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--sage-dark)" }}>{flat.note}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── POLICIES ── */}
      <section style={{ backgroundColor: "var(--parchment-mid)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow eyebrow-sage">Policies</span>
            <h2 className="display-sm" style={{ color: "var(--ink)", marginBottom: "2.5rem", maxWidth: 440 }}>The practical stuff.</h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "Cancellation — The Reset", body: "48-hour notice required. Late cancellations may incur a fee equal to 50% of the session rate." },
              { title: "Cancellation — House Calls", body: "24-hour notice required. Late cancellations may incur a fee equal to 50% of the session minimum." },
              { title: "Rescheduling", body: "I'd rather you tell me you're overwhelmed and we reschedule than ghost the appointment — I genuinely won't be weird about it." },
              { title: "Payment", body: "Venmo, Zelle, check, and major credit cards accepted. Payment due at time of service. Retainer clients billed monthly by the 1st." },
              { title: "Travel", body: "Travel within the primary LA service area is included. Extended travel (outside 30-mile radius) disclosed and agreed before booking." },
              { title: "Confidentiality", body: "Everything I see in your home stays in your home. I don't share details about clients, their households, or their belongings." },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 40}>
                <div style={{ backgroundColor: "var(--parchment)", padding: "2rem" }}>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.6rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: "var(--parchment)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow eyebrow-sage">Pricing Questions</span>
            <h2 className="display-sm" style={{ color: "var(--ink)", marginBottom: "2.5rem" }}>Before you book</h2>
          </FadeUp>
          <div style={{ maxWidth: 720 }}>
            {[
              { q: "Is there a consultation fee?", a: "No. The initial call is complimentary. It's a brief conversation to understand your situation and determine what makes the most sense." },
              { q: "What if my project goes over time?", a: "I'm not billing by the minute. If we're 15 minutes from something great, I finish it. If we're a full hour away, I'll have a quick conversation about whether to extend at the hourly rate or schedule a follow-up." },
              { q: "Do you charge for travel?", a: "Travel within my primary LA service area is included. Extended travel beyond a 30-mile radius may incur a small fee — always disclosed before booking." },
              { q: "How do I pay?", a: "Venmo, Zelle, check, and major credit cards. Payment is due at the time of service unless otherwise arranged. Retainer clients are billed monthly." },
              { q: "Are flex blocks transferable?", a: "Flex blocks are non-transferable and must be used within 6 months of purchase. They can be used across any combination of services." },
            ].map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--ink)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
              <div>
                <h2 className="display-sm" style={{ color: "var(--parchment)", marginBottom: "0.75rem" }}>Ready to get started?</h2>
                <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(248,244,227,0.65)" }}>The initial call is complimentary. No obligation.</p>
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-sage">Schedule a Call</Link>
                <Link href="/services" className="btn btn-outline-light">All Services</Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
