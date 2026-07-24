import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* ── Video background ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay muted loop playsInline
        src="/hero.mp4"
      />

      {/* ── Overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(10,14,30,0.60) 0%, rgba(10,14,30,0.35) 50%, rgba(10,14,30,0.80) 100%)",
        }}
      />

      {/* ── All content above video ── */}
      <div className="relative z-10 flex flex-col min-h-screen" style={{ fontFamily: "'Rajdhani', sans-serif" }}>

        {/* Nav */}
        <nav className="flex items-start justify-between px-8 pt-8 md:px-14 md:pt-10">

          {/* Logo */}
          <div>
            <p style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "3rem", fontWeight: 700, lineHeight: 1, letterSpacing: "0.05em", color: "#fff" }}>
              ITC
            </p>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "rgba(255,255,255,0.55)", marginTop: "5px", textTransform: "uppercase" }}>
              Inception Technology Company
            </p>
          </div>

          {/* Desktop — top-right italic intro */}
          <p className="hidden md:block max-w-xs text-right" style={{ fontStyle: "italic", color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.75, fontFamily: "Georgia, serif" }}>
            ITC connects proven environmental technology with the science, business, and leadership to put it to work at scale.
          </p>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div
            className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-8"
            style={{ background: "rgba(10,14,30,0.97)" }}
          >
            <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 text-white">
              <X size={28} />
            </button>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/products", label: "Products" },
              { href: "/aims", label: "AIMS" },
              { href: "/rbt", label: "Bacterial Test" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.2rem", color: "#fff", textDecoration: "none", letterSpacing: "0.1em" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}

        {/* Hero content — centered */}
        <div className="flex flex-1 flex-col items-center justify-center text-center px-6 pb-12">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "clamp(1.8rem, 5vw, 4.2rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#fff",
              maxWidth: "860px",
              textShadow: "0 2px 40px rgba(0,0,0,0.6)",
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
            <Link
              href="/products"
              style={{
                display: "inline-block",
                background: "#F26522",
                color: "#fff",
                padding: "14px 52px",
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
