!function(){"use strict";const e=["client/client.1f7eed2d.js","client/index.e13241c0.js","client/about.0669e29d.js","client/index.82b1de0e.js","client/[slug].e9b8c7bc.js","client/home.d3d7ec5f.js","client/404.a7b4ddfc.js","client/jquery.d4c3722b.js"].concat(["service-worker-index.html","favicon.png","global.css","images/about/JoshCoverImage.jpg","images/about/Small Profile Pic.jpg","images/about/github_logo.png","images/about/linkedin_logo.png","images/about/twitter_logo.png","images/about/wordpress_logo.png","images/about/youtube_logo.png","images/icons/f1 logo 2020.png","images/icons/kanye bear.png","images/icons/svelte_logo.png","images/icons/tools.png","logo.png","manifest.json","photoswipe/default-skin/default-skin.css","photoswipe/default-skin/default-skin.png","photoswipe/default-skin/default-skin.svg","photoswipe/default-skin/preloader.gif","photoswipe/photoswipe-ui-default.js","photoswipe/photoswipe-ui-default.min.js","photoswipe/photoswipe.css","photoswipe/photoswipe.js","photoswipe/photoswipe.min.js"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1598435934879").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1598435934879"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1598435934879").then(async t=>{try{var s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const o=await t.match(e.request);if(o)return o;throw s}}))))})}();
