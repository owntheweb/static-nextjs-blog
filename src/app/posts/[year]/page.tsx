import Link from 'next/link';
import getPostMetadata from '@/components/utils/getPostMetadata';
import PostPreview from '@/components/PostPreview';

export const metadata = {
  title: 'Posts'
}

export default function YearPosts(props: any) {
  const postMetadata = getPostMetadata();
  
  const postPreviews = postMetadata
    .filter(post => {
      const postDate = new Date(post.date);
      return postDate.getFullYear() === Number(props.params.year);
    })
    .map(post => (
      <PostPreview key={post.slug} {...post} />
    ));

  return (
    <>
      <div className="my-12">
        <h1 className="text-2xl text-slate-600">Posts: {props.params.year}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {postPreviews}
      </div>
      <div>
        <Link href={`/posts`} className="hover:underline">See All Posts</Link>
      </div>
    </>
  )
}
