import { useEffect } from "react";
import { FaShieldAlt, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProvaGarantia.scss";

const REVIEWS = [
  {
    name: "Patrícia S.",
    avatar: "/avatars/a2.JPG",
    rating: 5,
    text:
      "Em 3 semanas voltei a usar um jeans que estava encostado há 2 anos. Sem passar fome e sem me culpar!",
  },
  {
    name: "Juliana M.",
   avatar: "/avatars/a2.JPG",
    rating: 5,
    text:
      "O método me fez entender meus gatilhos. Parei com a compulsão noturna e me sinto mais leve.",
  },
  {
    name: "Aline R.",
   avatar: "/avatars/a2.JPG",
    rating: 4.5,
    text:
      "A proposta é simples e possível. Segui os desafios e já senti resultado na 1ª semana.",
  },
];

function Stars({ value = 5 }) {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5;
  return (
    <div className="stars" aria-label={`Avaliação ${value} de 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <FaStar key={`f${i}`} />
      ))}
      {half && <FaStar className="half" />}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
        <FaStar key={`e${i}`} className="empty" />
      ))}
    </div>
  );
}

export default function ProvaGarantia() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }, []);

  return (
    <section className="proof section" id="provas">
      <div className="container proof__grid">
        {/* PROVA SOCIAL */}
        <div className="proof__left" data-aos="fade-right">
          <h2 className="proof__title">Resultados que dão confiança</h2>
          <p className="proof__subtitle">
            “Eu vou te entregar agora um método leve e direto, sem fórmulas
            mágicas, mas testado por mulheres que queriam voltar a caber nas
            próprias roupas em poucas semanas, sem passar fome, sem academia e
            sem neurótica com balança.”
          </p>

          <div className="reviews">
            {REVIEWS.map((r, idx) => (
              <article key={idx} className="review">
                <header className="review__head">
                  <img src={r.avatar} alt={`Avatar de ${r.name}`} />
                  <div>
                    <strong>{r.name}</strong>
                    <Stars value={r.rating} />
                  </div>
                </header>
                <p className="review__text">“{r.text}”</p>
              </article>
            ))}
          </div>

          <div className="proof__metric">
            <span className="ok">99% gostaram</span> · Brasil: top 1 de hoje
          </div>
        </div>

        {/* GARANTIA + CTA */}
        <aside className="guarantee" data-aos="fade-left">
          <div className="guarantee__icon">
            <FaShieldAlt />
          </div>
          <h3 className="guarantee__title">Garantia incondicional de 7 dias</h3>
          <p className="guarantee__text">
            Se não ficar completamente satisfeita, devolvemos{" "}
            <strong>100% do seu dinheiro</strong> sem perguntas. Acesso
            imediato, risco zero.
          </p>

          <a href="#planos" className="cta cta--pill">
            QUERO GARANTIR AGORA
          </a>

          <ul className="guarantee__bullets">
            <li>Acesso 100% online e imediato</li>
            <li>Cancelamento fácil durante a garantia</li>
            <li>Suporte e comunidade de alunas</li>
          </ul>

          <small className="guarantee__foot">
            ⏰ Oferta limitada. Vagas sujeitas à disponibilidade diária.
          </small>
        </aside>
      </div>
    </section>
  );
}
