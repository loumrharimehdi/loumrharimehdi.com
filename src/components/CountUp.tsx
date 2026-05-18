'use client';

import { useCounter } from '@/hooks/useCounters';

type CountUpProps = {
    target: number;
    duration?: number;
};

export function CountUp({ target, duration = 2000 }: CountUpProps) {
    const { ref, value } = useCounter({ target, duration });

    return (
        <span ref={ref} className="counter">
            {value}
        </span>
    );
}
