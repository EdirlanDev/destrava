import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShieldAlt, FaQuestionCircle, FaCheckCircle } from "react-icons/fa";
import "./FAQ.scss";

const FAQS = [
  {
    q: "Para quem é o programa Destrava Mente e Corpo?",
    a: "Para mulheres que querem emagrecer, melhorar o corpo e a autoestima, mas sentem que sozinhas não conseguem manter o foco. Ideal para rotina corrida, para quem já tentou de tudo e quer um método leve, motivador e eficaz."
  },
  {
    q: "Preciso ir à academia ou posso treinar em casa?",
    a: "Você escolhe! Há treinos para casa e para academia, com vídeos explicativos e planos adaptados à sua realidade."
  },
  {
    q: "Tem plano alimentar?",
    a: "Sim. Você recebe um plano prático com sugestões saudáveis e acessíveis. Nada de dieta restritiva: é reeducação alimentar que respeita sua rotina e preferências."
  },
  {
    q: "Eu sou sedentária, consigo acompanhar?",
    a: "Sim! O método foi pensado para quem está começando ou recomeçando. Os treinos têm níveis progressivos e você é guiada do início ao fim, com acolhimento."
  },
  {
    q: "Como recebo o conteúdo?",
    a: "Após a confirmação da inscrição, o acesso é imediato à plataforma online com todos os módulos, desafios, vídeos e planos. 100% digital no seu ritmo, de onde quiser."
  },
  {
    q: "Quanto tempo dura o programa?",
    a: "O Destrava Mente e Corpo dura 30 dias, com treinos, tarefas diárias e desafios. Mas o acesso à plataforma fica disponível por muito mais tempo."
  },
  {
    q: "Tenho filhos e rotina corrida. Vou conseguir fazer?",
    a: "Sim! O programa foi criado por uma mãe, para mulheres da vida real. Treinos objetivos, tarefas simples e foco em caber na sua agenda sem culpa."
  },
  {
    q: "Em quanto tempo verei resultados?",
    a: "Muitas alunas relatam primeiros efeitos na primeira semana (mais disposição, humor e foco). Resultados físicos aparecem com consistência ao longo das 4 semanas."
  },
  {
    q: "E se eu tiver dúvidas durante o programa?",
    a: "Você não estará sozinha. Além da comunidade exclusiva para trocar experiências e tirar dúvidas, há aulas ao vivo com a Geovana para orientação e motivação."
  },
  {
    q: "E se eu não gostar? Posso pedir reembolso?",
    a: "Sim. Você tem 7 dias de garantia incondicional. Se não se adaptar, basta enviar um e-mail e o reembolso é integral."
  }
];

export default function FAQ() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }, []);

  return (
    <section className="faq section" id="duvidas">
      <div className="container">
        <div className="faq__head" data-aos="fade-up">
          <span className="faq__kicker"><FaQuestionCircle /> Perguntas frequentes</span>
          <h2 className="faq__title">Tire suas dúvidas antes de começar</h2>
          <p className="faq__subtitle">
            Tudo o que você precisa saber para entrar com segurança e dar o primeiro passo hoje.
          </p>
        </div>

        <div className="faq__grid">
          {FAQS.map((item, i) => (
            <details className="faq__item" key={i} data-aos="fade-up" data-aos-delay={80 + i * 20}>
              <summary className="faq__summary">
                <span>{item.q}</span>
                <svg className="faq__chev" width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </summary>
              <div className="faq__answer">{item.a}</div>
            </details>
          ))}
        </div>

        {/* Bloco de garantia + CTA final */}
        <aside className="faq__guarantee" data-aos="zoom-in">
          <div className="g__icon"><FaShieldAlt /></div>
          <div className="g__text">
            <h3>Garantia incondicional de 7 dias</h3>
            <p>Teste sem risco. Se não amar, devolvemos <strong>100% do seu dinheiro</strong>, sem perguntas.</p>
            <ul className="g__bullets">
              <li><FaCheckCircle /> Acesso imediato</li>
              <li><FaCheckCircle /> Cancelamento fácil</li>
              <li><FaCheckCircle /> Suporte e comunidade</li>
            </ul>
          </div>
          <a href="#planos" className="cta cta--pill g__cta">
            FAZER PARTE AGORA SEM RISCOS
          </a>
          <small className="g__foot">⏰ Oferta limitada. Vagas sujeitas à disponibilidade diária.</small>
        </aside>
      </div>
    </section>
  );
}
