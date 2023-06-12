import Hero from "../../components/hero";
import Slide1 from "/assets/header-actividades_programadas.jpg";

const slides = [
  Slide1
];

export default function HeroSection() {
  return (
    <section className="registrar__hero">
      <Hero slides={slides} />
      <div className="registrar__hero-content">
        <h1 className="registrar__hero-title ornament">Alta de servicio para empresas.</h1>
      </div>
      <span className="registrar__hero-mouse" />
      <span className="registrar__hero-next-section" />
    </section>
  )
}