import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { HeartsBackground } from '@/components/HeartsBackground';
import { JsonLd } from '@/components/JsonLd';
import { Navigation } from '@/components/Navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { getProject, projects } from '@/data/projects';
import { site } from '@/data/site';

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        return {};
    }

    return {
        title: `${project.title} — Cas d’étude`,
        description: project.summary,
        alternates: {
            canonical: `/projets/${project.slug}`
        },
        openGraph: {
            type: 'article',
            title: `${project.title} — Cas d’étude`,
            description: project.summary,
            url: `${site.url}/projets/${project.slug}`,
            images: [project.image]
        }
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        notFound();
    }

    const projectUrl = `${site.url}/projets/${project.slug}`;
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
                    name: 'Projets',
                    item: `${site.url}/#portfolio`
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: project.title,
                    item: projectUrl
                }
            ]
        },
        {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: project.summary,
            url: projectUrl,
            image: `${site.url}${project.image}`,
            author: {
                '@type': 'Person',
                name: site.name,
                url: site.url
            }
        }
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            <ThemeToggle />
            <HeartsBackground count={2} />
            <Navigation />

            <article className="article project-case">
                <div className="container">
                    <div className="article-header">
                        <div className="article-header-top">
                            <Link href="/#portfolio" className="article-back">
                                ← Retour aux projets
                            </Link>
                            <span className="section-badge">{project.tag}</span>
                        </div>
                        <h1>{project.title}</h1>
                        <p className="project-summary">{project.summary}</p>
                        <div className="article-meta">
                            <span>⏱️ {project.duration}</span>
                            <span>👤 {project.role}</span>
                        </div>
                    </div>

                    <div className="project-hero">
                        <Image
                            src={project.image}
                            alt={project.imageAlt}
                            width={project.width}
                            height={project.height}
                            sizes="(max-width: 768px) 100vw, 80vw"
                            priority
                        />
                    </div>

                    <div className="project-metrics">
                        {project.metrics.map((metric) => (
                            <div key={metric.label} className="project-metric">
                                <span className="metric-value">{metric.value}</span>
                                <span className="metric-label">{metric.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="article-content">
                        <h2>Contexte</h2>
                        {project.context}

                        <h2>Défi</h2>
                        {project.challenge}

                        <h2>Solution</h2>
                        {project.solution}

                        <h2>Résultats</h2>
                        {project.results}

                        <h2>Stack &amp; choix techniques</h2>
                        <div className="project-stack">
                            {project.stack.map((tech) => (
                                <span key={tech} className="project-stack-item">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="article-cta">
                            <h3>Un projet similaire en tête ?</h3>
                            <p>Discutons-en. Devis et maquette offerts.</p>
                            <div className="project-cta-actions">
                                <a href={site.whatsapp} className="btn btn-whatsapp" target="_blank" rel="noopener">
                                    <WhatsAppIcon size={20} />
                                    Discuter de mon projet
                                </a>
                                <a href={project.href} className="btn btn-secondary" target="_blank" rel="noopener">
                                    Voir le site en ligne →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
}
