import Main from "../../layouts/main";
import Hero from "./hero.section";
import Interstitial from "../../components/interstitial";
import "./styles.scss";
import clock from "../../public/assets/1584892.png";

function Page() {
  return (
    <Main className="home">
      <Hero />
      <Interstitial background="green">
        <p className="home__interstitial-text">Un <strong>nuevo concepto en medicina laboral</strong> que combina la calidad prestacional, el avance tecnológico y la responsabilidad de cuidar tus recursos más valiosos.</p>
      </Interstitial>
      <section className="home__resultados">
        <div className="home__resultados-content">
          <img src={clock} />
          <p>LOS RESULTADOS DE TUS EXÁMENES PREOCUPACIONALES <strong>EN 24 HORAS.</strong></p>
        </div>
      </section>
    </Main>
  )
}

export {
  Page,
}