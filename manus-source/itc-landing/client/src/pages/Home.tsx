import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

// ─── Palette: "Tidal" — descent from space to Earth surface ────────────
const C = {
  hero:      "#081c2e",   // deep ocean — space/atmosphere boundary
  products:  "#0d2a40",   // slightly lifted teal — upper atmosphere
  accent:    "#34d399",   // precise emerald — not neon, not sage
  text:      "#f0f9ff",   // cool off-white
  muted:     "rgba(240,249,255,0.45)",
  faint:     "rgba(240,249,255,0.12)",
  border:    "rgba(240,249,255,0.08)",
};

const SYNE = "'Syne', sans-serif";
const DM   = "'DM Sans', sans-serif";

// ─── Scroll reveal ──────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Product data ───────────────────────────────────────────────────────
const products = [
  {
    href: "/aims",
    tag: "Environmental Detection",
    name: "AIMS",
    sub: "Ambient Ionization Mass Spectrometry",
    body: "Identify 72,000+ organic compounds in water, urine, or blood — with results in 48 hours. Not a test. An intelligence system.",
    stat: "72,000+",
    unit: "Detectable compounds",
  },
  {
    href: "/aims",
    tag: "Source Intelligence",
    name: "Aquity",
    sub: "Non-Targeted Analysis Platform",
    body: "Aquity maps every detected compound to its industrial and geographic source. Municipalities get answers — not a PDF of unknowns.",
    stat: "48 hr",
    unit: "Lab turnaround",
  },
  {
    href: "/rbt",
    tag: "Field Detection",
    name: "Bacterial Test",
    sub: "Rapid Water Safety",
    body: "3mL. 10 seconds. No lab. No expertise required. Disrupting a $2.3B market with a test anyone can run anywhere.",
    stat: "$10",
    unit: "Per test at scale",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ backgroundColor: C.hero, color: C.text, fontFamily: DM }} className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          src="/hero.mp4"
          poster="/hero-poster.jpg"
        />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom,
            rgba(8,28,46,0.72) 0%,
            rgba(8,28,46,0.28) 45%,
            rgba(8,28,46,0.90) 100%)`,
        }} />

        {/* Nav */}
        <nav className="relative z-20 flex items-start justify-between px-8 pt-8 md:px-14 md:pt-10">
          <div>
            <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "2.6rem", fontWeight: 700, lineHeight: 1, letterSpacing: "0.06em", color: C.text }}>
              ITC
            </p>
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.3em", color: C.muted, marginTop: "5px", textTransform: "uppercase", fontFamily: DM }}>
              Inception Technology Company
            </p>
          </div>

          <p className="hidden md:block max-w-xs text-right"
            style={{ color: C.muted, fontSize: "0.88rem", lineHeight: 1.8, fontFamily: DM, fontStyle: "italic" }}>
            ITC connects proven environmental technology with the science, business, and leadership to put it to work at scale.
          </p>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2" aria-label="menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-8"
            style={{ background: "rgba(8,28,46,0.97)" }}>
            <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={26} /></button>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/aims", label: "AIMS" },
              { href: "/rbt", label: "Bacterial Test" },
            ].map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: SYNE, fontSize: "1.3rem", fontWeight: 700, color: C.text, textDecoration: "none", letterSpacing: "0.05em" }}>
                {l.label}
              </Link>
            ))}
          </div>
        )}

        {/* Hero copy */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 pb-16">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: "0.68rem", letterSpacing: "0.4em", textTransform: "uppercase", color: C.accent, marginBottom: "22px", fontFamily: DM }}>
            Regenerate Earth's Biosphere
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: SYNE,
              fontSize: "clamp(2rem, 5.5vw, 4.6rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              maxWidth: "880px",
              textShadow: "0 2px 48px rgba(0,0,0,0.55)",
            }}>
            Deploying Technologies<br />to Benefit Earth's Biosphere
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-10">
            <a href="#technologies"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: C.accent,
                color: "#081c2e",
                padding: "13px 44px",
                fontFamily: SYNE,
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
              Our Technologies <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PRODUCT CARDS — atmosphere layer
      ══════════════════════════════════════════════════════ */}
      <section id="technologies" style={{ backgroundColor: C.products, padding: "96px 0" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">

          <FadeUp>
            <div className="mb-16">
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.38em", textTransform: "uppercase", color: C.accent, marginBottom: "12px", fontFamily: DM }}>
                What We Offer
              </p>
              <div className="flex items-end justify-between flex-wrap gap-4">
                <h2 style={{ fontFamily: SYNE, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
                  CEC Technologies
                </h2>
                <p style={{ color: C.muted, fontSize: "0.9rem", maxWidth: "340px", lineHeight: 1.7, fontFamily: DM }}>
                  ITC is the exclusive U.S. distributor for CEC Analytics.
                </p>
              </div>
              {/* Rule */}
              <div style={{ height: "1px", background: C.border, marginTop: "28px" }} />
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-px" style={{ background: C.border }}>
            {products.map((p, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Link href={p.href} style={{ textDecoration: "none", display: "block" }}>
                  <div
                    className="group flex flex-col h-full"
                    style={{
                      background: C.products,
                      padding: "40px 36px",
                      transition: "background 0.25s",
                      minHeight: "380px",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(13,42,64,0.6)")}
                    onMouseLeave={e => (e.currentTarget.style.background = C.products)}>

                    {/* Tag */}
                    <p style={{ fontSize: "0.6rem", letterSpacing: "0.32em", textTransform: "uppercase", color: C.accent, marginBottom: "24px", fontFamily: DM }}>
                      {p.tag}
                    </p>

                    {/* Name */}
                    <h3 style={{ fontFamily: SYNE, fontSize: "1.7rem", fontWeight: 800, color: C.text, lineHeight: 1, marginBottom: "6px", letterSpacing: "-0.01em" }}>
                      {p.name}
                    </h3>
                    <p style={{ fontSize: "0.78rem", color: C.muted, marginBottom: "24px", fontFamily: DM, letterSpacing: "0.02em" }}>
                      {p.sub}
                    </p>

                    {/* Body */}
                    <p style={{ fontSize: "0.95rem", color: C.muted, lineHeight: 1.8, flex: 1, fontFamily: DM }}>
                      {p.body}
                    </p>

                    {/* Stat */}
                    <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: `1px solid ${C.border}` }}>
                      <p style={{ fontFamily: SYNE, fontSize: "2rem", fontWeight: 800, color: C.accent, lineHeight: 1, letterSpacing: "-0.02em" }}>
                        {p.stat}
                      </p>
                      <p style={{ fontSize: "0.68rem", color: C.muted, marginTop: "6px", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: DM }}>
                        {p.unit}
                      </p>
                    </div>

                    {/* CTA */}
                    <div style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "8px", color: C.accent, fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: SYNE, fontWeight: 700 }}>
                      Learn More <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
