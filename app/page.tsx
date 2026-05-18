import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { HeartsBackground } from '@/components/HeartsBackground';
import { Navigation } from '@/components/Navigation';
import { PageLoader } from '@/components/PageLoader';
import { SectionHeader } from '@/components/SectionHeader';
import { ThemeToggle } from '@/components/ThemeToggle';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { faqs, portfolio, pricingFeatures, processSteps, reasons, services, site, testimonials } from '@/data/site';

export default function HomePage() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Mehdi Loumrhari - Développeur Web',
        description: 'Création de sites web, applications web et mobiles sur mesure',
        url: site.url,
        telephone: '+212680287864',
        email: site.email,
        priceRange: '€€',
        areaServed: ['Maroc', 'France', 'International'],
        serviceType: ['Création de site web', 'Application web', 'Application mobile'],
        sameAs: [site.agencyUrl]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <PageLoader />
            <a href="#main-content" className="skip-link">
                Aller au contenu principal
            </a>
            <ThemeToggle />
            <HeartsBackground />
            <Navigation />

            <main id="main-content">
                <header className="hero" id="hero">
                    <div className="container hero-container">
                        <div className="hero-badges">
                            <span className="badge pulse-badge">💎 Qualité & Sur-Mesure</span>
                            <span className="badge pulse-badge">
                                🏆 +<span className="counter" data-target="50">50</span> Clients Satisfaits
                            </span>
                        </div>
                        <h1 className="hero-title">
                            Votre site internet
                            <br />
                            <span className="accent gradient-text">clé en main.</span>
                        </h1>
                        <p className="hero-subtitle">
                            Je crée votre site web ou application.
                            <br />
                            Vous me dites ce que vous voulez, je m&apos;occupe de tout.
                        </p>
                        <div className="hero-cta">
                            <a href={site.whatsapp} className="btn btn-whatsapp btn-large" target="_blank" rel="noopener">
                                <WhatsAppIcon />
                                Discuter de mon projet
                            </a>
                            <a href="#portfolio" className="btn btn-secondary">
                                Découvrir mes réalisations
                            </a>
                        </div>
                    </div>
                </header>

                <section className="services" id="services">
                    <div className="container">
                        <SectionHeader
                            badge="🎯 Services"
                            title={
                                <>
                                    Ce que je <span className="accent">crée pour vous</span>
                                </>
                            }
                            subtitle="Des solutions simples adaptées à vos besoins"
                        />
                        <div className="services-grid">
                            {services.map((service) => (
                                <div key={service.title} className={`service-card ${service.featured ? 'featured' : ''}`}>
                                    {service.featured ? <span className="card-badge">Populaire</span> : null}
                                    <div className="service-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <ul className="service-features">
                                        {service.features.map((feature) => (
                                            <li key={feature}>✓ {feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="process">
                    <div className="container">
                        <SectionHeader
                            badge="⚡ Processus"
                            title={
                                <>
                                    Comment ça <span className="accent">fonctionne</span>
                                </>
                            }
                            subtitle="4 étapes simples vers votre projet"
                        />
                        <div className="process-grid">
                            {processSteps.map((step, index) => (
                                <div key={step.title} className="process-step">
                                    <div className="step-number">{index + 1}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="why-choose" id="pourquoi">
                    <div className="container">
                        <SectionHeader
                            badge="💎 Avantages"
                            title={
                                <>
                                    Pourquoi me <span className="accent">choisir</span>
                                </>
                            }
                            subtitle="Un service simple et humain"
                        />
                        <div className="why-grid">
                            {reasons.map((reason) => (
                                <div key={reason.title} className="why-card">
                                    <div className="why-icon">{reason.icon}</div>
                                    <h3>{reason.title}</h3>
                                    <p>{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="pricing" id="tarifs">
                    <div className="container">
                        <SectionHeader
                            badge="💎 Tarif"
                            title={
                                <>
                                    Devis <span className="accent">Sur Mesure</span>
                                </>
                            }
                            subtitle="Chaque projet est unique. Je m'adapte à vos besoins."
                        />
                        <div className="pricing-card">
                            <div className="pricing-badge">🔥 Places limitées cette semaine</div>
                            <div className="pricing-header">
                                <span className="pricing-label">VOTRE PROJET PERSONNALISÉ</span>
                                <div className="pricing-price">
                                    <span className="price">Devis gratuit</span>
                                    <span className="price-note">Je vous propose un prix adapté à votre projet</span>
                                </div>
                            </div>
                            <ul className="pricing-features">
                                {pricingFeatures.map((feature) => (
                                    <li key={feature}>
                                        <span className="check">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a href={site.whatsapp} className="btn btn-whatsapp btn-full" target="_blank" rel="noopener">
                                <WhatsAppIcon size={20} />
                                Démarrer mon projet →
                            </a>
                            <p className="pricing-guarantee">Design offert. Acompte uniquement si vous validez le design.</p>
                        </div>
                    </div>
                </section>

                <section className="portfolio" id="portfolio">
                    <div className="container">
                        <SectionHeader
                            badge="🎨 Réalisations"
                            title={
                                <>
                                    Mes derniers <span className="accent">projets</span>
                                </>
                            }
                            subtitle="Des exemples concrets de mon travail"
                        />
                        <div className="portfolio-grid">
                            {portfolio.map((project) => (
                                <a key={project.title} href={project.href} target="_blank" rel="noopener" className="portfolio-card">
                                    <div className="portfolio-image">
                                        <Image
                                            src={project.image}
                                            alt={project.alt}
                                            width={project.width}
                                            height={project.height}
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <span className="portfolio-tag">{project.tag}</span>
                                    </div>
                                    <div className="portfolio-content">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="portfolio-tech">
                                            {project.tech.map((tech) => (
                                                <span key={tech}>{tech}</span>
                                            ))}
                                        </div>
                                        <span className="portfolio-link">Voir le site →</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="testimonials">
                    <div className="container">
                        <SectionHeader
                            badge="⭐ Témoignages"
                            title={
                                <>
                                    Ce que disent <span className="accent">mes clients</span>
                                </>
                            }
                        />
                        <div className="testimonials-grid">
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.name} className="testimonial-card">
                                    <div className="testimonial-quote">&quot;</div>
                                    <p>&quot;{testimonial.quote}&quot;</p>
                                    <div className="testimonial-author">
                                        <div className="author-avatar">{testimonial.initials}</div>
                                        <div>
                                            <strong>{testimonial.name}</strong>
                                            <span>{testimonial.role}</span>
                                        </div>
                                    </div>
                                    <div className="testimonial-stars">★★★★★</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="faq" id="faq">
                    <div className="container">
                        <SectionHeader
                            badge="❓ FAQ"
                            title={
                                <>
                                    Questions <span className="accent">fréquentes</span>
                                </>
                            }
                        />
                        <div className="faq-list">
                            {faqs.map((faq) => (
                                <details key={faq.question} className="faq-item">
                                    <summary>{faq.question}</summary>
                                    <p>{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="contact" id="contact">
                    <div className="container">
                        <SectionHeader
                            badge="✉️ Contact"
                            title={
                                <>
                                    Parlons de <span className="accent">votre projet</span>
                                </>
                            }
                            subtitle="Remplissez le formulaire ou contactez-moi directement"
                        />
                        <div className="contact-wrapper">
                            <div className="contact-form-container">
                                <ContactForm />
                            </div>
                            <div className="contact-info">
                                <div className="contact-card">
                                    <div className="contact-icon">📱</div>
                                    <h3>WhatsApp</h3>
                                    <p>Réponse en moins de 2h</p>
                                    <a href={site.whatsapp} className="btn btn-whatsapp" target="_blank" rel="noopener">
                                        {site.phone}
                                    </a>
                                </div>
                                <div className="contact-card">
                                    <div className="contact-icon">✉️</div>
                                    <h3>Email</h3>
                                    <p>Pour les demandes détaillées</p>
                                    <a href={`mailto:${site.email}`} className="contact-link">
                                        {site.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer homeCopy />
            <FloatingWhatsApp />
        </>
    );
}
