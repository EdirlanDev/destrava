import { useEffect } from "react";
import { FaAward, FaHeart, FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Historia.scss";

export default function Historia() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }, []);

  return (
    <section className="story section" id="historia">
      <div className="container story__grid">
        {/* CARD / FOTO */}
        <aside className="story__media" data-aos="fade-right">
          <div className="story__card">
            <img
              className="story__photo"
              src="/bg.jpg" /* troque pelo seu asset */
              alt="Geovana Bueno"
            />
            <div className="story__badges">
              <span className="b b--pink"><FaAward /> 15+ anos</span>
              <span className="b"><FaUsers /> milhares de alunas</span>
              <span className="b"><FaHeart /> método humanizado</span>
            </div>
          </div>

          <div className="story__id">
            <strong>Geovana Bueno</strong>
            <span>Personal Trainer & Criadora do Destrava</span>
          </div>
        </aside>

        {/* TEXTO */}
        <div className="story__text" data-aos="fade-left">
          <span className="story__kicker">Quem guia você</span>
          <h2 className="story__title">
            Uma história de <span>superação</span> e método.
          </h2>

          <p className="story__p">
            Prazer, sou <strong>Geovana Bueno</strong> mãe, mulher, personal
            trainer com mais de 15 anos de experiência e criadora do{" "}
            <strong>Destrava Mente e Corpo</strong>. Eu acompanhei, de perto,
            mulheres que tentavam emagrecer presas em dietas restritivas,
            treinos que não cabiam na rotina e muita culpa por “não manter o
            foco”.
          </p>

          <div className="story__highlight">
            <p>
              Eu entendi que o problema não era “falta de força de vontade”.
              Era o <strong>método errado</strong>. Foi assim que nasceu o
              Destrava: um programa que atua nos seus bloqueios mentais,
              devolve autoestima, ativa a dopamina natural do corpo e mostra
              que é possível se cuidar sem deixar a vida de lado mesmo com
              rotina corrida.
            </p>
          </div>

          <ul className="story__bullets">
            <li>Sem sofrimento: leve, possível e sustentável.</li>
            <li>Passo a passo claro para mente e corpo.</li>
            <li>Resultados visíveis e sentido de controle de volta.</li>
          </ul>

          <blockquote className="story__quote">
            “Minha missão é provar que você não está sozinha existe um caminho
            leve para se olhar no espelho com orgulho, energia e confiança.”
          </blockquote>

          <a href="#planos" className="cta cta--pill story__cta">
            CONHECER O MÉTODO
          </a>
        </div>
      </div>
    </section>
  );
}
