import type { ReactNode } from 'react';

type SectionHeaderProps = {
    badge: string;
    title: ReactNode;
    subtitle?: string;
};

export function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
    return (
        <div className="section-header">
            <span className="section-badge">{badge}</span>
            <h2>{title}</h2>
            {subtitle ? <p>{subtitle}</p> : null}
        </div>
    );
}
