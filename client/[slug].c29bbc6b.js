import{S as t,i as e,s as a,e as s,a as n,c as r,b as l,d as o,f as c,h as i,k as d,n as h,o as p,t as m,g as u,j as f,u as g,q as v,v as w,w as E,m as _,x as b,y,z as x,l as T}from"./client.ac30613f.js";function D(t){let e,a,p;return{c(){e=s("div"),a=n(),p=s("div"),this.h()},l(t){e=r(t,"DIV",{id:!0}),l(e).forEach(o),a=c(t),p=r(t,"DIV",{id:!0}),l(p).forEach(o),this.h()},h(){i(e,"id","recentPosts"),i(p,"id","relatedPosts")},m(t,s){d(t,e,s),d(t,a,s),d(t,p,s)},p:h,i:h,o:h,d(t){t&&o(e),t&&o(a),t&&o(p)}}}function I(t,e,a){let{posts:s}=e,{currentPost:n}=e,r=Object.values(s)[0].slice();return p(async()=>{let t=[],e=[],a=[];for(var s=0;s<r.length;s++)r[s].title==n.title&&r.splice(s,1);t=r.slice().splice(0,2);for(s=0;s<r.length;s++){var l=r[s];n.tags.indexOf(l.tags[0])>-1&&a.push(l)}await async function(){await async function(t,s){if(a.length>1){let n=Math.floor(Math.random()*(s-t+1))+t,r=Math.floor(Math.random()*(s-t+1))+t;for(;n===r;)r=Math.floor(Math.random()*(s-t+1))+t;e.push(a[n]),e.push(a[r])}else e=a.slice()}(0,a.length-1);var t=document.getElementById("relatedPosts");if(e.length>0){var s=document.createElement("h1");s.innerText="Related Posts",s.style.borderBottom="1px solid lightgray",t.insertBefore(s,t.firstChild)}for(var n=0;n<e.length;n++){var r=e[n],l=document.createElement("div"),o=document.createElement("a"),c=document.createElement("img"),i=document.createElement("a"),d=document.createElement("h2"),h=document.createElement("h3");h.innerText=r.headline,h.style.verticalAlign="middle",d.innerText=r.title,i.href="blog/"+r.slug,i.rel="external",c.src=r.image,c.alt="Post Thumbnail",c.className="Thumbnail",c.style.display="block",c.style.float="left",c.style.maxWidth="100px",c.style.maxHeight="100px",c.style.margin="0 1em 0 0",o.href="blog/"+r.slug,o.rel="external",o.appendChild(c),i.appendChild(d),l.appendChild(o),l.appendChild(i),l.appendChild(h),l.style.margin="0 0 1em 0",l.style.width="100%",l.style.overflowX="auto",t.appendChild(l)}}(),await async function(){var e=document.getElementById("recentPosts");if(t.length>0){var a=document.createElement("h1");a.innerText="Recent Posts",a.style.borderBottom="1px solid lightgray",e.insertBefore(a,e.firstChild)}for(var s=0;s<t.length;s++){var n=t[s],r=document.createElement("div"),l=document.createElement("a"),o=document.createElement("img"),c=document.createElement("a"),i=document.createElement("h2"),d=document.createElement("h3");d.innerText=n.headline,d.style.verticalAlign="middle",i.innerText=n.title,c.href="blog/"+n.slug,c.rel="external",o.src=n.image,o.alt="Post Thumbnail",o.className="Thumbnail",o.style.display="block",o.style.float="left",o.style.maxWidth="100px",o.style.maxHeight="100px",o.style.margin="0 1em 0 0",l.href="blog/"+n.slug,l.rel="external",l.appendChild(o),c.appendChild(i),r.appendChild(l),r.appendChild(c),r.appendChild(d),r.style.margin="0 0 1em 0",r.style.width="100%",r.style.overflowX="auto",e.appendChild(r)}}()}),t.$set=t=>{"posts"in t&&a(0,s=t.posts),"currentPost"in t&&a(1,n=t.currentPost)},[s,n]}class C extends t{constructor(t){super(),e(this,t,I,D,a,{posts:0,currentPost:1})}}function V(t){let e,a,p,g,v,w,E,_,b,y,x,T,D,I;return{c(){e=s("div"),a=s("a"),p=s("img"),v=n(),w=s("h3"),E=m("Post by"),_=n(),b=s("a"),y=s("h1"),x=m("Josh Glasson"),T=n(),D=s("h3"),I=m("Software Developer. Creator and owner of this blog."),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=l(e);a=r(s,"A",{href:!0});var n=l(a);p=r(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(o),v=c(s),w=r(s,"H3",{class:!0});var i=l(w);E=u(i,"Post by"),i.forEach(o),_=c(s),b=r(s,"A",{href:!0});var d=l(b);y=r(d,"H1",{class:!0});var h=l(y);x=u(h,"Josh Glasson"),h.forEach(o),d.forEach(o),T=c(s),D=r(s,"H3",{class:!0});var m=l(D);I=u(m,"Software Developer. Creator and owner of this blog."),m.forEach(o),s.forEach(o),this.h()},h(){p.src!==(g="./images/about/Small Profile Pic.jpg")&&i(p,"src","./images/about/Small Profile Pic.jpg"),i(p,"alt","Me"),i(p,"class","signature-image svelte-b7hd5f"),i(a,"href","about"),i(w,"class","svelte-b7hd5f"),i(y,"class","svelte-b7hd5f"),i(b,"href","about"),i(D,"class","svelte-b7hd5f"),i(e,"class","svelte-b7hd5f")},m(t,s){d(t,e,s),f(e,a),f(a,p),f(e,v),f(e,w),f(w,E),f(e,_),f(e,b),f(b,y),f(y,x),f(e,T),f(e,D),f(D,I)},p:h,i:h,o:h,d(t){t&&o(e)}}}class P extends t{constructor(t){super(),e(this,t,null,V,a,{})}}const{document:N}=T;function B(t){let e,a,h,p,T,D,I,V,B,M,$,j,S,O,A,U,H,k,R,G,z,q,L,J,W,X,Z,F,K,Q,Y,tt,et,at,st,nt,rt,lt,ot,ct,it,dt,ht,pt,mt,ut,ft,gt,vt,wt,Et,_t,bt,yt,xt,Tt,Dt,It,Ct,Vt,Pt,Nt,Bt,Mt,$t,jt,St,Ot,At,Ut,Ht,kt,Rt,Gt,zt,qt,Lt,Jt,Wt=t[0].title+"",Xt=t[0].headline+"",Zt=t[0].html+"";return N.title=e=t[0].title,rt=new P({}),ot=new C({props:{posts:t[1],currentPost:t[0]}}),{c(){a=s("meta"),h=s("meta"),p=s("meta"),T=s("meta"),I=s("meta"),V=s("meta"),M=s("meta"),$=n(),j=s("div"),S=s("h1"),O=m(Wt),A=n(),U=s("h2"),H=s("strong"),k=m(Xt),R=n(),G=s("div"),z=s("img"),J=n(),W=s("div"),X=s("h3"),Z=s("i"),F=m("Originally posted on "),K=m(t[2]),Q=n(),Y=s("div"),tt=n(),et=s("div"),at=n(),st=s("br"),nt=n(),g(rt.$$.fragment),lt=n(),g(ot.$$.fragment),ct=n(),it=s("div"),dt=s("div"),ht=n(),pt=s("div"),mt=s("div"),ut=s("div"),ft=n(),gt=s("div"),vt=n(),wt=s("div"),Et=n(),_t=s("div"),bt=s("div"),yt=s("div"),xt=n(),Tt=s("button"),Dt=n(),It=s("button"),Ct=n(),Vt=s("button"),Pt=n(),Nt=s("button"),Bt=n(),Mt=s("div"),$t=s("div"),jt=s("div"),St=s("div"),Ot=n(),At=s("div"),Ut=s("div"),Ht=n(),kt=s("button"),Rt=n(),Gt=s("button"),zt=n(),qt=s("div"),Lt=s("div"),this.h()},l(e){const s=v('[data-svelte="svelte-btz695"]',N.head);a=r(s,"META",{name:!0,content:!0}),h=r(s,"META",{name:!0,content:!0}),p=r(s,"META",{name:!0,content:!0}),T=r(s,"META",{property:!0,content:!0}),I=r(s,"META",{property:!0,content:!0}),V=r(s,"META",{property:!0,content:!0}),M=r(s,"META",{property:!0,content:!0}),s.forEach(o),$=c(e),j=r(e,"DIV",{class:!0});var n=l(j);S=r(n,"H1",{class:!0});var i=l(S);O=u(i,Wt),i.forEach(o),A=c(n),U=r(n,"H2",{class:!0});var d=l(U);H=r(d,"STRONG",{});var m=l(H);k=u(m,Xt),m.forEach(o),d.forEach(o),n.forEach(o),R=c(e),G=r(e,"DIV",{class:!0});var f=l(G);z=r(f,"IMG",{src:!0,alt:!0,width:!0}),f.forEach(o),J=c(e),W=r(e,"DIV",{class:!0});var g=l(W);X=r(g,"H3",{});var E=l(X);Z=r(E,"I",{});var _=l(Z);F=u(_,"Originally posted on "),K=u(_,t[2]),_.forEach(o),E.forEach(o),g.forEach(o),Q=c(e),Y=r(e,"DIV",{class:!0}),l(Y).forEach(o),tt=c(e),et=r(e,"DIV",{class:!0}),l(et).forEach(o),at=c(e),st=r(e,"BR",{}),nt=c(e),w(rt.$$.fragment,e),lt=c(e),w(ot.$$.fragment,e),ct=c(e),it=r(e,"DIV",{class:!0,tabindex:!0,role:!0,"aria-hidden":!0});var b=l(it);dt=r(b,"DIV",{class:!0}),l(dt).forEach(o),ht=c(b),pt=r(b,"DIV",{class:!0});var y=l(pt);mt=r(y,"DIV",{class:!0});var x=l(mt);ut=r(x,"DIV",{class:!0}),l(ut).forEach(o),ft=c(x),gt=r(x,"DIV",{class:!0}),l(gt).forEach(o),vt=c(x),wt=r(x,"DIV",{class:!0}),l(wt).forEach(o),x.forEach(o),Et=c(y),_t=r(y,"DIV",{class:!0});var D=l(_t);bt=r(D,"DIV",{class:!0});var C=l(bt);yt=r(C,"DIV",{class:!0}),l(yt).forEach(o),xt=c(C),Tt=r(C,"BUTTON",{class:!0,title:!0}),l(Tt).forEach(o),Dt=c(C),It=r(C,"BUTTON",{class:!0,title:!0}),l(It).forEach(o),Ct=c(C),Vt=r(C,"BUTTON",{class:!0,title:!0}),l(Vt).forEach(o),Pt=c(C),Nt=r(C,"BUTTON",{class:!0,title:!0}),l(Nt).forEach(o),Bt=c(C),Mt=r(C,"DIV",{class:!0});var P=l(Mt);$t=r(P,"DIV",{class:!0});var B=l($t);jt=r(B,"DIV",{class:!0});var q=l(jt);St=r(q,"DIV",{class:!0}),l(St).forEach(o),q.forEach(o),B.forEach(o),P.forEach(o),C.forEach(o),Ot=c(D),At=r(D,"DIV",{class:!0});var L=l(At);Ut=r(L,"DIV",{class:!0}),l(Ut).forEach(o),L.forEach(o),Ht=c(D),kt=r(D,"BUTTON",{class:!0,title:!0}),l(kt).forEach(o),Rt=c(D),Gt=r(D,"BUTTON",{class:!0,title:!0}),l(Gt).forEach(o),zt=c(D),qt=r(D,"DIV",{class:!0});var Jt=l(qt);Lt=r(Jt,"DIV",{class:!0}),l(Lt).forEach(o),Jt.forEach(o),D.forEach(o),y.forEach(o),b.forEach(o),this.h()},h(){i(a,"name","twitter:card"),i(a,"content","summary"),i(h,"name","twitter:site"),i(h,"content","@joshglasson"),i(p,"name","twitter:creator"),i(p,"content","@joshglasson"),i(T,"property","og:title"),i(T,"content",D=t[0].title),i(I,"property","og:image"),i(I,"content",t[4]),i(V,"property","og:description"),i(V,"content",B=t[0].headline),i(M,"property","og:url"),i(M,"content",t[3]),i(S,"class","svelte-2ne1xb"),i(U,"class","svelte-2ne1xb"),i(j,"class","postTitle svelte-2ne1xb"),z.src!==(q=t[0].image)&&i(z,"src",q),i(z,"alt",L=t[0].title),i(z,"width","100%"),i(G,"class","postImage"),i(W,"class","date svelte-2ne1xb"),i(Y,"class","readTime svelte-2ne1xb"),i(et,"class","content svelte-2ne1xb"),i(dt,"class","pswp__bg"),i(ut,"class","pswp__item"),i(gt,"class","pswp__item"),i(wt,"class","pswp__item"),i(mt,"class","pswp__container"),i(yt,"class","pswp__counter"),i(Tt,"class","pswp__button pswp__button--close"),i(Tt,"title","Close (Esc)"),i(It,"class","pswp__button pswp__button--share"),i(It,"title","Share"),i(Vt,"class","pswp__button pswp__button--fs"),i(Vt,"title","Toggle fullscreen"),i(Nt,"class","pswp__button pswp__button--zoom"),i(Nt,"title","Zoom in/out"),i(St,"class","pswp__preloader__donut"),i(jt,"class","pswp__preloader__cut"),i($t,"class","pswp__preloader__icn"),i(Mt,"class","pswp__preloader"),i(bt,"class","pswp__top-bar"),i(Ut,"class","pswp__share-tooltip"),i(At,"class","pswp__share-modal pswp__share-modal--hidden pswp__single-tap"),i(kt,"class","pswp__button pswp__button--arrow--left"),i(kt,"title","Previous (arrow left)"),i(Gt,"class","pswp__button pswp__button--arrow--right"),i(Gt,"title","Next (arrow right)"),i(Lt,"class","pswp__caption__center"),i(qt,"class","pswp__caption"),i(_t,"class","pswp__ui pswp__ui--hidden"),i(pt,"class","pswp__scroll-wrap"),i(it,"class","pswp"),i(it,"tabindex","-1"),i(it,"role","dialog"),i(it,"aria-hidden","true")},m(t,e){f(N.head,a),f(N.head,h),f(N.head,p),f(N.head,T),f(N.head,I),f(N.head,V),f(N.head,M),d(t,$,e),d(t,j,e),f(j,S),f(S,O),f(j,A),f(j,U),f(U,H),f(H,k),d(t,R,e),d(t,G,e),f(G,z),d(t,J,e),d(t,W,e),f(W,X),f(X,Z),f(Z,F),f(Z,K),d(t,Q,e),d(t,Y,e),d(t,tt,e),d(t,et,e),et.innerHTML=Zt,d(t,at,e),d(t,st,e),d(t,nt,e),E(rt,t,e),d(t,lt,e),E(ot,t,e),d(t,ct,e),d(t,it,e),f(it,dt),f(it,ht),f(it,pt),f(pt,mt),f(mt,ut),f(mt,ft),f(mt,gt),f(mt,vt),f(mt,wt),f(pt,Et),f(pt,_t),f(_t,bt),f(bt,yt),f(bt,xt),f(bt,Tt),f(bt,Dt),f(bt,It),f(bt,Ct),f(bt,Vt),f(bt,Pt),f(bt,Nt),f(bt,Bt),f(bt,Mt),f(Mt,$t),f($t,jt),f(jt,St),f(_t,Ot),f(_t,At),f(At,Ut),f(_t,Ht),f(_t,kt),f(_t,Rt),f(_t,Gt),f(_t,zt),f(_t,qt),f(qt,Lt),Jt=!0},p(t,[a]){(!Jt||1&a)&&e!==(e=t[0].title)&&(N.title=e),(!Jt||1&a&&D!==(D=t[0].title))&&i(T,"content",D),(!Jt||1&a&&B!==(B=t[0].headline))&&i(V,"content",B),(!Jt||1&a)&&Wt!==(Wt=t[0].title+"")&&_(O,Wt),(!Jt||1&a)&&Xt!==(Xt=t[0].headline+"")&&_(k,Xt),(!Jt||1&a&&z.src!==(q=t[0].image))&&i(z,"src",q),(!Jt||1&a&&L!==(L=t[0].title))&&i(z,"alt",L),(!Jt||1&a)&&Zt!==(Zt=t[0].html+"")&&(et.innerHTML=Zt);const s={};2&a&&(s.posts=t[1]),1&a&&(s.currentPost=t[0]),ot.$set(s)},i(t){Jt||(b(rt.$$.fragment,t),b(ot.$$.fragment,t),Jt=!0)},o(t){y(rt.$$.fragment,t),y(ot.$$.fragment,t),Jt=!1},d(t){o(a),o(h),o(p),o(T),o(I),o(V),o(M),t&&o($),t&&o(j),t&&o(R),t&&o(G),t&&o(J),t&&o(W),t&&o(Q),t&&o(Y),t&&o(tt),t&&o(et),t&&o(at),t&&o(st),t&&o(nt),x(rt,t),t&&o(lt),x(ot,t),t&&o(ct),t&&o(it)}}}async function M({params:t,query:e}){const a=await this.fetch(`blog/${t.slug}.json`),s=await a.json(),n=await this.fetch("blog.json").then(t=>t.json()).then(t=>(t.sort((t,e)=>Date.parse(t.sortdate)>Date.parse(e.sortdate)?1:Date.parse(e.sortdate)>Date.parse(t.sortdate)?-1:0).reverse(),{posts:t}));if(200===a.status)return{post:s,posts:n};this.error(a.status,s.message)}function $(t,e,a){let{post:s}=e,{posts:n}=e,r=new Date(s.originaldate),l=new Date(s.sortdate),o=r.toDateString(),c="https://joshglasson.co.uk/blog/"+encodeURI(s.slug),i="https://joshglasson.co.uk"+encodeURI(s.image.substring(1));return p(async()=>{let t=(await import("./jquery.d4c3722b.js").then((function(t){return t.j}))).default;let e=(await import("./index.be1cfbce.js").then((function(t){return t.i}))).default;if(async function(){var a=await async function(){for(var e=t(s.html),a="",n=0;n<e.length;n++)"codeSnippet"!==e[n].id&&(a+=e[n].textContent);return a}();const n=e(a);var r=document.getElementsByClassName("readTime")[0],l=document.createElement("h3"),o=document.createElement("i");o.textContent=n.text+" ("+n.words+" words)",l.appendChild(o),r.appendChild(l)}(),r.getTime()!=l.getTime()){var a=document.getElementsByClassName("date")[0],n=document.createElement("h3"),o=document.createElement("i");o.textContent="Updated on "+l.toDateString(),n.appendChild(o),a.appendChild(n)}for(var c=document.getElementsByTagName("code"),i=0;i<c.length;i++){c[i].style.whiteSpace="pre-wrap"}var d=document.body;function h(){return"false"===localStorage.getItem("dark_mode_toggle")?"light":"dark"}function p(t){!function(){var t=document.getElementsByClassName("twitter-tweet twitter-tweet-rendered");for(;t.length>0;)t[0].parentNode.removeChild(t[0])}();for(var e=document.getElementsByClassName("tweetToEmbed"),a=0;a<e.length;a++){var s=e[a],n=s.parentElement;window.twttr.widgets.createTweet(s.innerText,n,{align:"center",theme:t,dnt:"true"})}}new MutationObserver((function(t,e){t.forEach(t=>{"class"===t.attributeName&&p(h())})})).observe(d,{attributes:!0}),p(h());var m,u=document.getElementsByTagName("IMG"),f=[],g=[],v=document.querySelectorAll(".pswp")[0];async function w(t){var e={index:t,galleryUID:s.slug,shareButtons:[{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],maxSpreadZoom:3};await async function(t,e,a,s){m=new PhotoSwipe(t,e,a,s)}(v,PhotoSwipeUI_Default,f,e),m.listen("close",(function(){navbar.style.zIndex=9999}))}function E(){m.init(),navbar.style.zIndex=0}!async function(){if(await async function(){for(var t=0;t<u.length;t++)if(!u[t].className.includes("modal-content")&&!u[t].className.includes("signature-image")&&!u[t].className.includes("Thumbnail")){var e=u[t];if(g.indexOf(e.src)<0){var a={src:e.src,title:e.alt,w:e.width,h:e.height};f.push(a),g.push(e.src)}u[t].addEventListener("click",(async function(t){t.preventDefault();var e=g.indexOf(this.src);await w(e),E()}))}}(),""!=window.location.hash){var t=(e="pid",(a=location.hash.match(new RegExp(e+"=(d+)")))?a[1]:null);await w(t),E()}var e,a}()}),t.$set=t=>{"post"in t&&a(0,s=t.post),"posts"in t&&a(1,n=t.posts)},[s,n,o,c,i]}export default class extends t{constructor(t){super(),e(this,t,$,B,a,{post:0,posts:1})}}export{M as preload};
