import type { Metadata } from 'next';
import Link from 'next/link';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { HeartsBackground } from '@/components/HeartsBackground';
import { Navigation } from '@/components/Navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { legal, site } from '@/data/site';

export const metadata: Metadata = {
    title: 'Conditions générales de vente',
    description:
        'Conditions générales de vente applicables aux prestations de création de sites web et applications proposées par Mehdi Loumrhari.',
    alternates: {
        canonical: '/cgv'
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function CgvPage() {
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
                        <h1>Conditions générales de vente</h1>
                        <div className="article-meta">
                            <span>Dernière mise à jour : 18 mai 2026</span>
                        </div>
                    </div>

                    <div className="article-content">
                        <p className="article-intro">
                            Les présentes Conditions Générales de Vente (ci-après «&nbsp;CGV&nbsp;») s&apos;appliquent à
                            toute prestation de création de site internet, d&apos;application web ou mobile, et plus
                            largement à tout service de développement proposé par {legal.fullName} (ci-après «&nbsp;le
                            Prestataire&nbsp;»). Toute commande implique l&apos;acceptation sans réserve des présentes
                            CGV par le client.
                        </p>

                        <h2>1. Prestataire</h2>
                        <ul>
                            <li>
                                <strong>{legal.fullName}</strong>, {legal.status}
                            </li>
                            <li>Identifiant Auto-entrepreneur : {legal.autoEntrepreneurId}</li>
                            <li>
                                {legal.city}, {legal.country}
                            </li>
                            <li>
                                Email : <a href={`mailto:${legal.email}`}>{legal.email}</a>
                            </li>
                            <li>Téléphone : {legal.phone}</li>
                        </ul>

                        <h2>2. Objet</h2>
                        <p>
                            Les présentes CGV régissent les prestations de conception, de développement et de mise en
                            ligne de sites internet, d&apos;applications web et d&apos;applications mobiles, ainsi que
                            les services associés (design, conseil, maintenance, formation).
                        </p>

                        <h2>3. Devis et commande</h2>
                        <p>
                            Toute prestation fait l&apos;objet d&apos;un devis personnalisé, gratuit et sans engagement.
                            Le devis détaille la nature des prestations, le planning, le tarif et les modalités de
                            paiement.
                        </p>
                        <p>
                            La commande est ferme dès la signature du devis par le client (signature électronique ou
                            accord écrit par email) et le versement de l&apos;acompte prévu.
                        </p>

                        <h2>4. Maquette et validation</h2>
                        <p>
                            Le Prestataire propose au client une maquette ou un aperçu de la solution envisagée. La
                            réalisation de cette maquette est offerte. La poursuite du projet est conditionnée à
                            l&apos;acceptation écrite de la maquette par le client.
                        </p>

                        <h2>5. Tarifs et paiement</h2>
                        <p>Les tarifs sont indiqués en dirhams marocains (MAD) ou en euros (EUR) selon le client.</p>
                        <p>Les modalités de paiement standard sont les suivantes :</p>
                        <ul>
                            <li>✓ 50&nbsp;% à la validation de la maquette (acompte)</li>
                            <li>✓ 50&nbsp;% à la livraison du projet finalisé</li>
                        </ul>
                        <p>
                            Les paiements s&apos;effectuent par virement bancaire ou par tout autre moyen convenu avec
                            le client. Aucun escompte n&apos;est accordé en cas de paiement anticipé.
                        </p>

                        <h2>6. Délais de réalisation</h2>
                        <p>
                            Les délais indiqués au devis sont donnés à titre indicatif. Ils courent à compter de la
                            réception de l&apos;acompte et des éléments nécessaires au projet (contenus, accès,
                            visuels). Tout retard imputable au client (validation, fourniture des contenus) prolonge
                            d&apos;autant le délai global.
                        </p>

                        <h2>7. Obligations du client</h2>
                        <p>Le client s&apos;engage à :</p>
                        <ul>
                            <li>✓ Fournir l&apos;ensemble des contenus, accès et informations nécessaires au projet</li>
                            <li>✓ Disposer des droits sur les éléments transmis (textes, images, marques)</li>
                            <li>✓ Respecter les délais de validation et de retour</li>
                            <li>✓ Régler les sommes dues selon l&apos;échéancier convenu</li>
                        </ul>

                        <h2>8. Obligations du Prestataire</h2>
                        <p>
                            Le Prestataire s&apos;engage à mettre en œuvre les moyens nécessaires à la bonne exécution
                            de la prestation, dans le respect des règles de l&apos;art. Il est tenu d&apos;une
                            obligation de moyens et non de résultat.
                        </p>

                        <h2>9. Propriété intellectuelle</h2>
                        <p>
                            À compter du paiement intégral du prix, le client devient propriétaire des éléments
                            spécifiquement créés pour son projet (textes, design final, contenus livrés). Le code
                            source, les bibliothèques tierces et les outils standards restent soumis à leur licence
                            d&apos;origine.
                        </p>
                        <p>
                            Le Prestataire conserve le droit de mentionner le projet dans ses références commerciales et
                            son portfolio, sauf demande contraire écrite du client.
                        </p>

                        <h2>10. Hébergement et maintenance</h2>
                        <p>
                            L&apos;hébergement n&apos;est pas inclus par défaut. Le Prestataire peut conseiller et
                            configurer un hébergement adapté. Les frais d&apos;hébergement, de nom de domaine et de
                            services tiers (envoi d&apos;emails, API) sont à la charge du client.
                        </p>
                        <p>
                            Toute prestation de maintenance fait l&apos;objet d&apos;un contrat séparé ou d&apos;un
                            devis spécifique.
                        </p>

                        <h2>11. Garantie</h2>
                        <p>
                            Le Prestataire garantit le bon fonctionnement du livrable pendant <strong>30 jours</strong>{' '}
                            après la mise en ligne. Pendant cette période, toute anomalie identifiée et imputable au
                            développement initial est corrigée sans frais.
                        </p>
                        <p>
                            Les évolutions, ajouts de fonctionnalités ou modifications de contenu hors du périmètre
                            initial font l&apos;objet d&apos;un devis complémentaire.
                        </p>

                        <h2>12. Annulation</h2>
                        <p>
                            En cas d&apos;annulation par le client après le versement de l&apos;acompte, ce dernier
                            reste acquis au Prestataire en contrepartie du travail déjà réalisé. Si le projet est annulé
                            en cours de réalisation, la prestation est facturée au prorata du travail accompli.
                        </p>

                        <h2>13. Données personnelles</h2>
                        <p>
                            Les données transmises par le client dans le cadre de la prestation sont traitées
                            conformément à la législation marocaine (loi n° 09-08) et, lorsque applicable, au Règlement
                            Général sur la Protection des Données (RGPD).
                        </p>

                        <h2>14. Litiges et droit applicable</h2>
                        <p>
                            Les présentes CGV sont régies par le droit marocain. En cas de litige, les parties
                            s&apos;engagent à rechercher une solution amiable avant toute action judiciaire. À défaut,
                            les tribunaux compétents de {legal.city} seront seuls saisis.
                        </p>

                        <h2>15. Contact</h2>
                        <p>
                            Pour toute question relative aux présentes CGV, contactez{' '}
                            <a href={`mailto:${legal.email}`}>{legal.email}</a> ou consultez{' '}
                            <Link href="/mentions-legales">les mentions légales</Link> du site {site.url}.
                        </p>
                    </div>
                </div>
            </article>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
}
