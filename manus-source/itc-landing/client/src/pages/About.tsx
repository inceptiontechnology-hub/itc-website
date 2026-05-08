import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";

const team = [
  {
    name: "Scott Ensminger",
    title: "Founder",
    image: "/images/team/scott_ensminger_dasco.jpeg",
    bio: "Scott has a BS in Biology with an emphasis in organic chemistry from Iowa State University. His role is to identify emerging technology and imagine how to apply it to solve real-world problems. His experience spans on-site wastewater, drinking water, stormwater, and extensive study of biological soil and water systems in agriculture during 20 years as a commercial farmer.",
  },
  {
    name: "Lillie Geiersbach",
    title: "Technical Lead",
    image: "/images/team/lillie_geiersbach_dasco.jpeg",
    bio: null,
  },
  {
    name: "Hunter Ensminger",
    title: "Operations Lead",
    image: "/images/team/hunter_ensminger_dasco.jpeg",
    bio: null,
  },
  {
    name: "Jeff Streck",
    title: "Sales & Marketing Lead",
    image: null,
    bio: null,
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Deep Space Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/images/starfield-background.jpg')" }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Header / Navigation */}
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
                  <Link href="/about" className="text-xl font-medium text-primary">About Us</Link>
                  <Link href="/products" className="text-xl font-medium hover:text-primary transition-colors">BioSpan Products</Link>
                  <Link href="/aims" className="text-xl font-medium hover:text-primary transition-colors">AIMS Technology</Link>
                  <Link href="/rbt" className="text-xl font-medium hover:text-primary transition-colors">Rapid Bacterial Test</Link>
                  <a href="/products#contact" className="text-xl font-medium hover:text-primary transition-colors">Contact</a>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        {/* Team Section */}
        <main className="flex flex-1 flex-col items-center px-6 py-12 md:px-16 lg:px-24">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-12 tracking-wide text-center">
            Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
            {team.map((member) => (
              <div
                key={member.name}
                className="relative group flex flex-col items-center text-center"
              >
                <div className="absolute -inset-1 bg-gradient-to-b from-blue-600/30 to-cyan-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-700"></div>
                <div className="relative flex flex-col items-center p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl w-full h-full">
                  {/* Photo */}
                  <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-white/20 mb-5 bg-white/5 flex items-center justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <span className="font-orbitron text-4xl text-white/30">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="font-orbitron text-lg font-bold text-white mb-1">
                    {member.name}
                  </h3>

                  {/* Title */}
                  <span className="font-rajdhani text-sm tracking-widest text-cyan-400 uppercase mb-3">
                    {member.title}
                  </span>

                  {/* Bio */}
                  {member.bio && (
                    <p className="font-rajdhani text-sm text-white/70 leading-relaxed">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center text-sm text-white/40 md:p-10">
          &copy; {new Date().getFullYear()} Inception Technology Company. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
