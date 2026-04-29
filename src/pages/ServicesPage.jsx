import Portfolio from '../components/Portfolio.jsx';
import { serviceCards } from '../data.js';

export default function ServicesPage() {
  return (
    <section className="panel services-panel">
      <div className="section-header">
        <span className="section-label">Services</span>
        <h2>Specialized solutions across the stack</h2>
      </div>
      <Portfolio cards={serviceCards} />
    </section>
  );
}
