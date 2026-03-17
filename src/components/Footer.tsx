import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/5511920592042";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-signature italic text-3xl tracking-tight">Andrade</span>
              <span className="text-[10px] tracking-[0.3em] uppercase -mt-1 font-medium opacity-60">
                Odontologia
              </span>
            </div>
            <p className="text-primary-foreground/60 max-w-sm leading-relaxed">
              Cuidando do seu sorriso com excelência e dedicação há mais de 15 anos. Sua saúde bucal é nossa prioridade.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-primary-foreground/60 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-primary-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Agendamento</h4>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <Button variant="footer-cta" className="w-full mb-4">
                <MessageCircle size={18} /> WhatsApp
              </Button>
            </a>
            <p className="text-[10px] text-primary-foreground/40 uppercase tracking-widest text-center">
              Resposta em até 15 min
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
          <p>© 2026 Andrade Odontologia. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <span>Privacidade</span>
            <span>Termos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
