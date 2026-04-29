import { useEffect, useState } from 'react';

export function useTypewriter(words, speed = 60, pause = 1200) {
  const [text, setText] = useState('');

  useEffect(() => {
    let isMounted = true;
    let currentWord = 0;
    let currentIndex = 0;
    let timeoutId;

    const typeNext = () => {
      const word = words[currentWord];
      if (!isMounted) return;

      if (currentIndex <= word.length) {
        setText(word.slice(0, currentIndex));
        currentIndex += 1;
        timeoutId = window.setTimeout(typeNext, speed);
      } else {
        timeoutId = window.setTimeout(() => {
          currentWord = (currentWord + 1) % words.length;
          currentIndex = 0;
          typeNext();
        }, pause);
      }
    };

    typeNext();

    return () => {
      isMounted = false;
      window.clearTimeout(timeoutId);
    };
  }, [pause, speed, words]);

  return text;
}
