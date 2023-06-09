const base = window.location.pathname !== '/' ? '../' : './';

import { a as c, j as a } from "../chunks/chunk-95bbd968.js";
import {
  H as e,
  L as n,
  F as o,
  f as s,
  a as t,
  b as i,
  c as r,
  d as l,
  e as h,
  M as m,
} from "../chunks/chunk-b65e180f.js";
import "../chunks/chunk-35ced68b.js";
const d = base + "assets/header-contacto.jpg",
  _ = [d];
function f() {
  return c("section", {
    className: "contacto__hero",
    children: [
      a(e, { slides: _ }),
      a("div", {
        className: "contacto__hero-content",
        children: a("h1", {
          className: "contacto__hero-title ornament",
          children: "Contactanos",
        }),
      }),
      a("span", { className: "contacto__hero-mouse" }),
      a("span", { className: "contacto__hero-next-section" }),
    ],
  });
}
const N = base + "assets/map.jpg";
function p() {
  return a("section", {
    className: "contacto__form-section",
    children: c("div", {
      className: "contacto__container",
      children: [
        a("div", {
          className: "contacto__form",
          children: a("h2", {
            className: "contacto__title ornament ornament--blue",
            children:
              "PONETE EN CONTACTO PARA CONSULTAS Y CONTRATACIÓN DE SERVICIOS.",
          }),
        }),
        c("div", {
          className: "contacto__info",
          children: [
            a("h3", {
              className: "contacto__logo",
              children: a("img", { src: n }),
            }),
            c("ul", {
              className: "contacto__info-list",
              children: [
                c("li", {
                  children: [
                    a(o, { icon: s }),
                    " Rioja 2212 - Rosario , Argentina",
                  ],
                }),
                c("li", { children: [a(o, { icon: t }), " 0341- 000 000"] }),
                c("li", {
                  children: [
                    a(o, { icon: i }),
                    " info@meinventeestecorreo.com.ar",
                  ],
                }),
              ],
            }),
            c("ul", {
              className: "contacto__social",
              children: [
                a("li", {
                  children: a("a", { href: "#", children: a(o, { icon: r }) }),
                }),
                a("li", {
                  children: a("a", { href: "#", children: a(o, { icon: l }) }),
                }),
                a("li", {
                  children: a("a", { href: "#", children: a(o, { icon: h }) }),
                }),
              ],
            }),
            a("div", {
              className: "contacto__map",
              children: a("a", {
                href: "https://goo.gl/maps/J26sn3GzsGYUsQKQ6",
                target: "_blank",
                rel: "noreferrer",
                children: a("img", { src: N }),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function v() {
  return c(m, { className: "contacto", children: [a(f, {}), a(p, {})] });
}
export { v as Page };
