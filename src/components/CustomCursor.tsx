'use client';

import { useCustomCursor } from '@/hooks/useCustomCursor';

export function CustomCursor() {
    const { trailRef } = useCustomCursor();

    return <div ref={trailRef} className="cursor-trail" aria-hidden="true" />;
}
