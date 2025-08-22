import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUtensils, FaHeartbeat, FaTshirt } from "react-icons/fa";
import "./BonusExclusivos.scss";

const BONUSES = [
  {
    id: 1,
    icon: <FaUtensils />,
    title: "Cardápios Antiestresse com Baixas Calorias",
    text:
      "Guia prático com 21 cardápios para reduzir a ansiedade e evitar ataques à geladeira à noite combinações simples e saborosas, todas com menos de 400 calorias.",
  },
  {
    id: 2,
    icon: <FaHeartbeat />,
    title: "Método SOS TPM: Vontade Zero de Doce",
    text:
      "Técnica rápida de reprogramação mental para driblar a compulsão por doces na TPM. Em 5 minutos, você mantém o foco sem culpa nem sabotagem.",
  },
  {
    id: 3,
    icon: <FaTshirt />,
    title: "Desafio Roupas Que Voltam a Servir",
    text:
      "Programa de 7 dias com vídeos motivacionais, metas rápidas e checklists para voltar a caber em pelo menos uma peça especial já na primeira semana.",
  },
];

export default function BonusExclusivos() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }, []);

  return (
    <section className="bonuses section" id="bonus">
      <div className="container">
        <span className="bonuses__kicker" data-aos="fade-up">Bônus Exclusivos</span>
        <h2 className="bonuses__title" data-aos="fade-up" data-aos-delay="60">
          Presentes para acelerar seus resultados
        </h2>

        <div className="bonuses__grid">
          {BONUSES.map((b, i) => (
            <article
              className="bonusCard"
              key={b.id}
              data-aos="zoom-in"
              data-aos-delay={120 + i * 80}
            >
              <span className="bonusCard__ribbon">Bônus {b.id}</span>

              <div className="bonusCard__icon">{b.icon}</div>
              <h3 className="bonusCard__title">{b.title}</h3>
              <p className="bonusCard__text">{b.text}</p>
            </article>
          ))}
        </div>

        {/* CTA opcional para manter o fluxo de conversão */}
        <a href="#planos" className="cta cta--pill bonuses__cta" data-aos="fade-up" data-aos-delay="100">
          QUERO GARANTIR AGORA
        </a>
      </div>
    </section>
  );
}
