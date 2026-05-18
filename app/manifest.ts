import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Mehdi Loumrhari - Création Web',
        short_name: 'Mehdi Dev',
        description: 'Création de sites web, applications web et mobiles',
        start_url: '/',
        display: 'standalone',
        background_color: '#FFF5F8',
        theme_color: '#FF6B9D',
        orientation: 'portrait-primary',
        icons: [
            {
                src: '/assets/favicon-192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/assets/favicon-512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            }
        ]
    };
}
