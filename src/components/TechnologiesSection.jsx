import { technologies } from '../data.js';

export default function TechnologiesSection() {
  return (
    <section className="hero-column technologies-section">
      <div className="technologies-shell">
        <div className="section-header">
          <span className="section-label">Technologies We Use</span>
          <h2>Built on a modern, dependable stack</h2>
          <p className="section-intro">
            We choose tools based on what suits the project best, with a focus on performance, reliability, and long-term maintainability.
          </p>
        </div>
        <div className="technology-summary">
          <div className="technology-summary-item">
            <span className="technology-summary-number">Fast</span>
            <p>Built for speed and smooth user experience</p>
          </div>
          <div className="technology-summary-item">
            <span className="technology-summary-number">Scalable</span>
            <p>Ready to grow as the product and business expand</p>
          </div>
          <div className="technology-summary-item">
            <span className="technology-summary-number">Maintainable</span>
            <p>Structured in a way that stays easier to manage over time</p>
          </div>
        </div>
        <div className="technology-grid technology-grid-pro">
          {technologies.map((item) => (
            <article key={item.title} className="technology-card technology-card-pro">
              <div className="technology-copy technology-copy-pro">
                <span className="technology-eyebrow">Stack Area</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <div className="technology-stack">
                {item.stack.map((tool) => (
                  <span key={tool} className="technology-pill">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
