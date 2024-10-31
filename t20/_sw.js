const cache_name = `ficha-tormenta20-v1.6`;
const cache_resources = ['/','/print.html',
'/src/favicon.png','/src/css.css','/src/style.css','/src/back.jpg','/src/border-print.svg','/src/dice.svg','/src/logo.png','/src/noisy.png','/src/magic.svg','/src/Tormenta20.ttf',
'/db/common.js','/db/conditions.js','/db/equips.js','/db/geral.js','/db/icons.js','/db/powers.js','/db/skills.js','/db/spells.js',
'/js/dice_roller.js','/js/keyboard.js','/js/worker_list.js','/js/worker_power.js','/js/worker_spell.js'
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
 if(cachedResponse){return cachedResponse}	// Get the resource from the cache.
 else{						//If the resource was not in the cache, try the network.
  try{
   const fetchResponse = await fetch(event.request);
   cache.put(event.request, fetchResponse.clone());	//Save the resource in the cache and return it.
   return fetchResponse;
   }catch(e){alert('Error: '+e)}
  }
 })());
});
