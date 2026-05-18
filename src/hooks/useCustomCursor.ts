import { useEffect, useRef } from 'react';

const TRAIL_MIN_DISTANCE = 18;
const TRAIL_LIFETIME = 900;

export function useCustomCursor() {
    const trailRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const trail = trailRef.current;
        const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

        if (!trail || !hasFinePointer) return;

        let lastX = -Infinity;
        let lastY = -Infinity;
        const timeouts = new Set<number>();

        const spawnTrailHeart = (x: number, y: number) => {
            const heart = document.createElement('span');
            heart.className = 'cursor-trail-heart';
            heart.textContent = '💗';
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;
            const drift = (Math.random() - 0.5) * 30;
            heart.style.setProperty('--drift', `${drift}px`);
            trail.appendChild(heart);

            const timeout = window.setTimeout(() => {
                heart.remove();
                timeouts.delete(timeout);
            }, TRAIL_LIFETIME);
            timeouts.add(timeout);
        };

        const onMouseMove = (event: MouseEvent) => {
            const x = event.clientX;
            const y = event.clientY;
            const dx = x - lastX;
            const dy = y - lastY;
            if (dx * dx + dy * dy >= TRAIL_MIN_DISTANCE * TRAIL_MIN_DISTANCE) {
                spawnTrailHeart(x, y);
                lastX = x;
                lastY = y;
            }
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            timeouts.forEach((timeout) => window.clearTimeout(timeout));
            trail.innerHTML = '';
        };
    }, []);

    return { trailRef };
}
