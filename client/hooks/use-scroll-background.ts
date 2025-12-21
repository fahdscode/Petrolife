import { useEffect, useState } from 'react';

export function useScrollBackground() {
  const [isLightBackground, setIsLightBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Define sections with their background colors
      // Format: { selector, isLight }
      const sections = [
        { selector: 'section:nth-of-type(2)', isLight: true },  // Statistics
        { selector: 'section:nth-of-type(3)', isLight: true },  // About
        { selector: 'section:nth-of-type(4)', isLight: true },  // Values
        { selector: 'section:nth-of-type(5)', isLight: true },  // Services
        { selector: 'section:nth-of-type(6)', isLight: false }, // Mobile Apps (dark)
        { selector: 'section:nth-of-type(7)', isLight: true },  // FAQ
        { selector: 'section:nth-of-type(8)', isLight: false }, // CTA (dark/brown)
        { selector: 'section:nth-of-type(9)', isLight: true },  // Contact
      ];

      const scrollY = window.scrollY;
      let currentBackgroundIsLight = false;

      // Check which section is currently in view
      for (const section of sections) {
        const element = document.querySelector(section.selector) as HTMLElement;
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;

          // Check if scroll position is within this section
          if (scrollY + 100 >= sectionTop && scrollY + 100 < sectionBottom) {
            currentBackgroundIsLight = section.isLight;
            break;
          }
        }
      }

      setIsLightBackground(currentBackgroundIsLight);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isLightBackground };
}
