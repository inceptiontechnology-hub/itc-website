import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "wouter";

// Gallery — biosphere tech domains
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85", label: "Regenerative Agriculture", tall: true },
  { src: "https://images.unsplash.com/photo-1437377013344-64eeab8b6bcd?auto=format&fit=crop&w=800&q=85", label: "Water Systems" },
  { src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=85", label: "Forest Ecosystem" },
  { src: "https://images.unsplash.com/photo-1466611349788-3b2ac4aa5f71?auto=format&fit=crop&w=800&q=85", label: "Wind Energy", wide: true },
  { src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=85", label: "Soil Health" },
  { src: "https://images.unsplash.com/photo-1526374548513-eb55d7a92e9d?auto=format&fit=crop&w=800&q=85", label: "Solar Systems" },
  { src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=85", label: "Green Infrastructure" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85", label: "Clean Water" },
  { src: "https://images.unsplash.com/photo-1565520831234-538553da03a4?auto=format&fit=crop&w=800&q=85", label: "Construction", wide: true },
  { src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=85", label: "Boreal Forest" },
  { src: "https://images.unsplash.com/photo-1505459023801-95646e832e2e?auto=format&fit=crop&w=800&q=85", label: "Marine Ecosystems" },
  { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=85", label: "Watershed" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#020917] text-white min-h-screen overflow-x-hidden font-rajdhani">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          src="/iss-sunrise.mp4"
          poster="/images/earth-poster.jpg"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* ── Nav ── */}
        <nav
          className={`absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-500 ${
            scrolled ? "bg-[#020917]/80 backdrop-blur-md border-b border-white/10" : ""
          }`}
        >
          <div>
            <span className="font-orbitron text-4xl font-bold tracking-wider text-white md:text-5xl">ITC</span>
            <p className="text-xs tracking-[0.3em] text-white/50 mt-0.5 hidden md:block">
              INCEPTION TECHNOLOGY COMPANY
            </p>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "/about", label: "About" },
              { href: "/products", label: "Products" },
              { href: "/aims", label: "AIMS" },
              { href: "/rbt", label: "Bacterial Test" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm tracking-wider text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/products#contact"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white text-sm px-6 py-2.5 rounded-full font-semibold tracking-wider transition-all hover:scale-105 shadow-lg shadow-orange-900/30"
            >
              Contact
            </a>
          </div>

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
          <div className="absolute inset-0 z-40 bg-[#020917]/97 flex flex-col items-center justify-center gap-10">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/products", label: "Products" },
              { href: "/aims", label: "AIMS" },
              { href: "/rbt", label: "Rapid Bacterial Test" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium tracking-wider hover:text-[#60a5fa] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/products#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-[#f97316] text-white text-lg px-8 py-3 rounded-full font-semibold tracking-wider"
            >
              Contact Us
            </a>
          </div>
        )}

        {/* ── Hero copy ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-24">
          <p className="text-[#60a5fa] text-xs tracking-[0.4em] uppercase mb-6">
            Regenerate Earth's Biosphere
          </p>
          <h2 className="font-orbitron text-5xl md:text-7xl xl:text-[5.5rem] font-bold text-white leading-[1.05] max-w-5xl">
            Technology Built
            <br />
            <span className="text-[#22c55e]">for This Planet</span>
          </h2>
          <p className="mt-8 max-w-lg text-lg text-white/60 leading-relaxed">
            There is a kind of person who sees what this century will demand.
            They do not think the work is too hard. They do not think the odds
            are too long. ITC is built for them.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="#mission"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-9 py-3.5 rounded-full font-semibold tracking-wider transition-all hover:scale-105 shadow-xl shadow-orange-900/30 text-base"
            >
              Our Mission
            </a>
            <Link
              href="/products"
              className="border border-white/25 hover:border-white/50 text-white px-9 py-3.5 rounded-full font-semibold tracking-wider transition-all hover:bg-white/8 text-base"
            >
              Our Products →
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-[10px] tracking-[0.3em]">
          <span>SCROLL</span>
          <ChevronDown size={18} className="animate-bounce mt-1" />
        </div>
      </section>

      {/* ─── MISSION ──────────────────────────────────────────── */}
      <section id="mission" className="py-28 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[#60a5fa] text-xs tracking-[0.4em] uppercase mb-5">The Mission</p>
            <h3 className="font-orbitron text-3xl md:text-4xl font-bold text-white leading-snug">
              We identify and deploy
              <br />
              technologies that{" "}
              <span className="text-[#22c55e]">regenerate Earth</span>
              <br />
              — and win on economics
            </h3>
          </div>
          <div className="space-y-8">
            <p className="text-white/55 text-lg leading-relaxed">
              Our portfolio spans water, regenerative agriculture, construction,
              and safe chemistry — united by one filter: is it better for the
              biosphere <em>and</em> better for the bottom line?
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { n: "72,000+", d: "Compounds detected by AIMS", c: "#f97316" },
                { n: "4 Domains", d: "Water · Ag · Building · Chemistry", c: "#22c55e" },
                { n: "6 States", d: "Exclusive distribution territory", c: "#60a5fa" },
                { n: "48 hr", d: "AIMS turnaround from Calgary", c: "#f97316" },
              ].map((s) => (
                <div key={s.n} style={{ borderLeftColor: s.c }} className="border-l-2 pl-4">
                  <p className="font-orbitron text-xl font-bold text-white">{s.n}</p>
                  <p className="text-white/40 text-sm mt-1 leading-snug">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ──────────────────────────────────────────── */}
      <section id="gallery" className="pb-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#60a5fa] text-xs tracking-[0.4em] uppercase mb-4">
              Technology for the Biosphere
            </p>
            <h3 className="font-orbitron text-3xl md:text-4xl font-bold text-white">
              We go anywhere
              <br />
              <span className="text-[#22c55e]">the planet needs us</span>
            </h3>
            <p className="mt-4 text-white/40 text-base max-w-md mx-auto leading-relaxed">
              Water. Agriculture. Construction. Safe Chemistry. One mission drives every technology we choose.
            </p>
          </div>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  style={{ aspectRatio: img.tall ? "3/4" : img.wide ? "16/9" : "4/3" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-semibold tracking-wider">{img.label}</p>
                  </div>
                </div>
                {/* Subtle always-on bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-20 px-8 text-center bg-gradient-to-b from-transparent to-[#030f20]">
        <p className="text-[#60a5fa] text-xs tracking-[0.4em] uppercase mb-4">Ready to work with us?</p>
        <h3 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-8">
          The time to move is now.
        </h3>
        <a
          href="/products#contact"
          className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white px-10 py-4 rounded-full font-semibold text-lg tracking-wider transition-all hover:scale-105 shadow-xl shadow-orange-900/40"
        >
          Get in Touch
        </a>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t border-white/10 py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-orbitron text-2xl font-bold text-white">ITC</span>
            <p className="text-white/30 text-xs mt-1 tracking-wider">INCEPTION TECHNOLOGY COMPANY</p>
          </div>
          <p className="text-white/30 text-sm text-center md:text-right max-w-xs leading-relaxed">
            Innovation through Economically and Ecologically advantaged Technology
          </p>
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Inception Technology Company
          </p>
        </div>
      </footer>
    </div>
  );
}
