import Link from 'next/link';
import { getPostMetadata } from '@/components/utils/posts';
import PostPreview from '@/components/PostPreview';

export const metadata = {
  title: 'Posts'
}

interface YearPostsParams {
  year: number,
}

interface YearPostsProps {
  params: YearPostsParams,
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata(false);
  return posts.map(post => ({
    year: new Date(post.date).getFullYear().toString()
  }));
};

export default function YearPosts(props: YearPostsProps) {
  const postMetadata = getPostMetadata(false);
  
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
      <div className="mb-6">
        <h1 className="text-2xl text-creamcicle">Posts: {props.params.year}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {postPreviews}
      </div>
      <div>
        <Link href={`/posts`} className="hover:underline text-white">See All Posts</Link>
      </div>
    </>
  )
}
