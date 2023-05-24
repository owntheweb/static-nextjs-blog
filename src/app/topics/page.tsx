import Link from 'next/link';
import getPostMetadata from '@/components/utils/getPostMetadata';
import { getAllPostTags, getSortedTags, slugifyTag } from '@/components/utils/tags';


export const metadata = {
  title: 'Topics'
}

export default function Posts() {
  const postMetadata = getPostMetadata();

  // Any posts before Woodstock will be an anomaly.
  const targetSinceDate = new Date('1969-08-15');
  targetSinceDate.setFullYear(targetSinceDate.getFullYear() - 1);
  
  const allPostTags = getAllPostTags(postMetadata, targetSinceDate);
  const sortedTags = getSortedTags(allPostTags, 1000);

  const tagGrid = sortedTags.map(tag => {
    return (
      <div className="border border-slate-300 p-4 rounded-md shadow-sm bg-white">
        <Link href={`/topics/${slugifyTag(tag[0])}`}>
          <h2 className="text-violet-600 hover:underline mb-4">{tag[0]} ({tag[1]})</h2>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="my-12">
        <h1 className="text-2xl text-slate-600">Topics</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tagGrid}
      </div>
    </>
  )
}
