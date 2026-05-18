import Link from 'next/link';
import { site } from '@/data/site';

type FooterProps = {
    homeCopy?: boolean;
};

export function Footer({ homeCopy = false }: FooterProps) {
    return (
        <footer className="footer">
            <div className="container">
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
                    </div>
                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>Services</h4>
                            <Link href="/#services">Site Web</Link>
                            <Link href="/#services">App Web</Link>
                            <Link href="/#services">App Mobile</Link>
                        </div>
                        <div className="footer-col">
                            <h4>Contact</h4>
                            <a href={site.whatsapp} target="_blank" rel="noopener">
                                WhatsApp
                            </a>
                            <a href={`mailto:${site.email}`}>Email</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Mehdi Loumrhari. Tous droits réservés.</p>
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
