import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const WHATSAPP = "https://wa.me/5511920592042";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function HeroSection() {
  return (
    <section id="inicio" className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeIn}>
          <span className="inline-block py-1 px-3 rounded-full bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider mb-6">
            Saúde Dental de Excelência
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-balance">
            Seu sorriso é a nossa maior prioridade.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Temos uma equipe de profissionais qualificados, prontos para lhe dar
            o melhor tratamento dentário em um ambiente de alta tecnologia.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <Button variant="hero" size="lg">
                Agendar Consulta <ChevronRight size={18} />
              </Button>
            </a>
            <a href="#sobre">
              <Button variant="hero-secondary" size="lg">
                Conhecer Clínica
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          {...fadeIn}
          className="relative aspect-[4/5] bg-muted rounded-[2rem] overflow-hidden shadow-hero"
        >
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
            alt="Clínica Andrade Odontologia"
            className="object-cover w-full h-full transition-all duration-700"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
