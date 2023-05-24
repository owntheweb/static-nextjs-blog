import Link from "next/link";
import getPostMetadata from "./utils/getPostMetadata";
import { slugifyTag, getAllPostTags, getSortedTags } from "./utils/tags";
import { GeneralComponentProps } from "./model/GeneralComponentProps";
import { PostMetadata } from "./model/PostMetadata";

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
        return b[1] - a[1];
    });
    return sortedYears.slice(0, count);
  }
  
  const postMetadata = getPostMetadata();

  // years nav
  const allYears = getAllYears(postMetadata);
  const groupedSortedYears = groupAndSortYears(allYears, 5);
  
  // tags/topics nav
  const targetSinceDate = new Date();
  targetSinceDate.setFullYear(targetSinceDate.getFullYear() - 1);
  const allPostTags = getAllPostTags(postMetadata, targetSinceDate);
  const sortedTags = getSortedTags(allPostTags, 10);

  return (
    <nav role="navigation" className={`${className} mt-12`}>
      <h3 className="text-lg text-slate-600 mb-2">Connect</h3>
      <ul className="mb-12">
        <li><Link href="https://linkedin.com/in/interactiveguru/">LinkedIn</Link></li>
        <li><Link href="https://github.com/owntheweb">GitHub</Link></li>
        <li><Link href="https://twitter.com/owntheweb">Twitter</Link></li>
        <li><Link href="/email">Email</Link></li>
      </ul>

      <h3 className="text-lg text-slate-600 mb-2">Posts</h3>
      
      {/*// TODO: begin linking all posts by year and use that in nav*/}
      <ul className="mb-12">
        {groupedSortedYears.map( yearAndCount => {
          return(
            <li>
              <Link href={`/posts/${yearAndCount[0]}`}>{yearAndCount[0]} ({yearAndCount[1]})</Link>
            </li>
          );
        })}
        <li><Link href="/posts">See All Posts</Link></li>
      </ul>
      
      <h3 className="text-lg text-slate-600 mb-2">Topics</h3>
      <ul className="mb-12">
        {sortedTags && sortedTags.map((tagCount: [string, number]) => {
          return(
            <li>
              <Link href={`/topics/${slugifyTag(tagCount[0])}`}>{tagCount[0]} ({tagCount[1]})</Link>
            </li>
          );
        })}
        <li><Link href="/topics">See All Topics</Link></li>
      </ul>
    </nav>
  )
}

export default SideNav;