import { initCounters } from './counter.js';
import { initCustomCursor } from './cursor.js';
import { initButtonRipples, initTiltCards } from './effects.js';
import { initContactForm } from './form.js';
import { initPageLoader } from './loader.js';
import { initMobileNavigation } from './navigation.js';
import { initHeroAnimation, initScrollReveal } from './reveal.js';
import { initScrollEffects } from './scroll.js';
import { initThemeToggle } from './theme.js';

initPageLoader();

document.addEventListener('DOMContentLoaded', () => {
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
