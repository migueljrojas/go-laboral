import Hero from "../../components/hero";
import Slide1 from "/assets/sliders_web_go_staff_3.png";
import Slide2 from "/assets/148635659_l_normal_none.jpg";
import Slide3 from "/assets/198904724_l_normal_none.jpg";

const slides = [
  Slide1,
  Slide2,
  Slide3
];

export default function HeroSection() {
  return (
    <section className="institucional__hero">
      <Hero slides={slides} />
      <div className="institucional__hero-content">
        <h1 className="institucional__hero-title ornament">Quienes somos</h1>
      </div>
      <span className="institucional__hero-mouse" />
      <span className="institucional__hero-next-section" />
    </section>
  )
}