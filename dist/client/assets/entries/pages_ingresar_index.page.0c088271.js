const base = window.location.pathname !== '/' ? '../' : './';

import { a as r, j as e } from "../chunks/chunk-95bbd968.js";
import { H as s, M as a } from "../chunks/chunk-b65e180f.js";
import "../chunks/chunk-35ced68b.js";
const n = base + "assets/sliders_web_go_centros_medicos.png",
  i = [n];
function t() {
  return r("section", {
    className: "ingresar__hero",
    children: [
      e(s, { slides: i }),
      r("div", {
        className: "ingresar__content",
        children: [
          e("h1", {
            className: "ingresar__title ornament ornament--white",
            children: "Iniciar sesión",
          }),
          e("p", {
            className: "ingresar__subtitle",
            children: "Ingresa con tu email y contraseña",
          }),
          r("div", {
            className: "ingresar__form",
            children: [
              e("div", {}),
              r("div", {
                className: "ingresar__registro",
                children: [
                  r("p", {
                    className: "ingresar__registro-text",
                    children: [
                      "¿Es tu primer ingreso en GO Laboral?",
                      e("strong", { children: "Registrá a tu empresa ahora." }),
                    ],
                  }),
                  e("a", {
                    className: "ingresar__cta",
                    href: "/registrar-empresa",
                    children: "Registrar empresa",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e("span", { className: "ingresar__hero-mouse" }),
      e("span", { className: "ingresar__hero-next-section" }),
    ],
  });
}
function m() {
  return e(a, { className: "ingresar", children: e(t, {}) });
}
export { m as Page };
