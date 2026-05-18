export function initHeroAnimation() {
    const heroElements = ['.hero-badges', '.hero-title', '.hero-subtitle', '.hero-cta'];

    heroElements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (!element) return;

        element.classList.add('hero-animate');

        setTimeout(() => {
            element.classList.add('is-visible');
        }, 200 + index * 150);
    });
}

export function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const siblings = Array.from(entry.target.parentElement.children);
            const elementIndex = siblings.indexOf(entry.target);
            const delay = elementIndex * 100;

            setTimeout(() => {
                entry.target.classList.add('is-revealed');
            }, delay);

            fadeInObserver.unobserve(entry.target);
        });
    }, observerOptions);

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
}
