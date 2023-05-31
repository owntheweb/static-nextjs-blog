
## Assignment

Here is a starting TypeScript code for a blog, with `currentPost` representing the post currently being viewed by a website visitor. Write a method that identifies the next post to view in the `posts` array.

Write a method that identifies the previous post to view in the `posts` array.

```
interface PostMetadata {
  title: string,
  date: string,
}

const posts: PostMetadata[] = [
  {
    title: 'Fifth Story',
    date: '2023-05-01',
  },
  {
    title: 'Third Story',
    date: '2023-03-01',
  },
  {
    title: 'First Story',
    date: '2023-01-01',
  },
  {
    title: 'Fourth Story',
    date: '2023-04-01',
  },
  {
    title: 'Second Story',
    date: '2023-02-01',
  },
];

const currentPost: PostMetadata = {
  title: 'Second Story',
  date: '2023-02-01',
};
```

Do you understand?

## API request: https://api.openai.com/v1/chat/completions

```
{
  "model": "gpt-4",
  "messages": [
      {
          "role": "assistant",
          "content": "TypeScript web developer"
      },
      {
          "role": "user",
          "content": "Here is a starting TypeScript code for a blog, with `currentPost` representing the post currently being viewed by a website visitor. Write a method that identifies the next post to view in the `posts` array.\r\n\r\nWrite a method that identifies the previous post to view in the `posts` array.\r\n\r\n```\r\ninterface PostMetadata {\r\n  title: string,\r\n  date: string,\r\n}\r\n\r\nconst posts: PostMetadata[] = [\r\n  {\r\n    title: 'Fifth Story',\r\n    date: '2023-05-01',\r\n  },\r\n  {\r\n    title: 'Third Story',\r\n    date: '2023-03-01',\r\n  },\r\n  {\r\n    title: 'First Story',\r\n    date: '2023-01-01',\r\n  },\r\n  {\r\n    title: 'Fourth Story',\r\n    date: '2023-04-01',\r\n  },\r\n  {\r\n    title: 'Second Story',\r\n    date: '2023-02-01',\r\n  },\r\n];\r\n\r\nconst currentPost: PostMetadata = {\r\n  title: 'Second Story',\r\n  date: '2023-02-01',\r\n};\r\n```\r\n\r\nDo you understand?"
      }
  ],
  "temperature": 0.9,
  "user": "user-example-to-monitor-for-abuse"
}
```

## Response

Yes, I understand. You want me to write two methods, one to find the next post and one to find the previous post in the `posts` array, based on the `currentPost`. Here's the TypeScript code to achieve that:

```typescript
interface PostMetadata {
  title: string;
  date: string;
}

const posts: PostMetadata[] = [
  {
    title: 'Fifth Story',
    date: '2023-05-01',
  },
  {
    title: 'Third Story',
    date: '2023-03-01',
  },
  {
    title: 'First Story',
    date: '2023-01-01',
  },
  {
    title: 'Fourth Story',
    date: '2023-04-01',
  },
  {
    title: 'Second Story',
    date: '2023-02-01',
  },
];

const currentPost: PostMetadata = {
  title: 'Second Story',
  date: '2023-02-01',
};

function getNextPost(current: PostMetadata, posts: PostMetadata[]): PostMetadata | null {
  const sortedPosts = [...posts].sort((a, b) => a.date.localeCompare(b.date));
  const currentIndex = sortedPosts.findIndex(post => post.date === current.date);
  
  if (currentIndex === -1 || currentIndex + 1 >= sortedPosts.length) {
    return null;
  }

  return sortedPosts[currentIndex + 1];
}

function getPreviousPost(current: PostMetadata, posts: PostMetadata[]): PostMetadata | null {
  const sortedPosts = [...posts].sort((a, b) => a.date.localeCompare(b.date));
  const currentIndex = sortedPosts.findIndex(post => post.date === current.date);

  if (currentIndex <= 0) {
    return null;
  }

  return sortedPosts[currentIndex - 1];
}

console.log('Next Post:', getNextPost(currentPost, posts));
console.log('Previous Post:', getPreviousPost(currentPost, posts));
```

In this code, I have created two methods `getNextPost` and `getPreviousPost` that take the `currentPost` and `posts` as parameters. It sorts the `posts` array by date and finds the next and previous posts based on the index of the current post. If there is no next or previous post, it returns `null`.

## Personal Thoughts

This saved a bit of time. Parts of this made it into code with minor revisions, mainly a swap of next/previous.