import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=500" className="object-cover h-full w-full" alt="Equipamento" loading="lazy" />
            </div>
            <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=500" className="object-cover h-full w-full" alt="Consultório" loading="lazy" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=500" className="object-cover h-full w-full" alt="Recepção" loading="lazy" />
            </div>
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=500" className="object-cover h-full w-full" alt="Atendimento" loading="lazy" />
            </div>
          </div>
        </div>

        <motion.div {...fadeIn} className="order-1 lg:order-2">
          <h2 className="text-4xl font-bold mb-8">Conheça a Clínica</h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>Nossa clínica oferece um ambiente acolhedor e tecnologia de ponta para garantir o melhor atendimento odontológico. Com mais de 15 anos de experiência, nossa equipe é especializada em diversos tratamentos.</p>
            <p>Utilizamos equipamentos modernos e técnicas avançadas para proporcionar tratamentos eficazes e confortáveis. Nosso compromisso é com a sua saúde bucal e bem-estar.</p>
            <p>Oferecemos um atendimento personalizado, respeitando as necessidades individuais de cada paciente. Aqui, seu sorriso é nossa prioridade.</p>
          </div>
          <div className="mt-10 flex gap-12 border-t border-foreground/5 pt-10">
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">Anos de Exp.</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5k+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">Pacientes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
