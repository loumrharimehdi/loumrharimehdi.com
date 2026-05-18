export function initTiltCards() {
    document.querySelectorAll('.portfolio-card, .service-card').forEach((card) => {
        let rect = null;

        card.addEventListener('mouseenter', () => {
            rect = card.getBoundingClientRect();
        });

        card.addEventListener('mousemove', (event) => {
            if (!rect) return;

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const rotateX = (y - rect.height / 2) / 10;
            const rotateY = (rect.width / 2 - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            rect = null;
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

export function initButtonRipples() {
    document.querySelectorAll('.btn').forEach((button) => {
        button.addEventListener('click', function addRipple(event) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();

            ripple.className = 'ripple';
            ripple.style.left = `${event.clientX - rect.left}px`;
            ripple.style.top = `${event.clientY - rect.top}px`;

            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}
