!function(){"use strict";const e=["client/client.7a9c0576.js","client/index.97c2dfb5.js","client/about.0c63ed45.js","client/index.d5e3add6.js","client/[slug].b5c34af8.js","client/404.f3dbcb53.js"].concat(["service-worker-index.html","404.md","favicon.png","global.css","images/about/JoshCoverImage.jpg","images/about/Small Profile Pic.jpg","images/about/github_logo.png","images/about/linkedin_logo.png","images/about/twitter_logo.png","images/about/wordpress_logo.png","images/about/youtube_logo.png","images/icons/f1 logo 2020.png","images/icons/kanye bear.png","images/icons/svelte_logo.png","images/icons/tools.png","logo.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1597242845097").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1597242845097"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1597242845097").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
