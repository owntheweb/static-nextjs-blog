import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from '../model/PostMetadata';

const getPostMetadata = (year?: number): PostMetadata[] => {
  const folder = "posts/";

  let files: string[] = [];
  if (!year) {
    // get all files in all year folders
    const folders = fs.readdirSync(folder);
    folders.forEach(year => {
      const yearFiles = fs.readdirSync(`${folder}${year}/`)
        .map(file => `${year}/${file}`); 
      files = [...yearFiles, ...files];
    });
  } else {
    // get files from specific year folder
    files = fs.readdirSync(`${folder}${year}/`)
      .map(file => `${year}/${file}`); ;
  }
  const markdownPosts = files.filter(file => file.endsWith('.md'));
  
  const posts = markdownPosts.map(fileName => {
    const fileContents = fs.readFileSync(`${folder}${fileName}`, 'utf8');
    const grayMatter = matter(fileContents);

    return {
      title: grayMatter.data.title,
      date: grayMatter.data.date,
      subtitle: grayMatter.data.subtitle,
      slug:  fileName.split('/')[1].replace('.md', ''),
      tags: grayMatter.data.tags,
    }
  });

  return posts;
}

export default getPostMetadata;