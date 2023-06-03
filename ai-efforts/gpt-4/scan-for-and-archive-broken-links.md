## Assignment

A folder of Markdown files contain links from an old migrated blog that may be broken. Create a Node.js script that will iterate through the Markdown files, parse out a list of hyperlinks in each file, then make a request to each link to see if it returns a 200 response. For links that don't return a 200 response, push to an array and write error results to a CSV file. Do you understand?

## API request: https://api.openai.com/v1/chat/completions

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
          "content": "A folder of Markdown files contain links from an old migrated blog that may be broken. Create a Node.js script that will iterate through the Markdown files, parse out a list of hyperlinks in each file, then make a request to each link to see if it returns a 200 response. For links that don't return a 200 response, push to an array and write error results to a CSV file. Do you understand?"
      }
  ],
  "temperature": 0.9,
  "user": "user-example-to-monitor-for-abuse"
}
```

## Response

Yes, I understand. Here's a Node.js script that reads markdown files in a folder, extracts hyperlinks, checks if they return a 200 response, and writes the error results to a CSV file:

```javascript
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { parse } = require('fast-csv');

const markdownFolder = './markdown-files';
const outputCsv = './broken_links.csv';

(async () => {
  const files = fs.readdirSync(markdownFolder);
  const markdownFiles = files.filter(file => file.endsWith('.md'));

  let brokenLinks = [];

  for (const file of markdownFiles) {
    const fileContent = fs.readFileSync(path.join(markdownFolder, file), 'utf8');
    const links = extractLinks(fileContent);

    for (const link of links) {
      try {
        const response = await axios.head(link);

        if (response.status !== 200) {
          brokenLinks.push({ file, link, status: response.status });
        }
      } catch (error) {
        brokenLinks.push({ file, link, status: error.response ? error.response.status : 'Unknown Error' });
      }
    }
  }

  writeCsv(brokenLinks);
})();

function extractLinks(content) {
  const regex = /(!?\[.*?\]\()(http.*?)(\))/g;
  let match;
  const links = [];

  while ((match = regex.exec(content)) !== null) {
    links.push(match[2]);
  }

  return links;
}

function writeCsv(data) {
  const writer = fs.createWriteStream(outputCsv);
  writer.write('file,link,status\n');

  data.forEach(item => {
    writer.write(`${item.file},${item.link},${item.status}\n`);
  });

  writer.end();
  console.log('CSV file created with broken links.');
}
```

Before running the script, make sure to install the required dependencies:

```bash
npm install axios fast-csv
```

This script assumes that there's a folder called "markdown-files" that contains the markdown files to be processed and an output CSV file called "broken_links.csv" will be created. You can change the `markdownFolder` and `outputCsv` variables as needed to match your folder and file names.

## Personal Thoughts

I had to modify this just a touch as I didn't give instruction on year subfolders (my bad). Otherwise, minor edit:

```
const fileContent = fs.readFileSync(path.join(markdownFolder, file), 'utf8');
```
to:
```
const fileContent = fs.readFileSync(file, 'utf8');
```

### Update

I was having issues with Axios and switched things up a bit. The root cause of issues though was a missing `User-Agent` resulting in frequent 403 errors. I may have been able to use the solution with a tweak. Most functionality remains in place.

## Assignment 2

