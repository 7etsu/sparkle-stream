import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "https://wa.me/5511920592042";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

const specialties = [
  { title: "Endodontia", desc: "Tratamento de canal e cuidados com a polpa dentária. Utilizamos técnicas modernas para preservar seus dentes naturais." },
  { title: "Periodontia", desc: "Tratamento de gengivas e estruturas de suporte dos dentes. Prevenção e tratamento de doenças periodontais." },
  { title: "Implantodontia", desc: "Implantes dentários de última geração para substituição de dentes perdidos com resultados naturais e duradouros." },
  { title: "Ortodontia", desc: "Correção de posicionamento dentário com aparelhos convencionais e estéticos para um sorriso perfeito." },
  { title: "Prótese", desc: "Próteses fixas e removíveis de alta qualidade para restaurar função e estética do seu sorriso." },
  { title: "Dentística", desc: "Restaurações estéticas, clareamento dental e procedimentos para melhorar a aparência do seu sorriso." },
];

export default function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-24 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Especialidades</h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            Tecnologia de ponta e profissionais especializados para cada necessidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((s, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="group p-8 rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/5 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-6 group-hover:bg-primary-foreground group-hover:text-primary transition-all">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-primary-foreground/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-primary-foreground/60 mb-6">A Andrade Odontologia é uma clínica odontológica completa.</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            <Button variant="footer-cta" size="lg">Agende uma Avaliação</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
