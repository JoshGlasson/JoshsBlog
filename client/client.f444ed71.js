function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,a){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=c(e,n,r,a);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function g(){return h(" ")}function m(){return h("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function $(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function w(t){return b(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let j;function L(t){j=t}function x(){if(!j)throw new Error("Function called outside component initialization");return j}function P(t){x().$$.on_mount.push(t)}const R=[],A=[],k=[],C=[],I=Promise.resolve();let N=!1;function T(t){k.push(t)}let q=!1;const O=new Set;function U(){if(!q){q=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];L(e),J(e.$$)}for(R.length=0;A.length;)A.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];O.has(e)||(O.add(e),e())}k.length=0}while(R.length);for(;C.length;)C.pop()();N=!1,q=!1,O.clear()}}function J(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const D=new Set;let H;function B(){H={r:0,c:[],p:H}}function G(){H.r||o(H.c),H=H.p}function K(t,e){t&&t.i&&(D.delete(t),t.i(e))}function X(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),H.c.push(()=>{D.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const V="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Z(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function M(t){return"object"==typeof t&&null!==t?t:{}}function z(t){t&&t.c()}function Y(t,e){t&&t.l(e)}function F(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),T(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(T)}function W(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(R.push(t),N||(N=!0,I.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,s,a,c,i,l=[-1]){const u=j;L(e);const d=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(p.ctx=s?s(e,d,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),h&&Q(e,t)),n}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=y(n.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&K(e.$$.fragment),F(e,n.target,n.anchor),U()}L(u)}class et{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const nt=[];function rt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!nt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const ot={},st=()=>({});function at(e){let n,r,o,s,a,c,i,d,m,_,S,j,L,x,P,R,A,k,C,I,N,T,q,O="true"===e[0]?"light":"dark";return{c(){n=p("nav"),r=p("ul"),o=p("li"),s=p("a"),a=h("home"),i=g(),d=p("li"),m=p("a"),_=h("about"),j=g(),L=p("li"),x=p("a"),P=h("blog"),A=g(),k=p("li"),C=p("a"),I=h(O),N=h(" mode"),this.h()},l(t){n=$(t,"NAV",{id:!0,class:!0});var e=y(n);r=$(e,"UL",{class:!0});var c=y(r);o=$(c,"LI",{class:!0});var l=y(o);s=$(l,"A",{"aria-current":!0,href:!0,class:!0});var u=y(s);a=b(u,"home"),u.forEach(f),l.forEach(f),i=w(c),d=$(c,"LI",{class:!0});var p=y(d);m=$(p,"A",{"aria-current":!0,href:!0,class:!0});var h=y(m);_=b(h,"about"),h.forEach(f),p.forEach(f),j=w(c),L=$(c,"LI",{class:!0});var g=y(L);x=$(g,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var v=y(x);P=b(v,"blog"),v.forEach(f),g.forEach(f),A=w(c),k=$(c,"LI",{class:!0});var E=y(k);C=$(E,"A",{class:!0});var S=y(C);I=b(S,O),N=b(S," mode"),S.forEach(f),E.forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){v(s,"aria-current",c="home"===e[1]?"home":void 0),v(s,"href","home"),v(s,"class","svelte-gj03cv"),v(o,"class","svelte-gj03cv"),v(m,"aria-current",S="about"===e[1]?"about":void 0),v(m,"href","about"),v(m,"class","svelte-gj03cv"),v(d,"class","svelte-gj03cv"),v(x,"rel","prefetch"),v(x,"aria-current",R="blog"===e[1]?"blog":void 0),v(x,"href","blog"),v(x,"class","svelte-gj03cv"),v(L,"class","svelte-gj03cv"),v(C,"class","svelte-gj03cv"),v(k,"class","svelte-gj03cv"),v(r,"class","svelte-gj03cv"),v(n,"id","navbar"),v(n,"class","svelte-gj03cv")},m(t,c){var f,p,h,g;u(t,n,c),l(n,r),l(r,o),l(o,s),l(s,a),l(r,i),l(r,d),l(d,m),l(m,_),l(r,j),l(r,L),l(L,x),l(x,P),l(r,A),l(r,k),l(k,C),l(C,I),l(C,N),T||(f=C,p="click",h=e[2],f.addEventListener(p,h,g),q=()=>f.removeEventListener(p,h,g),T=!0)},p(t,[e]){2&e&&c!==(c="home"===t[1]?"home":void 0)&&v(s,"aria-current",c),2&e&&S!==(S="about"===t[1]?"about":void 0)&&v(m,"aria-current",S),2&e&&R!==(R="blog"===t[1]?"blog":void 0)&&v(x,"aria-current",R),1&e&&O!==(O="true"===t[0]?"light":"dark")&&E(I,O)},i:t,o:t,d(t){t&&f(n),T=!1,q()}}}function ct(t,e,n){let{segment:r}=e,{dark_toggle:o=!0}=e;function s(){window.document.body.classList.add("dark-mode"),window.document.getElementById("navbar").classList.add("dark-mode"),localStorage.setItem("dark_mode_toggle","true"),n(0,o="true")}return P(async()=>{n(0,o=localStorage.getItem("dark_mode_toggle")),n(0,null===o?o="true":o),"true"===o&&s()}),t.$set=t=>{"segment"in t&&n(1,r=t.segment),"dark_toggle"in t&&n(0,o=t.dark_toggle)},[o,r,function(){"false"===o?s():(window.document.body.classList.remove("dark-mode"),window.document.getElementById("navbar").classList.remove("dark-mode"),localStorage.setItem("dark_mode_toggle","false"),n(0,o="false"))}]}class it extends et{constructor(t){super(),tt(this,t,ct,at,a,{segment:1,dark_toggle:0})}}function lt(t){let e,n,r,o,s,a,d,m,E,_,j,L,x,P,R,A,k,C,I;A=new it({props:{segment:t[0]}});const N=t[2].default,T=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(N,t,t[1],null);return{c(){e=p("script"),r=p("script"),o=h("window.dataLayer = window.dataLayer || [];\n\t\tfunction gtag(){dataLayer.push(arguments);}\n\t\tgtag('js', new Date());\n\n\t\tgtag('config', 'G-TJ8JZX38E6');\n\t"),s=p("script"),d=p("script"),E=p("link"),_=p("link"),j=p("script"),x=p("script"),R=g(),z(A.$$.fragment),k=g(),C=p("main"),T&&T.c(),this.h()},l(t){const n=S('[data-svelte="svelte-eywh2g"]',document.head);e=$(n,"SCRIPT",{async:!0,src:!0}),y(e).forEach(f),r=$(n,"SCRIPT",{});var a=y(r);o=b(a,"window.dataLayer = window.dataLayer || [];\n\t\tfunction gtag(){dataLayer.push(arguments);}\n\t\tgtag('js', new Date());\n\n\t\tgtag('config', 'G-TJ8JZX38E6');\n\t"),a.forEach(f),s=$(n,"SCRIPT",{"data-ad-client":!0,async:!0,src:!0}),y(s).forEach(f),d=$(n,"SCRIPT",{id:!0,src:!0}),y(d).forEach(f),E=$(n,"LINK",{rel:!0,href:!0}),_=$(n,"LINK",{rel:!0,href:!0}),j=$(n,"SCRIPT",{src:!0}),y(j).forEach(f),x=$(n,"SCRIPT",{src:!0}),y(x).forEach(f),n.forEach(f),R=w(t),Y(A.$$.fragment,t),k=w(t),C=$(t,"MAIN",{class:!0});var c=y(C);T&&T.l(c),c.forEach(f),this.h()},h(){e.async=!0,e.src!==(n="https://www.googletagmanager.com/gtag/js?id=G-TJ8JZX38E6")&&v(e,"src","https://www.googletagmanager.com/gtag/js?id=G-TJ8JZX38E6"),v(s,"data-ad-client","ca-pub-1501125542619304"),s.async=!0,s.src!==(a="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")&&v(s,"src","https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"),v(d,"id","twitter-wjs"),d.src!==(m="https://platform.twitter.com/widgets.js")&&v(d,"src","https://platform.twitter.com/widgets.js"),v(E,"rel","stylesheet"),v(E,"href","./photoswipe/photoswipe.css"),v(_,"rel","stylesheet"),v(_,"href","./photoswipe/default-skin/default-skin.css"),j.src!==(L="./photoswipe/photoswipe.min.js")&&v(j,"src","./photoswipe/photoswipe.min.js"),x.src!==(P="./photoswipe/photoswipe-ui-default.min.js")&&v(x,"src","./photoswipe/photoswipe-ui-default.min.js"),v(C,"class","svelte-u6q2x9")},m(t,n){l(document.head,e),l(document.head,r),l(r,o),l(document.head,s),l(document.head,d),l(document.head,E),l(document.head,_),l(document.head,j),l(document.head,x),u(t,R,n),F(A,t,n),u(t,k,n),u(t,C,n),T&&T.m(C,null),I=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),A.$set(n),T&&T.p&&2&e&&i(T,N,t,t[1],e,null,null)},i(t){I||(K(A.$$.fragment,t),K(T,t),I=!0)},o(t){X(A.$$.fragment,t),X(T,t),I=!1},d(t){f(e),f(r),f(s),f(d),f(E),f(_),f(j),f(x),t&&f(R),W(A,t),t&&f(k),t&&f(C),T&&T.d(t)}}}function ut(t,e,n){let{segment:r}=e;P(async()=>{window.addEventListener("error",(function(t){console.log(t)}),!0)});let{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class ft extends et{constructor(t){super(),tt(this,t,ut,lt,a,{segment:0})}}function dt(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=h(r)},l(t){e=$(t,"PRE",{});var o=y(e);n=b(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function pt(e){let n,r,o,s,a,c,i,d,_,j,L,x,P=e[1].message+"";document.title=n=e[0];let R=e[2]&&e[1].stack&&dt(e);return{c(){r=g(),o=p("h1"),s=h(e[0]),a=g(),c=p("p"),i=h(P),d=g(),_=p("p"),j=h("Redirecting..."),L=g(),R&&R.c(),x=m(),this.h()},l(t){S('[data-svelte="svelte-194vtkh"]',document.head).forEach(f),r=w(t),o=$(t,"H1",{class:!0});var n=y(o);s=b(n,e[0]),n.forEach(f),a=w(t),c=$(t,"P",{class:!0});var l=y(c);i=b(l,P),l.forEach(f),d=w(t),_=$(t,"P",{class:!0});var u=y(_);j=b(u,"Redirecting..."),u.forEach(f),L=w(t),R&&R.l(t),x=m(),this.h()},h(){v(o,"class","svelte-8od9u6"),v(c,"class","svelte-8od9u6"),v(_,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,a,e),u(t,c,e),l(c,i),u(t,d,e),u(t,_,e),l(_,j),u(t,L,e),R&&R.m(t,e),u(t,x,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(s,t[0]),2&e&&P!==(P=t[1].message+"")&&E(i,P),t[2]&&t[1].stack?R?R.p(t,e):(R=dt(t),R.c(),R.m(x.parentNode,x)):R&&(R.d(1),R=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(a),t&&f(c),t&&f(d),t&&f(_),t&&f(L),R&&R.d(t),t&&f(x)}}}function ht(t,e,n){let{status:r}=e,{error:o}=e;P(async()=>{!async function(){await(t=2e3,new Promise(e=>setTimeout(e,t))),window.location.replace("/404");var t}()});return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class gt extends et{constructor(t){super(),tt(this,t,ht,pt,a,{status:0,error:1})}}function mt(t){let n,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&z(n.$$.fragment),r=m()},l(t){n&&Y(n.$$.fragment,t),r=m()},m(t,e){n&&F(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?Z(s,[M(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){B();const t=n;X(t.$$.fragment,1,0,()=>{W(t,1)}),G()}a?(n=new a(c()),z(n.$$.fragment),K(n.$$.fragment,1),F(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(t){o||(n&&K(n.$$.fragment,t),o=!0)},o(t){n&&X(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&W(n,t)}}}function vt(t){let e,n;return e=new gt({props:{error:t[0],status:t[1]}}),{c(){z(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function yt(t){let e,n,r,o;const s=[vt,mt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(B(),X(a[i],1,1,()=>{a[i]=null}),G(),n=a[e],n||(n=a[e]=s[e](t),n.c()),K(n,1),n.m(r.parentNode,r))},i(t){o||(K(n),o=!0)},o(t){X(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function $t(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[yt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ft({props:s}),{c(){z(n.$$.fragment)},l(t){Y(n.$$.fragment,t)},m(t,e){F(n,t,e),r=!0},p(t,[e]){const r=12&e?Z(o,[4&e&&{segment:t[2][0]},8&e&&M(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(K(n.$$.fragment,t),r=!0)},o(t){X(n.$$.fragment,t),r=!1},d(t){W(n,t)}}}function bt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,d;return u=l,x().$$.after_update.push(u),f=ot,d=r,x().$$.context.set(f,d),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class wt extends et{constructor(t){super(),tt(this,t,bt,$t,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Et=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],_t=[{js:()=>import("./index.2bbb087a.js"),css:[]},{js:()=>import("./about.03cb68df.js"),css:[]},{js:()=>import("./index.9c1d7d2a.js"),css:[]},{js:()=>import("./[slug].44fbfd9a.js"),css:[]},{js:()=>import("./home.c5201073.js"),css:[]},{js:()=>import("./404.5c30ec3c.js"),css:[]}],St=(jt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:jt(t[1])})}]},{pattern:/^\/home\/?$/,parts:[{i:4}]},{pattern:/^\/404\/?$/,parts:[{i:5}]}]);var jt;const Lt="undefined"!=typeof __SAPPER__&&__SAPPER__;let xt,Pt,Rt,At=!1,kt=[],Ct="{}";const It={page:function(t){const e=rt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:rt(null),session:rt(Lt&&Lt.session)};let Nt,Tt;It.session.subscribe(async t=>{if(Nt=t,!At)return;Tt=!0;const e=Gt(new URL(location.href)),n=Pt={},{redirect:r,props:o,branch:s}=await Zt(e);n===Pt&&await Vt(r,s,o,e.page)});let qt,Ot=null;let Ut,Jt=1;const Dt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ht={};function Bt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Gt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Lt.baseUrl))return null;let e=t.pathname.slice(Lt.baseUrl.length);if(""===e&&(e="/"),!Et.some(t=>t.test(e)))for(let n=0;n<St.length;n+=1){const r=St[n],o=r.pattern.exec(e);if(o){const n=Bt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Kt(){return{x:pageXOffset,y:pageYOffset}}async function Xt(t,e,n,r){if(e)Ut=e;else{const t=Kt();Ht[Ut]=t,e=Ut=++Jt,Ht[Ut]=n?t:{x:0,y:0}}Ut=e,xt&&It.preloading.set(!0);const o=Ot&&Ot.href===t.href?Ot.promise:Zt(t);Ot=null;const s=Pt={},{redirect:a,props:c,branch:i}=await o;if(s===Pt&&(await Vt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ht[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Ht[Ut]=t,t&&scrollTo(t.x,t.y)}}async function Vt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Gt(new URL(t,document.baseURI));return n?(Dt[e.replaceState?"replaceState":"pushState"]({id:Ut},"",t),Xt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(It.page.set(r),It.preloading.set(!1),xt)xt.$set(n);else{n.stores={page:{subscribe:It.page.subscribe},preloading:{subscribe:It.preloading.subscribe},session:It.session},n.level0={props:await Rt},n.notify=It.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)zt(t.nextSibling);zt(t),zt(e)}xt=new wt({target:qt,props:n,hydrate:!0})}kt=e,Ct=JSON.stringify(r.query),At=!0,Tt=!1}async function Zt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Rt||(Rt=Lt.preloaded[0]||st.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Nt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ct)return!0;const o=kt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const d=i++;if(!Tt&&!u&&kt[c]&&kt[c].part===e.i)return kt[c];u=!1;const{default:p,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Mt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(_t[e.i]);let g;return g=At||!Lt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Nt):{}:Lt.preloaded[c+1],s["level"+d]={component:p,props:g,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Mt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function zt(t){t.parentNode.removeChild(t)}function Yt(t){const e=Gt(new URL(t,document.baseURI));if(e)return Ot&&t===Ot.href||function(t,e){Ot={href:t,promise:e}}(t,Zt(e)),Ot.promise}let Ft;function Wt(t){clearTimeout(Ft),Ft=setTimeout(()=>{Qt(t)},20)}function Qt(t){const e=ee(t.target);e&&"prefetch"===e.rel&&Yt(e.href)}function te(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ee(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Gt(o);if(s){Xt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Dt.pushState({id:Ut},"",o.href)}}function ee(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ne(t){if(Ht[Ut]=Kt(),t.state){const e=Gt(new URL(location.href));e?Xt(e,t.state.id):location.href=location.href}else Jt=Jt+1,function(t){Ut=t}(Jt),Dt.replaceState({id:Ut},"",location.href)}var re;re={target:document.querySelector("#sapper")},"scrollRestoration"in Dt&&(Dt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Dt.scrollRestoration="auto"}),addEventListener("load",()=>{Dt.scrollRestoration="manual"}),function(t){qt=t}(re.target),addEventListener("click",te),addEventListener("popstate",ne),addEventListener("touchstart",Qt),addEventListener("mousemove",Wt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Dt.replaceState({id:Jt},"",e);const n=new URL(location.href);if(Lt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=Lt;Rt||(Rt=s&&s[0]),Vt(null,[],{error:c,status:a,session:o,level0:{props:Rt},level1:{props:{status:a,error:c},component:gt},segments:s},{host:e,path:n,query:Bt(r),params:{}})}();const r=Gt(n);return r?Xt(r,Jt,!0,t):void 0});export{et as S,g as a,$ as b,w as c,f as d,p as e,y as f,b as g,v as h,tt as i,u as j,l as k,E as l,_ as m,t as n,d as o,P as p,S as q,V as r,a as s,h as t,z as u,Y as v,F as w,K as x,X as y,W as z};
