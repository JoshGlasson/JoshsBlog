import{S as s,i as e,s as t,e as a,a as l,t as r,b as o,f as c,d as h,c as n,g as f,h as i,j as g,k as p,l as u,m as d,q as v,n as m,o as b}from"./client.8c4563e2.js";function x(s,e,t){const a=s.slice();return a[1]=e[t],a}function E(s){let e,t,d,v,m,b,x,E,w,j,H,q,y,A,D=s[1].title+"",I=s[1].headline+"";return{c(){e=a("div"),t=a("a"),d=a("img"),b=l(),x=a("a"),E=a("h1"),w=r(D),H=l(),q=a("h3"),y=r(I),A=l(),this.h()},l(s){e=o(s,"DIV",{class:!0});var a=c(e);t=o(a,"A",{href:!0});var l=c(t);d=o(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(h),b=n(a),x=o(a,"A",{rel:!0,href:!0});var r=c(x);E=o(r,"H1",{class:!0});var i=c(E);w=f(i,D),i.forEach(h),r.forEach(h),H=n(a),q=o(a,"H3",{class:!0});var g=c(q);y=f(g,I),g.forEach(h),A=n(a),a.forEach(h),this.h()},h(){d.src!==(v=s[1].image)&&i(d,"src",v),i(d,"alt","Post Display"),i(d,"class","svelte-ebaxw4"),i(t,"href",m="blog/"+s[1].slug),i(E,"class","svelte-ebaxw4"),i(x,"rel","prefetch"),i(x,"href",j="blog/"+s[1].slug),i(q,"class","svelte-ebaxw4"),i(e,"class","svelte-ebaxw4")},m(s,a){g(s,e,a),p(e,t),p(t,d),p(e,b),p(e,x),p(x,E),p(E,w),p(e,H),p(e,q),p(q,y),p(e,A)},p(s,e){1&e&&d.src!==(v=s[1].image)&&i(d,"src",v),1&e&&m!==(m="blog/"+s[1].slug)&&i(t,"href",m),1&e&&D!==(D=s[1].title+"")&&u(w,D),1&e&&j!==(j="blog/"+s[1].slug)&&i(x,"href",j),1&e&&I!==(I=s[1].headline+"")&&u(y,I)},d(s){s&&h(e)}}}function w(s){let e,t,u,w,j,H=s[0],q=[];for(let e=0;e<H.length;e+=1)q[e]=E(x(s,H,e));return{c(){e=l(),t=a("h1"),u=r("Recent posts"),w=l();for(let s=0;s<q.length;s+=1)q[s].c();j=d(),this.h()},l(s){v('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),e=n(s),t=o(s,"H1",{id:!0,class:!0});var a=c(t);u=f(a,"Recent posts"),a.forEach(h),w=n(s);for(let e=0;e<q.length;e+=1)q[e].l(s);j=d(),this.h()},h(){document.title="Blog",i(t,"id","pageTitle"),i(t,"class","svelte-ebaxw4")},m(s,a){g(s,e,a),g(s,t,a),p(t,u),g(s,w,a);for(let e=0;e<q.length;e+=1)q[e].m(s,a);g(s,j,a)},p(s,[e]){if(1&e){let t;for(H=s[0],t=0;t<H.length;t+=1){const a=x(s,H,t);q[t]?q[t].p(a,e):(q[t]=E(a),q[t].c(),q[t].m(j.parentNode,j))}for(;t<q.length;t+=1)q[t].d(1);q.length=H.length}},i:m,o:m,d(s){s&&h(e),s&&h(t),s&&h(w),b(q,s),s&&h(j)}}}function j({params:s,query:e}){return this.fetch("blog.json").then(s=>s.json()).then(s=>(s.sort().reverse(),{posts:s}))}function H(s,e,t){let{posts:a}=e;return s.$set=s=>{"posts"in s&&t(0,a=s.posts)},[a]}export default class extends s{constructor(s){super(),e(this,s,H,w,t,{posts:0})}}export{j as preload};
