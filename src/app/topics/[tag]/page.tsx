import Link from 'next/link';
import getPostMetadata from '@/components/utils/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import { slugifyTag } from '@/components/utils/tags';

export const metadata = {
  title: 'Posts'
}

// TODO: no any
export default function TagPosts(props: any) {
  const postMetadata = getPostMetadata();
  console.log(props);
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
      <div className="my-12">
        <h1 className="text-2xl text-slate-600">Posts: {unsluggedTag}</h1>
        <p className="text-slate-400 mt-2">Technically these are tags, yet have you ever played the game, Table Topics? So much more fun.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}
      </div>
    </>
  )
}
