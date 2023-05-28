import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from '../model/PostMetadata';

const sortPostMetadata = (unsortedPostMetadata: PostMetadata[]): PostMetadata[] => {
  let sortedPostMetadata: PostMetadata[] = [...unsortedPostMetadata];

  return sortedPostMetadata.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

const getPostMetadata = (sort: boolean, year?: number): PostMetadata[] => {
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
      type: grayMatter.data.type,
      title: grayMatter.data.title,
      date: grayMatter.data.date,
      subtitle: grayMatter.data.subtitle,
      slug: fileName.split('/')[1].replace('.md', ''),
      previewImage: grayMatter.data.previewImage,
      tags: grayMatter.data.tags,
    }
  });

  if (sort) {
    return sortPostMetadata(posts);
  }

  return posts;
}

const getPostContent = (year: number, slug:string) => {
  const folder = 'posts/';
  const file = `${folder}${year}/${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const grayMatter = matter(content);
  return grayMatter;
}

export {
  getPostMetadata,
  getPostContent,
};