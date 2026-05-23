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

export default function FastBagFill() {
  return (
    <div style={{ backgroundColor: "var(--parchment)", minHeight: "100vh" }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ backgroundColor: "var(--sage)", paddingTop: "10rem", paddingBottom: "6rem" }}>
        <div className="container">
          <div style={{ maxWidth: 680 }}>
            <span className="eyebrow" style={{ color: "var(--sage-dark)" }}>Service 04</span>
            <div style={{ display: "inline-block", backgroundColor: "var(--ink)", padding: "0.3rem 0.8rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--parchment)" }}>
                Pickup Service · No Appointment Needed
              </span>
            </div>
            <h1 className="display-lg" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>Fast Bag Fill</h1>
            <p style={{ fontSize: "1.15rem", fontWeight: 300, color: "var(--ink)", lineHeight: 1.75, marginBottom: "1.5rem", opacity: 0.85 }}>
              Fill a bag with what you're ready to let go of. I come pick it up and handle the rest — resell what's worth selling, donate what isn't, and send you a summary of where everything went.
            </p>
            <p style={{ fontSize: "1.15rem", fontWeight: 300, color: "var(--ink)", lineHeight: 1.75, marginBottom: "2.5rem", opacity: 0.85 }}>
              Complimentary pickup within my LA service area. No appointment, no prep work, no decisions to make before I arrive.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn btn-ink">Schedule a Pickup</Link>
              <span style={{ fontSize: "0.8rem", fontWeight: 300, color: "var(--ink)", opacity: 0.6 }}>Complimentary pickup · No upfront cost</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IT IS ── */}
      <section style={{ backgroundColor: "var(--parchment)", padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "5rem", alignItems: "start" }}>
            <FadeUp>
              <span className="eyebrow eyebrow-sage">What It Is</span>
              <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "2rem" }}>
                The thing that finally gets things moving.
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Fast Bag Fill exists because most people don't need a full organizing session to start. They just need someone to come get the stuff that's already been mentally released — the bag of clothes by the door, the box of things from the garage, the pile that's been waiting for a destination.
              </p>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Fill a bag or box. I pick it up, sort it, evaluate it, and route it — resale, donation, or appropriate dispersal. Items are reviewed thoughtfully based on category, condition, resale potential, and overall fit. You could see items start selling within 10 days.
              </p>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.8 }}>
                No appointment prep required. No decisions to make before I arrive. Just the stuff that's ready to go.
              </p>
            </FadeUp>
            <FadeUp delay={100}>
              <div style={{ backgroundColor: "var(--ink)", padding: "2.5rem", boxShadow: "6px 6px 0px var(--sage)" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--parchment)", marginBottom: "1rem" }}>
                  How it typically goes
                </h3>
                {[
                  "You fill a bag, box, or pile",
                  "I schedule a pickup — often within a few days",
                  "I evaluate and sort everything",
                  "Resale items are listed; donations are routed",
                  "You receive a summary of what went where",
                  "Items can start selling within 10 days",
                ].map((step, i) => (
                  <div key={i} style={{
                    padding: "0.65rem 0",
                    borderBottom: "1px solid rgba(248,244,227,0.1)",
                    fontSize: "0.88rem", fontWeight: 300,
                    color: "rgba(248,244,227,0.7)",
                    display: "flex", gap: "0.75rem", alignItems: "center",
                  }}>
                    <span style={{ fontSize: "0.6rem", fontWeight: 600, color: "var(--sage)", minWidth: "1.2rem" }}>0{i + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── WHAT TO FILL IT WITH ── */}
      <section style={{ backgroundColor: "var(--ink)", padding: "6rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow" style={{ color: "rgba(248,244,227,0.45)" }}>What to Fill It With</span>
            <h2 className="display-md" style={{ color: "var(--parchment)", marginBottom: "1.5rem", maxWidth: 500 }}>
              If you've been meaning to deal with it, it probably belongs in the bag.
            </h2>
            <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(248,244,227,0.65)", lineHeight: 1.75, maxWidth: 560, marginBottom: "3rem" }}>
              Fast Bag Fill is not just for clothes. It's for anything you've mentally released but haven't physically moved out of the house yet.
            </p>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", backgroundColor: "rgba(248,244,227,0.1)" }}>
            {[
              "Clothing & shoes",
              "Handbags & accessories",
              "Jewelry & watches",
              "Books & media",
              "Small decor & ceramics",
              "Lamps & lighting",
              "Vintage & collectibles",
              "Kitchen items",
              "Linens & textiles",
              "Anything from the garage",
              "Inherited items",
              "Whatever's been by the door",
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 30}>
                <div style={{ backgroundColor: "rgba(248,244,227,0.04)", padding: "1.5rem", fontSize: "0.88rem", fontWeight: 300, color: "rgba(248,244,227,0.7)", lineHeight: 1.5 }}>
                  {item}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section style={{ backgroundColor: "var(--parchment)", padding: "6rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow eyebrow-sage">What Happens Next</span>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "2rem", maxWidth: 480 }}>
              I handle the routing. You handle nothing.
            </h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                label: "Resale",
                body: "Items with resale value are evaluated and listed on the right platform. You receive a share of the proceeds when they sell.",
              },
              {
                label: "Donation",
                body: "Items that are better suited to donation are routed to appropriate organizations. I handle the drop-off.",
              },
              {
                label: "Dispersal",
                body: "Items that need a different kind of routing — recycling, responsible disposal, or specialty handling — are managed accordingly.",
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 60}>
                <div style={{ border: "1.5px solid var(--warm-gray-lt)", padding: "2.5rem", boxShadow: i === 0 ? "6px 6px 0px var(--sage)" : "none" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.75rem" }}>{item.label}</h3>
                  <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--sage-dark)", lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMISSION ── */}
      <section style={{ backgroundColor: "var(--parchment-mid)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "start" }}>
              <div>
                <span className="eyebrow eyebrow-sage">Commission Structure</span>
                <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>Fair split. Disclosed before anything leaves.</h2>
                <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.75 }}>
                  Proceeds are split after platform fees and shipping are deducted. You receive your share by the 5th of each month via Venmo, Zelle, or check.
                </p>
              </div>
              <div>
                {[
                  { label: "Clothing & Accessories", value: "45% to you / 55% WLC", note: "Standard resale items" },
                  { label: "Designer & Luxury", value: "50% to you / 50% WLC", note: "Designer handbags, luxury clothing" },
                  { label: "Pickup fee", value: "Complimentary", note: "Within service area" },
                  { label: "Monthly report", value: "By the 1st", note: "Every month" },
                  { label: "Payout", value: "By the 5th", note: "Venmo, Zelle, or check" },
                ].map((row, i) => (
                  <div key={i} style={{ padding: "1rem 0", borderBottom: "1px solid var(--warm-gray-lt)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.2rem" }}>
                      <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--ink)" }}>{row.label}</span>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--sage-dark)", whiteSpace: "nowrap" }}>{row.value}</span>
                    </div>
                    <p style={{ fontSize: "0.75rem", fontWeight: 300, color: "var(--sage-dark)" }}>{row.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: "var(--sage)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow" style={{ color: "var(--sage-dark)" }}>Common Questions</span>
            <h2 className="display-sm" style={{ color: "var(--ink)", marginBottom: "2.5rem" }}>Before you schedule</h2>
          </FadeUp>
          <div style={{ maxWidth: 680 }}>
            {[
              {
                q: "Is pickup really complimentary?",
                a: "Yes, within my primary service area in Los Angeles. For locations outside my standard area, a small travel fee may apply — always disclosed before I confirm the pickup.",
              },
              {
                q: "How much do I need to have?",
                a: "One bag is enough. There's no minimum. If you have more, great — I can handle multiple bags or boxes in a single pickup.",
              },
              {
                q: "Do I need to sort or prep anything?",
                a: "No. Fill the bag with what's ready to go. I do the sorting and evaluation after pickup. You don't need to make any decisions before I arrive.",
              },
              {
                q: "What if I want to keep some of the proceeds from resale?",
                a: "Yes — items with resale value generate a return for you. I'll walk you through the commission structure before I accept items for resale.",
              },
              {
                q: "What platforms do you use for resale?",
                a: "I match items to the platform where they make the most sense — Poshmark, eBay, Etsy, Facebook Marketplace, Chairish, Vinted, Vestiaire, Grailed, local high-end resale, and private collector networks.",
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
                <h2 className="display-sm" style={{ color: "var(--parchment)", marginBottom: "0.75rem" }}>Ready to schedule a pickup?</h2>
                <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(248,244,227,0.65)" }}>Fill a bag. I'll handle the rest.</p>
              </div>
              <Link href="/contact" className="btn btn-sage">Schedule a Pickup</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
