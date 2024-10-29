const cache_name = 'ficha-tormenta20-v1.6';
const cache_resources = ['/t20/','/t20/print.html',
'/t20/src/favicon.png','/t20/src/css.css','/t20/src/style.css','/t20/src/back.jpg','/t20/src/border-print.svg','/t20/src/dice.svg','/t20/src/logo.png','/t20/src/noisy.png','/t20/src/magic.svg','/t20/src/Tormenta20.ttf',
'/t20/db/common.js','/t20/db/conditions.js','/t20/db/equips.js','/t20/db/geral.js','/t20/db/icons.js','/t20/db/powers.js','/t20/db/skills.js','/t20/db/spells.js',
'/t20/js/dice_roller.js','/t20/js/keyboard.js','/t20/js/worker_list.js','/t20/js/worker_power.js','/t20/js/worker_spell.js'
];

//Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
 console.log('Service worker install event!');
 event.waitUntil((async () => {
  const cache = await caches.open(cache_name);
  cache.addAll(cache_resources);
 })());
});

self.addEventListener('activate', (event) => {
 console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
 console.log('Fetch intercepted for:', event.request.url);
 event.respondWith((async () => {
 const cache = await caches.open(cache_name);

 const cachedResponse = await cache.match(event.request);
 if(cachedResponse){console.log('Fetch file offline');return cachedResponse}	// Get the resource from the cache.
 else{						//If the resource was not in the cache, try the network.
  try{
   const fetchResponse = await fetch(event.request);
   cache.put(event.request, fetchResponse.clone());	//Save the resource in the cache and return it.
   console.log('Trying to fetch file online');
   return fetchResponse;
   }catch(e){console.log('Error: '+e)}
  }
 })());
});
