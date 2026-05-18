import { useEffect, useRef, useState } from 'react';

type UseCounterOptions = {
    target: number;
    duration: number;
};

export function useCounter({ target, duration }: UseCounterOptions) {
    const ref = useRef<HTMLSpanElement>(null);
    const [value, setValue] = useState(target);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let animationFrame = 0;
        let started = false;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry?.isIntersecting || started) return;

                started = true;
                const startTime = performance.now();

                const update = (currentTime: number) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3);

                    setValue(Math.floor(target * easeOut));

                    if (progress < 1) {
                        animationFrame = window.requestAnimationFrame(update);
                    } else {
                        setValue(target);
                    }
                };

                setValue(0);
                animationFrame = window.requestAnimationFrame(update);
                observer.unobserve(element);
            },
            { threshold: 0.5 }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            window.cancelAnimationFrame(animationFrame);
        };
    }, [duration, target]);

    return { ref, value };
}
