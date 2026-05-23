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
      <section style={{ backgroundColor: "var(--ink)", paddingTop: "10rem", paddingBottom: "6rem" }}>
        <div className="container">
          <div style={{ maxWidth: 680 }}>
            <span className="eyebrow" style={{ color: "rgba(248,244,227,0.4)" }}>Service 03</span>
            <div style={{ display: "inline-block", backgroundColor: "var(--sage)", padding: "0.3rem 0.8rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink)" }}>Quick Book Entry</span>
            </div>
            <h1 className="display-lg" style={{ color: "var(--parchment)", marginBottom: "1.5rem" }}>The Fast Bag Fill</h1>
            <p style={{ fontSize: "1.15rem", fontWeight: 300, color: "rgba(248,244,227,0.75)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              A simple way to start letting clothing leave the house. The bags I work with are large zip totes — they hold anywhere from three king-size pillows to three dresser drawers' worth of clothing. What you put in them is up to you.
            </p>
            <p style={{ fontSize: "1.15rem", fontWeight: 300, color: "rgba(248,244,227,0.75)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              What I ask is that you have some sense of what's in there. Not a spreadsheet — just a general idea. My job is to make the call on what sells, where, and when. That's the gift I bring: years across retail, resale, high-end, and everything in between.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn btn-sage">Schedule a Pickup</Link>
              <span style={{ fontSize: "0.8rem", fontWeight: 300, color: "rgba(248,244,227,0.45)" }}>Complimentary pickup · Commission-based</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ backgroundColor: "var(--parchment)", padding: "6rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow eyebrow-sage">How It Works</span>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "3rem", maxWidth: 440 }}>Fill. Schedule. Done.</h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0" }}>
            {[
              { step: "01", title: "Fill the bag", body: "Use bags or boxes you already have at home — large zip totes, cardboard boxes, or a neat pile. Clothing, accessories, shoes. Have a general sense of what's in there." },
              { step: "02", title: "Schedule pickup", body: "Reach out and we'll coordinate a time. I route pickup based on my schedule in your area. City pickups and desk drops available for larger buildings." },
              { step: "03", title: "I evaluate everything", body: "Every item is reviewed. Strong pieces go to the platform that makes the most sense. Items that won't sell are rerouted to donation — nothing sits forever." },
              { step: "04", title: "You receive your share", body: "When items sell, you receive your share by the 5th of the following month. Monthly report sent by the 1st. Payouts via Venmo, Zelle, or check." },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 60}>
                <div style={{ padding: "2.5rem", borderRight: i < 3 ? "1px solid var(--warm-gray-lt)" : "none", borderBottom: "3px solid var(--sage)" }}>
                  <p style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--sage)", lineHeight: 1, marginBottom: "1rem", opacity: 0.3 }}>{s.step}</p>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.75rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.75 }}>{s.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── HONEST EXPECTATIONS ── */}
      <section style={{ backgroundColor: "var(--ink)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <div style={{ maxWidth: 680 }}>
              <span className="eyebrow" style={{ color: "rgba(248,244,227,0.45)" }}>Setting Expectations</span>
              <h2 className="display-md" style={{ color: "var(--parchment)", marginBottom: "2rem" }}>What the bag is and isn't for.</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ backgroundColor: "rgba(248,244,227,0.06)", border: "1px solid rgba(248,244,227,0.12)", padding: "2rem" }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--sage)", marginBottom: "0.75rem" }}>What the bag is for</p>
                  <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(248,244,227,0.75)", lineHeight: 1.75 }}>
                    Clothing you took care of and know deserves another life. Items you're genuinely ready to let go of, even if you're not sure who'll want them. Things in good condition that simply don't fit your life anymore.
                  </p>
                </div>
                <div style={{ backgroundColor: "rgba(248,244,227,0.04)", border: "1px solid rgba(248,244,227,0.08)", padding: "2rem" }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(248,244,227,0.4)", marginBottom: "0.75rem" }}>What the bag is not for</p>
                  <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(248,244,227,0.45)", lineHeight: 1.75 }}>
                    A bag of old T-shirts you just don't know what to do with. If that's what you have, I can still help — but that's a different conversation, and there's a small fee for the haul. For regular clients, I'll always take a look. That's part of the relationship.
                  </p>
                </div>
                <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(248,244,227,0.45)", lineHeight: 1.75, fontStyle: "italic" }}>
                  Clothing and accessories only. Home decor, furniture, art, and delicate valuables require a local consultation — see Curated Resale &amp; Consignment.
                </p>
              </div>
            </div>
          </FadeUp>
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
                  { label: "Clothing & Accessories", value: "55% client / 45% WLC", note: "Standard resale items" },
                  { label: "Designer & Luxury", value: "50% client / 50% WLC", note: "Designer handbags, luxury clothing" },
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
      <section style={{ backgroundColor: "var(--parchment)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow eyebrow-sage">Before You Schedule</span>
            <h2 className="display-sm" style={{ color: "var(--ink)", marginBottom: "2.5rem" }}>Common questions</h2>
          </FadeUp>
          <div style={{ maxWidth: 720 }}>
            {[
              { q: "How quickly will my items be listed?", a: "Once items arrive and are reviewed, standard listings go live within 5–7 business days. You could see items start selling within 10 days of pickup." },
              { q: "What if something doesn't sell?", a: "Items that don't move within the consignment window are returned to you or donated at your direction. I'll flag anything that hasn't moved at the 180-day mark." },
              { q: "Do I need to clean or prep the items?", a: "No. I handle the prep. Items should be in the condition they're in — I'll assess what's needed. Please don't send dirty clothing, bio-risk textiles, or items with infestation concerns." },
              { q: "What platforms do you use?", a: "I match items to the platform where they make the most sense — Poshmark (Ambassador), eBay, Etsy, Facebook Marketplace, Chairish, Vinted, Vestiaire, Grailed, local high-end resale, and private collector networks." },
              { q: "Can I send items if I'm not in LA?", a: "Yes — I work with 60–90 quart totes that fit an Uber courier cleanly. Items can be shipped via UPS Access Points or routed through a same-day courier. Reach out and we'll figure out logistics." },
            ].map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: "var(--ink)", padding: "6rem 0" }}>
        <div className="container">
          <FadeUp>
            <div style={{ maxWidth: 600 }}>
              <h2 className="display-md" style={{ color: "var(--parchment)", marginBottom: "1.5rem" }}>Ready to let some things go?</h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(248,244,227,0.7)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                Reach out and tell me what you have. I'll handle the rest.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-sage">Schedule a Pickup</Link>
                <Link href="/curated-resale-consignment" className="btn btn-outline-light">Full Resale Service</Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
