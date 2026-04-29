import Hero from '../components/Hero.jsx';
import { serviceCards } from '../data.js';

export default function HomePage() {
  return (
    <section className="panel home-panel">
      <Hero serviceCards={serviceCards} />
    </section>
  );
}
