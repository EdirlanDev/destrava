import React, { useEffect, useMemo, useState } from "react";
import "./app.scss";
import {
  FaArrowRight, FaCheckCircle, FaShieldAlt, FaCreditCard,
  FaWhatsapp, FaStar, FaStarHalfAlt, FaRegStar
} from "react-icons/fa";

const AVATAR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdbmV3udBudqHkvYjHz7rs09P_Cyb3QHTMA&s";

const REVIEWS = [
  { name: "Patrícia S.", rating: 5, text: "Em 2 semanas fechei uma calça que não servia há meses. Método simples e direto!" },
  { name: "Luana R.", rating: 5, text: "Nunca mantive rotina. Agora treino 20min/dia sem sofrer. Só foi." },
  { name: "Camila A.", rating: 4.5, text: "Clareza mental + constância. Parei de me sabotar." },
  { name: "Renata M.", rating: 5, text: "Humor e energia subiram. Corpo respondeu rapidinho." },
  { name: "Marina P.", rating: 4.5, text: "Plano realista, comi melhor e destravei sem loucuras." },
  { name: "Joana F.", rating: 5, text: "Sem perfeição, só consistência. Funcionou de verdade." },
];

function Stars({ value, size = "sm" }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    <span className={`stars stars--${size}`} aria-label={`${value} de 5`}>
      {Array.from({ length: full }).map((_, i) => <FaStar key={`f${i}`} />)}
      {half ? <FaStarHalfAlt key="half" /> : null}
      {Array.from({ length: empty }).map((_, i) => <FaRegStar key={`e${i}`} />)}
    </span>
  );
}

export default function App() {
  // Reveal on view
  useEffect(() => {
    const io = new IntersectionObserver((entries) =>
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }), { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal],[data-stagger] > *").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Countdown
  const deadline = useMemo(() => {
    const d = new Date(); d.setHours(d.getHours() + 12); return d;
  }, []);
  const [t, setT] = useState({ h: "00", m: "00", s: "00" });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, deadline - new Date());
      const h = String(Math.floor(diff / 36e5)).padStart(2, "0");
      const m = String(Math.floor((diff % 36e5) / 6e4)).padStart(2, "0");
      const s = String(Math.floor((diff % 6e4) / 1e3)).padStart(2, "0");
      setT({ h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [deadline]);

  // Scroll progress + sticky
  const [progress, setProgress] = useState(0);
  const [showBar, setShowBar] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(Math.min(100, Math.max(0, (scrolled / height) * 100)));
      setShowBar(scrolled > 420);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => (e) => {
    e?.preventDefault?.();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page">
      <div className="progress" style={{ width: `${progress}%` }} />

      {/* HEADER */}
      <header className="header">
        <div className="container header__row">
          <a className="brand" href="#top" aria-label="Início">
            <span className="brand__dot" />
            <strong>Destrava</strong> <span className="muted">Mente e Corpo</span>
          </a>

          <button className="header__burger" aria-label="Abrir menu"
            onClick={() => document.body.classList.toggle("menu-open")}>
            <span /><span /><span />
          </button>

          <nav className="header__actions">
            <a className="link" href="#beneficios" onClick={goTo("beneficios")}>Benefícios</a>
            <a className="link" href="#avaliacoes" onClick={goTo("avaliacoes")}>Avaliações</a>
            <a className="link" href="#faq" onClick={goTo("faq")}>FAQ</a>
            <a className="btn btn--ghost" href="#checkout" onClick={goTo("checkout")}>Ver Oferta</a>
            <a className="btn btn--primary btn--pulse" href="#cta-top" onClick={goTo("cta-top")}>
              QUERO ESSA TRANSFORMAÇÃO <FaArrowRight />
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="section hero" id="cta-top" data-reveal>
        <div className="container hero__wrap">
          <div className="hero__copy">
            <span className="eyebrow">🔥 OFERTA LIMITADA</span>
            <h1 className="title">A Descoberta que Está Destravando o Corpo e a Mente</h1>
            <p className="subtitle">
              Sem dietas restritivas nem treinos exaustivos - só um método que entende o que te trava.
            </p>


            <ul className="bullets" data-stagger>
              {[
                "Voltar a vestir o que ama",
                "Evitar efeito sanfona de vez",
                "Parar de se culpar por falhar",
                "Destravar o foco sem esforço",
                "Sentir leveza já na primeira semana",
              ].map((txt, i) => (
                <li key={i} style={{ "--i": i }}><FaCheckCircle />{txt}</li>
              ))}
            </ul>

            <div className="hero__cta">
              <div className="cta">
                <a className="btn btn--primary btn--pulse" href="#checkout" onClick={goTo("checkout")}>
                  COMEÇAR AGORA <FaArrowRight />
                </a>
                <a className="btn btn--whats" href="https://wa.me/55" target="_blank" rel="noreferrer">
                  <FaWhatsapp /> Falar no WhatsApp
                </a>
              </div>
              <p className="trust"><FaCreditCard /> Cartão • Pix • Boleto &nbsp;·&nbsp; <FaShieldAlt /> Compra segura</p>
              <div className="urgency" role="status" aria-live="polite">
                <span className="urgency__bar" style={{ width: "42%" }} />
                <small>Termina em {t.h}:{t.m}:{t.s}</small>
              </div>
            </div>
          </div>

          <aside className="hero__media">
            <div className="vsl">
              <div className="vsl__ratio">
                <iframe

                  title="VSL Destrava"
                  src="https://www.youtube.com/embed/zbN3mChHGDI"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <button className="btn btn--ghost" onClick={goTo("checkout")}>
                Garantir agora <FaArrowRight />
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="section" data-reveal>
        <div className="container flow">
          <p className="lead">
          Eu vou te entregar agora um método leve e direto, sem fórmulas mágicas, mas que já foi testado por muita gente que só queria voltar a caber nas próprias roupas em poucas semanas, sem precisar passar fome, sem academia e sem ficar neurótica com balança.
          </p>
        </div>
      </section>
      {/* HISTÓRIA DO ESPECIALISTA (SEÇÃO 4) */}
      <section className="section expert" id="especialista" data-reveal>
        <div className="expert__bg" role="img" aria-label="Foto de Geovana Bueno" />
        <div className="container expert__content">
          <h2 className="h2">Quem está por trás</h2>
          <h3 className="h3">   Prazer, sou Geovana Bueno</h3>
          <p className="muted">
            mãe, mulher, personal trainer com mais de 15 anos de experiência, e criadora do método Destrava Mente e Corpo.  Por trás de tudo o que ensino aqui, existe uma história de superação, altos e baixos e uma vontade enorme de ajudar mulheres que, assim como eu em muitos momentos, já se sentiram presas no próprio corpo e na própria mente.
          </p>
          <p className="muted">
            Durante anos, acompanhei de perto mulheres que tentavam emagrecer, mas que viviam presas em dietas restritivas, treinos que não se encaixavam na rotina, culpa por não conseguir manter o foco e um sentimento constante de frustração. E eu sabia: o problema não era falta de força de vontade… era o método.  Foi aí que nasceu o Destrava.  Um programa criado para destravar bloqueios mentais, devolver autoestima, ativar a dopamina natural do corpo e mostrar que é possível, sim, se cuidar sem deixar a vida de lado, mesmo com filhos, rotina corrida e mil coisas acontecendo ao mesmo tempo.  Hoje, minha missão é te provar que você não está sozinha, que existe um caminho leve e sustentável para cuidar de você por dentro e por fora, e que você também pode se olhar no espelho com orgulho, energia e confiança.  Esse método já mudou a vida de milhares de mulheres, e agora pode transformar a sua também.          </p>
        </div>
      </section>


      {/* MECANISMO — MÉTODO 5D (SEÇÃO 5) */}
      <section className="section mechanism" id="metodo" data-reveal>
        <div className="container">
          <h2 className="h2 ta-center">Método 5D do Emagrecimento Consciente</h2>
          <p className="muted ta-center">
            Um método exclusivo que atua em 5 dimensões para destravar mente e corpo e criar transformação duradoura.
          </p>
          <div className="grid grid--icons" data-stagger>
            {["Dopamina", "Disciplina Emocional", "Desafios Diários", "Dieta Realista", "Desempenho Físico"].map((t, i) => (
              <div key={i} className="item" style={{ "--i": i }}>{t}</div>
            ))}
          </div>
          <div className="ta-center" style={{ marginTop: "18px" }}>
            <a className="btn btn--primary" href="#checkout" onClick={e => { e.preventDefault(); document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" }); }}>
              QUERO ACESSO AO MÉTODO <FaArrowRight />
            </a>
          </div>
        </div>
      </section>


      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="section rating" data-reveal>
        <div className="container rating__wrap">
          <div className="rating__summary card">
            <div className="rating__score">
              <div className="rating__num">4,9</div>
              <Stars value={4.9} size="lg" />
              <small className="muted">1.284 avaliações verificadas</small>
            </div>

            {/* Donut chart CSS  aparece no mobile e desktop */}
            <div className="rating__chart" aria-label="Satisfação média 4,9 de 5">
              <div className="donut" data-value="98">
                <div className="donut__hole">98%</div>
              </div>
            </div>

            <div className="rating__bars">
              {[5, 4, 3, 2, 1].map((n, i) => (
                <div key={n} className="bar">
                  <span className="label">{n}</span>
                  <span className="bar__track">
                    <span className="bar__fill" style={{ width: `${[78, 16, 4, 1, 1][i]}%` }} />
                  </span>
                  <span className="count">{[1050, 141, 51, 26, 16][i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid--reviews">
            {REVIEWS.map((r, i) => (
              <article key={i} className="review card" style={{ "--i": i }}>
                <div className="review__head">
                  <img className="avatar" src={AVATAR} alt={r.name} />
                  <div>
                    <strong className="name">{r.name}</strong>
                    <Stars value={r.rating} />
                  </div>
                </div>
                <p className="muted">{r.text}</p>
                <div className="review__photo"><div className="photo-skeleton" aria-hidden="true" /></div>
              </article>
            ))}
          </div>

          <div className="guarantee card">
            <strong><FaShieldAlt /> Garantia incondicional de 7 dias</strong>
            <p className="muted">Se não ficar completamente satisfeita, devolvemos 100% do seu dinheiro sem perguntas.</p>
            <a className="btn btn--primary btn--pulse" href="#checkout" onClick={goTo("checkout")}>
              QUERO GARANTIR AGORA <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="checkout" className="section offer" data-reveal>
        <div className="container">
          <div className="offer__box card">
            <div className="offer__left">
              <h2 className="h2">Tudo o que você recebe</h2>
              <ul className="list" data-stagger>
                {[
                  "Destrava Mente e Corpo - R$ 67,00",
                  "Bônus 1: Cardápios Antiestresse - R$ 47,00",
                  "Bônus 2: SOS TPM: Vontade Zero de Doce - R$ 57,00",
                  "Bônus 3: Desafio Roupas Que Voltam a Servir - R$ 47,00",
                ].map((t, i) => (
                  <li key={i} style={{ "--i": i }}><FaCheckCircle />{t}</li>
                ))}
              </ul>

              <div className="price-stack">
                <div className="stack__row"><span>Total:</span><span className="stack__total">R$ 218,00</span></div>
                <div className="stack__row"><span>Hoje:</span><span className="stack__final">R$ 67,00</span></div>
                <small className="muted">ou em até 12x no cartão</small>
              </div>

              <div className="cta">
                <a className="btn btn--primary btn--pulse" href="#pagar">
                  APROVEITAR ESTA OFERTA AGORA <FaArrowRight />
                </a>
                <a className="btn btn--whats" href="https://wa.me/55" target="_blank" rel="noreferrer">
                  <FaWhatsapp /> Falar no WhatsApp
                </a>
              </div>

              <p className="trust"><FaCreditCard /> Cartão • Pix • Boleto &nbsp;·&nbsp; <FaShieldAlt /> Compra segura</p>
              <p className="slots">⏰ Apenas hoje: Vagas limitadas</p>
            </div>

            <aside className="offer__right">
              <div className="guarantee">
                <strong><FaShieldAlt /> Garantia de 7 dias</strong>
                <p className="muted">Teste sem risco. Não amou? Reembolso total.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section faq" data-reveal>
        <div className="container">
          <h2 className="h2 ta-center">Perguntas Frequentes</h2>
          <div className="faq__list" data-stagger>
            {[
              ["Para quem é o programa?", "Para mulheres que querem emagrecer com leveza e constância  ideal para rotina corrida."],
              ["Preciso ir à academia?", "Você escolhe: há treinos para casa e para academia, com níveis progressivos."],
              ["Tem plano alimentar?", "Sim, prático e realista. Uma reeducação alimentar que respeita sua rotina."],
              ["Sou sedentária. Consigo?", "Foi pensado para começar/recomeçar, com acolhimento e progressão."],
              ["Como recebo o conteúdo?", "Acesso imediato à plataforma com módulos, vídeos e desafios. 100% online."],
              ["Quanto tempo dura?", "30 dias estruturados; o acesso à plataforma fica disponível por mais tempo."],
              ["Tenho pouco tempo.", "Perfeito: treinos objetivos, tarefas simples e foco em encaixar na agenda."],
              ["Quando vejo resultados?", "Leveza já na 1ª semana para muitas alunas; efeitos físicos em 4 semanas."],
              ["Terei suporte?", "Sim! Comunidade exclusiva + aulas ao vivo para dúvidas e motivação."],
              ["E se eu não gostar?", "Garantia incondicional de 7 dias: reembolso integral."],
            ].map(([q, a], i) => (
              <details key={i} className="faq__item" style={{ "--i": i }}>
                <summary>{q}</summary>
                <p className="muted">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY */}
      <div className={`sticky ${showBar ? "show" : ""}`} role="region" aria-label="Checkout rápido">
        <div className="container sticky__row">
          <div className="sticky__price">
            <strong>R$ 67,00</strong>
            <span>Termina em {t.h}:{t.m}:{t.s}</span>
          </div>
          <a className="btn btn--primary btn--pulse" href="#pagar">
            FAZER PARTE AGORA SEM RISCOS <FaArrowRight />
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__cols">
          <div>
            <strong>Destrava</strong>
            <p className="muted">Mente e Corpo</p>
          </div>
          <div>
            <p className="muted">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
          <div>
            <a className="link" href="#faq" onClick={goTo("faq")}>FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
