import { FaLock, FaShieldAlt, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <strong className="brand__name">Desafio</strong>
          <span className="brand__tag">Destrava mente & corpo</span>
          <p className="brand__claim">
            Método 5D do Emagrecimento Consciente feito para mulheres reais.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Links rápidos">
          <a href="#inicio">Início</a>
          <a href="#metodo">Método 5D</a>
          <a href="#bonus">Bônus</a>
          <a href="#oferta">Oferta</a>
          <a href="#duvidas">FAQ</a>
          <a href="#planos">Checkout</a>
        </nav>

        <div className="footer__trust">
          <div className="t"><FaLock /> Pagamento seguro</div>
          <div className="t"><FaShieldAlt /> Garantia 7 dias</div>
          <div className="t"><FaEnvelope /> suporte@seudominio.com</div>
          <div className="t"><FaInstagram /> @suaempresa</div>
        </div>
      </div>

      <div className="footer__foot">
        <div className="container">
          <small>© {new Date().getFullYear()} Destrava. Todos os direitos reservados.</small>
          <div className="links">
            <a href="/politica-privacidade" target="_blank" rel="noopener">Política de Privacidade</a>
            <a href="/termos-uso" target="_blank" rel="noopener">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
