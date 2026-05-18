import { useEffect, useRef, useState } from 'react';

export function useMobileNav() {
    const navRef = useRef<HTMLElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);
    const toggleMenu = () => setIsOpen((current) => !current);

    useEffect(() => {
        if (!isOpen) return;

        const onPointerDown = (event: PointerEvent) => {
            if (!navRef.current?.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener('pointerdown', onPointerDown);

        return () => document.removeEventListener('pointerdown', onPointerDown);
    }, [isOpen]);

    return { closeMenu, isOpen, navRef, toggleMenu };
}
