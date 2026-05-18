// Service Worker for loumrharimehdi.com Next.js app
const CACHE_NAME = 'loumrhari-next-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/blog',
    '/articles/pourquoi-site-web-2025',
    '/articles/application-web-vs-site',
    '/articles/erreurs-creation-site',
    '/manifest.webmanifest',
    '/assets/favicon-192.png',
    '/assets/favicon-32.png',
    '/assets/portfolio-simsar.webp',
    '/assets/portfolio-myprestige.webp',
    '/assets/portfolio-loumrhari.webp'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((cacheNames) =>
                Promise.all(
                    cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
                )
            )
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    if (!event.request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;

            return fetch(event.request)
                .then((response) => {
                    if (!response || response.status !== 200) return response;

                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });

                    return response;
                })
                .catch(() => {
                    if (event.request.headers.get('accept')?.includes('text/html')) {
                        return caches.match('/');
                    }

                    return undefined;
                });
        })
    );
});
