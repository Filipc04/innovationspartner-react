import { NavLink } from 'react-router'
import './Header.css'
import { TfiWorld } from 'react-icons/tfi'
import { Hamburger } from '../hamburger/Hamburger'

export const Header = () => {
  return (
    <header className="navbar" id="navbar" role="banner">
      <div className="container">
        <nav className="navbar-inner" role="navigation" aria-label="Huvudnavigation">
          <NavLink to="/" className="navbar-logo" aria-label="Innovationspartner startsida">
            <div className="navbar-logo-icon" aria-hidden="true">
              <TfiWorld />
            </div>
            Innovationspartner
          </NavLink>
          <ul className="nav-links" role="list">
            <NavLink to="/"          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} end>Hem</NavLink>
            <NavLink to="/services"  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Tjänster</NavLink>
            <NavLink to="/packages"  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Paket</NavLink>
            <NavLink to="/about"     className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Om oss</NavLink>
            <NavLink to="/contribute"className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Bidra</NavLink>
            <NavLink to="/calculate"className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Kalkylatorn</NavLink>
            <NavLink to="/contact"   className="btn btn--primary nav-cta">Kontakta oss</NavLink>
          </ul>
          
          <Hamburger />
        </nav>
      </div>
    </header>
  )
}