// Service Worker for mehdiloumrhari.agency
const CACHE_NAME = 'loumrhari-static-v2';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/blog.html',
    '/404.html',
    '/style.min.css',
    '/script.min.js',
    '/manifest.json',
    '/assets/favicon-192.png',
    '/assets/favicon-32.png',
    '/assets/og-image.webp',
    '/assets/portfolio-simsar.webp',
    '/assets/portfolio-myprestige.webp',
    '/assets/portfolio-loumrhari.webp'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const { request } = event;

    if (request.method !== 'GET') return;
    if (!request.url.startsWith(self.location.origin)) return;
    if (request.url.includes('/_vercel/')) return;

    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
                    return response;
                })
                .catch(() => caches.match(request).then((cached) => cached || caches.match('/404.html')))
        );
        return;
    }

    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            const networkResponse = fetch(request)
                .then((response) => {
                    if (response && response.status === 200) {
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
                    }

                    return response;
                })
                .catch(() => cachedResponse);

            return cachedResponse || networkResponse;
        })
    );
});
