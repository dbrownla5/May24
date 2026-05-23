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

      {/* ── HERO ── */}
      <section style={{ backgroundColor: "var(--ink)", paddingTop: "10rem", paddingBottom: "6rem" }}>
        <div className="container">
          <div style={{ maxWidth: 640 }}>
            <span className="eyebrow" style={{ color: "rgba(248,244,227,0.45)" }}>Pricing</span>
            <h1 className="display-lg" style={{ color: "var(--parchment)", marginBottom: "1.5rem" }}>
              Clear rates.<br />No surprises.
            </h1>
            <p style={{ fontSize: "1.1rem", fontWeight: 300, color: "rgba(248,244,227,0.7)", lineHeight: 1.75 }}>
              Every rate is disclosed before work begins. If something changes, you'll know before it does. That's the standard.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section style={{ backgroundColor: "var(--parchment)", padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                num: "01",
                service: "The Reset",
                href: "/the-reset",
                price: "$495",
                unit: "flat rate",
                description: "A focused 4-hour working session. One space. Real results. No hourly creep.",
                details: [
                  "4 hours of hands-on work",
                  "Pre-session intake questionnaire",
                  "Sorting, editing, and placement",
                  "Donation and resale routing",
                  "Post-session written summary",
                  "Additional hours at $125/hr",
                ],
                cta: "Book a Reset",
                featured: true,
              },
              {
                num: "02",
                service: "Legacy Planning & Inventory",
                href: "/legacy-inventory",
                price: "$1,500+",
                unit: "starting from",
                description: "Priced by scope. Every engagement begins with a consultation. No surprise fees.",
                details: [
                  "Photographed inventory",
                  "Written story and memory archive",
                  "Resale and value assessment",
                  "Dispersal strategy document",
                  "Consultation required before booking",
                  "Whole home quoted after walkthrough",
                ],
                cta: "Schedule a Consultation",
                featured: false,
              },
              {
                num: "03",
                service: "House Calls",
                href: "/house-calls",
                price: "$175",
                unit: "per hour",
                description: "Flexible hourly help with the everyday running of a household. 2-hour minimum.",
                details: [
                  "2-hour minimum booking",
                  "Billed in full hours",
                  "No discovery call required",
                  "Technology, organization, transitions",
                  "Monthly retainer packages available",
                  "Cancellation: 24-hour notice",
                ],
                cta: "Schedule a House Call",
                featured: false,
              },
              {
                num: "04",
                service: "Curated Resale & Consignment",
                href: "/fast-bag-fill",
                price: "Free",
                unit: "pickup",
                description: "Complimentary pickup within my service area. Resale proceeds shared when items sell. Fast Bag Fill is the easiest way to start.",
                details: [
                  "Clothing, accessories, decor, collectibles",
                  "Fill what you have — I make the call on what sells",
                  "Pickup within 7 days on my route",
                  "Resale proceeds shared per commission structure",
                  "Consignment agreement required before pickup",
                  "Items reviewed based on category, condition, and fit",
                ],
                cta: "Schedule a Pickup",
                featured: false,
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 60}>
                <div style={{
                  backgroundColor: item.featured ? "var(--ink)" : "var(--parchment)",
                  border: item.featured ? "none" : "1.5px solid var(--warm-gray-lt)",
                  padding: "2.5rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: item.featured ? "8px 8px 0px var(--sage)" : "none",
                }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                      <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.2em", color: "var(--sage)" }}>{item.num}</span>
                      {item.featured && (
                        <span style={{
                          fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase",
                          backgroundColor: "var(--sage)", color: "var(--parchment)", padding: "0.2rem 0.6rem",
                        }}>Most Booked</span>
                      )}
                    </div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: item.featured ? "var(--parchment)" : "var(--ink)", marginBottom: "0.5rem" }}>{item.service}</h3>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", marginBottom: "1rem" }}>
                      <span style={{ fontSize: "2rem", fontWeight: 800, color: item.featured ? "var(--parchment)" : "var(--ink)", lineHeight: 1 }}>{item.price}</span>
                      <span style={{ fontSize: "0.75rem", fontWeight: 400, color: item.featured ? "rgba(248,244,227,0.5)" : "var(--sage-dark)" }}>{item.unit}</span>
                    </div>
                    <p style={{ fontSize: "0.88rem", fontWeight: 300, color: item.featured ? "rgba(248,244,227,0.7)" : "var(--sage-dark)", lineHeight: 1.65 }}>{item.description}</p>
                  </div>
                  <div style={{ flex: 1, marginBottom: "2rem" }}>
                    {item.details.map((d, j) => (
                      <div key={j} style={{
                        padding: "0.6rem 0",
                        borderBottom: `1px solid ${item.featured ? "rgba(248,244,227,0.1)" : "var(--warm-gray-lt)"}`,
                        fontSize: "0.82rem", fontWeight: 300,
                        color: item.featured ? "rgba(248,244,227,0.65)" : "var(--sage-dark)",
                        display: "flex", gap: "0.6rem", alignItems: "flex-start",
                      }}>
                        <span style={{ color: "var(--sage)", flexShrink: 0, marginTop: 1 }}>→</span>{d}
                      </div>
                    ))}
                  </div>
                  <Link href={item.href} className={`btn ${item.featured ? "btn-sage" : "btn-outline-ink"}`} style={{ textAlign: "center", justifyContent: "center" }}>
                    {item.cta}
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── MONTHLY RETAINER ── */}
      <section style={{ backgroundColor: "var(--sage)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "center" }}>
              <div>
                <span className="eyebrow" style={{ color: "var(--sage-dark)" }}>Monthly Retainer</span>
                <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>
                  Consistent support, built around your household.
                </h2>
                <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--ink)", lineHeight: 1.75, marginBottom: "1.5rem", opacity: 0.8 }}>
                  Some clients benefit from having consistent, scheduled support rather than booking individual sessions. Monthly retainer packages are available for clients who want a reliable presence — someone who knows their home, their preferences, and their priorities.
                </p>
                <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--ink)", lineHeight: 1.75, marginBottom: "2rem", opacity: 0.8 }}>
                  Retainer pricing is individualized based on frequency, scope, and service mix. I'll discuss what makes sense for your situation during your call.
                </p>
                <Link href="/contact" className="btn btn-ink">Ask About Retainer Options</Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  { label: "Frequency", value: "Weekly, bi-weekly, or monthly" },
                  { label: "Scope", value: "Customized to your household" },
                  { label: "Services included", value: "Any combination of services" },
                  { label: "Pricing", value: "Individualized — ask during call" },
                  { label: "Commitment", value: "Month-to-month available" },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", padding: "0.85rem 0",
                    borderBottom: "1px solid rgba(28,25,23,0.12)", fontSize: "0.9rem",
                  }}>
                    <span style={{ fontWeight: 300, color: "var(--sage-dark)" }}>{row.label}</span>
                    <span style={{ fontWeight: 600, color: "var(--ink)" }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── POLICIES ── */}
      <section style={{ backgroundColor: "var(--ink)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow" style={{ color: "rgba(248,244,227,0.45)" }}>Policies</span>
            <h2 className="display-sm" style={{ color: "var(--parchment)", marginBottom: "3rem", maxWidth: 480 }}>
              How I handle the practical stuff.
            </h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                title: "Cancellation",
                body: "The Reset: 48-hour notice required. House Calls: 24-hour notice. Late cancellations may incur a fee equal to 50% of the session rate. I understand life happens — please just communicate.",
              },
              {
                title: "Payment",
                body: "Payment is due at the time of service unless otherwise arranged. I accept Venmo, Zelle, Cash App, check, and major credit cards (via Square). Retainer clients are invoiced and billed monthly. I'll always confirm the method that works best for you before we begin.",
              },
              {
                title: "Travel",
                body: "Travel within my primary Los Angeles service area is included. Extended travel (outside a 30-mile radius) may incur a small fee, always disclosed before booking.",
              },
              {
                title: "Rescheduling",
                body: "I'd rather you tell me you're overwhelmed and reschedule than push through something that isn't working. Rescheduling is always an option — just give me as much notice as possible.",
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 50}>
                <div style={{ backgroundColor: "rgba(248,244,227,0.06)", border: "1px solid rgba(248,244,227,0.12)", padding: "2rem" }}>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--parchment)", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(248,244,227,0.65)", lineHeight: 1.7 }}>{item.body}</p>
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
            <h2 className="display-sm" style={{ color: "var(--ink)", marginBottom: "2.5rem" }}>Common questions about rates</h2>
          </FadeUp>
          <div style={{ maxWidth: 680 }}>
            {[
              {
                q: "Are there any hidden fees?",
                a: "No. Every rate is disclosed before work begins. If something changes mid-session — like the space needs more time than anticipated — I'll tell you before I continue, not after.",
              },
              {
                q: "Can I combine services in a single session?",
                a: "Yes. A Reset session can include resale routing, donation prep, and photography as part of the four hours. House Calls can address multiple tasks in a single session. I'll discuss what makes sense for your situation.",
              },
              {
                q: "Do you offer discounts for multiple bookings?",
                a: "Monthly retainer packages offer better per-hour value for clients who want consistent support. For one-time bookings, rates are as listed. I don't negotiate individual session rates.",
              },
              {
                q: "What if I need to add time to a Reset session?",
                a: "If the space needs more than four hours, I'll tell you before I run over. Additional time is billed at $125/hr. You always have the option to stop at four hours and schedule a follow-up.",
              },
              {
                q: "Is there a consultation fee?",
                a: "No. The initial call is complimentary. It's a brief conversation to understand your situation and determine what makes the most sense. There's no obligation.",
              },
            ].map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: "var(--ink)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
              <div>
                <h2 className="display-sm" style={{ color: "var(--parchment)", marginBottom: "0.75rem" }}>Questions about pricing?</h2>
                <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(248,244,227,0.65)" }}>Schedule a call. I'll talk through what makes sense for your situation.</p>
              </div>
              <Link href="/contact" className="btn btn-sage">Schedule a Call</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
