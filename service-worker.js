!function(){"use strict";const e=["client/client.5ddbbe63.js","client/index.7bb2f35a.js","client/about.13315e52.js","client/index.93ddb746.js","client/[slug].a30d54d3.js","client/home.dc3a6d82.js","client/404.d7fc0df9.js","client/jquery.d4c3722b.js","client/index.be1cfbce.js"].concat(["service-worker-index.html","favicon.png","global.css","images/about/JoshCoverImage.jpg","images/about/Small Profile Pic.jpg","images/about/github_logo.png","images/about/linkedin_logo.png","images/about/twitter_logo.png","images/about/wordpress_logo.png","images/about/youtube_logo.png","images/icons/SMB 35.png","images/icons/discord logo.png","images/icons/f1 logo 2020.png","images/icons/kanye bear.png","images/icons/nfl logo.png","images/icons/svelte logo.png","images/icons/tools.png","images/icons_same_size/SMB 35.png","images/icons_same_size/discord logo.png","images/icons_same_size/f1 logo 2020.png","images/icons_same_size/kanye bear.png","images/icons_same_size/nfl logo.png","images/icons_same_size/svelte logo.png","images/icons_same_size/tools.png","images/icons_same_size/twitter_logo.png","logo.png","manifest.json","photoswipe/default-skin/default-skin.css","photoswipe/default-skin/default-skin.png","photoswipe/default-skin/default-skin.svg","photoswipe/default-skin/preloader.gif","photoswipe/photoswipe-ui-default.js","photoswipe/photoswipe-ui-default.min.js","photoswipe/photoswipe.css","photoswipe/photoswipe.js","photoswipe/photoswipe.min.js"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1601632812377").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1601632812377"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const o=new URL(e.request.url);o.protocol.startsWith("http")&&(o.hostname===self.location.hostname&&o.port!==self.location.port||(o.host===self.location.host&&s.has(o.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1601632812377").then(async s=>{try{var o=await fetch(e.request);return s.put(e.request,o.clone()),o}catch(o){const i=await s.match(e.request);if(i)return i;throw o}}))))})}();
