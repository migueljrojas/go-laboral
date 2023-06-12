import { useState } from "react";

export default function Form() {
  const [ currentStep, setCurrentStep ] = useState(1);
  return (
    <section className="registrar__form-section">
      <div className="registrar__container">
        <div className="registrar__heading">
          <h2 className="registrar__title ornament ornament--grey">
            Solicitar alta de servicio para empresas.
          </h2>
          <p className="registrar__counter">{`Paso ${currentStep} de 3`}</p>
        </div>
        <form className="registrar__form">
          <div className="registrar__form-step">
            <h3 className="registrar__form-step-title">Inscripción</h3>
            <p className="registrar__form-step-desc">
              Complete el siguiente formulario para dar de alta en nuestro sistema de servicios online a la empresa a la que representa.
              <br />
              <br />
              Para poder completar el registro es importante que ya se encuentra dado de alta como cliente de GO Laboral para hacerlo contactarse a info@golaboral.com.ar.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}