import Hero from "../../components/hero";
import Slide1 from "/assets/fondo-header-servicios.png";
import Slide2 from "/assets/148635659_l_normal_none.jpg";
import Slide3 from "/assets/198904724_l_normal_none.jpg";

const slides = [
  Slide1,
  Slide2,
  Slide3
];

export default function HeroSection() {
  return (
    <section className="servicios__hero">
      <Hero slides={slides} backdrop={false} />
      <div className="servicios__hero-content">
        <h1 className="servicios__hero-title ornament">Medicina laboral</h1>
        <h2 className="servicios__hero-subtitle">LA CALIDAD PRESTACIONAL DE GRUPO OROÑO AL SERVICIO DE LO MÁS IMPORTANTE QUE TIENE UNA EMPRESA, SU CAPITAL HUMANO.</h2>
        <p className="servicios__hero-text">
          Gracias a la calidad de atención, la tecnología y el profesionalismo de instituciones referentes como el Sanatorio Parque en GO Laboral realizá los exámenes preocupacionales para tus candidatos obteniendo la mayor precisión en un diagnóstico eficiente, que no solo reporta resultados óptimos sino además en el tiempo que necesitas para que la gestión de recursos humanos se destaque.
        </p>
      </div>
      <span className="servicios__hero-mouse" />
      <span className="servicios__hero-next-section" />
    </section>
  )
}