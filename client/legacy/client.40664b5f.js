function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,a=function(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}((function(e){var r=function(e){var r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=$(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var l={};function p(){}function h(){}function d(){}var v={};v[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==r&&n.call(g,a)&&(v=g);var y=d.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(e,r){var o;this._invoke=function(a,i){function c(){return new r((function(o,c){!function o(a,i,c,u){var s=f(e[a],e,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"===t(p)&&n.call(p,"__await")?r.resolve(p.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):r.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}(a,i,o,c)}))}return o=o?o.then(c,c):c()}}function $(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,$(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=y.constructor=d,d.constructor=h,h.displayName=u(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},b(w.prototype),w.prototype[i]=function(){return this},e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),u(y,c,"Generator"),y[a]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}));function i(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?l(e):r}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(){}function g(t,e){for(var r in e)t[r]=e[r];return t}function y(t){return t()}function b(){return Object.create(null)}function w(t){t.forEach(y)}function $(t){return"function"==typeof t}function x(e,r){return e!=e?r==r:e!==r||e&&"object"===t(e)||"function"==typeof e}function E(t,e,r,n){return t[1]&&n?g(r.ctx.slice(),t[1](n(e))):r.ctx}function _(e,r,n,o,a,i,c){var u=function(e,r,n,o){if(e[2]&&o){var a=e[2](o(n));if(void 0===r.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(r.dirty.length,a.length),u=0;u<c;u+=1)i[u]=r.dirty[u]|a[u];return i}return r.dirty|a}return r.dirty}(r,o,a,i);if(u){var s=E(r,n,o,c);e.p(s,u)}}function S(t,e){t.appendChild(e)}function L(t,e,r){t.insertBefore(e,r||null)}function k(t){t.parentNode.removeChild(t)}function R(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function j(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function A(){return P(" ")}function O(){return P("")}function N(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function C(t){return Array.from(t.childNodes)}function I(t,e,r,n){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];r[u.name]||c.push(u.name)}for(var s=0;s<c.length;s++)a.removeAttribute(c[s]);return t.splice(o,1)[0]}}return n?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):j(e)}function q(t,e){for(var r=0;r<t.length;r+=1){var n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return P(e)}function T(t){return q(t," ")}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function z(t){o=t}function G(){if(!o)throw new Error("Function called outside component initialization");return o}function F(t){G().$$.on_mount.push(t)}var B=[],H=[],J=[],M=[],V=Promise.resolve(),Y=!1;function K(t){J.push(t)}var W=!1,X=new Set;function Q(){if(!W){W=!0;do{for(var t=0;t<B.length;t+=1){var e=B[t];z(e),Z(e.$$)}for(B.length=0;H.length;)H.pop()();for(var r=0;r<J.length;r+=1){var n=J[r];X.has(n)||(X.add(n),n())}J.length=0}while(B.length);for(;M.length;)M.pop()();Y=!1,W=!1,X.clear()}}function Z(t){if(null!==t.fragment){t.update(),w(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}var tt,et=new Set;function rt(){tt={r:0,c:[],p:tt}}function nt(){tt.r||w(tt.c),tt=tt.p}function ot(t,e){t&&t.i&&(et.delete(t),t.i(e))}function at(t,e,r,n){if(t&&t.o){if(et.has(t))return;et.add(t),tt.c.push((function(){et.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}var it="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ct(t,e){for(var r={},n={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(n[u]=1);for(var s in c)o[s]||(r[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in n)l in r||(r[l]=void 0);return r}function ut(e){return"object"===t(e)&&null!==e?e:{}}function st(t){t&&t.c()}function ft(t,e){t&&t.l(e)}function lt(t,e,r){var n=t.$$,o=n.fragment,a=n.on_mount,i=n.on_destroy,c=n.after_update;o&&o.m(e,r),K((function(){var e=a.map(y).filter($);i?i.push.apply(i,h(e)):w(e),t.$$.on_mount=[]})),c.forEach(K)}function pt(t,e){var r=t.$$;null!==r.fragment&&(w(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function ht(t,e){-1===t.$$.dirty[0]&&(B.push(t),Y||(Y=!0,V.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function dt(t,e,r,n,a,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=o;z(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:a,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c},l=!1;if(f.ctx=r?r(t,s,(function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return f.ctx&&a(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),l&&ht(t,e)),r})):[],f.update(),l=!0,w(f.before_update),f.fragment=!!n&&n(f.ctx),e.target){if(e.hydrate){var p=C(e.target);f.fragment&&f.fragment.l(p),p.forEach(k)}else f.fragment&&f.fragment.c();e.intro&&ot(t.$$.fragment),lt(t,e.target,e.anchor),Q()}z(u)}var vt=function(){function t(){d(this,t)}var e,r,n;return e=t,(r=[{key:"$destroy",value:function(){pt(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(){}}])&&v(e.prototype,r),n&&v(e,n),t}(),mt=[];function gt(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=[];function o(r){if(x(t,r)&&(t=r,e)){for(var o=!mt.length,a=0;a<n.length;a+=1){var i=n[a];i[1](),mt.push(i,t)}if(o){for(var c=0;c<mt.length;c+=2)mt[c][0](mt[c+1]);mt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return n.push(c),1===n.length&&(e=r(o)||m),a(t),function(){var t=n.indexOf(c);-1!==t&&n.splice(t,1),0===n.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var yt={},bt=function(){return{}};function wt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function $t(t){var e,r,o,a,i,c,u,s,f,l,p,h,d,v,g,y,b,w,$,x,E,_,R,O="true"===t[0]?"light":"dark";return{c:function(){e=j("nav"),r=j("ul"),o=j("li"),a=j("a"),i=P("home"),u=A(),s=j("li"),f=j("a"),l=P("about"),h=A(),d=j("li"),v=j("a"),g=P("blog"),b=A(),w=j("li"),$=j("a"),x=P(O),E=P(" mode"),this.h()},l:function(t){var n=C(e=I(t,"NAV",{class:!0})),c=C(r=I(n,"UL",{class:!0})),p=C(o=I(c,"LI",{class:!0})),m=C(a=I(p,"A",{"aria-current":!0,href:!0,class:!0}));i=q(m,"home"),m.forEach(k),p.forEach(k),u=T(c);var y=C(s=I(c,"LI",{class:!0})),_=C(f=I(y,"A",{"aria-current":!0,href:!0,class:!0}));l=q(_,"about"),_.forEach(k),y.forEach(k),h=T(c);var S=C(d=I(c,"LI",{class:!0})),L=C(v=I(S,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));g=q(L,"blog"),L.forEach(k),S.forEach(k),b=T(c);var R=C(w=I(c,"LI",{class:!0})),j=C($=I(R,"A",{class:!0}));x=q(j,O),E=q(j," mode"),j.forEach(k),R.forEach(k),c.forEach(k),n.forEach(k),this.h()},h:function(){N(a,"aria-current",c=void 0===t[1]?"page":void 0),N(a,"href","."),N(a,"class","svelte-3tzf84"),N(o,"class","svelte-3tzf84"),N(f,"aria-current",p="about"===t[1]?"page":void 0),N(f,"href","about"),N(f,"class","svelte-3tzf84"),N(s,"class","svelte-3tzf84"),N(v,"rel","prefetch"),N(v,"aria-current",y="blog"===t[1]?"page":void 0),N(v,"href","blog"),N(v,"class","svelte-3tzf84"),N(d,"class","svelte-3tzf84"),N($,"class","svelte-3tzf84"),N(w,"class","svelte-3tzf84"),N(r,"class","svelte-3tzf84"),N(e,"class","svelte-3tzf84")},m:function(n,c){var p,m,y,k;L(n,e,c),S(e,r),S(r,o),S(o,a),S(a,i),S(r,u),S(r,s),S(s,f),S(f,l),S(r,h),S(r,d),S(d,v),S(v,g),S(r,b),S(r,w),S(w,$),S($,x),S($,E),_||(p=$,m="click",y=t[2],p.addEventListener(m,y,k),R=function(){return p.removeEventListener(m,y,k)},_=!0)},p:function(t,e){var r=n(e,1)[0];2&r&&c!==(c=void 0===t[1]?"page":void 0)&&N(a,"aria-current",c),2&r&&p!==(p="about"===t[1]?"page":void 0)&&N(f,"aria-current",p),2&r&&y!==(y="blog"===t[1]?"page":void 0)&&N(v,"aria-current",y),1&r&&O!==(O="true"===t[0]?"light":"dark")&&D(x,O)},i:m,o:m,d:function(t){t&&k(e),_=!1,R()}}}function xt(t,e,r){var n=e.segment,o=e.dark_toggle;return F(c(a.mark((function t(){return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r(0,o=localStorage.getItem("dark_mode_toggle")),r(0,null===o?o="false":o),console.log("From Storage: "+o),"true"===o&&window.document.body.classList.add("dark-mode");case 4:case"end":return t.stop()}}),t)})))),t.$set=function(t){"segment"in t&&r(1,n=t.segment),"dark_toggle"in t&&r(0,o=t.dark_toggle)},[o,n,function(){console.log("Start toggle: "+o),"false"===o?(window.document.body.classList.add("dark-mode"),localStorage.setItem("dark_mode_toggle","true"),r(0,o="true")):(window.document.body.classList.remove("dark-mode"),localStorage.setItem("dark_mode_toggle","false"),r(0,o="false")),console.log("End toggle: "+o)}]}var Et=function(t){f(r,vt);var e=wt(r);function r(t){var n;return d(this,r),dt(l(n=e.call(this)),t,xt,$t,x,{segment:1,dark_toggle:0}),n}return r}();function _t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function St(t){var e,r,o,a;e=new Et({props:{segment:t[0]}});var i=t[2].default,c=function(t,e,r,n){if(t){var o=E(t,e,r,n);return t[0](o)}}(i,t,t[1],null);return{c:function(){st(e.$$.fragment),r=A(),o=j("main"),c&&c.c(),this.h()},l:function(t){ft(e.$$.fragment,t),r=T(t);var n=C(o=I(t,"MAIN",{class:!0}));c&&c.l(n),n.forEach(k),this.h()},h:function(){N(o,"class","svelte-iytxju")},m:function(t,n){lt(e,t,n),L(t,r,n),L(t,o,n),c&&c.m(o,null),a=!0},p:function(t,r){var o=n(r,1)[0],a={};1&o&&(a.segment=t[0]),e.$set(a),c&&c.p&&2&o&&_(c,i,t,t[1],o,null,null)},i:function(t){a||(ot(e.$$.fragment,t),ot(c,t),a=!0)},o:function(t){at(e.$$.fragment,t),at(c,t),a=!1},d:function(t){pt(e,t),t&&k(r),t&&k(o),c&&c.d(t)}}}function Lt(t,e,r){var n=e.segment,o=e.$$slots,a=void 0===o?{}:o,i=e.$$scope;return t.$set=function(t){"segment"in t&&r(0,n=t.segment),"$$scope"in t&&r(1,i=t.$$scope)},[n,i,a]}var kt=function(t){f(r,vt);var e=_t(r);function r(t){var n;return d(this,r),dt(l(n=e.call(this)),t,Lt,St,x,{segment:0}),n}return r}();function Rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function jt(t){var e,r,n=t[1].stack+"";return{c:function(){e=j("pre"),r=P(n)},l:function(t){var o=C(e=I(t,"PRE",{}));r=q(o,n),o.forEach(k)},m:function(t,n){L(t,e,n),S(e,r)},p:function(t,e){2&e&&n!==(n=t[1].stack+"")&&D(r,n)},d:function(t){t&&k(e)}}}function Pt(t){var e,r,o,a,i,c,u,s,f,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&jt(t);return{c:function(){r=A(),o=j("h1"),a=P(t[0]),i=A(),c=j("p"),u=P(l),s=A(),p&&p.c(),f=O(),this.h()},l:function(e){U('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(k),r=T(e);var n=C(o=I(e,"H1",{class:!0}));a=q(n,t[0]),n.forEach(k),i=T(e);var h=C(c=I(e,"P",{class:!0}));u=q(h,l),h.forEach(k),s=T(e),p&&p.l(e),f=O(),this.h()},h:function(){N(o,"class","svelte-8od9u6"),N(c,"class","svelte-8od9u6")},m:function(t,e){L(t,r,e),L(t,o,e),S(o,a),L(t,i,e),L(t,c,e),S(c,u),L(t,s,e),p&&p.m(t,e),L(t,f,e)},p:function(t,r){var o=n(r,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&D(a,t[0]),2&o&&l!==(l=t[1].message+"")&&D(u,l),t[2]&&t[1].stack?p?p.p(t,o):((p=jt(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&k(r),t&&k(o),t&&k(i),t&&k(c),t&&k(s),p&&p.d(t),t&&k(f)}}}function At(t,e,r){var n=e.status,o=e.error;return t.$set=function(t){"status"in t&&r(0,n=t.status),"error"in t&&r(1,o=t.error)},[n,o,!1]}var Ot=function(t){f(r,vt);var e=Rt(r);function r(t){var n;return d(this,r),dt(l(n=e.call(this)),t,At,Pt,x,{status:0,error:1}),n}return r}();function Nt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Ct(t){var e,r,n,o=[t[4].props],a=t[4].component;function i(t){for(var e={},r=0;r<o.length;r+=1)e=g(e,o[r]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&st(e.$$.fragment),r=O()},l:function(t){e&&ft(e.$$.fragment,t),r=O()},m:function(t,o){e&&lt(e,t,o),L(t,r,o),n=!0},p:function(t,n){var c=16&n?ct(o,[ut(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){rt();var u=e;at(u.$$.fragment,1,0,(function(){pt(u,1)})),nt()}a?(st((e=new a(i())).$$.fragment),ot(e.$$.fragment,1),lt(e,r.parentNode,r)):e=null}else a&&e.$set(c)},i:function(t){n||(e&&ot(e.$$.fragment,t),n=!0)},o:function(t){e&&at(e.$$.fragment,t),n=!1},d:function(t){t&&k(r),e&&pt(e,t)}}}function It(t){var e,r;return e=new Ot({props:{error:t[0],status:t[1]}}),{c:function(){st(e.$$.fragment)},l:function(t){ft(e.$$.fragment,t)},m:function(t,n){lt(e,t,n),r=!0},p:function(t,r){var n={};1&r&&(n.error=t[0]),2&r&&(n.status=t[1]),e.$set(n)},i:function(t){r||(ot(e.$$.fragment,t),r=!0)},o:function(t){at(e.$$.fragment,t),r=!1},d:function(t){pt(e,t)}}}function qt(t){var e,r,n,o,a=[It,Ct],i=[];function c(t,e){return t[0]?0:1}return e=c(t),r=i[e]=a[e](t),{c:function(){r.c(),n=O()},l:function(t){r.l(t),n=O()},m:function(t,r){i[e].m(t,r),L(t,n,r),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(rt(),at(i[u],1,1,(function(){i[u]=null})),nt(),(r=i[e])||(r=i[e]=a[e](t)).c(),ot(r,1),r.m(n.parentNode,n))},i:function(t){o||(ot(r),o=!0)},o:function(t){at(r),o=!1},d:function(t){i[e].d(t),t&&k(n)}}}function Tt(t){for(var e,r,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[qt]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=g(a,o[i]);return e=new kt({props:a}),{c:function(){st(e.$$.fragment)},l:function(t){ft(e.$$.fragment,t)},m:function(t,n){lt(e,t,n),r=!0},p:function(t,r){var a=n(r,1)[0],i=12&a?ct(o,[4&a&&{segment:t[2][0]},8&a&&ut(t[3].props)]):{};147&a&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i:function(t){r||(ot(e.$$.fragment,t),r=!0)},o:function(t){at(e.$$.fragment,t),r=!1},d:function(t){pt(e,t)}}}function Dt(t,e,r){var n,o,a,i=e.stores,c=e.error,u=e.status,s=e.segments,f=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return n=h,G().$$.after_update.push(n),o=yt,a=i,G().$$.context.set(o,a),t.$set=function(t){"stores"in t&&r(5,i=t.stores),"error"in t&&r(0,c=t.error),"status"in t&&r(1,u=t.status),"segments"in t&&r(2,s=t.segments),"level0"in t&&r(3,f=t.level0),"level1"in t&&r(4,p=t.level1),"notify"in t&&r(6,h=t.notify)},[c,u,s,f,p,i,h]}var Ut,zt=function(t){f(r,vt);var e=Nt(r);function r(t){var n;return d(this,r),dt(l(n=e.call(this)),t,Dt,Tt,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),n}return r}(),Gt=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],Ft=[{js:function(){return import("./index.9bf0f5f7.js")},css:[]},{js:function(){return import("./about.77837c6d.js")},css:[]},{js:function(){return import("./index.513581ae.js")},css:[]},{js:function(){return import("./[slug].c037eb26.js")},css:[]}],Bt=(Ut=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:function(t){return{slug:Ut(t[1])}}}]}]);function Ht(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=fe(new URL(t,document.baseURI));return r?(ce[e.replaceState?"replaceState":"pushState"]({id:ne},"",t),pe(r,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var Jt,Mt,Vt,Yt,Kt,Wt="undefined"!=typeof __SAPPER__&&__SAPPER__,Xt=!1,Qt=[],Zt="{}",te={page:function(t){var e=gt(t),r=!0;return{notify:function(){r=!0,e.update((function(t){return t}))},set:function(t){r=!1,e.set(t)},subscribe:function(t){var n;return e.subscribe((function(e){(void 0===n||r&&e!==n)&&t(n=e)}))}}}({}),preloading:gt(null),session:gt(Wt&&Wt.session)};te.session.subscribe(function(){var t=c(a.mark((function t(e){var r,n,o,i,c,u;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Yt=e,Xt){t.next=3;break}return t.abrupt("return");case 3:return Kt=!0,r=fe(new URL(location.href)),n=Mt={},t.next=8,ge(r);case 8:if(o=t.sent,i=o.redirect,c=o.props,u=o.branch,n===Mt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,de(i,u,c,r.page);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var ee,re=null;var ne,oe=1;var ae,ie,ce="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},ue={};function se(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=n(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof r[a]&&(r[a]=[r[a]]),"object"===t(r[a])?r[a].push(c):r[a]=c})),r}function fe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Wt.baseUrl))return null;var e=t.pathname.slice(Wt.baseUrl.length);if(""===e&&(e="/"),!Gt.some((function(t){return t.test(e)})))for(var r=0;r<Bt.length;r+=1){var n=Bt[r],o=n.pattern.exec(e);if(o){var a=se(t.search),i=n.parts[n.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:n,match:o,page:u}}}}function le(){return{x:pageXOffset,y:pageYOffset}}function pe(t,e,r,n){return he.apply(this,arguments)}function he(){return(he=c(a.mark((function t(e,r,n,o){var i,c,u,s,f,l,p,h,d;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r?ne=r:(i=le(),ue[ne]=i,r=ne=++oe,ue[ne]=n?i:{x:0,y:0}),ne=r,Jt&&te.preloading.set(!0),c=re&&re.href===e.href?re.promise:ge(e),re=null,u=Mt={},t.next=8,c;case 8:if(s=t.sent,f=s.redirect,l=s.props,p=s.branch,u===Mt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,de(f,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),n||(h=ue[r],o&&(d=document.getElementById(o.slice(1)))&&(h={x:0,y:d.getBoundingClientRect().top+scrollY}),ue[ne]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function de(t,e,r,n){return ve.apply(this,arguments)}function ve(){return(ve=c(a.mark((function t(e,r,n,o){var i,c;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Ht(e.location,{replaceState:!0}));case 2:if(te.page.set(o),te.preloading.set(!1),!Jt){t.next=8;break}Jt.$set(n),t.next=18;break;case 8:return n.stores={page:{subscribe:te.page.subscribe},preloading:{subscribe:te.preloading.subscribe},session:te.session},t.next=11,Vt;case 11:if(t.t0=t.sent,n.level0={props:t.t0},n.notify=te.page.notify,i=document.querySelector("#sapper-head-start"),c=document.querySelector("#sapper-head-end"),i&&c){for(;i.nextSibling!==c;)$e(i.nextSibling);$e(i),$e(c)}Jt=new zt({target:ee,props:n,hydrate:!0});case 18:Qt=r,Zt=JSON.stringify(o.query),Xt=!0,Kt=!1;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function me(t,e,r,n){if(n!==Zt)return!0;var o=Qt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function ge(t){return ye.apply(this,arguments)}function ye(){return(ye=c(a.mark((function t(e){var r,n,o,i,u,s,f,l,p,h,d;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.page,o=n.path.split("/").filter(Boolean),i=null,u={error:null,status:200,segments:[o[0]]},s={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){u.error="string"==typeof e?new Error(e):e,u.status=t}},Vt||(Vt=Wt.preloaded[0]||bt.call(s,{host:n.host,path:n.path,query:n.query,params:{}},Yt)),l=1,t.prev=7,p=JSON.stringify(n.query),h=r.pattern.exec(n.path),d=!1,t.next=13,Promise.all(r.parts.map(function(){var t=c(a.mark((function t(r,i){var c,f,v,m,g,y;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=o[i],me(i,c,h,p)&&(d=!0),u.segments[l]=o[i+1],r){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(f=l++,Kt||d||!Qt[i]||Qt[i].part!==r.i){t.next=8;break}return t.abrupt("return",Qt[i]);case 8:return d=!1,t.next=11,we(Ft[r.i]);case 11:if(v=t.sent,m=v.default,g=v.preload,!Xt&&Wt.preloaded[i+1]){t.next=25;break}if(!g){t.next=21;break}return t.next=18,g.call(s,{host:n.host,path:n.path,query:n.query,params:r.params?r.params(e.match):{}},Yt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:y=t.t0,t.next=26;break;case 25:y=Wt.preloaded[i+1];case 26:return t.abrupt("return",u["level".concat(f)]={component:m,props:y,segment:c,match:h,part:r.i});case 27:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 13:f=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),u.error=t.t0,u.status=500,f=[];case 21:return t.abrupt("return",{redirect:i,props:u,branch:f});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function be(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise((function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)}))}function we(t){var e="string"==typeof t.css?[]:t.css.map(be);return e.unshift(t.js()),Promise.all(e).then((function(t){return t[0]}))}function $e(t){t.parentNode.removeChild(t)}function xe(t){var e=fe(new URL(t,document.baseURI));if(e)return re&&t===re.href||function(t,e){re={href:t,promise:e}}(t,ge(e)),re.promise}function Ee(t){clearTimeout(ae),ae=setTimeout((function(){_e(t)}),20)}function _e(t){var e=Le(t.target);e&&"prefetch"===e.rel&&xe(e.href)}function Se(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var r=Le(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&!(n?r.target.baseVal:r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=fe(a);if(i)pe(i,null,r.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),ce.pushState({id:ne},"",a.href)}}}else location.hash||e.preventDefault()}}}function Le(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ke(t){if(ue[ne]=le(),t.state){var e=fe(new URL(location.href));e?pe(e,t.state.id):location.href=location.href}else(function(t){ne=t})(oe=oe+1),ce.replaceState({id:ne},"",location.href)}ie={target:document.querySelector("#sapper")},"scrollRestoration"in ce&&(ce.scrollRestoration="manual"),addEventListener("beforeunload",(function(){ce.scrollRestoration="auto"})),addEventListener("load",(function(){ce.scrollRestoration="manual"})),function(t){ee=t}(ie.target),addEventListener("click",Se),addEventListener("popstate",ke),addEventListener("touchstart",_e),addEventListener("mousemove",Ee),Promise.resolve().then((function(){var t=location,e=t.hash,r=t.href;ce.replaceState({id:oe},"",r);var n,o,a,i,c,u,s,f,l=new URL(location.href);if(Wt.error)return n=location,o=n.host,a=n.pathname,i=n.search,c=Wt.session,u=Wt.preloaded,s=Wt.status,f=Wt.error,Vt||(Vt=u&&u[0]),void de(null,[],{error:f,status:s,session:c,level0:{props:Vt},level1:{props:{status:s,error:f},component:Ot},segments:u},{host:o,path:a,query:se(i),params:{}});var p=fe(l);return p?pe(p,oe,!0,e):void 0}));export{ft as A,lt as B,ot as C,at as D,pt as E,F,it as G,vt as S,f as _,u as a,p as b,d as c,l as d,A as e,j as f,k as g,T as h,dt as i,I as j,C as k,q as l,N as m,L as n,S as o,m as p,U as q,D as r,x as s,P as t,O as u,n as v,R as w,c as x,a as y,st as z};
