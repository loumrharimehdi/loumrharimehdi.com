/* ============================================
   MEHDI LOUMRHARI - Landing Page Scripts
   Premium Animations & Effects
   ============================================ */

// ============================================
// PAGE LOADER
// ============================================
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1500);
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // CUSTOM CURSOR
    // ============================================
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        cursor.classList.add('visible');
        follower.classList.add('visible');
    });

    // Smooth follower
    function animateFollower() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        follower.style.left = cursorX + 'px';
        follower.style.top = cursorY + 'px';
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effect on interactive elements
    const hoverElements = document.querySelectorAll('a, button, .portfolio-card, .service-card, .why-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('visible');
        follower.classList.remove('visible');
    });

    // ============================================
    // DARK MODE TOGGLE
    // ============================================
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Function to update hearts based on theme
    const updateHearts = (theme) => {
        const heartElements = document.querySelectorAll('.heart, .loader-logo, .logo-icon');
        const heartEmoji = theme === 'dark' ? '💔' : '💗';
        heartElements.forEach(el => {
            el.textContent = heartEmoji;
        });
        // Update footer credit heart
        const footerCredit = document.querySelector('.footer-credit');
        if (footerCredit) {
            footerCredit.innerHTML = footerCredit.innerHTML.replace(theme === 'dark' ? '💗' : '💔', heartEmoji);
        }
    };

    // Apply on load
    updateHearts(savedTheme);

    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateHearts(next);
        });
    }

    // ============================================
    // 3D TILT EFFECT
    // ============================================
    const tiltCards = document.querySelectorAll('.portfolio-card, .service-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // ============================================
    // RIPPLE EFFECT ON BUTTONS
    // ============================================
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ============================================
    // COUNTER ANIMATION
    // ============================================
    const counters = document.querySelectorAll('.counter');
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.floor(start + (target - start) * easeOut);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        };
        requestAnimationFrame(update);
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // ============================================
    // TESTIMONIALS AUTO-SCROLL
    // ============================================
    const testimonialGrid = document.querySelector('.testimonials-grid');
    if (testimonialGrid && window.innerWidth > 768) {
        let scrollPos = 0;
        const autoScroll = () => {
            const cards = testimonialGrid.querySelectorAll('.testimonial-card');
            if (cards.length > 0) {
                scrollPos++;
                if (scrollPos >= testimonialGrid.scrollWidth - testimonialGrid.clientWidth) {
                    scrollPos = 0;
                }
                testimonialGrid.scrollLeft = scrollPos;
            }
        };
        // Optional: Enable auto-scroll
        // setInterval(autoScroll, 50);
    }


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
    // SMOOTH SCROLL - Using native CSS scroll-behavior + scroll-margin-top
    // No custom JS needed - browser handles it via CSS
    // ============================================

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

    // ============================================
    // READING PROGRESS BAR (Articles)
    // ============================================
    const readingProgress = document.getElementById('reading-progress');
    if (readingProgress) {
        const updateProgress = () => {
            const article = document.querySelector('.article');
            if (!article) return;

            const articleRect = article.getBoundingClientRect();
            const articleTop = article.offsetTop;
            const articleHeight = article.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollTop = window.pageYOffset;

            // Calculate progress based on article position
            const start = articleTop - windowHeight;
            const end = articleTop + articleHeight - windowHeight;
            const scrolled = scrollTop - start;
            const total = end - start;

            let progress = (scrolled / total) * 100;
            progress = Math.max(0, Math.min(100, progress));

            readingProgress.style.width = progress + '%';
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress(); // Initial call
    }

});
