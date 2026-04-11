const CACHE_NAME = 'lit-wilton-v1';
const ASSETS_TO_CACHE = ['/','/index.html','/events.html','/about.html','/contact.html','/styles.css','/main.js','/manifest.json'];
self.addEventListener('install', (event) => { event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))); self.skipWaiting(); });
self.addEventListener('activate', (event) => { event.waitUntil(caches.keys().then((names) => Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))))); self.clients.claim(); });
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request).then((r) => { if (r.status === 200) { const c = r.clone(); caches.open(CACHE_NAME).then((cache) => cache.put(event.request, c)); } return r; }).catch(() => caches.match(event.request))); });
