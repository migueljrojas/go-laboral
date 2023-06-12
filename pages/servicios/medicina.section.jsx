export default function About() {
  const icons = [
    "Exámenes preocupacionales y periódicos",
    "Gestión de ausentismo",
    "Asesoramiento médico legal",
    "Chequeo ejecutivo",
    "Estudios de ergonomía",
    "Servicio médico",
    "Capacitación a empresas",
    "Medicina Laboral Preventiva",
    "Asesoría nutricional",
    "Reuniones de asesoramiento con RRHH"
  ];

  return (
    <section className="servicios__med">
      <div className="servicios__med-container">
        <div className="servicios__med-content">
          <h2 className="servicios__med-title ornament ornament--white">
            PRESTACIONES<br />MEDICINA LABORAL
          </h2>
          <p className="servicios__med-text">
            <strong>La calidad prestacional de Grupo Oroño al servicio de lo más importante que tiene una empresa, su capital humano.</strong>
            Gracias a la calidad de atención, la tecnología y el profesionalismo de instituciones referentes como el Sanatorio Parque en GO Laboral realizá los exámenes preocupacionales para tus candidatos obteniendo la mayor precisión en un diagnóstico eficiente, que no solo reporta resultados óptimos sino además en el tiempo que necesitas para que la gestión de recursos humanos se destaque.          
          </p>
          <a href="#" className="servicios__med-cta">Contratar</a>
        </div>
        <ul className="servicios__med-icons">
          {icons.map((icon, idx) => (
            <li key={'icon-med-' + idx}>
              <img src={`/assets/icons/med-${idx + 1}.svg`} />
              <span>{icon}</span>
            </li>
          ))}
        </ul>
      </div>
      <span className="servicios__ornament" />
    </section>
  );
}