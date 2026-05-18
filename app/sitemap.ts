import type { MetadataRoute } from 'next';
import { articles } from '@/data/articles';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: site.url,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: `${site.url}/blog`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        ...articles.map((article) => ({
            url: `${site.url}/articles/${article.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7
        }))
    ];
}
