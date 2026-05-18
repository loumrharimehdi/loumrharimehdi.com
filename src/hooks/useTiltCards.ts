import { useEffect } from 'react';

export function useTiltCards(resetKey: string, selector = '.tilt-card') {
    useEffect(() => {
        const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!hasFinePointer || reducedMotion) return;

        const cards = Array.from(document.querySelectorAll<HTMLElement>(selector));

        const cleanups = cards.map((card) => {
            let rect: DOMRect | null = null;

            const onMouseEnter = () => {
                rect = card.getBoundingClientRect();
            };

            const onMouseMove = (event: MouseEvent) => {
                if (!rect) return;

                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                const rotateX = (y - rect.height / 2) / 10;
                const rotateY = (rect.width / 2 - x) / 10;

                card.style.setProperty('--tilt-x', `${rotateX}deg`);
                card.style.setProperty('--tilt-y', `${rotateY}deg`);
                card.style.setProperty('--spotlight-x', `${(x / rect.width) * 100}%`);
                card.style.setProperty('--spotlight-y', `${(y / rect.height) * 100}%`);
                card.style.setProperty('--spotlight-opacity', '1');
            };

            const onMouseLeave = () => {
                rect = null;
                card.style.removeProperty('--tilt-x');
                card.style.removeProperty('--tilt-y');
                card.style.removeProperty('--spotlight-x');
                card.style.removeProperty('--spotlight-y');
                card.style.setProperty('--spotlight-opacity', '0');
            };

            card.addEventListener('mouseenter', onMouseEnter);
            card.addEventListener('mousemove', onMouseMove);
            card.addEventListener('mouseleave', onMouseLeave);

            return () => {
                card.removeEventListener('mouseenter', onMouseEnter);
                card.removeEventListener('mousemove', onMouseMove);
                card.removeEventListener('mouseleave', onMouseLeave);
                card.style.removeProperty('--tilt-x');
                card.style.removeProperty('--tilt-y');
                card.style.removeProperty('--spotlight-x');
                card.style.removeProperty('--spotlight-y');
                card.style.removeProperty('--spotlight-opacity');
            };
        });

        return () => {
            cleanups.forEach((cleanup) => cleanup());
        };
    }, [resetKey, selector]);
}
