const fs = require("fs");
const { parse } = require("csv-parse");
const { encode } = require('he');
const TurndownService = require('turndown');
const matter = require('gray-matter');

// NOTES:
// I went in and manually removed title=""*"" from csv img tags.
// That was causing some trouble with regex efforts (manual faster for this one-time task)
// and was a duplicate of existing alt attributes.
// VSCode search regex: title=""(.+?)""

// Code blocks imported inline and needed reworked

// Forget .gif files and needed to work those in

const IMPORT_CONTENT_FILE = './importData/node_content2.csv';
const OUTPUT_FOLDER = './output';

// TODO:
const IMPORT_GALLERIES_FILE = './importData/node_galleries.csv';

const importContentEnum = {
  'type': 0,
  'title': 1,
  'featureImage': 2,
  'topImage': 3,
  'featureImage2': 4,
  'yearMonthDay': 5,
  'setPublishDate': 6,
  'body_value': 7,
  'tags': 8,
  'tech_tags': 9,
};

const typeDecoderEnum = {
  'blog_post': 'Blog Post',
  'project': 'Project',
}

// Move everything from old Drupal file directories to new shared image folder.
const relocateMarkdownImagePaths = markdownContent => {
  let cleanedContent = markdownContent;
  // thanks: https://stackoverflow.com/a/44227600
  const iterator = markdownContent.matchAll(/!\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/g);
  let match;
  while (!(match = iterator.next()).done) {
    const uri = match.value[1];
    // allow external images to stay, replacing internal
    if (
      (uri.toLowerCase().includes('christopherstevens.cc') || !uri.toLowerCase().includes('http') || uri.toLowerCase().includes('/sites/default')) &&
      (uri.toLowerCase().includes('.jpg') || uri.toLowerCase().includes('.png'))
    ) {
      const imgReplace = `/images/${match.value[1].split('/').slice(-1)}`;
      cleanedContent = cleanedContent.replace(uri, imgReplace);
    }
  }
  
  return cleanedContent;
}

const slugify = tag => {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Take data parsed and formatted from CSV as object, create markdown
// metadata with content string.
const objToMarkdownString = parsedCsvObj => {
  return matter.stringify(
    parsedCsvObj.body, {
      title: parsedCsvObj.title,
      type: parsedCsvObj.type,
      date: parsedCsvObj.createdDate,
      previewImage: parsedCsvObj.previewImage,
      tags: parsedCsvObj.tags,
  });
}

// thanks (with updates): https://stackoverflow.com/a/34509653
const createYearFolder = (dateString) => {
  const year = new Date(dateString).getFullYear();
  const dirname = `${OUTPUT_FOLDER}/${year}`;
  if (fs.existsSync(dirname)) {
    return dirname;
  }
  fs.mkdirSync(dirname);
  return dirname;
}

const convertHtmlToMarkdown = htmlContent => {
  const turndownService = new TurndownService();
  return turndownService.turndown(htmlContent);
}

const createMarkdownFile = contentRow => {
  const title = contentRow[importContentEnum.title];
  if (!title) {
    throw new Error('error parsing required title');
  }
  
  const slug = slugify(title);
  if (!slug) {
    throw new Error('error making required slug');
  }

  const type = typeDecoderEnum[contentRow[importContentEnum.type]];
  if (!type) {
    throw new Error('error parsing required type');
  }

  // In the old site, projects had a set date while blogs relied on a created date, combine here
  let createdDate;
  if (type === typeDecoderEnum['blog_post']) {
    createdDate = contentRow[importContentEnum.yearMonthDay];
  } else {
    createdDate = contentRow[importContentEnum.setPublishDate];
  }
  if (!createdDate) {
    throw new Error('error parsing required createdDate');
  }

  // I think* this is a thumbnail image used in content lists to represent this content.
  // Blog posts used an 'image' while projects used a 'feature_image', combine here.
  let previewImage;
  if (type === typeDecoderEnum['blog_post']) {
    previewImage = contentRow[importContentEnum.featureImage2]
      ? `/images/${contentRow[importContentEnum.featureImage2]}`
      : '/images/todo.jpg';
  } else {
    previewImage = contentRow[importContentEnum.featureImage]
      ? `/images/${contentRow[importContentEnum.featureImage]}`
      : '/images/todo.jpg';
  }    

  // Old blog posts had tags. Old projects had technologies.
  let tags;
  if (type === typeDecoderEnum['blog_post']) {
    tags = `/images/${contentRow[importContentEnum.tags]}`
      ? contentRow[importContentEnum.tags].split(',')
      : null;
  } else {
    tags = contentRow[importContentEnum.tech_tags]
      ? contentRow[importContentEnum.tech_tags].split(',')
      : null;
  }
  // Most of the older posts don't have tags. :( Create a placeholder to fill in later
  if (!tags || tags.length === 0 || tags[0] === '') {
    tags = ['Needs Tagged'];
  }

  // Newer projects and posts in the old blog had a "top image".
  // Just throw those in the top of new posts to start as HTML, to get converted to Markdown with the rest.
  const topImage = contentRow[importContentEnum.topImage]
    ? `<p><img src="/images/${contentRow[importContentEnum.topImage]}" alt="${encode(title)}" /></p>`
    : '';

  let body = contentRow[importContentEnum.body_value];
  if (!body) {
    throw new Error('error parsing required createdDate');
  }
  body = `${topImage}${body}`;
  body = convertHtmlToMarkdown(body);
  body = relocateMarkdownImagePaths(body);
  body = objToMarkdownString({
    slug,
    title,
    type,
    createdDate,
    previewImage,
    tags,
    body,
  });

  const yearDir = createYearFolder(createdDate);
  const filePath = `${yearDir}/${slug}.md`;
  fs.writeFileSync(filePath, body); // TEMP
}

const parseFile = (fileName, callback) => {
  let errors = [];
  
  fs.createReadStream(fileName)
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    try {
      callback(row);
    } catch(err) {
      errors.push([err, row]);
    }
  })
  .on("end", () => {
    if (errors.length > 0) {
      // console.error(errors);
      console.log(`error count: ${errors.length}`);
    }
    console.log('all done!');
  })
  .on("error", (error) => {
    errors.push([error]);
  });
}

parseFile(IMPORT_CONTENT_FILE, createMarkdownFile);
