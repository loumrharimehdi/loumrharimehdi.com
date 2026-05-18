import type { Metadata } from 'next';
import Link from 'next/link';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { HeartsBackground } from '@/components/HeartsBackground';
import { Navigation } from '@/components/Navigation';
import { SectionHeader } from '@/components/SectionHeader';
import { ThemeToggle } from '@/components/ThemeToggle';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { blogPosts, site } from '@/data/site';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Articles et conseils sur le développement web, le digital et la création de sites internet.',
    alternates: {
        canonical: '/blog'
    }
};

export default function BlogPage() {
    return (
        <>
            <ThemeToggle />
            <HeartsBackground />
            <Navigation active="blog" />

            <header className="blog-header">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge pulse-badge">✍️ Blog</span>
                        <h1>
                            Articles & <span className="accent gradient-text">Conseils</span>
                        </h1>
                        <p>Découvrez mes derniers articles sur le développement web et le digital</p>
                    </div>
                </div>
            </header>

            <section className="blog-section">
                <div className="container">
                    <div className="blog-grid">
                        {blogPosts.map((post) => (
                            <Link key={post.slug} href={`/articles/${post.slug}`} className="blog-card">
                                <div className="blog-image" style={{ background: post.gradient }}>
                                    <span className="blog-tag">{post.tag}</span>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span className="blog-date">📅 {post.date}</span>
                                        <span className="blog-read">⏱️ {post.readTime}</span>
                                    </div>
                                    <h2>{post.title}</h2>
                                    <p>{post.excerpt}</p>
                                    <span className="blog-link">Lire l&apos;article →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="blog-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>
                            Prêt à lancer <span className="accent">votre projet</span> ?
                        </h2>
                        <p>Discutons de vos besoins et créons ensemble votre présence digitale</p>
                        <a href={site.whatsapp} className="btn btn-whatsapp btn-large" target="_blank" rel="noopener">
                            <WhatsAppIcon />
                            Discuter sur WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
}
