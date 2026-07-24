import { useState } from "react";
import { Menu, X, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

// ─── Contact form ─────────────────────────────────────────────────────────
const FORMSPREE_ID = "YOUR_FORM_ID"; // replace with your formspree.io form ID

// ─── Palette ──────────────────────────────────────────────────────────────
const NAVY  = "#132040";
const GREEN = "#1a6b3c";
const WHITE = "#ffffff";
const OFF   = "#eef3ef";   // light green-tinted off-white — clearly distinct from white
const MUTED = "#445060";   // mid-tone text — darker for contrast
const BORDER = "#b8c4d0";  // more visible borders

// ─── Typography ───────────────────────────────────────────────────────────
const DISPLAY = "'Libre Baskerville', Georgia, serif";
const BODY    = "'Lora', Georgia, serif";
const ORBITRON = "'Orbitron', sans-serif";

// ─── Scroll reveal ────────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Label = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p style={{
    fontSize: "0.72rem", letterSpacing: "0.36em", textTransform: "uppercase",
    color: light ? "rgba(255,255,255,0.55)" : GREEN,
    marginBottom: "14px", fontFamily: BODY, fontWeight: 800,
  }}>
    {children}
  </p>
);

// ─── Products ─────────────────────────────────────────────────────────────
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

// ─── Team ─────────────────────────────────────────────────────────────────
const team = [
  { initials: "SE", name: "Scott Ensminger",   role: "Founder" },
  { initials: "JS", name: "Jeff Streck",        role: "Sales & Marketing" },
  { initials: "HE", name: "Hunter Ensminger",  role: "Operations" },
  { initials: "LG", name: "Lillie Geiersbach", role: "Montana" },
  { initials: "LD", name: "Logan Deal",         role: "Business Development" },
  { initials: "JE", name: "Jyl Ensminger",     role: "Montana" },
];

const tenants = [
  {
    keyword: "Simple",
    tagline: "Works in the real world",
    body: "If operators in the field can't use it, it won't scale. Every technology we bring to market must work in the hands of the people who need it — no PhD required.",
  },
  {
    keyword: "True",
    tagline: "Backed by science",
    body: "Peer-reviewed data and field-verified results, full stop. No vaporware, no greenwash, no performance claims we can't defend under scrutiny.",
  },
  {
    keyword: "Economical",
    tagline: "Advantaged on returns",
    body: "Better performance at a competitive cost. The market adopts it because it wins on economics — not because someone feels compelled to write a check out of obligation.",
  },
  {
    keyword: "Regenerative",
    tagline: "Net-positive is the floor",
    body: "Active restoration of soil, water, air, and biology. We don't settle for 'less bad.' The technology must leave the biosphere measurably better than it found it.",
  },
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
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", phone: "", interest: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const fieldStyle: React.CSSProperties = {
    width: "100%", padding: "11px 14px",
    border: `1px solid ${BORDER}`,
    background: WHITE, color: NAVY,
    fontFamily: BODY, fontSize: "1rem",
    outline: "none", transition: "border-color 0.2s",
  };
  const onFocus = (el: HTMLElement) => (el.style.borderColor = GREEN);
  const onBlur  = (el: HTMLElement) => (el.style.borderColor = BORDER);

  return (
    <div style={{ backgroundColor: WHITE, color: NAVY, fontFamily: BODY }} className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════════
          1. HERO — nature video, dialled-back overlay
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        <video className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          src="/hero2.mp4" poster="/hero-poster.jpg" />

        {/* Much lighter overlay — let the nature breathe */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom,
            rgba(0,0,0,0.38) 0%,
            rgba(0,0,0,0.10) 40%,
            rgba(0,0,0,0.50) 100%)`,
        }} />

        {/* Nav */}
        <nav className="relative z-20 flex items-start justify-between px-8 pt-8 md:px-14 md:pt-10">
          <div>
            <p style={{ fontFamily: ORBITRON, fontSize: "2.6rem", fontWeight: 700, lineHeight: 1, letterSpacing: "0.06em", color: WHITE }}>
              ITC
            </p>
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.28em", color: "rgba(255,255,255,0.65)", marginTop: "5px", textTransform: "uppercase", fontFamily: BODY, lineHeight: 1.5 }}>
              Inception Technology<br />Company, LLC
            </p>
          </div>
          <p className="hidden md:block max-w-xs text-right"
            style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.8, fontStyle: "italic", fontFamily: BODY }}>
            ITC connects proven environmental technology with the science, business, and leadership to put it to work at scale.
          </p>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" style={{ color: WHITE }}><Menu size={26} /></button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-8"
            style={{ background: "rgba(19,32,64,0.97)" }}>
            <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8" style={{ color: WHITE }}><X size={26} /></button>
            {[{ href: "/", l: "Home" }, { href: "/aims", l: "AIMS & Aquity" }, { href: "/rbt", l: "Bacterial Test" }].map(item => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: DISPLAY, fontSize: "1.6rem", fontWeight: 600, color: WHITE, textDecoration: "none" }}>
                {item.l}
              </Link>
            ))}
          </div>
        )}

        {/* Hero copy */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 pb-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", marginBottom: "22px", fontFamily: BODY }}>
            Helping Our Planet
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: DISPLAY, fontSize: "clamp(2.2rem, 6vw, 5rem)",
              fontWeight: 700, lineHeight: 1.1, letterSpacing: "0.01em",
              color: WHITE, maxWidth: "900px",
              textShadow: "0 2px 32px rgba(0,0,0,0.55)",
            }}>
            Deploying Technology<br />That Benefits Our Biosphere
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="#technologies"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: WHITE, color: NAVY,
                padding: "14px 40px", fontFamily: BODY, fontSize: "0.95rem",
                fontWeight: 500, letterSpacing: "0.08em", textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = GREEN; e.currentTarget.style.color = WHITE; }}
              onMouseLeave={e => { e.currentTarget.style.background = WHITE; e.currentTarget.style.color = NAVY; }}>
              Explore the Tech <ArrowRight size={14} />
            </a>
            <a href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "transparent", color: WHITE,
                padding: "13px 40px", fontFamily: BODY, fontSize: "0.95rem",
                fontWeight: 500, letterSpacing: "0.08em", textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.6)",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = WHITE; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; }}>
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. PRODUCTS — white
      ══════════════════════════════════════════════════ */}
      <section id="technologies" style={{ backgroundColor: WHITE, padding: "96px 0" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <FadeUp>
            <Label>What We Offer</Label>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-4">
              <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, lineHeight: 1.1, color: NAVY }}>
                CEC Technologies
              </h2>
              <p style={{ color: MUTED, fontSize: "1rem", maxWidth: "300px", lineHeight: 1.7, fontStyle: "italic" }}>
                ITC is the exclusive U.S. distributor for CEC Analytics.
              </p>
            </div>
            <div style={{ height: "1px", background: BORDER, margin: "28px 0 48px" }} />
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Link href={p.href} style={{ textDecoration: "none" }}>
                  <div className="flex flex-col h-full" style={{
                    borderTop: `3px solid ${NAVY}`, borderLeft: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "40px 32px",
                    transition: "border-top-color 0.25s, box-shadow 0.25s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderTopColor = GREEN; e.currentTarget.style.boxShadow = "0 6px 32px rgba(19,32,64,0.10)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderTopColor = NAVY; e.currentTarget.style.boxShadow = "none"; }}>
                    <Label>{p.tag}</Label>
                    <h3 style={{ fontFamily: DISPLAY, fontSize: "1.6rem", fontWeight: 700, color: NAVY, lineHeight: 1.1, marginBottom: "6px" }}>{p.name}</h3>
                    <p style={{ fontSize: "0.78rem", color: MUTED, marginBottom: "20px", letterSpacing: "0.02em", fontWeight: 600 }}>{p.sub}</p>
                    <div style={{ height: "1px", background: BORDER, marginBottom: "20px" }} />
                    <p style={{ fontSize: "1rem", color: MUTED, lineHeight: 1.85, flex: 1, fontStyle: "italic" }}>{p.body}</p>
                    <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ fontFamily: DISPLAY, fontSize: "2.4rem", fontWeight: 700, color: GREEN, lineHeight: 1 }}>{p.stat}</p>
                      <p style={{ fontSize: "0.68rem", color: MUTED, marginTop: "6px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.unit}</p>
                    </div>
                    <div style={{ marginTop: "18px", display: "flex", alignItems: "center", gap: "8px", color: GREEN, fontSize: "0.82rem", letterSpacing: "0.05em", fontStyle: "italic" }}>
                      Learn more <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. MISSION & PROCESS — off-white
      ══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: OFF, padding: "96px 0" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">

          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
            <FadeUp>
              <Label>Who We Are</Label>
              <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)", fontWeight: 700, lineHeight: 1.15, color: NAVY, marginBottom: "28px" }}>
                The mission is the filter.
              </h2>
              <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.9, fontStyle: "italic" }}>
                ITC connects world-changing, environmentally beneficial technologies with the scientific understanding, business expertise, and principled leadership required to deliver the impact these ideas are meant to make.
              </p>
              <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.9, marginTop: "18px", fontStyle: "italic" }}>
                Every technology in our portfolio must clear two bars: better for the biosphere, and better on economics. We don't accept trade-offs between the two.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div style={{ borderLeft: `4px solid ${GREEN}`, paddingLeft: "32px", borderTop: `1px solid ${BORDER}`, paddingTop: "24px" }}>
                <p style={{ fontFamily: DISPLAY, fontSize: "1.25rem", fontWeight: 500, lineHeight: 1.7, color: NAVY, fontStyle: "italic" }}>
                  "Built by people who know the land, the lab, and the boardroom — field credibility you can't hire at a consulting firm."
                </p>
                <p style={{ marginTop: "20px", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: GREEN, fontFamily: BODY }}>
                  Scott Ensminger — Founder
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Four Tenants */}
          <FadeUp>
            <div style={{ height: "1px", background: BORDER, marginBottom: "56px" }} />
            <Label>Our Standards</Label>
            <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(1.7rem, 2.5vw, 2.4rem)", fontWeight: 700, lineHeight: 1.1, color: NAVY, marginBottom: "16px" }}>
              Four requirements. No exceptions.
            </h2>
            <p style={{ fontSize: "1rem", color: MUTED, lineHeight: 1.8, fontStyle: "italic", maxWidth: "580px", marginBottom: "48px" }}>
              These aren't values on a wall. They're the filter every technology in our portfolio must clear before we put our name behind it.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {tenants.map((t, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{
                  borderTop: `3px solid ${GREEN}`,
                  border: `1px solid ${BORDER}`,
                  borderTopWidth: "3px",
                  borderTopColor: GREEN,
                  padding: "36px 32px",
                  height: "100%",
                }}>
                  <h3 style={{ fontFamily: DISPLAY, fontSize: "2rem", fontWeight: 700, color: NAVY, lineHeight: 1, marginBottom: "8px" }}>{t.keyword}</h3>
                  <p style={{ fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase", color: GREEN, fontFamily: BODY, fontWeight: 800, marginBottom: "20px" }}>{t.tagline}</p>
                  <div style={{ height: "1px", background: BORDER, marginBottom: "20px" }} />
                  <p style={{ fontSize: "0.98rem", color: MUTED, lineHeight: 1.85, fontStyle: "italic" }}>{t.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. TEAM — white
      ══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: WHITE, padding: "96px 0" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <FadeUp>
            <Label>The Team</Label>
            <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, lineHeight: 1.1, color: NAVY, marginBottom: "4px" }}>
              People who've done the work.
            </h2>
            <div style={{ height: "1px", background: BORDER, margin: "28px 0 56px" }} />
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {team.map((m, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div>
                  {/* Initials — square, navy bg */}
                  <div style={{
                    width: "68px", height: "68px",
                    background: NAVY,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "16px",
                  }}>
                    <span style={{ fontFamily: DISPLAY, fontSize: "1.2rem", fontWeight: 700, color: WHITE, letterSpacing: "0.04em" }}>
                      {m.initials}
                    </span>
                  </div>
                  <p style={{ fontFamily: DISPLAY, fontSize: "1.05rem", fontWeight: 600, color: NAVY, marginBottom: "4px" }}>{m.name}</p>
                  <p style={{ fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>{m.role}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <p style={{ marginTop: "56px", fontSize: "0.88rem", color: "rgba(19,32,64,0.3)", fontStyle: "italic" }}>
              Photographs coming soon.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. CONTACT — navy (dark for contrast)
      ══════════════════════════════════════════════════ */}
      <section id="contact" style={{ backgroundColor: NAVY, padding: "96px 0" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Copy */}
            <FadeUp>
              <Label light>Get In Touch</Label>
              <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)", fontWeight: 700, lineHeight: 1.15, color: WHITE, marginBottom: "24px" }}>
                The time to move is now.
              </h2>
              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.85, fontStyle: "italic", marginBottom: "40px" }}>
                Whether you're a municipality, a producer, or a potential partner — if the technology matches the mission, we want to hear from you.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {[{ l: "General", e: "scott@itc.eco" }, { l: "Sales", e: "jeff@itc.eco" }].map(c => (
                  <div key={c.e}>
                    <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "4px", fontFamily: BODY }}>{c.l}</p>
                    <a href={`mailto:${c.e}`} style={{ color: "#86efac", fontSize: "1rem", textDecoration: "none", fontFamily: DISPLAY, fontWeight: 500 }}>{c.e}</a>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Form */}
            <FadeUp delay={0.15}>
              {status === "success" ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "64px 40px", border: "1px solid rgba(255,255,255,0.12)", textAlign: "center" }}>
                  <CheckCircle size={40} color="#86efac" />
                  <p style={{ fontFamily: DISPLAY, fontSize: "1.4rem", fontWeight: 600, color: WHITE }}>Message received.</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", fontStyle: "italic" }}>We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Name *", key: "name", req: true, ph: "Your name" },
                      { label: "Phone", key: "phone", req: false, ph: "(555) 000-0000" },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={{ fontSize: "0.6rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: "6px", fontFamily: BODY }}>{f.label}</label>
                        <input required={f.req} style={{ ...fieldStyle, background: "rgba(255,255,255,0.07)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)" }}
                          placeholder={f.ph} value={(form as any)[f.key]}
                          onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                          onFocus={e => (e.currentTarget.style.borderColor = "#86efac")}
                          onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label style={{ fontSize: "0.6rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: "6px", fontFamily: BODY }}>Email *</label>
                    <input required type="email" style={{ ...fieldStyle, background: "rgba(255,255,255,0.07)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)" }}
                      placeholder="you@company.com" value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={e => (e.currentTarget.style.borderColor = "#86efac")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.6rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: "6px", fontFamily: BODY }}>Area of Interest</label>
                    <select style={{ ...fieldStyle, background: "rgba(255,255,255,0.07)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)" }}
                      value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })}
                      onFocus={e => (e.currentTarget.style.borderColor = "#86efac")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}>
                      <option value="">Select one</option>
                      <option>AIMS Testing</option>
                      <option>Aquity Platform</option>
                      <option>Rapid Bacterial Test</option>
                      <option>Partnership Opportunity</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: "0.6rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: "6px", fontFamily: BODY }}>Message *</label>
                    <textarea required rows={5} style={{ ...fieldStyle, background: "rgba(255,255,255,0.07)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)", resize: "vertical" }}
                      placeholder="Tell us what you're working on..." value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={e => (e.currentTarget.style.borderColor = "#86efac")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")} />
                  </div>
                  {status === "error" && (
                    <p style={{ fontSize: "0.85rem", color: "#fca5a5", fontStyle: "italic" }}>Something went wrong — email us directly at scott@itc.eco.</p>
                  )}
                  <button type="submit" disabled={status === "sending"}
                    style={{ background: GREEN, color: WHITE, padding: "14px 0", fontFamily: BODY, fontSize: "1rem", fontWeight: 500, letterSpacing: "0.1em", border: "none", cursor: "pointer", width: "100%", opacity: status === "sending" ? 0.7 : 1, transition: "opacity 0.2s, background 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#145c32")}
                    onMouseLeave={e => (e.currentTarget.style.background = GREEN)}>
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#0b1628", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "28px 0" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: ORBITRON, fontSize: "1.2rem", fontWeight: 700, color: WHITE }}>ITC</p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.25)", fontStyle: "italic" }}>
            Innovation through Economically and Ecologically Advantaged Technology
          </p>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.18)" }}>
            &copy; {new Date().getFullYear()} Inception Technology Company
          </p>
        </div>
      </footer>

    </div>
  );
}
