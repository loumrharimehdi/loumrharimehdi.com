import { useEffect, useState } from 'react';

const STORAGE_KEY = 'page_loaded';

export function usePageLoader(delay = 1500) {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        try {
            if (sessionStorage.getItem(STORAGE_KEY) === '1') {
                return;
            }
        } catch {}

        const timeout = window.setTimeout(() => {
            setHidden(true);
            try {
                sessionStorage.setItem(STORAGE_KEY, '1');
                document.documentElement.setAttribute('data-loaded', '1');
            } catch {}
        }, delay);

        return () => window.clearTimeout(timeout);
    }, [delay]);

    return hidden;
}
