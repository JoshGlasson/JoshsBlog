function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,a){const l=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(l){const o=c(e,n,r,a);t.p(o,l)}}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function _(t){return y(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let x;function j(t){x=t}function L(){if(!x)throw new Error("Function called outside component initialization");return x}function R(t){L().$$.on_mount.push(t)}const A=[],P=[],k=[],C=[],N=Promise.resolve();let q=!1;function I(t){k.push(t)}let O=!1;const U=new Set;function T(){if(!O){O=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];j(e),D(e.$$)}for(A.length=0;P.length;)P.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];U.has(e)||(U.add(e),e())}k.length=0}while(A.length);for(;C.length;)C.pop()();q=!1,O=!1,U.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const B=new Set;let H;function J(){H={r:0,c:[],p:H}}function V(){H.r||o(H.c),H=H.p}function K(t,e){t&&t.i&&(B.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),H.c.push(()=>{B.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const z="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Y(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function G(t){t&&t.c()}function W(t,e){t&&t.l(e)}function X(t,e,r){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=t.$$;a&&a.m(e,r),I(()=>{const e=c.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(I)}function Q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(A.push(t),q||(q=!0,N.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,s,a,c,l,i=[-1]){const u=x;j(e);const d=n.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i};let h=!1;if(p.ctx=s?s(e,d,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),h&&Z(e,t)),n}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=$(n.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&K(e.$$.fragment),X(e,n.target,n.anchor),T()}j(u)}class et{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const nt=[];function rt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!nt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const l=[a,c];return o.push(l),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const ot={},st=()=>({});function at(e){let n,r,o,s,a,c,l,d,g,w,S,x,j,L,R,A,P,k,C,N,q,I,O,U="true"===e[0]?"light":"dark";return{c(){n=p("nav"),r=p("ul"),o=p("li"),s=p("a"),a=h("home"),l=m(),d=p("li"),g=p("a"),w=h("about"),x=m(),j=p("li"),L=p("a"),R=h("blog"),P=m(),k=p("li"),C=p("a"),N=h(U),q=h(" mode"),this.h()},l(t){n=b(t,"NAV",{id:!0,class:!0});var e=$(n);r=b(e,"UL",{class:!0});var c=$(r);o=b(c,"LI",{class:!0});var i=$(o);s=b(i,"A",{"aria-current":!0,href:!0,class:!0});var u=$(s);a=y(u,"home"),u.forEach(f),i.forEach(f),l=_(c),d=b(c,"LI",{class:!0});var p=$(d);g=b(p,"A",{"aria-current":!0,href:!0,class:!0});var h=$(g);w=y(h,"about"),h.forEach(f),p.forEach(f),x=_(c),j=b(c,"LI",{class:!0});var m=$(j);L=b(m,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var v=$(L);R=y(v,"blog"),v.forEach(f),m.forEach(f),P=_(c),k=b(c,"LI",{class:!0});var E=$(k);C=b(E,"A",{class:!0});var S=$(C);N=y(S,U),q=y(S," mode"),S.forEach(f),E.forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){v(s,"aria-current",c=void 0===e[1]?"page":void 0),v(s,"href","."),v(s,"class","svelte-gj03cv"),v(o,"class","svelte-gj03cv"),v(g,"aria-current",S="about"===e[1]?"page":void 0),v(g,"href","about"),v(g,"class","svelte-gj03cv"),v(d,"class","svelte-gj03cv"),v(L,"rel","prefetch"),v(L,"aria-current",A="blog"===e[1]?"page":void 0),v(L,"href","blog"),v(L,"class","svelte-gj03cv"),v(j,"class","svelte-gj03cv"),v(C,"class","svelte-gj03cv"),v(k,"class","svelte-gj03cv"),v(r,"class","svelte-gj03cv"),v(n,"id","navbar"),v(n,"class","svelte-gj03cv")},m(t,c){var f,p,h,m;u(t,n,c),i(n,r),i(r,o),i(o,s),i(s,a),i(r,l),i(r,d),i(d,g),i(g,w),i(r,x),i(r,j),i(j,L),i(L,R),i(r,P),i(r,k),i(k,C),i(C,N),i(C,q),I||(f=C,p="click",h=e[2],f.addEventListener(p,h,m),O=()=>f.removeEventListener(p,h,m),I=!0)},p(t,[e]){2&e&&c!==(c=void 0===t[1]?"page":void 0)&&v(s,"aria-current",c),2&e&&S!==(S="about"===t[1]?"page":void 0)&&v(g,"aria-current",S),2&e&&A!==(A="blog"===t[1]?"page":void 0)&&v(L,"aria-current",A),1&e&&U!==(U="true"===t[0]?"light":"dark")&&E(N,U)},i:t,o:t,d(t){t&&f(n),I=!1,O()}}}function ct(t,e,n){let{segment:r}=e,{dark_toggle:o}=e;function s(){window.document.body.classList.add("dark-mode"),window.document.getElementById("navbar").classList.add("dark-mode"),localStorage.setItem("dark_mode_toggle","true"),n(0,o="true")}return R(async()=>{n(0,o=localStorage.getItem("dark_mode_toggle")),n(0,null===o?o="false":o),"true"===o&&s()}),t.$set=t=>{"segment"in t&&n(1,r=t.segment),"dark_toggle"in t&&n(0,o=t.dark_toggle)},[o,r,function(){"false"===o?s():(window.document.body.classList.remove("dark-mode"),window.document.getElementById("navbar").classList.remove("dark-mode"),localStorage.setItem("dark_mode_toggle","false"),n(0,o="false"))}]}class lt extends et{constructor(t){super(),tt(this,t,ct,at,a,{segment:1,dark_toggle:0})}}function it(t){let e,n,r,o,s,a,d;o=new lt({props:{segment:t[0]}});const h=t[2].default,g=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(h,t,t[1],null);return{c(){e=p("script"),r=m(),G(o.$$.fragment),s=m(),a=p("main"),g&&g.c(),this.h()},l(t){const n=S('[data-svelte="svelte-td8t5m"]',document.head);e=b(n,"SCRIPT",{id:!0,src:!0}),$(e).forEach(f),n.forEach(f),r=_(t),W(o.$$.fragment,t),s=_(t),a=b(t,"MAIN",{class:!0});var c=$(a);g&&g.l(c),c.forEach(f),this.h()},h(){v(e,"id","twitter-wjs"),e.src!==(n="https://platform.twitter.com/widgets.js")&&v(e,"src","https://platform.twitter.com/widgets.js"),v(a,"class","svelte-u6q2x9")},m(t,n){i(document.head,e),u(t,r,n),X(o,t,n),u(t,s,n),u(t,a,n),g&&g.m(a,null),d=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),o.$set(n),g&&g.p&&2&e&&l(g,h,t,t[1],e,null,null)},i(t){d||(K(o.$$.fragment,t),K(g,t),d=!0)},o(t){M(o.$$.fragment,t),M(g,t),d=!1},d(t){f(e),t&&f(r),Q(o,t),t&&f(s),t&&f(a),g&&g.d(t)}}}function ut(t,e,n){let{segment:r}=e;R(async()=>{window.addEventListener("error",(function(t){console.log(t)}),!0)});let{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class ft extends et{constructor(t){super(),tt(this,t,ut,it,a,{segment:0})}}function dt(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=h(r)},l(t){e=b(t,"PRE",{});var o=$(e);n=y(o,r),o.forEach(f)},m(t,r){u(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function pt(e){let n,r,o,s,a,c,l,d,w,x,j,L,R=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&dt(e);return{c(){r=m(),o=p("h1"),s=h(e[0]),a=m(),c=p("p"),l=h(R),d=m(),w=p("p"),x=h("Redirecting..."),j=m(),A&&A.c(),L=g(),this.h()},l(t){S('[data-svelte="svelte-194vtkh"]',document.head).forEach(f),r=_(t),o=b(t,"H1",{class:!0});var n=$(o);s=y(n,e[0]),n.forEach(f),a=_(t),c=b(t,"P",{class:!0});var i=$(c);l=y(i,R),i.forEach(f),d=_(t),w=b(t,"P",{class:!0});var u=$(w);x=y(u,"Redirecting..."),u.forEach(f),j=_(t),A&&A.l(t),L=g(),this.h()},h(){v(o,"class","svelte-8od9u6"),v(c,"class","svelte-8od9u6"),v(w,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),i(o,s),u(t,a,e),u(t,c,e),i(c,l),u(t,d,e),u(t,w,e),i(w,x),u(t,j,e),A&&A.m(t,e),u(t,L,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(s,t[0]),2&e&&R!==(R=t[1].message+"")&&E(l,R),t[2]&&t[1].stack?A?A.p(t,e):(A=dt(t),A.c(),A.m(L.parentNode,L)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(a),t&&f(c),t&&f(d),t&&f(w),t&&f(j),A&&A.d(t),t&&f(L)}}}function ht(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class mt extends et{constructor(t){super(),tt(this,t,ht,pt,a,{status:0,error:1})}}function gt(t){let n,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&G(n.$$.fragment),r=g()},l(t){n&&W(n.$$.fragment,t),r=g()},m(t,e){n&&X(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?Y(s,[F(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){J();const t=n;M(t.$$.fragment,1,0,()=>{Q(t,1)}),V()}a?(n=new a(c()),G(n.$$.fragment),K(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(t){o||(n&&K(n.$$.fragment,t),o=!0)},o(t){n&&M(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&Q(n,t)}}}function vt(t){let e,n;return e=new mt({props:{error:t[0],status:t[1]}}),{c(){G(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function $t(t){let e,n,r,o;const s=[vt,gt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let l=e;e=c(t),e===l?a[e].p(t,o):(J(),M(a[l],1,1,()=>{a[l]=null}),V(),n=a[e],n||(n=a[e]=s[e](t),n.c()),K(n,1),n.m(r.parentNode,r))},i(t){o||(K(n),o=!0)},o(t){M(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function bt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ft({props:s}),{c(){G(n.$$.fragment)},l(t){W(n.$$.fragment,t)},m(t,e){X(n,t,e),r=!0},p(t,[e]){const r=12&e?Y(o,[4&e&&{segment:t[2][0]},8&e&&F(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(K(n.$$.fragment,t),r=!0)},o(t){M(n.$$.fragment,t),r=!1},d(t){Q(n,t)}}}function yt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e,{notify:i}=e;var u,f,d;return u=i,L().$$.after_update.push(u),f=ot,d=r,L().$$.context.set(f,d),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,i=t.notify)},[o,s,a,c,l,r,i]}class _t extends et{constructor(t){super(),tt(this,t,yt,bt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Et=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],wt=[{js:()=>import("./index.04df5bb9.js"),css:[]},{js:()=>import("./about.27c5ca82.js"),css:[]},{js:()=>import("./index.3b0f3b74.js"),css:[]},{js:()=>import("./[slug].3a425aff.js"),css:[]},{js:()=>import("./404.608195bf.js"),css:[]}],St=(xt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:xt(t[1])})}]},{pattern:/^\/404\/?$/,parts:[{i:4}]}]);var xt;const jt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Lt,Rt,At,Pt=!1,kt=[],Ct="{}";const Nt={page:function(t){const e=rt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:rt(null),session:rt(jt&&jt.session)};let qt,It;Nt.session.subscribe(async t=>{if(qt=t,!Pt)return;It=!0;const e=Vt(new URL(location.href)),n=Rt={},{redirect:r,props:o,branch:s}=await Yt(e);n===Rt&&await zt(r,s,o,e.page)});let Ot,Ut=null;let Tt,Dt=1;const Bt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ht={};function Jt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Vt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(jt.baseUrl))return null;let e=t.pathname.slice(jt.baseUrl.length);if(""===e&&(e="/"),!Et.some(t=>t.test(e)))for(let n=0;n<St.length;n+=1){const r=St[n],o=r.pattern.exec(e);if(o){const n=Jt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Kt(){return{x:pageXOffset,y:pageYOffset}}async function Mt(t,e,n,r){if(e)Tt=e;else{const t=Kt();Ht[Tt]=t,e=Tt=++Dt,Ht[Tt]=n?t:{x:0,y:0}}Tt=e,Lt&&Nt.preloading.set(!0);const o=Ut&&Ut.href===t.href?Ut.promise:Yt(t);Ut=null;const s=Rt={},{redirect:a,props:c,branch:l}=await o;if(s===Rt&&(await zt(a,l,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ht[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Ht[Tt]=t,t&&scrollTo(t.x,t.y)}}async function zt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Vt(new URL(t,document.baseURI));return n?(Bt[e.replaceState?"replaceState":"pushState"]({id:Tt},"",t),Mt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Nt.page.set(r),Nt.preloading.set(!1),Lt)Lt.$set(n);else{n.stores={page:{subscribe:Nt.page.subscribe},preloading:{subscribe:Nt.preloading.subscribe},session:Nt.session},n.level0={props:await At},n.notify=Nt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Gt(t.nextSibling);Gt(t),Gt(e)}Lt=new _t({target:Ot,props:n,hydrate:!0})}kt=e,Ct=JSON.stringify(r.query),Pt=!0,It=!1}async function Yt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;At||(At=jt.preloaded[0]||st.call(a,{host:n.host,path:n.path,query:n.query,params:{}},qt));let l=1;try{const o=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ct)return!0;const o=kt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,i,o)&&(u=!0),s.segments[l]=r[c+1],!e)return{segment:f};const d=l++;if(!It&&!u&&kt[c]&&kt[c].part===e.i)return kt[c];u=!1;const{default:p,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Ft);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(wt[e.i]);let m;return m=Pt||!jt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},qt):{}:jt.preloaded[c+1],s["level"+d]={component:p,props:m,segment:f,match:i,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Ft(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Gt(t){t.parentNode.removeChild(t)}function Wt(t){const e=Vt(new URL(t,document.baseURI));if(e)return Ut&&t===Ut.href||function(t,e){Ut={href:t,promise:e}}(t,Yt(e)),Ut.promise}let Xt;function Qt(t){clearTimeout(Xt),Xt=setTimeout(()=>{Zt(t)},20)}function Zt(t){const e=ee(t.target);e&&"prefetch"===e.rel&&Wt(e.href)}function te(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ee(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Vt(o);if(s){Mt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Bt.pushState({id:Tt},"",o.href)}}function ee(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ne(t){if(Ht[Tt]=Kt(),t.state){const e=Vt(new URL(location.href));e?Mt(e,t.state.id):location.href=location.href}else Dt=Dt+1,function(t){Tt=t}(Dt),Bt.replaceState({id:Tt},"",location.href)}var re;re={target:document.querySelector("#sapper")},"scrollRestoration"in Bt&&(Bt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Bt.scrollRestoration="auto"}),addEventListener("load",()=>{Bt.scrollRestoration="manual"}),function(t){Ot=t}(re.target),addEventListener("click",te),addEventListener("popstate",ne),addEventListener("touchstart",Zt),addEventListener("mousemove",Qt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Bt.replaceState({id:Dt},"",e);const n=new URL(location.href);if(jt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=jt;At||(At=s&&s[0]),zt(null,[],{error:c,status:a,session:o,level0:{props:At},level1:{props:{status:a,error:c},component:mt},segments:s},{host:e,path:n,query:Jt(r),params:{}})}();const r=Vt(n);return r?Mt(r,Dt,!0,t):void 0});export{Q as A,et as S,m as a,b,_ as c,f as d,p as e,$ as f,y as g,v as h,tt as i,u as j,i as k,E as l,g as m,t as n,w as o,d as p,S as q,R as r,a as s,h as t,z as u,G as v,W as w,X as x,K as y,M as z};
