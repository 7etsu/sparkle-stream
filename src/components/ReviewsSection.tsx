import { Star } from "lucide-react";

const reviews = [
  { name: "Maria Silva", text: "Excelente atendimento! A equipe é muito atenciosa e profissional. Fiz um implante dentário e o resultado superou minhas expectativas. Recomendo muito!", time: "Há 2 semanas" },
  { name: "João Santos", text: "Clínica moderna e muito bem equipada. O Dr. Pedro é extremamente competente e cuidadoso. Meu tratamento ortodôntico está indo perfeitamente!", time: "Há 1 mês" },
  { name: "Ana Costa", text: "Melhor clínica odontológica da região! Ambiente acolhedor, profissionais qualificados e preços justos. Minha família toda se trata aqui.", time: "Há 3 semanas" },
  { name: "Carlos Oliveira", text: "Fiz um clareamento dental e adorei o resultado! A Dra. Eliza é muito cuidadosa e explica tudo detalhadamente. Voltarei com certeza!", time: "Há 1 semana" },
  { name: "Juliana Mendes", text: "Ótima experiência! Atendimento pontual e eficiente. O tratamento de canal foi muito menos doloroso do que eu imaginava. Equipe nota 10!", time: "Há 2 meses" },
  { name: "Roberto Alves", text: "Profissionais extremamente competentes! Fiz uma cirurgia de extração e me senti muito seguro durante todo o procedimento. Recomendo de olhos fechados!", time: "Há 3 dias" },
];

export default function ReviewsSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Avaliações dos Nossos Pacientes</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="text-5xl font-bold">4.8</div>
            <div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">{reviews.length} avaliações</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-background rounded-2xl p-8 shadow-card">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    {r.name[0]}
                  </div>
                  <span className="font-bold text-sm">{r.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{r.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
