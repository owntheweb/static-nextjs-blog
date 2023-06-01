import Link from 'next/link';
import { getPostMetadata } from '@/components/utils/posts';
import { getAllPostTags, getSortedTags, slugifyTag } from '@/components/utils/tags';
import { Roboto_Slab } from 'next/font/google';

const robertoSlab = Roboto_Slab({ subsets: ['latin'] });


export const metadata = {
  title: 'Topics'
}

export default function Posts() {
  const postMetadata = getPostMetadata(true);

  // Any posts before Woodstock will be an anomaly.
  const targetSinceDate = new Date('1969-08-15');
  targetSinceDate.setFullYear(targetSinceDate.getFullYear() - 1);
  
  const allPostTags = getAllPostTags(postMetadata, targetSinceDate);
  const sortedTags = getSortedTags(allPostTags, 1000);

  const tagGrid = sortedTags.map(tag => {
    return (
      <Link href={`/topics/${slugifyTag(tag[0])}`} className="post-preview border block p-4 rounded-md shadow-md hover:bg-white">
        <h2 className="text-green-700 hover:underline">{tag[0]} ({tag[1]})</h2>
      </Link>
    );
  });

  return (
    <>
      <div className="mb-4">
        <h1 className={`text-2xl text-creamcicle ${robertoSlab.className}`}>Topics</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tagGrid}
      </div>
    </>
  )
}
