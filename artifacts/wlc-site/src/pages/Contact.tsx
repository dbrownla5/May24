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

type ServiceType = "" | "reset" | "house-calls" | "resale" | "fast-bag" | "legacy" | "not-sure";

const serviceLabels: Record<ServiceType, string> = {
  "": "",
  "reset": "The Reset (4-Hour Session)",
  "house-calls": "House Calls (Hourly Support)",
  "resale": "Resale & Consignment",
  "fast-bag": "Fast Bag Fill (Pickup)",
  "legacy": "Legacy Inventory & Planning",
  "not-sure": "I'm not sure yet",
};

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
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.7rem",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--sage-dark)",
  marginBottom: "0.5rem",
};

export default function Contact() {
  const [service, setService] = useState<ServiceType>("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", neighborhood: "",
    urgency: "", situation: "",
  });

  function handleChange(field: string, value: string) {
    if (field === "service") { setService(value as ServiceType); return; }
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry — ${serviceLabels[service] || "General"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nNeighborhood: ${form.neighborhood}\n\nService Interest: ${serviceLabels[service] || "Not specified"}\nTimeline: ${form.urgency}\n\nSituation:\n${form.situation}`
    );
    window.location.href = `mailto:dayna@thewelllivedcitizen.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div style={{ backgroundColor: "var(--parchment)", minHeight: "100vh" }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ backgroundColor: "var(--ink)", paddingTop: "10rem", paddingBottom: "6rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ color: "rgba(248,244,227,0.45)" }}>Get in Touch</span>
              <h1 className="display-lg" style={{ color: "var(--parchment)", marginBottom: "1.5rem" }}>
                Let's figure out<br />what you need.
              </h1>
              <p style={{ fontSize: "1.1rem", fontWeight: 300, color: "rgba(248,244,227,0.7)", lineHeight: 1.75 }}>
                Fill out the form and I'll be in touch within 24–48 hours to schedule a brief call. No pressure, no commitment — just a conversation.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ backgroundColor: "rgba(248,244,227,0.06)", border: "1px solid rgba(248,244,227,0.12)", padding: "2rem" }}>
                <h3 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--parchment)", marginBottom: "1.25rem" }}>Prefer to reach out directly?</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <a href="tel:3234331350" style={{ fontSize: "0.9rem", fontWeight: 400, color: "rgba(248,244,227,0.75)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ color: "var(--sage)", fontSize: "0.7rem", fontWeight: 700 }}>CALL</span>(323) 433-1350
                  </a>
                  <a href="mailto:dayna@thewelllivedcitizen.com" style={{ fontSize: "0.9rem", fontWeight: 400, color: "rgba(248,244,227,0.75)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ color: "var(--sage)", fontSize: "0.7rem", fontWeight: 700 }}>EMAIL</span>dayna@thewelllivedcitizen.com
                  </a>
                </div>
              </div>
              <div style={{ backgroundColor: "var(--sage)", padding: "1.5rem 2rem" }}>
                <p style={{ fontSize: "0.85rem", fontWeight: 400, color: "var(--ink)", lineHeight: 1.65 }}>
                  I respond to every inquiry personally. You won't get an auto-reply and then silence. If I'm unavailable, I'll tell you when to expect a response.
                </p>
                <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(56,48,46,0.6)", marginTop: "0.75rem" }}>— Dayna</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM / CONFIRMATION ── */}
      {submitted ? (
        <section style={{ backgroundColor: "var(--parchment)", padding: "8rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: 540 }}>
              <span className="eyebrow eyebrow-sage">Message Sent</span>
              <h2 className="display-md" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>Thank you for reaching out.</h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
                Your default email app should have opened with the message ready to send. If it didn't, you can reach me directly at <a href="mailto:dayna@thewelllivedcitizen.com" style={{ color: "var(--ink)", fontWeight: 500 }}>dayna@thewelllivedcitizen.com</a> or call <a href="tel:3234331350" style={{ color: "var(--ink)", fontWeight: 500 }}>(323) 433-1350</a>.
              </p>
              <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--sage-dark)", lineHeight: 1.75 }}>
                I'll be in touch within 24–48 hours.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section style={{ backgroundColor: "var(--parchment)", padding: "5rem 0" }}>
          <div className="container">
            <FadeUp>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}>
                {/* Left sidebar */}
                <div style={{ position: "sticky", top: "7rem" }}>
                  <span className="eyebrow eyebrow-sage">Intake Form</span>
                  <h2 className="display-sm" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>Tell me a bit about what you're working with.</h2>
                  <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--sage-dark)", lineHeight: 1.75, marginBottom: "2rem" }}>
                    The more context you give me, the better I can prepare. Nothing here is binding — it just helps me understand your situation before the call.
                  </p>
                  {service && service !== "not-sure" && (
                    <div style={{ backgroundColor: "var(--ink)", padding: "1.5rem", marginTop: "1rem" }}>
                      <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--sage)", marginBottom: "0.5rem" }}>
                        {serviceLabels[service]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "3rem" }}>
                    <h3 style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink)", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--warm-gray-lt)" }}>Your Information</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div style={{ marginBottom: "1.75rem" }}>
                        <label style={labelStyle}>First &amp; Last Name *</label>
                        <input required type="text" value={form.name} onChange={e => handleChange("name", e.target.value)} style={inputStyle} placeholder="Your full name"
                          onFocus={e => (e.target as HTMLInputElement).style.borderColor = "var(--sage)"}
                          onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--warm-gray-lt)"} />
                      </div>
                      <div style={{ marginBottom: "1.75rem" }}>
                        <label style={labelStyle}>Email Address *</label>
                        <input required type="email" value={form.email} onChange={e => handleChange("email", e.target.value)} style={inputStyle} placeholder="your@email.com"
                          onFocus={e => (e.target as HTMLInputElement).style.borderColor = "var(--sage)"}
                          onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--warm-gray-lt)"} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div style={{ marginBottom: "1.75rem" }}>
                        <label style={labelStyle}>Phone Number</label>
                        <input type="tel" value={form.phone} onChange={e => handleChange("phone", e.target.value)} style={inputStyle} placeholder="(323) 000-0000"
                          onFocus={e => (e.target as HTMLInputElement).style.borderColor = "var(--sage)"}
                          onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--warm-gray-lt)"} />
                      </div>
                      <div style={{ marginBottom: "1.75rem" }}>
                        <label style={labelStyle}>Neighborhood / Area</label>
                        <input type="text" value={form.neighborhood} onChange={e => handleChange("neighborhood", e.target.value)} style={inputStyle} placeholder="e.g. Silver Lake, Brentwood"
                          onFocus={e => (e.target as HTMLInputElement).style.borderColor = "var(--sage)"}
                          onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--warm-gray-lt)"} />
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: "3rem" }}>
                    <h3 style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink)", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--warm-gray-lt)" }}>What You're Looking For</h3>
                    <div style={{ marginBottom: "1.75rem" }}>
                      <label style={labelStyle}>Which service are you most interested in? *</label>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                        {(Object.keys(serviceLabels) as ServiceType[]).filter(k => k !== "").map(key => (
                          <button key={key} type="button" onClick={() => handleChange("service", key)} style={{
                            padding: "0.85rem 1rem",
                            border: `1.5px solid ${service === key ? "var(--sage)" : "var(--warm-gray-lt)"}`,
                            backgroundColor: service === key ? "var(--sage)" : "white",
                            color: service === key ? "var(--ink)" : "var(--ink)",
                            fontSize: "0.82rem", fontWeight: service === key ? 600 : 400,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            cursor: "pointer", textAlign: "left", transition: "all 0.18s ease",
                          }}>
                            {serviceLabels[key]}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginBottom: "1.75rem" }}>
                      <label style={labelStyle}>How soon are you looking to get started?</label>
                      <select value={form.urgency} onChange={e => handleChange("urgency", e.target.value)} style={{ ...inputStyle, backgroundColor: "white", cursor: "pointer" }}
                        onFocus={e => (e.target as HTMLSelectElement).style.borderColor = "var(--sage)"}
                        onBlur={e => (e.target as HTMLSelectElement).style.borderColor = "var(--warm-gray-lt)"}>
                        <option value="">Select one</option>
                        <option value="asap">As soon as possible</option>
                        <option value="2weeks">Within the next 2 weeks</option>
                        <option value="month">Within the next month</option>
                        <option value="exploring">Just exploring for now</option>
                      </select>
                    </div>

                    <div style={{ marginBottom: "1.75rem" }}>
                      <label style={labelStyle}>Tell me about your situation</label>
                      <textarea value={form.situation} onChange={e => handleChange("situation", e.target.value)}
                        style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
                        placeholder={service === "reset" ? "What space are you working with? What's been happening there?" : service === "legacy" ? "Whose household is this? What's the context?" : "What's going on? What do you need help with?"}
                        onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = "var(--sage)"}
                        onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = "var(--warm-gray-lt)"} />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-ink" style={{ width: "100%", justifyContent: "center", padding: "1rem" }}>
                    Send Message
                  </button>
                  <p style={{ fontSize: "0.78rem", color: "var(--sage-dark)", marginTop: "1rem", lineHeight: 1.6 }}>
                    This will open your email app with your message pre-filled. Or reach me directly at (323) 433-1350.
                  </p>
                </form>
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
