import { SERVICES } from '../data.js'

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">OUR SERVICES</p>
          <h2>How we can help</h2>
          <p>Practical solutions for maintaining, repairing, and improving your home.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" aria-label={`Learn more about ${service.title}`}>Learn More →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
