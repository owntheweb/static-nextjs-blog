import { getPostMetadata } from '@/components/utils/posts';
import PostPreview from '@/components/PostPreview';

export const metadata = {
  title: 'Posts'
}

export default function Posts() {
  const postMetadata = getPostMetadata(true);
  const postPreviews = postMetadata.map(post => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <div className="my-12">
        <h1 className="text-2xl text-slate-600">Posts</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
    </>
  )
}
