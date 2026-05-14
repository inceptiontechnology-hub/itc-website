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

        {/* Main Content */}
        <main className="flex flex-1 flex-col justify-center px-6 md:px-16 lg:px-24 pointer-events-auto">
          <div className="max-w-4xl space-y-6">

            
            <p className="max-w-2xl font-rajdhani text-xl font-light tracking-wide text-white/90 md:text-3xl drop-shadow-md">
              Innovation through Economically and Ecologically advantaged Technology
            </p>
          </div>
        </main>

        {/* Footer / Bottom Space */}
        <footer className="p-6 text-center text-sm text-white/40 md:p-10 pointer-events-auto">
          &copy; {new Date().getFullYear()} Inception Technology Company. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
