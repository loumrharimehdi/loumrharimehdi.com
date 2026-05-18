function animateCounter(counter) {
    const target = parseInt(counter.dataset.target, 10);
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
}

export function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach((counter) => counterObserver.observe(counter));
}
