import Link from "next/link";
import { PostMetadata } from "./model/PostMetadata";
import { getImageMetadata, getSizedImage } from "./utils/image";
import './PostPreviewStyle.css';

const PostPreview = (props: PostMetadata) => {
  const year = new Date(props.date).getFullYear();
  const imageMetadata = getImageMetadata(props.previewImage, props.title);
  
  return (
    <Link href={`/posts/${year}/${props.slug}`} className="post-preview border block p-4 rounded-md shadow-md hover:bg-white">
      {getSizedImage(props.previewImage, [imageMetadata])}
      <p className="text-sm text-dirt mt-1">{props.date}</p>
      <h2 className="text-green-600 mt-1 text-lg">{props.title}</h2>
    </Link>
  )
}

export default PostPreview;