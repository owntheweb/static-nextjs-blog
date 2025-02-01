import Link from "next/link";
import { PostMetadata } from "./model/PostMetadata";
import { getImageMetadata, getSizedImage } from "./utils/image";

const PostPreview = (props: PostMetadata) => {
  const year = new Date(props.date).getFullYear();
  const imageMetadata = getImageMetadata(props.previewImage, props.title);
  
  return (
    <Link href={`/posts/${year}/${props.slug}`} className="group bg-cream hover:bg-white border block p-4 rounded-md shadow-md">
      {getSizedImage(props.previewImage, [imageMetadata])}
      <p className="text-sm text-dirt mt-1">{props.date}</p>
      <h2 className="group-hover:underline text-green-600 mt-1 text-lg">{props.title}</h2>
    </Link>
  )
}

export default PostPreview;