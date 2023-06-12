import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Logo from "/assets/logo.svg";
import Map from "/assets/map.jpg";

export default function Form() {
  return (
    <section className="contacto__form-section">
      <div className="contacto__container">
        <div className="contacto__form">
          <h2 className="contacto__title ornament ornament--blue">
            PONETE EN CONTACTO PARA CONSULTAS Y CONTRATACIÓN DE SERVICIOS.
          </h2>
        </div>
        <div className="contacto__info">
          <h3 className="contacto__logo">
            <img src={Logo} />
          </h3>
          <ul className="contacto__info-list">
            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Rioja 2212 - Rosario , Argentina</li>
            <li><FontAwesomeIcon icon={faPhone} /> 0341- 000 000</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> info@meinventeestecorreo.com.ar</li>
          </ul>
          <ul className="contacto__social">
            <li>
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
          <div className="contacto__map">
            <a href="https://goo.gl/maps/J26sn3GzsGYUsQKQ6" target="_blank" rel="noreferrer">
              <img src={Map} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}