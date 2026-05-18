import { useEffect } from 'react';

const HERO_SELECTORS = ['.hero-badges', '.hero-title', '.hero-subtitle', '.hero-cta'];
const REVEAL_SELECTORS = [
    '.service-card',
    '.process-step',
    '.why-card',
    '.portfolio-card',
    '.testimonial-card',
    '.faq-item',
    '.pricing-card',
    '.section-header',
    '.blog-card',
    '.article-header',
    '.article-content'
];

export function useRevealOnScroll(resetKey: string) {
    useEffect(() => {
        const timeouts: number[] = [];
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        HERO_SELECTORS.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (!element) return;

            element.classList.add('hero-animate');

            if (reducedMotion) {
                element.classList.add('is-visible');
                return;
            }

            const timeout = window.setTimeout(
                () => {
                    element.classList.add('is-visible');
                },
                200 + index * 150
            );
            timeouts.push(timeout);
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const siblings = Array.from(entry.target.parentElement?.children || []);
                    const elementIndex = Math.max(0, siblings.indexOf(entry.target));
                    const delay = reducedMotion ? 0 : elementIndex * 100;

                    const timeout = window.setTimeout(() => {
                        entry.target.classList.add('is-revealed');
                    }, delay);

                    timeouts.push(timeout);
                    observer.unobserve(entry.target);
                });
            },
            {
                root: null,
                rootMargin: '0px 0px 200px 0px',
                threshold: 0
            }
        );

        REVEAL_SELECTORS.forEach((selector) => {
            document.querySelectorAll(selector).forEach((element) => {
                element.classList.add('reveal-on-scroll');
                observer.observe(element);
            });
        });

        return () => {
            observer.disconnect();
            timeouts.forEach((timeout) => window.clearTimeout(timeout));
        };
    }, [resetKey]);
}
