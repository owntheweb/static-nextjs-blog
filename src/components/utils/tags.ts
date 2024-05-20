import { PostMetadata } from '../model/PostMetadata';
import { TagCount } from '../model/TagCount';

// thanks: https://www.30secondsofcode.org/js/s/string-to-slug/
const slugifyTag = (tag: string): string => {
    return tag
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

const getAllPostTags = (postMetaData: PostMetadata[], since: Date) => {
    return postMetaData
        .filter((post) => new Date(post.date) > since)
        .map((post) => post.tags);
};

const getSortedTags = (
    allPostTags: string[][],
    count: number
): [string, number][] => {
    const tagCounts: TagCount = {};
    allPostTags.forEach((tags) => {
        tags.forEach((tag) => {
            tagCounts[tag] = tagCounts[tag] ? tagCounts[tag] + 1 : 1;
        });
    });

    return Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, count);
};

export { slugifyTag, getAllPostTags, getSortedTags };
