import "./styles.scss";
import LogoWhite from "/assets/logo-white.svg";
import LogoGo from "/assets/logo-go.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__container">
          <div className="footer__info">
            <h3 className="footer__logo ornament">
              <img src={LogoWhite} />
            </h3>
            <ul className="footer__list">
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Rioja 2212 - Rosario , Argentina</li>
              <li><FontAwesomeIcon icon={faPhone} /> 0341- 000 000</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> info@meinventeestecorreo.com.ar</li>
            </ul>
          </div>
          <div className="footer__social">
            <h3 className="footer__title ornament">Redes</h3>
            <ul className="footer__list">
              <li>
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /> Facebook</a>
              </li>
              <li>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
              </li>
              <li>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
              </li>
            </ul>
          </div>
          <div className="footer__orono">
            <img src={LogoGo} />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <ul className="footer__copy">
          <li>
            <a href="#">Terminos y condiciones</a>
          </li>
          <li>
            <a href="#">Politica de privacidad</a>
          </li>
          <li>
            <a href="#">Protección de datos personales</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}