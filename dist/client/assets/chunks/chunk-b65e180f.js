import{a as A,j as b,P as v,R as Ht,F as ke,r as vt}from"./chunk-95bbd968.js";import{c as xe}from"./chunk-35ced68b.js";const we="/assets/logo.svg",C="header";function Ae(){return A("header",{className:C,children:[b("div",{className:`${C}__logo`,children:b("a",{href:"/",children:b("img",{src:we})})}),b("input",{id:"header-toggle",className:`${C}__toggle`,type:"checkbox"}),b("label",{className:`${C}__toggle-container`,htmlFor:"header-toggle",children:b("span",{className:`${C}__hamburguer`})}),A("nav",{className:`${C}__nav`,children:[A("a",{className:`${C}__nav-item`,href:"/institucional",children:[b("span",{children:"01"}),"Institucional"]}),A("a",{className:`${C}__nav-item`,href:"/servicios",children:[b("span",{children:"02"}),"Servicios"]}),A("a",{className:`${C}__nav-item`,href:"/contacto",children:[b("span",{children:"03"}),"Contacto"]}),b("a",{className:`${C}__nav-item ${C}__nav-item--btn`,href:"/registrar-empresa",children:"Registrar empresa"}),b("a",{className:`${C}__nav-item ${C}__nav-item--btn`,href:"/ingresar",children:"Ingresar"})]})]})}const Oe="/assets/logo-white.svg",Se="/assets/logo-go.svg";function bt(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,a)}return e}function u(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?bt(Object(e),!0).forEach(function(a){_(n,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):bt(Object(e)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))})}return n}function Pn(n){"@babel/helpers - typeof";return Pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pn(n)}function _e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function pt(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function Pe(n,t,e){return t&&pt(n.prototype,t),e&&pt(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function _(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function tt(n,t){return Ee(n)||Ce(n,t)||Ut(n,t)||Me()}function dn(n){return Ne(n)||Ie(n)||Ut(n)||Te()}function Ne(n){if(Array.isArray(n))return Yn(n)}function Ee(n){if(Array.isArray(n))return n}function Ie(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ce(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(n);!(r=(o=e.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Ut(n,t){if(n){if(typeof n=="string")return Yn(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Yn(n,t)}}function Yn(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}function Te(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Me(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gt=function(){},et={},Wt={},Vt=null,Gt={mark:gt,measure:gt};try{typeof window<"u"&&(et=window),typeof document<"u"&&(Wt=document),typeof MutationObserver<"u"&&(Vt=MutationObserver),typeof performance<"u"&&(Gt=performance)}catch{}var Le=et.navigator||{},ht=Le.userAgent,yt=ht===void 0?"":ht,U=et,y=Wt,kt=Vt,pn=Gt;U.document;var $=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Xt=~yt.indexOf("MSIE")||~yt.indexOf("Trident/"),gn,hn,yn,kn,xn,R="___FONT_AWESOME___",Hn=16,Bt="fa",qt="svg-inline--fa",K="data-fa-i2svg",Un="data-fa-pseudo-element",ze="data-fa-pseudo-element-pending",at="data-prefix",rt="data-icon",xt="fontawesome-i2svg",Re="async",Fe=["HTML","HEAD","STYLE","SCRIPT"],Kt=function(){try{return!0}catch{return!1}}(),h="classic",k="sharp",it=[h,k];function vn(n){return new Proxy(n,{get:function(e,a){return a in e?e[a]:e[h]}})}var fn=vn((gn={},_(gn,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),_(gn,k,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),gn)),ln=vn((hn={},_(hn,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),_(hn,k,{solid:"fass",regular:"fasr",light:"fasl"}),hn)),cn=vn((yn={},_(yn,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),_(yn,k,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),yn)),je=vn((kn={},_(kn,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),_(kn,k,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),kn)),$e=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Qt="fa-layers-text",De=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ye=vn((xn={},_(xn,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),_(xn,k,{900:"fass",400:"fasr",300:"fasl"}),xn)),Jt=[1,2,3,4,5,6,7,8,9,10],He=Jt.concat([11,12,13,14,15,16,17,18,19,20]),Ue=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},un=new Set;Object.keys(ln[h]).map(un.add.bind(un));Object.keys(ln[k]).map(un.add.bind(un));var We=[].concat(it,dn(un),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B.GROUP,B.SWAP_OPACITY,B.PRIMARY,B.SECONDARY]).concat(Jt.map(function(n){return"".concat(n,"x")})).concat(He.map(function(n){return"w-".concat(n)})),on=U.FontAwesomeConfig||{};function Ve(n){var t=y.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function Ge(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(y&&typeof y.querySelector=="function"){var Xe=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Xe.forEach(function(n){var t=tt(n,2),e=t[0],a=t[1],r=Ge(Ve(e));r!=null&&(on[a]=r)})}var Zt={styleDefault:"solid",familyDefault:"classic",cssPrefix:Bt,replacementClass:qt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};on.familyPrefix&&(on.cssPrefix=on.familyPrefix);var en=u(u({},Zt),on);en.autoReplaceSvg||(en.observeMutations=!1);var d={};Object.keys(Zt).forEach(function(n){Object.defineProperty(d,n,{enumerable:!0,set:function(e){en[n]=e,sn.forEach(function(a){return a(d)})},get:function(){return en[n]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){en.cssPrefix=t,sn.forEach(function(e){return e(d)})},get:function(){return en.cssPrefix}});U.FontAwesomeConfig=d;var sn=[];function Be(n){return sn.push(n),function(){sn.splice(sn.indexOf(n),1)}}var Y=Hn,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qe(n){if(!(!n||!$)){var t=y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=y.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(t,a),n}}var Ke="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mn(){for(var n=12,t="";n-- >0;)t+=Ke[Math.random()*62|0];return t}function an(n){for(var t=[],e=(n||[]).length>>>0;e--;)t[e]=n[e];return t}function ot(n){return n.classList?an(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ne(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Qe(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,'="').concat(ne(n[e]),'" ')},"").trim()}function Cn(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,": ").concat(n[e].trim(),";")},"")}function st(n){return n.size!==z.size||n.x!==z.x||n.y!==z.y||n.rotate!==z.rotate||n.flipX||n.flipY}function Je(n){var t=n.transform,e=n.containerWidth,a=n.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Ze(n){var t=n.transform,e=n.width,a=e===void 0?Hn:e,r=n.height,i=r===void 0?Hn:r,o=n.startCentered,s=o===void 0?!1:o,f="";return s&&Xt?f+="translate(".concat(t.x/Y-a/2,"em, ").concat(t.y/Y-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(t.x/Y,"em), calc(-50% + ").concat(t.y/Y,"em)) "):f+="translate(".concat(t.x/Y,"em, ").concat(t.y/Y,"em) "),f+="scale(".concat(t.size/Y*(t.flipX?-1:1),", ").concat(t.size/Y*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var na=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function te(){var n=Bt,t=qt,e=d.cssPrefix,a=d.replacementClass,r=na;if(e!==n||a!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var wt=!1;function Rn(){d.autoAddCss&&!wt&&(qe(te()),wt=!0)}var ta={mixout:function(){return{dom:{css:te,insertCss:Rn}}},hooks:function(){return{beforeDOMElementCreation:function(){Rn()},beforeI2svg:function(){Rn()}}}},F=U||{};F[R]||(F[R]={});F[R].styles||(F[R].styles={});F[R].hooks||(F[R].hooks={});F[R].shims||(F[R].shims=[]);var M=F[R],ee=[],ea=function n(){y.removeEventListener("DOMContentLoaded",n),Nn=1,ee.map(function(t){return t()})},Nn=!1;$&&(Nn=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Nn||y.addEventListener("DOMContentLoaded",ea));function aa(n){$&&(Nn?setTimeout(n,0):ee.push(n))}function bn(n){var t=n.tag,e=n.attributes,a=e===void 0?{}:e,r=n.children,i=r===void 0?[]:r;return typeof n=="string"?ne(n):"<".concat(t," ").concat(Qe(a),">").concat(i.map(bn).join(""),"</").concat(t,">")}function At(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}var ra=function(t,e){return function(a,r,i,o){return t.call(e,a,r,i,o)}},Fn=function(t,e,a,r){var i=Object.keys(t),o=i.length,s=r!==void 0?ra(e,r):e,f,c,l;for(a===void 0?(f=1,l=t[i[0]]):(f=0,l=a);f<o;f++)c=i[f],l=s(l,t[c],c,t);return l};function ia(n){for(var t=[],e=0,a=n.length;e<a;){var r=n.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=n.charCodeAt(e++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),e--)}else t.push(r)}return t}function Wn(n){var t=ia(n);return t.length===1?t[0].toString(16):null}function oa(n,t){var e=n.length,a=n.charCodeAt(t),r;return a>=55296&&a<=56319&&e>t+1&&(r=n.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ot(n){return Object.keys(n).reduce(function(t,e){var a=n[e],r=!!a.icon;return r?t[a.iconName]=a.icon:t[e]=a,t},{})}function Vn(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=Ot(t);typeof M.hooks.addPack=="function"&&!r?M.hooks.addPack(n,Ot(t)):M.styles[n]=u(u({},M.styles[n]||{}),i),n==="fas"&&Vn("fa",t)}var wn,An,On,J=M.styles,sa=M.shims,fa=(wn={},_(wn,h,Object.values(cn[h])),_(wn,k,Object.values(cn[k])),wn),ft=null,ae={},re={},ie={},oe={},se={},la=(An={},_(An,h,Object.keys(fn[h])),_(An,k,Object.keys(fn[k])),An);function ca(n){return~We.indexOf(n)}function ua(n,t){var e=t.split("-"),a=e[0],r=e.slice(1).join("-");return a===n&&r!==""&&!ca(r)?r:null}var fe=function(){var t=function(i){return Fn(J,function(o,s,f){return o[f]=Fn(s,i,{}),o},{})};ae=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),re=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),se=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in J||d.autoFetchSvg,a=Fn(sa,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});ie=a.names,oe=a.unicodes,ft=Tn(d.styleDefault,{family:d.familyDefault})};Be(function(n){ft=Tn(n.styleDefault,{family:d.familyDefault})});fe();function lt(n,t){return(ae[n]||{})[t]}function ma(n,t){return(re[n]||{})[t]}function q(n,t){return(se[n]||{})[t]}function le(n){return ie[n]||{prefix:null,iconName:null}}function da(n){var t=oe[n],e=lt("fas",n);return t||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function W(){return ft}var ct=function(){return{prefix:null,iconName:null,rest:[]}};function Tn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.family,a=e===void 0?h:e,r=fn[a][n],i=ln[a][n]||ln[a][r],o=n in M.styles?n:null;return i||o||null}var St=(On={},_(On,h,Object.keys(cn[h])),_(On,k,Object.keys(cn[k])),On);function Mn(n){var t,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(t={},_(t,h,"".concat(d.cssPrefix,"-").concat(h)),_(t,k,"".concat(d.cssPrefix,"-").concat(k)),t),o=null,s=h;(n.includes(i[h])||n.some(function(c){return St[h].includes(c)}))&&(s=h),(n.includes(i[k])||n.some(function(c){return St[k].includes(c)}))&&(s=k);var f=n.reduce(function(c,l){var m=ua(d.cssPrefix,l);if(J[l]?(l=fa[s].includes(l)?je[s][l]:l,o=l,c.prefix=l):la[s].indexOf(l)>-1?(o=l,c.prefix=Tn(l,{family:s})):m?c.iconName=m:l!==d.replacementClass&&l!==i[h]&&l!==i[k]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var p=o==="fa"?le(c.iconName):{},g=q(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!J.far&&J.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},ct());return(n.includes("fa-brands")||n.includes("fab"))&&(f.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===k&&(J.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=q(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=W()||"fas"),f}var va=function(){function n(){_e(this,n),this.definitions={}}return Pe(n,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=u(u({},e.definitions[s]||{}),o[s]),Vn(s,o[s]);var f=cn[h][s];f&&Vn(f,o[s]),fe()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(e[s][m]=c)}),e[s][f]=c}),e}}]),n}(),_t=[],Z={},tn={},ba=Object.keys(tn);function pa(n,t){var e=t.mixoutsTo;return _t=n,Z={},Object.keys(tn).forEach(function(a){ba.indexOf(a)===-1&&delete tn[a]}),_t.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),Pn(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Z[o]||(Z[o]=[]),Z[o].push(i[o])})}a.provides&&a.provides(tn)}),e}function Gn(n,t){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=Z[n]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function Q(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];var r=Z[n]||[];r.forEach(function(i){i.apply(null,e)})}function j(){var n=arguments[0],t=Array.prototype.slice.call(arguments,1);return tn[n]?tn[n].apply(null,t):void 0}function Xn(n){n.prefix==="fa"&&(n.prefix="fas");var t=n.iconName,e=n.prefix||W();if(t)return t=q(e,t)||t,At(ce.definitions,e,t)||At(M.styles,e,t)}var ce=new va,ga=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,Q("noAuto")},ha={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(Q("beforeI2svg",t),j("pseudoElements2svg",t),j("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,aa(function(){ka({autoReplaceSvgRoot:e}),Q("watch",t)})}},ya={icon:function(t){if(t===null)return null;if(Pn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:q(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=Tn(t[0]);return{prefix:a,iconName:q(a,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match($e))){var r=Mn(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=W();return{prefix:i,iconName:q(i,t)||t}}}},T={noAuto:ga,config:d,dom:ha,parse:ya,library:ce,findIconDefinition:Xn,toHtml:bn},ka=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot,a=e===void 0?y:e;(Object.keys(M.styles).length>0||d.autoFetchSvg)&&$&&d.autoReplaceSvg&&T.dom.i2svg({node:a})};function Ln(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(a){return bn(a)})}}),Object.defineProperty(n,"node",{get:function(){if($){var a=y.createElement("div");return a.innerHTML=n.html,a.children}}}),n}function xa(n){var t=n.children,e=n.main,a=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(st(o)&&e.found&&!a.found){var s=e.width,f=e.height,c={x:s/f/2,y:.5};r.style=Cn(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function wa(n){var t=n.prefix,e=n.iconName,a=n.children,r=n.attributes,i=n.symbol,o=i===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function ut(n){var t=n.icons,e=t.main,a=t.mask,r=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,f=n.title,c=n.maskId,l=n.titleId,m=n.extra,p=n.watchable,g=p===void 0?!1:p,O=a.found?a:e,N=O.width,x=O.height,E=r==="fak",w=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(D){return m.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(m.classes).join(" "),S={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(x)})},I=E&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/x*16*.0625,"em")}:{};g&&(S.attributes[K]=""),f&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(l||mn())},children:[f]}),delete S.attributes.title);var P=u(u({},S),{},{prefix:r,iconName:i,main:e,mask:a,maskId:c,transform:o,symbol:s,styles:u(u({},I),m.styles)}),G=a.found&&e.found?j("generateAbstractMask",P)||{children:[],attributes:{}}:j("generateAbstractIcon",P)||{children:[],attributes:{}},X=G.children,zn=G.attributes;return P.children=X,P.attributes=zn,s?wa(P):xa(P)}function Pt(n){var t=n.content,e=n.width,a=n.height,r=n.transform,i=n.title,o=n.extra,s=n.watchable,f=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[K]="");var l=u({},o.styles);st(r)&&(l.transform=Ze({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);var m=Cn(l);m.length>0&&(c.style=m);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Aa(n){var t=n.content,e=n.title,a=n.extra,r=u(u(u({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Cn(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var jn=M.styles;function Bn(n){var t=n[0],e=n[1],a=n.slice(4),r=tt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:e,icon:o}}var Oa={found:!1,width:512,height:512};function Sa(n,t){!Kt&&!d.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(t,'" is missing.'))}function qn(n,t){var e=t;return t==="fa"&&d.styleDefault!==null&&(t=W()),new Promise(function(a,r){if(j("missingIconAbstract"),e==="fa"){var i=le(n)||{};n=i.iconName||n,t=i.prefix||t}if(n&&t&&jn[t]&&jn[t][n]){var o=jn[t][n];return a(Bn(o))}Sa(n,t),a(u(u({},Oa),{},{icon:d.showMissingIcons&&n?j("missingIconAbstract")||{}:{}}))})}var Nt=function(){},Kn=d.measurePerformance&&pn&&pn.mark&&pn.measure?pn:{mark:Nt,measure:Nt},rn='FA "6.4.0"',_a=function(t){return Kn.mark("".concat(rn," ").concat(t," begins")),function(){return ue(t)}},ue=function(t){Kn.mark("".concat(rn," ").concat(t," ends")),Kn.measure("".concat(rn," ").concat(t),"".concat(rn," ").concat(t," begins"),"".concat(rn," ").concat(t," ends"))},mt={begin:_a,end:ue},Sn=function(){};function Et(n){var t=n.getAttribute?n.getAttribute(K):null;return typeof t=="string"}function Pa(n){var t=n.getAttribute?n.getAttribute(at):null,e=n.getAttribute?n.getAttribute(rt):null;return t&&e}function Na(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(d.replacementClass)}function Ea(){if(d.autoReplaceSvg===!0)return _n.replace;var n=_n[d.autoReplaceSvg];return n||_n.replace}function Ia(n){return y.createElementNS("http://www.w3.org/2000/svg",n)}function Ca(n){return y.createElement(n)}function me(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.ceFn,a=e===void 0?n.tag==="svg"?Ia:Ca:e;if(typeof n=="string")return y.createTextNode(n);var r=a(n.tag);Object.keys(n.attributes||[]).forEach(function(o){r.setAttribute(o,n.attributes[o])});var i=n.children||[];return i.forEach(function(o){r.appendChild(me(o,{ceFn:a}))}),r}function Ta(n){var t=" ".concat(n.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var _n={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach(function(r){e.parentNode.insertBefore(me(r),e)}),e.getAttribute(K)===null&&d.keepOriginalSource){var a=y.createComment(Ta(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(t){var e=t[0],a=t[1];if(~ot(e).indexOf(d.replacementClass))return _n.replace(t);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return bn(s)}).join(`
`);e.setAttribute(K,""),e.innerHTML=o}};function It(n){n()}function de(n,t){var e=typeof t=="function"?t:Sn;if(n.length===0)e();else{var a=It;d.mutateApproach===Re&&(a=U.requestAnimationFrame||It),a(function(){var r=Ea(),i=mt.begin("mutate");n.map(r),i(),e()})}}var dt=!1;function ve(){dt=!0}function Qn(){dt=!1}var En=null;function Ct(n){if(kt&&d.observeMutations){var t=n.treeCallback,e=t===void 0?Sn:t,a=n.nodeCallback,r=a===void 0?Sn:a,i=n.pseudoElementsCallback,o=i===void 0?Sn:i,s=n.observeMutationsRoot,f=s===void 0?y:s;En=new kt(function(c){if(!dt){var l=W();an(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Et(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Et(m.target)&&~Ue.indexOf(m.attributeName))if(m.attributeName==="class"&&Pa(m.target)){var p=Mn(ot(m.target)),g=p.prefix,O=p.iconName;m.target.setAttribute(at,g||l),O&&m.target.setAttribute(rt,O)}else Na(m.target)&&r(m.target)})}}),$&&En.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ma(){En&&En.disconnect()}function La(n){var t=n.getAttribute("style"),e=[];return t&&(e=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function za(n){var t=n.getAttribute("data-prefix"),e=n.getAttribute("data-icon"),a=n.innerText!==void 0?n.innerText.trim():"",r=Mn(ot(n));return r.prefix||(r.prefix=W()),t&&e&&(r.prefix=t,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ma(r.prefix,n.innerText)||lt(r.prefix,Wn(n.innerText))),!r.iconName&&d.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function Ra(n){var t=an(n.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=n.getAttribute("title"),a=n.getAttribute("data-fa-title-id");return d.autoA11y&&(e?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||mn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Fa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Tt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=za(n),a=e.iconName,r=e.prefix,i=e.rest,o=Ra(n),s=Gn("parseNodeAttributes",{},n),f=t.styleParser?La(n):[];return u({iconName:a,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var ja=M.styles;function be(n){var t=d.autoReplaceSvg==="nest"?Tt(n,{styleParser:!1}):Tt(n);return~t.extra.classes.indexOf(Qt)?j("generateLayersText",n,t):j("generateSvgReplacementMutation",n,t)}var V=new Set;it.map(function(n){V.add("fa-".concat(n))});Object.keys(fn[h]).map(V.add.bind(V));Object.keys(fn[k]).map(V.add.bind(V));V=dn(V);function Mt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();var e=y.documentElement.classList,a=function(m){return e.add("".concat(xt,"-").concat(m))},r=function(m){return e.remove("".concat(xt,"-").concat(m))},i=d.autoFetchSvg?V:it.map(function(l){return"fa-".concat(l)}).concat(Object.keys(ja));i.includes("fa")||i.push("fa");var o=[".".concat(Qt,":not([").concat(K,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(K,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=an(n.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=mt.begin("onTree"),c=s.reduce(function(l,m){try{var p=be(m);p&&l.push(p)}catch(g){Kt||g.name==="MissingIcon"&&console.error(g)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(p){de(p,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),f(),l()})}).catch(function(p){f(),m(p)})})}function $a(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;be(n).then(function(e){e&&de([e],t)})}function Da(n){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Xn(t||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Xn(r||{})),n(a,u(u({},e),{},{mask:r}))}}var Ya=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?z:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,c=e.maskId,l=c===void 0?null:c,m=e.title,p=m===void 0?null:m,g=e.titleId,O=g===void 0?null:g,N=e.classes,x=N===void 0?[]:N,E=e.attributes,w=E===void 0?{}:E,S=e.styles,I=S===void 0?{}:S;if(t){var P=t.prefix,G=t.iconName,X=t.icon;return Ln(u({type:"icon"},t),function(){return Q("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(p?w["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(O||mn()):(w["aria-hidden"]="true",w.focusable="false")),ut({icons:{main:Bn(X),mask:f?Bn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:G,transform:u(u({},z),r),symbol:o,title:p,maskId:l,titleId:O,extra:{attributes:w,styles:I,classes:x}})})}},Ha={mixout:function(){return{icon:Da(Ya)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Mt,e.nodeCallback=$a,e}}},provides:function(t){t.i2svg=function(e){var a=e.node,r=a===void 0?y:a,i=e.callback,o=i===void 0?function(){}:i;return Mt(r,o)},t.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,l=a.mask,m=a.maskId,p=a.extra;return new Promise(function(g,O){Promise.all([qn(r,s),l.iconName?qn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var x=tt(N,2),E=x[0],w=x[1];g([e,ut({icons:{main:E,mask:w},prefix:s,iconName:r,transform:f,symbol:c,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(O)})},t.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=Cn(s);f.length>0&&(r.style=f);var c;return st(o)&&(c=j("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},Ua={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ln({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(dn(i)).join(" ")},children:o}]})}}}},Wa={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,c=f===void 0?{}:f,l=a.styles,m=l===void 0?{}:l;return Ln({type:"counter",content:e},function(){return Q("beforeDOMElementCreation",{content:e,params:a}),Aa({content:e.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(dn(s))}})})}}}},Va={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?z:r,o=a.title,s=o===void 0?null:o,f=a.classes,c=f===void 0?[]:f,l=a.attributes,m=l===void 0?{}:l,p=a.styles,g=p===void 0?{}:p;return Ln({type:"text",content:e},function(){return Q("beforeDOMElementCreation",{content:e,params:a}),Pt({content:e,transform:u(u({},z),i),title:s,extra:{attributes:m,styles:g,classes:["".concat(d.cssPrefix,"-layers-text")].concat(dn(c))}})})}}},provides:function(t){t.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Xt){var c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/c,f=l.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Pt({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Ga=new RegExp('"',"ug"),Lt=[1105920,1112319];function Xa(n){var t=n.replace(Ga,""),e=oa(t,0),a=e>=Lt[0]&&e<=Lt[1],r=t.length===2?t[0]===t[1]:!1;return{value:Wn(r?t[0]:t),isSecondary:a||r}}function zt(n,t){var e="".concat(ze).concat(t.replace(":","-"));return new Promise(function(a,r){if(n.getAttribute(e)!==null)return a();var i=an(n.children),o=i.filter(function(X){return X.getAttribute(Un)===t})[0],s=U.getComputedStyle(n,t),f=s.getPropertyValue("font-family").match(De),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return n.removeChild(o),a();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(f[2])?k:h,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ln[p][f[2].toLowerCase()]:Ye[p][c],O=Xa(m),N=O.value,x=O.isSecondary,E=f[0].startsWith("FontAwesome"),w=lt(g,N),S=w;if(E){var I=da(N);I.iconName&&I.prefix&&(w=I.iconName,g=I.prefix)}if(w&&!x&&(!o||o.getAttribute(at)!==g||o.getAttribute(rt)!==S)){n.setAttribute(e,S),o&&n.removeChild(o);var P=Fa(),G=P.extra;G.attributes[Un]=t,qn(w,g).then(function(X){var zn=ut(u(u({},P),{},{icons:{main:X,mask:ct()},prefix:g,iconName:S,extra:G,watchable:!0})),D=y.createElement("svg");t==="::before"?n.insertBefore(D,n.firstChild):n.appendChild(D),D.outerHTML=zn.map(function(ye){return bn(ye)}).join(`
`),n.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Ba(n){return Promise.all([zt(n,"::before"),zt(n,"::after")])}function qa(n){return n.parentNode!==document.head&&!~Fe.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Un)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function Rt(n){if($)return new Promise(function(t,e){var a=an(n.querySelectorAll("*")).filter(qa).map(Ba),r=mt.begin("searchPseudoElements");ve(),Promise.all(a).then(function(){r(),Qn(),t()}).catch(function(){r(),Qn(),e()})})}var Ka={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Rt,e}}},provides:function(t){t.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?y:a;d.searchPseudoElements&&Rt(r)}}},Ft=!1,Qa={mixout:function(){return{dom:{unwatch:function(){ve(),Ft=!0}}}},hooks:function(){return{bootstrap:function(){Ct(Gn("mutationObserverCallbacks",{}))},noAuto:function(){Ma()},watch:function(e){var a=e.observeMutationsRoot;Ft?Qn():Ct(Gn("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},jt=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},Ja={mixout:function(){return{parse:{transform:function(e){return jt(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=jt(r)),e}}},provides:function(t){t.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(l)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:p};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),g.path)}]}]}}}},$n={x:0,y:0,width:"100%",height:"100%"};function $t(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function Za(n){return n.tag==="g"?n.children:[n]}var nr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Mn(r.split(" ").map(function(o){return o.trim()})):ct();return i.prefix||(i.prefix=W()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(t){t.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,c=i.width,l=i.icon,m=o.width,p=o.icon,g=Je({transform:f,containerWidth:m,iconWidth:c}),O={tag:"rect",attributes:u(u({},$n),{},{fill:"white"})},N=l.children?{children:l.children.map($t)}:{},x={tag:"g",attributes:u({},g.inner),children:[$t(u({tag:l.tag,attributes:u(u({},l.attributes),g.path)},N))]},E={tag:"g",attributes:u({},g.outer),children:[x]},w="mask-".concat(s||mn()),S="clip-".concat(s||mn()),I={tag:"mask",attributes:u(u({},$n),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,E]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Za(p)},I]};return a.push(P,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(w,")")},$n)}),{children:a,attributes:r}}}},tr={provides:function(t){var e=!1;U.matchMedia&&(e=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},er={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},ar=[ta,Ha,Ua,Wa,Va,Ka,Qa,Ja,nr,tr,er];pa(ar,{mixoutsTo:T});T.noAuto;T.config;T.library;T.dom;var Jn=T.parse;T.findIconDefinition;T.toHtml;var rr=T.icon;T.layer;T.text;T.counter;function Dt(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,a)}return e}function H(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Dt(Object(e),!0).forEach(function(a){nn(n,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Dt(Object(e)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))})}return n}function In(n){"@babel/helpers - typeof";return In=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},In(n)}function nn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function ir(n,t){if(n==null)return{};var e={},a=Object.keys(n),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(e[r]=n[r]);return e}function or(n,t){if(n==null)return{};var e=ir(n,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(n,a)&&(e[a]=n[a])}return e}function Zn(n){return sr(n)||fr(n)||lr(n)||cr()}function sr(n){if(Array.isArray(n))return nt(n)}function fr(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function lr(n,t){if(n){if(typeof n=="string")return nt(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return nt(n,t)}}function nt(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}function cr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ur(n){var t,e=n.beat,a=n.fade,r=n.beatFade,i=n.bounce,o=n.shake,s=n.flash,f=n.spin,c=n.spinPulse,l=n.spinReverse,m=n.pulse,p=n.fixedWidth,g=n.inverse,O=n.border,N=n.listItem,x=n.flip,E=n.size,w=n.rotation,S=n.pull,I=(t={"fa-beat":e,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":p,"fa-inverse":g,"fa-border":O,"fa-li":N,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},nn(t,"fa-".concat(E),typeof E<"u"&&E!==null),nn(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),nn(t,"fa-pull-".concat(S),typeof S<"u"&&S!==null),nn(t,"fa-swap-opacity",n.swapOpacity),t);return Object.keys(I).map(function(P){return I[P]?P:null}).filter(function(P){return P})}function mr(n){return n=n-0,n===n}function pe(n){return mr(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(t,e){return e?e.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var dr=["style"];function vr(n){return n.charAt(0).toUpperCase()+n.slice(1)}function br(n){return n.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,e){var a=e.indexOf(":"),r=pe(e.slice(0,a)),i=e.slice(a+1).trim();return r.startsWith("webkit")?t[vr(r)]=i:t[r]=i,t},{})}function ge(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return ge(n,f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var l=t.attributes[c];switch(c){case"class":f.attrs.className=l,delete t.attributes.class;break;case"style":f.attrs.style=br(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=l:f.attrs[pe(c)]=l}return f},{attrs:{}}),i=e.style,o=i===void 0?{}:i,s=or(e,dr);return r.attrs.style=H(H({},r.attrs.style),o),n.apply(void 0,[t.tag,H(H({},r.attrs),s)].concat(Zn(a)))}var he=!1;try{he=!0}catch{}function pr(){if(!he&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Yt(n){if(n&&In(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Jn.icon)return Jn.icon(n);if(n===null)return null;if(n&&In(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function Dn(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?nn({},n,t):{}}var L=Ht.forwardRef(function(n,t){var e=n.icon,a=n.mask,r=n.symbol,i=n.className,o=n.title,s=n.titleId,f=n.maskId,c=Yt(e),l=Dn("classes",[].concat(Zn(ur(n)),Zn(i.split(" ")))),m=Dn("transform",typeof n.transform=="string"?Jn.transform(n.transform):n.transform),p=Dn("mask",Yt(a)),g=rr(c,H(H(H(H({},l),m),p),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!g)return pr("Could not find icon",c),null;var O=g.abstract,N={ref:t};return Object.keys(n).forEach(function(x){L.defaultProps.hasOwnProperty(x)||(N[x]=n[x])}),gr(O[0],N)});L.displayName="FontAwesomeIcon";L.propTypes={beat:v.bool,border:v.bool,beatFade:v.bool,bounce:v.bool,className:v.string,fade:v.bool,flash:v.bool,mask:v.oneOfType([v.object,v.array,v.string]),maskId:v.string,fixedWidth:v.bool,inverse:v.bool,flip:v.oneOf([!0,!1,"horizontal","vertical","both"]),icon:v.oneOfType([v.object,v.array,v.string]),listItem:v.bool,pull:v.oneOf(["right","left"]),pulse:v.bool,rotation:v.oneOf([0,90,180,270]),shake:v.bool,size:v.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:v.bool,spinPulse:v.bool,spinReverse:v.bool,symbol:v.oneOfType([v.bool,v.string]),title:v.string,titleId:v.string,transform:v.oneOfType([v.string,v.object]),swapOpacity:v.bool};L.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var gr=ge.bind(null,Ht.createElement),hr={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"]},yr={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},kr={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},xr={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},wr={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},Ar={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Or=Ar;function Sr(){return A("footer",{className:"footer",children:[b("div",{className:"footer__top",children:A("div",{className:"footer__container",children:[A("div",{className:"footer__info",children:[b("h3",{className:"footer__logo ornament",children:b("img",{src:Oe})}),A("ul",{className:"footer__list",children:[A("li",{children:[b(L,{icon:Or})," Rioja 2212 - Rosario , Argentina"]}),A("li",{children:[b(L,{icon:wr})," 0341- 000 000"]}),A("li",{children:[b(L,{icon:xr})," info@meinventeestecorreo.com.ar"]})]})]}),A("div",{className:"footer__social",children:[b("h3",{className:"footer__title ornament",children:"Redes"}),A("ul",{className:"footer__list",children:[b("li",{children:A("a",{href:"#",children:[b(L,{icon:hr})," Facebook"]})}),b("li",{children:A("a",{href:"#",children:[b(L,{icon:yr})," LinkedIn"]})}),b("li",{children:A("a",{href:"#",children:[b(L,{icon:kr})," Instagram"]})})]})]}),b("div",{className:"footer__orono",children:b("img",{src:Se})})]})}),b("div",{className:"footer__bottom",children:A("ul",{className:"footer__copy",children:[b("li",{children:b("a",{href:"#",children:"Terminos y condiciones"})}),b("li",{children:b("a",{href:"#",children:"Politica de privacidad"})}),b("li",{children:b("a",{href:"#",children:"Protección de datos personales"})})]})})]})}function _r({children:n,className:t}){return A(ke,{children:[b(Ae,{}),b("main",{className:t,children:n}),b(Sr,{})]})}_r.propTypes={children:xe,className:v.string};function Pr({slides:n,backdrop:t=!0}){const[e,a]=vt.useState(0);return vt.useEffect(()=>{let r=setInterval(()=>a(i=>i===n.length-1?0:i+1),5e3);return()=>{clearInterval(r)}},[n]),A("div",{className:"hero",children:[n.map((r,i)=>b("img",{src:r,className:`hero__slide ${e===i&&"js-active"}`},`slide-${i}`)),n.length>1&&b("ul",{className:"hero__indicators",children:n.map((r,i)=>b("li",{className:`hero__indicator ${e===i&&"js-active"}`,onClick:()=>a(i)},`slide-${r}`))}),t&&b("div",{className:"hero__backdrop"})]})}Pr.propTypes={slides:v.array,backdrop:v.bool};export{L as F,Pr as H,we as L,_r as M,wr as a,xr as b,hr as c,yr as d,kr as e,Or as f};
