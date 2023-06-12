function ve(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function N(e,t){let n;{var s=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=s}return ve()&&(n.stack=Ee(n.stack,t)),n}function Ee(e,t){if(!e)return e;const n=be(e);let s=0;return n.filter(o=>o.includes(" (internal/")||o.includes(" (node:internal")?!1:s<t&&$e(o)?(s++,!1):!0).join(`
`)}function $e(e){return e.startsWith("    at ")}function be(e){return e.split(/\r?\n/)}function F(e,t){const n=globalThis.__vite_plugin_ssr=globalThis.__vite_plugin_ssr||{};return n[e]=n[e]||t}function V(e){return Array.from(new Set(e))}const E=F("assertPackageInstances.ts",{instances:[],alreadyLogged:new Set}),se="Make sure your client-side code doesn't include(/bundle)",ie=`The client runtime of Server Routing and the client runtime of Client Routing are both being loaded. ${se} both for a given page.`,z=`Two vite-plugin-ssr client runtime instances are being loaded. ${se} vite-plugin-ssr twice. (In order to reduce the size of your client-side JavaScript bundles.)`;function B(){{const e=V(E.instances);if(e.length>1){const t=`Both vite-plugin-ssr@${e[0]} and vite-plugin-ssr@${e[1]} loaded. Only one version should be loaded.`;_e(!1,t)}}E.checkSingleInstance&&E.instances.length>1&&T(!1,z,{onlyOnce:!0,showStackTrace:!0})}function Vt(e){T(E.isClientRouting!==!0,ie,{onlyOnce:!0,showStackTrace:!0}),T(E.isClientRouting===void 0,z,{onlyOnce:!0,showStackTrace:!0}),E.isClientRouting=!1,e&&(E.checkSingleInstance=!0),B()}function zt(e){T(E.isClientRouting!==!1,ie,{onlyOnce:!0,showStackTrace:!0}),T(E.isClientRouting===void 0,z,{onlyOnce:!0,showStackTrace:!0}),E.isClientRouting=!0,e&&(E.checkSingleInstance=!0),B()}function Re(e){E.instances.push(e),B()}function _e(e,t){if(e)return;const n=`[vite-plugin-ssr][Wrong Usage] ${t}`;throw new Error(n)}function T(e,t,{onlyOnce:n,showStackTrace:s}){if(e)return;const i=`[vite-plugin-ssr][Warning] ${t}`;if(n){const{alreadyLogged:o}=E,l=n===!0?i:n;if(o.has(l))return;o.add(l)}console.warn(s?new Error(i):i)}const we="0.4.131",w={projectName:"vite-plugin-ssr",projectVersion:we,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr"};Re(w.projectVersion);const b=F("assert.ts",{alreadyLogged:new Set}),P=`[${w.npmPackageName}@${w.projectVersion}]`,Se=`${P}[Bug]`,Pe=`${P}[Wrong Usage]`,Te=`${P}[Warning]`,Ie=`${P}[Info]`,U=2;function r(e,t){var n;if(e)return;const s=(()=>{if(!t)return null;const o=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${w.projectName} maintainers; you can ignore this): ${o}`})(),i=N([`${Se} You stumbled upon a bug in ${w.projectName}'s source code.`,`Go to ${w.githubRepository}/issues/new and copy-paste this error. (The error's stack trace is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Don't hesitate to reach out as it makes ${w.projectName} more robust.`,s].filter(Boolean).join(" "),U);throw(n=b.onBeforeLog)===null||n===void 0||n.call(b),i}function y(e,t){var n;if(e)return;const s=t.startsWith("[")?"":" ",i=`${Pe}${s}${t}`,o=N(i,U);throw(n=b.onBeforeLog)===null||n===void 0||n.call(b),o}function Fe(e){const t=e.startsWith("[")?"":" ";return N(`${P}${t}${e}`,U)}function I(e,t,{onlyOnce:n=!0,showStackTrace:s=!1}={}){var i;if(e)return;const o=`${Te} ${t}`;if(n){const{alreadyLogged:l}=b,a=n===!0?o:n;if(l.has(a))return;l.add(a)}(i=b.onBeforeLog)===null||i===void 0||i.call(b),console.warn(s?new Error(o):o)}function Bt(e,t,{onlyOnce:n}){var s;if(e)return;const i=`${Ie} ${t}`;if(n){const{alreadyLogged:o}=b,l=i;if(o.has(l))return;o.add(l)}(s=b.onBeforeLog)===null||s===void 0||s.call(b),console.log(i)}function M(){return typeof window<"u"&&typeof window.scrollY=="number"}const j=F("utils/assertRouterType.ts",{});function Ut(){re(Le()),j.isClientRouting=!0}function Le(){return j.isClientRouting!==!1}function Mt(){re(j.isClientRouting!==!0),j.isClientRouting=!1}function re(e){y(M(),"`import { something } from 'vite-plugin-ssr/client/router'` is forbidden on the server-side"),I(e,"You shouldn't `import { something } from 'vite-plugin-ssr/client/router'` when using Server Routing. The 'vite-plugin-ssr/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` when using Server Routing as these will unnecessarily bloat your client-side bundle.",{showStackTrace:!1,onlyOnce:!0})}const je=["js","ts","cjs","cts","mjs","mts","jsx","tsx","cjsx","ctsx","mjsx","mtsx"],oe=["vue","svelte","marko","md","mdx"],Oe=[...je,...oe];function le(e){const t=Oe.some(n=>e.endsWith("."+n));return r(!ke(e)||t),t}function ke(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function We(e){return oe.some(t=>e.endsWith("."+t))}function O(e,t,n){return typeof e=="string"?Y(e.split(""),t,n).join(""):Y(e,t,n)}function Y(e,t,n){const s=[];let i=t>=0?t:e.length+t;r(i>=0&&i<=e.length);let o=n>=0?n:e.length+n;for(r(o>=0&&o<=e.length);!(i===o||(i===e.length&&(i=0),i===o));){const l=e[i];r(l!==void 0),s.push(l),i++}return s}function ae(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith("tauri://")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function Ht(e,t){r(t.includes(" but ")),y(typeof e=="string",`${t} should be a string`),!ae(e)&&(!e.startsWith("/")&&!e.includes(":")?y(!1,`${t} is '${e}' and it should be '/${e}' instead (URL pathnames should start with a leading slash)`):y(!1,`${t} isn't a valid URL`))}function xe(e,t){r(ae(e),{url:e}),r(t.startsWith("/"),{url:e,baseServer:t});const[n,...s]=e.split("#");r(n!==void 0);const i=["",...s].join("#")||null;r(i===null||i.startsWith("#"));const o=i===null?"":C(i.slice(1)),[l,...a]=n.split("?");r(l!==void 0);const c=["",...a].join("?")||null;r(c===null||c.startsWith("?"),{url:e,searchOriginal:c});const u={},g={};Array.from(new URLSearchParams(c||"")).forEach(([v,J])=>{u[v]=J,g[v]=[...g[v]||[],J]});const{origin:f,pathnameResolved:p}=Ae(l,t);r(f===null||f===C(f),{origin:f}),r(p.startsWith("/"),{url:e,pathnameResolved:p}),r(f===null||e.startsWith(f),{url:e,origin:f});const h=l.slice((f||"").length);{const v=`${f||""}${h}${c||""}${i||""}`;r(e===v,{url:e,urlRecreated:v})}let{pathname:m,hasBaseServer:R}=Ne(p,t);return m=Ce(m),r(m.startsWith("/")),{origin:f,pathname:m,pathnameOriginal:h,hasBaseServer:R,search:u,searchAll:g,searchOriginal:c,hash:o,hashOriginal:i}}function C(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function Ce(e){return e.split("/").map(t=>C(t).split("/").join("%2F")).join("/")}function Ae(e,t){var n;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let s=!1;const i="tauri://",o="http://";e.startsWith(i)&&(s=!0,e=o+e.slice(i.length));let l,a;try{const c=new URL(e);l=c.origin,a=c.pathname}catch{l=null;let u=typeof window<"u"&&((n=window==null?void 0:window.document)===null||n===void 0?void 0:n.baseURI);u=u||"http://fake.example.org"+t,a=new URL(e,u).pathname}return a||(a="/"),s&&(r(l),r(l.startsWith(o)),l=i+l.slice(o.length)),r(a.startsWith("/"),{urlWithoutSearch:e,pathnameResolved:a}),r(a===a.split("?")[0].split("#")[0]),{origin:l,pathnameResolved:a}}function De(e){r(e.startsWith("/")),r(!e.includes("?")),r(!e.includes("#"))}function Ne(e,t){De(e),r(Ve(t));let n=e;if(r(n.startsWith("/")),r(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let s=t;return t.endsWith("/")&&n===O(t,0,-1)&&(s=O(t,0,-1),r(n===s)),n.startsWith(s)?(r(n.startsWith("/")||n.startsWith("http")),r(n.startsWith(s)),n=n.slice(s.length),n.startsWith("/")||(n="/"+n),r(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function Ve(e){return e.startsWith("/")}function H(e,t){Object.assign(e,t)}function k(e){return e instanceof Function||typeof e=="function"}function $(e){return typeof e=="object"&&e!==null}function Gt(e){return(t,n)=>{const s=e(t),i=e(n);return s===i?0:s>i?-1:1}}function ze(e){return(t,n)=>{const s=e(t),i=e(n);if(r([!0,!1,null].includes(s)),r([!0,!1,null].includes(i)),s===i)return 0;if(s===!0||i===!1)return-1;if(i===!0||s===!1)return 1;r(!1)}}function Be(e){return ze(t=>{const n=e(t);return n===null?null:!n})}function d(e,t,n="unknown"){if(!$(e))return!1;if(!(t in e))return n==="undefined";if(n==="unknown")return!0;const s=e[t];return n==="array"?Array.isArray(s):n==="object"?$(s):n==="string[]"?Array.isArray(s)&&s.every(i=>typeof i=="string"):n==="function"?k(s):Array.isArray(n)?typeof s=="string"&&n.includes(s):n==="null"?s===null:n==="undefined"?s===void 0:n==="true"?s===!0:n==="false"?s===!1:typeof s===n}function Ue(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const Me=e=>e!=null,He="\\";function ce(e){const t=n=>`Not a posix path: ${n}`;r(e!==null,t("null")),r(typeof e=="string",t(`typeof path === '${typeof e}'`)),r(e!=="",t("(empty string)")),r(e),r(!e.includes(He),t(e))}const q=/[^a-zA-Z-_]/;function ue(e){return Ge(e)!==null}function Ge(e){if(e===void 0||e.includes("\\")||e.startsWith("/"))return null;let t=null;if(e.startsWith("@")){if(!e.includes("/"))return null;const[a,...c]=e.split("/");t=a,e=c.join("/"),r(t&&t.startsWith("@"))}if(e==="")return null;const[n,...s]=e.split("/"),i=n,o=s.length===0?null:s.join("/");return r(i),r(o===null||!o.startsWith("/")),q.test(i)||t&&q.test(t.slice(1))?null:(r(!i.startsWith("/")),{npmPackageName:t?`${t}/${i}`:i,importPath:o})}const Je=["$$registrations","_rerender_only"],Ye=[".md",".mdx"];function qe(e,t){Ke(e,t,!0)}function Ke(e,t,n){const i=Object.keys(e).filter(a=>!Je.includes(a)),o=i.filter(a=>a!=="default"),l=i.includes("default");if(o.length===0){if(l)return;r(i.length===0),y(!1,`${t} doesn't export any value, but it should have a \`export default\` instead`)}else if(!Ye.some(a=>t.endsWith(a))){const a=o.join(", ");n?I(o.length===0,`${t} should only have a default export: remove \`export { ${a} }\``,{onlyOnce:!0,showStackTrace:!1}):I(o.length===0,`${t} replace \`export { ${a} }\` with \`export default { ${a} }\``,{onlyOnce:!0,showStackTrace:!1})}}function Qe(e){return Object.entries(e)}const Xe=["clientRouting"];function Ze(e){Xe.forEach(t=>{if(r(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;y(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),y(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const fe=["render","clientRouting","prerender","doNotPrerender"];function et(e,t){y(!fe.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function tt(e,t){const n={},s={},i={};if(e.forEach(a=>{nt(a).forEach(({exportName:u,exportValue:g,isFromDefaultExport:f})=>{var p;r(u!=="default"),i[u]=(p=i[u])!==null&&p!==void 0?p:[],i[u].push({exportValue:g,exportSource:`${a.filePath} > ${f?`\`export default { ${u} }\``:`\`export { ${u} }\``}`,filePath:a.filePath,_filePath:a.filePath,_fileType:a.fileType,_isFromDefaultExport:f})})}),t){const{configValues:a}=t;Qe(a).forEach(([c,u])=>{var g,f,p;const h=t.configElements[c];r(h);const{configDefinedByFile:m,configDefinedAt:R}=h;r(m),s[c]=(g=s[c])!==null&&g!==void 0?g:u,n[c]=(f=n[c])!==null&&f!==void 0?f:[],r(n[c].length===0),n[c].push({configValue:u,configDefinedAt:R,configDefinedByFile:m});const v=c;i[v]=(p=i[v])!==null&&p!==void 0?p:[],i[v].push({exportValue:u,exportSource:R,filePath:m,_filePath:m,_fileType:null,_isFromDefaultExport:null})})}const o=st(),l={};return Object.entries(i).forEach(([a,c])=>{c.forEach(({exportValue:u,_fileType:g,_isFromDefaultExport:f})=>{var p;l[a]=(p=l[a])!==null&&p!==void 0?p:u,g===".page"&&!f&&(a in o||(o[a]=u))})}),r(!("default"in l)),r(!("default"in i)),{config:s,configEntries:n,exports:l,exportsAll:i,pageExports:o}}function nt(e){const{filePath:t,fileExports:n}=e;r(n),r(le(t));const s=[];return Object.entries(n).sort(Be(([i])=>i==="default")).forEach(([i,o])=>{let l=i==="default";if(l)if(We(t))i="Page";else{y($(o),`The \`export default\` of ${t} should be an object.`),Object.entries(o).forEach(([a,c])=>{et(a,t),s.push({exportName:a,exportValue:c,isFromDefaultExport:l})});return}s.push({exportName:i,exportValue:o,isFromDefaultExport:l})}),s.forEach(({exportName:i,isFromDefaultExport:o})=>{r(!(o&&fe.includes(i)))}),s}function st(){return new Proxy({},{get(...e){return M()||I(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function it(e){const t=".page.",n=O(e.split(t),0,-1).join(t);return r(!n.includes("\\")),n}function S(e){ce(e),r(e.startsWith("/")||ue(e),{filePath:e})}function Jt(e,t){if(t.length>0){const s=t.filter(i=>i.isErrorPage);return s.length===0?null:(y(s.length===1,"Only one error page can be defined"),s[0].pageId)}const n=V(e.map(({pageId:s})=>s).filter(s=>W(s)));if(y(n.length<=1,`Only one _error.page.js is allowed, but found several: ${n.join(" ")}`),n.length>0){const s=n[0];return r(s),s}return null}function W(e,t){return r(!e.includes("\\")),e.includes("/_error")}function rt(e,t){if(t.length>0){const n=t.find(s=>s.pageId===e);return r(n),n.isErrorPage}else return W(e)}const ot=[".page",".page.server",".page.route",".page.client",".css"];function lt(e){if(ce(e),e.endsWith(".css"))return r(ue(e),e),".css";r(le(e),e);const n=e.split("/").slice(-1)[0].split("."),s=n.slice(-3)[0],i=n.slice(-2)[0];if(i==="page")return".page";if(r(s==="page",e),i==="server")return".page.server";if(i==="client")return".page.client";if(i==="route")return".page.route";r(!1,e)}function de(e){const t=o=>i.pageId===o||i.isDefaultPageFile&&(K(i.filePath)||at(o,i.filePath)),n=lt(e),i={filePath:e,fileType:n,isEnv:o=>{if(r(n!==".page.route"),o==="CLIENT_ONLY")return n===".page.client"||n===".css";if(o==="SERVER_ONLY")return n===".page.server";if(o==="CLIENT_AND_SERVER")return n===".page";r(!1)},isRelevant:t,isDefaultPageFile:A(e),isRendererPageFile:n!==".css"&&A(e)&&K(e),isErrorPageFile:W(e),pageId:it(e)};return i}function A(e){return S(e),W(e)?!1:e.includes("/_default")}function K(e){return S(e),e.includes("/renderer/")}function at(e,t){S(e),S(t),r(!e.endsWith("/")),r(!t.endsWith("/")),r(A(t));const n=O(t.split("/"),0,-1).filter(s=>s!=="_default").join("/");return e.startsWith(n)}function ct(e){r(Array.isArray(e)||e===null),r(e!==null),e.forEach(t=>{r($(t)),r(d(t,"pageId","string")),r(d(t,"routeFilesystem","string")||d(t,"routeFilesystem","null")),r(d(t,"routeFilesystemDefinedBy","string")||d(t,"routeFilesystemDefinedBy","null")),r(d(t,"loadCodeFiles","function")),r(d(t,"isErrorPage","boolean")),r(d(t,"configElements","object")),ge(t.configElements,!1)})}function ut(e){ge(e,!0)}function ge(e,t){r($(e)),Object.entries(e).forEach(([n,s])=>{if(r($(s)||s===null),s===null){r(t);return}r(d(s,"configDefinedAt","string")),r(d(s,"plusConfigFilePath","string")||d(s,"plusConfigFilePath","null")),r(d(s,"configEnv","string")),r(d(s,"codeFilePath","string")||d(s,"codeFilePath","null")),r(d(s,"codeFileExport","string")||d(s,"codeFileExport","null")),r(d(s,"configValueSerialized","string")||d(s,"configValueSerialized","undefined")),(t||n==="route")&&r(d(s,"configValue")||d(s,"configValueSerialized"))})}const ft=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],s=t[2];return new RegExp(n,s)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function G(e){const t=JSON.parse(e);return he(t)}function he(e){return typeof e=="string"?dt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=he(n)}),e)}function dt(e){for(const{match:t,deserialize:n}of ft)if(t(e))return n(e,G);return e}function gt(e){e.forEach(t=>{Object.entries(t.configElements).forEach(([n,s])=>{ht(s),n==="route"&&pt(s)})})}function ht(e){const{configValueSerialized:t}=e;t!==void 0&&(e.configValue=G(t))}function pt(e){r(d(e,"configValue"));const{configValue:t}=e,n=typeof t;y(n==="string"||k(t),`${e.configDefinedAt} has an invalid type '${n}': it should be a string or a function instead, see https://vite-plugin-ssr.com/route`)}function mt(e){r(d(e,"isGeneratedFile")),r(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),r(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),r(d(e,"pageFilesLazy","object")),r(d(e,"pageFilesEager","object")),r(d(e,"pageFilesExportNamesLazy","object")),r(d(e,"pageFilesExportNamesEager","object")),r(d(e.pageFilesLazy,".page")),r(d(e.pageFilesLazy,".page.client")||d(e.pageFilesLazy,".page.server")),r(d(e,"pageFilesList","string[]")),r(d(e,"pageConfigs")),r(d(e,"pageConfigGlobal"));const{pageConfigs:t,pageConfigGlobal:n}=e;ct(t),gt(t),ut(n);const s={};L(e.pageFilesLazy).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=s[o]=(c=s[o])!==null&&c!==void 0?c:l;const u=a;Q(u),l.loadFile=async()=>{"fileExports"in l||(l.fileExports=await u(),Ze(l))}}),L(e.pageFilesExportNamesLazy).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=s[o]=(c=s[o])!==null&&c!==void 0?c:l;const u=a;Q(u),l.loadExportNames=async()=>{if(!("exportNames"in l)){const g=await u();y("exportNames"in g,"You seem to be using Vite 2 but the latest vite-plugin-ssr versions only work with Vite 3"),r(d(g,"exportNames","string[]"),l.filePath),l.exportNames=g.exportNames}}}),L(e.pageFilesEager).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=s[o]=(c=s[o])!==null&&c!==void 0?c:l;const u=a;r($(u)),l.fileExports=u}),L(e.pageFilesExportNamesEager).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=s[o]=(c=s[o])!==null&&c!==void 0?c:l;const u=a;r($(u)),r(d(u,"exportNames","string[]"),l.filePath),l.exportNames=u.exportNames}),e.pageFilesList.forEach(o=>{var l;s[o]=(l=s[o])!==null&&l!==void 0?l:de(o)});const i=Object.values(s);return i.forEach(({filePath:o})=>{r(!o.includes("\\"))}),{pageFiles:i,pageConfigs:t,pageConfigGlobal:n}}function L(e){const t=[];return Object.entries(e).forEach(([n,s])=>{r(ot.includes(n)),r($(s)),Object.entries(s).forEach(([i,o])=>{const l=de(i);r(l.fileType===n),t.push({filePath:i,pageFile:l,globValue:o})})}),t}function Q(e){r(k(e))}const _=F("setPageFiles.ts",{});function Yt(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:s}=mt(e);_.pageFilesAll=t,_.pageConfigs=n,_.pageConfigGlobal=s}async function qt(e,t){e?(r(!_.pageFilesGetter),r(t===void 0)):(r(_.pageFilesGetter),r(typeof t=="boolean"),(!_.pageFilesAll||!t)&&await _.pageFilesGetter());const{pageFilesAll:n,pageConfigs:s,pageConfigGlobal:i}=_;r(n&&s&&i);const o=yt(n,s);return{pageFilesAll:n,allPageIds:o,pageConfigs:s,pageConfigGlobal:i}}function yt(e,t){const n=e.filter(({isDefaultPageFile:o})=>!o).map(({pageId:o})=>o),s=V(n),i=t.map(o=>o.pageId);return[...s,...i]}function vt(e,t){return pe(e,t,!0)}function Kt(e,t){return pe(e,t,!1)}function pe(e,t,n){const s=n?"CLIENT_ONLY":"SERVER_ONLY",i=e.filter(h=>h.isRelevant(t)&&h.fileType!==".page.route").sort(Et(n,t)),o=h=>{const m=i.filter(v=>v.pageId===t&&v.isEnv(h?"CLIENT_AND_SERVER":s));y(m.length<=1,`Merge the following files into a single file: ${m.map(v=>v.filePath).join(" ")}`);const R=m[0];return r(R===void 0||!R.isDefaultPageFile),R},l=o(!1),a=o(!0),c=h=>i.filter(m=>m.isRendererPageFile&&m.isEnv(h?"CLIENT_AND_SERVER":s))[0],u=c(!1),g=c(!0),f=i.filter(h=>h.isDefaultPageFile&&!h.isRendererPageFile&&(h.isEnv(s)||h.isEnv("CLIENT_AND_SERVER")));return[l,a,...f,u,g].filter(Me)}function Et(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",s=-1,i=1,o=0;return(l,a)=>{if(!l.isDefaultPageFile&&a.isDefaultPageFile)return s;if(!a.isDefaultPageFile&&l.isDefaultPageFile)return i;{const c=l.isRendererPageFile,u=a.isRendererPageFile;if(!c&&u)return s;if(!u&&c)return i;r(c===u)}{const c=X(t,l.filePath),u=X(t,a.filePath);if(c<u)return s;if(u<c)return i;r(c===u)}{if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return s;if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return i}return o}}function X(e,t){S(e),S(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const s=e.slice(n),i=t.slice(n),o=s.split("/").length,l=i.split("/").length;return o+l}const $t="modulepreload",bt=function(e){return"/"+e},Z={},Qt=function(t,n,s){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=bt(o),o in Z)return;Z[o]=!0;const l=o.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(!!s)for(let g=i.length-1;g>=0;g--){const f=i[g];if(f.href===o&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":$t,l||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),l)return new Promise((g,f)=>{u.addEventListener("load",g),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function ee(e){const t=e/1e3;if(t<120){const n=te(t);return`${n} second${ne(n)}`}{const n=t/60,s=te(n);return`${s} minute${ne(s)}`}}function te(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function ne(e){return e==="1"?"":"s"}function Rt(e,t,n){const{timeoutErr:s,timeoutWarn:i}=_t(t);let o,l;const a=new Promise((f,p)=>{o=h=>{c(),f(h)},l=h=>{c(),p(h)}}),c=()=>{clearTimeout(u),clearTimeout(g)},u=setTimeout(()=>{const f=`${P}[Warning] The ${t}() hook defined by ${n} is taking more than ${ee(i)}`;console.warn(f)},i),g=setTimeout(()=>{const f=Fe(`Hook timeout: the ${t}() hook defined by ${n} didn't finish after ${ee(s)}`);l(f)},s);return(async()=>{try{const f=await e();o(f)}catch(f){l(f)}})(),a}function _t(e){let t=4e4,n=4*1e3;return e==="onBeforeRoute"&&(t=5*1e3,n=1*1e3),e==="onBeforePrerender"&&(t=10*60*1e3,n=30*1e3),{timeoutErr:t,timeoutWarn:n}}function Xt(e){const t=window.location.href,{searchOriginal:n,hashOriginal:s,pathname:i}=xe(t,"/");let o;return e!=null&&e.withoutHash?o=`${i}${n||""}`:o=`${i}${n||""}${s||""}`,r(o.startsWith("/")),o}r(M());function Zt(){const e="vite-plugin-ssr_pageContext",t=document.getElementById(e);y(t,`The element #${e} (which vite-plugin-ssr automatically injects into the HTML) is missing from the DOM. This may happen if your HTML is malformed. Make sure your HTML isn't malformed, and make sure you don't remove #${e} from the HTML nor from the DOM.`);const n=t.textContent;r(n);const s=G(n);r(d(s,"pageContext","object"));const{pageContext:i}=s;return r(d(i,"_pageId","string")),H(i,{_pageContextRetrievedFromServer:{...i},_comesDirectlyFromServer:!0}),i}function D(e,t){if(!(t in e.exports))return null;const n=e.exports[t],s=e.exportsAll[t][0];r(s.exportValue===n);const i=s.exportSource;return r(i),r(!t.endsWith(")")),y(k(n),`hook ${t}() defined by ${i} should be a function`),{hookFn:n,hookFilePath:i}}function en(e,t){D(e,t)}function wt(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[s])=>Ue(n,s)).forEach(([n,s])=>{e[n]=s})}function St(e){Pt(e),Tt(e)}function Pt(e){rt(e._pageId,e._pageConfigs)&&r(d(e,"is404","boolean"))}function Tt(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!$(t)){I(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}const x=F("releasePageContext.ts",{});function It(e,t){if(t){const i=e;r([!0,!1].includes(i.isHydration)),r([!0,!1,null].includes(i.isBackwardNavigation))}else{const i=e;r(i.isHydration===!0),r(i.isBackwardNavigation===null)}r("config"in e),r("configEntries"in e),r("exports"in e),r("exportsAll"in e),r("pageExports"in e),r($(e.pageExports));const n=e.exports.Page;H(e,{Page:n}),kt(e),wt(e),r([!0,!1].includes(e._comesDirectlyFromServer));const s=e._comesDirectlyFromServer?jt(e):e;return St(e),s}const Ft=["then","toJSON"],Lt=["_pageId"];function jt(e){return new Proxy(e,{get:n});function t(s){return!(s in e||Ft.includes(s)||typeof s=="symbol"||typeof s!="string"||s.startsWith("__v_"))}function n(s,i){return x.disableAssertPassToClient!==i&&Ot(e._pageContextRetrievedFromServer,i,t(i)),x.disableAssertPassToClient=i,window.setTimeout(()=>{x.disableAssertPassToClient=void 0},0),e[i]}}function Ot(e,t,n){if(!n||e===null)return;const s=Object.keys(e).filter(i=>!Lt.includes(i));y(!1,[`pageContext.${t} isn't available in the browser`,`('${t}' is missing in the passToClient list [${s.map(i=>`'${i}'`).join(", ")}]).`,`Did you forget to add '${t}' to the passToClient list?`,"See https://vite-plugin-ssr.com/passToClient"].join(" "))}function kt(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}function Wt(e,t){var n;const s=e.filter(o=>o.pageId===t);return r(s.length<=1),(n=s[0])!==null&&n!==void 0?n:null}async function xt(e,t){const n={};return!t&&"configValues"in e||((await e.loadCodeFiles()).forEach(i=>{const{configName:o,codeFilePath:l}=i;let a;if(i.isPlusFile){const{codeFileExports:c}=i;o!=="client"&&qe(c,l),Object.entries(c).forEach(([u,g])=>{const f=u!=="default",p=f?u:i.configName,h=g;if(n[p]=h,f){const m=e.configElements[i.configName];r(m),e.configElements[p]={configValue:h,codeFileExport:u,codeFilePath:l,configDefinedByFile:l,configDefinedAt:`${l} > export { ${u} }`,configEnv:m.configEnv,plusConfigFilePath:null}}})}else a=i.codeFileExportValue,n[o]=a}),Object.entries(e.configElements).map(([i,o])=>{o.codeFilePath||(n[i]=o.configValue)}),H(e,{configValues:n})),e}const me="__whileFetchingAssets";async function tn(e,t,n){const s=vt(e,n),i=Wt(t,n);let o;try{o=(await Promise.all([i&&xt(i,!1),...s.map(h=>{var m;return(m=h.loadFile)===null||m===void 0?void 0:m.call(h)})]))[0]}catch(p){throw Ct(p)&&Object.assign(p,{[me]:!0}),p}const{config:l,configEntries:a,exports:c,exportsAll:u,pageExports:g}=tt(s,o);return{config:l,configEntries:a,exports:c,exportsAll:u,pageExports:g,_pageFilesLoaded:s}}function nn(e){return e?e[me]===!0:!1}function Ct(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}function sn(e,t,n){const s=e.configElements[t];if(!s||ye(e,t))return null;const{configValue:i,configDefinedAt:o}=s;return y(typeof i===n,`${o} has an invalid type \`${typeof i}\`: is should be a ${n} instead`),i}function rn(e,t){const n=e.configElements[t];if(!n||ye(e,t))return null;if(n.codeFilePath!==null)return n.codeFilePath;const{configValue:s,configDefinedAt:i}=n;y(typeof s=="string",`${i} has an invalid type \`${typeof s}\`: it should be a \`string\` instead`),y(!1,`${i} has an invalid value \`${s}\`: it should be a file path instead`)}function ye(e,t){const n=e.configElements[t];if(!n)return!0;const{codeFilePath:s,configValue:i}=n;return s?!1:i==null}function At(e,t){const n=t.find(s=>s.pageId===e);return r(t.length>0),r(n),n}async function on(e,t){const n=It(e,t);let s=null,i;s=D(e,"render"),i="render";{const a=D(e,"onRenderClient");a&&(s=a,i="onRenderClient")}if(!s){const a=Dt(e);if(e._pageConfigs.length>0)Nt(e._pageId,e._pageConfigs,a);else{const c=e._pageFilesLoaded.filter(g=>g.fileType===".page.client");let u;c.length===0?u="No file `*.page.client.*` found for URL "+a:u="One of the following files should export a `render()` hook: "+c.map(g=>g.filePath).join(" "),y(!1,u)}}r(s);const o=s.hookFn;r(i);const l=await Rt(()=>o(n),i,s.hookFilePath);y(l===void 0,`The ${i}() hook defined by ${s.hookFilePath} isn't allowed to return a value`)}function Dt(e){let t;try{t=e.urlOriginal}catch{}return t=t??window.location.href,t}function Nt(e,t,n){var s,i;const o=At(e,t);r(!(!((s=o.configElements.onRenderClient)===null||s===void 0)&&s.configValue)),r(((i=o.configElements.clientRouting)===null||i===void 0?void 0:i.configValue)===!0);let l=!1;t.forEach(a=>{const c=a.configElements.onRenderClient;c&&c.configValue&&(l=!0)}),y(!1,`No onRenderClient() hook defined${l?` for URL \`${n}\``:""}, but it's needed, see https://vite-plugin-ssr.com/onRenderClient`)}export{rn as A,G as B,Fe as C,qt as D,Ve as E,vt as F,sn as G,Wt as H,ae as I,Bt as J,Le as K,nn as L,en as M,on as N,zt as O,Mt as P,Vt as Q,Qt as _,r as a,Ut as b,M as c,Xt as d,Kt as e,O as f,F as g,Gt as h,k as i,W as j,y as k,d as l,I as m,ze as n,$ as o,xe as p,Ht as q,H as r,Yt as s,Zt as t,tn as u,Jt as v,D as w,It as x,Rt as y,At as z};
