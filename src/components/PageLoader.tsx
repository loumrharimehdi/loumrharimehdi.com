'use client';

import { usePageLoader } from '@/hooks/usePageLoader';

export function PageLoader() {
    const hidden = usePageLoader();

    return (
        <div className={`page-loader ${hidden ? 'hidden' : ''}`}>
            <div className="loader-content">
                <div className="loader-logo">💗</div>
                <div className="loader-bar">
                    <div className="loader-progress" />
                </div>
            </div>
        </div>
    );
}
