import { useState } from "react";
import { Menu, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";

const featuredProducts = [
  {
    category: "Asphalt Solutions",
    tagline: "Protect, Preserve & Repair Asphalt Surfaces",
    description:
      "Bio-based, environmentally friendly products formulated to protect and preserve asphalt while reducing maintenance costs and environmental footprint. From penetrating sealers to RAP recycling agents.",
    color: "from-blue-700 to-blue-500",
    accent: "text-blue-400",
    products: [
      { name: "RePlay", desc: "Biobased penetrating sealer", url: "https://biospan.odoo.com/replay" },
      { name: "BioTak-4600", desc: "Coating bonds asphalt layers for durability", url: "https://biospan.odoo.com/biotak-4600" },
      { name: "Activate", desc: "Recycles RAP millings into new asphalt", url: "https://biospan.odoo.com/activate" },
      { name: "SeamSeal", desc: "Watertight sealant for lane joints and seams", url: "https://biospan.odoo.com/seam-seal" },
      { name: "RePlay+", desc: "Tinted bio-based penetrating sealer", url: "https://biospan.odoo.com/replay-plus" },
    ],
    catalogUrl: "https://biospan.odoo.com/asphalt-solutions",
  },
  {
    category: "Concrete Sealer",
    tagline: "Penetrating Protection for Concrete Surfaces",
    description:
      "Biodegradable concrete solutions that provide long-lasting protection, sealing, and maintenance to extend the life of your concrete while supporting sustainability and regulatory compliance.",
    color: "from-blue-800 to-cyan-600",
    accent: "text-cyan-400",
    products: [
      { name: "OptiSeal", desc: "Penetrating protection and preservation", url: "https://biospan.odoo.com/optiseal" },
      { name: "C-Cure", desc: "Improves curing and strengthens concrete", url: "https://biospan.odoo.com/c-cure" },
      { name: "C-New", desc: "Routine and heavy-duty concrete cleaning", url: "https://biospan.odoo.com/c-new" },
    ],
    catalogUrl: "https://biospan.odoo.com/concrete-solutions",
  },
  {
    category: "Dust Control",
    tagline: "Eco-Friendly Suppression for Roads & Industrial Sites",
    description:
      "Biodegradable dust control solutions that provide long-lasting, eco-friendly suppression — reducing dust emissions while supporting EPA compliance and sustainability goals.",
    color: "from-blue-600 to-blue-400",
    accent: "text-blue-300",
    products: [
      { name: "DeDust", desc: "Versatile temporary dust control", url: "https://biospan.odoo.com/dedust" },
      { name: "EnCap-3600", desc: "Advanced encapsulation for long-lasting dust control", url: "https://biospan.odoo.com/encap-3600" },
      { name: "EnCap-20", desc: "Extreme dust control & stabilization", url: "https://biospan.odoo.com/encap-20" },
    ],
    catalogUrl: "https://biospan.odoo.com/dust-control-solutions",
  },
  {
    category: "OTx — Oil Recovery",
    tagline: "Unlock More Barrels from Wells You Already Own",
    description:
      "The only patented, bio-based oil-thinning solution that increases crude flow rates, reduces recovery costs, and eliminates toxic additives — while protecting your wells and the environment. ITC is actively co-developing OTx applications with BioSpan.",
    color: "from-cyan-700 to-blue-600",
    accent: "text-cyan-300",
    products: [
      { name: "Reduces viscosity", desc: "Improves crude mobility and increases flow rates", url: "https://biospan.odoo.com/otx" },
      { name: "Recoverable", desc: "Up to 90% recovery via centrifuge or low-temp distillation", url: "https://biospan.odoo.com/otx" },
      { name: "Non-toxic & biodegradable", desc: "Functions as its own corrosion protectant — no inhibitors needed", url: "https://biospan.odoo.com/otx" },
    ],
    catalogUrl: "https://biospan.odoo.com/otx",
  },
];

export default function Products() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto fallback — will open email client
    const subject = encodeURIComponent(`ITC Product Inquiry: ${formData.interest || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:jeff@inceptiontechnology.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/images/starfield-background.jpg')" }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Header */}
        <header className="flex w-full items-center justify-between p-6 md:p-10">
          <div className="flex flex-col">
            <Link href="/">
              <h1 className="font-orbitron text-4xl font-bold tracking-wider text-white md:text-6xl cursor-pointer hover:text-primary transition-colors">
                ITC
              </h1>
            </Link>
            <span className="font-rajdhani text-lg font-medium tracking-widest text-white/90 md:text-xl">
              Inception Technology Company
            </span>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12 text-white hover:bg-white/10 hover:text-white">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l-white/20 bg-black/90 text-white backdrop-blur-xl">
              <div className="flex flex-col space-y-8 pt-10">
                <span className="font-orbitron text-2xl font-bold">Menu</span>
                <nav className="flex flex-col space-y-6">
                  <Link href="/" className="text-xl font-medium hover:text-primary transition-colors">Home</Link>
                  <Link href="/about" className="text-xl font-medium hover:text-primary transition-colors">About Us</Link>
                  <Link href="/products" className="text-xl font-medium text-primary">BioSpan Products</Link>
                  <Link href="/aims" className="text-xl font-medium hover:text-primary transition-colors">AIMS Technology</Link>
                  <Link href="/rbt" className="text-xl font-medium hover:text-primary transition-colors">Rapid Bacterial Test</Link>
                  <a href="#contact" className="text-xl font-medium hover:text-primary transition-colors">Contact</a>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex flex-1 flex-col px-6 py-8 md:px-16 lg:px-24">

          {/* Hero */}
          <div className="mb-12 text-center">
            <p className="font-orbitron text-xs tracking-[0.4em] text-cyan-400 uppercase mb-3">Master Distributor</p>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-4">
              BioSpan Technologies
            </h2>
            <p className="font-rajdhani text-xl text-white/70 max-w-2xl mx-auto">
              Performance driven, planet focused. Bio-based solutions pioneered since 1993 — now available through ITC across our territory.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full mb-16">
            {featuredProducts.map((cat) => (
              <div key={cat.category} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${cat.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700`}></div>
                <div className="relative flex flex-col p-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl h-full">
                  <h3 className={`font-orbitron text-xl font-bold mb-1 ${cat.accent}`}>{cat.category}</h3>
                  <p className="font-rajdhani text-sm text-white/50 uppercase tracking-widest mb-3">{cat.tagline}</p>
                  <p className="font-rajdhani text-base text-white/70 mb-5 leading-relaxed">{cat.description}</p>

                  {/* Product list */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {cat.products.map((p) => (
                      <li key={p.name}>
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 group/item hover:text-white text-white/60 transition-colors"
                        >
                          <ChevronRight className="h-4 w-4 shrink-0 text-white/30 group-hover/item:text-white/70" />
                          <span className="font-rajdhani text-sm">
                            <span className="font-semibold text-white/90">{p.name}</span>
                            {" — "}{p.desc}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={cat.catalogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-orbitron text-xs tracking-wider ${cat.accent} hover:opacity-80 transition-opacity`}
                  >
                    Full Product Catalog <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div id="contact" className="max-w-4xl mx-auto w-full mb-16">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-2xl blur opacity-30"></div>
              <div className="relative grid md:grid-cols-2 gap-8 p-8 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl">

                {/* Contact info */}
                <div>
                  <h3 className="font-orbitron text-2xl font-bold text-white mb-2">Get in Touch</h3>
                  <p className="font-rajdhani text-white/60 mb-6">
                    Ready to learn more or request pricing? Reach out directly or use the form.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-orbitron text-xs text-cyan-400 tracking-widest uppercase mb-1">Jeff Streck</p>
                      <p className="font-rajdhani text-white/80">Sales & Marketing Lead</p>
                      <a href="tel:+16604413261" className="font-rajdhani text-white hover:text-cyan-400 transition-colors">
                        (660) 441-3261
                      </a>
                    </div>
                    <div>
                      <p className="font-orbitron text-xs text-cyan-400 tracking-widest uppercase mb-1">Lillie Geiersbach</p>
                      <p className="font-rajdhani text-white/80">Technical Lead</p>
                      <p className="font-rajdhani text-white/40 text-sm">Contact info coming soon</p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div>
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <p className="font-orbitron text-cyan-400 text-lg mb-2">Message Sent</p>
                      <p className="font-rajdhani text-white/60">We'll be in touch shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 font-rajdhani text-white placeholder-white/30 focus:outline-none focus:border-cyan-500"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 font-rajdhani text-white placeholder-white/30 focus:outline-none focus:border-cyan-500"
                      />
                      <input
                        type="tel"
                        placeholder="Phone (optional)"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 font-rajdhani text-white placeholder-white/30 focus:outline-none focus:border-cyan-500"
                      />
                      <select
                        value={formData.interest}
                        onChange={e => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 font-rajdhani text-white/70 focus:outline-none focus:border-cyan-500"
                      >
                        <option value="">Area of Interest</option>
                        <option value="Asphalt Solutions">Asphalt Solutions</option>
                        <option value="Concrete Sealer">Concrete Sealer</option>
                        <option value="Dust Control">Dust Control</option>
                        <option value="OTx Oil Recovery">OTx — Oil Recovery</option>
                        <option value="General">General Inquiry</option>
                      </select>
                      <textarea
                        placeholder="Message"
                        rows={3}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 font-rajdhani text-white placeholder-white/30 focus:outline-none focus:border-cyan-500 resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-orbitron text-sm tracking-wider py-3 rounded-lg transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </div>

        </main>

        <footer className="p-6 text-center text-sm text-white/40 md:p-10">
          &copy; {new Date().getFullYear()} Inception Technology Company. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
