import { useEffect, useRef, useState } from "react";
import "./ProvasSociais.scss";

const DEFAULT_ITEMS = [
  {
    name: "Fernanda T.",
    text:
      "Como disse, sempre tive muita vergonha do meu corpo e hoje tô me sentindo incrível. Não largo mais! Cada dia me sinto melhor comigo mesma.",
    images: ["/antesdepois/IMG_8689.JPG"],
  },
  {
    name: "Maria S.",
    text:
      "Voltei a usar uma roupa que amava em 3 semanas. Sem passar fome e sem culpa. É leve e possível.",
    images: ["/antesdepois/IMG_8690.JPG"],
  },
  {
    name: "Gabriella Martins.",
    text:
      "Entendi meus gatilhos e parei com a compulsão noturna. Estou muito mais disposta e confiante.",
    images: ["/antesdepois/IMG_8691.JPG"],
  },
  {
    name: "Jaqueline M.",
    text:
      "Os desafios diários me deram constância. Resultado real logo na primeira semana.",
    images: ["/antesdepois/IMG_8692.JPG"],
  },
];

export default function ProvasSociais({
  items = DEFAULT_ITEMS,
  intervalMs = 6000,
}) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);
  const wrapRef = useRef(null);

  const next = () => setIdx((i) => (i + 1) % items.length);

  useEffect(() => {
    const start = () => {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(next, intervalMs);
    };
    start();
    return () => clearInterval(timerRef.current);
  }, [intervalMs, items.length]);

  // pausa ao hover/focus (se não quiser, pode remover este useEffect)
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const stop = () => clearInterval(timerRef.current);
    const start = () => {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(next, intervalMs);
    };
    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);
    el.addEventListener("focusin", stop);
    el.addEventListener("focusout", start);
    return () => {
      el.removeEventListener("mouseenter", stop);
      el.removeEventListener("mouseleave", start);
      el.removeEventListener("focusin", stop);
      el.removeEventListener("focusout", start);
    };
  }, [intervalMs]);

  const active = items[idx];

  return (
    <section className="socials section" id="provas-sociais" aria-label="Provas Sociais">
      <div className="container socials__wrap" ref={wrapRef}>
        <article key={idx} className="socials__card fade-in" aria-live="polite">
          {/* IMAGENS */}
          <div className="socials__media">
            <div className={`imgBox ${active.images?.length > 1 ? "two" : ""}`}>
              {active.images?.map((src, i) => (
                <img key={i} src={src} alt={active.name} />
              ))}
            </div>
          </div>

          {/* TEXTO */}
          <div className="socials__text">
            <h3 className="socials__name">{active.name}</h3>
            <p className="socials__quote">{active.text}</p>
          </div>
        </article>

        {/* DOTS */}
        <ul className="dots" role="tablist" aria-label="Navegação de depoimentos">
          {items.map((_, i) => (
            <li key={i}>
              <button
                className={`dot ${i === idx ? "is-active" : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`Mostrar depoimento ${i + 1}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
