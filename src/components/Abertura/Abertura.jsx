import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./Abertura.scss";

// Se você já inicializou o AOS no App.jsx, pode remover este useEffect
import AOS from "aos";
import "aos/dist/aos.css";

export default function Abertura() {
    useEffect(() => {
        AOS.init({ duration: 700, once: true, offset: 80 });
    }, []);

    return (
        <section className="opening section" id="abertura">
            <div className="container opening__grid">
                {/* Texto */}
                <div className="opening__text" data-aos="fade-right">
                    <span className="opening__kicker">Para quem já tentou de tudo</span>

                    <h2 className="opening__title">
                        Um caminho leve pra destravar mente e corpo de verdade.
                    </h2>

                    <p className="opening__p">
                        Você já se olhou no espelho e se perguntou onde foi parar aquela
                        versão sua que cabia nas próprias roupas sem esforço? É frustrante
                        sentir que já tentou de tudo dietas malucas, treinos cansativos,
                        promessas vazias e nada realmente muda. Às vezes, parece que o
                        problema tá mais na cabeça do que no corpo, né? E é justamente por
                        isso que existe um caminho que olha além do prato e da balança: um
                        método que destrava o que te prende por dentro e te faz, enfim,
                        avançar de verdade.
                    </p>

                    <div className="opening__diferencial">
                        <h3 className="opening__subtitle">Diferencial</h3>
                        <p>
                            Diferente das dietas restritivas ou dos treinos exaustivos que
                            focam só no corpo e ignoram o que realmente te trava, o{" "}
                            <strong>Método 5D</strong> atua nas cinco áreas que, juntas,
                            desbloqueiam sua mente e seu corpo. É como virar a chave certa:
                            você entende seus gatilhos, ajusta sua rotina com clareza e
                            finalmente para de se sabotar sem culpa, sem peso emocional e
                            sem precisar “sofrer para emagrecer”.
                        </p>
                    </div>

                    <ul className="opening__chips">
                        <li><FaCheckCircle /> Sem dietas restritivas</li>
                        <li><FaCheckCircle /> Sem treinos exaustivos</li>
                        <li><FaCheckCircle /> Sem culpa</li>
                    </ul>

                    <a className="cta cta--pill" href="#planos">
                        QUERO ESSA TRANSFORMAÇÃO
                    </a>
                </div>

                {/* Mídia / Placeholder */}
                <div className="opening__media" data-aos="fade-left">

                    <div className="media__frame">

                        <div className="media__placeholder">
                            <img src='/fundo.png' />
                        </div>
                        <div className="media__badge">Método 5D</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
