import { useEffect, useState } from 'react';

export const useWindowScroll = (point) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      setActive(scrollTop > point);
    });
  }, []);
  return active;
};
