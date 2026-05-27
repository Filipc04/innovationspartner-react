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
            Vinnova - extern länk ↗
          </a>
        </div>
        <nav aria-label="Sidfotslänkar">
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-links">
            <li><a href="index"      className="footer-link">Hem</a></li>
            <li><a href="services"   className="footer-link">Tjänster</a></li>
            <li><a href="packages"   className="footer-link">Konsultationspaket</a></li>
            <li><a href="about"      className="footer-link">Om oss</a></li>
            <li><a href="contribute" className="footer-link">Bidra till projekt</a></li>
            <li><a href="contact"    className="footer-link">Kontakt</a></li>
          </ul>
        </nav>
        <div>
          <div className="footer-col-title">Kontakt</div>
          <address>
            <p><a href="tel:+46733103305" className="footer-link">+46 733-103305</a></p>
            <p>
              <a href="mailto:tf@innovationspartner.se" className="footer-link">tf@innovationspartner.se</a>
            </p>
            <p className="footer-link">
              Uttervägen 8 246 52 Löddeköpinge
            </p>
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