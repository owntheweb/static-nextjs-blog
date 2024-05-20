import PostPreview from '@/components/PostPreview';
import { PostMetadata } from '@/components/model/PostMetadata';
import Link from 'next/link';

const AdditionalActivity = () => {
    const postPreviews: PostMetadata[] = [
        {
            title: 'Blog Relaunch Inspired and Assisted by AI',
            date: '2023-06-06',
            slug: 'blog-relaunch-inspired-and-assisted-by-ai',
            previewImage: '/images/dude-best-designs-ever.jpg',
            type: 'Blog',
            tags: [],
        },
        {
            title: 'My New Favorite Mug',
            date: '2023-05-19',
            slug: 'my-new-favorite-mug',
            previewImage: '/images/new-favorite-mug.jpg',
            type: 'Blog',
            tags: [],
        },
        {
            title: 'Create Videos With React',
            date: '2023-08-24',
            slug: 'create-videos-with-react',
            previewImage: '/images/tea-time-lady-photoshop-generative-fill.png',
            type: 'Blog',
            tags: [],
        },
        {
            title: 'VR-Ready Stereo Pairs and Gifs From Library of Congress Stereocard Collection',
            date: '2023-08-02',
            slug: 'vr-ready-stereo-pairs-and-gifs-from-library-of-congress-stereocard-collection',
            previewImage: '/images/stererocard-to-vr-stereo-pair.jpg',
            type: 'Blog',
            tags: [],
        },
    ];

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                {postPreviews.map((post) => (
                    <PostPreview key={post.slug} {...post} />
                ))}
            </div>

            <div>
                <Link href="/posts" className="hover:underline text-cream">
                    See All Posts
                </Link>
            </div>
        </>
    );
};

export default AdditionalActivity;
