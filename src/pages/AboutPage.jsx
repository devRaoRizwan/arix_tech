import { serviceCards } from '../data.js';

export default function AboutPage() {
  return (
    <section className="panel about-panel">
      <div className="section-header">
        <span className="section-label">About</span>
        <h2>Modern engineering, built for impact</h2>
      </div>
      <div className="glass-panel about-card">
        <p>
          Arix Tech is a software solution company that blends modern design, scalable architecture,
          and intelligent automation. We specialize in backend systems, responsive frontend experiences,
          advanced scraping flows, and full product delivery.
        </p>
        <p>
          Our approach is clean, modular, and built to scale. We treat every product as a polished digital
          experience with performance, security, and maintainability at the core.
        </p>
      </div>
      <div className="grid-panel">
        {serviceCards.map((card) => (
          <article key={card.title} className="card">
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
