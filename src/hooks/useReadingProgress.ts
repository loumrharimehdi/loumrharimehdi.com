import { useEffect, useState } from 'react';

export function useReadingProgress(targetSelector: string) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const target = document.querySelector<HTMLElement>(targetSelector);
        if (!target) return;

        let ticking = false;
        let frame = 0;

        const updateProgress = () => {
            const scrollY = window.scrollY;
            const start = target.offsetTop - window.innerHeight;
            const total = target.offsetHeight;
            const nextProgress = total > 0 ? Math.max(0, Math.min(100, ((scrollY - start) / total) * 100)) : 0;

            setProgress(nextProgress);
            ticking = false;
        };

        const onScroll = () => {
            if (ticking) return;

            ticking = true;
            frame = window.requestAnimationFrame(updateProgress);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        updateProgress();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            window.cancelAnimationFrame(frame);
        };
    }, [targetSelector]);

    return progress;
}
