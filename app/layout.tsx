import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { LoaderScript } from '@/components/LoaderScript';
import { MeshBackground } from '@/components/MeshBackground';
import { PageEffects } from '@/components/PageEffects';
import { ServiceWorkerRegistrar } from '@/components/ServiceWorkerRegistrar';
import { SvgSprite } from '@/components/SvgSprite';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeScript } from '@/components/ThemeScript';
import { site } from '@/data/site';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
});

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: site.title,
        template: `%s | ${site.name}`
    },
    description: site.description,
    authors: [{ name: site.name }],
    keywords: [
        'création site web',
        'développeur web',
        'application mobile',
        'app web',
        'design moderne',
        'freelance développeur'
    ],
    manifest: '/manifest.webmanifest',
    alternates: {
        canonical: '/'
    },
    icons: {
        icon: [
            {
                url: '/assets/favicon-32.png',
                sizes: '32x32',
                type: 'image/png'
            },
            {
                url: '/assets/favicon-192.png',
                sizes: '192x192',
                type: 'image/png'
            }
        ],
        apple: [
            {
                url: '/assets/favicon-192.png',
                sizes: '192x192',
                type: 'image/png'
            }
        ]
    },
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: site.url,
        siteName: site.name,
        title: 'Mehdi Loumrhari - Création Web & Applications',
        description: 'Sites web, apps web et mobiles. Design premium sur mesure.',
        images: ['/assets/og-image.webp']
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mehdi Loumrhari - Création Web & Applications',
        description: 'Sites web, apps web et mobiles. Design premium sur mesure.',
        images: ['/assets/og-image.webp']
    },
    robots: {
        index: true,
        follow: true
    }
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#FF6B9D'
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fr" className={inter.variable} suppressHydrationWarning>
            <body>
                <ThemeScript />
                <LoaderScript />
                <ThemeProvider>
                    <SvgSprite />
                    <MeshBackground />
                    {children}
                    <CustomCursor />
                    <PageEffects />
                    <ServiceWorkerRegistrar />
                </ThemeProvider>
            </body>
        </html>
    );
}
