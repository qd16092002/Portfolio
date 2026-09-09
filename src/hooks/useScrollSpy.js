import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently occupying the top of the viewport,
 * accounting for the fixed header.
 */
export const useScrollSpy = (sectionIds, offset = 90) => {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const update = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      // The last section can be too short to ever reach the top of the
      // viewport, so treat "scrolled to the bottom" as reaching it.
      if (scrollBottom >= document.documentElement.scrollHeight - 2) {
        setActiveId(elements[elements.length - 1].id);
        return;
      }

      const current = elements.reduce((found, element) => {
        return element.getBoundingClientRect().top <= offset ? element : found;
      }, elements[0]);

      setActiveId(current.id);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
