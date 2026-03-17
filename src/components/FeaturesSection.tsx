import { motion } from "framer-motion";
import { ShieldCheck, Star, Stethoscope } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

const features = [
  {
    title: "Profissionais Experientes",
    desc: "Temos profissionais experientes, com excelente formação e que atuam há muitos anos no mercado.",
    icon: <ShieldCheck className="text-muted-foreground" />,
  },
  {
    title: "Atendimento Humanizado",
    desc: "Seja por telefone ou no consultório, cuidamos de você de um jeito único e comprometido.",
    icon: <Star className="text-muted-foreground" />,
  },
  {
    title: "Tratamentos Modernos",
    desc: "Possuímos os tratamentos mais modernos em ortodontia, implantes, estética e saúde bucal.",
    icon: <Stethoscope className="text-muted-foreground" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-muted">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            {...fadeIn}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
