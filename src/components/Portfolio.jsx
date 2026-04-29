export default function Portfolio({ cards }) {
  return (
    <>
      <div className="section-header">
        <span className="section-label">Portfolio</span>
        <h2>What we build</h2>
      </div>
      <div className="grid-panel">
        {cards.map((card) => (
          <article key={card.title} className="card">
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </>
  );
}
