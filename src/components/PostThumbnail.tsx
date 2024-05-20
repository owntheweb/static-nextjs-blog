import Link from 'next/link';
import { PostMetadata } from './model/PostMetadata';
import { getImageMetadata, getSizedImage } from './utils/image';

const PostThumbnail = (props: PostMetadata) => {
    const year = new Date(props.date).getFullYear();
    const imageMetadata = getImageMetadata(props.previewImage, props.title);

    return (
        <Link
            href={`/posts/${year}/${props.slug}`}
            className="post-thumbnail border block p-2 rounded-md hover:bg-white bg-[#f8f2e3] border-[#c3bdae]"
        >
            {getSizedImage(props.previewImage, [imageMetadata])}
        </Link>
    );
};

export default PostThumbnail;
