!function(){"use strict";const e=["client/client.87606fb3.js","client/index.ff5152c8.js","client/about.f79c719c.js","client/index.efd5b574.js","client/[slug].c637daad.js"].concat(["service-worker-index.html","favicon.png","global.css","images/2020-07-23 test-blog/Stan.jpg","images/2020-07-23 test-blog/hello_there.gif","images/2020-07-24 creating-the-blog/darkmode_app.png","images/2020-07-24 creating-the-blog/darkmode_button.png","images/2020-07-24 creating-the-blog/github_actions.png","images/2020-07-24 creating-the-blog/recent_posts.png","images/2020-07-24 creating-the-blog/svelte_logo.png","images/2020-07-29 useful tools/tableplus.png","images/2020-07-29 useful tools/tools.png","images/2020-07-29 useful tools/vscode.png","images/about/JoshCoverImage.jpg","images/about/Small Profile Pic.jpg","images/about/github_logo.png","images/about/linkedin_logo.png","images/about/twitter_logo.png","images/about/wordpress_logo.png","images/about/youtube_logo.png","logo.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1596229757306").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1596229757306"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1596229757306").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const a=await t.match(e.request);if(a)return a;throw s}}))))})}();
