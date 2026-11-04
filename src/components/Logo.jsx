export default function Logo({ onClick }) {
  return (
    <a href="#home" className="logo" onClick={onClick} aria-label="Caliber Home Repair, back to top">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48">
          <path d="M13 23 24 13l11 10" />
          <path d="M17 21v13h14V21" />
          <path d="M22 34v-6h4v6" />
        </svg>
      </span>
      <span className="logo-text">
        <span className="logo-name">CALIBER</span>
        <span className="logo-subtitle">HOME REPAIR</span>
      </span>
    </a>
  )
}
