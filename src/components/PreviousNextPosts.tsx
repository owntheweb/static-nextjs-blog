import matter from "gray-matter";
import { PostMetadata } from "./model/PostMetadata";
import { getPostMetadata } from "./utils/posts";
import PostPreview from "./PostPreview";
import { slugifyTag } from "./utils/tags";

const PreviousNextPosts = (props: matter.GrayMatterFile<string>) => {

  // Thanks GPT-4!
  const getPreviousPost = (current: PostMetadata, sortedPosts: PostMetadata[]): PostMetadata | null => {
    const currentIndex = sortedPosts.findIndex(post => post.slug === current.slug && post.date === current.date);
    
    if (currentIndex === -1 || currentIndex + 1 >= sortedPosts.length) {
      return null;
    }
  
    return sortedPosts[currentIndex + 1];
  }
  
  // Thanks GPT-4!
  const getNextPost = (current: PostMetadata, sortedPosts: PostMetadata[]): PostMetadata | null => {
    const currentIndex = sortedPosts.findIndex(post => post.slug === current.slug && post.date === current.date);
  
    if (currentIndex <= 0) {
      return null;
    }
  
    return sortedPosts[currentIndex - 1];
  }
  
  // This line might be too much, not needed:
  const currentPostMetadata:PostMetadata = {
    title: props.data.title,
    date: props.data.date,
    slug: slugifyTag(props.data.title),
    previewImage: props.data.previewImage,
    type: props.data.type,
    tags: props.data.tags,
  }
  const posts = getPostMetadata(true);
  const previousPost = getPreviousPost(currentPostMetadata, posts);
  const nextPost = getNextPost(currentPostMetadata, posts);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {previousPost && (
          <PostPreview {...previousPost} />
        )}
        {!previousPost && (
          <div className="hidden md:flex p-4 rounded-md shadow-md bg-mudraised text-creamcicle items-center justify-center">This panel intentionally left blank</div>
        )}
        {nextPost && (
          <PostPreview {...nextPost} />
        )}
        {!nextPost && (
          <div className="hidden md:flex p-4 rounded-md shadow-md bg-mudraised text-creamcicle items-center justify-center">This panel intentionally left blank</div>
        )}
      </div>
    </>
  )
}

export default PreviousNextPosts;