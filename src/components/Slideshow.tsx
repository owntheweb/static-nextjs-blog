"use client"

import { useState } from "react";
import { SlideshowProps } from "./model/SlideshowProps";

const Slideshow = ({ className, images }: SlideshowProps) => {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage(activeImage < images.length - 1 ? activeImage + 1 : 0);
  }

  const previousImage = () => {
    setActiveImage(activeImage > 0 ? activeImage - 1 : images.length - 1);
  }

  return (
    <div className={`slideshow w-100 bg-white text-white relative select-none mb-5`}>
      <div className={`${className} h-full items-center justify-center flex`}>
        {images[activeImage]}
      </div>
      <div className="absolute top-0 right-0 w-full h-full flex">

        <div
          className="group/left h-full w-10 flex-none cursor-pointer flex items-center justify-center"
          onClick={previousImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 opacity-70 group-hover/left:opacity-100 drop-shadow-[0_1px_1px_rgba(0,0,0,1.0)] select-none"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>

        <div className="flex-1"></div>

        <div
          className="group/right h-full w-10 flex-none cursor-pointer flex items-center justify-center"
          onClick={nextImage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 opacity-70 group-hover/right:opacity-100 drop-shadow-[0_1px_1px_rgba(0,0,0,1.0)] select-none"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>

      </div>
    </div>
  )
}

export default Slideshow;