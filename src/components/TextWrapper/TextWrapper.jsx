import React, { useState, useEffect } from 'react';
import './TextWrapper.css';

const TextWrapper = () => {
  const [displayedWord, setDisplayedWord] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const phrases = [
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
  ];

  useEffect(() => {
    let timeoutId;
    const currentPhrase = phrases[currentPhraseIndex];
    let charIndex = 0;

    const typeNextChar = () => {
      if (charIndex <= currentPhrase.word.length) {
        setDisplayedWord(currentPhrase.word.slice(0, charIndex));
        charIndex++;
        timeoutId = setTimeout(typeNextChar, 1000);
      } else {
        // Wait 3 seconds before switching to next phrase
        timeoutId = setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setDisplayedWord('');
        }, 3000);
      }
    };

    typeNextChar();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentPhraseIndex]);

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
