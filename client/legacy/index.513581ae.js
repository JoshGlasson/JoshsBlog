import{_ as t,a as n,b as s,c as r,i as e,s as a,d as c,S as o,f,e as l,t as i,j as u,k as h,g as v,h as p,l as g,m as d,n as m,o as y,r as b,u as E,q as R,v as j,p as D,w as x}from"./client.40664b5f.js";function H(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=n(t);if(r){var c=n(this).constructor;e=Reflect.construct(a,arguments,c)}else e=a.apply(this,arguments);return s(this,e)}}function q(t,n,s){var r=t.slice();return r[1]=n[s],r}function A(t){var n,s,r,e,a,c,o,E,R,j,D,x,H,q,A=t[1].title+"",I=t[1].headline+"";return{c:function(){n=f("div"),s=f("a"),r=f("img"),c=l(),o=f("a"),E=f("h1"),R=i(A),D=l(),x=f("h3"),H=i(I),q=l(),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var e=h(n);s=u(e,"A",{href:!0});var a=h(s);r=u(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(v),c=p(e),o=u(e,"A",{rel:!0,href:!0});var f=h(o);E=u(f,"H1",{class:!0});var l=h(E);R=g(l,A),l.forEach(v),f.forEach(v),D=p(e),x=u(e,"H3",{class:!0});var i=h(x);H=g(i,I),i.forEach(v),q=p(e),e.forEach(v),this.h()},h:function(){r.src!==(e=t[1].image)&&d(r,"src",e),d(r,"alt","Post Display"),d(r,"class","svelte-7tn3pa"),d(s,"href",a="blog/"+t[1].slug),d(E,"class","svelte-7tn3pa"),d(o,"rel","prefetch"),d(o,"href",j="blog/"+t[1].slug),d(x,"class","svelte-7tn3pa"),d(n,"class","svelte-7tn3pa")},m:function(t,e){m(t,n,e),y(n,s),y(s,r),y(n,c),y(n,o),y(o,E),y(E,R),y(n,D),y(n,x),y(x,H),y(n,q)},p:function(t,n){1&n&&r.src!==(e=t[1].image)&&d(r,"src",e),1&n&&a!==(a="blog/"+t[1].slug)&&d(s,"href",a),1&n&&A!==(A=t[1].title+"")&&b(R,A),1&n&&j!==(j="blog/"+t[1].slug)&&d(o,"href",j),1&n&&I!==(I=t[1].headline+"")&&b(H,I)},d:function(t){t&&v(n)}}}function I(t){for(var n,s,r,e,a,c=t[0],o=[],b=0;b<c.length;b+=1)o[b]=A(q(t,c,b));return{c:function(){n=l(),s=f("h1"),r=i("Recent posts"),e=l();for(var t=0;t<o.length;t+=1)o[t].c();a=E(),this.h()},l:function(t){R('[data-svelte="svelte-hfp9t8"]',document.head).forEach(v),n=p(t),s=u(t,"H1",{id:!0,class:!0});var c=h(s);r=g(c,"Recent posts"),c.forEach(v),e=p(t);for(var f=0;f<o.length;f+=1)o[f].l(t);a=E(),this.h()},h:function(){document.title="Blog",d(s,"id","pageTitle"),d(s,"class","svelte-7tn3pa")},m:function(t,c){m(t,n,c),m(t,s,c),y(s,r),m(t,e,c);for(var f=0;f<o.length;f+=1)o[f].m(t,c);m(t,a,c)},p:function(t,n){var s=j(n,1)[0];if(1&s){var r;for(c=t[0],r=0;r<c.length;r+=1){var e=q(t,c,r);o[r]?o[r].p(e,s):(o[r]=A(e),o[r].c(),o[r].m(a.parentNode,a))}for(;r<o.length;r+=1)o[r].d(1);o.length=c.length}},i:D,o:D,d:function(t){t&&v(n),t&&v(s),t&&v(e),x(o,t),t&&v(a)}}}function P(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return t.sort().reverse(),{posts:t}}))}function S(t,n,s){var r=n.posts;return t.$set=function(t){"posts"in t&&s(0,r=t.posts)},[r]}var k=function(n){t(f,o);var s=H(f);function f(t){var n;return r(this,f),n=s.call(this),e(c(n),t,S,I,a,{posts:0}),n}return f}();export default k;export{P as preload};
