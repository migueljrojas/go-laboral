import Main from "../../layouts/main";
import Hero from "./hero.section";
import Features from "./features.section";
import Directory from "./directory.section";
import Register from "./register.section";
import Interstitial from "../../components/interstitial";
import "./styles.scss";
import clock from "/assets/1584892.png";

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
      <Features />
      <section className="home__map">
        <div className="home__map-text">
          <h2 className="home__map-title ornament">INAUGURAMOS UN NUEVO CENTRO DE MEDICINA LABORAL QUE SE SUMA A NUESTRA AMPLIA RED DE COBERTURA.</h2>
          <p className="home__map-desc">Más de 30 centros de atención distribuidos estratégicamente para estar siempre cerca.</p>
        </div>
      </section>
      <Directory />
      <section className="home__video">
        <iframe type="text/html" src="https://www.youtube.com/embed/kso2CTpk3Z8?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0" />
      </section>
      <Register />
      <Interstitial background="picture">
        <h2 className="home__interstitial-title">Sentí la evolución de cubrir a los tuyos con el grupo de prestadores más importante de la región.</h2>
        <p className="home__interstitial-desc">Accesibilidad, rapidez y calidad para una respuesta inmediata, una atención responsable, un tratamiento personalizado y una rehabilitación eficiente.</p>
      </Interstitial>
    </Main>
  )
}

export {
  Page,
}