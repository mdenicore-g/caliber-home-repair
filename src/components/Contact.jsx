import { CONTACT } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container contact-content">
        <p className="section-label">CONTACT CALIBER</p>
        <h2>
          Let's discuss
          <br />
          <span>your project.</span>
        </h2>
        <p className="contact-intro">
          Have a repair, maintenance project, or home service need? Tell us a little about what
          you're looking for.
        </p>
        <ul className="contact-details">
          <li>
            <a className="contact-card" href={CONTACT.phoneHref}>
              <span className="contact-icon" aria-hidden="true">📞</span>
              <small>PHONE</small>
              <span className="contact-value">{CONTACT.phoneDisplay}</span>
            </a>
          </li>
          <li>
            <a className="contact-card" href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(CONTACT.emailSubject)}`}>
              <span className="contact-icon" aria-hidden="true">✉️</span>
              <small>EMAIL</small>
              <span className="contact-value">
                {/* Allow a line break after the @ instead of mid-word on narrow screens */}
                {CONTACT.email.split('@')[0]}@<wbr />{CONTACT.email.split('@')[1]}
              </span>
            </a>
          </li>
          <li>
            <div className="contact-card">
              <span className="contact-icon" aria-hidden="true">📍</span>
              <small>SERVICE AREA</small>
              <span className="contact-value">{CONTACT.area}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
