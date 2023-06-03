const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');

// Human NOTE:
// Run brokenLinkScanner.js first
// I updated file paths to relative urls. It might* work if just keeping as-is
const brokenLinksFile = './output/broken_links.csv';

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
    .pipe(csvParser({ separator: ',', headers: false }))
    .on('data', (row) => {
        if (row && row[0] && row[1]) {
          updateMarkdownFile(path.join(__dirname, row[0]), row[1]);
        }
    })
    .on('end', () => {
        console.log('Finished updating markdown files');
    });
