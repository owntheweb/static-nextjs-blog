import Link from 'next/link';
import { getPostMetadata } from '@/components/utils/posts';
import PostPreview from '@/components/PostPreview';
import { slugifyTag } from '@/components/utils/tags';
import { Roboto_Slab } from 'next/font/google';
import { Metadata, ResolvingMetadata } from 'next';
import { addBaseUrl, makeMetadata } from '@/components/utils/headerMeta';

type TagParams = Promise<{
    tag: string;
}>;

const robertoSlab = Roboto_Slab({ subsets: ['latin'] });

export async function generateMetadata({ params }: { params: TagParams }): Promise<Metadata> {
    const { tag } = await params;
    const title = `Topics: ${tag} | Christopher Stevens`;
    const description = `Follow the adventures of Christopher stevens for the topic, ${tag}`;
    const contentUrl = addBaseUrl(`/topics/${slugifyTag(tag)}`);

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

type TagPostParams = Promise<{
    tag: string;
}>

export const generateStaticParams = async () => {
    const posts = getPostMetadata(false);
    const tags: string[] = posts
        .map((post) => post.tags)
        .flat(2)
        .sort()
        .filter(function (item, pos, ary) {
            return !pos || item != ary[pos - 1];
        });
    return tags.map((tag) => ({
        tag: slugifyTag(tag),
    }));
};

export default async function TagPosts({ params }: {params: TagPostParams }) {
    const { tag } = await params;
    
    const postMetadata = getPostMetadata(true);
    const taggedPosts = postMetadata.filter((post) => {
        const slugifiedTags = post.tags.map((tag) => slugifyTag(tag));
        return slugifiedTags.includes(tag);
    });

    const unsluggedTag = taggedPosts[0].tags.filter(
        (tag) => slugifyTag(tag) === tag
    )[0];

    const postPreviews = taggedPosts.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));

    return (
        <div id="main" role="main">
            <div className="mb-4">
                <h1
                    className={`text-2xl text-creamcicle ${robertoSlab.className}`}
                >
                    Topics: {unsluggedTag}
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {postPreviews}
            </div>
            <div>
                <Link href={`/topics`} className="hover:underline text-cream">
                    See All Topics
                </Link>
            </div>
        </div>
    );
}
