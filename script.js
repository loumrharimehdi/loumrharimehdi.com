/* ============================================
   MEHDI LOUMRHARI - iOS 26 Ultra Modern Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                lastScrollY = window.scrollY;
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ============================================
    // SMOOTH SCROLL WITH EASING
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();

                // Custom smooth scroll with spring easing
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 100;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 800;
                let start = null;

                function easeOutCubic(t) {
                    return 1 - Math.pow(1 - t, 3);
                }

                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    const ease = easeOutCubic(progress);

                    window.scrollTo(0, startPosition + distance * ease);

                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }

                requestAnimationFrame(animation);
            }
        });
    });

    // ============================================
    // iOS 26 SCROLL REVEAL ANIMATIONS
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '50px 0px -50px 0px',
        threshold: 0.1
    };

    // Create different animation types
    const animationClasses = {
        'fade-up': {
            initial: { opacity: 0, transform: 'translateY(60px) scale(0.95)' },
            final: { opacity: 1, transform: 'translateY(0) scale(1)' }
        },
        'fade-scale': {
            initial: { opacity: 0, transform: 'scale(0.9)' },
            final: { opacity: 1, transform: 'scale(1)' }
        },
        'fade-left': {
            initial: { opacity: 0, transform: 'translateX(-40px)' },
            final: { opacity: 1, transform: 'translateX(0)' }
        },
        'fade-right': {
            initial: { opacity: 0, transform: 'translateX(40px)' },
            final: { opacity: 1, transform: 'translateX(0)' }
        }
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered animation delay based on element index within its container
                const siblings = Array.from(entry.target.parentElement.children);
                const elementIndex = siblings.indexOf(entry.target);
                const delay = elementIndex * 100;

                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);

                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate with different effects (hero elements excluded for immediate display)
    const animatableElements = [
        { selector: '.service-card', animation: 'fade-up' },
        { selector: '.process-step', animation: 'fade-up' },
        { selector: '.why-card', animation: 'fade-up' },
        { selector: '.portfolio-card', animation: 'fade-up' },
        { selector: '.testimonial-card', animation: 'fade-up' },
        { selector: '.faq-item', animation: 'fade-up' },
        { selector: '.pricing-card', animation: 'fade-scale' },
        { selector: '.section-header', animation: 'fade-up' }
    ];

    // Hero elements animate immediately on load
    const heroElements = [
        '.hero-badges',
        '.hero-title',
        '.hero-subtitle',
        '.hero-cta'
    ];

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

    animatableElements.forEach(({ selector, animation }) => {
        document.querySelectorAll(selector).forEach(el => {
            const anim = animationClasses[animation];
            Object.assign(el.style, {
                opacity: '0',
                transform: anim.initial.transform,
                transition: 'opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
            });
            el.dataset.animation = animation;
            fadeInObserver.observe(el);
        });
    });

    // Add revealed class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) translateX(0) scale(1) !important;
        }
        
        /* iOS 26 Spring Hover Effects */
        .service-card,
        .portfolio-card,
        .testimonial-card,
        .comparison-card,
        .faq-item {
            transition: 
                transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                border-color 0.3s ease !important;
        }
        
        .service-card:hover,
        .portfolio-card:hover,
        .testimonial-card:hover {
            transform: translateY(-12px) scale(1.02) !important;
            box-shadow: 
                0 24px 48px rgba(255, 107, 157, 0.2),
                0 12px 24px rgba(0, 0, 0, 0.08) !important;
        }
        
        .comparison-card:hover {
            transform: translateY(-8px) scale(1.01) !important;
        }
        
        /* Premium Glow Effect on Hover */
        .service-card::after,
        .portfolio-card::after,
        .pricing-card::after {
            content: '';
            position: absolute;
            inset: -2px;
            background: linear-gradient(135deg, 
                rgba(255, 107, 157, 0.3), 
                rgba(255, 143, 171, 0.1),
                rgba(255, 107, 157, 0.3));
            border-radius: inherit;
            opacity: 0;
            z-index: -1;
            transition: opacity 0.4s ease;
            filter: blur(20px);
        }
        
        .service-card:hover::after,
        .portfolio-card:hover::after {
            opacity: 1;
        }
        
        /* Pricing card special glow */
        .pricing-card::after {
            background: linear-gradient(135deg, 
                rgba(255, 107, 157, 0.4), 
                rgba(255, 143, 171, 0.2),
                rgba(255, 107, 157, 0.4));
            filter: blur(30px);
            animation: pulse-glow 3s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.02); }
        }
        

        
        /* Service Icon Bounce */
        .service-icon {
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .service-card:hover .service-icon {
            transform: scale(1.2) rotate(5deg);
        }
        
        /* Step Number Pulse */
        .step-number {
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), 
                        box-shadow 0.4s ease;
        }
        
        .process-step:hover .step-number {
            transform: scale(1.1);
            box-shadow: 0 8px 24px rgba(255, 107, 157, 0.4);
        }
        
        /* FAQ Smooth Open/Close */
        .faq-item[open] {
            background: rgba(255, 107, 157, 0.03);
        }
        
        .faq-item[open] summary {
            color: var(--primary);
        }
        
        /* Testimonial Quote Animation */
        .testimonial-quote {
            transition: transform 0.4s ease, opacity 0.4s ease;
        }
        
        .testimonial-card:hover .testimonial-quote {
            transform: scale(1.1) translateY(-5px);
            opacity: 0.8;
        }
        
        /* Avatar Stack Animation */
        .trust-avatars .avatar {
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .trust-avatars:hover .avatar:nth-child(1) { transform: translateX(-8px); }
        .trust-avatars:hover .avatar:nth-child(2) { transform: translateY(-4px); }
        .trust-avatars:hover .avatar:nth-child(3) { transform: translateX(8px); }
        
        /* Portfolio Tech Tags */
        .portfolio-tech span {
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .portfolio-card:hover .portfolio-tech span {
            background: rgba(255, 107, 157, 0.1);
            color: var(--primary);
        }
        

        
        /* Badge Hover */
        .badge {
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .badge:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 4px 16px rgba(255, 107, 157, 0.15);
        }
        
        /* Section Badge Float Animation */
        .section-badge {
            animation: float-badge 4s ease-in-out infinite;
        }
        
        @keyframes float-badge {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
        }
        
        /* Title Accent Glow */
        .accent {
            text-shadow: 0 0 40px rgba(255, 107, 157, 0.3);
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // MAGNETIC HOVER EFFECT REMOVED
    // ============================================

    // ============================================
    // PARALLAX HEARTS BACKGROUND
    // ============================================
    const hearts = document.querySelectorAll('.heart');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        hearts.forEach((heart, index) => {
            const speed = 0.05 + (index * 0.02);
            heart.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.02}deg)`;
        });
    }, { passive: true });

    // ============================================
    // CURSOR GLOW EFFECT (Desktop only)
    // ============================================
    if (window.matchMedia('(hover: hover)').matches) {
        const cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        document.body.appendChild(cursorGlow);

        const glowStyle = document.createElement('style');
        glowStyle.textContent = `
            .cursor-glow {
                position: fixed;
                width: 400px;
                height: 400px;
                background: radial-gradient(circle, rgba(255, 107, 157, 0.08) 0%, transparent 70%);
                pointer-events: none;
                z-index: 0;
                transform: translate(-50%, -50%);
                transition: opacity 0.3s ease;
                opacity: 0;
            }
            
            body:hover .cursor-glow {
                opacity: 1;
            }
        `;
        document.head.appendChild(glowStyle);

        let mouseX = 0, mouseY = 0;
        let glowX = 0, glowY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateGlow() {
            glowX += (mouseX - glowX) * 0.1;
            glowY += (mouseY - glowY) * 0.1;

            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top = glowY + 'px';

            requestAnimationFrame(animateGlow);
        }

        animateGlow();
    }
});
