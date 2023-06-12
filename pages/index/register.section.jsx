import Icon1 from "/assets/icon-reg-1.png";
import Icon2 from "/assets/icon-reg-2.png";
import Icon3 from "/assets/icon-reg-3.png";

export default function Register() {
  return (
    <section className="home__register">
      <div className="home__register-content">
        <h2 className="home__register-title ornament ornament--grey">
          Valoramos tu tiempo
          <span className="home__register-subtitle">Accesibilidad y raspanidez para procesos de contratación eficientes.</span>
        </h2>
        <p className="home__register-text">Contamos con una <strong>integración total en nuestro sistema de gestión</strong> que permite que desde nuestro sitio web puedas gestionar cada etapa del proceso optimizando el circuito de atención y aportando agilidad a cada una de tus gestiones.</p>
        <ul className="home__register-features">
          <li>
            <img src={Icon1} />
            <span>Contratá servicios</span>
          </li>
          <li>
            <img src={Icon2} />
            <span>Gestioná turno</span>
          </li>
          <li>
            <img src={Icon3} />
            <span>Accedé a informes</span>
          </li>
        </ul>
        <a className="home__register-cta" href="#">Registrate</a>
      </div>
    </section>
  );
}