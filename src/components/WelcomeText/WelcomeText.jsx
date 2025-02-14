import React, { useState, useEffect, useCallback } from 'react';
import './WelcomeText.css';

const WelcomeText = () => {
  const [displayedText, setDisplayedText] = useState('');
  const welcomeText = "WELCOME IN MY  ";  
  const highlightText = "PORTOFOLIO";
  const fullText = welcomeText + highlightText;

  // Timing constants in milliseconds
  const CHAR_DELAY = 300;  // 0.3 seconds between characters
  const PHRASE_DELAY = 2000;  // 2 seconds between phrases

  const typeText = useCallback((charIndex, timeoutId) => {
    if (charIndex <= fullText.length) {
      setDisplayedText(fullText.slice(0, charIndex));
      timeoutId.current = setTimeout(() => {
        typeText(charIndex + 1, timeoutId);
      }, CHAR_DELAY);
    } else {
      // Reset after delay
      timeoutId.current = setTimeout(() => {
        setDisplayedText('');
        typeText(0, timeoutId);
      }, PHRASE_DELAY);
    }
  }, [fullText, CHAR_DELAY, PHRASE_DELAY]);

  useEffect(() => {
    const timeoutId = { current: null };
    typeText(0, timeoutId);

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [typeText]);

  const renderText = () => {
    const displayedNormalText = displayedText.slice(0, welcomeText.length);
    const displayedHighlightText = displayedText.slice(welcomeText.length);

    return (
      <>
        <span className="welcome-normal">{displayedNormalText}</span>
        <span className="welcome-highlight">{displayedHighlightText}</span>
      </>
    );
  };

  return (
    <div className="welcome-wrapper">
      <div className="welcome-content">
        {renderText()}
        <span className="cursor"></span>
      </div>
    </div>
  );
};

export default WelcomeText;
