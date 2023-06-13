const base = window.location.pathname !== '/' ? '../' : './';

import { a, j as e } from "../chunks/chunk-95bbd968.js";
import { H as s, M as o } from "../chunks/chunk-b65e180f.js";
import { S as i, a as n } from "../chunks/chunk-3818d69e.js";
import "../chunks/chunk-35ced68b.js";
const t = base + "assets/sliders_web_go_staff_3.png",
  r = [t, i, n];
function c() {
  return a("section", {
    className: "institucional__hero",
    children: [
      e(s, { slides: r }),
      e("div", {
        className: "institucional__hero-content",
        children: e("h1", {
          className: "institucional__hero-title ornament",
          children: "Quienes somos",
        }),
      }),
      e("span", { className: "institucional__hero-mouse" }),
      e("span", { className: "institucional__hero-next-section" }),
    ],
  });
}
function l() {
  return e("section", {
    className: "institucional__about",
    children: a("div", {
      className: "institucional__about-content",
      children: [
        e("h2", {
          className: "institucional__about-title ornament ornament--grey",
          children:
            "Somos parte del grupo de prestadores de salud más importante de la región.",
        }),
        a("p", {
          className: "institucional__about-text",
          children: [
            "Desde hace años en Grupo Oroño y Sanatorio Parque trabajamos junto a PYMEs y grandes empresas de la región brindando servicios de exámenes preocupacionales, seguimiento de licencias médicas y servicios integrales para ART.",
            e("br", {}),
            e("br", {}),
            "En esta nueva etapa GO Laboral propone un upgrade en su servicio de atención, gestión y soluciones para empresas. Esta nueva unidad prestacional está enfocada 100% en acompañar el proceso del personal de recursos humanos de tu empresa para lograr resultados eficientes y orientados a cuidar el capital humano.",
            e("br", {}),
            e("br", {}),
            "Todos los procedimientos son abordados con profesionales especializados, tecnología de última generación en cada prácticas y siempre en espacios de alto comfort y accesibilidad para cada tipo de paciente.",
          ],
        }),
      ],
    }),
  });
}
function _() {
  return a(o, { className: "institucional", children: [e(c, {}), e(l, {})] });
}
export { _ as Page };
