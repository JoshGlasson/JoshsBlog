import{_ as e,a as t,b as a,c as s,i as r,s as n,d as i,S as l,f as o,e as c,t as f,j as h,k as d,g as u,h as v,l as g,m as p,n as m,o as x,r as y,u as E,q as b,v as P,w as T,p as j,x as k,y as B,z as L}from"./client.10763af0.js";function A(e){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=t(e);if(s){var i=t(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return a(this,r)}}var I=L.document;function F(e,t,a){var s=e.slice();return s[7]=t[a],s}function C(e){var t,a,s,r,n,i,l,E,b,P,T,j,k,B,L,A,I=e[7].title+"",F=e[7].headline+"";return{c:function(){t=o("div"),a=o("div"),s=o("a"),r=o("img"),l=c(),E=o("div"),b=o("a"),P=o("h1"),T=f(I),k=c(),B=o("h2"),L=f(F),A=c(),this.h()},l:function(e){t=h(e,"DIV",{class:!0});var n=d(t);a=h(n,"DIV",{id:!0,class:!0});var i=d(a);s=h(i,"A",{href:!0});var o=d(s);r=h(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(u),i.forEach(u),l=v(n),E=h(n,"DIV",{id:!0,class:!0});var c=d(E);b=h(c,"A",{rel:!0,href:!0});var f=d(b);P=h(f,"H1",{class:!0});var p=d(P);T=g(p,I),p.forEach(u),f.forEach(u),k=v(c),B=h(c,"H2",{class:!0});var m=d(B);L=g(m,F),m.forEach(u),c.forEach(u),A=v(n),n.forEach(u),this.h()},h:function(){r.src!==(n=e[7].image)&&p(r,"src",n),p(r,"alt","Thumbnail"),p(r,"class","svelte-ix00xj"),p(s,"href",i="blog/"+e[7].slug),p(a,"id","thumb"),p(a,"class","svelte-ix00xj"),p(P,"class","svelte-ix00xj"),p(b,"rel","prefetch"),p(b,"href",j="blog/"+e[7].slug),p(B,"class","svelte-ix00xj"),p(E,"id","text"),p(E,"class","svelte-ix00xj"),p(t,"class","svelte-ix00xj")},m:function(e,n){m(e,t,n),x(t,a),x(a,s),x(s,r),x(t,l),x(t,E),x(E,b),x(b,P),x(P,T),x(E,k),x(E,B),x(B,L),x(t,A)},p:function(e,t){1&t&&r.src!==(n=e[7].image)&&p(r,"src",n),1&t&&i!==(i="blog/"+e[7].slug)&&p(s,"href",i),1&t&&I!==(I=e[7].title+"")&&y(T,I),1&t&&j!==(j="blog/"+e[7].slug)&&p(b,"href",j),1&t&&F!==(F=e[7].headline+"")&&y(L,F)},d:function(e){e&&u(t)}}}function D(e){for(var t,a,s,r,n,i,l,B,L,A,D,_,w,N,R,H,V,O,U,S,M,q,z,G,$,J,K,Q,W,X,Y=e[1]?"Any":"All",Z=e[0],ee=[],te=0;te<Z.length;te+=1)ee[te]=C(F(e,Z,te));return{c:function(){t=c(),a=o("div"),s=o("h1"),r=f("Recent posts"),n=c(),i=o("form"),l=o("input"),B=c(),L=o("input"),A=c(),D=o("label"),_=f("advanced search"),w=c(),N=o("button"),R=f("View Posts by Tags"),H=c(),V=o("div"),O=o("label"),U=o("input"),S=c(),M=o("span"),q=c(),z=o("p"),G=f("Find Posts with "),$=f(Y),J=f(" Tags"),K=c(),Q=o("form"),W=c();for(var e=0;e<ee.length;e+=1)ee[e].c();X=E(),this.h()},l:function(e){b('[data-svelte="svelte-hfp9t8"]',I.head).forEach(u),t=v(e),a=h(e,"DIV",{class:!0});var o=d(a);s=h(o,"H1",{id:!0});var c=d(s);r=g(c,"Recent posts"),c.forEach(u),n=v(o),i=h(o,"FORM",{id:!0});var f=d(i);l=h(f,"INPUT",{type:!0,placeholder:!0}),B=v(f),L=h(f,"INPUT",{type:!0,name:!0,id:!0,value:!0}),A=v(f),D=h(f,"LABEL",{for:!0});var p=d(D);_=g(p,"advanced search"),p.forEach(u),f.forEach(u),w=v(o),N=h(o,"BUTTON",{class:!0});var m=d(N);R=g(m,"View Posts by Tags"),m.forEach(u),H=v(o),V=h(o,"DIV",{class:!0,id:!0});var x=d(V);O=h(x,"LABEL",{class:!0,for:!0});var y=d(O);U=h(y,"INPUT",{type:!0,id:!0,class:!0}),S=v(y),M=h(y,"SPAN",{class:!0}),d(M).forEach(u),y.forEach(u),q=v(x),z=h(x,"P",{style:!0});var P=d(z);G=g(P,"Find Posts with "),$=g(P,Y),J=g(P," Tags"),P.forEach(u),K=v(x),Q=h(x,"FORM",{id:!0}),d(Q).forEach(u),x.forEach(u),o.forEach(u),W=v(e);for(var T=0;T<ee.length;T+=1)ee[T].l(e);X=E(),this.h()},h:function(){I.title="Blog",p(s,"id","pageTitle"),p(l,"type","text"),p(l,"placeholder","Search Posts"),p(L,"type","checkbox"),p(L,"name","checkbox"),p(L,"id","checkbox_id"),L.value="value",p(D,"for","checkbox_id"),p(i,"id","search"),p(N,"class","collapsible svelte-ix00xj"),p(U,"type","checkbox"),p(U,"id","any_all_slider"),p(U,"class","svelte-ix00xj"),p(M,"class","slider round svelte-ix00xj"),p(O,"class","switch svelte-ix00xj"),p(O,"for","any_all_slider"),P(z,"display","inline-block"),p(Q,"id","filter-form"),p(V,"class","filters svelte-ix00xj"),p(V,"id","filter-form-div"),p(a,"class","top svelte-ix00xj")},m:function(e,o){m(e,t,o),m(e,a,o),x(a,s),x(s,r),x(a,n),x(a,i),x(i,l),x(i,B),x(i,L),x(i,A),x(i,D),x(D,_),x(a,w),x(a,N),x(N,R),x(a,H),x(a,V),x(V,O),x(O,U),x(O,S),x(O,M),x(V,q),x(V,z),x(z,G),x(z,$),x(z,J),x(V,K),x(V,Q),m(e,W,o);for(var c=0;c<ee.length;c+=1)ee[c].m(e,o);m(e,X,o)},p:function(e,t){var a=T(t,1)[0];if(2&a&&Y!==(Y=e[1]?"Any":"All")&&y($,Y),1&a){var s;for(Z=e[0],s=0;s<Z.length;s+=1){var r=F(e,Z,s);ee[s]?ee[s].p(r,a):(ee[s]=C(r),ee[s].c(),ee[s].m(X.parentNode,X))}for(;s<ee.length;s+=1)ee[s].d(1);ee.length=Z.length}},i:j,o:j,d:function(e){e&&u(t),e&&u(a),e&&u(W),k(ee,e),e&&u(X)}}}function _(e){e.params,e.query;return this.fetch("blog.json").then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return Date.parse(e.sortdate)>Date.parse(t.sortdate)?1:Date.parse(t.sortdate)>Date.parse(e.sortdate)?-1:0})).reverse(),{posts:e}}))}function w(e,t,a){var s=t.posts,r=t.filteredPosts,n=void 0===r?s:r,i=t.tagFilteredPosts,l=t.tags,o=void 0===l?[]:l,c=t.tagsToFilter,f=void 0===c?[]:c,h=t.filterByAnyTags,d=void 0===h||h;return B((function(){var e=document.getElementById("search");function t(){if(a(2,i=s),f.length>0){a(2,i=[]);for(var t=0;t<s.length;t++){var r=s[t],l=r.tags.filter((function(e){return-1!=f.indexOf(e)}));d?l.length>0&&i.push(r):l.length==f.length&&i.push(r)}}a(0,n=i),function(){if(""!==e[0].value){a(0,n=[]);for(var t=0;t<i.length;t++){var s=i[t],r=e[0].value.toLowerCase();e[1].checked?(s.title.toLowerCase().includes(r)||s.headline.toLowerCase().includes(r))&&n.push(s):s.title.toLowerCase().includes(r)&&n.push(s)}}}()}e[0].value="",e[1].checked=!1,e.addEventListener("input",(function(e){t()})),e.onkeypress=function(e){13==(e.charCode||e.keyCode||0)&&e.preventDefault()};var r=document.getElementById("filter-form");!function(){!function(){for(var e=0;e<s.length;e++)a(3,o=o.concat(s[e].tags.filter((function(e){return o.indexOf(e)<0}))));a(3,o=o.sort())}();for(var e=0;e<o.length;e++){var n=document.createElement("INPUT"),i=document.createElement("LABEL"),l=o[e];n.type="checkbox",n.name=l,n.id=l+"_id",n.value="value",n.className="filter-input",i.htmlFor=l+"_id",i.textContent=l,r.appendChild(n),r.appendChild(i),r.appendChild(document.createElement("br"))}!function(){for(var e=document.getElementsByClassName("filter-input"),a=0;a<e.length;a++){e[a].addEventListener("change",(function(e){if(this.checked)f.push(e.target.name),t();else{var a=f.indexOf(e.target.name);a>-1&&f.splice(a,1),t()}}))}}()}();for(var l=document.getElementsByClassName("collapsible"),c=0;c<l.length;c++)l[c].addEventListener("click",(function(){this.classList.toggle("active");var e=document.getElementById("filter-form-div");e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}));var h=document.getElementById("any_all_slider");h.checked=!1,h.addEventListener("change",(function(e){this.checked?(a(1,d=!1),t()):(a(1,d=!0),t())}))})),e.$set=function(e){"posts"in e&&a(4,s=e.posts),"filteredPosts"in e&&a(0,n=e.filteredPosts),"tagFilteredPosts"in e&&a(2,i=e.tagFilteredPosts),"tags"in e&&a(3,o=e.tags),"tagsToFilter"in e&&a(5,f=e.tagsToFilter),"filterByAnyTags"in e&&a(1,d=e.filterByAnyTags)},[n,d,i,o,s,f]}var N=function(t){e(o,l);var a=A(o);function o(e){var t;return s(this,o),t=a.call(this),r(i(t),e,w,D,n,{posts:4,filteredPosts:0,tagFilteredPosts:2,tags:3,tagsToFilter:5,filterByAnyTags:1}),t}return o}();export default N;export{_ as preload};
