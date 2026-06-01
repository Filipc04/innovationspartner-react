import { NavLink } from 'react-router';
import './Footer.css';

export const Footer = () => {
  
  return (
    <footer role="contentinfo">
    <div className="container">
      <div className="footer-top">
        <div>
          <div className="footer-brand">Innovationspartner</div>
          <p className="footer-desc">Vi sammanför idéer med finansiering och skapar förutsättningar för en hållbar framtid - ett projekt i taget.</p>
          <a href="https://www.vinnova.se" target="_blank" rel="noopener noreferrer"
             className="ext-link">
            Vinnova ↗
          </a>
        </div>
        <nav aria-label="Sidfotslänkar">
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-links">
            <NavLink to="/"          className={({ isActive }) => `footer-link${isActive ? ' active' : ''}`} end>Hem</NavLink>
            <NavLink to="/services"  className={({ isActive }) => `footer-link${isActive ? ' active' : ''}`}>Tjänster</NavLink>
            <NavLink to="/packages"  className={({ isActive }) => `footer-link${isActive ? ' active' : ''}`}>Paket</NavLink>
            <NavLink to="/about"     className={({ isActive }) => `footer-link${isActive ? ' active' : ''}`}>Om oss</NavLink>
            <NavLink to="/contribute"className={({ isActive }) => `footer-link${isActive ? ' active' : ''}`}>Bidra</NavLink>
            <NavLink to="/calculate"className={({ isActive }) => `footer-link${isActive ? ' active' : ''}`}>Kalkylatorn</NavLink>
            <NavLink to="/contact"className={({ isActive }) => `footer-link${isActive ? ' active' : ''}`}>Kontakt</NavLink>
          </ul>
        </nav>
        <div>
          <div className="footer-col-title">Kontakt</div>
          <address>
            <p><a href="tel:+46733103305" className="footer-link">+46 733-103305</a></p>
            <p>
              <a href="mailto:tf@innovationspartner.se" className="footer-link">tf@innovationspartner.se</a>
            </p>
            <a href='https://maps.google.com/?q=Utterv%C3%A4gen+8,+246+52+L%C3%B6ddek%C3%B6pinge' className="footer-link" target='_blank'>
              Uttervägen 8 246 52 Löddeköpinge
            </a>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Innovationspartner Sverige. Alla rättigheter förbehållna.</span>
      </div>
    </div>
  </footer>
  )
}