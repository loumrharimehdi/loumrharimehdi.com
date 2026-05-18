import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { HeartsBackground } from '@/components/HeartsBackground';
import { JsonLd } from '@/components/JsonLd';
import { Navigation } from '@/components/Navigation';
import { ShareButtons } from '@/components/ShareButtons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { articles, getArticle } from '@/data/articles';
import { site } from '@/data/site';

type ArticlePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticle(slug);

    if (!article) {
        return {};
    }

    return {
        title: article.plainTitle,
        description: article.description,
        alternates: {
            canonical: `/articles/${article.slug}`
        },
        openGraph: {
            type: 'article',
            title: article.plainTitle,
            description: article.description,
            url: `${site.url}/articles/${article.slug}`
        }
    };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = getArticle(slug);

    if (!article) {
        notFound();
    }

    const articleUrl = `${site.url}/articles/${article.slug}`;
    const structuredData = [
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Accueil',
                    item: site.url
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Blog',
                    item: `${site.url}/blog`
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: article.plainTitle,
                    item: articleUrl
                }
            ]
        },
        {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.plainTitle,
            description: article.description,
            url: articleUrl,
            author: {
                '@type': 'Person',
                name: site.name
            },
            publisher: {
                '@type': 'Organization',
                name: site.name,
                logo: {
                    '@type': 'ImageObject',
                    url: `${site.url}/assets/favicon-512.png`
                }
            }
        }
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            <ThemeToggle />
            <HeartsBackground count={2} />
            <Navigation active="blog" />

            <article className="article">
                <div className="container">
                    <div className="article-header">
                        <div className="article-header-top">
                            <Link href="/blog" className="article-back">
                                ← Retour au blog
                            </Link>
                            <span className="section-badge">{article.tag}</span>
                        </div>
                        <h1>{article.title}</h1>
                        <div className="article-meta">
                            <span>📅 {article.date}</span>
                            <span>⏱️ {article.readTime}</span>
                            <span>✍️ Mehdi Loumrhari</span>
                        </div>
                    </div>

                    <div className="article-content">
                        {article.body}

                        <div className="article-cta">
                            <h3>{article.ctaTitle}</h3>
                            <p>{article.ctaText}</p>
                            <a href={site.whatsapp} className="btn btn-whatsapp" target="_blank" rel="noopener">
                                <WhatsAppIcon size={20} />
                                {article.ctaLabel}
                            </a>
                        </div>

                        <ShareButtons article={article} />
                    </div>
                </div>
            </article>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
}
