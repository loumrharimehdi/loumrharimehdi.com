'use client';

import type { CSSProperties } from 'react';
import { useReadingProgress } from '@/hooks/useReadingProgress';

type ReadingProgressProps = {
    targetSelector?: string;
};

export function ReadingProgress({ targetSelector = '.article' }: ReadingProgressProps) {
    const progress = useReadingProgress(targetSelector);
    const style = { '--reading-progress': `${progress}%` } as CSSProperties;

    return <div className="reading-progress" style={style} aria-hidden="true" />;
}
