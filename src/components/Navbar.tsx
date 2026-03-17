import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const WHATSAPP = "https://wa.me/5511920592042";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-foreground/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col">
          <span className="font-signature italic text-2xl font-semibold tracking-tight text-foreground">
            Andrade
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase -mt-1 font-medium text-muted-foreground">
            Odontologia
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden sm:block">
            <Button size="sm">Agendar Agora</Button>
          </a>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-foreground/5 px-6 pb-6 pt-4 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            <Button className="w-full mt-2">Agendar Agora</Button>
          </a>
        </div>
      )}
    </nav>
  );
}
