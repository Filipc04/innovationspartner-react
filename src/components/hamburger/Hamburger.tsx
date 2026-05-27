import './Hamburger.css';

export const Hamburger = () => {
  return(
    <div className="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobilmeny">
      <a href="index.html">Hem</a>
      <a href="services.html">Tjänster</a>
      <a href="packages.html">Paket</a>
      <a href="about.html">Om oss</a>
      <a href="contribute.html">Bidra</a>
      <a href="extra.html">Extra</a>
      <a href="contact.html">Kontakta oss</a>
    </div>
  )
}