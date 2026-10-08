import { useState } from "react";
import "./App.css";

const services = [
  {
    icon: "🔨",
    title: "Home Repairs",
    description:
      "Professional repairs and improvements to keep your home safe, functional, and looking its best.",
  },
  {
    icon: "🛠️",
    title: "Home Maintenance",
    description:
      "Routine maintenance and preventative repairs that help protect your home and prevent costly problems.",
  },
  {
    icon: "🏠",
    title: "Home Inspections",
    description:
      "Thorough home reviews to identify issues, maintenance needs, and potential repairs.",
  },
  {
    icon: "📋",
    title: "Pre-Listing Repairs",
    description:
      "Identify and address repair items before putting your home on the market.",
  },
];

const benefits = [
  "Professional and dependable service",
  "Attention to detail",
  "Quality workmanship",
  "Clear communication",
  "Honest recommendations",
  "Serving Bucks County homeowners",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* Header */}
      <header className="header">
        <div className="container nav-container">

          <a href="#home" className="logo" onClick={closeMenu}>
            <div className="logo-mark">
              <span className="roof"></span>
              <span className="house"></span>
              <span className="tool tool-one"></span>
              <span className="tool tool-two"></span>
            </div>

            <div className="logo-text">
              <span className="logo-name">CALIBER</span>
              <span className="logo-subtitle">HOME REPAIR</span>
            </div>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Get a Quote
            </a>
          </nav>

        </div>
      </header>

      {/* Hero */}
      <main>

        <section id="home" className="hero">
          <div className="hero-overlay"></div>

          <div className="container hero-content">
            <div className="hero-text">

              <p className="eyebrow">
                BUCKS COUNTY • PENNSYLVANIA
              </p>

              <h1>
                Quality Home Repair.
                <br />
                <span>Done Right.</span>
              </h1>

              <p className="hero-description">
                Professional home repair, maintenance, and inspection
                services you can trust.
              </p>

              <div className="hero-buttons">
                <a href="#contact" className="button button-primary">
                  Request a Quote
                </a>

                <a href="#services" className="button button-outline">
                  View Services
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="intro">
          <div className="container intro-grid">

            <div>
              <p className="section-label">CALIBER HOME REPAIR</p>

              <h2>
                Taking care of your home,
                <br />
                <span>one project at a time.</span>
              </h2>
            </div>

            <div className="intro-text">
              <p>
                Your home is one of your biggest investments. Caliber Home
                Repair provides dependable maintenance, repairs, and home
                services to help you protect that investment.
              </p>

              <p>
                From small repairs and routine maintenance to pre-listing
                reviews and larger projects, we approach every job with
                professionalism, attention to detail, and care.
              </p>
            </div>

          </div>
        </section>

        {/* Services */}
        <section id="services" className="services section">
          <div className="container">

            <div className="section-heading">
              <p className="section-label">OUR SERVICES</p>
              <h2>How we can help</h2>
              <p>
                Practical solutions for maintaining, repairing, and
                improving your home.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a href="#contact">
                    Learn More →
                  </a>

                </article>
              ))}
            </div>

          </div>
        </section>

        {/* Why Caliber */}
        <section className="why section">
          <div className="container why-grid">

            <div className="why-image">
              <div className="image-placeholder">
                <div className="placeholder-house">
                  🏠
                </div>
                <p>Quality workmanship.<br />Every project.</p>
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
                We believe home repair should be straightforward. You
                deserve clear communication, honest recommendations, and
                quality workmanship without unnecessary complications.
              </p>

              <div className="benefits">
                {benefits.map((benefit) => (
                  <div className="benefit" key={benefit}>
                    <span className="check">✓</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* About */}
        <section id="about" className="about section">
          <div className="container about-content">

            <p className="section-label">ABOUT CALIBER</p>

            <h2>
              Your home deserves
              <br />
              <span>the right attention.</span>
            </h2>

            <p>
              Caliber Home Repair was created with a simple goal: provide
              homeowners with a reliable resource for maintaining and
              improving their homes.
            </p>

            <p>
              Whether you have a list of small projects you've been putting
              off, need help preparing your home for sale, or simply want
              someone you can trust to evaluate a problem, Caliber is here
              to help.
            </p>

            <a href="#contact" className="button button-dark">
              Let's Talk About Your Project
            </a>

          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="container cta-content">

            <div>
              <p className="section-label light">
                READY TO GET STARTED?
              </p>

              <h2>
                Let's take care of
                <br />
                your to-do list.
              </h2>
            </div>

            <a href="#contact" className="button button-light">
              Request a Quote
            </a>

          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact section">
          <div className="container contact-grid">

            <div className="contact-info">

              <p className="section-label">CONTACT CALIBER</p>

              <h2>
                Let's discuss
                <br />
                <span>your project.</span>
              </h2>

              <p>
                Have a repair, maintenance project, or home service need?
                Tell us a little about what you're looking for.
              </p>

              <div className="contact-details">

                <div className="contact-item">
                  <span>📞</span>
                  <div>
                    <small>PHONE</small>
                    <a href="tel:2155550100">
                      (215) 555-0100
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <span>✉️</span>
                  <div>
                    <small>EMAIL</small>
                    <a href="mailto:info@caliberhomerepair.com">
                      info@caliberhomerepair.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <span>📍</span>
                  <div>
                    <small>SERVICE AREA</small>
                    <p>Bucks County, Pennsylvania</p>
                  </div>
                </div>

              </div>

            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We'll be in touch soon.");
              }}
            >

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your phone"
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">What can we help with?</label>

                <select id="service">
                  <option value="">Select a service</option>
                  <option>Home Repair</option>
                  <option>Home Maintenance</option>
                  <option>Home Inspection</option>
                  <option>Pre-Listing Repairs</option>
                  <option>Other</option>
                </select>

              </div>

              <div className="form-group">
                <label htmlFor="message">Tell us about your project</label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Describe your project or repair needs..."
                  required
                ></textarea>

              </div>

              <button
                type="submit"
                className="button button-dark submit-button"
              >
                Send Request
              </button>

            </form>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">

        <div className="container footer-content">

          <div className="footer-brand">
            <div className="footer-logo">
              CALIBER
            </div>
            <p>
              HOME REPAIR
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} Caliber Home Repair.
            <br />
            All rights reserved.
          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;