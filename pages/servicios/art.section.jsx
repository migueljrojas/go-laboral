export default function Art() {
  const icons = [
    "Telemedicina",
    "Diagnóstico por imagenes",
    "Laboratorio",
    "Atención de quemados",
    "Centros de kinesiología",
    "Salud mental",
    "Ortopedia y traumatología",
    "Guardia 24h",
    "Oftalmología",
    "Odontología",
    "Toxicología",
    "Helipuerto para accidentes graves",
    "Internación",
    "Clinica médica"
  ];

  return (
    <section className="servicios__art">
      <div className="servicios__art-container">
        <div className="servicios__art-content">
          <h2 className="servicios__art-title ornament">
            ATENCIÓN INTEGRAL<br />ART SERVICIOS
          </h2>
          <p className="servicios__art-text">
            <strong>Sabemos de la importancia de cuidar el capital humano de una empresa.</strong>
            Cuando un empleado sufre una lesión o requiere atención médica protegerlo viene de la mano de darle ofrecerle una atención inmediata, diagnóstico preciso y un tratamiento cómodo y eficiente para que su recuperación sea la ideal y pueda volver lo antes y mejor posible a sus tareas.
          </p>
          <a href="#" className="servicios__art-cta">Contratar</a>
        </div>
        <ul className="servicios__art-icons">
          {icons.map((icon, idx) => (
            <li key={'icon-art-' + idx}>
              <img src={`/assets/icons/art-${idx + 1}.svg`} />
              <span>{icon}</span>
            </li>
          ))}
        </ul>
      </div>
      <span className="servicios__ornament" />
    </section>
  );
}