---
title: Do It With Drupal Seminar in New Orleans
type: Blog Post
date: '2009-12-14'
previewImage: /images/newOrleans.jpg
tags:
  - Drupal
  - Space Foundation
  - Conference
---
![New Orleans](/images/neworleans.jpg)

I just got back from [Do It With Drupal](http://www.doitwithdrupal.com), a three day seminar held in New Orleans. IT WAS AMAZING! I was able to interact with roughly 200 developers from Canada to Sweden, who spoke the same Drupal talk. TONS of information was absorbed. I was able to get up to date on what's going on, and reap the rewards of being a part of an open source community. A growing list of Drupal questions were tackled that were directly affecting projects at the Space Foundation. I was able to put a face to those who make my life wonderful when building websites with Drupal.

[![Drupal](/images/drupallogo.gif)](http://www.drupal.org)

What is Drupal? [Drupal](http://www.drupal.org) is an open source project that is three things:

*   A content management system
*   A development framework
*   A growing community

We're using Drupal at the Space Foundation as the platform to replace all our websites and to evolve and connect them together. It's already making a huge difference on websites such as the [National Space Symposium](http://www.nationalspacesymposium.org), [Space Foundation Education Programs](http://www.spacefoundation.org/education), [Strategic Space Symposium](http://www.strategicspacesymposium.org), and the [Global Space Development Summit](http://www.globalspacedevelopment.org), all produced in about six months. We're working on replacing the [Space Certification program](http://spaceconnections.org) now, and soon the [Space Foundation](http://spacefoundation.org) core website itself.

I had a few plaguing Drupal questions that weren't fully answered in forums or chat channels over the past months. Speaking with experts at the Do It With Drupal conference blew those questions wide open (often with more questions, giving a great place to start research). All of them were touched. Here's what I have:

- [What are the weaknesses and bottlenecks of Drupal?](#what-are-the-weaknesses-and-bottlenecks-of-drupal)
- [How do I prevent hackers from hacking my Drupal websites?](#how-do-i-prevent-hackers-from-hacking-my-drupal-websites)
- [How do other Drupal themers go about theming their Drupal websites?](#how-do-other-drupal-themers-go-about-theming-their-drupal-websites)
- [Is it "OK" to override Drupal's primary/secondary navigation theme function, and what's the best practices?](#is-it-ok-to-override-drupals-primarysecondary-navigation-theme-function-and-whats-the-best-practices)
- [What's the best way to migrate data from old non-Drupal websites into Drupal?](#whats-the-best-way-to-migrate-data-from-old-non-drupal-websites-into-drupal)
- [How are others managing their client expectations and project timelines?](#how-are-others-managing-their-client-expectations-and-project-timelines)
- [Is it possible to create custom maps of hotels, galaxies, and other non-standard maps in a Google Maps kind of way?](#is-it-possible-to-create-custom-maps-of-hotels-galaxies-and-other-non-standard-maps-in-a-google-maps-kind-of-way)
- [How do I film, upload, manage, and sell video for an event online?](#how-do-i-film-upload-manage-and-sell-video-for-an-event-online)
- [How do I optimize the speed of a Drupal website?](#how-do-i-optimize-the-speed-of-a-drupal-website)
- [How do some Drupal websites handle millions of visitors per day?](#how-do-some-drupal-websites-handle-millions-of-visitors-per-day)
- [How do I roll out features from a local test server to a live Drupal website without losing my mind?](#how-do-i-roll-out-features-from-a-local-test-server-to-a-live-drupal-website-without-losing-my-mind)
- [How many modules are too many modules on a Drupal website?](#how-many-modules-are-too-many-modules-on-a-drupal-website)
- [How do I publish content to multiple websites at once?](#how-do-i-publish-content-to-multiple-websites-at-once)
- [Is Ubercart (the Drupal shopping cart) really the "one cart to rule them all"?](#is-ubercart-the-drupal-shopping-cart-really-the-one-cart-to-rule-them-all)
- [Why consider an external search service like Acquia hosted Apache SOLR?](#why-consider-an-external-search-service-like-acquia-hosted-apache-solr)
- [How does Open Atrium compare to basecamp?](#how-does-open-atrium-compare-to-basecamp)
- [How does Drupal work in the cloud?](#how-does-drupal-work-in-the-cloud)
- [What are some cool modules, theme engines, and projects I can't live without?](#what-are-some-cool-modules-theme-engines-and-projects-i-cant-live-without)

### What are the weaknesses and bottlenecks of Drupal?

I feel Drupal is an overwhelmingly fantastic platform in zillions of ways, but here are the big weaknesses picked up at different sessions and conversations:

*   Drupal sites are slow compared to other sites, with steps that can be taken to speed things back up.
*   The built in search feature performance decreases and/or gives out after the website hits a certain scale. The quality of search could also use improvements. Others have used [Acquia's hosted search services](http://acquia.com/blog/enabling-acquia-search-and-apache-solr) to nail the issue at a cost.
*   It has sharp learning curve for developers. More options and flexibility also means more complexity. It takes a while to get in the game when getting into serious development. From my perspective things moved forward quickly after climbing some cliffs.
*   People say it's difficult to create unit tests to see how much traffic the website can handle.
*   Working on a local environment and pushing stuff to a live website can cause brain splitting headaches.

### How do I prevent hackers from hacking my Drupal websites?

From [Greg Knaddison](http://www.crackingdrupal.com)'s session about Drupal security:

1.  Know about releases. Most attacks focus on out-of-date websites, AFTER patches for vulnerabilities have been released.
2.  Have a method for updating the website(s).
3.  DO IT.

Greg gave some great examples of how people hack Drupal websites. I'm reading up on it all now in his book he awesomely gave out at his session titled, "[Cracking Drupal: A Drop in the Bucket](http://www.amazon.com/Cracking-Drupal-Bucket-Greg-Knaddison/dp/0470429038)". There's some awesome stuff in here for IT people as well. I'll have to get with the IT guys for beer soon to share some great stuff. Thanks Greg! :)

### How do other Drupal themers go about theming their Drupal websites?

Many create their Drupal themes from scratch (Space Foundation does this) as more fine control is possible. More developer heavy organizations start from pre-built themes. The most talked about one at the Do It With Drupal conference was [NineSixty (960 Grid System)](http://drupal.org/project/ninesixty). Others people start from include [Acquia Prosper](http://drupal.org/project/acquia_prosper) created specifically for [Ubercart](http://www.ubercart.org/), [Zen](http://drupal.org/project/zen), and [ginkgo](http://openatrium.com/skin_it).

### Is it "OK" to override Drupal's primary/secondary navigation theme function, and what's the best practices?

Yes. [Four Kitchens](http://fourkitchens.com/), a Drupal based development company that creates very large websites, does it all the time. A function called \[your\_theme\_here\]\_links() would be placed in the template.php function, and called instead of the standard links template in the theme's page.tpl.php file (or wherever else that links function is called).

One thing to keep in mind though is accessibility. Drupal's built in links function makes unordered lists out of the primary and secondary navigation, and it's easily accessible that way to users, search engines, and visually impaired. This should be kept on the brain when making changes.

### What's the best way to migrate data from old non-Drupal websites into Drupal?

The standard Drupal geek answer is, "There's a module for that". The [migrate](http://drupal.org/project/migrate) module will be helpful to grab data from another database, and import into nodes of a Drupal site. It even has a book keeping-like feature that keeps track of what it has imported. Pretty cool! For the [Space Foundation](http://www.spacefoundation.org), this will be very helpful when pulling in data from the current [Space Certification program](http://www.spaceconnections.org)'s website into it's upcoming makeover release.

### How are others managing their client expectations and project timelines?

When organizations such as [MTV.co.uk](http://www.mtv.co.uk), the [New York Senate](http://www.nysenate.gov), [The Economist](http://www.economist.com), and [Four Kitchens](http://www.fourkitchens.com) were asked, "When will \[any feature or site here\] be finished?", answers were often similar to "this month" with a wink or shrug. The big question that other project managers were pushing was, "What can I do to deliver the most business value to the organization right now?" That often means pushing back completed website deadlines and delivering quality features to a website in increments. [SCRUM](http://www.scrum.org/) management was also highly discussed at the conference, a very customized, company-by-company solution that seemed to match some of what the Space Foundation marketing team follows at a glance (not sure to what depth yet, but very interesting and encouraging). I still have a lot to learn in the management area, but look forward to growing more here (at least for myself if anything).

### Is it possible to create custom maps of hotels, galaxies, and other non-standard maps in a Google Maps kind of way?

Yes (anything is of course). I'm still working on the how, but [openlayers](http://openlayers.org/) is a great option for displaying any tilesets with geographical data. [MapBox](http://mapbox.com/) is a set of tools for making GIS solutions work. [Here](http://developmentseed.org/blog/2009/jul/01/generating-custom-map-tiles-rapidly-cloud) and [here](http://developer.amazonwebservices.com/connect/entry.jspa?externalID=1404) and [here](http://mapbox.com/tools/tilemill) are interesting reads for generating custom tilesets.

### How do I film, upload, manage, and sell video for an event online?

With [National Space Symposium](http://www.nationalspacesymposium.org) coming up, video is on the table. [Lullabot](http://www.lullabot.com) was putting the answer to this question into action as they organized the [Do It With Drupal](http://www.doitwithdrupal.com) conference. [Kaltera](http://corp.kaltura.com/) is what they use, and I picked up some info and swag from a helpful Kaltura person there. [Brightcove](http://www.brightcove.com) is another video platform to check out.

### How do I optimize the speed of a Drupal website?

Caching is key. Look into [memcached](http://memcached.org/), [Mod\_expires](http://httpd.apache.org/docs/2.0/mod/mod_expires.html), [CDN](http://en.wikipedia.org/wiki/Content_delivery_network), [Proxy Cache](http://www.web-caching.com/proxy-caches.html), [OpCode Cache](http://devbee.com/opcode_cache_for_dummies), [Query Cache](http://dev.mysql.com/doc/refman/5.1/en/query-cache.html), and [Varnish](http://varnish.projects.linpro.no/). Something like [Apache SOLR](http://lucene.apache.org/solr/) will speed up search. [Pressflow](http://www.pressflow.org) is an enhanced derivative of Drupal that is also worth looking into that runs faster. [Mercury](http://www.chapterthree.com/blog/josh_koenig/project_mercury_preconfigured_drupalvarnish_ec2_ami) runs Drupal in the cloud making things very scalable on an as-needed basis.

### How do some Drupal websites handle millions of visitors per day?

Everyone handles this differently. Some are using [Mercury](http://www.chapterthree.com/blog/josh_koenig/project_mercury_preconfigured_drupalvarnish_ec2_ami) for a quick solution that is evolving quickly. Other cloud hosting is used to deliver content to millions. All are using caching as seen in the above question. Load balancers are definitely in the mix. I'm still doing a lot of research in this area.

### How do I roll out features from a local test server to a live Drupal website without losing my mind?

[Features](http://drupal.org/project/features) module is HUGE. It's a module, that creates feature modules... (crazy isn't it?!!). Seriously though, it's going to make transferring view changes, and other groups of configuration stuff (known as features), from a local machine to a live website without the headaches. The process before this was a serious headache.

### How many modules are too many modules on a Drupal website?

That's hard to say. [NYSenate.gov](http://www.NYSenate.gov) has 131 modules installed (at the time of writing), with an additional 19 custom modules made by their team! It's running fine. They do a lot of server side caching and load balancing to make Drupal only deliver what is needed, making running a lot of stuff more doable.

### How do I publish content to multiple websites at once?

The Space Foundation has a growing need for this functionality as we rebuild our websites. The [feeds](http://drupal.org/project/feeds) module, and some custom elbow grease make this process possible.

### Is Ubercart (the Drupal shopping cart) really the "one cart to rule them all"?

After using several shopping cart solutions in the past, [Ubercart](http://www.ubercart.org/) at a glance looks like it will take longer to setup at first, and kick other carts in the pants right out of the box. It's attractive visually to start, and makes adding products with repetitive atributes (e.g. large, medium small) a snap. It's also evolving very quickly thanks to a great community of developers, and a core developer who uses it daily with his clients.

### Why consider an external search service like Acquia hosted Apache SOLR?

Drupal has a built in search feature that works fine. However it gets laggy and dies after a website gets to a huge size. Search relevance is also limited in some ways. [Acquia's hosted Apache SOLR](http://acquia.com/products-services/acquia-search) takes a lot of load off of a website and gives relevant search results. I've heard that this service is fantastic. It's also "expensive" as others have mentioned.

### How does Open Atrium compare to basecamp?

The Space Foundation marketing team uses basecamp to manage tasks and milestones and LOVES it. [Open Atrium](http://openatrium.com/) is an Druplish open source competitor for use as company intranets. Would I recommend that we switch to it now? No, not yet. However, I'll be keeping a pulse on the project's progress. It's very attractive, easy to setup, and customizable. Since it's based on Drupal, we can also build custom pieces for it to fit our needs if desired.

### How does Drupal work in the cloud?

[Mercury](http://www.chapterthree.com/blog/josh_koenig/project_mercury_preconfigured_drupalvarnish_ec2_ami) is a very exciting project that currently runs using Amazon's Elastic Compute Cloud. It's a solution to large scaled web projects. Point, click, then BAM!: Instant virtual servers are launched, ready to host optimized Drupal websites. This will be in my toolkit for when we need to handle huge spikes of web traffic. It's not a replacement for our hosting needs that are well covered with, but could supplement them on special occasions, cheaply.

### What are some cool modules, theme engines, and projects I can't live without?

Thousands of modules are available for download at [drupal.org](http://www.drupal.org). It can be difficult to sort through all the stuff to find the gems. Here are the latest and greatest items I picked up at the conference:

*   [Features](http://drupal.org/project/features) module: Configure a site locally, export and upload views, fields, etc. as a "feature module" to a live live site.
*   [Panels](http://drupal.org/project/panels) module: Create customized layouts for multiple users.
*   [Migrate](http://drupal.org/project/migrate) module: Migrate an old website to a new Drupal website with relative ease.
*   [Feeds](http://drupal.org/project/feeds) module: Import feed content and save as nodes
*   [Sections](http://drupal.org/project/sections) module: specify themes per url path
*   [Ninesixty](http://drupal.org/project/ninesixty) theme: grid based theme to start from
*   [Geo](http://drupal.org/project/geo) module: Allows for storage of geospacial data including points, lines, and polygons with useful content editing features.
*   [Geocode](http://drupal.org/project/geocode) module: Convert information you already have into geographic information
*   [Openlayers](http://drupal.org/project/openlayers) module: Integrates Openlayers JavaScript with Drupal websites, giving access to interactive maps
*   [Ubercart](http://www.ubercart.org) project: A set of modules for making shopping possible in Drupal.
*   [Drush](http://drupal.org/project/drush): Enhanced command line interactivity with Drupal websites
*   [Project](http://drupal.org/project/project) module: It's what Drupal uses for dropal.org/projects/\*
*   [Ctools](http://drupal.org/project/ctools) (Chaos tool suite): A set of APIs and tools to improve the developer experience
*   [Update status](http://drupal.org/project/update_status) module: Good for disconnected intranets that need the update features of connected Drupal websites (and other uses)
*   [Salt](http://drupal.org/project/salt) module: "Salts" passwords for further encryption
*   [Browscap](http://drupal.org/project/browscap) module: Increased security, browser statistics capturing
*   [Pressflow](http://www.pressflow.org): An enhanced derivative of Drupal that provides improved performance and scalability.
*   [Apache SOLR](http://acquia.com/blog/enabling-acquia-search-and-apache-solr): Improved search solution, Acquia provides this service as well.
*   [Amazon Auto Scaling](http://aws.amazon.com/autoscaling/): Manage Amazon EC2 instances, launching and closing them as needed.
*   [Mercur](http://www.chapterthree.com/blog/josh_koenig/project_mercury_preconfigured_drupalvarnish_ec2_ami)y: Run Drupal in the cloud.

What did I miss? Additional feedback from Drupalers is welcome!

![Canada talk at Pat Obrian's](/images/patobrians.jpg)

Photo by [Todd Holden](http://www.twitter.com/todddevice)

I did get a little time late nights to hang out in the French Quarter area with fellow Drupalers. I learned a lot about Canada (curling fights, [radio3.cbc.ca](http://radio3.cbc.ca/), and Corner Gas)! It turns out that designer/developers in Sweeden have the same client challenges we have in the US. New Orleans also has a local drink called the "hurricane". It tastes awful anywhere you go, but their local beers are great!

![Fritzels](/images/fritzels.jpg)

Photo by [Todd Holden](http://www.twitter.com/todddevice)

One location I visited two nights in a row was Fritzel's European Jazz Pub. They played live "traditional" jazz from 1920's and earlier. I was purely amazed by the talent there, and recommend it to everyone! It knocked my socks off.

Now to apply this stuff! I'm looking forward to it.
