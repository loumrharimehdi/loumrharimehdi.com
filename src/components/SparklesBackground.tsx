'use client';

import { useEffect, useRef } from 'react';

type SparklesBackgroundProps = {
    count?: number;
};

const POSITIONS = [
    { top: '12%', left: '18%', size: 24, delay: 0 },
    { top: '22%', left: '78%', size: 18, delay: -2 },
    { top: '38%', left: '8%', size: 28, delay: -5 },
    { top: '44%', left: '62%', size: 16, delay: -7 },
    { top: '58%', left: '32%', size: 22, delay: -10 },
    { top: '64%', left: '88%', size: 20, delay: -3 },
    { top: '78%', left: '14%', size: 26, delay: -9 },
    { top: '82%', left: '56%', size: 18, delay: -6 },
    { top: '30%', left: '48%', size: 14, delay: -12 },
    { top: '70%', left: '72%', size: 24, delay: -4 },
    { top: '92%', left: '38%', size: 16, delay: -11 },
    { top: '6%', left: '64%', size: 20, delay: -8 }
];

export function SparklesBackground({ count = 12 }: SparklesBackgroundProps) {
    const sparkleRefs = useRef<Array<HTMLSpanElement | null>>([]);

    useEffect(() => {
        let ticking = false;
        let frame = 0;

        const updateSparkles = () => {
            const scrollY = window.scrollY;

            sparkleRefs.current.forEach((sparkle, index) => {
                if (!sparkle) return;
                const speed = 0.04 + index * 0.01;
                sparkle.style.setProperty('--sparkle-scroll', `${scrollY * speed}px`);
            });

            ticking = false;
        };

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            frame = window.requestAnimationFrame(updateSparkles);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateSparkles();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.cancelAnimationFrame(frame);
        };
    }, []);

    const visible = POSITIONS.slice(0, count);

    return (
        <div className="sparkles-bg" aria-hidden="true">
            {visible.map((pos, index) => (
                <span
                    key={index}
                    ref={(element) => {
                        sparkleRefs.current[index] = element;
                    }}
                    className="sparkle"
                    style={{
                        top: pos.top,
                        left: pos.left,
                        fontSize: `${pos.size}px`,
                        animationDelay: `${pos.delay}s`
                    }}
                >
                    ✨
                </span>
            ))}
        </div>
    );
}
