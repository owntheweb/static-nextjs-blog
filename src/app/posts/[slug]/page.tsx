import getPostMetadata from '@/components/getPostMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import sizeOf from 'image-size';
import ReactMarkdown from 'react-markdown';
import ExportedImage from "next-image-export-optimizer";


// TODO: Define generated image sizes in nextjs config when design is ready

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map(post => ({
    slug: post.slug
  }));
};

const getPostContent = (slug:string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const grayMatter = matter(content);
  return grayMatter;
}

interface ImageMetadata {
  src: string,
  width: number,
  height: number,
  alt: string,
}

// TODO: no any
const getContentImageMetadata = (content: string): ImageMetadata[] => {
  // get image sizes
  const iterator = content.matchAll(/\!\[.*]\((.*)\)/g);
  
  let match: IteratorResult<RegExpMatchArray, any>;
  
  let contentImageMetadata:any = [];
  while (!(match = iterator.next()).done) {
    const src = match.value[1];
    const altMatch = match.value[0].match(/\[(.*?)\]/g);
    const altText = altMatch && altMatch[0] ? altMatch[0] : 'image';
    const alt = altText.replace(/[\[\]']+/g, '');

    try {
      const { width, height } = sizeOf(`public/${src}`);
      contentImageMetadata.push({
        src,
        width,
        height,
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

// TODO: no any
const getSizedImage = (imgSrc: string, contentImageMetadata: any[]): any => {
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

const Post = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const contentImageMetadata: ImageMetadata[] = getContentImageMetadata(post.content) ?? [];
  
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600">This is a post: {slug}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>
      <article className="prose">
        <ReactMarkdown
          components={{
            img: (imgProps) => (
              // TODO: default src? (make typescript happy for now)
              getSizedImage(imgProps.src ?? '', contentImageMetadata)
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  )
};

export default Post;