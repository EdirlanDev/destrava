// src/components/Hero.jsx
import { FaHeadphones, FaPlay } from "react-icons/fa";
import "./Hero.scss";
import { IoIosArrowForward } from "react-icons/io";
const AVATARS = [
    "/avatars/a1.JPG",
   "/avatars/a2.JPG",
    "/avatars/a1.JPG",
   "/avatars/a2.JPG",
   "/avatars/a2.JPG",
];

export default function Hero({ onPrimaryClick }) {
    return (
        <section className="hero" id="inicio" aria-label="Seção principal">
            {/* Vídeo de fundo */}
            <img src="/gym.png" className="hero__bg" alt="" />

            {/* Gradiente/overlay */}
            <div className="hero__overlay" />

            <div className="hero__content container">
                {/* Título de escassez */}
                <div className="hero__scarcity">🔥 OFERTA LIMITADA</div>

                {/* Headline tripla (igual vibe do print) */}
                <h1 className="hero__title">
                    <span className="line--script">O desafio</span>
                    <span className="line--block">
                        Destrava Mente e Corpo
                    </span>
                    <span className="line--script">feita para mulheres reais</span>
                </h1>

                {/* Subheadline — sua copy */}
                <p className="hero__sub">
                    A Descoberta que Está Destravando o Corpo e a Mente de Mulheres que
                    Já Tentaram de Tudo e Não Conseguiram Emagrecer.
                </p>
                <p className="hero__sub hero__sub--muted">
                    Sem dietas restritivas, sem treinos exaustivos e sem culpa só um método que
                    entende o que realmente te trava.
                </p>

                {/* micro social proof + 18+ badge */}
                <div className="hero__micro">
                    <span>Brasil: top 1 de hoje</span>
                    <span className="ok">99% gostaram</span>
                    <span className="badge">18+</span>
                </div>

                {/* CTA principal estilo “pílula” com pulse */}
                <button className="cta cta--pill" onClick={onPrimaryClick}>
                    <FaHeadphones />
                    Comece agora a sua transformação
                </button>

                {/* Avatares (prova social visual) */}
                <div className="hero__avatars">
                    {AVATARS.map((src, i) => (
                        <img key={i} src={src} alt={`Aluna ${i + 1}`} />
                    ))}
                </div>

                {/* Benefícios rápidos (sua lista) */}
                <ul className="hero__bullets">
                    <li><IoIosArrowForward /> Voltar a vestir o que ama</li>
                    <li><IoIosArrowForward />Evitar efeito sanfona de vez</li>
                    <li><IoIosArrowForward />Parar de se culpar por falhar</li>
                    <li><IoIosArrowForward />Destravar o foco sem esforço</li>
                    <li><IoIosArrowForward />Sentir leveza já na primeira semana</li>
                </ul>
            </div>

            {/* Botão play flutuante opcional (se quiser chamar abertura/vsl) */}
            <button className="hero__floating-play" aria-label="Assistir apresentação">
                <FaPlay />
            </button>
        </section>
    );
}
