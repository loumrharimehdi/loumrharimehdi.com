import type { MetadataRoute } from 'next';
import { articles } from '@/data/articles';
import { projects } from '@/data/projects';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return [
        {
            url: site.url,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: `${site.url}/blog`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        ...articles.map((article) => ({
            url: `${site.url}/articles/${article.slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.7
        })),
        ...projects.map((project) => ({
            url: `${site.url}/projets/${project.slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.75
        })),
        {
            url: `${site.url}/mentions-legales`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3
        },
        {
            url: `${site.url}/cgv`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3
        }
    ];
}
