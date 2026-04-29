import Hero from '../components/Hero.jsx';
import { serviceCards } from '../data.js';

export default function HomePage() {
  return (
    <section className="panel home-panel">
      <div className="hero-column">
        <Hero />
      </div>
      <div className="services-section">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2>What we build</h2>
        </div>
        <div className="feature-cards">
          {serviceCards.map((item) => (
            <article key={item.title} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
