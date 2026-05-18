'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const HEART_LIGHT = '💗';
const HEART_DARK = '💔';

export function ClientEffects() {
    const pathname = usePathname();

    useEffect(() => {
        if (!('serviceWorker' in navigator)) return;

        navigator.serviceWorker.register('/sw.js').catch(() => {
            // PWA enhancement only; the site remains fully usable without SW.
        });
    }, []);

    useEffect(() => {
        const cleanups: Array<() => void> = [];

        const loader = document.querySelector('.page-loader');
        const loaderTimeout = window.setTimeout(() => loader?.classList.add('hidden'), 1500);
        cleanups.push(() => window.clearTimeout(loaderTimeout));

        const updateHearts = (theme: string) => {
            const heartEmoji = theme === 'dark' ? HEART_DARK : HEART_LIGHT;

            document.querySelectorAll('.heart, .loader-logo, .logo-icon').forEach((element) => {
                element.textContent = heartEmoji;
            });

            const footerCredit = document.querySelector('.footer-credit');
            if (footerCredit) {
                footerCredit.innerHTML = footerCredit.innerHTML.replace(
                    theme === 'dark' ? HEART_LIGHT : HEART_DARK,
                    heartEmoji
                );
            }
        };

        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateHearts(savedTheme);

        const themeToggle = document.querySelector('.theme-toggle');
        const onThemeClick = () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateHearts(next);
        };

        themeToggle?.addEventListener('click', onThemeClick);
        cleanups.push(() => themeToggle?.removeEventListener('click', onThemeClick));

        const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        let cursor: HTMLDivElement | null = null;
        let follower: HTMLDivElement | null = null;

        if (hasFinePointer) {
            cursor = document.createElement('div');
            cursor.className = 'cursor';
            follower = document.createElement('div');
            follower.className = 'cursor-follower';
            document.body.append(cursor, follower);

            let mouseX = 0;
            let mouseY = 0;
            let cursorX = 0;
            let cursorY = 0;
            let cursorFrame = 0;

            const onMouseMove = (event: MouseEvent) => {
                if (!cursor || !follower) return;
                mouseX = event.clientX;
                mouseY = event.clientY;
                cursor.style.left = `${mouseX}px`;
                cursor.style.top = `${mouseY}px`;
                cursor.classList.add('visible');
                follower.classList.add('visible');
            };

            const animateFollower = () => {
                if (!follower) return;
                cursorX += (mouseX - cursorX) * 0.15;
                cursorY += (mouseY - cursorY) * 0.15;
                follower.style.left = `${cursorX}px`;
                follower.style.top = `${cursorY}px`;
                cursorFrame = requestAnimationFrame(animateFollower);
            };

            const hoverTargets = document.querySelectorAll('a, button, .portfolio-card, .service-card, .why-card');
            const onEnter = () => cursor?.classList.add('hover');
            const onLeave = () => cursor?.classList.remove('hover');
            const onDocumentLeave = () => {
                cursor?.classList.remove('visible');
                follower?.classList.remove('visible');
            };

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseleave', onDocumentLeave);
            hoverTargets.forEach((element) => {
                element.addEventListener('mouseenter', onEnter);
                element.addEventListener('mouseleave', onLeave);
            });
            cursorFrame = requestAnimationFrame(animateFollower);

            cleanups.push(() => {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseleave', onDocumentLeave);
                hoverTargets.forEach((element) => {
                    element.removeEventListener('mouseenter', onEnter);
                    element.removeEventListener('mouseleave', onLeave);
                });
                cancelAnimationFrame(cursorFrame);
                cursor?.remove();
                follower?.remove();
            });
        }

        const tiltCards = document.querySelectorAll<HTMLElement>('.portfolio-card, .service-card');
        tiltCards.forEach((card) => {
            let rect: DOMRect | null = null;

            const onMouseEnter = () => {
                rect = card.getBoundingClientRect();
            };
            const onMouseMove = (event: MouseEvent) => {
                if (!rect) return;

                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                const rotateX = (y - rect.height / 2) / 10;
                const rotateY = (rect.width / 2 - x) / 10;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            };
            const onMouseLeave = () => {
                rect = null;
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            };

            card.addEventListener('mouseenter', onMouseEnter);
            card.addEventListener('mousemove', onMouseMove);
            card.addEventListener('mouseleave', onMouseLeave);

            cleanups.push(() => {
                card.removeEventListener('mouseenter', onMouseEnter);
                card.removeEventListener('mousemove', onMouseMove);
                card.removeEventListener('mouseleave', onMouseLeave);
            });
        });

        document.querySelectorAll<HTMLElement>('.btn').forEach((button) => {
            const onClick = (event: MouseEvent) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();

                ripple.className = 'ripple';
                ripple.style.left = `${event.clientX - rect.left}px`;
                ripple.style.top = `${event.clientY - rect.top}px`;

                button.appendChild(ripple);
                window.setTimeout(() => ripple.remove(), 600);
            };

            button.addEventListener('click', onClick);
            cleanups.push(() => button.removeEventListener('click', onClick));
        });

        const counterObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const counter = entry.target as HTMLElement;
                    if (!entry.isIntersecting || counter.classList.contains('counted')) return;

                    counter.classList.add('counted');
                    const target = parseInt(counter.dataset.target || '0', 10);
                    const duration = 2000;
                    const startTime = performance.now();

                    const update = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        counter.textContent = String(Math.floor(target * easeOut));

                        if (progress < 1) {
                            requestAnimationFrame(update);
                        } else {
                            counter.textContent = String(target);
                        }
                    };

                    requestAnimationFrame(update);
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('.counter').forEach((counter) => counterObserver.observe(counter));
        cleanups.push(() => counterObserver.disconnect());

        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');

        if (hamburger && navLinks) {
            const closeMenu = () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            };
            const onHamburgerClick = () => {
                const isActive = hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
                hamburger.setAttribute('aria-expanded', String(isActive));
                hamburger.setAttribute('aria-label', isActive ? 'Fermer le menu' : 'Ouvrir le menu');
            };
            const onDocumentClick = (event: MouseEvent) => {
                if (!hamburger.contains(event.target as Node) && !navLinks.contains(event.target as Node)) {
                    closeMenu();
                }
            };
            const navLinkElements = navLinks.querySelectorAll('a');
            const onNavLinkClick = () => {
                closeMenu();
                hamburger.setAttribute('aria-label', 'Ouvrir le menu');
            };

            hamburger.addEventListener('click', onHamburgerClick);
            document.addEventListener('click', onDocumentClick);
            navLinkElements.forEach((link) => link.addEventListener('click', onNavLinkClick));

            cleanups.push(() => {
                hamburger.removeEventListener('click', onHamburgerClick);
                document.removeEventListener('click', onDocumentClick);
                navLinkElements.forEach((link) => link.removeEventListener('click', onNavLinkClick));
            });
        }

        const heroElements = ['.hero-badges', '.hero-title', '.hero-subtitle', '.hero-cta'];
        heroElements.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (!element) return;

            element.classList.add('hero-animate');
            const timeout = window.setTimeout(() => {
                element.classList.add('is-visible');
            }, 200 + index * 150);
            cleanups.push(() => window.clearTimeout(timeout));
        });

        const fadeInObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const siblings = Array.from(entry.target.parentElement?.children || []);
                    const elementIndex = siblings.indexOf(entry.target);
                    const delay = elementIndex * 100;

                    window.setTimeout(() => {
                        entry.target.classList.add('is-revealed');
                    }, delay);

                    fadeInObserver.unobserve(entry.target);
                });
            },
            {
                root: null,
                rootMargin: '0px 0px -80px 0px',
                threshold: 0.1
            }
        );

        [
            '.service-card',
            '.process-step',
            '.why-card',
            '.portfolio-card',
            '.testimonial-card',
            '.faq-item',
            '.pricing-card',
            '.section-header'
        ].forEach((selector) => {
            document.querySelectorAll(selector).forEach((element) => {
                element.classList.add('reveal-on-scroll');
                fadeInObserver.observe(element);
            });
        });
        cleanups.push(() => fadeInObserver.disconnect());

        const navbar = document.getElementById('navbar');
        const hearts = document.querySelectorAll<HTMLElement>('.heart');
        const readingProgress = document.getElementById('reading-progress');
        const article = readingProgress ? document.querySelector<HTMLElement>('.article') : null;

        let ticking = false;
        const onScrollFrame = () => {
            const scrollY = window.scrollY;

            navbar?.classList.toggle('scrolled', scrollY > 50);

            hearts.forEach((heart, index) => {
                const speed = 0.03 + index * 0.015;
                heart.style.transform = `translateY(${scrollY * speed}px)`;
            });

            if (readingProgress && article) {
                const articleTop = article.offsetTop;
                const total = article.offsetHeight;
                const start = articleTop - window.innerHeight;
                const progress = Math.max(0, Math.min(100, ((scrollY - start) / total) * 100));
                readingProgress.style.width = `${progress}%`;
            }

            ticking = false;
        };
        const onScroll = () => {
            if (ticking) return;

            ticking = true;
            requestAnimationFrame(onScrollFrame);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScrollFrame();
        cleanups.push(() => window.removeEventListener('scroll', onScroll));

        return () => {
            cleanups.forEach((cleanup) => cleanup());
        };
    }, [pathname]);

    return null;
}
