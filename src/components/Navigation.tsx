'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useMobileNav } from '@/hooks/useMobileNav';
import { site } from '@/data/site';

type NavigationProps = {
    active?: 'home' | 'blog';
};

export function Navigation({ active = 'home' }: NavigationProps) {
    const { closeMenu, isOpen, navRef, toggleMenu } = useMobileNav();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;
        let frame = 0;

        const updateScrolled = () => {
            setScrolled(window.scrollY > 50);
            ticking = false;
        };

        const onScroll = () => {
            if (ticking) return;

            ticking = true;
            frame = window.requestAnimationFrame(updateScrolled);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateScrolled();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <nav
            ref={navRef}
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            id="navbar"
            role="navigation"
            aria-label="Navigation principale"
        >
            <div className="nav-container">
                <div className="nav-pill">
                    <Link href="/" className="logo" onClick={closeMenu}>
                        <span className="logo-icon">💗</span>
                        <span className="logo-text">
                            Mehdi <span className="accent">Loumrhari</span>
                        </span>
                    </Link>
                    <div className={`nav-links ${isOpen ? 'active' : ''}`} id="nav-links">
                        <Link href="/#services" onClick={closeMenu}>
                            <span>Services</span>
                        </Link>
                        <Link href="/#tarifs" onClick={closeMenu}>
                            <span>Tarifs</span>
                        </Link>
                        <Link href="/#portfolio" onClick={closeMenu}>
                            <span>Projets</span>
                        </Link>
                        <Link href="/blog" className={active === 'blog' ? 'active' : undefined} onClick={closeMenu}>
                            <span>Blog</span>
                        </Link>
                    </div>
                    <button
                        className={`hamburger ${isOpen ? 'active' : ''}`}
                        id="hamburger"
                        type="button"
                        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                        aria-expanded={isOpen}
                        aria-controls="nav-links"
                        onClick={toggleMenu}
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
