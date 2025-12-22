import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 0) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveId(id);
                        return;
                    }
                }
            }

            // Handle case where we might be at the top but not in a specific section range
            // or at the very bottom.
            // For now, simple intersection is enough.
        };

        window.addEventListener('scroll', handleScroll);
        // Call once on mount to set initial state
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds, offset]);

    return activeId;
}
