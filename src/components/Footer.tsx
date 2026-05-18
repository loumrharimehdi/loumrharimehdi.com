import Link from 'next/link';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { site } from '@/data/site';

type FooterProps = {
    homeCopy?: boolean;
};

export function Footer({ homeCopy = false }: FooterProps) {
    return (
        <footer className="footer">
            <div className="footer-glow" aria-hidden="true" />
            <div className="container">
                <div className="footer-cta">
                    <div className="footer-cta-text">
                        <h3>
                            Prêt à <span className="accent">démarrer</span> votre projet ?
                        </h3>
                        <p>Devis gratuit, maquette offerte, accompagnement de A à Z.</p>
                    </div>
                    <a href={site.whatsapp} className="btn btn-whatsapp btn-magnetic" target="_blank" rel="noopener">
                        <WhatsAppIcon size={20} />
                        Discuter sur WhatsApp
                    </a>
                </div>

                <div className="footer-content">
                    <div className="footer-brand">
                        <Link href="/" className="logo">
                            <span className="logo-icon">💗</span>
                            <span className="logo-text">
                                Mehdi <span className="accent">Loumrhari</span>
                            </span>
                        </Link>
                        <p>
                            {homeCopy
                                ? 'Je crée votre site internet et vos applications. Simple, rapide et de qualité.'
                                : 'Création de sites web, applications web et mobiles pour entrepreneurs ambitieux.'}
                        </p>
                        <div className="footer-tags">
                            <span>✨ Devis gratuit</span>
                            <span>🚀 Livraison rapide</span>
                            <span>💗 Suivi inclus</span>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>Services</h4>
                            <Link href="/#services">Site Web</Link>
                            <Link href="/#services">App Web</Link>
                            <Link href="/#services">App Mobile</Link>
                            <Link href="/#tarifs">Tarifs</Link>
                        </div>
                        <div className="footer-col">
                            <h4>Découvrir</h4>
                            <Link href="/#portfolio">Projets</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/#faq">FAQ</Link>
                            <Link href="/#contact">Contact</Link>
                        </div>
                        <div className="footer-col">
                            <h4>Légal</h4>
                            <Link href="/mentions-legales">Mentions légales</Link>
                            <Link href="/cgv">CGV</Link>
                            <a href={`mailto:${site.email}`}>{site.email}</a>
                            <a href={site.whatsapp} target="_blank" rel="noopener">
                                {site.phone}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Mehdi Loumrhari · Tous droits réservés.</p>
                    <p className="footer-credit">
                        Fait avec 💗 par{' '}
                        <a href={site.agencyUrl} target="_blank" rel="noopener">
                            Loumrhari Agency
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
