import{S as s,i as t,s as e,e as a,a as o,t as l,b as c,f as n,d as r,c as i,g as d,h,j as m,k as v,n as f,p as u,q as y,r as p,u as g,l as b,v as E,w,x as I,y as $,z as q}from"./client.c658d2e2.js";function H(s){let t,e,u,y,p,g,b,E,w,I,$,q,H,M;return{c(){t=a("div"),e=a("a"),u=a("img"),p=o(),g=a("h3"),b=l("Post by"),E=o(),w=a("a"),I=a("h1"),$=l("Josh Glasson"),q=o(),H=a("h3"),M=l("Software Developer. Creator and owner of this blog."),this.h()},l(s){t=c(s,"DIV",{class:!0});var a=n(t);e=c(a,"A",{href:!0});var o=n(e);u=c(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(r),p=i(a),g=c(a,"H3",{class:!0});var l=n(g);b=d(l,"Post by"),l.forEach(r),E=i(a),w=c(a,"A",{href:!0});var h=n(w);I=c(h,"H1",{class:!0});var m=n(I);$=d(m,"Josh Glasson"),m.forEach(r),h.forEach(r),q=i(a),H=c(a,"H3",{class:!0});var v=n(H);M=d(v,"Software Developer. Creator and owner of this blog."),v.forEach(r),a.forEach(r),this.h()},h(){u.src!==(y="./images/Small Profile Pic.jpg")&&h(u,"src","./images/Small Profile Pic.jpg"),h(u,"alt","Me"),h(u,"class","svelte-a31lbt"),h(e,"href","about"),h(g,"class","svelte-a31lbt"),h(I,"class","svelte-a31lbt"),h(w,"href","about"),h(H,"class","svelte-a31lbt"),h(t,"class","svelte-a31lbt")},m(s,a){m(s,t,a),v(t,e),v(e,u),v(t,p),v(t,g),v(g,b),v(t,E),v(t,w),v(w,I),v(I,$),v(t,q),v(t,H),v(H,M)},p:f,i:f,o:f,d(s){s&&r(t)}}}class M extends s{constructor(s){super(),t(this,s,null,H,e,{})}}const{document:D}=q;function T(s){let t,e,f,$,q,H,T,x,P,S,j,k,L,B,G,V,C,N,A,Y,J,z,O=s[0].title+"",R=s[0].headline+"",F=s[0].html+"";return D.title=t=s[0].title,J=new M({}),{c(){e=o(),f=a("div"),$=a("h1"),q=l(O),H=o(),T=a("h2"),x=a("strong"),P=l(R),S=o(),j=a("div"),k=o(),L=a("div"),B=a("span"),G=l("×"),V=o(),C=a("img"),N=o(),A=a("div"),Y=o(),u(J.$$.fragment),this.h()},l(s){y('[data-svelte="svelte-1uty71u"]',D.head).forEach(r),e=i(s),f=c(s,"DIV",{class:!0});var t=n(f);$=c(t,"H1",{class:!0});var a=n($);q=d(a,O),a.forEach(r),H=i(t),T=c(t,"H2",{class:!0});var o=n(T);x=c(o,"STRONG",{});var l=n(x);P=d(l,R),l.forEach(r),o.forEach(r),t.forEach(r),S=i(s),j=c(s,"DIV",{class:!0}),n(j).forEach(r),k=i(s),L=c(s,"DIV",{id:!0,class:!0});var h=n(L);B=c(h,"SPAN",{class:!0});var m=n(B);G=d(m,"×"),m.forEach(r),V=i(h),C=c(h,"IMG",{class:!0,id:!0,alt:!0}),N=i(h),A=c(h,"DIV",{id:!0,class:!0}),n(A).forEach(r),h.forEach(r),Y=i(s),p(J.$$.fragment,s),this.h()},h(){h($,"class","svelte-d4mvhq"),h(T,"class","svelte-d4mvhq"),h(f,"class","postTitle svelte-d4mvhq"),h(j,"class","content svelte-d4mvhq"),h(B,"class","close svelte-d4mvhq"),h(C,"class","modal-content svelte-d4mvhq"),h(C,"id","img01"),h(C,"alt","modal"),h(A,"id","caption"),h(A,"class","svelte-d4mvhq"),h(L,"id","myModal"),h(L,"class","modal svelte-d4mvhq")},m(s,t){m(s,e,t),m(s,f,t),v(f,$),v($,q),v(f,H),v(f,T),v(T,x),v(x,P),m(s,S,t),m(s,j,t),j.innerHTML=F,m(s,k,t),m(s,L,t),v(L,B),v(B,G),v(L,V),v(L,C),v(L,N),v(L,A),m(s,Y,t),g(J,s,t),z=!0},p(s,[e]){(!z||1&e)&&t!==(t=s[0].title)&&(D.title=t),(!z||1&e)&&O!==(O=s[0].title+"")&&b(q,O),(!z||1&e)&&R!==(R=s[0].headline+"")&&b(P,R),(!z||1&e)&&F!==(F=s[0].html+"")&&(j.innerHTML=F)},i(s){z||(E(J.$$.fragment,s),z=!0)},o(s){w(J.$$.fragment,s),z=!1},d(s){s&&r(e),s&&r(f),s&&r(S),s&&r(j),s&&r(k),s&&r(L),s&&r(Y),I(J,s)}}}async function x({params:s,query:t}){const e=await this.fetch(`blog/${s.slug}.json`),a=await e.json();if(200===e.status)return{post:a};this.error(e.status,a.message)}function P(s,t,e){let{post:a}=t;return $(()=>{for(var s=document.getElementById("myModal"),t=document.getElementsByClassName("myImg"),e=document.getElementById("img01"),a=document.getElementById("caption"),o=0;o<t.length;o++)t[o].addEventListener("click",(function(t){t.preventDefault(),document.body.style.top=`-${window.scrollY}px`,s.style.display="block",e.src=this.src,a.innerHTML=this.alt,document.body.style.position="fixed"}));var l=document.getElementsByClassName("close")[0],c=0,n=0;function r(){s.style.display="none";const t=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*parseInt(t||"0")),document.body.style.left="",document.body.style.transform=""}window.addEventListener("touchstart",(function(t){"block"===s.style.display&&(console.log("touchstart"),console.log(t),c=t.changedTouches[0].screenY)}),!1),window.addEventListener("touchend",(function(t){var e,a;"block"===s.style.display&&(console.log("touchend"),n=t.changedTouches[0].screenY,e=Math.abs(c-n),a=window.innerHeight/3,console.log(e),e>a&&r())}),!1),l.onclick=function(){r()}}),s.$set=s=>{"post"in s&&e(0,a=s.post)},[a]}export default class extends s{constructor(s){super(),t(this,s,P,T,e,{post:0})}}export{x as preload};
