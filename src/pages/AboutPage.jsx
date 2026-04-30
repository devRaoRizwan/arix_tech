import { aboutHighlights, aboutPrinciples, aboutStats, serviceCards } from '../data.js';

export default function AboutPage() {
  return (
    <section className="panel about-panel">
      <div className="about-shell">
        <div className="section-header about-header">
          <span className="section-label">About</span>
          <h2>We build digital products with clarity, craft, and purpose</h2>
          <p className="section-intro">
            Arix Tech is a digital product studio focused on websites, software systems, automation, and data-driven tools that help businesses move better.
          </p>
        </div>

        <div className="about-hero">
          <article className="about-story">
            <span className="about-kicker">Our Approach</span>
            <h3>We care about the final experience, not just the code behind it.</h3>
            <p>
              For us, good work is a mix of thoughtful design, solid engineering, and practical decision-making. We build products that are meant to be used in the real world, not just shown in a portfolio.
            </p>
            <p>
              That means understanding the business need, shaping the right solution, and delivering something that feels polished, useful, and ready to grow.
            </p>
          </article>

          <div className="about-stats">
            {aboutStats.map((item) => (
              <div key={item.label} className="about-stat">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-highlight-grid">
          {aboutHighlights.map((item) => (
            <article key={item.title} className="about-highlight-card">
              <span className="about-card-label">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="about-capabilities">
          <div className="section-header about-capabilities-header">
            <span className="section-label">Capabilities</span>
            <h2>What we bring into each project</h2>
          </div>
          <div className="about-capability-grid">
            {serviceCards.map((card) => (
              <article key={card.id} className="about-capability-card">
                <div className="about-capability-top">
                  <span className="about-capability-label">{card.label}</span>
                  <span className="about-capability-metric">{card.metric}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-principles-section">
          <div className="section-header about-principles-header">
            <span className="section-label">Principles</span>
            <h2>How we like to work</h2>
          </div>
          <div className="about-principles-grid">
            {aboutPrinciples.map((item) => (
              <article key={item.title} className="about-principle-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
