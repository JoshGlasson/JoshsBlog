!function(){"use strict";const e=["client/client.17a21db2.js","client/index.04581657.js","client/about.aa78eab2.js","client/index.af1cb477.js","client/[slug].79646248.js"].concat(["service-worker-index.html","favicon.png","global.css","images/2020-07-23 test-blog/Stan.jpg","images/2020-07-23 test-blog/hello_there.gif","images/2020-07-24 creating-the-blog/darkmode_app.png","images/2020-07-24 creating-the-blog/darkmode_button.png","images/2020-07-24 creating-the-blog/github_actions.png","images/2020-07-24 creating-the-blog/recent_posts.png","images/2020-07-24 creating-the-blog/svelte_logo.png","images/JoshCoverImage.jpg","images/Small Profile Pic.jpg","images/github_logo.png","images/linkedin_logo.png","images/twitter_logo.png","images/wordpress_logo.png","images/youtube_logo.png","logo.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1595770526094").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1595770526094"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1595770526094").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const a=await t.match(e.request);if(a)return a;throw s}}))))})}();
