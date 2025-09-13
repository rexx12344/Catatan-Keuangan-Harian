const CACHE_NAME = "keuangan-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json"
  // tambahin file lain kalau perlu, misalnya css, js, icon
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
