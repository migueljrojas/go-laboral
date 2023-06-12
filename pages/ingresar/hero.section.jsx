import Hero from "../../components/hero";
import Slide1 from "/assets/sliders_web_go_centros_medicos.png";

const slides = [
  Slide1
];

export default function HeroSection() {
  return (
    <section className="ingresar__hero">
      <Hero slides={slides} />
      <div className="ingresar__content">
        <h1 className="ingresar__title ornament ornament--white">Iniciar sesión</h1>
        <p className="ingresar__subtitle">Ingresa con tu email y contraseña</p>
        <div className="ingresar__form">
          <div>

          </div>
          <div className="ingresar__registro">
            <p className="ingresar__registro-text">
              ¿Es tu primer ingreso en GO Laboral?
              <strong>Registrá a tu empresa ahora.</strong>
            </p>
            <a className="ingresar__cta" href="/registrar-empresa">Registrar empresa</a>
          </div>
        </div>
      </div>
      <span className="ingresar__hero-mouse" />
      <span className="ingresar__hero-next-section" />
    </section>
  )
}