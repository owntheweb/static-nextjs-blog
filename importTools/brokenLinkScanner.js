// Ye olde blog is old. Scan and log broken links to later fix for SEO purposes.
// This one-time use file is pretty rough for sure, yet gets the job done!
// Note: This wasn't handling http -> https redirects. For time purposes, I'm manually search and replacing those in bulk.
// Note: I don't think the redirects are working for everything, will need some manual checks before replacing links. 

const fs = require('fs');
const path = require('path');
const { parse } = require('fast-csv');
const { resolve } = require('path');
const { readdir, stat } = require('fs').promises;
const { http, https } = require('follow-redirects');

const markdownFolder = '../posts';
const outputCsv = './output/broken_links.csv';

(async () => {
  const files = await getFiles(markdownFolder);
  const markdownFiles = files.filter(file => file.endsWith('.md'))

  let brokenLinks = [];

  for (const file of markdownFiles) {
    const fileContent = fs.readFileSync(file, 'utf8');
    const links = extractLinks(fileContent);

    for (const link of links) {
      
      // Thanks: https://usefulangle.com/post/170/nodejs-synchronous-http-request
      let requestCall = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject({ error: 'timeout', statusCode: 408, link })
        }, 6000);
        
        const protocol = link.includes('https:') ? https : http;
        try {
          const request = protocol.get(link, {
            headers: {'User-Agent': 'Chris Blog Migrator'}
          }, (response) => {  
            response.on('data', (fragments) => {
              // skip
            });
        
            response.on('end', () => {            
              if (response.statusCode < 200 || response.statusCode > 299) {
                reject({error: 'cannot access', statusCode: response.statusCode, link })
              }
              
              // promise resolved on success
              clearTimeout(timeout);
              resolve(response);
            });
        
            response.on('error', (error) => {
              // promise rejected on error
              reject(error);
            });
          });

          request.on('error', (error) => {
            reject({error: 'request error', statusCode: error.code, link })
          });
        } catch (error) {
          console.log(error);
        }
      });

      await requestCall.then((response) => {
        console.log(response.statusCode, link);
      }).catch((error) => {
        console.log(error);
        brokenLinks.push({ file, link, status: error.statusCode ? error.statusCode : 'unknown' });
      });
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

// human addition, thanks: https://stackoverflow.com/a/45130990
async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}