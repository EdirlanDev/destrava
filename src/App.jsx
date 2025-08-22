
import "./styles/tokens.css"; 
import "./styles/app.scss";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Abertura from "./components/Abertura/Abertura";
import ProvaGarantia from "./components/ProvaGarantia/ProvaGarantia";
import Historia from "./components/Historia/Historia";
import Mecanismo5D from "./components/Mecanismo5D/Mecanismo5D";
import BonusExclusivos from "./components/BonusExclusivos/BonusExclusivos";
import EmpilhamentoValor from "./components/EmpilhamentoValor/EmpilhamentoValor";

import FAQ from "./components/FAQ/FAQ";
import Planos from "./components/Planos/Planos";
import Footer from "./components/Footer/Footer";
import ProvasSociais from "./components/Provasocial/ProvasSociais";
export default function App() {
  const goToCheckout = () => {
    // coloque aqui o link final (WhatsApp/Checkout)
    window.location.href = "#checkout";
  };

  return (
    <>
      <Header />
      <main>
        <Hero onPrimaryClick={goToCheckout} />
        <Abertura />
        <ProvaGarantia />
        <Historia/>
        <Mecanismo5D/>
      <ProvasSociais intervalMs={3000} /> 
        <BonusExclusivos/>
        <EmpilhamentoValor vagasPercent={82} />
        <FAQ/>
        <Planos/>
        <Footer/>
      </main>
    </>
  );
}
