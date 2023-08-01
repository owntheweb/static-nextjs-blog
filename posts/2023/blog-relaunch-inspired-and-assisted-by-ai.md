---
title: 'Blog Relaunch Inspired and Assisted by AI'
type: Blog
date: '2023-06-06'
previewImage: /images/dude-best-designs-ever.jpg
tags:
  - Midjourney
  - GPT-4
  - OpenAI
  - 'DALL-E'
  - Oracle
  - AI
  - ML
  - Runway
  - life
  - React
  - 'Next.js'
  - TypeScript
slides:
  - src: '/images/new-blog-with-ai1.jpg'
    alt: 'Blog Relaunch Inspired and Assisted by AI'
  - src: '/images/new-blog-with-ai2.jpg'
    alt: 'Blog Relaunch Inspired and Assisted by AI'
  - src: '/images/new-blog-with-ai3.jpg'
    alt: 'Blog Relaunch Inspired and Assisted by AI'
---
After seven years of dropping my old Drupal powered blog, it's time to relaunch the public memory. This round I built it as a statically generated Next.js site, hosted on AWS S3 for speed and low maintenance. I designed and developed it with the help of AI for inspiration and coding assist.

I've had and still have a lot of questions about AI products provided by [OpenAI](https://openai.com/), [Midjourney](https://www.midjourney.com/), [Runway](https://runwayml.com) and others. While ChatGPT-4 can write code, how good is the code? If there are errors in the code generated, can I keep the conversation going to fix the errors? Can GPT-4 fix my code when I get stuck? Will Midjourney help me design a website with its new UI layout and image tiling capabilities? Will using AI in my dev work free up time to work on more interesting projects or will it cause pain and suffering? Building a blog helped me explore these topics and I'll cover the process here.

[Next.js](https://nextjs.org/) was the other curiosity explored in this project. It's known for its ability to effectively generate static websites as an option using the power of React (Facebook's React has grown on me a lot, especially recently). This is ideal for my blog as the end result is static, secure, generally low maintenance (still need to manage npm dependencies when posting something new). Next.js, especially version 13+, has very nice utility for routing and server-side rendering, great for SEO and dev time savings. Tailwind CSS (new to me yet cool) and TypeScript bundled with Next.js, potentially could save time and increase quality control for this project (it sure did!).

## Creative Process

![rough layout in Next.js](/images/rough-layout.jpg)

I started this project with an idea to make it look like a retro video game because that's me and cool... Maybe make the top work like a side-scrolling space battle game. With that, I started with basic layout, not hitting the design really just yet and giving time to get acclimated to Next.js. It started very uninspired yet structured.

![looping pixel art](/images/looping-pixel-art.jpg)

![looping pixel art](/images/multiple-loops-8-bit-scene.jpg)

```
/imagine 8-bit pixel art, side scrolling platformer layered landscape of the plains with flowers, mountains in the background, clouds --tile
```

I started by generating pixel art with [DALL-E](https://openai.com/dall-e-2). This was ok, yet since I needed to loop these textures for animation, I opted to make use of Midjourney's `--tile` option. Pictured above, it almost looks like Garden of the Gods, doesn't it? A dev prototype of this scrolling platformer concept turned out to be quite distracting though, so I took a break and switched to AI identity.

![AI me: lensa](/images/me-lensa.jpg)

As can be seen in the rough layout above, I was also pondering "AI me" portrait at the same time. Getting there was a fun process, starting with the use of a mobile app called [lensa](https://prisma-ai.com/lensa) that a couple of co-workers have been using (pictured above). This first portrait involved taking several selfies, uploading for a hundred+ options to be generated. This one turned out well and may replace my current silly portrait on LinkedIn...

![not AI: some form of cosplay me?](/images/some-form-of-cosplay-me.jpg)

This silly photo (not AI) of me was uploaded to my networks during St. Patrick's Day a year ago or so to celebrate life and maybe keep the LinkedIn recruiters at bay (I don't think it stopped anyone hah). However, this image was interesting and could fuel a "personal blog AI me" portrait. For that, I leaned towards Midjorney's excellent image generation and image blending tools.

![pondering website design tasks and memories](/images/pondering-todos.jpg)

```
/imagine detailed oil painting, a man with thinning hair and brown short beard, cataloguing the things he needs to do. He has a lot to do on several shelves. He ponders.
```

While thinking about the blog theme and design tasks, I tried out a few prompts to attempt to place some version of me in a scene. This is when I quickly realized that space theme wasn't going to be a great fit now (quite possibly later though). I started on a track of mental history library, card catalogues (I did spend months sorting those at one time), memory restoration, history, tech in history, etc.,. With some frustration when conjuring the best prompt, I started generating images of how I was feeling (oops, abort!). Granted, this triggered a new branch of ideas: a blog based in history AND tech.

![old AI me](/images/old-ai-me.jpg)

Midjourney's `/blend` command is AMAZING. I started by blending my silly photo with the one of the other generated images seen above.

1. That's amazing.
2. It's a bit old for my taste. This is probably happening mid-stage dementia when I'm 70. I'm liking the idea of books and see a possibility of Midjourney painting me in a scene though! Note how it kept a coffee mug, green glasses, suit and much of my facial features in the mix.

![detailed oil painting, a 40-year old man](/images/early-40s-tech-books.jpg)

```
/imagine detailed oil painting, a 40-year old man with thinning hair and brown short beard, cataloguing the things he needs to do, lots of light-up mechanical projects, servers, books and other nicknacks on shelves in an aged yet high tech room 
```

I started working towards related samples that looked more representative of me, more productive and hopeful, with generally good success. I started several blend experiments based on the top-right image.

![Midjourney blend trials](/images/midjourney-blend-trials.jpg)

When blending two images in Midjourney, different results will be generated every time. It may take a good number of runs and varied prompts and input images to see something close. Once a result looks pretty close to an desired end result, variations of that image can be generated.

![AI portrait of me after a good deal of experimentation](/images/ai-me.jpg)

This one was gold. My daughter asked what I was doing in this picture. It's "me", looking at a screen while wielding two cellphones at once. My coffee mug seems to be supplying caffeine intravenously directly to though veins. It's 120% accurate.

![AI Chris in space](/images/ai-chris-in-space.jpg)

![AI Chris component shopping](/images/ai-chris-shops-for-components.jpg)

![AI Chris scanning the dessert](/images/ai-chris-scanning-the-dessert.jpg)

With practice, this may have become a new hobby... (anyone need an AI action portrait?)

![many website thumbnails](/images/many-website-thumbnails.jpg)

The next step was to create *several* website thumbnails (many more than shown, scaled down for this post) using Midjourney's new UI generating capabilities for inspiration. I tended to stay in the area of pixel art, retro and game-inspired designs. It was neat to look at, yet from my experience, mostly very cluttery in design. It was reminiscent of browsing stock template websites that showcase all the widgets (too many widgets in my opinion).

![I liked this color, some simplicity](/images/liked-these-colors.jpg)

```
/imagine UI design for a video game blog, pixel part, vibrant, #773680 #425F6C #96B8C3 #F2D0CC #AA6F55 #FFFFFF color palette, 8-bit headings, two columns of content over white background, clean, simple
```

This was getting close-ish color-wise to something I liked. It was a bit unusual for me and while I didn't use it exactly (would you?), it inspired ideas.

![Wow this is interesting design](/images/interesting-food-combo.jpg)

I then found out I could blend portrait images with web design thumbnails. It influences website content and colors. This one was... absolutely hilarious! Look at those colors! I decided to pull from this pallette while extending the library ideas.

![exploring the pallette further](/images/dude-best-designs-ever.jpg)

It's perfect. Ship it. (starting to look familiar though, right?!)

![extending images](/images/runway-header-render.jpg)

Returning to the library of my mind idea, I decided to attempt to extend the square profile image to a full header background. I saw two easily accessible tools for this: [Dall-E](https://labs.openai.com), which has a less obvious feature of filling in gaps for a square portion of an image. Also, [Runway](https://runwayml.com).

Runway has unique capabilities, most famous for its video generation capabilities ([see this Pizza commercial](https://www.youtube.com/watch?v=qSewd6Iaj6I&ab_channel=PizzaLater)). One neat tool is their image extender. While it didn't produce quite the same style of images that Midjourney created (made sense, different company), it did a good job for my purposes and blew my mind. After a few tries, I ended with the result above.

![extending images](/images/library-reimagine.jpg)

```
detailed oil painting, modern technology on a desk in a dim lit dusty library
```

I wanted to see changes though. The right of the image was very cluttered and not flattering. To adjust, I moved to DALL-E. It's possible to erase part of the image and give it a prompt describing how to fill the void. It took a dozen attempts, yet this turned out well.

![final Photoshop edits](/images/header-background-1024.jpg)

Lastly for the header, I combined the Runway and DALL-E images together in Photoshop. Odd "glitches" in the image were manually edited within reason and a fade was applied to fit with the theme.

![now ship it](/images/new-blog-with-ai1.jpg)

*Now* ship it... after building the rest of the website functionality and migrating a bunch of old blog posts with ChatGPT's help?

## Development Process

Now it was time to see what ChatGPT-4 could do well, and not.

I started on my own with the tasks I'm comfortable with, while also following along with a helpful [Next.js-specific tutorial](https://www.youtube.com/watch?v=Hiabp1GY8fA&ab_channel=pixegami) (I recommend). Then, it was time to start sifting through an old Drupal 8 backup, that melded in a Drupal 7 backup at some point, that migrated in a WordPress site (from 2005-ish?... or maybe that was a custom PHP site that migrated to WordPress in between...). The content was kinda messy and I was dreading sifting through it.

### Using ChatGPT-4 To Migrate Blog Posts To Markdown Files

My goal was to get all blog-related content moved over to Markdown files that Next.js could use as a data source. It removed the need for any kind of database requirement, supported basic formatting I needed and also YAML-format metadata for added flexible features (who knew Markdown supported that!).

After some experimentation over the last months, I've found that sending challenges to GPT-4 via the API formatted like a good stackoverflow question yields pretty good results. Be clear with the question. Add a starting code example. Add specifics where it makes sense. Don't be lazy. ;) The quality of input affects the quality of the output. These techniques were applied here.

To start, I was having a query issue when working to export blog content from MySQL to a format ChatGPT can work with: a CSV file. After a request ([full conversation here](https://github.com/owntheweb/static-nextjs-blog/blob/main/ai-efforts/gpt-4/mysql-query-question.md)), the error in my query was found and I was on my way.

After exporting blog content to a CSV file, I created a [rough script](https://github.com/owntheweb/static-nextjs-blog/blob/main/importTools/importCsv.js) to migrate the data, working this myself as there was no trust in ChatGPT (yet) and I wanted to make sure the right data moved. I have vague memories of maybe having GPT-4 work to iterate through the CSV file, yet I didn't document it (getting better after this moment and rest of this post for others' sake).

After getting initial content out there, I saw a LOT of broken links in old posts. Broken links are not good for SEO, so I put ChatGPT to work in scanning and archiving. Here's [the conversation](https://github.com/owntheweb/static-nextjs-blog/blob/main/ai-efforts/gpt-4/scan-for-and-archive-broken-links.md). This resulted in [a script](https://github.com/owntheweb/static-nextjs-blog/blob/main/importTools/brokenLinkScanner.js) to generate a CSV file of broken links, and [a script](https://github.com/owntheweb/static-nextjs-blog/blob/main/importTools/brokenLinkRemover.js) to archive broken links. The result was 135 broken links archived without a whole lot of edits needed to the scripts GPT-4 had written (wow!!). It wasn't a perfect process, yet the job is done.

I did spend a good chunk of time updating tags and breaking up super old posts that were smashed together formatting-wise. ChatGPT saved me much repetitive work though.

### Using ChatGPT-4 To Create React Components

ChatGPT turned out to be quite useful in generating fast components and clearing stuck points. I know it saved at least one trip to stackoverflow to post a question and wait for a human such as [this TypeScript error](https://github.com/owntheweb/static-nextjs-blog/blob/main/ai-efforts/gpt-4/invalid-typescript-line-issue.md) and styling a [hard to reach CSS selector](https://github.com/owntheweb/static-nextjs-blog/blob/main/ai-efforts/gpt-4/style-paragraphs-with-images.md). It saved a little time. I bet even more time in the future now that I know how to ask better questions.

One assignment given to AI was the previous/next post listing that shows at the bottom of this and other blog posts. [This conversation]() resulted in [this component](https://github.com/owntheweb/static-nextjs-blog/blob/main/src/components/PreviousNextPosts.tsx). This saved a bit of time. Parts of this made it into code with minor revisions, mainly a swap of next/previous, then formatting items were added later. Pretty cool!

A much more challenging project was the AI-generated story on the [home page](/). Clicking the cursor initiates a story to be typed out like on an old computer console, story also written by GPT-4. Asking it to generate the JavaScript hurt my brain. See the [conversation here](https://github.com/owntheweb/static-nextjs-blog/blob/main/ai-efforts/gpt-4/home-page-typing-effect.md).

It was pretty close each time, yet I'd give it a D as something was always broke. However, I was able to extend the conversation to improve results over time. It would give me a response. I'd respond with the error. It was able to follow the conversation and create better results. Wow!!

Just before giving up on AI doing most of the work for this project, I asked it more vaguely to create a React component. Before it was just a JavaScript page. Somehow making it a React component request made it behave much better. The [resulting React module](https://github.com/owntheweb/static-nextjs-blog/blob/main/src/components/TypingEffect.tsx) now lives on the home page with moderately little intervention (some required, some code never reached).

### Thoughts

![caticorn with caticorn ice cream](/images/caticorn-with-ice-cream.jpg)

```
# one of my daughter's first Midjourney prompts 😍🙀‼
/imagine caticorn with caticorn ice cream
```

Overall, I feel like the use of OpenAI's ChatGPT, Midjourney, DALL-E and Runway in this blog project boosted creativity and productivity. Midjourney's image generation helped me explore unusual and fun options at rapid speed. The GPT-4 algorithm helped greatly speed up the repetitive common tasks such as migrating and cleaning data from CSV backups to Markdown files (super cool!), and even build basic React components with a bit of help (potentially time saving). I felt free to get to writing blog posts sooner.

AI tools are now permanently in my toolbox.