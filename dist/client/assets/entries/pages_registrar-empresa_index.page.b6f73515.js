const base = window.location.pathname !== '/' ? '../' : './';

import { a as r, j as e, r as s } from "../chunks/chunk-95bbd968.js";
import { H as t, M as i } from "../chunks/chunk-b65e180f.js";
import "../chunks/chunk-35ced68b.js";
const o = base + "assets/header-actividades_programadas.jpg",
  n = [o];
function c() {
  return r("section", {
    className: "registrar__hero",
    children: [
      e(t, { slides: n }),
      e("div", {
        className: "registrar__hero-content",
        children: e("h1", {
          className: "registrar__hero-title ornament",
          children: "Alta de servicio para empresas.",
        }),
      }),
      e("span", { className: "registrar__hero-mouse" }),
      e("span", { className: "registrar__hero-next-section" }),
    ],
  });
}
function l() {
  const [a, m] = s.useState(1);
  return e("section", {
    className: "registrar__form-section",
    children: r("div", {
      className: "registrar__container",
      children: [
        r("div", {
          className: "registrar__heading",
          children: [
            e("h2", {
              className: "registrar__title ornament ornament--grey",
              children: "Solicitar alta de servicio para empresas.",
            }),
            e("p", {
              className: "registrar__counter",
              children: `Paso ${a} de 3`,
            }),
          ],
        }),
        e("form", {
          className: "registrar__form",
          children: r("div", {
            className: "registrar__form-step",
            children: [
              e("h3", {
                className: "registrar__form-step-title",
                children: "Inscripción",
              }),
              r("p", {
                className: "registrar__form-step-desc",
                children: [
                  "Complete el siguiente formulario para dar de alta en nuestro sistema de servicios online a la empresa a la que representa.",
                  e("br", {}),
                  e("br", {}),
                  "Para poder completar el registro es importante que ya se encuentra dado de alta como cliente de GO Laboral para hacerlo contactarse a info@golaboral.com.ar.",
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function h() {
  return r(i, { className: "registrar", children: [e(c, {}), e(l, {})] });
}
export { h as Page };
