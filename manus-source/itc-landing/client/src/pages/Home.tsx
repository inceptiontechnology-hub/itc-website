import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// ─── Contact form ─────────────────────────────────────────────────────────

// ─── Palette ──────────────────────────────────────────────────────────────
const NAVY  = "#0d2154";
const GREEN = "#1a6b3c";
const WHITE = "#ffffff";
const OFF   = "#eef3ef";   // light green-tinted off-white — clearly distinct from white
const MUTED = "#445060";   // mid-tone text — darker for contrast
const BORDER = "#b8c4d0";  // more visible borders
const GOLD   = "#C9A444";  // accent — use sparingly
const EMERALD = "#0d7250"; // rich dark emerald

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
    fontSize: "0.82rem", letterSpacing: "0.36em", textTransform: "uppercase",
    color: light ? GOLD : GREEN,
    marginBottom: "14px", fontFamily: BODY, fontWeight: 800,
  }}>
    {children}
  </p>
);

// ─── Products ─────────────────────────────────────────────────────────────
const products = [
  {
    href: "/nta-aquity.html",
    image: "/product-nta-aquity.jpg",
    imageAlt: "Aquity analytics dashboard displayed on a tablet",
    imagePosition: "center",
    tag: "Non-Targeted Analysis",
    name: "NTA + Aquity",
    sub: "See what is there. Understand where it came from.",
    body: "Screen 72,000+ organic compounds from a single 25 mL sample, with no target list required. Aquity turns the findings into actionable source intelligence.",
    cta: "Explore NTA + Aquity",
  },
  {
    href: "/aims.html",
    image: "/product-aims.jpg",
    imageAlt: "Sunlight reflecting across moving water",
    imagePosition: "center",
    tag: "Targeted Detection",
    name: "AIMS",
    sub: "Known targets. Quantitative answers.",
    body: "Measure targeted panels for substances of abuse, PFAS, glyphosate, and more at ultra-trace concentrations, with rapid results issued shortly after sample receipt.",
    cta: "Explore AIMS",
  },
  {
    href: "/rbt.html",
    image: "/product-rbt.jpg",
    imageAlt: "Rapid bacterial testing in a point-of-use setting",
    imagePosition: "center",
    tag: "Point-of-Use Testing",
    name: "Rapid Bacterial Test",
    sub: "Fast answers wherever they are needed.",
    body: "Test a 3 mL water sample in 10 seconds without laboratory equipment or technical training. Get results you can act on immediately in the field.",
    cta: "Explore Rapid Bacterial Test",
  },
];

// ─── Team ─────────────────────────────────────────────────────────────────
const team = [
  { initials: "SE", name: "Scott Ensminger", role: "Founder & CEO", bio: "Scott has a BS in Biology with an emphasis in organic chemistry from Iowa State University. His role at ITC is to identify emerging technologies and imagine how they can be applied to solve real-world problems. His experience spans on-site wastewater, drinking water, stormwater, and biological soil and water systems developed through 20 years as a commercial farmer and several years in stormwater management." },
  { initials: "JE", name: "Jyl Ensminger", role: "Co-Founder & Business Operations", bio: "Jyl has a background in healthcare administration, with experience in both clinical support and patient services. At ITC, she helps oversee day-to-day team operations while supporting the company's financial management and organization. Her role focuses on keeping the business coordinated, organized, and running efficiently as the company and its partnerships continue to grow." },
  { initials: "LD", name: "Logan Deal", role: "General Manager", bio: "Logan has a BS in Business Management from the United States Military Academy and spent 12 years on active duty as a U.S. Army officer. Her experience includes leading and managing organizations ranging from small teams to more than 100 personnel. As General Manager at ITC, she oversees the company's administrative and business operations, bringing a background in organizational leadership, planning, and execution to the company's day-to-day management." },
  { initials: "JS", name: "Jeff Streck", role: "Marketing & Sales Lead", bio: "Jeff has an MBA and nearly 20 years of experience in the wine and beverage industry, working across retail, wholesale, and producer operations. At ITC, he leads sales strategy and market development, connecting businesses, municipalities, and organizations with technologies that address environmental challenges. His background brings a practical understanding of how to build markets, develop relationships, and move solutions into commercial use." },
  { initials: "LG", name: "Lillie Geiersbach", role: "Technical Lead", bio: "Lillie has a BS in Biology with a minor in Chemistry from MSU Denver and a background in synthetic chemistry research. Her work focuses on chemistries that are both environmentally responsible and practically useful. Her background includes R&D experience developing water-treatment and feed-additive technologies. At ITC, her focus is on helping move new products from the laboratory toward commercial application." },
  { initials: "HE", name: "Hunter Ensminger", role: "Operations Lead", bio: "Hunter has a BS in Business from the University of Wyoming and focuses on operations and technology implementation at ITC. His experience spans laboratory testing, water treatment, advanced oxidation, and carbon-based technologies, combined with a practical background in business operations. His role is centered on evaluating how technologies work in real-world conditions and helping turn promising concepts into practical, economical solutions for customers." },
];

const tenants = [
  {
    keyword: "Simple.",
    tagline: "Works in the real world",
    body: "Good tools work without instruction. The people running these operations are busy; the technology has to work the first time, in real conditions, without a troubleshooting manual.",
  },
  {
    keyword: "True.",
    tagline: "Backed by science",
    body: "Every claim we make, we can back. The science has to hold up before anything ships, and we can explain every result in plain language to the people who actually use it.",
  },
  {
    keyword: "Economical.",
    tagline: "Advantaged on returns",
    body: "Good technology pays for itself. If the numbers don't pencil out, it doesn't matter how good the science is; adoption happens because it makes financial sense to the people buying it.",
  },
  {
    keyword: "Enduring.",
    tagline: "Built to last",
    body: "We want to be proud of these decisions years from now. The technology we back has to leave things measurably better over time, not just at the point of sale.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    if (window.location.hash !== "#contact") return;

    requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({ block: "start" });
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
          src="/hero-new.mp4" />

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
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.28em", color: "rgba(255,255,255,0.65)", marginTop: "5px", textTransform: "uppercase", fontFamily: BODY, lineHeight: 1.5 }}>
              Inception Technology<br />Company, LLC
            </p>
          </div>
          <div className="hidden md:flex items-center gap-8" style={{ fontFamily: BODY }}>
            <div className="relative group" style={{ paddingBottom: "14px", marginBottom: "-14px" }}>
              <a href="#technologies" style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: WHITE, fontSize: "0.92rem", fontWeight: 600, textDecoration: "none" }}>
                Product Portfolio <ChevronDown size={14} />
              </a>
              <div className="absolute left-0 top-full hidden group-hover:flex group-focus-within:flex flex-col" style={{ minWidth: "220px", background: "rgba(19,32,64,0.97)", border: "1px solid rgba(255,255,255,0.2)", padding: "8px 0" }}>
                <a href="/nta-aquity.html" style={{ color: WHITE, padding: "10px 16px", fontSize: "0.94rem", textDecoration: "none", whiteSpace: "nowrap" }}>NTA + Aquity</a>
                <a href="/aims.html" style={{ color: WHITE, padding: "10px 16px", fontSize: "0.94rem", textDecoration: "none", whiteSpace: "nowrap" }}>AIMS</a>
                <a href="/rbt.html" style={{ color: WHITE, padding: "10px 16px", fontSize: "0.94rem", textDecoration: "none", whiteSpace: "nowrap" }}>Rapid Bacterial Test</a>
              </div>
            </div>
            <a href="#blog" style={{ color: WHITE, fontSize: "0.92rem", fontWeight: 600, textDecoration: "none" }}>Blog</a>
            <div className="relative group" style={{ paddingBottom: "14px", marginBottom: "-14px" }}>
              <button type="button" style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: WHITE, background: "transparent", border: 0, padding: 0, fontFamily: BODY, fontSize: "0.92rem", fontWeight: 600, cursor: "pointer" }}>
                About <ChevronDown size={14} />
              </button>
              <div className="absolute right-0 top-full hidden group-hover:flex group-focus-within:flex flex-col" style={{ minWidth: "170px", background: "rgba(19,32,64,0.97)", border: "1px solid rgba(255,255,255,0.2)", padding: "8px 0" }}>
                <a href="#standards" style={{ color: WHITE, padding: "10px 16px", fontSize: "0.94rem", textDecoration: "none", whiteSpace: "nowrap" }}>Our Standards</a>
                <a href="#team" style={{ color: WHITE, padding: "10px 16px", fontSize: "0.94rem", textDecoration: "none", whiteSpace: "nowrap" }}>The Team</a>
              </div>
            </div>
            <a href="#contact" style={{ color: WHITE, fontSize: "0.92rem", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.55)", padding: "9px 16px" }}>Contact Us</a>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            style={{ color: WHITE }}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu size={26} aria-hidden="true" />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-navigation" className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-8"
            style={{ background: "rgba(19,32,64,0.97)" }}>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8"
              style={{ color: WHITE }}
              aria-label="Close navigation menu"
            >
              <X size={26} aria-hidden="true" />
            </button>
            <a href="#technologies" onClick={() => setMenuOpen(false)}
              style={{ fontFamily: DISPLAY, fontSize: "1.6rem", fontWeight: 600, color: WHITE, textDecoration: "none" }}>
              Product Portfolio
            </a>
            <div className="flex flex-col items-center gap-3" style={{ marginTop: "-20px" }}>
              <a href="/nta-aquity.html" onClick={() => setMenuOpen(false)} style={{ color: "rgba(255,255,255,0.78)", fontSize: "1rem", textDecoration: "none" }}>NTA + Aquity</a>
              <a href="/aims.html" onClick={() => setMenuOpen(false)} style={{ color: "rgba(255,255,255,0.78)", fontSize: "1rem", textDecoration: "none" }}>AIMS</a>
              <a href="/rbt.html" onClick={() => setMenuOpen(false)} style={{ color: "rgba(255,255,255,0.78)", fontSize: "1rem", textDecoration: "none" }}>Rapid Bacterial Test</a>
            </div>
            {[
              { href: "#blog", l: "Blog" },
              { href: "#standards", l: "Our Standards" },
              { href: "#team", l: "The Team" },
              { href: "#contact", l: "Contact Us" },
            ].map(item => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: DISPLAY, fontSize: "1.6rem", fontWeight: 600, color: WHITE, textDecoration: "none" }}>
                {item.l}
              </a>
            ))}
          </div>
        )}

        {/* Hero copy */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 pb-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: "0.76rem", letterSpacing: "0.4em", textTransform: "uppercase", color: WHITE, fontWeight: 700, marginBottom: "22px", fontFamily: BODY }}>
            Efficient. Economical. Effective.
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
            Scientific solutions, curated for longstanding problems.
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="#technologies"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: GOLD, color: NAVY,
                padding: "14px 40px", fontFamily: BODY, fontSize: "0.95rem",
                fontWeight: 700, letterSpacing: "0.08em", textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = WHITE; e.currentTarget.style.color = NAVY; }}
              onMouseLeave={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = NAVY; }}>
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
            <Label>Offerings</Label>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-4">
              <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, lineHeight: 1.1, color: NAVY }}>
                CEC Technologies
              </h2>
              <p style={{ color: MUTED, fontSize: "1rem", maxWidth: "300px", lineHeight: 1.7, fontStyle: "italic" }}>
                ITC is the distributor for CEC Analytics.
              </p>
            </div>
            <div style={{ height: "1px", background: BORDER, margin: "28px 0 48px" }} />
          </FadeUp>

          <div className="flex flex-col gap-10 md:gap-14">
            {products.map((p, i) => (
              <FadeUp key={p.href} delay={i * 0.08}>
                <article className="grid md:grid-cols-2 overflow-hidden" style={{
                  background: WHITE,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "14px",
                  boxShadow: "0 12px 38px rgba(13,33,84,0.09)",
                }}>
                  <div className={`relative min-h-[280px] md:min-h-[390px] ${i % 2 === 1 ? "md:order-2" : ""}`} style={{ background: NAVY }}>
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ objectPosition: p.imagePosition }}
                    />
                  </div>
                  <div className={`flex flex-col justify-center px-7 py-10 sm:px-10 md:px-14 md:py-14 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <Label>{p.tag}</Label>
                    <h3 style={{ fontFamily: DISPLAY, fontSize: "clamp(1.8rem, 3vw, 2.65rem)", fontWeight: 700, color: NAVY, lineHeight: 1.1, marginBottom: "12px" }}>{p.name}</h3>
                    <p style={{ fontSize: "1rem", color: NAVY, marginBottom: "20px", lineHeight: 1.6, fontWeight: 700 }}>{p.sub}</p>
                    <div style={{ width: "54px", height: "2px", background: GOLD, marginBottom: "22px" }} />
                    <p style={{ fontSize: "1rem", color: MUTED, lineHeight: 1.85, marginBottom: "30px", fontStyle: "italic" }}>{p.body}</p>
                    <a href={p.href}
                      style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "9px", background: GREEN, color: WHITE, padding: "12px 22px", fontFamily: BODY, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.background = NAVY; }}
                      onMouseLeave={e => { e.currentTarget.style.background = GREEN; }}>
                      {p.cta} <ArrowRight size={13} />
                    </a>
                  </div>
                </article>
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
          <div className="mb-24">
            <FadeUp>
              <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, lineHeight: 1.1, color: NAVY, marginBottom: "28px" }}>
                Who We Are
              </h2>
              <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.9, fontStyle: "italic", maxWidth: "680px" }}>
                ITC connects proven analytical and environmental technologies with the scientific expertise, business experience, and operational credibility to deploy them at scale.
              </p>
              <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.9, marginTop: "18px", fontStyle: "italic", maxWidth: "680px" }}>
                Every technology in our portfolio must clear two bars: better on performance, and better on economics. We don't accept trade-offs between the two.
              </p>
            </FadeUp>
          </div>

          {/* Four Tenants */}
          <div id="standards" style={{ scrollMarginTop: "36px" }}>
            <FadeUp>
              <div style={{ height: "1px", background: BORDER, marginBottom: "56px" }} />
              <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(1.8rem, 2.6vw, 2.4rem)", fontWeight: 700, lineHeight: 1.1, color: NAVY, marginBottom: "48px" }}>Our Standards</h2>
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
                  <p style={{ fontSize: "0.79rem", letterSpacing: "0.28em", textTransform: "uppercase", color: GREEN, fontFamily: BODY, fontWeight: 800, marginBottom: "20px" }}>{t.tagline}</p>
                  <div style={{ height: "1px", background: BORDER, marginBottom: "20px" }} />
                  <p style={{ fontSize: "0.98rem", color: MUTED, lineHeight: 1.85, fontStyle: "italic" }}>{t.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          BLOG — placeholder navigation destination
      ══════════════════════════════════════════════════ */}
      <section id="blog" style={{ backgroundColor: NAVY, padding: "72px 0", scrollMarginTop: "36px" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <FadeUp>
            <Label light>Blog</Label>
            <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, lineHeight: 1.15, color: WHITE, marginBottom: "16px" }}>Insights and updates are coming soon.</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: "620px", lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>A place for practical thinking on technology, business, and the problems worth solving.</p>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. TEAM — white
      ══════════════════════════════════════════════════ */}
      <section id="team" style={{ backgroundColor: WHITE, padding: "96px 0", scrollMarginTop: "36px" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <FadeUp>
            <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, lineHeight: 1.1, color: NAVY, marginBottom: "4px" }}>The Team</h2>
            <div style={{ height: "1px", background: BORDER, margin: "28px 0 56px" }} />
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
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
                  <p style={{ fontSize: "0.88rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: m.bio ? "12px" : "0" }}>{m.role}</p>
                  {m.bio && (
                    <p style={{ fontSize: "0.96rem", color: MUTED, lineHeight: 1.85, fontStyle: "italic", margin: "0" }}>{m.bio}</p>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
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
              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.85, fontStyle: "italic", marginBottom: "40px", marginTop: "20px" }}>
                Municipality, producer, or potential partner — there's no wrong reason to reach out. Ask a hard question, float an idea, or see whether any of this is useful to you.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {[{ l: "General", e: "scott@itc.eco" }, { l: "Sales", e: "jeff@itc.eco" }].map(c => (
                  <div key={c.e}>
                    <p style={{ fontSize: "0.71rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "4px", fontFamily: BODY }}>{c.l}</p>
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
                        <label htmlFor={`contact-${f.key}`} style={{ fontSize: "0.71rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: "6px", fontFamily: BODY }}>{f.label}</label>
                        <input id={`contact-${f.key}`} name={f.key} required={f.req} style={{ ...fieldStyle, background: "rgba(255,255,255,0.07)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)" }}
                          placeholder={f.ph} value={(form as any)[f.key]}
                          onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                          onFocus={e => (e.currentTarget.style.borderColor = "#86efac")}
                          onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ fontSize: "0.71rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: "6px", fontFamily: BODY }}>Email *</label>
                    <input id="contact-email" name="email" required type="email" style={{ ...fieldStyle, background: "rgba(255,255,255,0.07)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)" }}
                      placeholder="you@company.com" value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={e => (e.currentTarget.style.borderColor = "#86efac")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")} />
                  </div>
                  <div>
                    <label htmlFor="contact-interest" style={{ fontSize: "0.71rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: "6px", fontFamily: BODY }}>Area of Interest</label>
                    <select id="contact-interest" name="interest" style={{ ...fieldStyle, background: "rgba(255,255,255,0.07)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)" }}
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
                    <label htmlFor="contact-message" style={{ fontSize: "0.71rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: "6px", fontFamily: BODY }}>Message *</label>
                    <textarea id="contact-message" name="message" required rows={5} style={{ ...fieldStyle, background: "rgba(255,255,255,0.07)", color: WHITE, border: "1px solid rgba(255,255,255,0.15)", resize: "vertical" }}
                      placeholder="Tell us what you're working on..." value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={e => (e.currentTarget.style.borderColor = "#86efac")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")} />
                  </div>
                  {status === "error" && (
                    <p style={{ fontSize: "0.93rem", color: "#fca5a5", fontStyle: "italic" }}>Something went wrong — email us directly at scott@itc.eco.</p>
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
          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", fontStyle: "italic" }}>
            Precision technology. Proven performance. No trade-offs.
          </p>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)" }}>
            &copy; {new Date().getFullYear()} Inception Technology Company
          </p>
        </div>
      </footer>

    </div>
  );
}
