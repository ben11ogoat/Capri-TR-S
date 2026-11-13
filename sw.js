const V="capri-v1",F=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png",...["attentive","happy","sad","surprised","thinking","smirk","laughing","sleepy","annoyed","embarrassed","blink_closed","mouth_small","mouth_wide","mouth_round"].map(n=>"img/"+n+".webp")];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
