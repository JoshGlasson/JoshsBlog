!function(){"use strict";const e=["client/client.83f05875.js","client/index.0f969e6b.js","client/about.e06d148f.js","client/index.51dda904.js","client/[slug].abcbdb52.js","client/404.e954a0b6.js"].concat(["service-worker-index.html","favicon.png","global.css","images/about/JoshCoverImage.jpg","images/about/Small Profile Pic.jpg","images/about/github_logo.png","images/about/linkedin_logo.png","images/about/twitter_logo.png","images/about/wordpress_logo.png","images/about/youtube_logo.png","images/icons/f1 logo 2020.png","images/icons/kanye bear.png","images/icons/svelte_logo.png","images/icons/tools.png","logo.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1597740375653").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1597740375653"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1597740375653").then(async t=>{try{var s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const a=await t.match(e.request);if(a)return a;throw s}}))))})}();
