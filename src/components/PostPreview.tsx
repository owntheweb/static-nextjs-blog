import Link from "next/link";
import { PostMetadata } from "./model/PostMetadata";
import { getImageMetadata, getSizedImage } from "./utils/image";

const PostPreview = (props: PostMetadata) => {
  const year = new Date(props.date).getFullYear();
  const imageMetadata = getImageMetadata(props.previewImage, props.title);
  
  return (
    <div className="border border-slate-300 p-4 rounded-md shadow-sm bg-white">
      <Link href={`/posts/${year}/${props.slug}`} >
        {getSizedImage(props.previewImage, [imageMetadata])}
      </Link>
      <p className="text-sm text-slate-400">{props.date}</p>
      <Link href={`/posts/${year}/${props.slug}`} >
        <h2 className="text-violet-600 hover:underline mb-4">{props.title}</h2>
      </Link>
    </div>
  )
}

export default PostPreview;