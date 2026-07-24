import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

// ─── Reusable animation wrapper ────────────────────────────
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Orange corner brackets decoration ─────────────────────
const Brackets = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none ${className}`}>
    {/* Top-left */}
    <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#F26522]" />
    {/* Top-right */}
    <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#F26522]" />
    {/* Bottom-left */}
    <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#F26522]" />
    {/* Bottom-right */}
    <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#F26522]" />
  </div>
);

// ─── Stock images (Unsplash — free commercial license) ─────
const stripImages = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    alt: "Regenerative Agriculture",
    label: "Agriculture",
  },
  {
    src: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=800&q=80",
    alt: "Water Systems",
    label: "Water",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    alt: "Construction",
    label: "Construction",
  },
  {
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    alt: "Ecosystem",
    label: "Ecosystem",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "#111827", color: "#ffffff", fontFamily: "'Rajdhani', sans-serif" }}
    >

      {/* ══════════════════════════════════════════════════════
          HERO — Earth video background
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          src="/iss-sunrise.mp4"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,14,30,0.65) 0%, rgba(10,14,30,0.45) 50%, rgba(10,14,30,0.85) 100%)" }} />

        {/* ── Nav ── */}
        <nav className="relative z-20 flex items-start justify-between px-8 pt-8 md:px-14 md:pt-10">
          {/* Logo */}
          <div>
            <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "3rem", fontWeight: 700, lineHeight: 1, letterSpacing: "0.05em" }}>ITC</p>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>INCEPTION TECHNOLOGY COMPANY</p>
          </div>

          {/* Top-right intro text — desktop only */}
          <div className="hidden md:block max-w-xs text-right">
            <p style={{ fontStyle: "italic", color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              ITC connects proven environmental technology with the science, business, and leadership to put it to work at scale.
            </p>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2 z-50">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ background: "rgba(10,14,30,0.97)" }}>
            {[{ href: "/", l: "Home" }, { href: "/about", l: "About" }, { href: "/products", l: "Products" }, { href: "/aims", l: "AIMS" }, { href: "/rbt", l: "Bacterial Test" }].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold tracking-wider hover:text-[#F26522] transition-colors">
                {item.l}
              </Link>
            ))}
          </div>
        )}

        {/* ── Hero content ── */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 pb-20 pt-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              maxWidth: "900px",
              textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            }}
          >
            Deploying Technologies<br />to Benefit Earth's Biosphere
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10"
          >
            <Link
              href="/products"
              style={{
                display: "inline-block",
                background: "#F26522",
                color: "#fff",
                padding: "14px 48px",
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = "#d9541a"; (e.target as HTMLElement).style.transform = "scale(1.03)"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = "#F26522"; (e.target as HTMLElement).style.transform = "scale(1)"; }}
            >
              Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          IMAGE STRIP
      ══════════════════════════════════════════════════════ */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {stripImages.map((img, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden"
            style={{ aspectRatio: "4/3" }}
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end p-4"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }}>
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>
                {img.label}
              </span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ══════════════════════════════════════════════════════
          OUR MISSION
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-8 md:px-20" style={{ backgroundColor: "#111827" }}>
        <FadeUp>
          <div className="relative max-w-3xl mx-auto text-center p-12">
            <Brackets />
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#F26522", marginBottom: "24px" }}>
              Our Mission
            </p>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px" }}>
              Technologies that Regenerate Earth
            </h2>
            <p style={{ fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontFamily: "Georgia, serif" }}>
              ITC connects world-changing, environmentally beneficial technologies with the scientific understanding, business expertise, and principled leadership required to deliver the impact these ideas are meant to make.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOW WE OPERATE
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-8 md:px-20" style={{ backgroundColor: "#0d1220" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <FadeUp delay={0}>
            <div className="relative p-8 md:p-12">
              <Brackets />
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#F26522", marginBottom: "20px" }}>
                How We Operate
              </p>
              <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "20px" }}>
                Field Credibility You Can't Hire at a Consulting Firm
              </h2>
              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.85, fontStyle: "italic", fontFamily: "Georgia, serif" }}>
                The team at ITC was chosen to combine decades of product launching experience, advanced analytical science work, and principled leadership. It was built by people who know the land, the lab, and the boardroom.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  style={{
                    display: "inline-block",
                    border: "1px solid #F26522",
                    color: "#F26522",
                    padding: "10px 32px",
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontFamily: "'Orbitron', sans-serif",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { const el = e.target as HTMLElement; el.style.background = "#F26522"; el.style.color = "#fff"; }}
                  onMouseLeave={e => { const el = e.target as HTMLElement; el.style.background = "transparent"; el.style.color = "#F26522"; }}
                >
                  Meet the Team
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* Video side */}
          <FadeUp delay={0.2}>
            <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "16/10" }}>
              <video
                className="w-full h-full object-cover"
                autoPlay muted loop playsInline
                src="/forest-stream.mp4"
                poster="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80"
              />
              {/* Subtle orange border accent */}
              <div className="absolute inset-0 pointer-events-none" style={{ border: "1px solid rgba(242,101,34,0.3)" }} />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHAT WE DEPLOY — stat strip
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-8" style={{ backgroundColor: "#111827", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <FadeUp>
          <div className="max-w-5xl mx-auto">
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#F26522", textAlign: "center", marginBottom: "48px" }}>
              What We Deploy
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { n: "72,000+", l: "Organic compounds\ndetectable by AIMS" },
                { n: "48 hrs", l: "AIMS turnaround\nfrom Calgary" },
                { n: "6 States", l: "Exclusive distribution\nterritory" },
                { n: "4 Domains", l: "Water · Ag\nBuilding · Chemistry" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  style={{ borderTop: "2px solid #F26522", paddingTop: "20px" }}
                >
                  <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "2rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{s.n}</p>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", marginTop: "10px", lineHeight: 1.6, letterSpacing: "0.05em", whiteSpace: "pre-line" }}>{s.l}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-8 text-center" style={{ backgroundColor: "#0d1220" }}>
        <FadeUp>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#F26522", marginBottom: "20px" }}>
            Ready to work with us?
          </p>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "36px", lineHeight: 1.2 }}>
            The time to move is now.
          </h2>
          <a
            href="/products#contact"
            style={{
              display: "inline-block",
              background: "#F26522",
              color: "#fff",
              padding: "16px 56px",
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            Get in Touch
          </a>
        </FadeUp>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer className="py-10 px-8 md:px-14" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0d1220" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.4rem", fontWeight: 700 }}>ITC</p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
            Innovation through Economically and Ecologically advantaged Technology
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
            &copy; {new Date().getFullYear()} Inception Technology Company
          </p>
        </div>
      </footer>

    </div>
  );
}
