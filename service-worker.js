!function(){"use strict";const e=["client/client.10ea0d0d.js","client/index.ccf16282.js","client/about.3a947625.js","client/index.79af3cb6.js","client/[slug].2bb2c3fc.js"].concat(["service-worker-index.html","favicon.png","global.css","images/2020-07-23 test-blog/Stan.jpg","images/2020-07-23 test-blog/hello_there.gif","images/2020-07-24 creating-the-blog/darkmode_app.png","images/2020-07-24 creating-the-blog/darkmode_button.png","images/2020-07-24 creating-the-blog/github_actions.png","images/2020-07-24 creating-the-blog/recent_posts.png","images/2020-07-24 creating-the-blog/svelte_logo.png","images/2020-07-29 useful tools/tableplus.png","images/2020-07-29 useful tools/tools.png","images/2020-07-29 useful tools/vscode.png","images/2020-08-03 F1 2020 - Silverstone/bottas tyre.png","images/2020-08-03 F1 2020 - Silverstone/driver standings.png","images/2020-08-03 F1 2020 - Silverstone/f1 logo.png","images/2020-08-03 F1 2020 - Silverstone/hamilton finish.png","images/2020-08-03 F1 2020 - Silverstone/hamilton record.png","images/2020-08-03 F1 2020 - Silverstone/kvyat crash.png","images/2020-08-03 F1 2020 - Silverstone/magnussen crash.png","images/2020-08-03 F1 2020 - Silverstone/sainz tyre.png","images/2020-08-03 F1 2020 - Silverstone/silverstone results.jpg","images/about/JoshCoverImage.jpg","images/about/Small Profile Pic.jpg","images/about/github_logo.png","images/about/linkedin_logo.png","images/about/twitter_logo.png","images/about/wordpress_logo.png","images/about/youtube_logo.png","logo.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1596462015701").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1596462015701"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1596462015701").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
