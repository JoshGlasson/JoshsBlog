!function(){"use strict";const e=["client/client.d2dfb892.js","client/index.1c35a123.js","client/coddice.862442bc.js","client/about.f9fffdb8.js","client/index.81652323.js","client/[slug].4d535bb4.js","client/home.278cce79.js","client/404.8e243267.js","client/jquery.d4c3722b.js","client/index.be1cfbce.js"].concat(["service-worker-index.html","ads.txt","favicon.png","global.css","images/about/Cookie.png","images/about/JoshCoverImage.jpg","images/about/Small Profile Pic.jpg","images/about/github_logo.png","images/about/linkedin_logo.png","images/about/twitter_logo.png","images/about/wordpress_logo.png","images/about/youtube_logo.png","images/coddice/Airport.jpg","images/coddice/Boneyard.jpg","images/coddice/Dam.jpg","images/coddice/Downtown.jpg","images/coddice/Farmland.jpg","images/coddice/Hills.jpg","images/coddice/Hospital.jpg","images/coddice/Lumber.jpg","images/coddice/Military Base.jpg","images/coddice/Park.jpg","images/coddice/Port.jpg","images/coddice/Prison.jpg","images/coddice/Promenade East.jpg","images/coddice/Promenade West.jpg","images/coddice/Quarry.jpg","images/coddice/Shipwreck.jpg","images/coddice/Stadium.jpg","images/coddice/Storage Town.jpg","images/coddice/Superstore.jpg","images/coddice/TV Station.jpg","images/coddice/Train Station.jpg","images/icons/SMB 35.png","images/icons/discord logo.png","images/icons/f1 logo 2020.png","images/icons/kanye bear.png","images/icons/nfl logo.png","images/icons/svelte logo.png","images/icons/system-design.jpg","images/icons/termux.jpg","images/icons/tools.png","images/icons_same_size/SMB 35.png","images/icons_same_size/discord logo.png","images/icons_same_size/f1 logo 2020.png","images/icons_same_size/kanye bear.png","images/icons_same_size/nfl logo.png","images/icons_same_size/svelte logo.png","images/icons_same_size/tools.png","images/icons_same_size/twitter_logo.png","logo.png","manifest.json","photoswipe/default-skin/default-skin.css","photoswipe/default-skin/default-skin.png","photoswipe/default-skin/default-skin.svg","photoswipe/default-skin/preloader.gif","photoswipe/photoswipe-ui-default.js","photoswipe/photoswipe-ui-default.min.js","photoswipe/photoswipe.css","photoswipe/photoswipe.js","photoswipe/photoswipe.min.js","robots.txt"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1616703605327").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1616703605327"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const i=new URL(e.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&s.has(i.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1616703605327").then(async s=>{try{var i=await fetch(e.request);return s.put(e.request,i.clone()),i}catch(i){const o=await s.match(e.request);if(o)return o;throw i}}))))})}();
