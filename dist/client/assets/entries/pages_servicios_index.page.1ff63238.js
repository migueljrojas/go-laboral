const base = window.location.pathname !== '/' ? '../' : './';

import { a, j as e } from "../chunks/chunk-95bbd968.js";
import { H as n, M as r } from "../chunks/chunk-b65e180f.js";
import { S as c, a as t } from "../chunks/chunk-3818d69e.js";
import "../chunks/chunk-35ced68b.js";
const l = base + "assets/fondo-header-servicios.png",
  d = [l, c, t];
function m() {
  return a("section", {
    className: "servicios__hero",
    children: [
      e(n, { slides: d, backdrop: !1 }),
      a("div", {
        className: "servicios__hero-content",
        children: [
          e("h1", {
            className: "servicios__hero-title ornament",
            children: "Medicina laboral",
          }),
          e("h2", {
            className: "servicios__hero-subtitle",
            children:
              "LA CALIDAD PRESTACIONAL DE GRUPO OROÑO AL SERVICIO DE LO MÁS IMPORTANTE QUE TIENE UNA EMPRESA, SU CAPITAL HUMANO.",
          }),
          e("p", {
            className: "servicios__hero-text",
            children:
              "Gracias a la calidad de atención, la tecnología y el profesionalismo de instituciones referentes como el Sanatorio Parque en GO Laboral realizá los exámenes preocupacionales para tus candidatos obteniendo la mayor precisión en un diagnóstico eficiente, que no solo reporta resultados óptimos sino además en el tiempo que necesitas para que la gestión de recursos humanos se destaque.",
          }),
        ],
      }),
      e("span", { className: "servicios__hero-mouse" }),
      e("span", { className: "servicios__hero-next-section" }),
    ],
  });
}
function u() {
  return a("section", {
    className: "servicios__med",
    children: [
      a("div", {
        className: "servicios__med-container",
        children: [
          a("div", {
            className: "servicios__med-content",
            children: [
              a("h2", {
                className: "servicios__med-title ornament ornament--white",
                children: ["PRESTACIONES", e("br", {}), "MEDICINA LABORAL"],
              }),
              a("p", {
                className: "servicios__med-text",
                children: [
                  e("strong", {
                    children:
                      "La calidad prestacional de Grupo Oroño al servicio de lo más importante que tiene una empresa, su capital humano.",
                  }),
                  "Gracias a la calidad de atención, la tecnología y el profesionalismo de instituciones referentes como el Sanatorio Parque en GO Laboral realizá los exámenes preocupacionales para tus candidatos obteniendo la mayor precisión en un diagnóstico eficiente, que no solo reporta resultados óptimos sino además en el tiempo que necesitas para que la gestión de recursos humanos se destaque.",
                ],
              }),
              e("a", {
                href: "#",
                className: "servicios__med-cta",
                children: "Contratar",
              }),
            ],
          }),
          e("ul", {
            className: "servicios__med-icons",
            children: [
              "Exámenes preocupacionales y periódicos",
              "Gestión de ausentismo",
              "Asesoramiento médico legal",
              "Chequeo ejecutivo",
              "Estudios de ergonomía",
              "Servicio médico",
              "Capacitación a empresas",
              "Medicina Laboral Preventiva",
              "Asesoría nutricional",
              "Reuniones de asesoramiento con RRHH",
            ].map((i, s) =>
              a(
                "li",
                {
                  children: [
                    e("img", { src: `/assets/icons/med-${s + 1}.svg` }),
                    e("span", { children: i }),
                  ],
                },
                "icon-med-" + s
              )
            ),
          }),
        ],
      }),
      e("span", { className: "servicios__ornament" }),
    ],
  });
}
function p() {
  return a("section", {
    className: "servicios__art",
    children: [
      a("div", {
        className: "servicios__art-container",
        children: [
          a("div", {
            className: "servicios__art-content",
            children: [
              a("h2", {
                className: "servicios__art-title ornament",
                children: ["ATENCIÓN INTEGRAL", e("br", {}), "ART SERVICIOS"],
              }),
              a("p", {
                className: "servicios__art-text",
                children: [
                  e("strong", {
                    children:
                      "Sabemos de la importancia de cuidar el capital humano de una empresa.",
                  }),
                  "Cuando un empleado sufre una lesión o requiere atención médica protegerlo viene de la mano de darle ofrecerle una atención inmediata, diagnóstico preciso y un tratamiento cómodo y eficiente para que su recuperación sea la ideal y pueda volver lo antes y mejor posible a sus tareas.",
                ],
              }),
              e("a", {
                href: "#",
                className: "servicios__art-cta",
                children: "Contratar",
              }),
            ],
          }),
          e("ul", {
            className: "servicios__art-icons",
            children: [
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
              "Clinica médica",
            ].map((i, s) =>
              a(
                "li",
                {
                  children: [
                    e("img", { src: `/assets/icons/art-${s + 1}.svg` }),
                    e("span", { children: i }),
                  ],
                },
                "icon-art-" + s
              )
            ),
          }),
        ],
      }),
      e("span", { className: "servicios__ornament" }),
    ],
  });
}
function g() {
  return a(r, {
    className: "servicios",
    children: [e(m, {}), e(u, {}), e(p, {})],
  });
}
export { g as Page };
