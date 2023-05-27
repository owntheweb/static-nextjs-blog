import ExportedImage from "next-image-export-optimizer";
import sizeOf from 'image-size';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { ImageMetadata } from "../model/ImageMetadata";

const getSizedImage = (imgSrc: string, contentImageMetadata: ImageMetadata[]): ReactElement => {
  const imageMetadataResults = contentImageMetadata.filter((contentImageMetadata: any) => contentImageMetadata.src === imgSrc);
  if (imageMetadataResults.length > 0) {
    return <ExportedImage
      src={imageMetadataResults[0].src}
      alt={imageMetadataResults[0].alt}
      width={imageMetadataResults[0].width}
      height={imageMetadataResults[0].height}
      sizes="100vw"
    />;
  }

  // TODO: not found image?
  // TODO: Not sure if this would ever be hit unless regex is silly, keep for now (could be the case!)
  return <ExportedImage
    src={imgSrc ?? ''}
    alt={''}
    width={1000}
    height={700}
    sizes="100vw"
  />;
}

const getContentImageMetadata = (content: string): ImageMetadata[] => {  
  // get image sizes
  //const iterator = content.matchAll(/\!\[.*]\((.*)\)/g);
  const iterator = content.matchAll(/!\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/g);
  
  let match: IteratorResult<RegExpMatchArray, any>;
  
  let contentImageMetadata:ImageMetadata[] = [];
  while (!(match = iterator.next()).done) {
    const src = match.value[1];
    const altMatch = match.value[0].match(/\[(.*?)\]/g);
    const altText = altMatch && altMatch[0] ? altMatch[0] : 'image';
    const alt = altText.replace(/[\[\]']+/g, '');

    try {
      const { width, height } = sizeOf(`public/${src}`);
      contentImageMetadata.push({
        src,
        width : width ? width : 1000,
        height: height ? height : 500,
        alt,
      });
    } catch (err) {
      console.error(`${src}: Unable to get image size.`, err);
      contentImageMetadata.push({
        src,
        width: 1000,
        height: 500,
        alt,
      });
    }
  }

  return contentImageMetadata;
}

export {
  getSizedImage,
  getContentImageMetadata,
}