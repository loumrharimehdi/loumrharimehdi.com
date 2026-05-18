import Link from 'next/link';
import { site } from '@/data/site';

type NavigationProps = {
    active?: 'home' | 'blog';
};

export function Navigation({ active = 'home' }: NavigationProps) {
    return (
        <nav className="navbar" id="navbar" role="navigation" aria-label="Navigation principale">
            <div className="nav-container">
                <div className="nav-pill">
                    <Link href="/" className="logo">
                        <span className="logo-icon">💗</span>
                        <span className="logo-text">
                            Mehdi <span className="accent">Loumrhari</span>
                        </span>
                    </Link>
                    <div className="nav-links" id="nav-links">
                        <Link href="/#services">
                            <span>Services</span>
                        </Link>
                        <Link href="/#tarifs">
                            <span>Tarifs</span>
                        </Link>
                        <Link href="/#portfolio">
                            <span>Projets</span>
                        </Link>
                        <Link href="/blog" className={active === 'blog' ? 'active' : undefined}>
                            <span>Blog</span>
                        </Link>
                    </div>
                    <button
                        className="hamburger"
                        id="hamburger"
                        aria-label="Ouvrir le menu"
                        aria-expanded="false"
                        aria-controls="nav-links"
                    >
                        <span className="hamburger-line" />
                        <span className="hamburger-line" />
                        <span className="hamburger-line" />
                    </button>
                    <a href={site.whatsapp} className="btn btn-whatsapp-nav" target="_blank" rel="noopener">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}
