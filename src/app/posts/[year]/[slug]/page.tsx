import { getPostMetadata, getPostContent } from '@/components/utils/posts';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { slugifyTag } from '@/components/utils/tags';
import { ImageMetadata } from '@/components/model/ImageMetadata';
import { getContentImageMetadata, getSizedImage } from '@/components/utils/image';


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
    <h3 className="text-lg text-slate-600 mb-2">Topics</h3>
    <ul role="navigation" className="flex flex-wrap">
      {post.data.tags.map((tag: string) => {
        return (
          <li>
            <Link href={`/topics/${slugifyTag(tag)}`} className="mr-4 hover:underline md:mr-6">{tag}</Link>
          </li>
        )
      })}
    </ul>
  </section>;
  
  return (
    <>
      <div className="my-12">
        <h1 className="text-2xl text-slate-600">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>
      <article className="prose mb-12">
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
      {tagNav}
    </>
  )
};

export default Post;