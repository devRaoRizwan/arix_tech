import { processSteps } from '../data.js';

export default function ProcessSection() {
  return (
    <section className="hero-column process-section">
      <div className="process-shell">
        <div className="process-header">
          <span className="section-label">How It Flows</span>
          <h2>From your idea to a finished product</h2>
          <p className="process-intro">
            A good client experience should feel simple. You bring the idea, we shape it, build it, and help you launch it with clarity.
          </p>
        </div>
        <div className="process-layout">
          <div className="process-track" aria-hidden="true">
            <div className="process-track-line" />
            {processSteps.map((item, index) => (
              <div key={item.id} className={`process-node process-node-${index + 1}`}>
                <span>{item.step}</span>
              </div>
            ))}
          </div>
          <div className="process-grid">
            {processSteps.map((item, index) => (
              <article key={item.id} className={`process-card process-card-${index + 1}`}>
                <div className="process-card-top">
                  <div className="process-mark">{item.mark}</div>
                  <span className="process-step-number">Step {item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="process-chip-row">
                  {item.chips.map((chip) => (
                    <span key={chip} className="process-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
