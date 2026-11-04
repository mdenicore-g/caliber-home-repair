import { COMMUNITIES } from '../data.js'

export default function ServiceArea() {
  return (
    <section id="communities" className="communities section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">OUR SERVICE AREA</p>
          <h2>Quality Home Repair Throughout Bucks County, PA</h2>
          <p>
            Caliber Home Repair serves homeowners in communities throughout Bucks County, providing
            dependable home repair and maintenance support close to home.
          </p>
        </div>
        <ul className="communities-grid" aria-label="Communities served">
          {COMMUNITIES.map((town) => (
            <li className="community-card" key={town}>
              <span className="community-pin" aria-hidden="true">⌖</span>
              <span>{town}</span>
            </li>
          ))}
        </ul>
        <p className="communities-note">
          Don't see your town listed? Contact us to ask about service availability in your area.
        </p>
        <div className="communities-action">
          <a href="#contact" className="button button-dark">Check Service Availability</a>
        </div>
      </div>
    </section>
  )
}
