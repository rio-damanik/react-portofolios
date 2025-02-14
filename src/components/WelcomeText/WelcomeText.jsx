import React, { useState, useEffect } from 'react';
import './WelcomeText.css';

const WelcomeText = () => {
  const [displayedText, setDisplayedText] = useState('');
  const welcomeText = "WELCOME IN MY  ";  
  const highlightText = "PORTOFOLIO";
  const fullText = welcomeText + highlightText;

  // Timing constants in milliseconds
  const CHAR_DELAY = 300;  // 0.5 seconds between characters
  const PHRASE_DELAY = 2000;  // 2 seconds between phrases

  useEffect(() => {
    let timeoutId;
    let charIndex = 0;

    const typeNextChar = () => {
      if (charIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex));
        charIndex++;
        timeoutId = setTimeout(typeNextChar, CHAR_DELAY);
      } else {
        // Reset after 2 seconds
        timeoutId = setTimeout(() => {
          charIndex = 0;
          setDisplayedText('');
          typeNextChar();
        }, PHRASE_DELAY);
      }
    };

    typeNextChar();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

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
