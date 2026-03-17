import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP = "https://wa.me/5511920592042";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

const team = [
  { name: "Dra. Érika Costa", role: "Clínica Geral", cro: "CRO-SP: 12.345", photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400" },
  { name: "Dr. João Motta", role: "Endodontia", cro: "CRO-SP: 23.456", photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" },
  { name: "Dr. Pedro Teixeira", role: "Prótese - Estética", cro: "CRO-SP: 34.567", photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400" },
  { name: "Dra. Eliza Almeida", role: "Periodontia", cro: "CRO-SP: 45.678", photo: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=400" },
];

export default function TeamSection() {
  return (
    <section id="equipe" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-muted-foreground">
              Especialistas prontos para cuidar da sua saúde bucal.
            </p>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            <Button variant="secondary">Ver Todos os Profissionais</Button>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((p, i) => (
            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}>
              <div className="aspect-[4/5] bg-muted rounded-2xl mb-6 overflow-hidden">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold">{p.name}</h4>
              <p className="text-muted-foreground text-sm mb-1">{p.role}</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-bold">{p.cro}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
