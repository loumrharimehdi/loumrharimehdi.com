export function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    const hearts = document.querySelectorAll('.heart');
    const readingProgress = document.getElementById('reading-progress');
    const article = readingProgress ? document.querySelector('.article') : null;

    let ticking = false;

    const onScrollFrame = () => {
        const scrollY = window.scrollY;

        if (navbar) {
            navbar.classList.toggle('scrolled', scrollY > 50);
        }

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

    window.addEventListener('scroll', () => {
        if (ticking) return;

        ticking = true;
        requestAnimationFrame(onScrollFrame);
    }, { passive: true });

    onScrollFrame();
}
