import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,d as r,c,b as l,f as u,g as h,h as d,j as f,k as p,l as m,n as v}from"./client.5dcdadcb.js";function g(t){let s,a,g,j,b,x,y=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o(y),b=e(),x=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=u(g);j=h(s,y),s.forEach(r),b=c(t),x=l(t,"DIV",{class:!0}),u(x).forEach(r),this.h()},h(){d(x,"class","content svelte-1ndh43u")},m(t,s){f(t,a,s),f(t,g,s),p(g,j),f(t,b,s),f(t,x,s),x.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title+"")&&m(j,y),1&a&&E!==(E=t[0].html+"")&&(x.innerHTML=E)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(b),t&&r(x)}}}async function j({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function b(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,b,g,a,{post:0})}}export{j as preload};
