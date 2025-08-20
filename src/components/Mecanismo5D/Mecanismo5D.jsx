import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBrain,
  FaBalanceScale,
  FaCalendarCheck,
  FaAppleAlt,
  FaDumbbell,
} from "react-icons/fa";
import "./Mecanismo5D.scss";

const ITEMS = [
  {
    icon: <FaBrain />,
    title: "Dopamina",
    text:
      "Ativa a motivação natural com micro-recompensas e rotinas prazerosas. Sem sofrer para começar e recomeçar.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Disciplina emocional",
    text:
      "Treina autocontrole e clareza de escolhas para parar de se sabotar — mesmo nos dias caóticos.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Desafios diários",
    text:
      "Pequenas metas guiadas em 7/14/30 dias que criam constância e resultados visíveis já na primeira semana.",
  },
  {
    icon: <FaAppleAlt />,
    title: "Dieta realista",
    text:
      "Plano simples e acessível que cabe na sua rotina. Nada de restrição extrema — é reeducação leve.",
  },
  {
    icon: <FaDumbbell />,
    title: "Desempenho físico",
    text:
      "Treinos objetivos para casa ou academia, com progressão segura para corpo mais forte e leve.",
  },
];

export default function Mecanismo5D() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }, []);

  return (
    <section className="fiveD section" id="metodo">
      <div className="container">
        <span className="fiveD__kicker" data-aos="fade-up">Mecanismo</span>
        <h2 className="fiveD__title" data-aos="fade-up" data-aos-delay="50">
          Método 5D do Emagrecimento Consciente
        </h2>
        <p className="fiveD__subtitle" data-aos="fade-up" data-aos-delay="90">
          Um método exclusivo que atua em <strong>5 dimensões</strong>: Dopamina, Disciplina emocional,
          Desafios diários, Dieta realista e Desempenho físico. Esse ciclo destrava mente e corpo e
          sustenta uma transformação verdadeira e duradoura.
        </p>

        <div className="fiveD__grid">
          {ITEMS.map((it, i) => (
            <article className="card5d" key={i} data-aos="zoom-in" data-aos-delay={120 + i * 60}>
              <div className="card5d__icon">{it.icon}</div>
              <h3 className="card5d__title">{it.title}</h3>
              <p className="card5d__text">{it.text}</p>
            </article>
          ))}
        </div>

        <a href="#planos" className="cta cta--pill fiveD__cta" data-aos="fade-up" data-aos-delay="100">
          QUERO ACESSO AO MÉTODO
        </a>
      </div>
    </section>
  );
}
