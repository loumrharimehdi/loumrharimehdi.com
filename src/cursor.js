export function initCustomCursor() {
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasFinePointer) return;

    const cursor = document.createElement('div');
    cursor.className = 'cursor';

    const follower = document.createElement('div');
    follower.className = 'cursor-follower';

    document.body.append(cursor, follower);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
        cursor.classList.add('visible');
        follower.classList.add('visible');
    });

    const animateFollower = () => {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        follower.style.left = `${cursorX}px`;
        follower.style.top = `${cursorY}px`;
        requestAnimationFrame(animateFollower);
    };

    animateFollower();

    document.querySelectorAll('a, button, .portfolio-card, .service-card, .why-card').forEach((element) => {
        element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('visible');
        follower.classList.remove('visible');
    });
}
