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
                Free Pickup · Commission-Only · No Upfront Cost
              </span>
            </div>
            <h1 className="display-lg" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>Fast Bag Fill</h1>
            <p style={{ fontSize: "1.15rem", fontWeight: 300, color: "var(--ink)", lineHeight: 1.75, marginBottom: "1.5rem", opacity: 0.85 }}>
              For the closet, the donation pile, the bag that's been waiting in the hallway. You have things you'd sell yourself — if you had the time, the platforms, or the patience to figure out which item belongs where.
            </p>
            <p style={{ fontSize: "1.15rem", fontWeight: 300, color: "var(--ink)", lineHeight: 1.75, marginBottom: "1.5rem", opacity: 0.85 }}>
              Fill a bag. I pick it up. I make the calls you don't have time to make. You get a list of what's being listed, what's being donated, and what's a judgment call — then I handle the rest.
            </p>
            <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--ink)", lineHeight: 1.7, marginBottom: "2.5rem", opacity: 0.7, fontStyle: "italic" }}>
              Clothing and accessories only. Home decor, furniture, art, and delicate valuables require a local consultation.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact?service=fast-bag-fill" className="btn btn-ink">Schedule a Pickup</Link>
              <span style={{ fontSize: "0.8rem", fontWeight: 300, color: "var(--ink)", opacity: 0.6 }}>Free pickup · No payment until something sells</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section style={{ backgroundColor: "var(--parchment)", padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "5rem", alignItems: "start" }}>
            <FadeUp>
              <span className="eyebrow eyebrow-sage">Who This Is For</span>
              <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "2rem" }}>
                You'd sell it yourself if you had the time.
              </h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                You have a decent stack of clothes, designer pieces, or accessories with real second-market value. You know they'd sell on Poshmark, eBay, or somewhere. You just can't sit down and figure out which platform takes what, what the listing structure should be, or which questions to answer when a buyer asks about the seam.
              </p>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                You might already have a Poshmark or Depop account you opened in 2022 and never finished setting up. You might have tried to list one piece and gotten lost in the flat-lay photography. You might just be done thinking about it.
              </p>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.8 }}>
                Fast Bag Fill is the answer to that exact situation. You fill a bag, I pick it up, and you stop carrying the mental weight of "I should really do something with that."
              </p>
            </FadeUp>
            <FadeUp delay={100}>
              <div style={{ backgroundColor: "var(--ink)", padding: "2.5rem", boxShadow: "6px 6px 0px var(--sage)" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--parchment)", marginBottom: "1.5rem" }}>
                  The full flow
                </h3>
                {[
                  { step: "Fill a bag", note: "Clothing, shoes, accessories, designer pieces" },
                  { step: "Schedule a pickup", note: "Free within LA service area" },
                  { step: "I evaluate after pickup", note: "Piece by piece, on my time, not yours" },
                  { step: "You get the list", note: "What's being listed, what's headed for donation, what's a judgment call" },
                  { step: "Optional decision window", note: "Weigh in on judgment calls if you want — or let me handle it" },
                  { step: "You sign the eDoc release at pickup", note: "Items become WLC property until sold or the 6-month check-in" },
                  { step: "Listings go live", note: "Routed to the platform where the right buyer lives" },
                  { step: "Payout when items sell", note: "Monthly report by the 1st, payout by the 5th" },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: "0.75rem 0",
                    borderBottom: "1px solid rgba(248,244,227,0.1)",
                    display: "flex", gap: "0.75rem", alignItems: "flex-start",
                  }}>
                    <span style={{ fontSize: "0.6rem", fontWeight: 600, color: "var(--sage)", minWidth: "1.2rem", marginTop: "0.2rem" }}>0{i + 1}</span>
                    <div>
                      <p style={{ fontSize: "0.88rem", fontWeight: 500, color: "var(--parchment)", marginBottom: "0.15rem" }}>{item.step}</p>
                      <p style={{ fontSize: "0.75rem", fontWeight: 300, color: "rgba(248,244,227,0.55)", lineHeight: 1.5 }}>{item.note}</p>
                    </div>
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
              Clothing and accessories you've been meaning to let go of.
            </h2>
            <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(248,244,227,0.65)", lineHeight: 1.75, maxWidth: 560, marginBottom: "1rem" }}>
              The Fast Bag Fill is clothing and accessories only. Home decor, furniture, art, and delicate valuables are handled separately through a local consultation.
            </p>
            <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(248,244,227,0.5)", lineHeight: 1.75, maxWidth: 560, marginBottom: "3rem", fontStyle: "italic" }}>
              Items you took care of and know deserve another life. Please do not send dirty clothing or bio-risk textiles.
            </p>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", backgroundColor: "rgba(248,244,227,0.1)" }}>
            {[
              "Clothing",
              "Shoes",
              "Handbags",
              "Belts & small leather goods",
              "Scarves & wraps",
              "Hats",
              "Jewelry",
              "Watches",
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
                <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>You pay nothing up front. Ever.</h2>
                <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                  Fast Bag Fill is a free pickup and a commission-only service. No booking fee, no consultation fee, no charge for the bag evaluation. You pay nothing until something sells — and even then, you don't write a check. Your share is paid out from the proceeds.
                </p>
                <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.75 }}>
                  Proceeds are split after platform fees and shipping are deducted. You receive your share by the 5th of each month via Venmo, Zelle, or check.
                </p>
              </div>
              <div>
                {[
                  { label: "Clothing & Accessories", value: "45% to you / 55% WLC", note: "Standard resale items" },
                  { label: "Designer & Luxury", value: "50% to you / 50% WLC", note: "Designer handbags, luxury clothing" },
                  { label: "Pickup fee", value: "Free", note: "Within LA service area" },
                  { label: "Booking fee", value: "None", note: "No upfront cost" },
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

      {/* ── WHAT YOU SIGN ── */}
      <section style={{ backgroundColor: "var(--parchment)", padding: "5rem 0" }}>
        <div className="container">
          <FadeUp>
            <span className="eyebrow eyebrow-sage">The Paperwork</span>
            <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "2rem", maxWidth: 560 }}>
              Two signatures. That's it.
            </h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <FadeUp delay={0}>
              <div style={{ border: "1.5px solid var(--warm-gray-lt)", padding: "2.5rem" }}>
                <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--sage)" }}>01 — Resale Agreement</span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--ink)", margin: "0.75rem 0 1rem" }}>Signed after evaluation</h3>
                <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.7 }}>
                  After I evaluate the bag, you get a list — what's being listed, what's headed for donation, what's a judgment call. You sign the resale agreement for the listed items. Commission rates, payout terms, and platform routing all live in this document.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={60}>
              <div style={{ border: "1.5px solid var(--warm-gray-lt)", padding: "2.5rem" }}>
                <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--sage)" }}>02 — eDoc Release at Pickup</span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--ink)", margin: "0.75rem 0 1rem" }}>Signed at handoff</h3>
                <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.7 }}>
                  At pickup, you sign an eDoc release. From that moment, items are WLC property until they sell or the 6-month check-in, whichever comes first. The release also lets you opt in to the decision window on judgment-call items, or pass that authority to me entirely.
                </p>
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={120}>
            <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "var(--sage-dark)", marginTop: "2rem", lineHeight: 1.7, fontStyle: "italic" }}>
              The 6-month check-in is for unsold items only. If something hasn't sold, we talk about whether to relist, donate, or return it.
            </p>
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
                q: "Is pickup really free?",
                a: "Yes, within my primary service area in Los Angeles. No booking fee, no consultation fee, no charge for evaluating the bag. For locations outside my standard area, a small travel fee may apply — always disclosed before I confirm the pickup.",
              },
              {
                q: "When do I pay anything?",
                a: "You don't. Fast Bag Fill is commission-only. You pay nothing up front, nothing at pickup, nothing during evaluation. When items sell, your share is paid out from the proceeds via Venmo, Zelle, or check — by the 5th of the following month.",
              },
              {
                q: "How much do I need to have?",
                a: "One bag is enough. There's no minimum. If you have more — multiple bags, a closet to clear, a stack from a recent edit — I can handle it in a single pickup. The bigger the haul, the more efficient the flow.",
              },
              {
                q: "Do I need to sort or prep anything?",
                a: "No. Fill the bag with what's ready to go. I do the sorting and evaluation after pickup. You don't need to make any decisions before I arrive.",
              },
              {
                q: "What if some items aren't worth listing?",
                a: "You'll get a list of what's being listed, what's better routed to donation, and what's a judgment call. You can weigh in on the judgment-call items if you want — or pass that authority to me at pickup. Donations are handled by me. You don't make another trip.",
              },
              {
                q: "Who owns the items once I hand them off?",
                a: "Once you sign the eDoc release at pickup, the items become WLC property until they sell or until the 6-month check-in. The 6-month check-in is for unsold items only — we talk about whether to relist, donate, or return.",
              },
              {
                q: "What platforms do you use for resale?",
                a: "I match items to the platform where they make the most sense — Poshmark (Ambassador), eBay, Etsy, Facebook Marketplace, Chairish, Vinted, Vestiaire, Grailed, local high-end resale, and private collector networks.",
              },
              {
                q: "How fast can a pickup happen?",
                a: "Most pickups are scheduled within 2–5 days. Urgent pickups (moves, closeouts, time-sensitive transitions) are usually doable inside 48 hours. Use the scheduling form to flag urgency.",
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
