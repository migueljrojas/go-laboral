const base = window.location.pathname !== '/' ? '../' : './';

import {
  i as X,
  _ as w,
  s as Je,
  p as L,
  a as l,
  b as E,
  c as Q,
  g as W,
  d as N,
  e as me,
  h as I,
  f as F,
  j as qe,
  k as u,
  l as g,
  m as S,
  n as x,
  o as D,
  q as Xe,
  r as p,
  t as Qe,
  u as A,
  v as _e,
  w as Ze,
  x as et,
  y as ye,
  z as tt,
  A as K,
  B as nt,
  C as rt,
  D as ot,
  E as be,
  F as ve,
  G as st,
  H as it,
  I as at,
  J as Se,
  K as lt,
  L as Z,
  M as z,
  N as ut,
  O as ct,
} from "../chunks/chunk-078aa1fb.js";
function R(e) {
  return typeof e != "object" || e === null
    ? !1
    : Object.getPrototypeOf(e) === null
    ? !0
    : e.constructor.name === "Object";
}
function se(e) {
  return "[" + e.map((t) => "'" + t + "'").join(", ") + "]";
}
function V(e, t) {
  const n = Object.getOwnPropertyDescriptor(e, t);
  return !!n && !("value" in n) && !!n.get;
}
function ft(e) {
  return typeof e == "object" && e !== null && "then" in e && X(e.then);
}
const dt = ["Page"],
  gt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: dt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  pt = ["Page"],
  ht = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: pt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  mt = ["Page"],
  _t = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: mt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  yt = ["Page"],
  bt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: yt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vt = ["Page"],
  St = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: vt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Pt = ["Page"],
  Rt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: Pt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  wt = ["Page"],
  Ot = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: wt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  xt = ["documentProps"],
  Et = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: xt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Tt = ["documentProps"],
  Ct = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: Tt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ft = ["documentProps"],
  jt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: Ft },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  At = ["documentProps"],
  Nt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: At },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  kt = ["documentProps"],
  It = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: kt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  $t = ["documentProps"],
  Bt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: $t },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ht = ["render", "passToClient"],
  Lt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: Ht },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Wt = ["render"],
  Dt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, exportNames: Wt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ee = {},
  Pe = {},
  Ut = {},
  U = {},
  zt = [],
  Vt = {},
  Mt = !0,
  Gt = [],
  Kt = { onBeforeRoute: null },
  Yt = Object.assign({
    "/pages/contacto/index.page.jsx": () =>
      w(
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
      w(
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
      w(
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
      w(
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
      w(
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
      w(
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
      w(
        () => import("./renderer_error.page.87e62e52.js"),
        [
          base + "assets/entries/renderer_error.page.87e62e52.js",
          base + "assets/chunks/chunk-95bbd968.js",
        ]
      ),
  }),
  Jt = { ...Yt };
ee[".page"] = Jt;
const qt = Object.assign({
    "/pages/contacto/index.page.jsx": gt,
    "/pages/index/index.page.jsx": ht,
    "/pages/ingresar/index.page.jsx": _t,
    "/pages/institucional/index.page.jsx": bt,
    "/pages/registrar-empresa/index.page.jsx": St,
    "/pages/servicios/index.page.jsx": Rt,
    "/renderer/_error.page.jsx": Ot,
  }),
  Xt = { ...qt };
U[".page"] = Xt;
const Qt = Object.assign({
    "/pages/contacto/index.page.server.js": Et,
    "/pages/index/index.page.server.js": Ct,
    "/pages/ingresar/index.page.server.js": jt,
    "/pages/institucional/index.page.server.js": Nt,
    "/pages/registrar-empresa/index.page.server.js": It,
    "/pages/servicios/index.page.server.js": Bt,
    "/renderer/_default.page.server.jsx": Lt,
  }),
  Zt = { ...Qt };
U[".page.server"] = Zt;
const en = Object.assign({}),
  tn = { ...en };
Pe[".page.route"] = tn;
const nn = Object.assign({
    "/renderer/_default.page.client.jsx": () =>
      w(
        () => import("./renderer_default.page.client.93a40990.js"),
        [
          base + "assets/entries/renderer_default.page.client.93a40990.js",
          base + "assets/chunks/chunk-95bbd968.js",
          base + "assets/chunks/chunk-35ced68b.js",
          base + "assets/static/default.page.client.454bcd3a.css",
        ]
      ),
  }),
  rn = { ...nn };
ee[".page.client"] = rn;
const on = Object.assign({ "/renderer/_default.page.client.jsx": Dt }),
  sn = { ...on };
U[".page.client"] = sn;
const an = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      isGeneratedFile: Mt,
      neverLoaded: Vt,
      pageConfigGlobal: Kt,
      pageConfigs: Gt,
      pageFilesEager: Pe,
      pageFilesExportNamesEager: U,
      pageFilesExportNamesLazy: Ut,
      pageFilesLazy: ee,
      pageFilesList: zt,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
Je(an);
function ln(e) {
  return L(e, "/").pathname;
}
function Re(e) {
  return (
    !e.startsWith("/") && !e.startsWith(".") && !e.startsWith("?") && e !== ""
  );
}
function un() {
  var e, t, n, s;
  const r = !!(
      !(
        (t =
          (e = window.__REACT_DEVTOOLS_GLOBAL_HOOK__) === null || e === void 0
            ? void 0
            : e.renderers) === null || t === void 0
      ) && t.size
    ),
    o = !!(
      !(
        (s =
          (n = window.__REACT_DEVTOOLS_GLOBAL_HOOK__) === null || n === void 0
            ? void 0
            : n.rendererInterfaces) === null || s === void 0
      ) && s.size
    ),
    i = !!window.__vite_plugin_react_preamble_installed__;
  return r || o || i;
}
function cn(e, t) {
  return (e == null ? void 0 : e.message) === (t == null ? void 0 : t.message);
}
function B(e) {
  window.location.href = e;
}
function fn(e) {
  return new Promise((t) => setTimeout(t, e));
}
function dn(e, t) {
  let n = !1;
  return () => {
    n ||
      ((n = !0),
      setTimeout(() => {
        (n = !1), e();
      }, t));
  };
}
l(Q());
E();
const ie = W("navigationState.ts", {}),
  gn = N(),
  we = {
    markNavigationChange() {
      ie.navigationChanged = !0;
    },
    get noNavigationChangeYet() {
      return !ie.navigationChanged && this.isFirstUrl(N());
    },
    isFirstUrl(e) {
      return e === gn;
    },
  };
async function pn(e, t) {
  const s = me(e, t).filter((o) => o.fileType === ".page.server");
  return (
    await Promise.all(
      s.map(async (o) => {
        o.exportNames || (l(o.loadExportNames, t), await o.loadExportNames());
      })
    ),
    {
      hasOnBeforeRenderServerSideOnlyHook: s.some(
        ({ exportNames: o }) => (l(o), o.includes("onBeforeRender"))
      ),
    }
  );
}
function hn(e, t) {
  if (!R(e)) return !1;
  for (const n of Object.keys(e)) if (!t.includes(n)) return !1;
  return !0;
}
function mn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    Object.values(e).every((t) => typeof t == "string")
  );
}
Q() && E();
function _n(e, t) {
  const s = t
    .filter(({ filesystemRoot: o }) => e.startsWith(o))
    .sort(I(({ filesystemRoot: o }) => o.length))[0];
  let r;
  if (s) {
    const { filesystemRoot: o, urlRoot: i } = s,
      a = { pageId: e, filesystemRoot: o, urlRoot: i };
    l(i.startsWith("/") && e.startsWith("/") && o.startsWith("/"), a),
      l(e.startsWith(o), a),
      o !== "/" ? (l(!o.endsWith("/"), a), (r = F(e, o.length, 0))) : (r = e),
      l(r.startsWith("/"), a),
      (r = i + (i.endsWith("/") ? "" : "/") + F(r, 1, 0));
  } else r = e;
  return (
    l(r.startsWith("/")),
    (r = r
      .split("/")
      .filter((o) => o !== "pages" && o !== "src" && o !== "index")
      .join("/")),
    l(!r.includes(".page.")),
    l(!r.endsWith(".")),
    r.endsWith("/index") && (r = F(r, 0, -6)),
    r === "" && (r = "/"),
    l(r.startsWith("/")),
    l(!r.endsWith("/") || r === "/"),
    r
  );
}
async function yn(e, t, n, s) {
  await Promise.all(
    e
      .filter((a) => a.fileType === ".page.route")
      .map((a) => {
        var c;
        return (c = a.loadFile) === null || c === void 0 ? void 0 : c.call(a);
      })
  );
  const { onBeforeRouteHook: r, filesystemRoots: o } = vn(e, t, n);
  return { pageRoutes: bn(o, e, t, s), onBeforeRouteHook: r };
}
function bn(e, t, n, s) {
  const r = [];
  let o = [...s];
  if (n.length > 0) {
    l(e === null);
    const i = !0;
    n.filter((a) => !a.isErrorPage).forEach((a) => {
      const c = a.pageId;
      o = Rn(o, c);
      let f = null;
      {
        const m = a.configElements.route;
        if (m) {
          l("configValue" in m);
          const h = m.configValue,
            _ = m.configDefinedAt;
          if ((l(_), typeof h == "string"))
            f = {
              pageId: c,
              comesFromV1PageConfig: i,
              routeString: h,
              routeDefinedAt: _,
              routeType: "STRING",
            };
          else {
            l(X(h));
            let y = !1;
            const d =
              a.configElements.iKnowThePerformanceRisksOfAsyncRouteFunctions;
            if (d) {
              const O = d.configValue;
              l(
                typeof O == "boolean",
                `${d.configDefinedAt} should be a boolean`
              ),
                (y = O);
            }
            f = {
              pageId: c,
              comesFromV1PageConfig: i,
              routeFunction: h,
              routeDefinedAt: _,
              routeType: "FUNCTION",
              allowAsync: y,
            };
          }
        }
      }
      if (!f) {
        const { routeFilesystem: m, routeFilesystemDefinedBy: h } = a;
        l(m),
          l(m.startsWith("/")),
          l(h),
          (f = {
            pageId: c,
            routeFilesystemDefinedBy: h,
            comesFromV1PageConfig: i,
            routeString: m,
            routeDefinedAt: null,
            routeType: "FILESYSTEM",
          });
      }
      l(f), r.push(f);
    });
  }
  if (n.length === 0) {
    l(e);
    const i = !1;
    o.filter((a) => !qe(a)).forEach((a) => {
      const c = Sn(a, t);
      if (c) {
        const { filePath: f, fileExports: m } = c;
        if (
          (l(m),
          u("default" in m, `${f} should have a default export.`),
          g(m, "default", "string"))
        ) {
          const h = m.default;
          u(
            h.startsWith("/"),
            `A Route String should start with a leading \`/\` but \`${f}\` has \`export default '${h}'\`. Make sure to \`export default '/${h}'\` instead.`
          ),
            r.push({
              pageId: a,
              comesFromV1PageConfig: i,
              routeString: h,
              routeDefinedAt: f,
              routeType: "STRING",
            });
          return;
        }
        if (g(m, "default", "function")) {
          const h = m.default;
          let _ = !1;
          const y = "iKnowThePerformanceRisksOfAsyncRouteFunctions";
          y in m &&
            (u(
              g(m, y, "boolean"),
              `The export \`${y}\` of ${f} should be a boolean.`
            ),
            (_ = m[y])),
            r.push({
              pageId: a,
              comesFromV1PageConfig: i,
              routeFunction: h,
              routeDefinedAt: f,
              allowAsync: _,
              routeType: "FUNCTION",
            });
          return;
        }
        u(!1, `The default export of ${f} should be a string or a function.`);
      } else {
        const f = _n(a, e);
        l(f.startsWith("/")),
          l(!f.endsWith("/") || f === "/"),
          r.push({
            pageId: a,
            comesFromV1PageConfig: i,
            routeString: f,
            routeDefinedAt: null,
            routeFilesystemDefinedBy: `${a}.page.*`,
            routeType: "FILESYSTEM",
          });
      }
    });
  }
  return r;
}
function vn(e, t, n) {
  if (t.length > 0) {
    if (n.onBeforeRoute) {
      const o = n.onBeforeRoute.configValue;
      if (o) {
        const i = n.onBeforeRoute.codeFilePath;
        return (
          l(i),
          u(
            X(o),
            `The hook onBeforeRoute() defined by ${i} should be a function.`
          ),
          {
            onBeforeRouteHook: { hookFilePath: i, onBeforeRoute: o },
            filesystemRoots: null,
          }
        );
      }
    }
    return { onBeforeRouteHook: null, filesystemRoots: null };
  }
  let s = null;
  const r = [];
  return (
    e
      .filter((o) => o.fileType === ".page.route" && o.isDefaultPageFile)
      .forEach(({ filePath: o, fileExports: i }) => {
        if ((l(i), "onBeforeRoute" in i)) {
          u(
            g(i, "onBeforeRoute", "function"),
            `\`export { onBeforeRoute }\` of ${o} should be a function.`
          );
          const { onBeforeRoute: a } = i;
          s = {
            hookFilePath: `${o} > \`export { onBeforeRoute }\``,
            onBeforeRoute: a,
          };
        }
        "filesystemRoutingRoot" in i &&
          (u(
            g(i, "filesystemRoutingRoot", "string"),
            `\`export { filesystemRoutingRoot }\` of ${o} should be a string.`
          ),
          u(
            g(i, "filesystemRoutingRoot", "string"),
            `\`export { filesystemRoutingRoot }\` of ${o} is \`'${i.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`
          ),
          r.push({ filesystemRoot: Pn(o), urlRoot: i.filesystemRoutingRoot }));
      }),
    { onBeforeRouteHook: s, filesystemRoots: r }
  );
}
function Sn(e, t) {
  return t.find((n) => n.pageId === e && n.fileType === ".page.route");
}
function Pn(e) {
  l(e.startsWith("/")), l(!e.endsWith("/"));
  const t = e.split("/"),
    n = F(t, 0, -1).join("/") || "/";
  return l(n.startsWith("/")), l(!n.endsWith("/") || n === "/"), n;
}
function Rn(e, t) {
  const { length: n } = e;
  return (e = e.filter((s) => s !== t)), l(e.length === n - 1), e;
}
function Oe(e, t = !0) {
  l(e.urlOriginal),
    "urlPathname" in e && l(V(e, "urlPathname")),
    Object.defineProperty(e, "urlPathname", {
      get: Ee,
      enumerable: t,
      configurable: !0,
    }),
    "url" in e && l(V(e, "url")),
    Object.defineProperty(e, "url", {
      get: wn,
      enumerable: !1,
      configurable: !0,
    }),
    "urlParsed" in e && l(V(e, "urlParsed")),
    Object.defineProperty(e, "urlParsed", {
      get: On,
      enumerable: t,
      configurable: !0,
    });
}
function xe(e) {
  let t = e._urlHandler;
  t || (t = (r) => r);
  const n = t(e.urlOriginal),
    s = e._baseServer;
  return l(s.startsWith("/")), L(n, s);
}
function Ee() {
  const { pathname: e } = xe(this),
    t = e;
  return l(t.startsWith("/")), t;
}
function wn() {
  return (
    S(
      !1,
      "`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",
      { onlyOnce: !0, showStackTrace: !0 }
    ),
    Ee.call(this)
  );
}
function On() {
  const e = xe(this),
    {
      origin: t,
      pathname: n,
      pathnameOriginal: s,
      search: r,
      searchAll: o,
      searchOriginal: i,
      hash: a,
      hashOriginal: c,
    } = e,
    f = {
      origin: t,
      pathname: n,
      pathnameOriginal: s,
      search: r,
      searchAll: o,
      searchOriginal: i,
      hash: a,
      hashOriginal: c,
      get hashString() {
        return (
          S(
            !1,
            "`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",
            { onlyOnce: !0, showStackTrace: !0 }
          ),
          c
        );
      },
      get searchString() {
        return (
          S(
            !1,
            "`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",
            { onlyOnce: !0, showStackTrace: !0 }
          ),
          i
        );
      },
    };
  return ae(f, "hashString"), ae(f, "searchString"), f;
}
function ae(e, t) {
  const n = Object.getOwnPropertyDescriptor(e, t);
  Object.defineProperty(e, t, { ...n, enumerable: !1 });
}
function xn(e) {
  l(typeof e.urlOriginal == "string"),
    l(typeof e.urlPathname == "string"),
    l(R(e.urlParsed)),
    l(e.urlPathname === e.urlParsed.pathname);
}
const Te = "@",
  Y = ":";
function En(e, t) {
  u(
    e.startsWith("/") || e === "*",
    (() => {
      t ? (t = t + " invalid") : (t = "Invalid");
      const n = [`'${e}'`, e !== "" ? null : "(empty string)"]
        .filter(Boolean)
        .join(" ");
      return `${t} Route String ${n}: Route Strings should start with a leading slash '/' (or be '*')`;
    })()
  );
}
function J(e, t) {
  En(e), l(t.startsWith("/"));
  const n = e.split("/"),
    s = t.split("/"),
    r = {};
  Tn(e), e === "*" && (e = "/*");
  for (let o = 0; o < Math.max(n.length, s.length); o++) {
    const i = n[o],
      a = s[o];
    if (i === "*")
      return (r["*"] = s.slice(Math.max(1, o)).join("/")), { routeParams: r };
    if (i && $(i)) {
      if (
        (S(
          !i.startsWith(Y),
          `Outdated Route String \`${e}\`, use \`${e
            .split(Y)
            .join(Te)}\` instead.`,
          { showStackTrace: !1, onlyOnce: !0 }
        ),
        !a)
      )
        return null;
      r[i.slice(1)] = a;
    } else if ((i || "") !== (a || "")) return null;
  }
  return { routeParams: r };
}
function Tn(e) {
  const t = e.split("*").length - 1;
  u(
    t <= 1,
    `Invalid Route String \`${e}\`: Route Strings are not allowed to contain more than one glob character \`*\`.`
  ),
    u(
      t === 0 || (t === 1 && e.endsWith("*")),
      `Invalid Route String \`${e}\`: make sure your Route String ends with the glob character \`*\`.`
    );
}
function C(e) {
  const t = e.split("/").filter((i) => i !== "" && i !== "*");
  let n = 0;
  for (const i of t) {
    if ($(i)) break;
    n++;
  }
  const s = t.filter((i) => !$(i)).length,
    r = t.filter((i) => $(i)).length,
    o = e.endsWith("*");
  return {
    numberOfParameterSegments: r,
    numberOfStaticSegmentsBeginning: n,
    numberOfStaticSegements: s,
    isCatchAll: o,
  };
}
function $(e) {
  return e.startsWith(Te) || e.startsWith(Y);
}
function le(e) {
  const n = J(e, e);
  return l(n), Object.keys(n.routeParams).length === 0;
}
function Cn(e) {
  e.sort(Fn)
    .sort(
      x((t) => t.routeType === "FUNCTION" && !!t.precedence && t.precedence < 0)
    )
    .sort(x((t) => t.routeType === "STRING" && le(t.routeString) === !1))
    .sort(x((t) => t.routeType === "FUNCTION" && !t.precedence))
    .sort(x((t) => t.routeType === "STRING" && le(t.routeString) === !0))
    .sort(x((t) => t.routeType === "FILESYSTEM"))
    .sort(
      x((t) => t.routeType === "FUNCTION" && !!t.precedence && t.precedence > 0)
    );
}
function Fn(e, t) {
  var n, s;
  {
    const r = (n = e.precedence) !== null && n !== void 0 ? n : 0,
      o = (s = t.precedence) !== null && s !== void 0 ? s : 0;
    if (r !== o) return r > o ? -1 : 1;
  }
  if (!t.routeString || !e.routeString) return 0;
  {
    const o = I((i) => C(i).numberOfStaticSegmentsBeginning)(
      e.routeString,
      t.routeString
    );
    if (o !== 0) return o;
  }
  {
    const o = I((i) => C(i).numberOfStaticSegements)(
      e.routeString,
      t.routeString
    );
    if (o !== 0) return o;
  }
  {
    const o = I((i) => C(i).numberOfParameterSegments)(
      e.routeString,
      t.routeString
    );
    if (o !== 0) return o;
  }
  {
    if (C(t.routeString).isCatchAll) return -1;
    if (C(e.routeString).isCatchAll) return 1;
  }
  return 0;
}
async function jn(e, t, n, s) {
  xn(n);
  let r = e(n);
  if (
    (u(
      !ft(r) || t,
      `The Route Function ${s} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`
    ),
    (r = await r),
    r === !1)
  )
    return null;
  if (
    (r === !0 && (r = {}),
    u(
      R(r),
      `The Route Function ${s} should return a boolean or a plain JavaScript object, instead it returns \`${
        g(r, "constructor") ? r.constructor : r
      }\`.`
    ),
    "match" in r)
  ) {
    const { match: a } = r;
    if (
      (u(
        typeof a == "boolean",
        `The \`match\` value returned by the Route Function ${s} should be a boolean.`
      ),
      !a)
    )
      return null;
  }
  let o = null;
  "precedence" in r &&
    ((o = r.precedence),
    u(
      typeof o == "number",
      `The \`precedence\` value returned by the Route Function ${s} should be a number.`
    )),
    Ce(
      r,
      `The \`routeParams\` object returned by the Route Function ${s} should`
    );
  const i = r.routeParams || {};
  return (
    u(
      !("pageContext" in r),
      "Providing `pageContext` in Route Functions is prohibited, see https://vite-plugin-ssr.com/route-function#cannot-provide-pagecontext"
    ),
    l(R(i)),
    Object.keys(r).forEach((a) => {
      u(
        a === "match" || a === "routeParams" || a === "precedence",
        `The Route Function ${s} returned an object with an unknown key \`{ ${a} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`
      );
    }),
    { precedence: o, routeParams: i }
  );
}
function Ce(e, t) {
  l(t.endsWith(" should")),
    g(e, "routeParams") &&
      (l(t.endsWith(" should")),
      u(R(e.routeParams), `${t} be a plain JavaScript object.`),
      u(mn(e.routeParams), `${t} only hold string values.`));
}
function te(e, { hook: t, errorMessagePrefix: n, isRenderErrorPage: s }) {
  const r = (() => {
    if (n) return n;
    {
      l(t);
      const { hookName: o, hookFilePath: i } = t;
      return (
        l(!o.endsWith(")")),
        `The \`pageContext\` object provided by the ${o}() hook defined by ${i}`
      );
    }
  })();
  u(D(e), `${r} should be an object instead of \`${typeof e}\``),
    u(
      !("_objectCreatedByVitePluginSsr" in e),
      `${r} shouldn't be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`
    ),
    S(
      !("_pageId" in e),
      `${r} sets \`pageContext._pageId\` which means that vite-plugin-ssr's routing is overriden. This is an experimental feature: make sure to contact a vite-plugin-ssr maintainer before using this.`,
      { showStackTrace: !1, onlyOnce: !0 }
    ),
    s ||
      u(
        !("is404" in e),
        `${r} sets \`pageContext.is404\` which is forbidden, use \`throw RenderErrorPage()\` instead, see https://vite-plugin-ssr.com/RenderErrorPage`
      );
}
async function An(e, t) {
  const n = await e.onBeforeRoute(t),
    s = `The onBeforeRoute() hook defined by ${e.hookFilePath}`;
  if (
    (u(
      n == null || (hn(n, ["pageContext"]) && g(n, "pageContext")),
      `${s} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`
    ),
    n == null)
  )
    return null;
  if (
    (u(
      g(n, "pageContext", "object"),
      `${s} returned \`{ pageContext }\` but pageContext should be a plain JavaScript object.`
    ),
    g(n.pageContext, "_pageId") && !g(n.pageContext, "_pageId", "null"))
  ) {
    const o = `${s} returned \`{ pageContext: { _pageId } }\` but _pageId should be`;
    u(g(n.pageContext, "_pageId", "string"), `${o} a string or null`),
      u(
        t._allPageIds.includes(n.pageContext._pageId),
        `${o} one of following values: \`[${t._allPageIds
          .map((i) => `'${i}'`)
          .join(", ")}]\`.`
      );
  }
  g(n.pageContext, "routeParams") &&
    Ce(
      n.pageContext,
      `${s} returned \`{ pageContext: { routeParams } }\` but routeParams should`
    );
  const r = {};
  return (
    g(n.pageContext, "url") &&
      (S(
        !1,
        `${s} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,
        { showStackTrace: !1, onlyOnce: !0 }
      ),
      (n.pageContext.urlOriginal = n.pageContext.url),
      delete n.pageContext.url),
    g(n.pageContext, "urlOriginal") &&
      (Xe(
        n.pageContext.urlOriginal,
        `${s} returned \`{ pageContext: { urlOriginal } }\` but urlOriginal`
      ),
      p(r, { _urlPristine: t.urlOriginal })),
    te(n.pageContext, {
      hook: { hookFilePath: e.hookFilePath, hookName: "onBeforeRoute" },
    }),
    p(r, n.pageContext),
    r
  );
}
var k;
function ue(...e) {
  var t, n;
  k ||
    (k =
      (n = (t = globalThis).__brillout_debug_createDebugger) === null ||
      n === void 0
        ? void 0
        : n.call(t, "vps:routing")),
    k && k(...e);
}
Q() && E();
async function Fe(e) {
  Oe(e);
  const { pageRoutes: t, onBeforeRouteHook: n } = await yn(
    e._pageFilesAll,
    e._pageConfigs,
    e._pageConfigGlobal,
    e._allPageIds
  );
  ue("Pages routes:", t);
  const s = {};
  if (n) {
    const c = await An(n, e);
    if (c) {
      if ((p(s, c), g(s, "_pageId", "string") || g(s, "_pageId", "null")))
        return (
          g(s, "routeParams")
            ? l(g(s, "routeParams", "object"))
            : p(s, { routeParams: {} }),
          p(s, {
            _routingProvidedByOnBeforeRouteHook: !0,
            _routeMatches: "CUSTOM_ROUTE",
          }),
          { pageContextAddendum: s }
        );
      p(e, s);
    }
  }
  p(s, { _routingProvidedByOnBeforeRouteHook: !1 });
  const r = e._allPageIds;
  l(r.length >= 0),
    u(
      e._pageFilesAll.length > 0 || e._pageConfigs.length > 0,
      "No *.page.js file found. You must create at least one *.page.js file."
    ),
    u(
      r.length > 0,
      "You must create at least one *.page.js file that isn't _default.page.*"
    );
  const { urlPathname: o } = e;
  l(o.startsWith("/"));
  const i = [];
  await Promise.all(
    t.map(async (c) => {
      const { pageId: f, routeType: m } = c;
      if (c.routeType === "FILESYSTEM") {
        const { routeString: h } = c,
          _ = J(h, o);
        if (_) {
          const { routeParams: y } = _;
          i.push({ pageId: f, routeParams: y, routeString: h, routeType: m });
        }
        return;
      }
      if (c.routeType === "STRING") {
        const { routeString: h } = c,
          _ = J(h, o);
        if (_) {
          const { routeParams: y } = _;
          l(m === "STRING"),
            i.push({ pageId: f, routeString: h, routeParams: y, routeType: m });
        }
        return;
      }
      if (c.routeType === "FUNCTION") {
        const { routeFunction: h, allowAsync: _, routeDefinedAt: y } = c,
          d = await jn(h, _, e, y);
        if (d) {
          const { routeParams: O, precedence: T } = d;
          i.push({ pageId: f, precedence: T, routeParams: O, routeType: m });
        }
        return;
      }
      l(!1);
    })
  ),
    Cn(i);
  const a = i[0];
  if (
    (ue(`Route matches for URL \`${o}\` (in precedence order):`, i),
    p(s, { _routeMatches: i }),
    !a)
  )
    return p(s, { _pageId: null, routeParams: {} }), { pageContextAddendum: s };
  {
    const { routeParams: c } = a;
    l(R(c)), p(s, { _pageId: a.pageId, routeParams: a.routeParams });
  }
  return { pageContextAddendum: s };
}
const ce = ["urlPathname", "urlParsed"],
  Nn = ["Page", "pageExports", "exports"];
function je(e) {
  [...Nn, ...ce].forEach((n) => {
    n in e &&
      (ce.includes(n)
        ? (l(n.startsWith("url")),
          S(
            !1,
            `\`pageContext.${n}\` is already available in the browser when using Client Routing; including \`${n}\` in \`passToClient\` has no effect.`,
            { showStackTrace: !1, onlyOnce: !0 }
          ))
        : S(
            !1,
            `\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,
            { showStackTrace: !1, onlyOnce: !0 }
          ),
      delete e[n]);
  });
}
const kn = "/";
function In(e, t, n) {
  const { pathnameOriginal: s, searchOriginal: r, hashOriginal: o } = L(e, kn);
  e.startsWith("/") && l(e === `${s}${r || ""}${o || ""}`, { url: e });
  const i = s.endsWith("/");
  let a;
  return (
    n && s !== "/"
      ? (i ? (a = F(s, 0, -1)) : (a = s),
        l(!a.endsWith("/"), { url: e }),
        l(a !== ""))
      : (a = s + (i ? "" : "/") + "index"),
    l(a),
    (a = a + t),
    `${a}${r || ""}${o || ""}`
  );
}
const $n = ".pageContext.json",
  Bn = !1;
function Hn(e) {
  return In(e, $n, Bn);
}
function Ln(e, t, n) {
  l(!n.endsWith(" "));
  const s = [],
    r = Object.keys(e);
  for (const o of r) t.includes(o) || s.push(o);
  u(
    s.length === 0,
    [
      n,
      "returned an object with following unknown keys:",
      se(s) + ".",
      "Only following keys are allowed:",
      se(t) + ".",
    ].join(" ")
  );
}
function Wn(e, t) {
  if (e == null) return;
  const n = `The onBeforeRender() hook defined by ${t}`;
  u(
    R(e),
    `${n} should return a plain JavaScript object or \`undefined\`/\`null\``
  ),
    Ln(e, ["pageContext"], n),
    e.pageContext &&
      te(e.pageContext, {
        hook: { hookName: "onBeforeRender", hookFilePath: t },
      });
}
async function Dn(e) {
  return e._isFirstRenderAttempt && we.isFirstUrl(e.urlOriginal)
    ? (l(g(e, "_isFirstRenderAttempt", "true")), Un(e))
    : (l(g(e, "_isFirstRenderAttempt", "false")), Vn(e));
}
async function Un(e) {
  const t = Qe();
  return (
    je(t),
    p(t, { isHydration: !0, _comesDirectlyFromServer: !0 }),
    p(t, await A(e._pageFilesAll, e._pageConfigs, t._pageId)),
    t
  );
}
async function zn(e) {
  const t = _e(e._pageFilesAll, e._pageConfigs);
  if (!t) throw new Error("No error page");
  const n = {
    isHydration: !1,
    _pageId: t,
    _pageContextRetrievedFromServer: null,
    _comesDirectlyFromServer: !1,
  };
  return p(n, await A(e._pageFilesAll, e._pageConfigs, n._pageId)), n;
}
async function Vn(e) {
  let t = {};
  p(t, { isHydration: !1 }),
    p(t, await Kn(e)),
    p(t, await A(e._pageFilesAll, e._pageConfigs, t._pageId));
  const n = await Mn({ ...e, ...t });
  if ((l([!0, !1].includes(n._comesDirectlyFromServer)), n._isError)) {
    (t = {}),
      l(n._comesDirectlyFromServer === !0),
      l(g(n, "is404", "boolean")),
      l(g(n, "pageProps", "object")),
      l(g(n.pageProps, "is404", "boolean")),
      l(!("serverSideError" in n));
    const s = _e(e._pageFilesAll, e._pageConfigs);
    return (
      l(s),
      p(t, { isHydration: !1, _pageId: s }),
      p(t, n),
      p(t, await A(e._pageFilesAll, e._pageConfigs, t._pageId)),
      t
    );
  } else return p(t, n), t;
}
async function Mn(e) {
  const t = Ze(e, "onBeforeRender");
  if (t) {
    const s = t.hookFn,
      r = {
        _comesDirectlyFromServer: !1,
        _pageContextRetrievedFromServer: null,
      },
      o = et({ ...e, ...r }, !0),
      i = await ye(() => s(o), "onBeforeRender", t.hookFilePath);
    Wn(i, t.hookFilePath);
    const a = i == null ? void 0 : i.pageContext;
    return p(r, a), r;
  }
  if (await Gn(e)) {
    const s = await qn(e),
      r = {};
    return (
      Object.assign(r, s),
      p(r, {
        _comesDirectlyFromServer: !0,
        _pageContextRetrievedFromServer: s,
      }),
      r
    );
  }
  return {
    _comesDirectlyFromServer: !1,
    _pageContextRetrievedFromServer: null,
  };
}
async function Gn(e) {
  if (e._pageConfigs.length > 0) {
    const t = tt(e._pageId, e._pageConfigs);
    return (
      !!K(t, "onBeforeRender") &&
      t.configElements.onBeforeRender.configEnv === "server-only"
    );
  } else {
    const { hasOnBeforeRenderServerSideOnlyHook: t } = await pn(
      e._pageFilesAll,
      e._pageId
    );
    return t;
  }
}
async function Kn(e) {
  const n = (await Fe(e)).pageContextAddendum;
  if (!n._pageId) {
    const s = new Error("No routing match");
    throw (Yn(s), s);
  }
  return l(g(n, "_pageId", "string")), n;
}
function Yn(e) {
  p(e, { _is404: !0 });
}
function Jn(e) {
  return D(e) && e._is404 === !0;
}
async function qn(e) {
  var t;
  const n = Hn(
      (t = e._urlPristine) !== null && t !== void 0 ? t : e.urlOriginal
    ),
    s = await fetch(n);
  {
    const a = s.headers.get("content-type"),
      c = a && a.includes("application/json");
    if (!c && s.status === 404) {
      B(e.urlOriginal);
      const f = new Error("Page doesn't exist");
      throw (Object.assign(f, { _abortRendering: !0 }), f);
    }
    u(
      c,
      `Wrong HTTP Response Header \`content-type\` value for URL ${n} (it should be \`application/json\` but we got \`${a}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`
    );
  }
  const r = await s.text(),
    o = nt(r);
  if ("serverSideError" in o)
    throw rt(
      "`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs."
    );
  l(g(o, "pageContext"));
  const i = o.pageContext;
  return l(R(i)), l(g(i, "_pageId", "string")), je(i), i;
}
function Ae() {
  const e = "/";
  return l(Xn(e)), e;
}
function Xn(e) {
  return e.startsWith("/");
}
const M = W("createPageContext.ts", {});
async function Ne(e) {
  M.pageFilesData || (M.pageFilesData = await ot(!0));
  const {
      pageFilesAll: t,
      allPageIds: n,
      pageConfigs: s,
      pageConfigGlobal: r,
    } = M.pageFilesData,
    o = Ae();
  l(be(o));
  const i = {
    _objectCreatedByVitePluginSsr: !0,
    _urlHandler: null,
    _baseServer: o,
    _isProduction: !0,
    _pageFilesAll: t,
    _pageConfigs: s,
    _pageConfigGlobal: r,
    _allPageIds: n,
  };
  return p(i, e), Oe(i), i;
}
async function ke(e) {
  const t = await Ne({ urlOriginal: e }),
    n = await Fe(t),
    s = t._pageFilesAll,
    r = t._pageConfigs;
  if (!("pageContextAddendum" in n))
    return { pageId: null, pageFilesAll: s, pageConfigs: r };
  const o = n.pageContextAddendum._pageId;
  return o
    ? { pageId: o, pageFilesAll: s, pageConfigs: r }
    : { pageId: null, pageFilesAll: s, pageConfigs: r };
}
function j(e) {
  return e.fileType === ".css"
    ? []
    : e.exportNames
    ? e.exportNames
    : (l(e.fileExports, e.filePath), Object.keys(e.fileExports));
}
function Qn({ pageFilesClientSide: e, pageFilesServerSide: t, pageId: n }) {
  return { isHtmlOnly: s(), isClientRouting: o() };
  function s() {
    return t.some((a) => a.pageId === n && a.fileType === ".page")
      ? (r(), !1)
      : !(
          !t.some((a) => a.pageId === n && a.fileType === ".page.server") ||
          e.some(
            (a) =>
              a.pageId === n &&
              a.fileType === ".page.client" &&
              j(a).includes("render")
          )
        );
  }
  function r() {
    const i = e.some((a) => j(a).includes("render"));
    u(
      i,
      [
        "No client-side `render()` hook found.",
        "See https://vite-plugin-ssr.com/render-modes for more information.",
        [
          "Loaded client-side page files (none of them `export { render }`):",
          ...e.map((a, c) => ` (${c + 1}): ${a.filePath}`),
        ].join(`
`),
      ].join(" ")
    );
  }
  function o() {
    return e.some((a) => j(a).includes("clientRouting"));
  }
}
function Zn({
  pageFilesClientSide: e,
  pageFilesServerSide: t,
  isHtmlOnly: n,
  isClientRouting: s,
}) {
  let r = [];
  const o = t.filter((a) => !e.includes(a)),
    i = [];
  if (
    (i.push(
      ...e.map((a) => ({ id: a.filePath, onlyAssets: !1, eagerlyImported: !1 }))
    ),
    i.push(
      ...o.map((a) => ({ id: a.filePath, onlyAssets: !0, eagerlyImported: !1 }))
    ),
    n)
  )
    r = e.map((a) => a.filePath);
  else {
    const a = er(s);
    i.push({ id: a, onlyAssets: !1, eagerlyImported: !1 }), (r = [a]);
  }
  return { clientEntries: r, clientDependencies: i };
}
function er(e) {
  return e
    ? "@@vite-plugin-ssr/dist/esm/client/router/entry.js"
    : "@@vite-plugin-ssr/dist/esm/client/entry.js";
}
function tr(e, t) {
  let n = ve(e, t);
  const s = me(e, t),
    { isHtmlOnly: r, isClientRouting: o } = Qn({
      pageFilesClientSide: n,
      pageFilesServerSide: s,
      pageId: t,
    });
  r &&
    ((n = n.filter((c) => c.isEnv("CLIENT_ONLY") && !j(c).includes("render"))),
    (n = rr(n)));
  const { clientEntries: i, clientDependencies: a } = Zn({
    pageFilesClientSide: n,
    pageFilesServerSide: s,
    isHtmlOnly: r,
    isClientRouting: o,
  });
  return {
    isHtmlOnly: r,
    isClientRouting: o,
    clientEntries: i,
    clientDependencies: a,
    pageFilesClientSide: n,
    pageFilesServerSide: s,
  };
}
async function nr(e, t, { sharedPageFilesAlreadyLoaded: n }) {
  const s = ve(e, t);
  await Promise.all(
    s.map(async (r) => {
      var o;
      l(r.isEnv("CLIENT_ONLY") || r.isEnv("CLIENT_AND_SERVER")),
        !(n && r.isEnv("CLIENT_AND_SERVER")) &&
          (await ((o = r.loadExportNames) === null || o === void 0
            ? void 0
            : o.call(r)));
    })
  );
}
function rr(e) {
  const t = [];
  for (const n of e)
    if ((t.push(n), j(n).includes("overrideDefaultPages"))) break;
  return t;
}
function or(e, t, n) {
  var s;
  if (e) {
    const r =
        (s = st(e, "clientRouting", "boolean")) !== null && s !== void 0
          ? s
          : !1,
      o = !!K(e, "onRenderClient"),
      i = !!K(e, "Page") && e.configElements.Page.configEnv !== "server-only";
    return { isClientSideRenderable: o && i, isClientRouting: r };
  } else {
    const { isHtmlOnly: r, isClientRouting: o } = tr(t, n);
    return { isClientSideRenderable: !r, isClientRouting: o };
  }
}
async function Ie(e) {
  const { pageId: t, pageFilesAll: n, pageConfigs: s } = await ke(e);
  if (!t) return !1;
  await nr(n, t, { sharedPageFilesAlreadyLoaded: !1 });
  const r = it(s, t),
    { isClientSideRenderable: o, isClientRouting: i } = or(r, n, t);
  return o && i;
}
function $e(e) {
  const t = e.getAttribute("href");
  return !!(
    t === null ||
    t === "" ||
    Re(t) ||
    sr(e) ||
    ir(t) ||
    !ar(t) ||
    !at(t)
  );
}
function sr(e) {
  const t = e.getAttribute("target"),
    n = e.getAttribute("rel");
  return (
    t === "_blank" ||
    t === "_external" ||
    n === "external" ||
    e.hasAttribute("download")
  );
}
function ir(e) {
  if (e.startsWith("#")) return !0;
  const t = (n) => n.split("#")[0];
  return !!(e.includes("#") && t(e) === t(window.location.href));
}
function ar(e) {
  const t = Ae();
  l(be(t));
  const { hasBaseServer: n } = L(e, t);
  return n;
}
function lr(e, t) {
  let n = ur(e, t);
  return (
    n === "viewport" &&
      !e._isProduction &&
      (Se(!1, "Viewport prefetching is disabled in development", {
        onlyOnce: !0,
      }),
      (n = "hover")),
    { prefetchStaticAssets: n }
  );
}
function ur(e, t) {
  {
    const n = cr(t);
    if (n !== null) return n;
  }
  if (
    ("prefetchLinks" in e.exports &&
      u(
        !1,
        "`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."
      ),
    "prefetchStaticAssets" in e.exports)
  ) {
    const { prefetchStaticAssets: n } = e.exports;
    if (n === !1) return !1;
    if (n === "hover") return "hover";
    if (n === "viewport") return "viewport";
    const s =
      "prefetchStaticAssets value should be false, 'hover', or 'viewport'";
    u(R(n), s);
    const r = Object.keys(n);
    u(r.length === 1 && r[0] === "when", s);
    const { when: o } = n;
    if (o === "HOVER" || o === "VIEWPORT") {
      const i = o.toLowerCase();
      return (
        S(
          !1,
          `prefetchStaticAssets value \`{ when: '${o}' }\` is outdated: set prefetchStaticAssets to '${i}' instead`,
          { onlyOnce: !0, showStackTrace: !1 }
        ),
        i
      );
    }
    u(!1, s);
  }
  return "hover";
}
function cr(e) {
  const t = e.getAttribute("data-prefetch-static-assets"),
    n = e.getAttribute("data-prefetch");
  if (t === null && n === null) return null;
  const s =
    "The attribute data-prefetch is outdated, use data-prefetch-static-assets instead.";
  if (t) {
    if ((u(n === null, s), t === "hover" || t === "viewport")) return t;
    if (t === "false") return !1;
    u(
      !1,
      `data-prefetch-static-assets has value "${t}" but it should instead be "false", "hover", or "viewport"`
    );
  }
  if (n) {
    if ((l(!t), S(!1, s, { showStackTrace: !1, onlyOnce: !0 }), n === "true"))
      return "viewport";
    if (n === "false") return "hover";
    u(
      !1,
      `data-prefetch has value "${n}" but it should instead be "true" or "false"`
    );
  }
  l(!1);
}
const Be = new Map();
function He(e) {
  const t = We(e);
  return Be.has(t);
}
function Le(e) {
  const t = We(e);
  Be.set(t, !0);
}
function We(e) {
  return ln(e);
}
E();
const fe = new Map();
async function G(e) {
  if (
    (u(
      lt(),
      "prefetch() only works with Client Routing, see https://vite-plugin-ssr.com/prefetch"
    ),
    u(
      !Re(e),
      `You are trying to prefetch the URL ${e} of another domain which cannot be prefetched`
    ),
    He(e))
  )
    return;
  Le(e);
  const { pageId: t, pageFilesAll: n, pageConfigs: s } = await ke(e);
  if (t)
    try {
      await A(n, s, t);
    } catch (r) {
      if (Z(r)) q(r, !0);
      else throw r;
    }
}
function fr(e) {
  Le(e.urlOriginal),
    [...document.getElementsByTagName("A")].forEach(async (n) => {
      if (fe.has(n)) return;
      fe.set(n, !0);
      const s = n.getAttribute("href");
      if ($e(n)) return;
      l(s);
      try {
        if (!(await Ie(s))) return;
      } catch {
        return;
      }
      if (He(s)) return;
      const { prefetchStaticAssets: r } = lr(e, n);
      if (r) {
        if (r === "hover")
          n.addEventListener("mouseover", () => G(s)),
            n.addEventListener("touchstart", () => G(s), { passive: !0 });
        else if (r === "viewport") {
          const o = new IntersectionObserver((i) => {
            i.forEach((a) => {
              a.isIntersecting && (G(s), o.disconnect());
            });
          });
          o.observe(n);
        }
      } else return;
    });
}
function De() {
  let e = window.history.state;
  e || (e = {});
  let t = !1;
  "timestamp" in e || ((t = !0), (e.timestamp = ze())),
    "scrollPosition" in e || ((t = !0), (e.scrollPosition = Ue())),
    Ve(e),
    t && re(e);
}
function ne() {
  const e = window.history.state || {};
  return Ve(e), e;
}
function Ue() {
  return { x: window.scrollX, y: window.scrollY };
}
function ze() {
  return new Date().getTime();
}
function de() {
  const e = Ue(),
    t = ne();
  re({ ...t, scrollPosition: e });
}
function dr(e, t) {
  if (t) re(ne(), e);
  else {
    const n = ze();
    gr({ timestamp: n, scrollPosition: null }, e);
  }
}
function Ve(e) {
  if ((l(D(e)), "timestamp" in e)) {
    const { timestamp: t } = e;
    l(typeof t == "number");
  }
  if ("scrollPosition" in e) {
    const { scrollPosition: t } = e;
    t !== null && l(g(t, "x", "number") && g(t, "y", "number"));
  }
}
function re(e, t) {
  window.history.replaceState(e, "", t ?? null);
}
function gr(e, t) {
  window.history.pushState(e, "", t);
}
E();
const pr = W("navigate.ts", {});
function hr(e) {
  pr.navigate = e;
}
const Me = "__isRenderErrorPageException";
function ge(e) {
  return mr(e), typeof e == "object" && e !== null && Me in e;
}
function Ge({ pageContext: e } = {}) {
  {
    const n = this;
    u(
      !(typeof n == "object" && (n == null ? void 0 : n.constructor) === Ge),
      "Don't use the `new` operator: use `throw RenderErrorPage()` instead of `throw new RenderErrorPage()`."
    );
  }
  te(e, {
    errorMessagePrefix:
      "The `pageContext` object provided by `throw RenderErrorPage({ pageContext })`",
    isRenderErrorPage: !0,
  });
  const t = new Error("RenderErrorPage");
  return p(t, { pageContext: e, [Me]: !0 }), t;
}
function mr(e) {
  u(
    e !== Ge,
    "Missing parentheses `()` in `throw RenderErrorPage`: it should be `throw RenderErrorPage()`."
  );
}
const v = W("useClientRouter.ts", { previousState: H() });
wr();
De();
function q(e, t) {
  l(Z(e)),
    (v.clientRoutingIsDisabled = !0),
    t && console.log(e),
    Se(
      !1,
      [
        "Failed to fetch static asset.",
        "This usually happens when a new frontend is deployed.",
        "Falling back to Server Routing.",
        "(The next page navigation will use Server Routing instead of Client Routing.)",
      ]
        .filter(Boolean)
        .join(" "),
      { onlyOnce: !0 }
    );
}
function _r() {
  Pr(),
    yr((r, { keepScrollPosition: o }) => {
      s({
        scrollTarget: o ? "preserve-scroll" : "scroll-to-top-or-hash",
        url: r,
        isBackwardNavigation: !1,
        checkClientSideRenderable: !0,
      });
    }),
    br((r, o) => {
      s({ scrollTarget: r, isBackwardNavigation: o });
    }),
    hr(
      async (
        r,
        { keepScrollPosition: o = !1, overwriteLastHistoryEntry: i = !1 } = {}
      ) => {
        await s({
          scrollTarget: o ? "preserve-scroll" : "scroll-to-top-or-hash",
          url: r,
          overwriteLastHistoryEntry: i,
          isBackwardNavigation: !1,
          checkClientSideRenderable: !0,
        });
      }
    );
  let e = 0,
    t,
    n = !1;
  s({ scrollTarget: "preserve-scroll", isBackwardNavigation: null });
  return;
  async function s({
    scrollTarget: r,
    url: o = N(),
    overwriteLastHistoryEntry: i = !1,
    isBackwardNavigation: a,
    checkClientSideRenderable: c,
  }) {
    var f;
    if (v.clientRoutingIsDisabled) {
      B(o);
      return;
    }
    if (c) {
      let b;
      try {
        b = await Ie(o);
      } catch (P) {
        if (ge(P)) b = !0;
        else throw P;
      }
      if (!b) {
        B(o);
        return;
      }
    }
    const m = { urlOriginal: o, isBackwardNavigation: a },
      h = ++e;
    l(h >= 1),
      h > 1 &&
        n === !1 &&
        ((f = v.onPageTransitionStart) === null || f === void 0 || f.call(v, m),
        (n = !0));
    let _ = !1;
    const y = () => (h === 1 && _ === !1 ? !1 : h !== e),
      d = await Ne(m);
    if (y()) return;
    const O = h === 1;
    p(d, { _isFirstRenderAttempt: O });
    let T;
    try {
      T = await Dn(d);
    } catch (b) {
      if ((console.error(b), he(b, d))) return;
      ge(b)
        ? (p(d, { is404: !0 }), p(d, b.pageContext))
        : p(d, { is404: Jn(b) });
      try {
        T = await zn(d);
      } catch (P) {
        if (
          he(P, d) ||
          (O ||
            setTimeout(() => {
              window.location.pathname = o;
            }, 0),
          cn(b, P))
        )
          return;
        throw P;
      }
    }
    if (
      (p(d, T),
      z(d, "onPageTransitionStart"),
      (v.onPageTransitionStart = d.exports.onPageTransitionStart),
      d.exports.hydrationCanBeAborted
        ? (_ = !0)
        : S(
            !un(),
            "You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting",
            { showStackTrace: !1, onlyOnce: !0 }
          ),
      !y() && (t && (await t), !y()))
    ) {
      if (
        (vr(o, i),
        we.markNavigationChange(),
        l(t === void 0),
        (t = (async () => {
          await ut(d, !0), fr(d);
        })()),
        await t,
        (t = void 0),
        d._isFirstRenderAttempt)
      ) {
        z(d, "onHydrationEnd");
        const { onHydrationEnd: b } = d.exports;
        if (b) {
          const P = d.exportsAll.onHydrationEnd[0].exportSource;
          l(P), await ye(() => b(d), "onHydrationEnd", P);
        }
      } else
        h === e &&
          (d.exports.onPageTransitionEnd &&
            (z(d, "onPageTransitionEnd"), d.exports.onPageTransitionEnd(d)),
          (n = !1));
      Ke(r), oe(), (v.initialRenderIsDone = !0);
    }
  }
}
function yr(e) {
  document.addEventListener("click", t);
  return;
  async function t(r) {
    if (!n(r)) return;
    const o = s(r.target);
    if (!o) return;
    const i = o.getAttribute("href");
    if ($e(o)) return;
    l(i), r.preventDefault();
    const a = ![null, "false"].includes(o.getAttribute("keep-scroll-position"));
    e(i, { keepScrollPosition: a });
  }
  function n(r) {
    return (
      r.button === 0 && !r.ctrlKey && !r.shiftKey && !r.altKey && !r.metaKey
    );
  }
  function s(r) {
    for (; r.tagName !== "A"; ) {
      const { parentNode: o } = r;
      if (!o) return null;
      r = o;
    }
    return r;
  }
}
function br(e) {
  window.addEventListener("popstate", () => {
    const t = H(),
      n = t.historyState.scrollPosition || "scroll-to-top-or-hash",
      s = t.urlWithoutHash === v.previousState.urlWithoutHash,
      r =
        !t.historyState.timestamp || !v.previousState.historyState.timestamp
          ? null
          : t.historyState.timestamp < v.previousState.historyState.timestamp;
    (v.previousState = t),
      s
        ? window.history.state === null
          ? (De(), (v.previousState = H()))
          : Ke(n)
        : e(n, r);
  });
}
function vr(e, t) {
  N() !== e && (oe(), dr(e, t), (v.previousState = H()));
}
function H() {
  return { urlWithoutHash: N({ withoutHash: !0 }), historyState: ne() };
}
function Ke(e) {
  if (e === "preserve-scroll") return;
  let t;
  if (e === "scroll-to-top-or-hash") {
    const n = Rr();
    if (n && n !== "top") {
      const s = document.getElementById(n) || document.getElementsByName(n)[0];
      if (s) {
        s.scrollIntoView();
        return;
      }
    }
    t = { x: 0, y: 0 };
  } else l("x" in e && "y" in e), (t = e);
  Sr(t);
}
function Sr(e) {
  const t = () => window.scrollTo(e.x, e.y),
    n = () => window.scrollX === e.x && window.scrollY === e.y;
  n() ||
    (t(),
    !n() &&
      requestAnimationFrame(() => {
        t(),
          !n() &&
            setTimeout(async () => {
              if ((t(), n())) return;
              const s = new Date().getTime();
              for (;;)
                if ((await fn(10), t(), n() || new Date().getTime() - s > 100))
                  return;
            }, 0);
      }));
}
function Pr() {
  window.addEventListener("scroll", dn(de, Math.ceil(1e3 / 3)), {
    passive: !0,
  }),
    Ye(de);
}
function Rr() {
  let { hash: e } = window.location;
  return e === "" ? null : (l(e.startsWith("#")), (e = e.slice(1)), e);
}
function wr() {
  pe(), Ye(pe), Or(() => v.initialRenderIsDone && oe());
}
function oe() {
  "scrollRestoration" in window.history &&
    (window.history.scrollRestoration = "manual");
}
function pe() {
  "scrollRestoration" in window.history &&
    (window.history.scrollRestoration = "auto");
}
function Ye(e) {
  window.addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && e();
  });
}
function Or(e) {
  window.addEventListener("visibilitychange", () => {
    document.visibilityState === "visible" && e();
  });
}
function he(e, t) {
  return !!((D(e) && e._abortRendering) || xr(e, t));
}
function xr(e, t) {
  if (!Z(e)) return !1;
  if (t._isFirstRenderAttempt) throw (q(e, !1), e);
  return q(e, !0), B(t.urlOriginal), !0;
}
E();
ct(!0);
_r();
