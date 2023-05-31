import { getPostMetadata, getPostContent } from '@/components/utils/posts';
import PostPreview from '@/components/PostPreview';
import Link from 'next/link';
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
  const topPostPreview = postMetadata.slice(0, 1).map(post => (
    <PostPreview key={post.slug} {...post} />
  ));
  const postPreviews = postMetadata.slice(1, 5).map(post => (
    <PostPreview key={post.slug} {...post} />
  ));

  const year = new Date(postMetadata[0].date).getFullYear();
  const latestPostContent = getPostContent(year, postMetadata[0].slug);
  const latestPostImageMetadata: ImageMetadata[] = getContentImageMetadata(latestPostContent.content) ?? [];
  
  return (
    <>
      <h3 className="text-2xl text-creamcicle mb-4">Recent Posts</h3>

      {topPostPreview}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {postPreviews}
      </div>

      <div>
        <Link href="/posts" className="hover:underline text-cream">See All Posts</Link>
      </div>
    </>
  )
}
