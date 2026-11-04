import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { NAV_LINKS } from '../data.js'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  // Close the mobile menu with Escape, or when the viewport grows past the mobile breakpoint
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && closeMenu()
    const wide = window.matchMedia('(min-width: 901px)')
    const onResize = () => wide.matches && closeMenu()
    window.addEventListener('keydown', onKey)
    wide.addEventListener('change', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      wide.removeEventListener('change', onResize)
    }
  }, [menuOpen])

  return (
    <header className="header">
      <div className="container nav-container">
        <Logo onClick={closeMenu} />
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`nav${menuOpen ? ' nav-open' : ''}`}
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  )
}
