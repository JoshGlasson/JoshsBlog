import{_ as t,a as e,b as n,c as s,i as r,s as a,d as c,S as o,f as i,e as f,t as l,j as u,k as h,h as v,l as p,g,m as d,n as m,o as b,r as x,u as y,q as R,v as w,p as E,w as j}from"./client.8bbd3169.js";function D(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=e(t);if(s){var c=e(this).constructor;r=Reflect.construct(a,arguments,c)}else r=a.apply(this,arguments);return n(this,r)}}function H(t,e,n){var s=t.slice();return s[1]=e[n],s}function q(t){var e,n,s,r,a,c,o,y,R,w,E,j,D=t[1].title+"",H=t[1].headline+"";return{c:function(){e=i("div"),n=i("img"),r=f(),a=i("a"),c=i("h1"),o=l(D),R=f(),w=i("h3"),E=l(H),j=f(),this.h()},l:function(t){e=u(t,"DIV",{class:!0});var s=h(e);n=u(s,"IMG",{src:!0,alt:!0,class:!0}),r=v(s),a=u(s,"A",{rel:!0,href:!0});var i=h(a);c=u(i,"H1",{class:!0});var f=h(c);o=p(f,D),f.forEach(g),i.forEach(g),R=v(s),w=u(s,"H3",{class:!0});var l=h(w);E=p(l,H),l.forEach(g),j=v(s),s.forEach(g),this.h()},h:function(){n.src!==(s=t[1].image)&&d(n,"src",s),d(n,"alt","Post Display"),d(n,"class","svelte-ebaxw4"),d(c,"class","svelte-ebaxw4"),d(a,"rel","prefetch"),d(a,"href",y="blog/"+t[1].slug),d(w,"class","svelte-ebaxw4"),d(e,"class","svelte-ebaxw4")},m:function(t,s){m(t,e,s),b(e,n),b(e,r),b(e,a),b(a,c),b(c,o),b(e,R),b(e,w),b(w,E),b(e,j)},p:function(t,e){1&e&&n.src!==(s=t[1].image)&&d(n,"src",s),1&e&&D!==(D=t[1].title+"")&&x(o,D),1&e&&y!==(y="blog/"+t[1].slug)&&d(a,"href",y),1&e&&H!==(H=t[1].headline+"")&&x(E,H)},d:function(t){t&&g(e)}}}function I(t){for(var e,n,s,r,a,c=t[0],o=[],x=0;x<c.length;x+=1)o[x]=q(H(t,c,x));return{c:function(){e=f(),n=i("h1"),s=l("Recent posts"),r=f();for(var t=0;t<o.length;t+=1)o[t].c();a=y(),this.h()},l:function(t){R('[data-svelte="svelte-hfp9t8"]',document.head).forEach(g),e=v(t),n=u(t,"H1",{id:!0,class:!0});var c=h(n);s=p(c,"Recent posts"),c.forEach(g),r=v(t);for(var i=0;i<o.length;i+=1)o[i].l(t);a=y(),this.h()},h:function(){document.title="Blog",d(n,"id","pageTitle"),d(n,"class","svelte-ebaxw4")},m:function(t,c){m(t,e,c),m(t,n,c),b(n,s),m(t,r,c);for(var i=0;i<o.length;i+=1)o[i].m(t,c);m(t,a,c)},p:function(t,e){var n=w(e,1)[0];if(1&n){var s;for(c=t[0],s=0;s<c.length;s+=1){var r=H(t,c,s);o[s]?o[s].p(r,n):(o[s]=q(r),o[s].c(),o[s].m(a.parentNode,a))}for(;s<o.length;s+=1)o[s].d(1);o.length=c.length}},i:E,o:E,d:function(t){t&&g(e),t&&g(n),t&&g(r),j(o,t),t&&g(a)}}}function P(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function S(t,e,n){var s=e.posts;return t.$set=function(t){"posts"in t&&n(0,s=t.posts)},[s]}var k=function(e){t(i,o);var n=D(i);function i(t){var e;return s(this,i),e=n.call(this),r(c(e),t,S,I,a,{posts:0}),e}return i}();export default k;export{P as preload};
