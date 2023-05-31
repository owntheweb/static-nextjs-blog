import matter from "gray-matter";
import { PostMetadata } from "./model/PostMetadata";
import { getPostMetadata } from "./utils/posts";
import PostPreview from "./PostPreview";

const PreviousNextPosts = (props: matter.GrayMatterFile<string>) => {

  // Thanks GPT-4!
  const getPreviousPost = (current: PostMetadata, sortedPosts: PostMetadata[]): PostMetadata | null => {
    const currentIndex = sortedPosts.findIndex(post => post.date === current.date);
    
    if (currentIndex === -1 || currentIndex + 1 >= sortedPosts.length) {
      return null;
    }
  
    return sortedPosts[currentIndex + 1];
  }
  
  // Thanks GPT-4!
  const getNextPost = (current: PostMetadata, sortedPosts: PostMetadata[]): PostMetadata | null => {
    const currentIndex = sortedPosts.findIndex(post => post.date === current.date);
  
    if (currentIndex <= 0) {
      return null;
    }
  
    return sortedPosts[currentIndex - 1];
  }
  
  // This line might be too much, not needed:
  const currentPostMetadata:PostMetadata = {
    title: props.data.title,
    date: props.data.date,
    slug: props.data.slug,
    previewImage: props.data.previewImage,
    type: props.data.type,
    tags: props.data.tags,
  }
  const posts = getPostMetadata(true);
  const previousPost = getPreviousPost(currentPostMetadata, posts);
  const nextPost = getNextPost(currentPostMetadata, posts);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {previousPost && (
          <h3 className="hidden lg:visible text-2xl mb-2 text-creamcicle">Previous Post</h3>
        )}
        {!previousPost && (
          <h3 className="hidden lg:visible text-2xl mb-2 text-creamcicle">The Beginning...</h3>
        )}
        {nextPost && (
          <h3 className="hidden lg:visible text-2xl mb-2 text-creamcicle">Next Post</h3>
        )}
        {!nextPost && (
          <h3 className="hidden lg:visible text-2xl mb-2 text-creamcicle">The Future Awaits...</h3>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {previousPost && (
          <PostPreview {...previousPost} />
        )}
        {!previousPost && (
          <div className="hidden md:block p-4 rounded-md shadow-md bg-[#482627]"></div>
        )}
        {nextPost && (
          <PostPreview {...nextPost} />
        )}
        {!nextPost && (
          <div className="hidden md:block p-4 rounded-md shadow-md bg-[#482627]"></div>
        )}
      </div>
    </>
  )
}

export default PreviousNextPosts;