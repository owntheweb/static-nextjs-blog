import Link from "next/link";
import { getPostMetadata } from "./utils/posts";
import { slugifyTag, getAllPostTags, getSortedTags } from "./utils/tags";
import { GeneralComponentProps } from "./model/GeneralComponentProps";
import { PostMetadata } from "./model/PostMetadata";
import { Roboto_Slab } from 'next/font/google';
import Social from "./Social";

const robertoSlab = Roboto_Slab({ subsets: ['latin'] });

const SideNav = ({ className }: GeneralComponentProps) => {  
  const getAllYears = (postMetadata: PostMetadata[]): number[] => {
    const years = postMetadata.map(post => Number(
        new Date(post.date).getFullYear())
      );
    return years;
  }

  const groupAndSortYears = (allYears: number[], count:number): number[][] => {
    const yearCounts: { [key: string]: number } = {};
    for (const year of allYears) {
      yearCounts[year] = yearCounts[year] ? yearCounts[year] + 1 : 1;
    }
    let sortedYears = [];
    for (let year in yearCounts) {
      sortedYears.push([Number(year), yearCounts[year]]);
    }
    sortedYears.sort(function(a, b) {
        return b[0] - a[0];
    });
    return sortedYears.slice(0, count);
  }
  
  const postMetadata = getPostMetadata(false);

  // years nav
  const allYears = getAllYears(postMetadata);
  const groupedSortedYears = groupAndSortYears(allYears, 5);

  
  // tags/topics nav
  const targetSinceDate = new Date();
  targetSinceDate.setFullYear(targetSinceDate.getFullYear() - 5);
  const allPostTags = getAllPostTags(postMetadata, targetSinceDate);
  const sortedTags = getSortedTags(allPostTags, 10);

  return (
    <nav role="navigation" className={`${className}`}>
      <h3 className={`text-2xl text-creamcicle mb-2 ${robertoSlab.className}`}>Connect</h3>
      <Social />

      <h3 className={`text-2xl text-creamcicle mb-2 ${robertoSlab.className}`}>Posts</h3>
      
      <ul className="mb-4">
        {groupedSortedYears.map( yearAndCount => {
          return(
            <li>
              <Link className="text-white hover:underline" href={`/posts/${yearAndCount[0]}`}>{yearAndCount[0]} ({yearAndCount[1]})</Link>
            </li>
          );
        })}
        <li>
          <Link className="text-white hover:underline" href="/posts">See All Posts</Link>
        </li>
      </ul>
      
      <h3 className={`text-2xl text-creamcicle mb-2 ${robertoSlab.className}`}>Recent Topics</h3>
      <ul className="mb-4">
        {sortedTags && sortedTags.map((tagCount: [string, number]) => {
          return(
            <li>
              <Link className="text-white hover:underline" href={`/topics/${slugifyTag(tagCount[0])}`}>{tagCount[0]} ({tagCount[1]})</Link>
            </li>
          );
        })}
        <li><Link className="text-white hover:underline" href="/topics">See All Topics</Link></li>
      </ul>
    </nav>
  )
}

export default SideNav;