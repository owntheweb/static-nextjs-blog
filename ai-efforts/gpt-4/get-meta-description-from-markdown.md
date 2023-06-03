## API request: https://api.openai.com/v1/chat/completions

Write a javascript function that parses a Markdown text, returning the first two sentences. It should strip out images and links, and heading text. If content is italicized, bold or has other formatting applied, the formatting will be stripped while the text is preserved. Whitespace will be stripped. Returns will be converted to single spaces. Here is an example that needs supplemented with a solution:

```
<script>
const getDescription = markdownString => {
  // TODO: Add functionality here.
}

const markdownContent = `![an image that needs removed](/images/someImage.jpg)

# A title heading that needs removed

Here is content that needs to be included. This content also needs to be included, hoever the *italic* formatting needs to be removed while the word italic remains in this example. Here/'s a third sentence that will not be included in the response.

Another sentence here will not be returned.`;

const description = getDescription(markdownContent);

console.log(description);
</script>
```

Thank you for giving this challenge a try. Do you understand?

```
{
  "model": "gpt-4",
  "messages": [
      {
          "role": "assistant",
          "content": "web developer"
      },
      {
          "role": "user",
          "content": "Write a javascript function that parses a Markdown text, returning the first two sentences. It should strip out images and links, and heading text. If content is italicized, bold or has other formatting applied, the formatting will be stripped while the text is preserved. Whitespace will be stripped. Returns will be converted to single spaces. Here is an example that needs supplemented with a solution:\r\n\r\n```\r\n<script>\r\nconst getDescription = markdownString => {\r\n  \/\/ TODO: Add functionality here.\r\n}\r\n\r\nconst markdownContent = `![an image that needs removed](\/images\/someImage.jpg)\r\n\r\n# A title heading that needs removed\r\n\r\nHere is content that needs to be included. This content also needs to be included, hoever the *italic* formatting needs to be removed while the word italic remains in this example. Here\/'s a third sentence that will not be included in the response.\r\n\r\nAnother sentence here will not be returned.`;\r\n\r\nconst description = getDescription(markdownContent);\r\n\r\nconsole.log(description);\r\n<\/script>\r\n```\r\n\r\nThank you for giving this challenge a try. Do you understand?"
      }
  ],
  "temperature": 0.9,
  "user": "user-example-to-monitor-for-abuse"
}
```

## Response

Yes, I understand the requirements of this challenge. Here's a solution to the problem:

```javascript
<script>
const getDescription = markdownString => {
  // Remove images, links, and heading text
  const stripped = markdownString.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/(^|\n)#+([^\n]*)/g, '');

  // Remove formatting
  const cleaned = stripped.replace(/\*{1,2}([^*]+)\*{1,2}/g, '$1')
    .replace(/_{1,2}([^_]+)_{1,2}/g, '$1');

  // Replace line breaks and extra spaces
  const whitespaceRemoved = cleaned.split('\n').map(e => e.trim()).join(' ');

  // Split and get first two sentences
  const sentences = whitespaceRemoved.match(/[^.!?]+[.!?]+/g) || [];
  const firstTwoSentences = sentences.slice(0, 2).join(' ').trim();

  return firstTwoSentences;
}

const markdownContent = `![an image that needs removed](/images/someImage.jpg)

# A title heading that needs removed

Here is content that needs to be included. This content also needs to be included, however the *italic* formatting needs to be removed while the word italic remains in this example. Here/'s a third sentence that will not be included in the response.

Another sentence here will not be returned.`;

const description = getDescription(markdownContent);

console.log(description);
</script>
```

This script will parse the given Markdown content and return the first two sentences without any images, links, heading text, and formatting, as required.

## Personal Thoughts

✅ Great response. That worked well enough and saved a chunk of time. Regex hurts my brain. 

One revision to mix in as links were getting stripped with their text, making some of the descriptions not make as much sense:

Write a javascript function that parses a Markdown text, removing urls while keeping the link text in place. Here is starting code to work from:

```javascript
const removeLinks = markup => {
  // remove link urls here while maintaining link text.
}

const markup = 'Hello. There is a link [here](https://somewebsite.com) that needs removed, yet the text "here" will remain.';

const noLinksText = removeLinks(markup);
```

```

{
  "model": "gpt-4",
  "messages": [
      {
          "role": "assistant",
          "content": "web developer"
      },
      {
          "role": "user",
          "content": "Write a javascript function that parses a Markdown text, removing urls while keeping the link text in place. Here is starting code to work from:\n\n```javascript\r\nconst removeLinks = markup => {\n  \/\/ remove link urls here while maintaining link text.\n}\n\nconst markup = 'Hello. There is a link [here](https:\/\/somewebsite.com) that needs removed, yet the text \"here\" will remain.';\n\nconst noLinksText = removeLinks(markup);\n```"
      }
  ],
  "temperature": 0.9,
  "user": "user-example-to-monitor-for-abuse"
}
```

## Response

You can use a regular expression to match the Markdown links and replace them with only the link text. Here's a modified version of the `removeLinks` function that achieves this:

```javascript
const removeLinks = markup => {
  // Remove link URLs while maintaining link text.
  return markup.replace(/\[([^\]]+)\]\([^\)]+\)/g, (match, linkText) => linkText);
}

const markup = 'Hello. There is a link [here](https://somewebsite.com) that needs removed, yet the text "here" will remain.';

const noLinksText = removeLinks(markup);
console.log(noLinksText);
```

This regex will match any text inside square brackets followed by text inside parentheses. It captures the text inside the square brackets as a group and replaces the whole match with the captured group, effectively removing the URL while keeping the link text in place.

## Personal Thoughts

It's just what I needed.