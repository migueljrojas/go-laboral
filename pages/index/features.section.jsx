import { useState } from "react";
import ArrowIcon from "../../components/arrow";
import Image1 from "/assets/bg-docencia.jpg";
import Image2 from "/assets/198904724_l_normal_none.jpg";

export default function Features() {
  const [ activeService, setActiveService ] = useState('medicina-laboral');

  return (
    <section className="home__features">
      <div className="home__features-container home__features-container--reversed">
        <div className="home__features-image">
          <img src={Image1} />
        </div>
        <div className="home__features-content">
          <div className="home__features-text">
            <h2 className="home__features-title">EN LA COBERTURA DE RIESGOS DEL TRABAJO, EXISTEN DOS FACTORES ESTRECHAMENTE RELACIONADOS:<strong>LA RAPIDEZ Y LA CALIDAD DE LA RESPUESTA.</strong></h2>
            <p className="home__features-desc">Un diagnóstico certero, un tratamiento efectivo y una pronta rehabilitación son las metas de toda compañía aseguradora.</p>
            <a className="home__features-link" href="#"><ArrowIcon color="green" />Nuestros Servicios</a>
          </div>
        </div>
      </div>
      <div className="home__features-container">
        <div className="home__features-image">
          <img src={Image2} />
        </div>
        <div className="home__features-content">
          <div className="home__features-text">
            <h2 className="home__features-title home__features-title--grey">Servicios</h2>
            <ul className="home__features-services">
              <li
                className={activeService === 'medicina-laboral' ? 'js-active' : ''}
                onClick={() => setActiveService('medicina-laboral')}
              >
                Medicina Laboral
              </li>
              <li
                className={activeService === 'atencion-art' ? 'js-active' : ''}
                onClick={() => setActiveService('atencion-art')}
              >
                Atención ART
              </li>
            </ul>
            <p className={`home__features-desc ${activeService !== 'medicina-laboral' ? 'js-hidden' : ''}`}>
              Con la calidad de atención, especialización y tecnología de Grupo Oroño realizamos exámenes preocupacionales con resultados eficientes en menos de 24 horas, agilizando tu gestión sin perder calidad prestacional.
              <br /><br />
              Gestioná online la reserva de turnos para tus candidatos en minutos.
            </p>
            <p className={`home__features-desc ${activeService !== 'atencion-art' ? 'js-hidden' : ''}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a className="home__features-link" href="#"><ArrowIcon color="green" />Registrar Empresa</a>
          </div>
        </div>
      </div>
    </section>
  )
}