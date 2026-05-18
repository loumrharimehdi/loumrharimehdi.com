// Lightweight service worker for the Next.js app.
const CACHE_NAME = 'loumrhari-next-v2';
const STATIC_ASSETS = [
    '/manifest.webmanifest',
    '/assets/favicon-192.png',
    '/assets/favicon-32.png',
    '/assets/og-image.webp',
    '/assets/portfolio-simsar.webp',
    '/assets/portfolio-myprestige.webp',
    '/assets/portfolio-loumrhari.webp'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((cacheNames) =>
                Promise.all(cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)))
            )
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    if (request.method !== 'GET' || url.origin !== self.location.origin) return;

    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request).catch(
                () =>
                    new Response('Offline', {
                        status: 503,
                        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
                    })
            )
        );
        return;
    }

    if (
        url.pathname.startsWith('/_next/static/') ||
        url.pathname.startsWith('/assets/') ||
        url.pathname === '/manifest.webmanifest'
    ) {
        event.respondWith(
            caches.match(request).then((cachedResponse) => {
                if (cachedResponse) return cachedResponse;

                return fetch(request).then((response) => {
                    if (response.ok) {
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
                    }

                    return response;
                });
            })
        );
    }
});
