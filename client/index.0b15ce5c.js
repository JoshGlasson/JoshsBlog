import{S as e,i as t,s,e as a,a as l,t as r,b as o,f as n,d as c,c as i,g as h,h as d,j as f,k as v,l as g,m as u,q as m,n as p,o as E,p as b,r as x}from"./client.724ea331.js";const{document:y}=x;function P(e,t,s){const a=e.slice();return a[6]=t[s],a}function C(e){let t,s,u,m,p,E,b,x,y,P,C,T,k,L,F,I,B=e[6].title+"",N=e[6].headline+"";return{c(){t=a("div"),s=a("div"),u=a("a"),m=a("img"),b=l(),x=a("div"),y=a("a"),P=a("h1"),C=r(B),k=l(),L=a("h2"),F=r(N),I=l(),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=n(t);s=o(a,"DIV",{id:!0,class:!0});var l=n(s);u=o(l,"A",{href:!0});var r=n(u);m=o(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(c),l.forEach(c),b=i(a),x=o(a,"DIV",{id:!0,class:!0});var d=n(x);y=o(d,"A",{rel:!0,href:!0});var f=n(y);P=o(f,"H1",{class:!0});var v=n(P);C=h(v,B),v.forEach(c),f.forEach(c),k=i(d),L=o(d,"H2",{class:!0});var g=n(L);F=h(g,N),g.forEach(c),d.forEach(c),I=i(a),a.forEach(c),this.h()},h(){m.src!==(p=e[6].image)&&d(m,"src",p),d(m,"alt","Thumbnail"),d(m,"class","svelte-1m4lv07"),d(u,"href",E="blog/"+e[6].slug),d(s,"id","thumb"),d(s,"class","svelte-1m4lv07"),d(P,"class","svelte-1m4lv07"),d(y,"rel","prefetch"),d(y,"href",T="blog/"+e[6].slug),d(L,"class","svelte-1m4lv07"),d(x,"id","text"),d(x,"class","svelte-1m4lv07"),d(t,"class","svelte-1m4lv07")},m(e,a){f(e,t,a),v(t,s),v(s,u),v(u,m),v(t,b),v(t,x),v(x,y),v(y,P),v(P,C),v(x,k),v(x,L),v(L,F),v(t,I)},p(e,t){1&t&&m.src!==(p=e[6].image)&&d(m,"src",p),1&t&&E!==(E="blog/"+e[6].slug)&&d(u,"href",E),1&t&&B!==(B=e[6].title+"")&&g(C,B),1&t&&T!==(T="blog/"+e[6].slug)&&d(y,"href",T),1&t&&N!==(N=e[6].headline+"")&&g(F,N)},d(e){e&&c(t)}}}function T(e){let t,s,g,b,x,T,k,L,F,I,B,N,H,V,w,D,O,U,j,A,R=e[0],_=[];for(let t=0;t<R.length;t+=1)_[t]=C(P(e,R,t));return{c(){t=l(),s=a("div"),g=a("h1"),b=r("Recent posts"),x=l(),T=a("form"),k=a("input"),L=l(),F=a("input"),I=l(),B=a("label"),N=r("advanced search"),H=l(),V=a("button"),w=r("View Posts by Tags"),D=l(),O=a("div"),U=a("form"),j=l();for(let e=0;e<_.length;e+=1)_[e].c();A=u(),this.h()},l(e){m('[data-svelte="svelte-hfp9t8"]',y.head).forEach(c),t=i(e),s=o(e,"DIV",{class:!0});var a=n(s);g=o(a,"H1",{id:!0});var l=n(g);b=h(l,"Recent posts"),l.forEach(c),x=i(a),T=o(a,"FORM",{id:!0});var r=n(T);k=o(r,"INPUT",{type:!0,placeholder:!0}),L=i(r),F=o(r,"INPUT",{type:!0,name:!0,id:!0,value:!0}),I=i(r),B=o(r,"LABEL",{for:!0});var d=n(B);N=h(d,"advanced search"),d.forEach(c),r.forEach(c),H=i(a),V=o(a,"BUTTON",{class:!0});var f=n(V);w=h(f,"View Posts by Tags"),f.forEach(c),D=i(a),O=o(a,"DIV",{class:!0});var v=n(O);U=o(v,"FORM",{id:!0}),n(U).forEach(c),v.forEach(c),a.forEach(c),j=i(e);for(let t=0;t<_.length;t+=1)_[t].l(e);A=u(),this.h()},h(){y.title="Blog",d(g,"id","pageTitle"),d(k,"type","text"),d(k,"placeholder","Search Posts"),d(F,"type","checkbox"),d(F,"name","checkbox"),d(F,"id","checkbox_id"),F.value="value",d(B,"for","checkbox_id"),d(T,"id","search"),d(V,"class","collapsible svelte-1m4lv07"),d(U,"id","filter-form"),d(O,"class","filters svelte-1m4lv07"),d(s,"class","top svelte-1m4lv07")},m(e,a){f(e,t,a),f(e,s,a),v(s,g),v(g,b),v(s,x),v(s,T),v(T,k),v(T,L),v(T,F),v(T,I),v(T,B),v(B,N),v(s,H),v(s,V),v(V,w),v(s,D),v(s,O),v(O,U),f(e,j,a);for(let t=0;t<_.length;t+=1)_[t].m(e,a);f(e,A,a)},p(e,[t]){if(1&t){let s;for(R=e[0],s=0;s<R.length;s+=1){const a=P(e,R,s);_[s]?_[s].p(a,t):(_[s]=C(a),_[s].c(),_[s].m(A.parentNode,A))}for(;s<_.length;s+=1)_[s].d(1);_.length=R.length}},i:p,o:p,d(e){e&&c(t),e&&c(s),e&&c(j),E(_,e),e&&c(A)}}}function k({params:e,query:t}){return this.fetch("blog.json").then(e=>e.json()).then(e=>(e.sort().reverse(),{posts:e}))}function L(e,t,s){let{posts:a}=t,{filteredPosts:l=a}=t,{tagFilteredPosts:r}=t,{tags:o=[]}=t,{tagsToFilter:n=[]}=t;return b(()=>{var e=document.getElementById("search");function t(){if(s(1,r=a),n.length>0){s(1,r=[]);for(var t=0;t<a.length;t++){var o=a[t];o.tags.filter((function(e){return-1!=n.indexOf(e)})).length>0&&r.push(o)}}s(0,l=r),function(){if(""!==e[0].value){s(0,l=[]);for(var t=0;t<r.length;t++){var a=r[t],o=e[0].value.toLowerCase();e[1].checked?(a.title.toLowerCase().includes(o)||a.headline.toLowerCase().includes(o))&&l.push(a):a.title.toLowerCase().includes(o)&&l.push(a)}}}()}e[0].value="",e[1].checked=!1,e.addEventListener("input",(function(e){t()})),e.onkeypress=function(e){13==(e.charCode||e.keyCode||0)&&e.preventDefault()};var c=document.getElementById("filter-form");!function(){!function(){for(var e=0;e<a.length;e++)s(2,o=o.concat(a[e].tags.filter(e=>o.indexOf(e)<0)));s(2,o=o.sort())}();for(var e=0;e<o.length;e++){var l=document.createElement("INPUT"),r=document.createElement("LABEL"),i=o[e],h=i[0].toUpperCase()+i.slice(1);l.type="checkbox",l.name=i,l.id=i+"_id",l.value="value",l.className="filter-input",r.htmlFor=i+"_id",r.textContent=h,console.log(r),c.appendChild(l),c.appendChild(r),c.appendChild(document.createElement("br"))}!function(){for(var e=document.getElementsByClassName("filter-input"),s=0;s<e.length;s++){e[s].addEventListener("change",(function(e){if(this.checked)n.push(e.target.name),t();else{const s=n.indexOf(e.target.name);s>-1&&n.splice(s,1),t()}}))}}()}();for(var i=document.getElementsByClassName("collapsible"),h=0;h<i.length;h++)i[h].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))}),e.$set=e=>{"posts"in e&&s(3,a=e.posts),"filteredPosts"in e&&s(0,l=e.filteredPosts),"tagFilteredPosts"in e&&s(1,r=e.tagFilteredPosts),"tags"in e&&s(2,o=e.tags),"tagsToFilter"in e&&s(4,n=e.tagsToFilter)},[l,r,o,a,n]}export default class extends e{constructor(e){super(),t(this,e,L,T,s,{posts:3,filteredPosts:0,tagFilteredPosts:1,tags:2,tagsToFilter:4})}}export{k as preload};
