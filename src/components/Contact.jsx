import { useEffect, useState } from 'react';
import { contactActivity, contactChannels, contactSignals } from '../data.js';

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

function ChannelIcon({ type }) {
  if (type === 'linkedin') {
    return <span className="contact-icon-glyph">in</span>;
  }

  if (type === 'support') {
    return <span className="contact-icon-glyph">S</span>;
  }

  return <span className="contact-icon-glyph">@</span>;
}

function useCountUp(target) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId;
    let startTime;
    const duration = 1600;

    const tick = (time) => {
      if (!startTime) {
        startTime = time;
      }

      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [target]);

  return value;
}

function CounterCard({ item, index }) {
  const value = useCountUp(item.target);

  return (
    <article className="contact-signal-card" style={{ animationDelay: `${index * 120}ms` }}>
      <div className="contact-signal-bar" aria-hidden="true">
        <span />
      </div>
      <strong>
        {value}
        {item.suffix}
      </strong>
      <span>{item.label}</span>
    </article>
  );
}

export default function Contact() {
  return (
    <div className="contact-shell">
      <div className="section-header contact-header">
        <span className="section-label">Contact</span>
        <h2>Let&apos;s make the next project feel sharp from day one</h2>
        <p className="section-intro">Reach out for a new build, refinements, or support after launch.</p>
      </div>

      <div className="contact-layout">
        <article className="contact-hero-card glass-panel">
          <div className="contact-hero-copy">
            <h3>One place to start the conversation.</h3>
          </div>

          <div className="contact-activity-panel" aria-hidden="true">
            <span className="contact-activity-label">Live board</span>
            <div className="contact-activity-list">
              {contactActivity.map((item, index) => (
                <div key={item} className="contact-activity-item" style={{ animationDelay: `${index * 140}ms` }}>
                  <span className="contact-activity-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className="contact-side-column">
          <div className="contact-signal-grid">
            {contactSignals.map((item, index) => (
              <CounterCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <div className="contact-channel-list">
            {contactChannels.map((channel) => (
              <a key={channel.id} className="contact-channel-card" href={channel.href} target="_blank" rel="noreferrer">
                <div className="contact-channel-icon">
                  <ChannelIcon type={channel.icon} />
                </div>
                <div className="contact-channel-copy">
                  <span className="contact-channel-label">{channel.label}</span>
                  <strong>{channel.value}</strong>
                  <p>{channel.note}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-cta-bar">
        <div className="contact-cta-copy">
          <h3>Have a product idea, redesign, or support request?</h3>
        </div>
        <a className="hero-discuss-button contact-discuss-button" href={discussLink} target="_blank" rel="noreferrer">
          <span className="hero-discuss-title">Let&apos;s discuss your project</span>
          <span className="hero-discuss-arrow" aria-hidden="true">
            -&gt;
          </span>
        </a>
      </div>
    </div>
  );
}
