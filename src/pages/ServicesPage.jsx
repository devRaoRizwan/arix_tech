import { projectShowcase } from '../data.js';

const discussLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('hello@arixtech.dev')}&su=${encodeURIComponent('Project inquiry from Arix Tech website')}&body=${encodeURIComponent(
  `Hi Arix Tech,

I would like to discuss a project with you.

Project type:
Business / brand:
What I need help with:
Timeline:
Budget range:
My email:

Please get back to me when you can.

Thanks,`
)}`;

export default function ServicesPage() {
  return (
    <section className="panel services-panel">
      <div className="services-page-shell">
        <div className="section-header services-page-header">
          <span className="section-label">Projects</span>
          <h2>Sample products we can deliver</h2>
          <p className="section-intro">
            Quick examples so people can instantly understand the kind of work, feel, and tech stack we handle.
          </p>
        </div>

        <div className="project-showcase-grid">
          {projectShowcase.map((project, index) => (
            <article key={project.id} className={`project-card project-card-${index + 1}`}>
              <div className="project-card-top">
                <div className="project-logo" aria-hidden="true">
                  <span>{project.logo}</span>
                </div>
                <span className="project-type">{project.type}</span>
              </div>
              <div className="project-card-copy">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-tech-row">
                {project.tech.map((item) => (
                  <span key={item} className="project-tech-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="services-bottom-strip">
          <article className="services-support-card">
            <span className="service-kicker">Beyond delivery</span>
            <h3>We also handle custom changes, refinements, and support after launch.</h3>
            <p>
              If something needs adjusting after delivery, we can keep improving the product so it stays useful as your business grows.
            </p>
          </article>

          <article className="services-cta-card">
            <p className="services-cta-note">Have something similar in mind?</p>
            <a className="hero-discuss-button services-discuss-button" href={discussLink} target="_blank" rel="noreferrer">
              <span className="hero-discuss-title">Let&apos;s discuss your project</span>
              <span className="hero-discuss-arrow" aria-hidden="true">
                -&gt;
              </span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
