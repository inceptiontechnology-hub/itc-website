import { Menu, ExternalLink, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";

const comparisonData = [
  { feature: "Time to Results", rbt: "Instant (seconds)", other: "18–24 hours" },
  { feature: "Cost per Test", rbt: "$5.50 – $10.00", other: "$50 – $75" },
  { feature: "Equipment Needed", rbt: "None", other: "Incubator, lab supplies" },
  { feature: "Training Required", rbt: "None", other: "Technical training" },
  { feature: "Sensitivity", rbt: "10⁻¹ CFU/ml", other: "1 CFU/100ml" },
  { feature: "Field Deployable", rbt: "yes", other: "no" },
  { feature: "Storage Stability", rbt: "2 yrs, room temp", other: "Refrigeration required" },
  { feature: "Chlorine Tolerance", rbt: "Up to 5 ppm", other: "Variable" },
];

const applications = [
  {
    icon: "🌍",
    title: "NGOs & Humanitarian Aid",
    items: ["Emergency & disaster relief", "Rural water system monitoring", "Refugee camp water verification", "Well and borehole testing", "Community health education"],
  },
  {
    icon: "🍽️",
    title: "Food Processing Facilities",
    items: ["Incoming water quality screening", "Process water monitoring", "CIP (clean-in-place) validation", "Production line checks", "Real-time quality assurance"],
  },
  {
    icon: "🏘️",
    title: "Remote Communities",
    items: ["Village water supply testing", "Point-of-use treatment verification", "Rainwater harvesting checks", "Small-scale distribution monitoring", "Community empowerment programs"],
  },
];

const pricingTiers = [
  { label: "Starter Pack", qty: "10-Pack", price: "$10.00", perUnit: "per test", note: "Perfect for trials & initial evaluation" },
  { label: "Professional Pack", qty: "250-Pack", price: "$7.00", perUnit: "per test", note: "30% savings vs. starter. Most popular.", featured: true },
  { label: "Enterprise Pack", qty: "1,000+ Tests", price: "$5.50", perUnit: "per test", note: "45% savings. Custom packaging available." },
];

const specs = [
  { label: "Detection Method", value: "Visual Colorimetric" },
  { label: "Sensitivity", value: "10⁻¹ CFU/ml" },
  { label: "Sample Volume", value: "3 ml" },
  { label: "Result Time", value: "Instant (seconds)" },
  { label: "Shelf Life", value: "2 years" },
  { label: "Storage", value: "Room temperature" },
  { label: "Chlorine Tolerance", value: "Up to 5 ppm" },
  { label: "Water Types", value: "Potable, treated, surface" },
  { label: "Interpretation", value: "Pass / Fail indicator" },
  { label: "Package Sizes", value: "10, 250, 1,000+ packs" },
  { label: "Training Required", value: "None" },
  { label: "Product ID", value: "RBT-LEV-100" },
];

export default function RBT() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/starfield-background.jpg')" }}
      />
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
                  <Link href="/aims" className="text-xl font-medium hover:text-primary transition-colors">AIMS Technology</Link>
                  <Link href="/rbt" className="text-xl font-medium text-cyan-400">Rapid Bacterial Test</Link>
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
              Revolutionary Water Safety Testing
            </p>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Rapid Bacterial<br />Test Kit
            </h2>
            <p className="font-rajdhani text-xl md:text-2xl text-white/80 mb-4 font-medium">
              Instant Water Safety Testing for a Safer World
            </p>
            <p className="font-rajdhani text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Revolutionary colorimetric water testing that delivers results in seconds — at a fraction of traditional testing costs. Developed by C.E.C. Innovations.
            </p>

            {/* Hero stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { num: "Instant", label: "Visual Results" },
                { num: "$5.50", label: "Per Test (Bulk)" },
                { num: "10⁻¹", label: "CFU/ml Detection" },
                { num: "2 YRS", label: "Shelf Life" },
              ].map((s) => (
                <div key={s.label} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                  <div className="relative p-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl text-center">
                    <div className="font-orbitron text-xl md:text-2xl font-bold text-cyan-400">{s.num}</div>
                    <div className="font-rajdhani text-xs text-white/50 mt-1 uppercase tracking-widest">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto w-full mb-16">
            <h3 className="font-orbitron text-2xl font-bold text-center text-white mb-3">How It Works</h3>
            <p className="font-rajdhani text-center text-white/60 mb-8 text-lg">Three steps. No equipment. No training. No waiting.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: "1", title: "Collect", desc: "Add 3 ml of water sample to the test vial. Any water suitable for human consumption or monitoring can be tested." },
                { num: "2", title: "Shake", desc: "Shake the vial gently. Results appear instantly — no incubation period, no lab equipment, no special conditions required." },
                { num: "3", title: "Read", desc: "Pink shades = PASS (safe). Purple or dark = FAIL (contaminated). Simple, unambiguous visual interpretation." },
              ].map((step) => (
                <div key={step.num} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-500" />
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center hover:border-white/20 transition-colors">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-orbitron text-2xl font-bold text-white shadow-lg shadow-blue-500/20">
                      {step.num}
                    </div>
                    <h4 className="font-orbitron text-lg font-bold text-white mb-3">{step.title}</h4>
                    <p className="font-rajdhani text-sm text-white/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Color result indicator */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-3 p-4 bg-pink-900/20 border border-pink-500/30 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-pink-400 flex-shrink-0" />
                <div>
                  <div className="font-orbitron text-sm font-bold text-pink-400">PINK = PASS</div>
                  <div className="font-rajdhani text-xs text-white/50">Safe — bacterial count below 10⁻¹ CFU/ml</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-900/20 border border-purple-500/30 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-purple-800 flex-shrink-0" />
                <div>
                  <div className="font-orbitron text-sm font-bold text-purple-400">PURPLE = FAIL</div>
                  <div className="font-rajdhani text-xs text-white/50">Contamination detected — action required</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="max-w-5xl mx-auto w-full mb-16">
            <h3 className="font-orbitron text-2xl font-bold text-center text-white mb-3">Key Advantages</h3>
            <p className="font-rajdhani text-center text-white/60 mb-8 text-lg">Breakthrough performance vs. traditional testing methods</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "⚡", title: "Instant Results", desc: "Answers in seconds — no lab equipment, no cultures, no waiting. Make decisions in real time, in the field." },
                { icon: "💰", title: "Exceptional Value", desc: "90% less expensive than traditional lab testing at $5.50/test bulk. Special NGO pricing available for humanitarian programs." },
                { icon: "🎯", title: "High Sensitivity", desc: "Detects bacterial presence at 10⁻¹ CFU/ml — approaching lab-grade detection in a simple visual format." },
                { icon: "✋", title: "No Training Needed", desc: "Simple colorimetric test — if you can see pink vs. purple, you can run this test. Designed for field deployment." },
                { icon: "🌍", title: "Field Deployable", desc: "Room-temperature stable for 2 years. No refrigeration, no electricity, no incubator. Works anywhere in the world." },
                { icon: "🔬", title: "Chlorine Tolerant", desc: "Accurate with chlorine residuals up to 5 ppm. Works reliably with treated municipal water, not just raw samples." },
              ].map((a) => (
                <div key={a.title} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl h-full hover:border-white/20 transition-colors border-l-2 border-l-cyan-500/50">
                    <div className="text-3xl mb-3">{a.icon}</div>
                    <h4 className="font-orbitron text-sm font-bold text-cyan-400 mb-2">{a.title}</h4>
                    <p className="font-rajdhani text-sm text-white/60 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto w-full mb-16">
            <h3 className="font-orbitron text-2xl font-bold text-center text-white mb-3">How We Compare</h3>
            <p className="font-rajdhani text-center text-white/60 mb-8 text-lg">RBT Kit vs. Colilert / Petrifilm — traditional laboratory methods</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-4 font-orbitron text-xs text-white/50 uppercase tracking-wider border-b border-white/10">Feature</th>
                    <th className="p-4 font-orbitron text-xs text-cyan-400 uppercase tracking-wider border-b border-cyan-400/30 bg-cyan-400/5">RBT Kit</th>
                    <th className="p-4 font-orbitron text-xs text-white/40 uppercase tracking-wider border-b border-white/10">Colilert / Petrifilm</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className="p-4 font-rajdhani text-white/70 border-b border-white/5">{row.feature}</td>
                      <td className="p-4 font-rajdhani border-b border-white/5 bg-cyan-400/5 text-center">
                        {row.rbt === "yes" ? (
                          <span className="text-green-400 font-bold">✓ Yes</span>
                        ) : (
                          <span className="text-cyan-400 font-semibold">{row.rbt}</span>
                        )}
                      </td>
                      <td className="p-4 font-rajdhani border-b border-white/5 text-center">
                        {row.other === "no" ? (
                          <span className="text-red-400/70">✗ No</span>
                        ) : (
                          <span className="text-white/40">{row.other}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Applications */}
          <div className="max-w-5xl mx-auto w-full mb-16">
            <h3 className="font-orbitron text-2xl font-bold text-center text-white mb-3">Applications</h3>
            <p className="font-rajdhani text-center text-white/60 mb-8 text-lg">Proven across diverse environments and use cases</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {applications.map((app) => (
                <div key={app.title} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700" />
                  <div className="relative p-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl h-full">
                    <div className="text-3xl mb-3">{app.icon}</div>
                    <h4 className="font-orbitron text-sm font-bold text-cyan-400 mb-4">{app.title}</h4>
                    <ul className="space-y-2">
                      {app.items.map((item) => (
                        <li key={item} className="font-rajdhani text-sm text-white/60 flex items-start gap-2">
                          <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 bg-white/5 border border-white/10 rounded-xl">
              <p className="font-rajdhani text-sm text-white/50 text-center">
                <span className="text-white/70 font-semibold">Important:</span> The RBT Kit is designed as a screening tool to quickly identify potential contamination and verify treatment effectiveness. It is not intended as a replacement for comprehensive laboratory analysis for regulatory compliance. Always follow local water quality regulations.
              </p>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="max-w-4xl mx-auto w-full mb-16">
            <h3 className="font-orbitron text-2xl font-bold text-center text-white mb-3">Technical Specifications</h3>
            <p className="font-rajdhani text-center text-white/60 mb-8 text-lg">Product ID: RBT-LEV-100</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {specs.map((s) => (
                <div key={s.label} className="p-4 bg-white/5 border border-white/10 rounded-xl border-l-2 border-l-cyan-500/50">
                  <div className="font-orbitron text-xs text-white/40 uppercase tracking-wider mb-1">{s.label}</div>
                  <div className="font-rajdhani text-sm text-white font-semibold">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="max-w-4xl mx-auto w-full mb-16">
            <h3 className="font-orbitron text-2xl font-bold text-center text-white mb-3">Transparent Pricing</h3>
            <p className="font-rajdhani text-center text-white/60 mb-8 text-lg">Volume discounts available · Special rates for NGOs and humanitarian programs</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier) => (
                <div key={tier.label} className={`relative group ${tier.featured ? "scale-105" : ""}`}>
                  <div className={`absolute -inset-1 rounded-2xl blur opacity-30 transition duration-700 group-hover:opacity-50 ${tier.featured ? "bg-gradient-to-r from-cyan-500 to-blue-500" : "bg-gradient-to-r from-blue-600/30 to-cyan-600/30"}`} />
                  <div className={`relative p-6 bg-black/60 backdrop-blur-sm rounded-xl text-center ${tier.featured ? "border-2 border-cyan-400/50" : "border border-white/10"}`}>
                    {tier.featured && (
                      <div className="font-orbitron text-xs text-cyan-400 tracking-widest uppercase mb-2">★ Most Popular</div>
                    )}
                    <h4 className="font-orbitron text-base font-bold text-white mb-1">{tier.label}</h4>
                    <div className="font-rajdhani text-white/50 text-sm mb-3">{tier.qty}</div>
                    <div className="font-orbitron text-4xl font-bold text-white mb-1">{tier.price}</div>
                    <div className="font-rajdhani text-white/40 text-xs mb-4">{tier.perUnit}</div>
                    <div className="font-rajdhani text-sm text-white/60">{tier.note}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 bg-cyan-900/20 border border-cyan-700/30 rounded-xl text-center">
              <p className="font-rajdhani text-sm text-cyan-300">
                <span className="font-semibold">NGO & Contract Pricing:</span> Special discounted rates available for registered NGOs and large contract supply agreements. Contact us for a custom quote.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="max-w-4xl mx-auto w-full mb-16">
            <h3 className="font-orbitron text-2xl font-bold text-center text-white mb-3">Ready to Order?</h3>
            <p className="font-rajdhani text-center text-white/60 mb-8 text-lg">Request a quote, ask about NGO pricing, or place an order.</p>
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
          &copy; {new Date().getFullYear()} Inception Technology Company. RBT technology developed by C.E.C. Innovations (Product ID: RBT-LEV-100). All rights reserved.
        </footer>
      </div>
    </div>
  );
}
