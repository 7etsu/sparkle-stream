import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logoBradesco from "@/assets/logo-bradesco.png";
import logoAmil from "@/assets/logo-amil.png";
import logoSulamerica from "@/assets/logo-sulamerica.png";
import logoUnimed from "@/assets/logo-unimed.png";
import logoPorto from "@/assets/logo-porto.png";
import logoHapvida from "@/assets/logo-hapvida.png";

const WHATSAPP = "https://wa.me/5511920592042";

const plans = [
  { name: "Bradesco Saúde", logo: logoBradesco },
  { name: "Amil", logo: logoAmil },
  { name: "SulAmérica", logo: logoSulamerica },
  { name: "Unimed", logo: logoUnimed },
  { name: "Porto Seguro", logo: logoPorto },
  { name: "Hapvida", logo: logoHapvida },
];

export default function InsuranceSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Planos de Saúde</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aceitamos os principais convênios e planos de saúde do mercado. Consulte-nos para verificar a cobertura do seu plano.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className="bg-card rounded-2xl p-8 flex flex-col items-center justify-center gap-4 shadow-card border border-border hover:shadow-lift transition-shadow"
            >
              <div className="w-full flex items-center justify-center">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="w-48 h-32 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-base font-semibold text-foreground">{p.name}</span>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm mb-4">Não encontrou seu plano?</p>
        <p className="text-muted-foreground text-sm mb-6">
          Entre em contato conosco pelo WhatsApp e verifique se aceitamos o seu convênio.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer">
          <Button>
            <MessageCircle size={16} /> Consultar Plano
          </Button>
        </a>
      </div>
    </section>
  );
}
