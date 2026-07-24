import { useState } from "react";
import { Menu, X, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

// ─── Contact form endpoint ────────────────────────────────────────────────
// Sign up free at formspree.io → create form → paste your form ID below
const FORMSPREE_ID = "YOUR_FORM_ID"; // e.g. "xpwzyjnb"

// ─── Palette: descent from space to Earth ───────────────────────────────
const C = {
  space:    "#081c2e",   // hero — deep ocean/space boundary
  ocean:    "#0d2a40",   // products — upper atmosphere
  forest:   "#07200e",   // mission — arriving at the surface
  earth:    "#0d2a40",   // team — teal again, different context
  ground:   "#050e1a",   // contact — night sky from the surface
  accent:   "#34d399",   // precise emerald
  text:     "#f0f9ff",
  muted:    "rgba(240,249,255,0.50)",
  faint:    "rgba(240,249,255,0.07)",
  border:   "rgba(240,249,255,0.08)",
};

const SYNE = "'Syne', sans-serif";
const DM   = "'DM Sans', sans-serif";

// ─── Scroll reveal ───────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Section label ───────────────────────────────────────────────────────
const Label = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: "0.62rem", letterSpacing: "0.4em", textTransform: "uppercase", color: C.accent, marginBottom: "14px", fontFamily: DM }}>
    {children}
  </p>
);

// ─── Products ────────────────────────────────────────────────────────────
const products = [
  {
    href: "/aims",
    tag: "Environmental Detection",
    name: "AIMS",
    sub: "Ambient Ionization Mass Spectrometry",
    body: "Identify 72,000+ organic compounds in water, urine, or blood — with results in 48 hours. Not a test. An intelligence system.",
    stat: "72,000+", unit: "Detectable compounds",
  },
  {
    href: "/aims",
    tag: "Source Intelligence",
    name: "Aquity",
    sub: "Non-Targeted Analysis Platform",
    body: "Aquity maps every detected compound back to its industrial and geographic source. Municipalities get answers — not a PDF of unknowns.",
    stat: "48 hr", unit: "Lab turnaround",
  },
  {
    href: "/rbt",
    tag: "Field Detection",
    name: "Bacterial Test",
    sub: "Rapid Water Safety",
    body: "3mL. 10 seconds. No lab. No expertise required. Disrupting a $2.3B market with a test anyone can run anywhere.",
    stat: "$10", unit: "Per test at scale",
  },
];

// ─── Team ────────────────────────────────────────────────────────────────
const team = [
  { initials: "SE", name: "Scott Ensminger",    role: "Founder" },
  { initials: "JS", name: "Jeff Streck",         role: "Sales & Marketing" },
  { initials: "HE", name: "Hunter Ensminger",   role: "Operations" },
  { initials: "LG", name: "Lillie Geiersbach",  role: "Montana" },
  { initials: "LD", name: "Logan Deal",          role: "Business Development" },
  { initials: "JE", name: "Jyl Ensminger",      role: "Montana" },
];

// ─── Process steps ───────────────────────────────────────────────────────
const process = [
  { n: "01", title: "Identify", body: "We scan the landscape for technologies with a TRL 7+ that are economically AND ecologically superior. Both, always." },
  { n: "02", title: "Deploy", body: "We connect those technologies with markets, science backing, and field-credible business execution — across our exclusive territory." },
  { n: "03", title: "Scale", body: "We build the distribution, relationships, and infrastructure to drive adoption where it matters — in the land, the lab, and the boardroom." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", interest: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const input = (base: string = "") =>
    `${base} w-full px-4 py-3 text-sm outline-none transition-colors` as string;

  const inputStyle: React.CSSProperties = {
    background: "rgba(240,249,255,0.05)",
    border: `1px solid ${C.border}`,
    color: C.text,
    fontFamily: DM,
    fontSize: "0.9rem",
  };
  const inputFocus = (el: HTMLElement) => { el.style.borderColor = C.accent; };
  const inputBlur  = (el: HTMLElement) => { el.style.borderColor = C.border; };

  return (
    <div style={{ backgroundColor: C.space, color: C.text, fontFamily: DM }} className="overflow-x-hidden">

      {/* ════════════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline src="/hero2.mp4" poster="/hero-poster.jpg" />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom, rgba(8,28,46,0.72) 0%, rgba(8,28,46,0.25) 45%, rgba(8,28,46,0.92) 100%)`,
        }} />

        {/* Nav */}
        <nav className="relative z-20 flex items-start justify-between px-8 pt-8 md:px-14 md:pt-10">
          <div>
            <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "2.6rem", fontWeight: 700, lineHeight: 1, letterSpacing: "0.06em" }}>ITC</p>
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.28em", color: C.muted, marginTop: "5px", textTransform: "uppercase" }}>
              Inception Technology Company
            </p>
          </div>
          <p className="hidden md:block max-w-xs text-right"
            style={{ color: C.muted, fontSize: "0.88rem", lineHeight: 1.8, fontStyle: "italic" }}>
            ITC connects proven environmental technology with the science, business, and leadership to put it to work at scale.
          </p>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2"><Menu size={26} /></button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-8"
            style={{ background: "rgba(8,28,46,0.97)" }}>
            <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={26} /></button>
            {["/", "/aims", "/rbt"].map((href, i) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: SYNE, fontSize: "1.3rem", fontWeight: 700, color: C.text, textDecoration: "none" }}>
                {["Home", "AIMS & Aquity", "Bacterial Test"][i]}
              </Link>
            ))}
          </div>
        )}

        {/* Hero copy */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 pb-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase", color: C.accent, marginBottom: "20px" }}>
            Regenerate Earth's Biosphere
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ fontFamily: SYNE, fontSize: "clamp(2rem, 5.5vw, 4.5rem)", fontWeight: 800,
              lineHeight: 1.08, letterSpacing: "-0.01em", textTransform: "uppercase",
              maxWidth: "880px", textShadow: "0 2px 48px rgba(0,0,0,0.6)" }}>
            Deploying Technologies<br />to Benefit Earth's Biosphere
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }} className="mt-10">
            <a href="#technologies"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px",
                background: C.accent, color: "#07200e", padding: "13px 44px",
                fontFamily: SYNE, fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
              Our Technologies <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. PRODUCTS — ocean layer
      ════════════════════════════════════════════════════ */}
      <section id="technologies" style={{ backgroundColor: C.ocean, padding: "96px 0" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <FadeUp>
            <Label>What We Offer</Label>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-4">
              <h2 style={{ fontFamily: SYNE, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
                CEC Technologies
              </h2>
              <p style={{ color: C.muted, fontSize: "0.88rem", maxWidth: "320px", lineHeight: 1.7 }}>
                ITC is the exclusive U.S. distributor for CEC Analytics.
              </p>
            </div>
            <div style={{ height: "1px", background: C.border, marginBottom: "48px" }} />
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-px" style={{ background: C.border }}>
            {products.map((p, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Link href={p.href} style={{ textDecoration: "none", display: "block" }}>
                  <div className="flex flex-col h-full" style={{ background: C.ocean, padding: "40px 34px", transition: "background 0.25s", minHeight: "400px" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(13,52,80,0.7)")}
                    onMouseLeave={e => (e.currentTarget.style.background = C.ocean)}>
                    <Label>{p.tag}</Label>
                    <h3 style={{ fontFamily: SYNE, fontSize: "1.7rem", fontWeight: 800, lineHeight: 1, marginBottom: "6px", letterSpacing: "-0.01em" }}>{p.name}</h3>
                    <p style={{ fontSize: "0.76rem", color: C.muted, marginBottom: "20px" }}>{p.sub}</p>
                    <div style={{ height: "1px", background: C.border, marginBottom: "20px" }} />
                    <p style={{ fontSize: "0.93rem", color: C.muted, lineHeight: 1.8, flex: 1 }}>{p.body}</p>
                    <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: `1px solid ${C.border}` }}>
                      <p style={{ fontFamily: SYNE, fontSize: "2rem", fontWeight: 800, color: C.accent, lineHeight: 1 }}>{p.stat}</p>
                      <p style={{ fontSize: "0.66rem", color: C.muted, marginTop: "6px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.unit}</p>
                    </div>
                    <div style={{ marginTop: "18px", display: "flex", alignItems: "center", gap: "8px", color: C.accent, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: SYNE, fontWeight: 700 }}>
                      Learn More <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          3. MISSION & PROCESS — forest/surface layer
      ════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.forest, padding: "96px 0" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">

          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
            <FadeUp>
              <Label>Who We Are</Label>
              <h2 style={{ fontFamily: SYNE, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: "28px" }}>
                The mission is the filter.
              </h2>
              <p style={{ fontSize: "1rem", color: C.muted, lineHeight: 1.9 }}>
                ITC connects world-changing, environmentally beneficial technologies with the scientific understanding, business expertise, and principled leadership required to deliver the impact these ideas are meant to make.
              </p>
              <p style={{ fontSize: "1rem", color: C.muted, lineHeight: 1.9, marginTop: "18px" }}>
                Every technology in our portfolio clears two bars: it has to be better for the biosphere, and it has to be better on economics. We don't accept trade-offs between the two.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ padding: "40px 36px", border: `1px solid rgba(52,211,153,0.15)`, borderLeft: `3px solid ${C.accent}` }}>
                <p style={{ fontFamily: SYNE, fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.6, color: C.text, fontStyle: "italic" }}>
                  "Built by people who know the land, the lab, and the boardroom — field credibility you can't hire at a consulting firm."
                </p>
                <p style={{ marginTop: "18px", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.accent, fontFamily: DM }}>
                  Scott Ensminger — Founder
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Process */}
          <FadeUp>
            <div style={{ height: "1px", background: C.border, marginBottom: "56px" }} />
            <Label>How We Operate</Label>
            <h2 style={{ fontFamily: SYNE, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: "48px" }}>
              Identify. Deploy. Scale.
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((s, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div>
                  <p style={{ fontFamily: SYNE, fontSize: "3rem", fontWeight: 800, color: `rgba(52,211,153,0.2)`, lineHeight: 1, marginBottom: "16px" }}>{s.n}</p>
                  <h3 style={{ fontFamily: SYNE, fontSize: "1.2rem", fontWeight: 800, color: C.text, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: C.muted, lineHeight: 1.85 }}>{s.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          4. TEAM
      ════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.earth, padding: "96px 0" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <FadeUp>
            <Label>The Team</Label>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-4">
              <h2 style={{ fontFamily: SYNE, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
                People who've done the work.
              </h2>
            </div>
            <div style={{ height: "1px", background: C.border, marginBottom: "56px" }} />
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {team.map((m, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  {/* Initials avatar */}
                  <div style={{
                    width: "72px", height: "72px", border: `1px solid ${C.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "18px", flexShrink: 0,
                    background: "rgba(52,211,153,0.06)",
                  }}>
                    <span style={{ fontFamily: SYNE, fontSize: "1.2rem", fontWeight: 800, color: C.accent, letterSpacing: "0.05em" }}>
                      {m.initials}
                    </span>
                  </div>
                  <p style={{ fontFamily: SYNE, fontSize: "1rem", fontWeight: 700, color: C.text, marginBottom: "4px" }}>{m.name}</p>
                  <p style={{ fontSize: "0.75rem", color: C.muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>{m.role}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <p style={{ marginTop: "56px", fontSize: "0.82rem", color: "rgba(240,249,255,0.25)", fontStyle: "italic" }}>
              Photos coming soon. We've been too busy doing the work.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          5. CONTACT
      ════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.ground, padding: "96px 0" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left — copy */}
            <FadeUp>
              <Label>Get In Touch</Label>
              <h2 style={{ fontFamily: SYNE, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: "24px" }}>
                The time to move is now.
              </h2>
              <p style={{ fontSize: "0.95rem", color: C.muted, lineHeight: 1.85, marginBottom: "36px" }}>
                Whether you're a municipality, a producer, or a potential partner — if the technology matches the mission, we want to hear from you.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { label: "General", email: "scott@itc.eco" },
                  { label: "Sales", email: "jeff@itc.eco" },
                ].map(c => (
                  <div key={c.email}>
                    <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.muted, marginBottom: "4px" }}>{c.label}</p>
                    <a href={`mailto:${c.email}`} style={{ color: C.accent, fontSize: "0.95rem", textDecoration: "none", fontFamily: SYNE, fontWeight: 600 }}>
                      {c.email}
                    </a>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Right — form */}
            <FadeUp delay={0.15}>
              {status === "success" ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px", padding: "60px 40px", border: `1px solid rgba(52,211,153,0.2)`, textAlign: "center" }}>
                  <CheckCircle size={40} color={C.accent} />
                  <p style={{ fontFamily: SYNE, fontSize: "1.3rem", fontWeight: 700 }}>Message received.</p>
                  <p style={{ color: C.muted, fontSize: "0.9rem" }}>We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.muted, display: "block", marginBottom: "6px" }}>Name *</label>
                      <input required className={input()} style={inputStyle} value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        onFocus={e => inputFocus(e.currentTarget)} onBlur={e => inputBlur(e.currentTarget)}
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.muted, display: "block", marginBottom: "6px" }}>Phone</label>
                      <input className={input()} style={inputStyle} value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        onFocus={e => inputFocus(e.currentTarget)} onBlur={e => inputBlur(e.currentTarget)}
                        placeholder="(555) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.muted, display: "block", marginBottom: "6px" }}>Email *</label>
                    <input required type="email" className={input()} style={inputStyle} value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={e => inputFocus(e.currentTarget)} onBlur={e => inputBlur(e.currentTarget)}
                      placeholder="you@company.com" />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.muted, display: "block", marginBottom: "6px" }}>Area of Interest</label>
                    <select className={input()} style={{ ...inputStyle, appearance: "none" as any }} value={form.interest}
                      onChange={e => setForm({ ...form, interest: e.target.value })}
                      onFocus={e => inputFocus(e.currentTarget)} onBlur={e => inputBlur(e.currentTarget)}>
                      <option value="">Select one</option>
                      <option>AIMS Testing</option>
                      <option>Aquity Platform</option>
                      <option>Rapid Bacterial Test</option>
                      <option>Partnership Opportunity</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.muted, display: "block", marginBottom: "6px" }}>Message *</label>
                    <textarea required rows={5} className={input()} style={{ ...inputStyle, resize: "vertical" }} value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={e => inputFocus(e.currentTarget)} onBlur={e => inputBlur(e.currentTarget)}
                      placeholder="Tell us what you're working on..." />
                  </div>
                  {status === "error" && (
                    <p style={{ fontSize: "0.8rem", color: "#f87171" }}>Something went wrong. Email us directly at scott@itc.eco.</p>
                  )}
                  <button type="submit" disabled={status === "sending"}
                    style={{ background: C.accent, color: "#07200e", padding: "14px 0", fontFamily: SYNE, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", border: "none", cursor: "pointer", width: "100%", opacity: status === "sending" ? 0.7 : 1, transition: "opacity 0.2s" }}>
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: C.ground, borderTop: `1px solid ${C.border}`, padding: "28px 0" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.3rem", fontWeight: 700 }}>ITC</p>
          <p style={{ fontSize: "0.75rem", color: "rgba(240,249,255,0.25)" }}>
            Innovation through Economically and Ecologically Advantaged Technology
          </p>
          <p style={{ fontSize: "0.72rem", color: "rgba(240,249,255,0.18)" }}>
            &copy; {new Date().getFullYear()} Inception Technology Company
          </p>
        </div>
      </footer>

    </div>
  );
}
