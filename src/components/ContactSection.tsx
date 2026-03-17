import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "https://wa.me/5511920592042";
const PHONE = "tel:+5511920592042";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

const contactCards = [
  {
    icon: Phone,
    title: "Telefone",
    info: "(11) 92059-2042",
    action: { label: "Ligar agora", href: PHONE },
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    info: "(11) 92059-2042",
    action: { label: "Clique para conversar", href: WHATSAPP, external: true },
  },
  {
    icon: Mail,
    title: "Email",
    info: "contato@andradeodontologia.com.br",
  },
  {
    icon: MapPin,
    title: "Endereço",
    info: "Rua das Flores, 123 - Centro, São Paulo",
    action: { label: "Ver no Google Maps", href: "https://maps.google.com", external: true },
  },
  {
    icon: Clock,
    title: "Horário",
    info: "Seg-Sex: 08:00-18:00 · Sáb: 08:00-12:00",
  },
  {
    icon: AlertCircle,
    title: "Emergências 24h",
    info: "Para urgências, ligue agora",
    action: { label: "(11) 92059-2042", href: PHONE },
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.name}. ${form.message}`;
    window.open(`https://wa.me/5511920592042?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atendê-lo. Entre em contato e agende sua consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form inside card */}
          <motion.div {...fadeIn} className="bg-card rounded-2xl p-8 shadow-card border border-border flex flex-col">
            <h3 className="text-xl font-bold mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-5 flex flex-col flex-1">
              <input
                type="text"
                placeholder="Seu nome completo"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-5 py-3 rounded-xl bg-muted border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
              <input
                type="email"
                placeholder="Seu email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-5 py-3 rounded-xl bg-muted border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
              <input
                type="tel"
                placeholder="Seu telefone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-5 py-3 rounded-xl bg-muted border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
              <textarea
                placeholder="Sua mensagem..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3 rounded-xl bg-muted border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
              />
              <div className="flex-1" />
              <Button type="submit" size="lg" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          {/* Info Cards */}
          <motion.div {...fadeIn} className="grid sm:grid-cols-2 gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-lift transition-shadow flex flex-col gap-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center">
                    <Icon size={20} className="text-foreground" />
                  </div>
                  <h4 className="font-bold text-sm">{card.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.info}</p>
                  {card.action && (
                    <a
                      href={card.action.href}
                      target={card.action.external ? "_blank" : undefined}
                      rel={card.action.external ? "noreferrer" : undefined}
                      className="text-sm font-bold underline underline-offset-4 mt-auto"
                    >
                      {card.action.label}
                    </a>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
