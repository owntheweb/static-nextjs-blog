import { getPostMetadata, getPostContent } from '@/components/utils/posts';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { slugifyTag } from '@/components/utils/tags';
import { ImageMetadata } from '@/components/model/ImageMetadata';
import { getContentImageMetadata, getSizedImage } from '@/components/utils/image';
import './style.css';
import PreviousNextPosts from '@/components/PreviousNextPosts';


// TODO: Define generated image sizes in nextjs config when design is ready

export const generateStaticParams = async () => {
  const posts = getPostMetadata(true);
  return posts.map(post => ({
    slug: post.slug
  }));
};

interface PostParams {
  slug: string,
  year: number,
}

interface PostProps {
  params: PostParams,
}

const Post = (props: PostProps) => {  
  const slug = props.params.slug;
  const post = getPostContent(props.params.year, slug);
  const contentImageMetadata: ImageMetadata[] = getContentImageMetadata(post.content) ?? [];

  const tagNav = <section role="navigation">
    <h3 className="text-2xl mb-2 text-creamcicle">Topics</h3>
    <ul role="navigation" className="flex flex-wrap">
      {post.data.tags.map((tag: string) => {
        return (
          <li>
            <Link href={`/topics/${slugifyTag(tag)}`} className="mr-4 hover:underline md:mr-6 text-cream">{tag}</Link>
          </li>
        )
      })}
    </ul>
  </section>;
  
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl text-creamcicle">{post.data.title}</h1>
        <p className="text-cream mt-2">{post.data.date}</p>
      </div>
      <article className="prose mb-4 post p-4 rounded-md shadow-md bg-cream" style={{ maxWidth: 'inherit' }}>
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
      {<PreviousNextPosts {...post} />}
      {tagNav}
    </>
  )
};

export default Post;