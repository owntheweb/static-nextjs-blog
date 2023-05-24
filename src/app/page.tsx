import getPostMetadata from '@/components/utils/getPostMetadata';
import PostPreview from '@/components/PostPreview';

/*
// TODO: Fill metadata in referencing:
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata = {
  title: 'This is a blog',
  description: 'Let\'s get this thing started.',
}
*/

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map(post => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {postPreviews}
    </div>
  )
}
