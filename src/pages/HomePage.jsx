import Hero from '../components/Hero.jsx';
import { serviceCards } from '../data.js';

export default function HomePage() {
  const [leadService, ...supportingServices] = serviceCards;

  return (
    <section className="panel home-panel">
      <div className="hero-column">
        <Hero />
      </div>
      <div className="hero-column services-section">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2>What we build</h2>
          <p className="section-intro">
            We help businesses build the digital tools they actually need, from solid websites and apps to smoother workflows behind the scenes.
          </p>
        </div>
        <div className="services-showcase">
          <article className="service-lead">
            <div className="service-lead-copy">
              <span className="service-kicker">Core Capability</span>
              <h3>{leadService.title}</h3>
              <p>{leadService.body}</p>
            </div>
            <div className="service-lead-points">
              {leadService.points.map((point) => (
                <div key={point} className="service-lead-point">
                  {point}
                </div>
              ))}
            </div>
          </article>
          <div className="service-grid-v2">
            {supportingServices.map((item) => (
              <article key={item.id} className="service-card-v2">
                <div className="service-card-topline">
                  <span className="service-card-label">{item.label}</span>
                  <span className="service-card-metric">{item.metric}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul className="service-point-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
