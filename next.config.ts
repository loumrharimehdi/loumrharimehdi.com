import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    redirects: async () => [
        {
            source: '/index.html',
            destination: '/',
            permanent: true
        },
        {
            source: '/blog.html',
            destination: '/blog',
            permanent: true
        },
        {
            source: '/articles/:slug.html',
            destination: '/articles/:slug',
            permanent: true
        }
    ]
};

export default nextConfig;
