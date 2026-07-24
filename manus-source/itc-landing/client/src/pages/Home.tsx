import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

// ─── Accent color — vibrant green (swap to #F59E0B for orange-yellow) ───
const GREEN = "#22c55e";
const NAVY  = "#0d1525";

// ─── Fade-up on scroll ───────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.85, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Product cards ───────────────────────────────────────────────────────
const products = [
  {
    href: "/aims",
    eyebrow: "Water & Environmental Testing",
    title: "AIMS",
    subtitle: "Ambient Ionization Mass Spectrometry",
    body: "Detect 72,000+ organic compounds in water, urine, or blood — with results in 48 hours. We don't just find what's there; we tell you where it came from.",
    stat: "72,000+",
    statLabel: "Detectable compounds",
  },
  {
    href: "/aims",
    eyebrow: "Source Intelligence Platform",
    title: "Aquity",
    subtitle: "Non-Targeted Analysis Dashboard",
    body: "The Aquity platform maps detected compounds back to their industrial and geographic source. Municipalities get answers, not just data.",
    stat: "48 hr",
    statLabel: "Turnaround from Calgary",
  },
  {
    href: "/rbt",
    eyebrow: "Rapid Field Testing",
    title: "Bacterial Test",
    subtitle: "10-Second Water Safety",
    body: "3mL of water. 10 seconds. No lab, no expertise required. Disrupting a $2.3B market dominated by 3M and Thermo Fisher.",
    stat: "$10",
    statLabel: "Per test at scale",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ backgroundColor: NAVY, color: "#fff", fontFamily: "'Rajdhani', sans-serif" }}
         className="min-h-screen overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        {/* Video */}
        <video className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          src="/hero.mp4"
          poster="/hero-poster.jpg"
        />

        {/* Overlay — warmer gradient, navy not black */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom,
            rgba(13,21,37,0.70) 0%,
            rgba(13,21,37,0.30) 45%,
            rgba(13,21,37,0.85) 100%)`,
        }} />

        {/* Nav */}
        <nav className="relative z-20 flex items-start justify-between px-8 pt-8 md:px-14 md:pt-10">
          <div>
            <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "2.8rem", fontWeight: 700, lineHeight: 1, letterSpacing: "0.05em" }}>ITC</p>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.28em", color: "rgba(255,255,255,0.5)", marginTop: "5px", textTransform: "uppercase" }}>
              Inception Technology Company
            </p>
          </div>

          {/* Desktop right-side intro text */}
          <p className="hidden md:block max-w-xs text-right"
             style={{ fontStyle: "italic", color: "rgba(255,255,255,0.65)", fontSize: "0.92rem", lineHeight: 1.75, fontFamily: "Georgia, serif" }}>
            ITC connects proven environmental technology with the science, business, and leadership to put it to work at scale.
          </p>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-8"
               style={{ background: "rgba(13,21,37,0.97)" }}>
            <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={28} /></button>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/aims", label: "AIMS" },
              { href: "/rbt", label: "Bacterial Test" },
            ].map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.2rem", color: "#fff", textDecoration: "none", letterSpacing: "0.1em" }}>
                {l.label}
              </Link>
            ))}
          </div>
        )}

        {/* Hero copy */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 pb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: GREEN, marginBottom: "20px" }}
          >
            Regenerate Earth's Biosphere
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "clamp(1.8rem, 5vw, 4.2rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              maxWidth: "860px",
              textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            }}
          >
            Deploying Technologies<br />to Benefit Earth's Biosphere
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-10"
          >
            <a href="#technologies"
              style={{
                display: "inline-block",
                background: GREEN,
                color: "#0d1525",
                padding: "14px 52px",
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            >
              Our Technologies
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TECHNOLOGIES — 3 product cards
      ══════════════════════════════════════════════════════ */}
      <section id="technologies" style={{ backgroundColor: "#152440", paddingTop: "96px", paddingBottom: "96px" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">

          <FadeUp>
            <div className="text-center mb-16">
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.38em", textTransform: "uppercase", color: GREEN, marginBottom: "14px" }}>
                What We Offer
              </p>
              <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 700, lineHeight: 1.2 }}>
                CEC Technologies
              </h2>
              <p style={{ marginTop: "14px", color: "rgba(255,255,255,0.45)", fontSize: "1rem", maxWidth: "480px", margin: "14px auto 0", lineHeight: 1.7 }}>
                ITC is the exclusive U.S. distributor for CEC Analytics — three technologies, one mission.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <Link href={p.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div
                    className="group h-full flex flex-col"
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "36px 32px",
                      transition: "border-color 0.3s, background 0.3s",
                      cursor: "pointer",
                      backgroundColor: "rgba(255,255,255,0.02)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${GREEN}60`;
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(34,197,94,0.04)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.02)";
                    }}
                  >
                    {/* Eyebrow */}
                    <p style={{ fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: GREEN, marginBottom: "20px" }}>
                      {p.eyebrow}
                    </p>

                    {/* Title */}
                    <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: "6px" }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", marginBottom: "20px", letterSpacing: "0.03em" }}>
                      {p.subtitle}
                    </p>

                    {/* Divider */}
                    <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.07)", marginBottom: "20px" }} />

                    {/* Body */}
                    <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, flex: 1, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                      {p.body}
                    </p>

                    {/* Stat */}
                    <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: `1px solid ${GREEN}30` }}>
                      <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.8rem", fontWeight: 700, color: GREEN, lineHeight: 1 }}>
                        {p.stat}
                      </p>
                      <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", marginTop: "6px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        {p.statLabel}
                      </p>
                    </div>

                    {/* Link arrow */}
                    <div style={{ marginTop: "24px", display: "flex", alignItems: "center", gap: "8px", color: GREEN, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Orbitron', sans-serif" }}>
                      <span>Learn More</span>
                      <ArrowRight size={14} />
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
