/* ============================================
   MEHDI LOUMRHARI - Landing Page Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 100;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // HERO ANIMATION ON LOAD
    // ============================================
    const heroElements = ['.hero-badges', '.hero-title', '.hero-subtitle', '.hero-cta'];

    heroElements.forEach((selector, index) => {
        const el = document.querySelector(selector);
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 + (index * 150));
        }
    });

    // ============================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '50px 0px -50px 0px',
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const siblings = Array.from(entry.target.parentElement.children);
                const elementIndex = siblings.indexOf(entry.target);
                const delay = elementIndex * 100;

                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, delay);

                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatableSelectors = [
        '.service-card',
        '.process-step',
        '.why-card',
        '.portfolio-card',
        '.testimonial-card',
        '.faq-item',
        '.pricing-card',
        '.section-header'
    ];

    animatableSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            fadeInObserver.observe(el);
        });
    });

    // ============================================
    // PARALLAX HEARTS BACKGROUND
    // ============================================
    const hearts = document.querySelectorAll('.heart');

    if (hearts.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            hearts.forEach((heart, index) => {
                const speed = 0.05 + (index * 0.02);
                heart.style.transform = `translateY(${scrollY * speed}px)`;
            });
        }, { passive: true });
    }

});
