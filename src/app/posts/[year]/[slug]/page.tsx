import { getPostMetadata, getPostContent } from '@/components/utils/posts';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { slugifyTag } from '@/components/utils/tags';
import { ImageMetadata } from '@/components/model/ImageMetadata';
import {
    getContentImageMetadata,
    getImageMetadata,
    getSizedImage,
} from '@/components/utils/image';
import PreviousNextPosts from '@/components/PreviousNextPosts';
import { Roboto_Slab } from 'next/font/google';
import { Metadata, ResolvingMetadata } from 'next';
import {
    addBaseUrl,
    getDescriptionFromMarkdown,
    makeMetadata,
} from '@/components/utils/headerMeta';
import Slideshow from '@/components/Slideshow';
import { ImgSrcAlt } from '@/components/model/ImgSrcAlt';
import EmbeddedFrame from '@/components/EmbeddedFrame';
import './prose.css';

type PostParams = Promise<{
    slug: string;
    year: string;
}>;

export async function generateMetadata({ params }: { params: PostParams }): Promise<Metadata> {
    const { year, slug } = await params;
    const contentUrl = addBaseUrl(`/posts/${year}/${slug}`);
    const contentGrayMatter = getPostContent(year, slug);
    const description = getDescriptionFromMarkdown(contentGrayMatter.content);
    const title = `${contentGrayMatter.data.title} | Christopher Stevens`;

    return makeMetadata({
        title,
        description: description,
        keywords: [...contentGrayMatter.data.tags],
        openGraph: {
            title,
            description: description,
            images: [addBaseUrl(contentGrayMatter.data.previewImage)],
            url: contentUrl,
        },
    });
}

const robertoSlab = Roboto_Slab({ subsets: ['latin'] });

export const generateStaticParams = async () => {
    const posts = getPostMetadata(true);
    return posts.map((post) => ({
        slug: post.slug,
        year: new Date(post.date).getFullYear().toString(),
    }));
};

const Post = async  ({ params }: { params: PostParams }) => {
    const {slug, year} = await params;
    
    const post = getPostContent(year, slug);
    const contentImageMetadata: ImageMetadata[] =
        getContentImageMetadata(post.content) ?? [];

    const tagNav = (
        <section role="navigation">
            <h3
                className={`text-2xl mb-2 text-creamcicle ${robertoSlab.className}`}
            >
                Topics
            </h3>
            <ul role="list" className="flex flex-wrap">
                {post.data.tags.map((tag: string) => {
                    return (
                        <li key={tag}>
                            <Link
                                href={`/topics/${slugifyTag(tag)}`}
                                className="mr-4 hover:underline md:mr-6 text-cream"
                            >
                                {tag}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );

    // Normally I would generate the sized images from within the Slideshow component. However, in this static
    // generated site, the slideshow needs "use client" in order to make use of React state/hooks, killing
    // items requiring server/markdown lookups. Bring in that dynamic data here instead.
    const getSlideshow = (images: ImgSrcAlt[]) => {
        const slideImageMetadata: ImageMetadata[] = images.map((image) =>
            getImageMetadata(image.src, image.alt)
        );
        const slideSizedImages = slideImageMetadata.map((imageMeta) =>
            getSizedImage(imageMeta.src, [imageMeta])
        );
        return <Slideshow images={slideSizedImages} />;
    };

    return (
        <div id="main" role="main" className="max-w-[44rem]">
            <div className="4">
                <h1
                    className={`text-2xl text-creamcicle mb-4 ${robertoSlab.className}`}
                >
                    {post.data.title}
                </h1>
            </div>
            <article
                className="prose mb-4 post p-4 rounded-md shadow-md bg-cream"
                style={{ maxWidth: 'inherit' }}
            >
                {post?.data?.slides && getSlideshow(post.data.slides)}
                {post?.data?.embeddedContent && (
                    <EmbeddedFrame
                        title={post?.data?.embeddedContent?.title}
                        url={post?.data?.embeddedContent?.url}
                        height={post?.data?.embeddedContent.height ?? 500}
                    />
                )}
                <ReactMarkdown
                    components={{
                        img: (imgProps) =>
                            getSizedImage(
                                imgProps.src ?? '',
                                contentImageMetadata
                            ),
                    }}
                >
                    {post.content}
                </ReactMarkdown>
                <p className="text-dirt">Posted: {post.data.date}</p>
            </article>
            {<PreviousNextPosts {...post} />}
            {tagNav}
        </div>
    );
};

export default Post;
