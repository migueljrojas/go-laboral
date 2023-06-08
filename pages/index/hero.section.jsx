import Hero from "../../components/hero";
import Slide1 from "../../public/assets/fondo-header-home.png";
import Slide2 from "../../public/assets/148635659_l_normal_none.jpg";
import Slide3 from "../../public/assets/198904724_l_normal_none.jpg";
import ArrowIcon from "../../components/arrow";

const slides = [
  Slide1,
  Slide2,
  Slide3
];

export default function HeroSection() {
  return (
    <section className="home__hero">
      <Hero slides={slides} />
      <div className="home__hero-content">
        <h1 className="home__hero-title">Cuidamos a los que mueven el mundo.</h1>
        <p className="home__hero-desc">La calidad prestacional de Grupo Oroño al servicio de lo más importante que tiene una empresa, su capital humano.</p>
        <a href="/institucional" className="home__hero-link"><ArrowIcon color="green" /> Conocenos</a>
      </div>
      <span className="home__hero-mouse" />
      <span className="home__hero-next-section" />
    </section>
  )
}