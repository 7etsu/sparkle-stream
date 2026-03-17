import { motion } from "framer-motion";
import { MapPin, Car, Calendar } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

const infoCards = [
  { icon: MapPin, title: "Endereço", lines: ["Av. Paulista, 807 - Sé", "São Paulo - SP, 01311-100"] },
  { icon: Car, title: "Estacionamento", lines: ["Disponível", "Gratuito para pacientes"] },
  { icon: Calendar, title: "Agendamento", lines: ["Online ou por telefone", "(11) 92059-2042"] },
];

export default function MapSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-muted">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nossa Localização</h2>
          <p className="text-muted-foreground">Encontre-nos facilmente no centro de São Paulo. Venha nos visitar!</p>
        </div>

        <div className="bg-background rounded-3xl overflow-hidden min-h-[400px] shadow-card mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976!2d-46.6562!3d-23.5648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20807%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001311-100!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            className="w-full h-full border-0 min-h-[400px]"
            allowFullScreen
            loading="lazy"
            title="Localização Andrade Odontologia"
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {infoCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border flex flex-col items-center text-center gap-3"
              >
                <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center">
                  <Icon size={20} className="text-foreground" />
                </div>
                <h4 className="font-bold text-sm">{card.title}</h4>
                {card.lines.map((l, j) => (
                  <p key={j} className="text-muted-foreground text-sm">{l}</p>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
