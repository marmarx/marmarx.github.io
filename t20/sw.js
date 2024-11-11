const cache_exp = 1000*60*60*24;	//24 hours cache_exp
const cache_name = 'ficha-tormenta20-v1.6.3';
const cache_resources = ['/','/print.html','/mestre.html',
'/src/favicon.png','/src/css.css','/src/style.css','/src/back.jpg','/src/border-print.svg','/src/dice.svg','/src/logo.png','/src/noisy.png','/src/magic.svg','/src/Tormenta20.ttf',
'/db/common.js','/db/conditions.js','/db/equips.js','/db/geral.js','/db/icons.js','/db/powers.js','/db/skills.js','/db/spells.js',
'/js/dice_roller.js','/js/keyboard.js','/js/worker_list.js','/js/worker_power.js','/js/worker_spell.js'
];

//check if cached resource is expired
async function isExpired(cachedResponse){
 let dateHeader = cachedResponse.headers.get('date');
 if(dateHeader){
  let cacheDate = new Date(dateHeader).getTime();
  return Date.now() - cacheDate > cache_exp;
 }
 return true; //treat as expired if date header is missing
}

//update a resource in the cache
async function updateCache(request){
 let cache = await caches.open(cache_name);
 try{
  let fetchResponse = await fetch(request);
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
  let cache = await caches.open(cache_name);
  await cache.addAll(cache_resources);
 })());
});

//activate event to update outdated cached resources
self.addEventListener('activate', event => {
 event.waitUntil((async () => {
  let cache = await caches.open(cache_name);
  let cachedRequests = await cache.keys();
  for(let request of cachedRequests){
   let cachedResponse = await cache.match(request);
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
  let cache = await caches.open(cache_name);
  let cachedResponse = await cache.match(event.request);

  if (cachedResponse && !(await isExpired(cachedResponse))) {
   console.log('Service worker: fetch event serving cached resource at ', event.request.url);
   return cachedResponse;
  }

  console.log(`Service worker: fetch event resource is ${cachedResponse?'expired':'not in cache'} - will try to serve from web at ${event.request.url}`);
  return updateCache(event.request) || new Response('Network error occurred',{status:408});
 })());
});