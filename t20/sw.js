const expiration = 1000*60*60*24;	//24 hours expiration
const cache_name = 'ficha-tormenta20-v1.6';
const cache_resources = ['/t20/','/t20/print.html',
'/t20/src/favicon.png','/t20/src/css.css','/t20/src/style.css','/t20/src/back.jpg','/t20/src/border-print.svg','/t20/src/dice.svg','/t20/src/logo.png','/t20/src/noisy.png','/t20/src/magic.svg','/t20/src/Tormenta20.ttf',
'/t20/db/common.js','/t20/db/conditions.js','/t20/db/equips.js','/t20/db/geral.js','/t20/db/icons.js','/t20/db/powers.js','/t20/db/skills.js','/t20/db/spells.js',
'/t20/js/dice_roller.js','/t20/js/keyboard.js','/t20/js/worker_list.js','/t20/js/worker_power.js','/t20/js/worker_spell.js'
];

//Use the install event to pre-cache all initial resources
self.addEventListener('install', event => {
 console.log('Service worker install event!');
 event.waitUntil((async () => {
  const cache = await caches.open(cache_name);
  await cache.addAll(cache_resources);
 })());
});

self.addEventListener('activate', event => {
 console.log('Service worker: activate event!');
 event.waitUntil((async () => {
  const cache = await caches.open(cache_name);
  const cachedRequests = await cache.keys();

  for(const request of cachedRequests){
   const cachedResponse = await cache.match(request);
   let date = cachedResponse.headers.get('date');
   if(date){
    date = new Date(date).getTime();
    if(Date.now() - date > expiration){
     console.log('Service worker: trying to update outdated resource at', request.url);
     try{
      const fetchResponse = await fetch(request);
      cache.put(request, fetchResponse.clone());
      console.log('Service worker: fetched file online and updated cache');
     }catch(e){
      console.log('Unable to update outdated resource in activate event\nLocation: ',request.url,'\nError: '+e);
     }
    }
   }
  }

 })());
});

self.addEventListener('fetch', event => {
 console.log('Service worker: fetch intercepted for:', event.request.url);
 event.respondWith((async () => {
  const cache = await caches.open(cache_name);
  const cachedResponse = await cache.match(event.request);

  if(cachedResponse){	//resource is in cache
   let date = new Date(cachedResponse.headers.get('date'));
   date = date.getTime();
   if(Date.now() - date <= expiration){	//resource is not expired
    console.log('Service worker: fetch file offline');
    return cachedResponse;
   }
  }

  try{	//if resourse is not in cache or is expired, try the network
   const fetchResponse = await fetch(event.request);
   cache.put(event.request, fetchResponse.clone());
   console.log('Service worker: fetched file online and updated cache');
   return fetchResponse;
  }catch(e){	//upon network error
   console.log('Unable to update outdated resource in fetch event\nLocation: ',event.request.url,'\nError: '+e);
   return cachedResponse || new Response('Network error occurred', { status: 408 });
  }
 })());
});