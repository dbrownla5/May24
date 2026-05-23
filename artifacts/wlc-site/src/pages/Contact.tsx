import { useState, useEffect, useRef } from "react";
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

type ClientType = "returning" | "new" | "";
type ServiceChoice =
  | "fast-bag" | "reset" | "house-call" | "closeout"
  | "bigger" | "not-sure" | "for-parent" | "";
type ReturningNeed = "book-again" | "bag-pickup" | "just-talk" | "";

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "white",
  border: "1.5px solid var(--warm-gray-lt)",
  padding: "0.85rem 1rem",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: "0.9rem",
  fontWeight: 400,
  color: "var(--ink)",
  outline: "none",
  transition: "border-color 0.18s ease",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.68rem",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--sage-dark)",
  marginBottom: "0.5rem",
};

function ChoiceButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "1rem 1.25rem",
        border: `2px solid ${selected ? "var(--ink)" : "var(--warm-gray-lt)"}`,
        backgroundColor: selected ? "var(--ink)" : "white",
        color: selected ? "var(--parchment)" : "var(--ink)",
        fontSize: "0.88rem",
        fontWeight: selected ? 600 : 400,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        cursor: "pointer",
        textAlign: "left",
        transition: "all 0.15s ease",
        lineHeight: 1.4,
      }}
    >
      {children}
    </button>
  );
}

export default function Contact() {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [clientType, setClientType] = useState<ClientType>("");
  const [serviceChoice, setServiceChoice] = useState<ServiceChoice>("");
  const [returningNeed, setReturningNeed] = useState<ReturningNeed>("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", neighborhood: "", situation: "" });

  function pick<T>(setter: (v: T) => void, val: T, next: 0 | 1 | 2 | 3) {
    setter(val);
    setTimeout(() => setStep(next), 80);
  }

  function handleChange(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function buildSummary() {
    if (clientType === "returning") {
      const needs: Record<ReturningNeed, string> = {
        "book-again": "Book a service again",
        "bag-pickup": "Schedule a bag pickup",
        "just-talk": "Just want to talk",
        "": "",
      };
      return needs[returningNeed] || "Returning client";
    }
    const choices: Record<ServiceChoice, string> = {
      "fast-bag": "Fast Bag Fill — free pickup",
      "reset": "The 4-Hour Reset ($495 flat)",
      "house-call": "The 2-Hour House Call ($175/hr)",
      "closeout": "The Closeout — transitioning a whole space",
      "bigger": "Something bigger — full reset, legacy, or ongoing",
      "not-sure": "Not sure yet — wants a call",
      "for-parent": "Reaching out about a parent or family member",
      "": "",
    };
    return choices[serviceChoice] || "";
  }

  function getPlaceholder() {
    if (clientType === "returning") return "What are you working with? Any context is helpful.";
    if (serviceChoice === "reset") return "What space are you thinking? Closet, bedroom, post-move? Any backstory?";
    if (serviceChoice === "fast-bag") return "What kind of things are you looking to move? Clothing, furniture, both?";
    if (serviceChoice === "house-call") return "What's been on the list? What needs attention?";
    if (serviceChoice === "closeout") return "What's the situation? Moving, transitioning a parent's home, downsizing?";
    if (serviceChoice === "bigger") return "Tell me what's going on. The more context the better.";
    if (serviceChoice === "for-parent") return "Where is the parent located? What's the situation?";
    return "What's going on? What do you need help with?";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const summary = buildSummary();
    const subject = encodeURIComponent(`New Inquiry — ${summary || "General"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nNeighborhood: ${form.neighborhood}\n\nClient type: ${clientType === "returning" ? "Returning" : "New"}\nInterest: ${summary}\n\nSituation:\n${form.situation}`
    );
    window.location.href = `mailto:dayna@thewelllivedcitizen.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const progressPct = step === 0 ? 10 : step === 1 ? 40 : step === 2 ? 75 : 100;

  return (
    <div style={{ backgroundColor: "var(--parchment)", minHeight: "100vh" }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ backgroundColor: "var(--ink)", paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ color: "rgba(248,244,227,0.45)" }}>Get in Touch</span>
              <h1 className="display-lg" style={{ color: "var(--parchment)", marginBottom: "1.5rem" }}>
                Let's figure out<br />what you need.
              </h1>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(248,244,227,0.7)", lineHeight: 1.75 }}>
                A few quick questions — then I'll be in touch within 24 hours to schedule a call. No pressure, no commitment.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ backgroundColor: "rgba(248,244,227,0.06)", border: "1px solid rgba(248,244,227,0.12)", padding: "1.75rem" }}>
                <h3 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--parchment)", marginBottom: "1rem" }}>Prefer to reach out directly?</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <a href="tel:3234331350" style={{ fontSize: "0.9rem", fontWeight: 400, color: "rgba(248,244,227,0.75)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ color: "var(--sage)", fontSize: "0.65rem", fontWeight: 700 }}>CALL</span>(323) 433-1350
                  </a>
                  <a href="mailto:dayna@thewelllivedcitizen.com" style={{ fontSize: "0.9rem", fontWeight: 400, color: "rgba(248,244,227,0.75)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ color: "var(--sage)", fontSize: "0.65rem", fontWeight: 700 }}>EMAIL</span>dayna@thewelllivedcitizen.com
                  </a>
                </div>
              </div>
              <div style={{ backgroundColor: "var(--sage)", padding: "1.25rem 1.75rem" }}>
                <p style={{ fontSize: "0.85rem", fontWeight: 400, color: "var(--ink)", lineHeight: 1.65 }}>
                  I respond to every inquiry personally. You won't get an auto-reply and then silence.
                </p>
                <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(56,48,46,0.55)", marginTop: "0.6rem" }}>— Dayna</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      {submitted ? (
        <section style={{ backgroundColor: "var(--parchment)", padding: "8rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: 540 }}>
              <span className="eyebrow eyebrow-sage">Message Sent</span>
              <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>Thank you — I'll be in touch.</h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
                Your email app should have opened with the message ready to send. If it didn't, reach me directly at{" "}
                <a href="mailto:dayna@thewelllivedcitizen.com" style={{ color: "var(--ink)", fontWeight: 500 }}>dayna@thewelllivedcitizen.com</a>{" "}
                or call <a href="tel:3234331350" style={{ color: "var(--ink)", fontWeight: 500 }}>(323) 433-1350</a>.
              </p>
              <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--sage-dark)" }}>I'll be in touch within 24 hours.</p>
            </div>
          </div>
        </section>
      ) : (
        <section style={{ backgroundColor: "var(--parchment)", padding: "5rem 0 7rem" }}>
          <div className="container">
            <FadeUp>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: "5rem", alignItems: "start" }}>

                {/* ── SIDEBAR ── */}
                <div style={{ position: "sticky", top: "7rem" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--sage-dark)" }}>
                        Progress
                      </span>
                      <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "var(--sage-dark)" }}>{progressPct}%</span>
                    </div>
                    <div style={{ height: 3, backgroundColor: "var(--warm-gray-lt)", width: "100%" }}>
                      <div style={{ height: "100%", width: `${progressPct}%`, backgroundColor: "var(--sage)", transition: "width 0.4s ease" }} />
                    </div>
                  </div>

                  <h2 className="display-sm" style={{ color: "var(--ink)", marginBottom: "1rem", lineHeight: 1.2 }}>
                    {step === 0 && "First question."}
                    {step === 1 && clientType === "returning" && "Good to hear from you."}
                    {step === 1 && clientType === "new" && "What brings you in?"}
                    {step === 2 && "A little context."}
                    {step === 3 && "Almost done."}
                  </h2>
                  <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--sage-dark)", lineHeight: 1.75 }}>
                    {step === 0 && "This helps me know how to best prepare for the call."}
                    {step === 1 && clientType === "returning" && "What do you need this time around?"}
                    {step === 1 && clientType === "new" && "Pick the one that sounds most like your situation. You can always change it on the call."}
                    {step === 2 && "The more context you give me, the more useful the first conversation will be. Nothing here is binding."}
                    {step === 3 && "Where should I reach you?"}
                  </p>

                  {step > 0 && (
                    <button
                      type="button"
                      onClick={() => setStep(prev => (prev - 1) as 0 | 1 | 2 | 3)}
                      style={{ marginTop: "2rem", fontSize: "0.78rem", fontWeight: 500, color: "var(--sage-dark)", background: "none", border: "none", cursor: "pointer", padding: 0, textDecoration: "underline" }}
                    >
                      ← Back
                    </button>
                  )}
                </div>

                {/* ── FORM STEPS ── */}
                <div>

                  {/* STEP 0: Returning or New */}
                  {step === 0 && (
                    <div>
                      <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--ink)", marginBottom: "1.5rem" }}>
                        Have we worked together before?
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: 420 }}>
                        <ChoiceButton selected={clientType === "returning"} onClick={() => pick(setClientType, "returning", 1)}>
                          Yes — I'm a returning client
                        </ChoiceButton>
                        <ChoiceButton selected={clientType === "new"} onClick={() => pick(setClientType, "new", 1)}>
                          No — reaching out for the first time
                        </ChoiceButton>
                      </div>
                    </div>
                  )}

                  {/* STEP 1A: Returning — what do you need */}
                  {step === 1 && clientType === "returning" && (
                    <div>
                      <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--ink)", marginBottom: "1.5rem" }}>
                        What would you like to do?
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: 420 }}>
                        <ChoiceButton selected={returningNeed === "book-again"} onClick={() => pick(setReturningNeed, "book-again", 2)}>
                          Book a service again
                        </ChoiceButton>
                        <ChoiceButton selected={returningNeed === "bag-pickup"} onClick={() => pick(setReturningNeed, "bag-pickup", 2)}>
                          Schedule a bag pickup
                        </ChoiceButton>
                        <ChoiceButton selected={returningNeed === "just-talk"} onClick={() => pick(setReturningNeed, "just-talk", 2)}>
                          Just want to get on the phone
                        </ChoiceButton>
                      </div>
                    </div>
                  )}

                  {/* STEP 1B: New — which service */}
                  {step === 1 && clientType === "new" && (
                    <div>
                      <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--ink)", marginBottom: "1.5rem" }}>
                        Which sounds most like what you're looking for?
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <ChoiceButton selected={serviceChoice === "fast-bag"} onClick={() => pick(setServiceChoice, "fast-bag", 2)}>
                          <span style={{ fontWeight: 700 }}>Fast Bag Fill</span><br />
                          <span style={{ fontSize: "0.8rem", opacity: 0.75 }}>Free pickup · Clothing, accessories, items I'm ready to let go</span>
                        </ChoiceButton>
                        <ChoiceButton selected={serviceChoice === "reset"} onClick={() => pick(setServiceChoice, "reset", 2)}>
                          <span style={{ fontWeight: 700 }}>The 4-Hour Reset</span><br />
                          <span style={{ fontSize: "0.8rem", opacity: 0.75 }}>$495 flat · One focused session in one space</span>
                        </ChoiceButton>
                        <ChoiceButton selected={serviceChoice === "house-call"} onClick={() => pick(setServiceChoice, "house-call", 2)}>
                          <span style={{ fontWeight: 700 }}>The 2-Hour House Call</span><br />
                          <span style={{ fontSize: "0.8rem", opacity: 0.75 }}>$175/hr · Practical help with the everyday stuff</span>
                        </ChoiceButton>
                        <ChoiceButton selected={serviceChoice === "closeout"} onClick={() => pick(setServiceChoice, "closeout", 2)}>
                          <span style={{ fontWeight: 700 }}>The Closeout</span><br />
                          <span style={{ fontSize: "0.8rem", opacity: 0.75 }}>You go first, I close out — whole-space transition</span>
                        </ChoiceButton>
                        <ChoiceButton selected={serviceChoice === "bigger"} onClick={() => pick(setServiceChoice, "bigger", 2)}>
                          <span style={{ fontWeight: 700 }}>Something bigger</span><br />
                          <span style={{ fontSize: "0.8rem", opacity: 0.75 }}>Full home reset, legacy planning, or an ongoing arrangement</span>
                        </ChoiceButton>
                        <ChoiceButton selected={serviceChoice === "for-parent"} onClick={() => pick(setServiceChoice, "for-parent", 2)}>
                          <span style={{ fontWeight: 700 }}>I'm reaching out about a parent or family member</span><br />
                          <span style={{ fontSize: "0.8rem", opacity: 0.75 }}>House calls, check-ins, home support, or a transition</span>
                        </ChoiceButton>
                        <ChoiceButton selected={serviceChoice === "not-sure"} onClick={() => pick(setServiceChoice, "not-sure", 2)}>
                          <span style={{ fontWeight: 700 }}>I'm not sure — let's just get on the phone</span><br />
                          <span style={{ fontSize: "0.8rem", opacity: 0.75 }}>I'll figure out what makes sense once we talk</span>
                        </ChoiceButton>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Context */}
                  {step === 2 && (
                    <div>
                      <div style={{ backgroundColor: "var(--parchment-mid)", padding: "1rem 1.25rem", marginBottom: "2rem", borderLeft: "3px solid var(--sage)" }}>
                        <p style={{ fontSize: "0.78rem", fontWeight: 500, color: "var(--ink)" }}>{buildSummary()}</p>
                      </div>
                      <div style={{ marginBottom: "1.75rem" }}>
                        <label style={labelStyle}>Tell me what's going on</label>
                        <textarea
                          value={form.situation}
                          onChange={e => handleChange("situation", e.target.value)}
                          style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
                          placeholder={getPlaceholder()}
                          onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = "var(--sage)"}
                          onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = "var(--warm-gray-lt)"}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-ink"
                        onClick={() => setStep(3)}
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        Continue →
                      </button>
                    </div>
                  )}

                  {/* STEP 3: Contact info + submit */}
                  {step === 3 && (
                    <form onSubmit={handleSubmit}>
                      <div style={{ backgroundColor: "var(--parchment-mid)", padding: "1rem 1.25rem", marginBottom: "2rem", borderLeft: "3px solid var(--sage)" }}>
                        <p style={{ fontSize: "0.78rem", fontWeight: 500, color: "var(--ink)" }}>{buildSummary()}</p>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                        <div>
                          <label style={labelStyle}>First &amp; Last Name *</label>
                          <input required type="text" value={form.name} onChange={e => handleChange("name", e.target.value)} style={inputStyle} placeholder="Your full name"
                            onFocus={e => (e.target as HTMLInputElement).style.borderColor = "var(--sage)"}
                            onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--warm-gray-lt)"} />
                        </div>
                        <div>
                          <label style={labelStyle}>Email *</label>
                          <input required type="email" value={form.email} onChange={e => handleChange("email", e.target.value)} style={inputStyle} placeholder="your@email.com"
                            onFocus={e => (e.target as HTMLInputElement).style.borderColor = "var(--sage)"}
                            onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--warm-gray-lt)"} />
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                        <div>
                          <label style={labelStyle}>Phone</label>
                          <input type="tel" value={form.phone} onChange={e => handleChange("phone", e.target.value)} style={inputStyle} placeholder="(323) 000-0000"
                            onFocus={e => (e.target as HTMLInputElement).style.borderColor = "var(--sage)"}
                            onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--warm-gray-lt)"} />
                        </div>
                        <div>
                          <label style={labelStyle}>Neighborhood</label>
                          <input type="text" value={form.neighborhood} onChange={e => handleChange("neighborhood", e.target.value)} style={inputStyle} placeholder="e.g. Silver Lake, Brentwood"
                            onFocus={e => (e.target as HTMLInputElement).style.borderColor = "var(--sage)"}
                            onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--warm-gray-lt)"} />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-ink" style={{ width: "100%", justifyContent: "center", padding: "1rem" }}>
                        Send Message
                      </button>
                      <p style={{ fontSize: "0.75rem", color: "var(--sage-dark)", marginTop: "0.75rem", lineHeight: 1.6 }}>
                        This opens your email app with your message ready to send. Or call directly: (323) 433-1350.
                      </p>
                    </form>
                  )}

                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
