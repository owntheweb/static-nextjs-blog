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

I was having issues with Axios and switched things up a bit. The root cause of issues though was a missing `User-Agent` resulting in frequent 403 errors. I may have been able to use the solution with a tweak. Most functionality remains in place. I also noticed that it added the CSV headers to the end of the file. I removed those in the generated csv file as it was good enough for my use!

## Assignment 2

A csv file named broken_links.csv contains rows of broken blog links. Using Node.js, parse the data in the csv file. Then, use the data to open Markdown files listed in the csv file and replace the broken Markdown links with altered text. save updated content over the existing markdown files.

Example broken_links.csv file content:
```
../posts/2010/final-scheduled-launch-of-shuttle-atlantis.md,https://2010.nationalspacesymposium.org/media/symposium-videos,ENOTFOUND
../posts/2010/successful-26th-national-space-symposium.md,https://2010.nationalspacesymposium.org/media/symposium-videos,ENOTFOUND
```

The first column is the markdown file that contains one or more broken links. The second column is the broken url. The third column is a status code that can be ignored.

Example markdown content with a broken link:
```
Here is a sentence with a [broken link here](https://2010.nationalspacesymposium.org/media/symposium-videos).
```

This example would be replaced with:
```
Here is a sentence with a [broken link here] *-link archived-*.
```

Thank you for giving it a try. Do you understand?

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
          "content": "A csv file named broken_links.csv contains rows of broken blog links. Using Node.js, parse the data in the csv file. Then, use the data to open Markdown files listed in the csv file and replace the broken Markdown links with altered text. save updated content over the existing markdown files.\r\n\r\nExample broken_links.csv file content:\r\n```\r\n..\/posts\/2010\/final-scheduled-launch-of-shuttle-atlantis.md,https:\/\/2010.nationalspacesymposium.org\/media\/symposium-videos,ENOTFOUND\r\n..\/posts\/2010\/successful-26th-national-space-symposium.md,https:\/\/2010.nationalspacesymposium.org\/media\/symposium-videos,ENOTFOUND\r\n```\r\n\r\nThe first column is the markdown file that contains one or more broken links. The second column is the broken url. The third column is a status code that can be ignored.\r\n\r\nExample markdown content with a broken link:\r\n```\r\nHere is a sentence with a [broken link here](https:\/\/2010.nationalspacesymposium.org\/media\/symposium-videos).\r\n```\r\n\r\nThis example would be replaced with:\r\n```\r\nHere is a sentence with a [broken link here] *-link archived-*.\r\n```\r\n\r\nThank you for giving it a try. Do you understand?"
      }
  ],
  "temperature": 0.9,
  "user": "user-example-to-monitor-for-abuse"
}
```

## Response

Yes, I understand the task. I will provide you a Node.js script to read the broken_links.csv file, find the broken links in the specified Markdown files, replace them with the altered text, and save the updated content over the existing Markdown files. Here's the script:

```javascript
const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');

const brokenLinksFile = 'broken_links.csv';

// Function to update markdown files
function updateMarkdownFile(filePath, brokenUrl) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const linkRegex = new RegExp(`(\\[.*?\\])\\(${brokenUrl}\\)`, 'g');
    const updatedContent = fileContent.replace(linkRegex, '$1 *-link archived-*');
    
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated broken link in ${filePath}`);
}

// Parse the CSV file and update markdown files
fs.createReadStream(brokenLinksFile)
    .pipe(csvParser({ separator: ',' }))
    .on('data', (row) => {
        if (row && row[0] && row[1]) {
            updateMarkdownFile(path.join(__dirname, row[0]), row[1]);
        }
    })
    .on('end', () => {
        console.log('Finished updating markdown files');
    });
```

To run the script, install the csv-parser package by running `npm install csv-parser`. Then, create a Node.js file (e.g., fix_broken_links.js) with the above content and run the script with `node fix_broken_links.js`. Make sure the broken_links.csv file is in the same directory as the script.

This script assumes that the broken_links.csv file is using a comma (,) as the separator. If it's using a different separator, update the separator in the `csvParser({ separator: ',' })` line accordingly.

## Personal Thoughts

This successfully archived 135 old broken links in my blog! I only needed make a couple of minor tweaks:

```
.pipe(csvParser({ separator: ',' }))
```
to
```
.pipe(csvParser({ separator: ',', headers: false })) 
```

I didn't specify that there were no headers in the file, so any human may have made the same mistake?