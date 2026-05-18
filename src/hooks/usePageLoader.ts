import { useEffect, useState } from 'react';

const STORAGE_KEY = 'page_loaded';

function hasLoadedBefore() {
    if (typeof window === 'undefined') return false;

    try {
        return sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
        return false;
    }
}

export function usePageLoader(delay = 1500) {
    const [hidden, setHidden] = useState(hasLoadedBefore);

    useEffect(() => {
        if (hidden) return;

        const timeout = window.setTimeout(() => {
            setHidden(true);
            try {
                sessionStorage.setItem(STORAGE_KEY, '1');
                document.documentElement.setAttribute('data-loaded', '1');
            } catch {}
        }, delay);

        return () => window.clearTimeout(timeout);
    }, [delay, hidden]);

    return hidden;
}
