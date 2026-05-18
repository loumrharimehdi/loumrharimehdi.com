import { useEffect } from 'react';

const MAGNETIC_RANGE = 120;
const MAGNETIC_STRENGTH = 0.35;

export function useMagneticButtons(resetKey: string, selector = '.btn-magnetic') {
    useEffect(() => {
        const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!hasFinePointer || reducedMotion) return;

        const buttons = Array.from(document.querySelectorAll<HTMLElement>(selector));

        const cleanups = buttons.map((button) => {
            const onMouseMove = (event: MouseEvent) => {
                const rect = button.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const dx = event.clientX - centerX;
                const dy = event.clientY - centerY;
                const distance = Math.hypot(dx, dy);

                if (distance > MAGNETIC_RANGE) {
                    button.style.setProperty('--magnet-x', '0px');
                    button.style.setProperty('--magnet-y', '0px');
                    return;
                }

                const falloff = 1 - distance / MAGNETIC_RANGE;
                button.style.setProperty('--magnet-x', `${dx * MAGNETIC_STRENGTH * falloff}px`);
                button.style.setProperty('--magnet-y', `${dy * MAGNETIC_STRENGTH * falloff}px`);
            };

            const onMouseLeave = () => {
                button.style.setProperty('--magnet-x', '0px');
                button.style.setProperty('--magnet-y', '0px');
            };

            window.addEventListener('mousemove', onMouseMove);
            button.addEventListener('mouseleave', onMouseLeave);

            return () => {
                window.removeEventListener('mousemove', onMouseMove);
                button.removeEventListener('mouseleave', onMouseLeave);
                button.style.removeProperty('--magnet-x');
                button.style.removeProperty('--magnet-y');
            };
        });

        return () => {
            cleanups.forEach((cleanup) => cleanup());
        };
    }, [resetKey, selector]);
}
