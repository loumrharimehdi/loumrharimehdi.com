import Link from 'next/link';
import { HeartsBackground } from '@/components/HeartsBackground';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { site } from '@/data/site';

export default function NotFound() {
    return (
        <>
            <HeartsBackground />
            <main className="content">
                <div className="error-icon">🔍</div>
                <div className="error-code">404</div>
                <h1>Oups ! Page introuvable</h1>
                <p>
                    La page que vous cherchez n&apos;existe pas ou a été déplacée. Pas de panique, retournez à
                    l&apos;accueil ou contactez-moi !
                </p>

                <div className="buttons">
                    <Link href="/" className="btn btn-primary">
                        ← Retour à l&apos;accueil
                    </Link>
                    <a href={site.whatsapp} className="btn btn-whatsapp" target="_blank" rel="noopener">
                        <WhatsAppIcon size={20} />
                        Me contacter
                    </a>
                </div>

                <div className="suggestions">
                    <h2>Peut-être cherchiez-vous :</h2>
                    <div className="suggestion-links">
                        <Link href="/#services">Services</Link>
                        <Link href="/#portfolio">Projets</Link>
                        <Link href="/#tarifs">Tarifs</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/#contact">Contact</Link>
                    </div>
                </div>
            </main>

            <footer className="footer-404">
                <p>
                    © 2025 <Link href="/">Mehdi Loumrhari</Link> - Tous droits réservés
                </p>
            </footer>
        </>
    );
}
