import{S as e,i as t,s as a,e as o,a as n,t as r,q as s,c,b as i,d,f as l,g as p,h as m,j as h,k as g,n as u,o as y,m as f}from"./client.a1c08df8.js";const{document:E}=f;function v(e){let t,a,y,f,v,S,T,b,M,j,D,k,w,P,A,B,C,L,q;return{c(){t=o("meta"),a=o("meta"),y=o("meta"),f=o("meta"),v=o("meta"),S=o("meta"),T=o("meta"),b=o("meta"),M=o("script"),D=n(),k=o("h2"),w=r("Call of Duty Warzone Drop Picker"),P=n(),A=o("div"),B=o("div"),C=n(),L=o("button"),q=r("Random Drop Point"),this.h()},l(e){const o=s('[data-svelte="svelte-1vdbka2"]',E.head);t=c(o,"META",{name:!0,content:!0}),a=c(o,"META",{name:!0,content:!0}),y=c(o,"META",{name:!0,content:!0}),f=c(o,"META",{name:!0,content:!0}),v=c(o,"META",{property:!0,content:!0}),S=c(o,"META",{property:!0,content:!0}),T=c(o,"META",{property:!0,content:!0}),b=c(o,"META",{property:!0,content:!0}),M=c(o,"SCRIPT",{"data-ad-client":!0,async:!0,src:!0}),i(M).forEach(d),o.forEach(d),D=l(e),k=c(e,"H2",{});var n=i(k);w=p(n,"Call of Duty Warzone Drop Picker"),n.forEach(d),P=l(e),A=c(e,"DIV",{class:!0});var r=i(A);B=c(r,"DIV",{class:!0}),i(B).forEach(d),C=l(r),L=c(r,"BUTTON",{class:!0});var m=i(L);q=p(m,"Random Drop Point"),m.forEach(d),r.forEach(d),this.h()},h(){E.title="Josh's Blog",m(t,"name","description"),m(t,"content","My personal blog about Software Development, Sports, Music, and any more of my hobbies!"),m(a,"name","twitter:card"),m(a,"content","summary"),m(y,"name","twitter:site"),m(y,"content","@joshglasson"),m(f,"name","twitter:creator"),m(f,"content","@joshglasson"),m(v,"property","og:title"),m(v,"content","Josh's Blog"),m(S,"property","og:image"),m(S,"content","https://joshglasson.co.uk/logo.png"),m(T,"property","og:description"),m(T,"content","My personal blog about Software Development, Sports, Music, and any more of my hobbies!"),m(b,"property","og:url"),m(b,"content","https://joshglasson.co.uk/"),m(M,"data-ad-client","ca-pub-1501125542619304"),M.async=!0,M.src!==(j="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")&&m(M,"src","https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"),m(B,"class","imageContainer"),m(L,"class","pickBtn"),m(A,"class","container")},m(e,o){h(E.head,t),h(E.head,a),h(E.head,y),h(E.head,f),h(E.head,v),h(E.head,S),h(E.head,T),h(E.head,b),h(E.head,M),g(e,D,o),g(e,k,o),h(k,w),g(e,P,o),g(e,A,o),h(A,B),h(A,C),h(A,L),h(L,q)},p:u,i:u,o:u,d(e){d(t),d(a),d(y),d(f),d(v),d(S),d(T),d(b),d(M),e&&d(D),e&&d(k),e&&d(P),e&&d(A)}}}function S(e){return y(async()=>{var e=document.querySelector(".pickBtn"),t=document.querySelector(".imageContainer"),a=["Dam","Military Base","Quarry","Airport","Storage Town","Superstore","TV Station","Stadium","Lumber","Boneyard","Train Station","Hospital","Downtown","Farmland","Promenade West","Promenade East","Hills","Park","Shipwreck","Port","Prison"];function o(){return a[Math.floor(Math.random()*a.length)]}e.addEventListener("click",(function(){var e=document.querySelector(".dropLocation"),a=document.querySelector(".dropImage");if(null==e){var n=document.createElement("h2");n.classList.add("dropLocation");var r=o();n.innerText=r;var s=document.createElement("img");s.classList.add("dropImage"),s.style.width="100%",s.src="./images/coddice/"+r+".jpg",t.appendChild(n),t.appendChild(s)}else{r=o();e.innerText=r,a.src="./images/coddice/"+r+".jpg"}}))}),[]}export default class extends e{constructor(e){super(),t(this,e,S,v,a,{})}}