/**
 * MUST SERVE OVER HTTPS 
 * This will allow the app to truly act like a PWA.
 */

/* eslint no-console: ["error", { allow: ["info"] }] */

console.info(
  'Service worker disabled for development, will be generated at build time.'
);

self.addEventListener('install', function(event){
  console.log('SW installed');
  event.waitUntil(
    //Special cache (not default browser cache)
    caches.open('static').then(function(cache){
      // cahce.add(/*[path to file you desire to cahce]*/);
      // cahce.add('/');

      // Or just add all...
      cache.addAll([
        '/',
        '/index.html',
        '/src/home-view.html',
        '/src/login-view.html',
        '/src/lists-view.html',
        '/src/list-view.html',
        '/src/receipts-view.html',
        '/src/receipt-view.html',
        '/src/scanner-view.html',
        '/src/store-view.html',
        '/src/checkout-view.html',
        '/src/cart-view.html',
        '/src/account-view.html',
        '/src/four-oh-four-view.html'
      ]);
    })
  );
});
self.addEventListener('activate', function(){
  // Not automatically activated
  console.log('SW activated');
});
self.addEventListener('fetch', function(event){
  // Use this as a network proxy to prevent default network fetch
  caches.match(event.request)
  .then(function(res){
    if (res) {
      // If you have the resource in the cache, return it
      return res;
    } else {
      // Otherwise fetch the resource
      return fetch(event.request);
    }
  })
});