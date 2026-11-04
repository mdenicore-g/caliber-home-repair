import { BENEFITS } from '../data.js'

export default function WhyCaliber() {
  return (
    <section className="why section">
      <div className="container why-grid">
        <div className="why-image">
          <div className="image-placeholder">
            <div className="placeholder-house" aria-hidden="true">🏠</div>
            <p>
              Quality workmanship.
              <br />
              Every project.
            </p>
          </div>
        </div>
        <div className="why-content">
          <p className="section-label">WHY CALIBER</p>
          <h2>
            Professional service
            <br />
            <span>you can count on.</span>
          </h2>
          <p className="why-description">
            We believe home repair should be straightforward. You deserve clear communication,
            honest recommendations, and quality workmanship without unnecessary complications.
          </p>
          <ul className="benefits">
            {BENEFITS.map((benefit) => (
              <li className="benefit" key={benefit}>
                <span className="check" aria-hidden="true">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
