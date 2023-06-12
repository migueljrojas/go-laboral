import Hero from "../../components/hero";
import Slide1 from "/assets/header-contacto.jpg";

const slides = [
  Slide1
];

export default function HeroSection() {
  return (
    <section className="contacto__hero">
      <Hero slides={slides} />
      <div className="contacto__hero-content">
        <h1 className="contacto__hero-title ornament">Contactanos</h1>
      </div>
      <span className="contacto__hero-mouse" />
      <span className="contacto__hero-next-section" />
    </section>
  )
}