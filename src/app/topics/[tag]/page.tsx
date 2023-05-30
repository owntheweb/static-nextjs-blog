import Link from 'next/link';
import { getPostMetadata } from '@/components/utils/posts';
import PostPreview from '@/components/PostPreview';
import { slugifyTag } from '@/components/utils/tags';

export const metadata = {
  title: 'Posts'
}

interface TagPostParams {
  tag: string,
}

interface TagPostsProps {
  params: TagPostParams,
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata(true);
  return posts.map(post => ({
    tags: post.tags
  }));
};

export default function TagPosts(props: TagPostsProps) {
  const postMetadata = getPostMetadata(true);
  const taggedPosts = postMetadata.filter(post => {
    const slugifiedTags = post.tags.map(tag => slugifyTag(tag));
    return slugifiedTags.includes(props.params.tag);
  });

  const unsluggedTag = taggedPosts[0].tags
    .filter(tag => slugifyTag(tag) === props.params.tag)[0];

  const postPreviews = taggedPosts.map(post => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl text-creamcicle">Topics: {unsluggedTag}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {postPreviews}
      </div>
      <div>
        <Link href={`/topics`} className="hover:underline text-cream">See All Topics</Link>
      </div>
    </>
  )
}
