const expiration = 1000*60*60*24;	//24 hours expiration
const cache_name = 'ficha-tormenta20-v1.6.2';
const cache_resources = ['/t20/','/t20/print.html',
'/t20/src/favicon.png','/t20/src/css.css','/t20/src/style.css','/t20/src/back.jpg','/t20/src/border-print.svg','/t20/src/dice.svg','/t20/src/logo.png','/t20/src/noisy.png','/t20/src/magic.svg','/t20/src/Tormenta20.ttf',
'/t20/db/common.js','/t20/db/conditions.js','/t20/db/equips.js','/t20/db/geral.js','/t20/db/icons.js','/t20/db/powers.js','/t20/db/skills.js','/t20/db/spells.js',
'/t20/js/dice_roller.js','/t20/js/keyboard.js','/t20/js/worker_list.js','/t20/js/worker_power.js','/t20/js/worker_spell.js'
];

//check if cached resource is expired
async function isExpired(cachedResponse){
 const dateHeader = cachedResponse.headers.get('date');
 if(dateHeader){
  const cacheDate = new Date(dateHeader).getTime();
  return Date.now() - cacheDate > expiration;
 }
 return true; //treat as expired if date header is missing
}

//update a resource in the cache
async function updateCache(request){
 const cache = await caches.open(cache_name);
 try{
  const fetchResponse = await fetch(request);
  await cache.put(request, fetchResponse.clone());
  console.log(`Service worker: updated cached resource: ${request.url}`);
  return fetchResponse;
 }catch(e){
  console.log(`Service worker: failed to update resource: ${request.url}\nError:`, e);
  return cache.match(request);	//return the outdated cache in case of failure
 }
}

//install event to pre-cache all initial resources
self.addEventListener('install', event => {
 console.log('Service worker: install event!');
 event.waitUntil((async () => {
  const cache = await caches.open(cache_name);
  await cache.addAll(cache_resources);
 })());
});

//activate event to update outdated cached resources
self.addEventListener('activate', event => {
 event.waitUntil((async () => {
  const cache = await caches.open(cache_name);
  const cachedRequests = await cache.keys();
  for(const request of cachedRequests){
   const cachedResponse = await cache.match(request);
   if(await isExpired(cachedResponse)){
    console.log(`Service worker: activate event detected outdated resource detected: ${request.url}`);
    await updateCache(request);
   }
  }
 })());
});

//fetch event to serve from cache and update if expired
self.addEventListener('fetch', event => {
 console.log('Service worker: fetch event intercepted for ', event.request.url);
 event.respondWith((async () => {
  const cache = await caches.open(cache_name);
  const cachedResponse = await cache.match(event.request);

  if (cachedResponse && !(await isExpired(cachedResponse))) {
   console.log('Service worker: fetch event serving cached resource at ', event.request.url);
   return cachedResponse;
  }

  console.log(`Service worker: fetch event resource is ${cachedResponse?'expired':'not in cache'} at ${event.request.url}`);
  return updateCache(event.request) || new Response('Network error occurred',{status:408});
 })());
});