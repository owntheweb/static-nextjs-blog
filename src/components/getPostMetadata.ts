import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from './PostMetadata';

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter(file => file.endsWith('.md'));
  
  const posts = markdownPosts.map(fileName => {
    const fileContents = fs.readFileSync(`${folder}${fileName}`, 'utf8');
    const grayMatter = matter(fileContents);

    return {
      title: grayMatter.data.title,
      date: grayMatter.data.date,
      subtitle: grayMatter.data.subtitle,
      slug:  fileName.replace('.md', ''),
    }
  });

  return posts;
}

export default getPostMetadata;