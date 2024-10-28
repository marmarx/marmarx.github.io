const CACHE_NAME = `ficha-tormenta20`;

//Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
 event.waitUntil((async () => {
  const cache = await caches.open(CACHE_NAME);
  cache.addAll([
   '/',
   '/print.html',
   '/src/favicon.png',
   '/src/css.css',
   '/src/style.css',
   '/src/back.jpg',
   '/src/border-print.svg',
   '/src/dice.svg',
   '/src/logo.png',
   '/src/noisy.png',
   '/src/magic.svg',
   '/src/Tormenta20.ttf',
   '/db/common.js',
   '/db/conditions.js',
   '/db/equips.js',
   '/db/geral.js',
   '/db/icons.js',
   '/db/powers.js',
   '/db/skills.js',
   '/db/spells.js',
   '/js/dice_roller.js'
   '/js/keyboard.js'
   '/js/worker_list.js'
   '/js/worker_power.js'
   '/js/worker_spell.js'
  ]);
 })());
});

self.addEventListener('fetch', event => {
 event.respondWith((async () => {
 const cache = await caches.open(CACHE_NAME);

 // Get the resource from the cache.
 const cachedResponse = await cache.match(event.request);
 if(cachedResponse){return cachedResponse}
 else{
  try{
   //If the resource was not in the cache, try the network.
   const fetchResponse = await fetch(event.request);

   //Save the resource in the cache and return it.
   cache.put(event.request, fetchResponse.clone());
   return fetchResponse;
   }catch(e){alert('Error: '+e)}
  }
 })());
});