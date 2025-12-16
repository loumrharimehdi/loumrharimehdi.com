/* ============================================
   MEHDI LOUMRHARI - Landing Page Scripts
   Premium Animations
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
    // MOBILE HAMBURGER MENU
    // ============================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isActive);
            hamburger.setAttribute('aria-label', isActive ? 'Fermer le menu' : 'Ouvrir le menu');
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.setAttribute('aria-label', 'Ouvrir le menu');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

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
            el.style.transform = 'translateY(40px)';
            el.style.transition = 'opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';

            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 200 + (index * 150));
        }
    });

    // ============================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
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
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
            fadeInObserver.observe(el);
        });
    });

    // ============================================
    // PREMIUM HOVER EFFECTS - Cards
    // ============================================
    const addPremiumHover = (selector, hoverTransform, hoverShadow) => {
        document.querySelectorAll(selector).forEach(el => {
            el.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease';

            el.addEventListener('mouseenter', () => {
                el.style.transform = hoverTransform;
                el.style.boxShadow = hoverShadow;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translateY(0) scale(1)';
                el.style.boxShadow = '';
            });
        });
    };

    addPremiumHover('.service-card', 'translateY(-10px) scale(1.02)', '0 20px 40px rgba(255, 107, 157, 0.15)');
    addPremiumHover('.portfolio-card', 'translateY(-10px) scale(1.02)', '0 20px 40px rgba(255, 107, 157, 0.15)');
    addPremiumHover('.testimonial-card', 'translateY(-8px)', '0 16px 32px rgba(255, 107, 157, 0.12)');
    addPremiumHover('.why-card', 'translateY(-8px)', '0 16px 32px rgba(255, 107, 157, 0.12)');

    // ============================================
    // SERVICE ICON ANIMATION
    // ============================================
    document.querySelectorAll('.service-card').forEach(card => {
        const icon = card.querySelector('.service-icon');
        if (icon) {
            icon.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';

            card.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.15) rotate(5deg)';
            });

            card.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        }
    });

    // ============================================
    // STEP NUMBER ANIMATION
    // ============================================
    document.querySelectorAll('.process-step').forEach(step => {
        const number = step.querySelector('.step-number');
        if (number) {
            number.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease';

            step.addEventListener('mouseenter', () => {
                number.style.transform = 'scale(1.1)';
                number.style.boxShadow = '0 8px 20px rgba(255, 107, 157, 0.4)';
            });

            step.addEventListener('mouseleave', () => {
                number.style.transform = 'scale(1)';
                number.style.boxShadow = '';
            });
        }
    });

    // ============================================
    // WHY ICON ANIMATION
    // ============================================
    document.querySelectorAll('.why-card').forEach(card => {
        const icon = card.querySelector('.why-icon');
        if (icon) {
            icon.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';

            card.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.2)';
            });

            card.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1)';
            });
        }
    });

    // ============================================
    // PARALLAX HEARTS BACKGROUND
    // ============================================
    const hearts = document.querySelectorAll('.heart');

    if (hearts.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            hearts.forEach((heart, index) => {
                const speed = 0.03 + (index * 0.015);
                heart.style.transform = `translateY(${scrollY * speed}px)`;
            });
        }, { passive: true });
    }

    // ============================================
    // PRICING CARD GLOW
    // ============================================
    const pricingCard = document.querySelector('.pricing-card');
    if (pricingCard) {
        pricingCard.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';

        pricingCard.addEventListener('mouseenter', () => {
            pricingCard.style.transform = 'scale(1.02)';
            pricingCard.style.boxShadow = '0 24px 60px rgba(255, 107, 157, 0.25)';
        });

        pricingCard.addEventListener('mouseleave', () => {
            pricingCard.style.transform = 'scale(1)';
            pricingCard.style.boxShadow = '';
        });
    }

    // ============================================
    // CONTACT FORM SUBMISSION (Web3Forms)
    // ============================================
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm && formMessage && submitBtn) {
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Show loading state
            if (btnText) btnText.style.display = 'none';
            if (btnLoader) btnLoader.style.display = 'inline';
            submitBtn.disabled = true;
            formMessage.className = 'form-message';
            formMessage.textContent = '';

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                });

                const result = await response.json();

                if (result.success) {
                    formMessage.className = 'form-message success';
                    formMessage.innerHTML = '✅ Message envoyé avec succès ! Je vous répondrai dans les 24h.';
                    contactForm.reset();
                } else {
                    throw new Error(result.message || 'Erreur lors de l\'envoi');
                }
            } catch (error) {
                formMessage.className = 'form-message error';
                formMessage.innerHTML = '❌ Erreur lors de l\'envoi. Veuillez réessayer ou me contacter sur WhatsApp.';
                console.error('Form error:', error);
            } finally {
                // Reset button state
                if (btnText) btnText.style.display = 'inline';
                if (btnLoader) btnLoader.style.display = 'none';
                submitBtn.disabled = false;
            }
        });
    }

});
