/**
 * ITC Home Page — reconstructed from Manus build
 * Source: https://inceptiontech-ptr9wutp.manus.space
 * 
 * Full structure extracted from rendered HTML + bundle analysis.
 * Three.js Earth globe runs in the background (handled by separate component).
 */

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import EarthGlobe from "@/components/EarthGlobe"; // Three.js animated globe

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Three.js animated Earth background */}
      <div className="absolute inset-0 z-0">
        <EarthGlobe />
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex min-h-screen flex-col pointer-events-none">
        {/* Header */}
        <header className="flex w-full items-center justify-between p-6 md:p-10 pointer-events-auto">
          <div className="flex flex-col">
            <h1 className="font-orbitron text-4xl font-bold tracking-wider text-white md:text-6xl">
              ITC
            </h1>
            <span className="font-rajdhani text-lg font-medium tracking-widest text-white/90 md:text-xl">
              Inception Technology Company
            </span>
          </div>

          {/* Mobile/Nav menu */}
          <Sheet>
            <SheetTrigger className="inline-flex items-center justify-center h-12 w-12 text-white hover:bg-white/10 hover:text-white rounded-md">
              <Menu className="h-8 w-8" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent>
              {/* Nav links go here */}
              <nav className="flex flex-col gap-6 mt-8">
                <a href="#" className="text-xl font-rajdhani tracking-wide">Home</a>
                <a href="#mission" className="text-xl font-rajdhani tracking-wide">Mission</a>
                <a href="#products" className="text-xl font-rajdhani tracking-wide">Products</a>
                <a href="#contact" className="text-xl font-rajdhani tracking-wide">Contact</a>
              </nav>
            </SheetContent>
          </Sheet>
        </header>

        {/* Hero */}
        <main className="flex flex-1 flex-col justify-center px-6 md:px-16 lg:px-24 pointer-events-auto">
          <div className="max-w-4xl space-y-6">
            <h2 className="font-orbitron text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg">
              Our Purpose is to{" "}
              <br />
              <span className="text-primary-foreground">Regenerate Earth's Biosphere</span>
            </h2>
            <p className="max-w-2xl font-rajdhani text-xl font-light tracking-wide text-white/90 md:text-3xl drop-shadow-md">
              Innovation through Economically and Ecologically advantaged Technology
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center text-sm text-white/40 md:p-10 pointer-events-auto">
          © 2026 Inception Technology Company. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
