"use client"

import TopNav from "./TopNav";
import TypingEffect from "./TypingEffect";

const HomeHeader = () => {  
  // story by GPT-4
  const story = 'Chris, a web developer, decided to create a blog that served as a mental card catalogue for his thoughts and experiences. This blog would be an extension of his mind, helping him document and process ideas. Over time, the blog would become a valuable resource for others in the web development community to learn and grow.     --GPT-4 ';
  
  return (
    <header className="lg:pb-6 mb-8">
      <TopNav />
      <div className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] xl:h-[430px] mx-auto lg:max-w-4xl pt-8 pl-4 invisible md:visible">
        <TypingEffect
          story={story}
          className="text-green-400 drop-shadow-[0_3px_3px_rgba(21,128,61,2.0)]"
          startOnClick={true}
        />
      </div>
    </header>
  )
}

export default HomeHeader;