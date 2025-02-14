import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './TextWrapper.css';

const TextWrapper = () => {
  const [displayedWord, setDisplayedWord] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const phrases = useMemo(() => [
    {
      prefix: "Experienced In ",
      word: "Manufacturing",
      type: "teal"
    },
    {
      prefix: "Transform into a ",
      word: "Developer",
      type: "purple"
    }
  ], []);

  const typeNextChar = useCallback((charIndex, currentPhrase, timeoutId) => {
    if (charIndex <= currentPhrase.word.length) {
      setDisplayedWord(currentPhrase.word.slice(0, charIndex));
      timeoutId.current = setTimeout(() => {
        typeNextChar(charIndex + 1, currentPhrase, timeoutId);
      }, 300);
    } else {
      // Wait 2 seconds before switching to next phrase
      timeoutId.current = setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setDisplayedWord('');
      }, 2000);
    }
  }, [phrases.length]);

  useEffect(() => {
    const timeoutId = { current: null };
    const currentPhrase = phrases[currentPhraseIndex];
    
    typeNextChar(0, currentPhrase, timeoutId);

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [currentPhraseIndex, typeNextChar, phrases]);

  const currentPhrase = phrases[currentPhraseIndex];

  return (
    <div className="text-wrapper">
      <div className="text-content">
        <span>{currentPhrase.prefix}</span>
        <span className={`highlight-${currentPhrase.type}`}>
          {displayedWord}
        </span>
      </div>
    </div>
  );
};

export default TextWrapper;
