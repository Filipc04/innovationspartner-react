import { useState } from 'react';
import { NavLink } from 'react-router';
import './Hamburger.css';

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`hamburger${isOpen ? ' hamburger--open' : ''}`}
        id="hamburgerBtn"
        aria-label={isOpen ? 'Stäng meny' : 'Öppna meny'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <div
          className="mobile-menu"
          id="mobileMenu"
          role="navigation"
          aria-label="Mobilmeny"
        >
          <NavLink to="/"           onClick={() => setIsOpen(false)}>Hem</NavLink>
          <NavLink to="/services"   onClick={() => setIsOpen(false)}>Tjänster</NavLink>
          <NavLink to="/packages"   onClick={() => setIsOpen(false)}>Paket</NavLink>
          <NavLink to="/about"      onClick={() => setIsOpen(false)}>Om oss</NavLink>
          <NavLink to="/contribute" onClick={() => setIsOpen(false)}>Bidra</NavLink>
          <NavLink to="/calculate"  onClick={() => setIsOpen(false)}>Kalkylatorn</NavLink>
          <NavLink to="/contact"    onClick={() => setIsOpen(false)}>Kontakta oss</NavLink>
        </div>
      )}
    </>
  );
};