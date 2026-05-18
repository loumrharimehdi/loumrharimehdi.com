import type { Metadata } from 'next';
import Link from 'next/link';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { HeartsBackground } from '@/components/HeartsBackground';
import { Navigation } from '@/components/Navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { legal, site } from '@/data/site';

export const metadata: Metadata = {
    title: 'Mentions légales',
    description:
        'Mentions légales du site mehdiloumrhari.agency : éditeur, hébergeur, propriété intellectuelle et contact.',
    alternates: {
        canonical: '/mentions-legales'
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function MentionsLegalesPage() {
    return (
        <>
            <ThemeToggle />
            <HeartsBackground count={2} />
            <Navigation />

            <article className="article">
                <div className="container">
                    <div className="article-header">
                        <div className="article-header-top">
                            <Link href="/" className="article-back">
                                ← Retour à l&apos;accueil
                            </Link>
                            <span className="section-badge">Légal</span>
                        </div>
                        <h1>Mentions légales</h1>
                        <div className="article-meta">
                            <span>Dernière mise à jour : 18 mai 2026</span>
                        </div>
                    </div>

                    <div className="article-content">
                        <h2>1. Éditeur du site</h2>
                        <p>
                            Le site{' '}
                            <a href={site.url} target="_blank" rel="noopener">
                                {site.url}
                            </a>{' '}
                            est édité par :
                        </p>
                        <ul>
                            <li>
                                <strong>Nom :</strong> {legal.fullName}
                            </li>
                            <li>
                                <strong>Statut :</strong> {legal.status}
                            </li>
                            <li>
                                <strong>Identifiant Auto-entrepreneur :</strong> {legal.autoEntrepreneurId}
                            </li>
                            <li>
                                <strong>Adresse :</strong> {legal.city}, {legal.country}
                            </li>
                            <li>
                                <strong>Email :</strong> <a href={`mailto:${legal.email}`}>{legal.email}</a>
                            </li>
                            <li>
                                <strong>Téléphone :</strong> {legal.phone}
                            </li>
                        </ul>

                        <h2>2. Responsable de la publication</h2>
                        <p>
                            {legal.fullName}, joignable à l&apos;adresse {legal.email}.
                        </p>

                        <h2>3. Hébergement</h2>
                        <p>Le site est hébergé par :</p>
                        <ul>
                            <li>
                                <strong>Société :</strong> {legal.hostingProvider}
                            </li>
                            <li>
                                <strong>Adresse :</strong> {legal.hostingAddress}
                            </li>
                            <li>
                                <strong>Site web :</strong>{' '}
                                <a href={legal.hostingUrl} target="_blank" rel="noopener">
                                    {legal.hostingUrl}
                                </a>
                            </li>
                        </ul>

                        <h2>4. Propriété intellectuelle</h2>
                        <p>
                            L&apos;ensemble du contenu présent sur ce site (textes, images, code, identité visuelle) est
                            la propriété exclusive de {legal.fullName}, sauf mention contraire. Toute reproduction,
                            représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite
                            préalable est interdite et constitue une contrefaçon sanctionnée par la loi.
                        </p>

                        <h2>5. Liens externes</h2>
                        <p>
                            Le site peut contenir des liens vers des sites tiers. {legal.fullName} ne contrôle pas le
                            contenu de ces sites et décline toute responsabilité quant aux informations qui y sont
                            publiées.
                        </p>

                        <h2>6. Données personnelles</h2>
                        <p>
                            Les informations transmises via le formulaire de contact sont utilisées uniquement pour
                            répondre à votre demande. Elles ne sont ni revendues, ni partagées avec des tiers.
                        </p>
                        <p>
                            Conformément à la législation marocaine sur la protection des données personnelles (loi n°
                            09-08) et au RGPD pour les visiteurs européens, vous disposez d&apos;un droit d&apos;accès,
                            de rectification et de suppression de vos données. Pour exercer ce droit, écrivez à{' '}
                            <a href={`mailto:${legal.email}`}>{legal.email}</a>.
                        </p>

                        <h2>7. Cookies</h2>
                        <p>
                            Ce site n&apos;utilise pas de cookies de suivi publicitaire. Seuls des cookies techniques
                            strictement nécessaires au fonctionnement du site (préférence de thème clair/sombre) peuvent
                            être enregistrés localement.
                        </p>

                        <h2>8. Loi applicable</h2>
                        <p>
                            Les présentes mentions légales sont régies par le droit marocain. En cas de litige, et après
                            tentative de résolution amiable, les tribunaux compétents de {legal.city} seront seuls
                            saisis.
                        </p>
                    </div>
                </div>
            </article>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
}
