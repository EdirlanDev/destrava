import { FaLock, FaCreditCard, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import "./Planos.scss";

export default function Planos({
  checkoutUrl = "https://checkout.seu-dominio.com/destrava?plan=67",
}) {
  return (
    <section className="plans section" id="planos" aria-label="Planos e Checkout">
      <div className="container plans__wrap">
        <header className="plans__head">
          <span className="plans__kicker">Pronta para começar?</span>
          <h2 className="plans__title">Finalize sua inscrição agora</h2>
          <p className="plans__subtitle">
            Acesso imediato à plataforma + bônus inclusos. Garantia incondicional de 7 dias.
          </p>
        </header>

        <div className="pricing">
          <div className="pricing__card">
            <span className="pricing__badge">🔥 OFERTA LIMITADA</span>

            <h3 className="pricing__name">Destrava Mente e Corpo</h3>

            <div className="pricing__price">
              <span className="old">R$ 218,00</span>
              <span className="now">R$ 67,00</span>
            </div>

            <ul className="pricing__includes">
              <li><FaCheckCircle /> Método completo por 30 dias</li>
              <li><FaCheckCircle /> Bônus 1: Cardápios antiestresse</li>
              <li><FaCheckCircle /> Bônus 2: SOS TPM (antidoce)</li>
              <li><FaCheckCircle /> Bônus 3: 7 dias Roupas que voltam a servir</li>
              <li><FaCheckCircle /> Comunidade + suporte</li>
              <li><FaCheckCircle /> Acesso imediato</li>
            </ul>

            <a
              className="cta cta--pill pricing__cta"
              href={checkoutUrl}
              target="_blank"
              rel="noopener"
            >
              FINALIZAR INSCRIÇÃO
            </a>

            <ul className="pricing__trust">
              <li><FaLock /> Pagamento seguro</li>
              <li><FaShieldAlt /> 7 dias de garantia</li>
              <li><FaCreditCard /> Cartão / Pix / Boleto</li>
            </ul>

            <small className="pricing__foot">
              Após encerrar a oferta, o valor retorna ao preço integral.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
