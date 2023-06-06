import React, { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  className: string,
  story: string,
  initialDelay?: number,
  // I was running into browser throttling issues until a click happens after page load.
  // Having a cursor start telling a story after clicking on it sounds fun, curious and less distracting
  // on repeat visits.
  startOnClick?: boolean,
}

const TypingEffect = ({ className, story, initialDelay = 0, startOnClick = false }: TypingEffectProps) => {
  const [text, setText] = useState('');
  const [cursor, setCursor] = useState(true);
  const [typing, setTyping] = useState(false);
  const maxCharsPerLine = 30;
  const maxLines = 4;
  const typingSpeed = Math.random() * 40 + 40;

  const storyRef = useRef(0);

  // minor edit: convert to TypeScript (forgot to ask)
  const blinkCursor = () => {
    setTimeout(() => setCursor(!cursor), 900);
  };

  const typeText = () => {
    if (storyRef.current < story.length) {
      setTyping(true);
      let char = story[storyRef.current];
      setText((prevText) => {
        const lines = prevText.split('\n');
        
        if (lines[lines.length - 1].length >= maxCharsPerLine && char === ' ') {
          lines.push('');
        }
        
        if (lines.length > maxLines && char === ' ') {
          lines.shift();
        }

        lines[lines.length - 1] += char !== ' ' || lines[lines.length - 1].length !== 0 ? char : '';
        return lines.join('\n');
      });

      storyRef.current++;
      setTimeout(typeText, typingSpeed);
    }
    
    if (storyRef.current === story.length) {
      setTyping(false);
    }
  };

  useEffect(() => {
    blinkCursor();
  }, [cursor]);

  useEffect(() => {
    if (startOnClick === false) {
      setTimeout(typeText, initialDelay);
    }
  }, []);

  const handleClick = () => {
    if (startOnClick) {
      typeText();
    }
  }

  return (
    <div className={className} style={{ whiteSpace: 'pre-wrap' }}>
      {text}
      <span
        style={{ opacity: cursor || typing ? 1 : 0 }}
        onClick={handleClick}
        className={`transition-opacity duration-200 cursor-${!typing && startOnClick && storyRef.current !== story.length ? 'pointer' : 'auto'}`}
      >█</span>
    </div>
  );
};

export default TypingEffect;