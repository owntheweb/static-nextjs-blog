import React, { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  className: string,
  story: string,
  initialDelay: number,
}

const TypingEffect = ({ className, story, initialDelay = 0 }: TypingEffectProps) => {
  const [text, setText] = useState('');
  const [cursor, setCursor] = useState(true);
  const maxCharsPerLine = 30;
  const maxLines = 4;
  const typingSpeed = Math.random() * 50 + 30;

  const storyRef = useRef(0);

  // minor edit: convert to TypeScript (forgot to ask)
  const blinkCursor = () => {
    setTimeout(() => setCursor(!cursor), 700);
  };

  const typeText = () => {
    if (storyRef.current < story.length) {
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
  };

  useEffect(() => {
    blinkCursor();
  }, [cursor]);

  useEffect(() => {
    setTimeout(typeText, initialDelay);
  }, []);

  return (
    <div className={className} style={{ whiteSpace: 'pre-wrap' }}>
      {text}
      <span style={{ opacity: cursor ? 1 : 0, transition: 'opacity 250ms' }}>█</span>
    </div>
  );
};

export default TypingEffect;