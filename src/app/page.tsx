import { getPostMetadata, getPostContent } from '@/components/utils/posts';
import PostPreview from '@/components/PostPreview';
import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { getContentImageMetadata, getSizedImage } from '@/components/utils/image';
import { ImageMetadata } from '@/components/model/ImageMetadata';

/*
// TODO: Fill metadata in referencing:
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata = {
  title: 'This is a blog',
  description: 'Let\'s get this thing started.',
}
*/

export default function Home() {
  const postMetadata = getPostMetadata(true);
  const postPreviews = postMetadata.map(post => (
    <PostPreview key={post.slug} {...post} />
  ));

  const year = new Date(postMetadata[0].date).getFullYear();
  const latestPostContent = getPostContent(year, postMetadata[0].slug);
  const latestPostImageMetadata: ImageMetadata[] = getContentImageMetadata(latestPostContent.content) ?? [];
  
  // TODO: Consider a feature image in metadata.
  // For the moment, include first two paragraphs, which by cherished habit includes an image at the top.
  const firstTwoParagraphs = latestPostContent.content.trim().split('\n\n').slice(0, 2).join('\n\n');
  const topHighlight = (
    <article className="prose mb-6">
      <h2 className="text-xl text-slate-600 font-normal mb-2">{latestPostContent.data.title}</h2>
      <p className="text-slate-400">{latestPostContent.data.date}</p>
      <ReactMarkdown
        className="mb-4"
        components={{
          img: (imgProps) => (
            // TODO: default src? (make typescript happy for now)
            getSizedImage(imgProps.src ?? '', latestPostImageMetadata)
          ),
        }}
      >
        {firstTwoParagraphs}
      </ReactMarkdown>
      <div>
        <Link href={`/posts/${year}/${postMetadata[0].slug}`} className="hover:underline">See Full Post</Link>
      </div>
    </article>
  );
  return (
    <>
      <div className="my-6">
        <h1 className="text-2xl text-slate-600">Hello!</h1>
        <p className="text-slate-400 mt-2">Here's an intro thing.</p>
      </div>

      {topHighlight}

      <h3 className="text-lg text-slate-600 mb-4">More Happenings</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {postPreviews}
      </div>

      <div>
        <Link href="/posts" className="hover:underline">See All Posts</Link>
      </div>
    </>
  )
}
