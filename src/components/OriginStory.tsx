"use client"
/**
 * GPT-4 created the short story and a bulk of the functionality for this component in pure JavaScript.
 * It was altered a bit (wasn't perfect yet mostly there), then moved to a React component.
 * See:
 * - ai-efforts/gpt-4/home-page-typing-effect.md
 * - ai-efforts/gpt-4/typing-effect-demo1.html
 * - ai-efforts/gpt-4/typing-effect-demo2.html
 * - ai-efforts/gpt-4/typing-effect-demo3.html
 * - ai-efforts/gpt-4/typing-effect-demo4-manual-updates.html
*/

import React, { ReactElement, useEffect, useState } from 'react';
import { Roboto_Slab } from 'next/font/google';
import './OriginStoryStyle.css';

interface OriginStoryProps {
  className: string,
}

const robertoSlab = Roboto_Slab({ subsets: ['latin'] });

const OriginStory = ({ className }: OriginStoryProps) => {
  const [originStoryContent, setOriginStoryContent] = useState<ReactElement[]>([]);

  useEffect(() => {
    const story = `Chris, a web developer, decided to create a blog that served as a mental card catalogue for his thoughts and experiences. This blog would be an extension of his mind, helping him document and process ideas. Over time, the blog would become a valuable resource for others in the web development community to learn and grow. --GPT-4`;

    const characterLimit = 40;
    const linesLimit = 4;
    const originStory: ReactElement[] = [];

    const storyLines = story
      .split(' ')
      .reduce((accumulator, word) => {
        if (
          accumulator[accumulator.length - 1].length + word.length + 1 <=
          characterLimit
        ) {
          accumulator[accumulator.length - 1] += ` ${word}`;
        } else {
          accumulator.push(word);
        }
        return accumulator;
      }, [''])

    let currentLine = 0;
    let currentChar = 0;

    function typing() {
      if (currentLine < storyLines.length) {
        if (currentChar === 0) {
          originStory.push(<div></div>);
        }

        const contentDivIndex = currentLine < linesLimit ? currentLine % linesLimit : originStory.length - 1;

        const textContent =
          storyLines[currentLine].substr(0, currentChar + 1);

          if (currentChar < storyLines[currentLine].length || currentLine === storyLines.length - 1 ? '█' : '') {
            const cursorSpan = <span className="cursor">█</span>;
            originStory[contentDivIndex] = <div>
              {textContent}
              {cursorSpan}
            </div>;
          }

        currentChar++;

        if (currentChar > storyLines[currentLine].length) {
          currentLine++;
          currentChar = 0;   
          
          if (currentLine >= linesLimit && currentLine < storyLines.length) {
            originStory.unshift();
          }
        }

        setOriginStoryContent(originStory);
        setTimeout(typing, Math.random() * 100 + 50);
      }
    }

    typing();
  }, []);

  return (
    <div className={`originStory ${className} ${robertoSlab.className}`}>
      {<>
        {originStoryContent.map(storyLine => storyLine)}
      </>}
    </div>
  )
}

export default OriginStory;