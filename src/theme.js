const THEME_KEY = 'theme';
const HEART_LIGHT = '\uD83D\uDC97';
const HEART_DARK = '\uD83D\uDC94';

function updateHearts(theme) {
    const heartEmoji = theme === 'dark' ? HEART_DARK : HEART_LIGHT;

    document.querySelectorAll('.heart, .loader-logo, .logo-icon').forEach((element) => {
        element.textContent = heartEmoji;
    });

    const footerCredit = document.querySelector('.footer-credit');
    if (footerCredit) {
        footerCredit.innerHTML = footerCredit.innerHTML.replace(theme === 'dark' ? HEART_LIGHT : HEART_DARK, heartEmoji);
    }
}

export function initThemeToggle() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateHearts(savedTheme);

    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem(THEME_KEY, next);
        updateHearts(next);
    });
}
