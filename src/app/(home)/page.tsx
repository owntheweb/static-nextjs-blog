import { getPostMetadata, getPostContent } from '@/components/utils/posts';
import PostPreview from '@/components/PostPreview';
import Link from 'next/link';
import { Roboto_Slab } from 'next/font/google';

const robertoSlab = Roboto_Slab({ subsets: ['latin'] });

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
  
  return (
    <>
      <h3 className={`text-2xl text-creamcicle mb-4 ${robertoSlab.className}`}>Recent Posts</h3>

      {topPostPreview}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {postPreviews}
      </div>

      <div>
        <Link href="/posts" className="hover:underline text-cream">See All Posts</Link>
      </div>
    </>
  )
}
