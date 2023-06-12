import Logo from "/assets/logo.svg";

export default function Directory() {
  return (
    <section className="home__directory">
      <div className="home__directory-container">
        <div className="home__directory-sanatorios">
          <div className="home__directory-main">
            <img src={Logo} className="home__directory-logo" />
            <strong>Centro medico integral medicina laboral</strong>
            <span>Rioja 2212</span>
          </div>
          <h2 className="home__directory-title ornament ornament--center">Sanatorios</h2>
          <ul className="home__directory-list">
            <li>
              <strong>Sanatorio Parque</strong>
              <span>Oroño 860</span>
            </li>
            <li>
              <strong>ICR</strong>
              <span>Oroño 440</span>
            </li>
            <li>
              <strong>GO Sanatorio Funes</strong>
              <span>Galindo y RN9</span>
            </li>
          </ul>
        </div>
        <div className="home__directory-consultorios">
        <h2 className="home__directory-title ornament ornament--center">CENTROS MÉDICOS Y CONSULTORIOS</h2>
        <ul className="home__directory-list">
          <li>
            <strong>GO SAN LORENZO</strong>
            <span>Hipolito Yrigoyen 1495</span>
          </li>
          <li>
            <strong>GO SAN NICOLAS</strong>
            <span>Garibaldi 725</span>
          </li>
          <li>
            <strong>GO LOS ALTOS</strong>
            <span>Central Argentino y E. Echeverria</span>
          </li>
          <li>
            <strong>GO FISHERTON</strong>
            <span>Wilide 212 bis</span>
          </li>
          <li>
            <strong>GO CENTRO</strong>
            <span>Rioja 2234</span>
          </li>
        </ul>
        <ul className="home__directory-list">
          <li>
            <strong>GO CENTRO</strong>
            <span>Oroño 740</span>
          </li>
          <li>
            <strong>GO CENTRO</strong>
            <span>Oroño 1024</span>
          </li>
          <li>
            <strong>GO ZONA SUR</strong>
            <span>Av San martin 4485</span>
          </li>
          <li>
            <strong>GO FUNES</strong>
            <span>RN9 1365-1423</span>
          </li>
        </ul>
        </div>
      </div>
    </section>
  );
}