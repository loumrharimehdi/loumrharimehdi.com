import { useEffect } from 'react';

export function useServiceWorker(scriptUrl: string) {
    useEffect(() => {
        if (!('serviceWorker' in navigator)) return;

        navigator.serviceWorker.register(scriptUrl).catch(() => {
            // PWA support is progressive enhancement; navigation and content stay available.
        });
    }, [scriptUrl]);
}
