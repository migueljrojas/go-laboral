const base = window.location.pathname !== '/' ? '../' : './';

import {
  _ as a,
  s as p,
  d,
  t as _,
  r as o,
  k as u,
  D as c,
  u as f,
  m as v,
  P as x,
  Q as E,
  N as m,
  M as y,
} from "../chunks/chunk-078aa1fb.js";
const n = {},
  h = {},
  P = {},
  R = {},
  F = [],
  L = {},
  C = !0,
  b = [],
  j = { onBeforeRoute: null },
  O = Object.assign({
    "/pages/contacto/index.page.jsx": () =>
      a(
        () => import("./pages_contacto_index.page.ad4bf04e.js"),
        [
          base + "assets/entries/pages_contacto_index.page.ad4bf04e.js",
          base + "assets/chunks/chunk-95bbd968.js",
          base + "assets/chunks/chunk-b65e180f.js",
          base + "assets/chunks/chunk-35ced68b.js",
          base + "assets/static/index.26594e11.css",
          base + "assets/static/index.page.b185c742.css",
        ]
      ),
    "/pages/index/index.page.jsx": () =>
      a(
        () => import("./pages_index_index.page.158b2369.js"),
        [
          base + "assets/entries/pages_index_index.page.158b2369.js",
          base + "assets/chunks/chunk-95bbd968.js",
          base + "assets/chunks/chunk-b65e180f.js",
          base + "assets/chunks/chunk-35ced68b.js",
          base + "assets/static/index.26594e11.css",
          base + "assets/chunks/chunk-3818d69e.js",
          base + "assets/static/index.page.c2c504db.css",
        ]
      ),
    "/pages/ingresar/index.page.jsx": () =>
      a(
        () => import("./pages_ingresar_index.page.0c088271.js"),
        [
          base + "assets/entries/pages_ingresar_index.page.0c088271.js",
          base + "assets/chunks/chunk-95bbd968.js",
          base + "assets/chunks/chunk-b65e180f.js",
          base + "assets/chunks/chunk-35ced68b.js",
          base + "assets/static/index.26594e11.css",
          base + "assets/static/index.page.dd2d85c5.css",
        ]
      ),
    "/pages/institucional/index.page.jsx": () =>
      a(
        () => import("./pages_institucional_index.page.66ff9df2.js"),
        [
          base + "assets/entries/pages_institucional_index.page.66ff9df2.js",
          base + "assets/chunks/chunk-95bbd968.js",
          base + "assets/chunks/chunk-b65e180f.js",
          base + "assets/chunks/chunk-35ced68b.js",
          base + "assets/static/index.26594e11.css",
          base + "assets/chunks/chunk-3818d69e.js",
          base + "assets/static/index.page.1d5fff42.css",
        ]
      ),
    "/pages/registrar-empresa/index.page.jsx": () =>
      a(
        () => import("./pages_registrar-empresa_index.page.b6f73515.js"),
        [
          base +
            "assets/entries/pages_registrar-empresa_index.page.b6f73515.js",
          base + "assets/chunks/chunk-95bbd968.js",
          base + "assets/chunks/chunk-b65e180f.js",
          base + "assets/chunks/chunk-35ced68b.js",
          base + "assets/static/index.26594e11.css",
          base + "assets/static/index.page.f2616777.css",
        ]
      ),
    "/pages/servicios/index.page.jsx": () =>
      a(
        () => import("./pages_servicios_index.page.1ff63238.js"),
        [
          base + "assets/entries/pages_servicios_index.page.1ff63238.js",
          base + "assets/chunks/chunk-95bbd968.js",
          base + "assets/chunks/chunk-b65e180f.js",
          base + "assets/chunks/chunk-35ced68b.js",
          base + "assets/static/index.26594e11.css",
          base + "assets/chunks/chunk-3818d69e.js",
          base + "assets/static/index.page.946a2c34.css",
        ]
      ),
    "/renderer/_error.page.jsx": () =>
      a(
        () => import("./renderer_error.page.87e62e52.js"),
        [
          base + "assets/entries/renderer_error.page.87e62e52.js",
          base + "assets/chunks/chunk-95bbd968.js",
        ]
      ),
  }),
  w = { ...O };
n[".page"] = w;
const A = Object.assign({
    "/renderer/_default.page.client.jsx": () =>
      a(
        () => import("./renderer_default.page.client.93a40990.js"),
        [
          base + "assets/entries/renderer_default.page.client.93a40990.js",
          base + "assets/chunks/chunk-95bbd968.js",
          base + "assets/chunks/chunk-35ced68b.js",
          base + "assets/static/default.page.client.454bcd3a.css",
        ]
      ),
  }),
  I = { ...A };
n[".page.client"] = I;
const T = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      isGeneratedFile: C,
      neverLoaded: L,
      pageConfigGlobal: j,
      pageConfigs: b,
      pageFilesEager: h,
      pageFilesExportNamesEager: R,
      pageFilesExportNamesLazy: P,
      pageFilesLazy: n,
      pageFilesList: F,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
p(T);
const l = d({ withoutHash: !0 });
async function S() {
  const e = _();
  return (
    o(e, { isHydration: !0, isBackwardNavigation: null }),
    o(e, await D(e._pageId)),
    z(),
    e
  );
}
function z() {
  const e = d({ withoutHash: !0 });
  u(
    l === e,
    `URL manipulated before hydration finished (\`${l}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`
  );
}
async function D(e) {
  const r = {},
    { pageFilesAll: t, pageConfigs: g } = await c(!0);
  return (
    o(r, { _pageFilesAll: t, _pageConfigs: g }),
    o(r, await f(t, g, e)),
    t
      .filter((s) => s.fileType !== ".page.server")
      .forEach((s) => {
        var i;
        v(
          !(
            !((i = s.fileExports) === null || i === void 0) && i.onBeforeRender
          ),
          `\`export { onBeforeRender }\` of ${s.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,
          { showStackTrace: !1, onlyOnce: !0 }
        );
      }),
    r
  );
}
x();
E(!0);
H();
async function H() {
  var e, r;
  const t = await S();
  await m(t, !1),
    y(t, "onHydrationEnd"),
    await ((r = (e = t.exports).onHydrationEnd) === null || r === void 0
      ? void 0
      : r.call(e, t));
}
