import { NAV_LINKS } from '../data.js'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo">CALIBER</div>
          <p>HOME REPAIR</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="footer-copy">
          © {YEAR} Caliber Home Repair.
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  )
}
