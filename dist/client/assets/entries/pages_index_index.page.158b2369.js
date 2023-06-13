const base = window.location.pathname !== '/' ? '../' : './';

import { P as c, a, j as e, r as t } from "../chunks/chunk-95bbd968.js";
import { H as l, L as d, M as m } from "../chunks/chunk-b65e180f.js";
import { S as h, a as o } from "../chunks/chunk-3818d69e.js";
import { c as _ } from "../chunks/chunk-35ced68b.js";
const u = base + "assets/fondo-header-home.png";
function n({ color: i }) {
  return a("span", {
    className: `arrow-icon ${i && "arrow-icon--" + i}`,
    children: [
      e("span", { className: "arrow-icon__body" }),
      e("span", { className: "arrow-icon__tip" }),
    ],
  });
}
n.propTypes = { color: c.string };
const p = [u, h, o];
function N() {
  return a("section", {
    className: "home__hero",
    children: [
      e(l, { slides: p }),
      a("div", {
        className: "home__hero-content",
        children: [
          e("h1", {
            className: "home__hero-title ornament",
            children: "Cuidamos a los que mueven el mundo.",
          }),
          e("p", {
            className: "home__hero-desc",
            children:
              "La calidad prestacional de Grupo Oroño al servicio de lo más importante que tiene una empresa, su capital humano.",
          }),
          a("a", {
            href: "/institucional",
            className: "home__hero-link",
            children: [e(n, { color: "green" }), " Conocenos"],
          }),
        ],
      }),
      e("span", { className: "home__hero-mouse" }),
      e("span", { className: "home__hero-next-section" }),
    ],
  });
}
const g = base + "assets/bg-docencia.jpg";
function O() {
  const [i, r] = t.useState("medicina-laboral");
  return a("section", {
    className: "home__features",
    children: [
      a("div", {
        className:
          "home__features-container home__features-container--reversed",
        children: [
          e("div", {
            className: "home__features-image",
            children: e("img", { src: g }),
          }),
          e("div", {
            className: "home__features-content",
            children: a("div", {
              className: "home__features-text",
              children: [
                a("h2", {
                  className: "home__features-title",
                  children: [
                    "EN LA COBERTURA DE RIESGOS DEL TRABAJO, EXISTEN DOS FACTORES ESTRECHAMENTE RELACIONADOS:",
                    e("strong", {
                      children: "LA RAPIDEZ Y LA CALIDAD DE LA RESPUESTA.",
                    }),
                  ],
                }),
                e("p", {
                  className: "home__features-desc",
                  children:
                    "Un diagnóstico certero, un tratamiento efectivo y una pronta rehabilitación son las metas de toda compañía aseguradora.",
                }),
                a("a", {
                  className: "home__features-link",
                  href: "#",
                  children: [e(n, { color: "green" }), "Nuestros Servicios"],
                }),
              ],
            }),
          }),
        ],
      }),
      a("div", {
        className: "home__features-container",
        children: [
          e("div", {
            className: "home__features-image",
            children: e("img", { src: o }),
          }),
          e("div", {
            className: "home__features-content",
            children: a("div", {
              className: "home__features-text",
              children: [
                e("h2", {
                  className: "home__features-title home__features-title--grey",
                  children: "Servicios",
                }),
                a("ul", {
                  className: "home__features-services",
                  children: [
                    e("li", {
                      className: i === "medicina-laboral" ? "js-active" : "",
                      onClick: () => r("medicina-laboral"),
                      children: "Medicina Laboral",
                    }),
                    e("li", {
                      className: i === "atencion-art" ? "js-active" : "",
                      onClick: () => r("atencion-art"),
                      children: "Atención ART",
                    }),
                  ],
                }),
                a("p", {
                  className: `home__features-desc ${
                    i !== "medicina-laboral" ? "js-hidden" : ""
                  }`,
                  children: [
                    "Con la calidad de atención, especialización y tecnología de Grupo Oroño realizamos exámenes preocupacionales con resultados eficientes en menos de 24 horas, agilizando tu gestión sin perder calidad prestacional.",
                    e("br", {}),
                    e("br", {}),
                    "Gestioná online la reserva de turnos para tus candidatos en minutos.",
                  ],
                }),
                e("p", {
                  className: `home__features-desc ${
                    i !== "atencion-art" ? "js-hidden" : ""
                  }`,
                  children:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                }),
                a("a", {
                  className: "home__features-link",
                  href: "#",
                  children: [e(n, { color: "green" }), "Registrar Empresa"],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function S() {
  return e("section", {
    className: "home__directory",
    children: a("div", {
      className: "home__directory-container",
      children: [
        a("div", {
          className: "home__directory-sanatorios",
          children: [
            a("div", {
              className: "home__directory-main",
              children: [
                e("img", { src: d, className: "home__directory-logo" }),
                e("strong", {
                  children: "Centro medico integral medicina laboral",
                }),
                e("span", { children: "Rioja 2212" }),
              ],
            }),
            e("h2", {
              className: "home__directory-title ornament ornament--center",
              children: "Sanatorios",
            }),
            a("ul", {
              className: "home__directory-list",
              children: [
                a("li", {
                  children: [
                    e("strong", { children: "Sanatorio Parque" }),
                    e("span", { children: "Oroño 860" }),
                  ],
                }),
                a("li", {
                  children: [
                    e("strong", { children: "ICR" }),
                    e("span", { children: "Oroño 440" }),
                  ],
                }),
                a("li", {
                  children: [
                    e("strong", { children: "GO Sanatorio Funes" }),
                    e("span", { children: "Galindo y RN9" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        a("div", {
          className: "home__directory-consultorios",
          children: [
            e("h2", {
              className: "home__directory-title ornament ornament--center",
              children: "CENTROS MÉDICOS Y CONSULTORIOS",
            }),
            a("ul", {
              className: "home__directory-list",
              children: [
                a("li", {
                  children: [
                    e("strong", { children: "GO SAN LORENZO" }),
                    e("span", { children: "Hipolito Yrigoyen 1495" }),
                  ],
                }),
                a("li", {
                  children: [
                    e("strong", { children: "GO SAN NICOLAS" }),
                    e("span", { children: "Garibaldi 725" }),
                  ],
                }),
                a("li", {
                  children: [
                    e("strong", { children: "GO LOS ALTOS" }),
                    e("span", {
                      children: "Central Argentino y E. Echeverria",
                    }),
                  ],
                }),
                a("li", {
                  children: [
                    e("strong", { children: "GO FISHERTON" }),
                    e("span", { children: "Wilide 212 bis" }),
                  ],
                }),
                a("li", {
                  children: [
                    e("strong", { children: "GO CENTRO" }),
                    e("span", { children: "Rioja 2234" }),
                  ],
                }),
              ],
            }),
            a("ul", {
              className: "home__directory-list",
              children: [
                a("li", {
                  children: [
                    e("strong", { children: "GO CENTRO" }),
                    e("span", { children: "Oroño 740" }),
                  ],
                }),
                a("li", {
                  children: [
                    e("strong", { children: "GO CENTRO" }),
                    e("span", { children: "Oroño 1024" }),
                  ],
                }),
                a("li", {
                  children: [
                    e("strong", { children: "GO ZONA SUR" }),
                    e("span", { children: "Av San martin 4485" }),
                  ],
                }),
                a("li", {
                  children: [
                    e("strong", { children: "GO FUNES" }),
                    e("span", { children: "RN9 1365-1423" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const E = base + "assets/icon-reg-1.png",
  f = base + "assets/icon-reg-2.png",
  A = base + "assets/icon-reg-3.png";
function v() {
  return e("section", {
    className: "home__register",
    children: a("div", {
      className: "home__register-content",
      children: [
        a("h2", {
          className: "home__register-title ornament ornament--grey",
          children: [
            "Valoramos tu tiempo",
            e("span", {
              className: "home__register-subtitle",
              children:
                "Accesibilidad y raspanidez para procesos de contratación eficientes.",
            }),
          ],
        }),
        a("p", {
          className: "home__register-text",
          children: [
            "Contamos con una ",
            e("strong", {
              children: "integración total en nuestro sistema de gestión",
            }),
            " que permite que desde nuestro sitio web puedas gestionar cada etapa del proceso optimizando el circuito de atención y aportando agilidad a cada una de tus gestiones.",
          ],
        }),
        a("ul", {
          className: "home__register-features",
          children: [
            a("li", {
              children: [
                e("img", { src: E }),
                e("span", { children: "Contratá servicios" }),
              ],
            }),
            a("li", {
              children: [
                e("img", { src: f }),
                e("span", { children: "Gestioná turno" }),
              ],
            }),
            a("li", {
              children: [
                e("img", { src: A }),
                e("span", { children: "Accedé a informes" }),
              ],
            }),
          ],
        }),
        e("a", {
          className: "home__register-cta",
          href: "#",
          children: "Registrate",
        }),
      ],
    }),
  });
}
function s({ background: i, children: r }) {
  return e("div", {
    className: `interstitial ${i && "interstitial--" + i}`,
    children: e("div", { className: "interstitial__content", children: r }),
  });
}
s.propTypes = { background: c.string, children: _ };
const y = base + "assets/1584892.png";
function L() {
  return a(m, {
    className: "home",
    children: [
      e(N, {}),
      e(s, {
        background: "green",
        children: a("p", {
          className: "home__interstitial-text",
          children: [
            "Un ",
            e("strong", { children: "nuevo concepto en medicina laboral" }),
            " que combina la calidad prestacional, el avance tecnológico y la responsabilidad de cuidar tus recursos más valiosos.",
          ],
        }),
      }),
      e("section", {
        className: "home__resultados",
        children: a("div", {
          className: "home__resultados-content",
          children: [
            e("img", { src: y }),
            a("p", {
              children: [
                "LOS RESULTADOS DE TUS EXÁMENES PREOCUPACIONALES ",
                e("strong", { children: "EN 24 HORAS." }),
              ],
            }),
          ],
        }),
      }),
      e(O, {}),
      e("section", {
        className: "home__map",
        children: a("div", {
          className: "home__map-text",
          children: [
            e("h2", {
              className: "home__map-title ornament",
              children:
                "INAUGURAMOS UN NUEVO CENTRO DE MEDICINA LABORAL QUE SE SUMA A NUESTRA AMPLIA RED DE COBERTURA.",
            }),
            e("p", {
              className: "home__map-desc",
              children:
                "Más de 30 centros de atención distribuidos estratégicamente para estar siempre cerca.",
            }),
          ],
        }),
      }),
      e(S, {}),
      e("section", {
        className: "home__video",
        children: e("iframe", {
          type: "text/html",
          src: "https://www.youtube.com/embed/kso2CTpk3Z8?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0",
        }),
      }),
      e(v, {}),
      a(s, {
        background: "picture",
        children: [
          e("h2", {
            className: "home__interstitial-title",
            children:
              "Sentí la evolución de cubrir a los tuyos con el grupo de prestadores más importante de la región.",
          }),
          e("p", {
            className: "home__interstitial-desc",
            children:
              "Accesibilidad, rapidez y calidad para una respuesta inmediata, una atención responsable, un tratamiento personalizado y una rehabilitación eficiente.",
          }),
        ],
      }),
    ],
  });
}
export { L as Page };
