import { useState, useEffect } from 'react';

const baseQueries = [
  'I want to build a website',
  'I need backend development',
  'Frontend design services',
  'Web scraping solution',
  'Automation for my business',
  'Full-stack application',
  'API development',
  'Data scraping tool',
  'Custom software',
  'E-commerce platform',
];

const allSuggestions = [
  'I want to build a website for my business',
  'I need backend development for my app',
  'Frontend design services for modern UI',
  'Web scraping solution for data collection',
  'Automation for my business processes',
  'Full-stack application development',
  'API development and integration',
  'Data scraping tool with automation',
  'Custom software for enterprise',
  'E-commerce platform with payment',
  'Backend systems for scalability',
  'Frontend experiences with animations',
  'Web scraping flows for insights',
  'Automation pipelines for efficiency',
  'End-to-end solutions for startups',
];

export default function Hero({ serviceCards }) {
  const [query, setQuery] = useState('');
  const [currentBase, setCurrentBase] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    if (!isTyping) return;

    const base = baseQueries[currentBase];
    let index = 0;
    const interval = setInterval(() => {
      if (index <= base.length) {
        const partial = base.slice(0, index);
        setQuery(partial);
        const filtered = allSuggestions.filter(suggestion =>
          suggestion.toLowerCase().startsWith(partial.toLowerCase()) && suggestion !== partial
        ).slice(0, 5);
        setFilteredSuggestions(filtered);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentBase((prev) => (prev + 1) % baseQueries.length);
            setIsTyping(true);
            setQuery('');
            setFilteredSuggestions([]);
          }, 2000);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentBase, isTyping]);

  return (
    <div className="hero-card glass-panel">
      <div className="hero-title">
        <span className="small-label">Arix Tech</span>
        <h1>Software solution company</h1>
      </div>
      <div className="search-container">
        <div className="search-display">
          <span className="search-text">{query}</span>
          {isTyping && <span className="cursor">|</span>}
        </div>
        {filteredSuggestions.length > 0 && (
          <ul className="suggestions-list">
            {filteredSuggestions.map((suggestion, index) => (
              <li key={index} className="suggestion-item">
                <strong>{query}</strong>{suggestion.slice(query.length)}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="service-blocks">
        {serviceCards.slice(0, 3).map((item) => (
          <div key={item.title} className="service-block">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
