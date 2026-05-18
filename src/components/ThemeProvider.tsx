'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
    theme: Theme;
    toggleTheme: () => void;
};

const THEME_STORAGE_KEY = 'theme';
const ThemeContext = createContext<ThemeContextValue | null>(null);

function isTheme(value: string | null): value is Theme {
    return value === 'light' || value === 'dark';
}

function getInitialTheme(): Theme {
    if (typeof document === 'undefined') return 'light';

    const htmlTheme = document.documentElement.getAttribute('data-theme');
    if (isTheme(htmlTheme)) return htmlTheme;

    try {
        const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        return isTheme(storedTheme) ? storedTheme : 'light';
    } catch {
        return 'light';
    }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        try {
            localStorage.setItem(THEME_STORAGE_KEY, theme);
        } catch {
            // Theme persistence is progressive enhancement.
        }
    }, [theme]);

    const value = useMemo<ThemeContextValue>(
        () => ({
            theme,
            toggleTheme: () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
        }),
        [theme]
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used inside ThemeProvider');
    }

    return context;
}
