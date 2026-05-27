import './Header.css'

export const Header = () => {
  
  return(
    <header className="navbar" id="navbar" role="banner">
    <div className="container">
      <nav className="navbar-inner" role="navigation" aria-label="Huvudnavigation">
        <a href="/" className="navbar-logo" aria-label="Innovationspartner startsida">
          <div className="navbar-logo-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 18 18"><path d="M9 2l2.5 5h5.5l-4.5 3.5 1.7 5.5L9 13l-5.2 3 1.7-5.5L1 7h5.5z"/></svg>
          </div>
          Innovationspartner
        </a>
        <ul className="nav-links" role="list">
          <a href="/"      className="nav-link active">Hem</a>
          <a href="services"   className="nav-link">Tjänster</a>
          <a href="packages"   className="nav-link">Paket</a>
          <a href="about"      className="nav-link">Om oss</a>
          <a href="contribute" className="nav-link">Bidra</a>
          <a href="extra"      className="nav-link">Extra</a>
          <a href="contact"    className="btn btn--primary nav-cta">Kontakta oss</a>
        </ul>
        <button
          className="hamburger"
          id="hamburgerBtn"
          aria-label="Öppna meny"
          aria-expanded="false"
          
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  </header>
  )
}