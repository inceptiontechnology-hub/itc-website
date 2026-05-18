import { Menu, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";

const competitorData = [
  { feature: "Compounds / Sample", aims: "Up to 18,000", lcms: "10–500", metabolon: "1,000–2,000", stdPanel: "20–50" },
  { feature: "Detection Limit", aims: "5 ppt", lcms: "10–100 ppt", metabolon: "~10 ppt", stdPanel: "µg/L range" },
  { feature: "Turnaround Time", aims: "48 Hours", lcms: "2–4 Weeks", metabolon: "2–3 Weeks", stdPanel: "1–3 Days" },
  { feature: "Cost / Sample", aims: "<$250", lcms: "$1,000–$5,000", metabolon: "$1,500–$3,000", stdPanel: "$50–$200" },
  { feature: "AI-Driven Analysis", aims: "✓", lcms: "✗", metabolon: "Partial", stdPanel: "✗" },
  { feature: "Non-Targeted Screening", aims: "✓", lcms: "Limited", metabolon: "✓", stdPanel: "✗" },
  { feature: "Mail-In / Kit-Based", aims: "✓", lcms: "Lab Visit", metabolon: "Specialized", stdPanel: "Lab Visit" },
];

const panels = [
  { name: "3 PFAS Panel", price: "$225", type: "Characterized", turnaround: "Standard: $345 · Expedited: $405", detail: "Quantitative to 5 ppt" },
  { name: "13 PFAS Panel", price: "$250", type: "Characterized", turnaround: "Standard: $370 · Expedited: $430", detail: "Quantitative to 5 ppt" },
  { name: "Non-Targeted Panel", price: "$300", type: "Non-Targeted", turnaround: "Standard: $420 · Expedited: $480", detail: "Semi-quant; up to 18,000 compounds" },
];

const useCases = [
  {
    icon: "🧬",
    title: "Precision Medicine",
    desc: "Extends molecular profiling from genome to real-time metabolic state. Correlates metabolite signatures against genomic data, medical history, and environmental exposures.",
  },
  {
    icon: "🔬",
    title: "Oncology & Drug Response",
    desc: "Track treatment response and toxicity in real time through metabolite levels. Optimize dosing and detect adverse events before clinical symptoms appear.",
  },
  {
    icon: "💧",
    title: "PFAS & Environmental Monitoring",
    desc: "Detect PFAS/PFOS at 5 ppt in water, blood, or urine. Map environmental exposures to health outcomes at individual and population scale.",
  },
  {
    icon: "🏥",
    title: "Population Health",
    desc: "At under $250 per curated panel, metabolomic screening is viable at population scale — enabling early intervention years before clinical disease emerges.",
  },
  {
    icon: "⚡",
    title: "Acute Clinical Care",
    desc: "Turnaround compressible to hours for acute situations. Mail-in kit system requires no lab visit, no specialized equipment, no technical training.",
  },
  {
    icon: "🌍",
    title: "Water & Wastewater",
    desc: "Screen water samples for thousands of organic compounds simultaneously. Identify unknown contaminants, trace sources, protect treatment systems.",
  },
];

export default function AIMS() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/starfield-background.jpg')" }}
      />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Header */}
        <header className="flex w-full items-center justify-between p-6 md:p-10">
          <div className="flex flex-col">
            <Link href="/">
              <h1 className="font-orbitron text-4xl font-bold tracking-wider text-white md:text-5xl cursor-pointer hover:text-primary transition-colors">
                ITC
              </h1>
            </Link>
            <span className="font-rajdhani text-base font-medium tracking-widest text-white/80 md:text-lg">
              Inception Technology Company
            </span>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12 text-white hover:bg-white/10 hover:text-white">
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l-white/20 bg-black/90 text-white backdrop-blur-xl">
              <div className="flex flex-col space-y-8 pt-10">
                <span className="font-orbitron text-2xl font-bold">Menu</span>
                <nav className="flex flex-col space-y-6">
                  <Link href="/" className="text-xl font-medium hover:text-primary transition-colors">Home</Link>
                  <Link href="/about" className="text-xl font-medium hover:text-primary transition-colors">About Us</Link>
                  <Link href="/products" className="text-xl font-medium hover:text-primary transition-colors">BioSpan Products</Link>
                  <Link href="/aims" className="text-xl font-medium text-cyan-400">AIMS Technology</Link>
                  <Link href="/rbt" className="text-xl font-medium hover:text-primary transition-colors">Rapid Bacterial Test</Link>
                  <a href="#contact" className="text-xl font-medium hover:text-primary transition-colors">Contact</a>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex flex-1 flex-col px-6 md:px-16 lg:px-24">

          {/* Hero */}
          <div className="mb-16 pt-8 text-center max-w-4xl mx-auto w-full">
            <p className="font-orbitron text-xs tracking-[0.5em] text-cyan-400 uppercase mb-4">
              AI-Integrated Mass Spectrometry
            </p>
            <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AIMS
            </h2>
            <p className="font-rajdhani text-xl md:text-2xl text-white/80 mb-4 font-medium">
              The Missing Layer in Precision Medicine
            </p>
            <p className="font-rajdhani text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Detect up to 18,000 organic compounds per sample in 48 hours at under $250 — with no equivalent anywhere in the market. Developed by Dr. Paul Westlund at C.E.C. Innovations.
            </p>

            {/* Hero stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { num: "18,000", label: "Compounds / Sample" },
                { num: "5 ppt", label: "Detection Limit" },
                { num: "48 HRS", label: "Turnaround Time" },
                { num: "<$250", label: "Per Curated Panel" },
              ].map((s) => (
                <div key={s.label} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                  <div className="relative p-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl text-center">
                    <div className="font-orbitron text-2xl md:text-3xl font-bold text-cyan-400">{s.num}</div>
                    <div className="font-rajdhani text-xs text-white/50 mt-1 uppercase tracking-widest">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Molecular Stack */}
          <div className="max-w-5xl mx-auto w-full mb-16">
            <h3 className="font-orbitron text-2xl font-bold text-center text-white mb-3">The Molecular Profiling Stack</h3>
            <p className="font-rajdhani text-center text-white/60 mb-8 text-lg">AIMS fills the last major gap — real-time metabolic intelligence</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {[
                { layer: "GENOMICS", sub: "DNA", badge: "Existing platforms", dim: true },
                { layer: "TRANSCRIPTOMICS", sub: "RNA", badge: "Existing platforms", dim: true },
                { layer: "PROTEOMICS", sub: "Protein", badge: "Existing platforms", dim: true },
                { layer: "METABOLOMICS", sub: "What's happening NOW", badge: "← AIMS fills this layer", dim: false },
              ].map((l) => (
                <div key={l.layer} className={`relative p-5 rounded-xl border text-center ${l.dim ? "border-white/10 bg-white/5" : "border-cyan-400/50 bg-cyan-400/10"}`}>
                  <div className={`font-orbitron text-sm font-bold mb-1 ${l.dim ? "text-white/50" : "text-cyan-400"}`}>{l.layer}</div>
                  <div className={`font-rajdhani text-xs ${l.dim ? "text-white/30" : "text-white/70"}`}>{l.sub}</div>
                  <div className={`font-rajdhani text-xs mt-2 ${l.dim ? "text-white/20" : "text-cyan-300"}`}>{l.badge}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Two Modes */}
          <div className="max-w-5xl mx-auto w-full mb-16">
            <h3 className="font-orbitron text-2xl font-bold text-center text-white mb-3">Two Powerful Modes</h3>
            <p className="font-rajdhani text-center text-white/60 mb-8 text-lg">One platform. Broad enough for discovery, precise enough for clinical monitoring.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700" />
                <div className="relative p-8 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl h-full">
                  <div className="font-orbitron text-xs text-blue-400 tracking-widest uppercase mb-3">Mode 1</div>
                  <h4 className="font-orbitron text-xl font-bold text-white mb-4">Non-Targeted Screening</h4>
                  <p className="font-rajdhani text-white/70 leading-relaxed">
                    Scans a single 100 mL sample of water, blood, or urine to detect the presence and relative quantity of up to <span className="text-white font-semibold">18,000 distinct organic compounds</span>. Reveals the complete organic chemical landscape without requiring advance knowledge of what to look for.
                  </p>
                  <div className="mt-4 p-3 bg-blue-900/30 border border-blue-700/30 rounded-lg">
                    <p className="font-rajdhani text-sm text-blue-300">Results: Semi-quantitative · Up to 18,000 compounds · Water, blood, or urine</p>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-700 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700" />
                <div className="relative p-8 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl h-full">
                  <div className="font-orbitron text-xs text-cyan-400 tracking-widest uppercase mb-3">Mode 2</div>
                  <h4 className="font-orbitron text-xl font-bold text-white mb-4">Fully Characterized (Targeted)</h4>
                  <p className="font-rajdhani text-white/70 leading-relaxed">
                    Screens for a curated panel of specific compounds — such as PFAS/PFOS species — with detection sensitivity as low as <span className="text-white font-semibold">5 parts per trillion (ppt)</span>, well within or exceeding current regulatory and clinical thresholds.
                  </p>
                  <div className="mt-4 p-3 bg-cyan-900/30 border border-cyan-700/30 rounded-lg">
                    <p className="font-rajdhani text-sm text-cyan-300">Results: Quantitative to 5 ppt · PFAS, clinical compounds, custom panels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Metabolomics */}
          <div className="max-w-5xl mx-auto w-full mb-16">
            <h3 className="font-orbitron text-2xl font-bold text-center text-white mb-3">Why Metabolomics — And Why Now</h3>
            <p className="font-rajdhani text-center text-white/60 mb-8 text-lg max-w-3xl mx-auto">
              Genomics tells you predisposition. Metabolomics tells you what is actually happening in the body <em>right now</em> — making metabolites the most clinically actionable biomarker class.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map((u) => (
                <div key={u.title} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl h-full hover:border-white/20 transition-colors">
                    <div className="text-3xl mb-3">{u.icon}</div>
                    <h4 className="font-orbitron text-sm font-bold text-cyan-400 mb-2">{u.title}</h4>
                    <p className="font-rajdhani text-sm text-white/60 leading-relaxed">{u.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Table */}
          <div className="max-w-5xl mx-auto w-full mb-16">
            <h3 className="font-orbitron text-2xl font-bold text-center text-white mb-3">Competitive Advantage</h3>
            <p className="font-rajdhani text-center text-white/60 mb-8 text-lg">
              AIMS occupies a unique position no competitor can match
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-4 font-orbitron text-xs text-white/50 uppercase tracking-wider border-b border-white/10">Feature</th>
                    <th className="p-4 font-orbitron text-xs text-cyan-400 uppercase tracking-wider border-b border-cyan-400/30 bg-cyan-400/5">AIMS</th>
                    <th className="p-4 font-orbitron text-xs text-white/40 uppercase tracking-wider border-b border-white/10">Trad. LC/MS</th>
                    <th className="p-4 font-orbitron text-xs text-white/40 uppercase tracking-wider border-b border-white/10">Metabolon</th>
                    <th className="p-4 font-orbitron text-xs text-white/40 uppercase tracking-wider border-b border-white/10">Std. Panel</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorData.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className="p-4 font-rajdhani text-white/70 border-b border-white/5">{row.feature}</td>
                      <td className="p-4 font-rajdhani text-cyan-400 font-semibold border-b border-white/5 bg-cyan-400/5 text-center">{row.aims}</td>
                      <td className="p-4 font-rajdhani text-white/40 border-b border-white/5 text-center">{row.lcms}</td>
                      <td className="p-4 font-rajdhani text-white/40 border-b border-white/5 text-center">{row.metabolon}</td>
                      <td className="p-4 font-rajdhani text-white/40 border-b border-white/5 text-center">{row.stdPanel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Panels / Pricing */}
          <div className="max-w-5xl mx-auto w-full mb-16">
            <h3 className="font-orbitron text-2xl font-bold text-center text-white mb-3">Available Panels</h3>
            <p className="font-rajdhani text-center text-white/60 mb-8 text-lg">
              Volume discounts: −$15/sample (2–4 samples) · −$30/sample (5+ samples). Freight included in totals shown.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {panels.map((panel) => (
                <div key={panel.name} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-700" />
                  <div className="relative p-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl">
                    <div className="font-orbitron text-xs text-cyan-400 tracking-widest uppercase mb-2">{panel.type}</div>
                    <h4 className="font-orbitron text-lg font-bold text-white mb-1">{panel.name}</h4>
                    <div className="font-orbitron text-3xl font-bold text-white mb-1">{panel.price}</div>
                    <div className="font-rajdhani text-xs text-white/40 mb-4">list price / sample</div>
                    <div className="font-rajdhani text-sm text-white/60 mb-3">{panel.detail}</div>
                    <div className="font-rajdhani text-xs text-white/40 border-t border-white/10 pt-3">{panel.turnaround}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 bg-white/5 border border-white/10 rounded-xl">
              <p className="font-rajdhani text-sm text-white/60 text-center">
                <span className="text-white font-semibold">Water matrix only</span> — other soluble materials require manual quote. Kit, protocol & shipping included. Results delivered as PDF. No minimum order. Credit card or Net 15 (prior approval).
              </p>
            </div>
          </div>

          {/* Market */}
          <div className="max-w-5xl mx-auto w-full mb-16">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur opacity-30" />
              <div className="relative grid md:grid-cols-3 gap-6 p-8 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl">
                <div className="text-center">
                  <div className="font-orbitron text-3xl font-bold text-cyan-400 mb-2">$3–4B</div>
                  <div className="font-rajdhani text-white/60 text-sm">Global metabolomics market (2025)</div>
                </div>
                <div className="text-center">
                  <div className="font-orbitron text-3xl font-bold text-cyan-400 mb-2">$16B</div>
                  <div className="font-rajdhani text-white/60 text-sm">Projected market size by 2034</div>
                </div>
                <div className="text-center">
                  <div className="font-orbitron text-3xl font-bold text-cyan-400 mb-2">11–18%</div>
                  <div className="font-rajdhani text-white/60 text-sm">CAGR through 2034</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="max-w-4xl mx-auto w-full mb-16">
            <h3 className="font-orbitron text-2xl font-bold text-center text-white mb-3">Get in Touch</h3>
            <p className="font-rajdhani text-center text-white/60 mb-8 text-lg">Request pricing, custom panel quotes, or talk to our team about your specific application.</p>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-2xl blur opacity-30" />
              <div className="relative p-8 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl">
                <div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-orbitron text-xs text-cyan-400 tracking-widest uppercase mb-1">Technology Developer</p>
                      <p className="font-rajdhani text-white font-semibold">C.E.C. Innovations</p>
                      <a href="https://cecinnovations.com" target="_blank" rel="noopener noreferrer" className="font-rajdhani text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 text-sm">
                        cecinnovations.com <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>

        <footer className="p-6 text-center text-sm text-white/40 md:p-10">
          &copy; {new Date().getFullYear()} Inception Technology Company. AIMS technology developed by C.E.C. Innovations. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
