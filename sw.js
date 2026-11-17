/* Dtrax POS offline cache. Change VERSION when you replace the app files. */
var VERSION='dtrax-pos-v2';
var FILES=['./','index.html','xlsx.full.min.js','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(VERSION).then(function(c){return c.addAll(FILES)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==VERSION}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET')return;
  var u=new URL(e.request.url);if(u.origin!==location.origin)return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(function(r){
    return r||fetch(e.request).then(function(res){var cp=res.clone();caches.open(VERSION).then(function(c){c.put(e.request,cp)});return res}).catch(function(){return caches.match('index.html')});
  }));
});
