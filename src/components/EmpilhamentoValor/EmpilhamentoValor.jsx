import { useMemo } from "react";
import { FaCheckCircle, FaTag, FaClock, FaLock, FaCreditCard } from "react-icons/fa";
import "./EmpilhamentoValor.scss";

const ITENS = [
  { title: "Destrava Mente e Corpo", price: 67 },
  { title: "Bônus 1: Cardápios Antiestresse com Baixas Calorias", price: 47 },
  { title: "Bônus 2: Método SOS TPM: Vontade Zero de Doce", price: 57 },
  { title: "Bônus 3: Desafio Roupas Que Voltam a Servir", price: 47 },
];

export default function EmpilhamentoValor({ vagasPercent = 82 }) {
  const total = useMemo(() => ITENS.reduce((s, i) => s + i.price, 0), []);
  const precoFinal = 67;
  const economia = total - precoFinal;

  return (
    <section className="stack section" id="oferta">
      <div className="container stack__grid">
        {/* Coluna esquerda: O que você recebe */}
        <div className="stack__left">
          <span className="stack__kicker">O que você recebe</span>
         

          <ul className="stack__list">
            {ITENS.map((it, idx) => (
              <li className="stack__item" key={idx}>
                <FaCheckCircle className="ok" />
                <div className="item__txt">
                  <strong>{it.title}</strong>
                  <span className="item__price">
                    <FaTag /> R$ {it.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="stack__total">
            <span>Preço Total</span>
            <strong>R$ {total.toFixed(2).replace(".", ",")}</strong>
          </div>
        </div>

        {/* Coluna direita: Oferta de hoje */}
        <aside className="stack__offer">
          <div className="offer__head">
            <span className="offer__badge">🔥 OFERTA LIMITADA</span>
            <h3 className="offer__title">Hoje por</h3>
            <div className="offer__price">
              <span className="old">R$ {total.toFixed(2).replace(".", ",")}</span>
              <span className="now">R$ {precoFinal.toFixed(2).replace(".", ",")}</span>
            </div>
            <p className="offer__save">
              Você economiza <strong>R$ {economia.toFixed(2).replace(".", ",")}</strong>
            </p>
          </div>

          <a href="#planos" className="cta cta--pill offer__cta">
            APROVEITAR ESTA OFERTA AGORA
          </a>

          <ul className="offer__trust">
            <li><FaClock /> Acesso imediato</li>
            <li><FaLock /> Garantia incondicional de 7 dias</li>
            <li><FaCreditCard /> Pagamento seguro</li>
          </ul>

          {/* Barra de vagas */}
          <div className="slots">
            <div className="slots__top">
              <span>⏰ Apenas hoje</span>
              <span>Vagas limitadas</span>
            </div>
            <div className="slots__bar">
              <div
                className="slots__fill"
                style={{ width: `${Math.min(Math.max(vagasPercent, 5), 100)}%` }}
                aria-label={`Progresso de vagas: ${vagasPercent}%`}
              />
            </div>
          </div>

          <small className="offer__foot">
            Oferta sujeita à disponibilidade diária. Após encerrar, o valor retorna ao preço integral.
          </small>
        </aside>
      </div>
    </section>
  );
}
