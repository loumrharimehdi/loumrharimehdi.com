'use client';

import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            type="button"
            aria-label="Changer de thème"
            aria-pressed={theme === 'dark'}
            onClick={toggleTheme}
            suppressHydrationWarning
        >
            <span className="icon-sun">☀️</span>
            <span className="icon-moon">🌙</span>
        </button>
    );
}
