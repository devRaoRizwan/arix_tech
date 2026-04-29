import { useEffect, useState } from 'react';

const searchScenes = [
  {
    query: 'I wish I had a website for my barber shop',
    suggestions: [
      'I wish I had online bookings for my barber shop',
      'I wish I could show my services for my barber shop',
      'I wish I could get more local clients for my barber shop',
    ],
  },
  {
    query: 'I wish I could show my products online for my boutique',
    suggestions: [
      'I wish I could launch a clean catalog for my boutique',
      'I wish I could sell faster online for my boutique',
      'I wish I could manage orders better for my boutique',
    ],
  },
  {
    query: 'I wish I could automate appointments for my clinic',
    suggestions: [
      'I wish I could send reminders for my clinic',
      'I wish I could organize patient requests for my clinic',
      'I wish I could reduce manual follow-ups for my clinic',
    ],
  },
  {
    query: 'I wish I could collect market data for my startup',
    suggestions: [
      'I wish I could track competitor pricing for my startup',
      'I wish I could scrape product trends for my startup',
      'I wish I could gather customer insights for my startup',
    ],
  },
];

function getLiveSuggestions(query, scene) {
  if (!query) {
    return [];
  }

  return [scene.query, ...scene.suggestions]
    .filter((item) => item.toLowerCase().startsWith(query.toLowerCase()))
    .slice(0, 3);
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typing, setTyping] = useState(true);

  const activeScene = searchScenes[currentIndex];
  const visibleSuggestions = Array.from({ length: 3 }, (_, index) => suggestions[index] ?? '');

  useEffect(() => {
    const fullQuery = activeScene.query;
    let timeoutId;

    if (!isDeleting) {
      setTyping(true);

      if (query.length < fullQuery.length) {
        timeoutId = window.setTimeout(() => {
          const nextQuery = fullQuery.slice(0, query.length + 1);
          setQuery(nextQuery);
          setSuggestions(getLiveSuggestions(nextQuery, activeScene));
        }, query.length < 10 ? 55 : 78);
      } else {
        setTyping(false);
        setSuggestions(activeScene.suggestions);
        timeoutId = window.setTimeout(() => {
          setIsDeleting(true);
          setTyping(true);
        }, 2200);
      }
    } else if (query.length > 0) {
      timeoutId = window.setTimeout(() => {
        const nextQuery = fullQuery.slice(0, query.length - 1);
        setQuery(nextQuery);
        setSuggestions(getLiveSuggestions(nextQuery, activeScene));
      }, 38);
    } else {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((value) => (value + 1) % searchScenes.length);
      }, 260);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [activeScene, currentIndex, isDeleting, query]);

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
        <div className="suggestions-stack" aria-hidden="true">
          {visibleSuggestions.map((suggestion, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className={`suggestion-item suggestion-pill ${suggestion ? 'suggestion-visible' : 'suggestion-hidden'}`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {suggestion}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
