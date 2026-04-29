import { useState, useEffect } from 'react';

const searchPrompts = [
  {
    prefix: 'I wish I had a website for my',
    options: ['barber shop', 'restaurant', 'jewelry store', 'cafe', 'health clinic', 'fitness studio'],
  },
  {
    prefix: 'I wish I could show my products online for',
    options: ['a boutique', 'a startup', 'a food brand', 'a service shop'],
  },
  {
    prefix: 'I wish I could automate my',
    options: ['appointments', 'orders', 'customer updates', 'marketing tasks'],
  },
  {
    prefix: 'I wish I could collect data for',
    options: ['local pricing', 'customer reviews', 'product availability', 'market trends'],
  },
  {
    prefix: 'I wish I had a faster way to',
    options: ['sell online', 'manage clients', 'share updates', 'track leads'],
  },
];

export default function Hero() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const prompt = searchPrompts[currentPrompt];
    let index = 0;
    const interval = setInterval(() => {
      if (index <= prompt.prefix.length) {
        const partial = prompt.prefix.slice(0, index);
        setQuery(partial);
        const matched = prompt.options
          .map((option) => `${prompt.prefix} ${option}`)
          .filter((item) => item.toLowerCase().startsWith(partial.toLowerCase()))
          .slice(0, 3);
        setSuggestions(matched);
        index += 1;
      } else {
        clearInterval(interval);
        setTyping(false);
        setTimeout(() => {
          setCurrentPrompt((value) => (value + 1) % searchPrompts.length);
          setTyping(true);
          setQuery('');
          setSuggestions([]);
        }, 2600);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [currentPrompt, typing]);

  return (
    <div className="hero-card glass-panel hero-panel">
      <div className="hero-title hero-title-v2">
        <span className="small-label">Arix Tech</span>
        <h1>Software solutions for modern product teams</h1>
        <p className="hero-subtitle">
          We turn business ideas into polished online experiences, smart automation, and useful data tools that help brands grow.
        </p>
      </div>
      <div className="search-card">
        <div className="search-display search-display-large">
          <span className="search-text">{query}</span>
          <span className={`cursor ${typing ? 'cursor-active' : 'cursor-paused'}`}>|</span>
        </div>
        {suggestions.length > 0 && (
          <>
            {suggestions.map((suggestion, index) => (
              <div key={index} className="suggestion-item suggestion-pill">
                <strong>{query}</strong>{suggestion.slice(query.length)}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
