import { getPostMetadata } from '@/components/utils/posts';
import PostPreview from '@/components/PostPreview';
import { Roboto_Slab } from 'next/font/google';
import { Metadata } from 'next';
import { addBaseUrl, makeMetadata } from '@/components/utils/headerMeta';

const robertoSlab = Roboto_Slab({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
    const title = `Posts | Christopher Stevens`;
    const description = `Follow the adventures of Christopher stevens.`;
    const contentUrl = addBaseUrl(`/posts`);

    return makeMetadata({
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            images: [addBaseUrl('/images/ai-me.jpg')],
            url: contentUrl,
        },
    });
}

export default function Posts() {
    const postMetadata = getPostMetadata(true);
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));

    return (
        <div id="main" role="main">
            <div className="mb-4">
                <h1
                    className={`text-2xl text-creamcicle ${robertoSlab.className}`}
                >
                    Posts
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {postPreviews}
            </div>
        </div>
    );
}
