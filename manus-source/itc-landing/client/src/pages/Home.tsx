import { useState, Suspense } from "react";
import { Menu } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Canvas } from "@react-three/fiber";
import { Earth } from "@/components/Earth";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col pointer-events-none">
        
        {/* Header / Navigation */}
        <header className="flex w-full items-center justify-between p-6 md:p-10 pointer-events-auto">
          <div className="flex flex-col">
            <h1 className="font-orbitron text-4xl font-bold tracking-wider text-white md:text-6xl">
              ITC
            </h1>
            <span className="font-rajdhani text-lg font-medium tracking-widest text-white/90 md:text-xl">
              Inception Technology Company
            </span>
            <p className="mt-4 max-w-sm font-rajdhani text-sm italic text-white/80 leading-relaxed md:text-base">
              There is a kind of person who sees what this century will demand. They do not think the work is too hard. They do not think the odds are too long. They do not think someone else will get to it in time.<br /><br />
              ITC is the company built for them. And by them.
            </p>
          </div>

          {/* 3-Bar Navigation Panel */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12 text-white hover:bg-white/10 hover:text-white">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l-white/20 bg-black/90 text-white backdrop-blur-xl">
              <div className="flex flex-col space-y-8 pt-10">
                <div className="flex items-center justify-between">
                  <span className="font-orbitron text-2xl font-bold">Menu</span>
                </div>
                <nav className="flex flex-col space-y-6">
                  <Link href="/" className="text-xl font-medium hover:text-primary transition-colors">Home</Link>
                  <Link href="/about" className="text-xl font-medium hover:text-primary transition-colors">About Us</Link>
                  <Link href="/products" className="text-xl font-medium hover:text-primary transition-colors">BioSpan Products</Link>
                  <Link href="/aims" className="text-xl font-medium hover:text-primary transition-colors">AIMS Technology</Link>
                  <Link href="/rbt" className="text-xl font-medium hover:text-primary transition-colors">Rapid Bacterial Test</Link>
                  <a href="/products#contact" className="text-xl font-medium hover:text-primary transition-colors">Contact</a>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        {/* Main Content — empty center */}
        <main className="flex flex-1 pointer-events-auto" />

        {/* Footer */}
        <footer className="flex items-end justify-between p-6 md:p-10 pointer-events-auto">
          <span className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Inception Technology Company. All rights reserved.
          </span>
          <p className="max-w-xs font-rajdhani text-sm font-light tracking-wide text-white/70 text-right md:text-base">
            Innovation through Economically and Ecologically advantaged Technology
          </p>
        </footer>
      </div>
    </div>
  );
}
