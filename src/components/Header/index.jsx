// src/components/Header.jsx
import { FaBolt, FaQuestionCircle } from "react-icons/fa";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <a className="header__brand" href="#">
          <span className="brand__mark">Desafio</span>
          <span className="brand__suffix">Destrava mente & corpo</span>
        </a>

        <nav className="header__nav">
          <a className="nav__link" href="#inicio">Início</a>
          <a className="nav__link nav__cta" href="#planos">
            <FaBolt /> Destrave
          </a>
          <a className="nav__link" href="#duvidas">
            <FaQuestionCircle /> Dúvidas
          </a>
        </nav>
      </div>
    </header>
  );
}
