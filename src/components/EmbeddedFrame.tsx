import { EmbeddedFrameProps } from "./model/EmbeddedFrameProps";


const EmbeddedFrame = ({ className, url, height, title}: EmbeddedFrameProps) => {

  return (
    <iframe
      src={url}
      className={`slideshow w-100 bg-white text-white relative select-none mb-5 border-none ${className}`}
      title={title}
      allow="autoplay"
      height={height}
      width="100%"
    />
  )
}

export default EmbeddedFrame;
