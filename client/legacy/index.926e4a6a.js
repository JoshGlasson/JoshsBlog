import{_ as t,a as s,b as e,c as r,i as a,s as n,d as c,S as o,f as l,e as i,t as f,j as h,k as u,g as v,h as p,l as d,m as g,n as m,o as b,r as q,u as E,q as k,v as y,p as R,w as D}from"./client.4c0d6e3a.js";function j(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=s(t);if(r){var c=s(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return e(this,a)}}function x(t,s,e){var r=t.slice();return r[1]=s[e],r}function I(t){var s,e,r,a,n,c,o,E,k,y,R,D,j,x,I,H,V=t[1].title+"",A=t[1].headline+"";return{c:function(){s=l("div"),e=l("div"),r=l("a"),a=l("img"),o=i(),E=l("div"),k=l("a"),y=l("h1"),R=f(V),j=i(),x=l("h2"),I=f(A),H=i(),this.h()},l:function(t){s=h(t,"DIV",{class:!0});var n=u(s);e=h(n,"DIV",{id:!0,class:!0});var c=u(e);r=h(c,"A",{href:!0});var l=u(r);a=h(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(v),c.forEach(v),o=p(n),E=h(n,"DIV",{id:!0,class:!0});var i=u(E);k=h(i,"A",{rel:!0,href:!0});var f=u(k);y=h(f,"H1",{class:!0});var g=u(y);R=d(g,V),g.forEach(v),f.forEach(v),j=p(i),x=h(i,"H2",{class:!0});var m=u(x);I=d(m,A),m.forEach(v),i.forEach(v),H=p(n),n.forEach(v),this.h()},h:function(){a.src!==(n=t[1].image)&&g(a,"src",n),g(a,"alt","Thumbnail"),g(a,"class","svelte-1lbakqh"),g(r,"href",c="blog/"+t[1].slug),g(e,"id","thumb"),g(e,"class","svelte-1lbakqh"),g(y,"class","svelte-1lbakqh"),g(k,"rel","prefetch"),g(k,"href",D="blog/"+t[1].slug),g(x,"class","svelte-1lbakqh"),g(E,"id","text"),g(E,"class","svelte-1lbakqh"),g(s,"class","svelte-1lbakqh")},m:function(t,n){m(t,s,n),b(s,e),b(e,r),b(r,a),b(s,o),b(s,E),b(E,k),b(k,y),b(y,R),b(E,j),b(E,x),b(x,I),b(s,H)},p:function(t,s){1&s&&a.src!==(n=t[1].image)&&g(a,"src",n),1&s&&c!==(c="blog/"+t[1].slug)&&g(r,"href",c),1&s&&V!==(V=t[1].title+"")&&q(R,V),1&s&&D!==(D="blog/"+t[1].slug)&&g(k,"href",D),1&s&&A!==(A=t[1].headline+"")&&q(I,A)},d:function(t){t&&v(s)}}}function H(t){for(var s,e,r,a,n,c=t[0],o=[],q=0;q<c.length;q+=1)o[q]=I(x(t,c,q));return{c:function(){s=i(),e=l("h1"),r=f("Recent posts"),a=i();for(var t=0;t<o.length;t+=1)o[t].c();n=E(),this.h()},l:function(t){k('[data-svelte="svelte-hfp9t8"]',document.head).forEach(v),s=p(t),e=h(t,"H1",{id:!0,class:!0});var c=u(e);r=d(c,"Recent posts"),c.forEach(v),a=p(t);for(var l=0;l<o.length;l+=1)o[l].l(t);n=E(),this.h()},h:function(){document.title="Blog",g(e,"id","pageTitle"),g(e,"class","svelte-1lbakqh")},m:function(t,c){m(t,s,c),m(t,e,c),b(e,r),m(t,a,c);for(var l=0;l<o.length;l+=1)o[l].m(t,c);m(t,n,c)},p:function(t,s){var e=y(s,1)[0];if(1&e){var r;for(c=t[0],r=0;r<c.length;r+=1){var a=x(t,c,r);o[r]?o[r].p(a,e):(o[r]=I(a),o[r].c(),o[r].m(n.parentNode,n))}for(;r<o.length;r+=1)o[r].d(1);o.length=c.length}},i:R,o:R,d:function(t){t&&v(s),t&&v(e),t&&v(a),D(o,t),t&&v(n)}}}function V(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return t.sort().reverse(),{posts:t}}))}function A(t,s,e){var r=s.posts;return t.$set=function(t){"posts"in t&&e(0,r=t.posts)},[r]}var S=function(s){t(l,o);var e=j(l);function l(t){var s;return r(this,l),s=e.call(this),a(c(s),t,A,H,n,{posts:0}),s}return l}();export default S;export{V as preload};
