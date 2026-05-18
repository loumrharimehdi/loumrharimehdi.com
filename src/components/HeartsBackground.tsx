'use client';

import { useEffect, useRef } from 'react';

type HeartsBackgroundProps = {
    count?: 2 | 4 | 6 | 8;
};

export function HeartsBackground({ count = 8 }: HeartsBackgroundProps) {
    const heartRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        let ticking = false;
        let frame = 0;

        const updateHearts = () => {
            const scrollY = window.scrollY;

            heartRefs.current.forEach((heart, index) => {
                if (!heart) return;

                const speed = 0.03 + index * 0.012;
                heart.style.setProperty('--heart-scroll', `${scrollY * speed}px`);
            });

            ticking = false;
        };

        const onScroll = () => {
            if (ticking) return;

            ticking = true;
            frame = window.requestAnimationFrame(updateHearts);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateHearts();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div className="hearts-bg" aria-hidden="true">
            {Array.from({ length: count }, (_, index) => (
                <div
                    key={index}
                    ref={(element) => {
                        heartRefs.current[index] = element;
                    }}
                    className={`heart heart-${index + 1}`}
                >
                    💗
                </div>
            ))}
        </div>
    );
}
