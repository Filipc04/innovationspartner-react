import { useEffect, useState } from 'react';
import './ScrollButton.css';

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-top-btn${visible ? ' visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scrolla till toppen"
    >
      ↑
    </button>
  );
};