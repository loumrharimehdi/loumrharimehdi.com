(() => {
  // src/counter.js
  function animateCounter(counter) {
    const target = parseInt(counter.dataset.target, 10);
    const duration = 2e3;
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
  }
  function initCounters() {
    const counters = document.querySelectorAll(".counter");
    if (!counters.length) return;
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
          entry.target.classList.add("counted");
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach((counter) => counterObserver.observe(counter));
  }

  // src/cursor.js
  function initCustomCursor() {
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasFinePointer) return;
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    const follower = document.createElement("div");
    follower.className = "cursor-follower";
    document.body.append(cursor, follower);
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
      cursor.classList.add("visible");
      follower.classList.add("visible");
    });
    const animateFollower = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      follower.style.left = `${cursorX}px`;
      follower.style.top = `${cursorY}px`;
      requestAnimationFrame(animateFollower);
    };
    animateFollower();
    document.querySelectorAll("a, button, .portfolio-card, .service-card, .why-card").forEach((element) => {
      element.addEventListener("mouseenter", () => cursor.classList.add("hover"));
      element.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });
    document.addEventListener("mouseleave", () => {
      cursor.classList.remove("visible");
      follower.classList.remove("visible");
    });
  }

  // src/effects.js
  function initTiltCards() {
    document.querySelectorAll(".portfolio-card, .service-card").forEach((card) => {
      let rect = null;
      card.addEventListener("mouseenter", () => {
        rect = card.getBoundingClientRect();
      });
      card.addEventListener("mousemove", (event) => {
        if (!rect) return;
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateX = (y - rect.height / 2) / 10;
        const rotateY = (rect.width / 2 - x) / 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });
      card.addEventListener("mouseleave", () => {
        rect = null;
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
      });
    });
  }
  function initButtonRipples() {
    document.querySelectorAll(".btn").forEach((button) => {
      button.addEventListener("click", function addRipple(event) {
        const ripple = document.createElement("span");
        const rect = this.getBoundingClientRect();
        ripple.className = "ripple";
        ripple.style.left = `${event.clientX - rect.left}px`;
        ripple.style.top = `${event.clientY - rect.top}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  // src/form.js
  function initContactForm() {
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");
    const submitButton = document.getElementById("submit-btn");
    if (!contactForm || !formMessage || !submitButton) return;
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      submitButton.classList.add("is-loading");
      submitButton.disabled = true;
      formMessage.className = "form-message";
      formMessage.textContent = "";
      const formData = new FormData(contactForm);
      const body = JSON.stringify(Object.fromEntries(formData));
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body
        });
        const result = await response.json();
        if (!result.success) {
          throw new Error(result.message || "Erreur lors de l'envoi");
        }
        formMessage.className = "form-message success";
        formMessage.innerHTML = "&#x2705; Message envoy&eacute; avec succ&egrave;s ! Je vous r&eacute;pondrai dans les 24h.";
        contactForm.reset();
      } catch (error) {
        formMessage.className = "form-message error";
        formMessage.innerHTML = "&#x274C; Erreur lors de l'envoi. Veuillez r&eacute;essayer ou me contacter sur WhatsApp.";
      } finally {
        submitButton.classList.remove("is-loading");
        submitButton.disabled = false;
      }
    });
  }

  // src/loader.js
  function initPageLoader() {
    window.addEventListener("load", () => {
      const loader = document.querySelector(".page-loader");
      if (!loader) return;
      setTimeout(() => {
        loader.classList.add("hidden");
      }, 1500);
    });
  }

  // src/navigation.js
  function initMobileNavigation() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    if (!hamburger || !navLinks) return;
    const closeMenu = () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    };
    hamburger.addEventListener("click", () => {
      const isActive = hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", isActive);
      hamburger.setAttribute("aria-label", isActive ? "Fermer le menu" : "Ouvrir le menu");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
        hamburger.setAttribute("aria-label", "Ouvrir le menu");
      });
    });
    document.addEventListener("click", (event) => {
      if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        closeMenu();
      }
    });
  }

  // src/reveal.js
  function initHeroAnimation() {
    const heroElements = [".hero-badges", ".hero-title", ".hero-subtitle", ".hero-cta"];
    heroElements.forEach((selector, index) => {
      const element = document.querySelector(selector);
      if (!element) return;
      element.classList.add("hero-animate");
      setTimeout(() => {
        element.classList.add("is-visible");
      }, 200 + index * 150);
    });
  }
  function initScrollReveal() {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -80px 0px",
      threshold: 0.1
    };
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const siblings = Array.from(entry.target.parentElement.children);
        const elementIndex = siblings.indexOf(entry.target);
        const delay = elementIndex * 100;
        setTimeout(() => {
          entry.target.classList.add("is-revealed");
        }, delay);
        fadeInObserver.unobserve(entry.target);
      });
    }, observerOptions);
    [
      ".service-card",
      ".process-step",
      ".why-card",
      ".portfolio-card",
      ".testimonial-card",
      ".faq-item",
      ".pricing-card",
      ".section-header"
    ].forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.classList.add("reveal-on-scroll");
        fadeInObserver.observe(element);
      });
    });
  }

  // src/scroll.js
  function initScrollEffects() {
    const navbar = document.getElementById("navbar");
    const hearts = document.querySelectorAll(".heart");
    const readingProgress = document.getElementById("reading-progress");
    const article = readingProgress ? document.querySelector(".article") : null;
    let ticking = false;
    const onScrollFrame = () => {
      const scrollY = window.scrollY;
      if (navbar) {
        navbar.classList.toggle("scrolled", scrollY > 50);
      }
      hearts.forEach((heart, index) => {
        const speed = 0.03 + index * 0.015;
        heart.style.transform = `translateY(${scrollY * speed}px)`;
      });
      if (readingProgress && article) {
        const articleTop = article.offsetTop;
        const total = article.offsetHeight;
        const start = articleTop - window.innerHeight;
        const progress = Math.max(0, Math.min(100, (scrollY - start) / total * 100));
        readingProgress.style.width = `${progress}%`;
      }
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(onScrollFrame);
    }, { passive: true });
    onScrollFrame();
  }

  // src/theme.js
  var THEME_KEY = "theme";
  var HEART_LIGHT = "\u{1F497}";
  var HEART_DARK = "\u{1F494}";
  function updateHearts(theme) {
    const heartEmoji = theme === "dark" ? HEART_DARK : HEART_LIGHT;
    document.querySelectorAll(".heart, .loader-logo, .logo-icon").forEach((element) => {
      element.textContent = heartEmoji;
    });
    const footerCredit = document.querySelector(".footer-credit");
    if (footerCredit) {
      footerCredit.innerHTML = footerCredit.innerHTML.replace(theme === "dark" ? HEART_LIGHT : HEART_DARK, heartEmoji);
    }
  }
  function initThemeToggle() {
    const savedTheme = localStorage.getItem(THEME_KEY) || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateHearts(savedTheme);
    const themeToggle = document.querySelector(".theme-toggle");
    if (!themeToggle) return;
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem(THEME_KEY, next);
      updateHearts(next);
    });
  }

  // src/main.js
  initPageLoader();
  document.addEventListener("DOMContentLoaded", () => {
    initCustomCursor();
    initThemeToggle();
    initTiltCards();
    initButtonRipples();
    initCounters();
    initMobileNavigation();
    initHeroAnimation();
    initScrollReveal();
    initContactForm();
    initScrollEffects();
  });
})();
