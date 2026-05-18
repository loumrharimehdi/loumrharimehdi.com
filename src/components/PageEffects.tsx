'use client';

import { usePathname } from 'next/navigation';
import { useMagneticButtons } from '@/hooks/useMagneticButtons';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { useTiltCards } from '@/hooks/useTiltCards';

export function PageEffects() {
    const pathname = usePathname();

    useRevealOnScroll(pathname);
    useTiltCards(pathname);
    useMagneticButtons(pathname);

    return null;
}
