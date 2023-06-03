---
title: Do It with Drupal 2011 in New York
type: Blog Post
date: '2011-11-02'
previewImage: /images/diwdNewYork.jpg
tags:
  - conference
  - diwd
  - Do It with Drupal
  - drupal
  - new-york
  - notes
  - Space Foundation
  - Times Square
---
[![Times Square in New York](/images/newYorkTimesSquare.jpg)](/images/newYorkTimesSquare.jpg)

The Space Foundation supported my coworker designer/developer Luciana and I in a trip to New York to attend Do It with Drupal October 11 - 14, 2011, organized by the Drupal training experts [Lullabot](https://www.lullabot.com/). Previously attending the [2009 event](https://www.christopherstevens.cc/blog/2009/12/14/do-it-with-drupal-seminar-in-new-orleans/), this was something I was highly looking forward to revisiting.

[![New York City subway](/images/newYorkSubway.jpg)](/images/newYorkSubway.jpg)

New York was amazing and overwhelming. It was quite disorienting, even dizzying at first, especially since I had some ear fluid buildup as a result from the flight (very odd, sure you wanted to know). Outlook improved quickly after food, rest and jumping on the subway to re-connect with a college friend who lived in the area. I had a chance to meet his wife and their very cute new baby girl! I'm extremely happy for them and the visit even chiseled on my heart regarding the whole having kids topic (oh no!).

[![Earl Miles gives a session about Semantic Views](/images/earlMilesSemanticViews.jpg)](/images/2011/10/earlMilesSemanticViews.jpg)

The Do It with Drupal conference was three days of action packed Drupal goodness. I had a chance to network and have fun with other web developers with similar goals and challenges. The session tracks were full of great topics I was highly interested in including some great case studies where we were able to take a peek inside the workings of successful websites. I was also able to interact with some of the top Drupal gurus, quickly ironing out burning questions I was struggling with. On the flip side, what I learned sparked new burning questions (that's how it works, right?).

### Answers to Burning Questions

Keeping in mind that there are multiple ways to prepare a plate of spaghetti, Here are answers to some of the questions I had. Perhaps it will inspire something. Feel free to correct or add your own.

### Q: How do I add dilithium crystals and warp engines to my website? (translation: increase performance and scalability)

A: [Nathan Haug](https://www.lullabot.com/about/team/nate-haug) gave a great presentation on how to make a website deliver content quickly and handle a LOT of traffic without breaking a sweat, running out of bandwidth before the server CPU gets tired (and what to do to prevent running out of bandwidth if traffic is that high). Some notes taken from his presentation which can be downloaded from [here](https://2011.doitwithdrupal.com/2011/sessions/performance-and-scalability) (my notes are super abbreviated: I totally recommend watching the video at drupalize.me when it is available).

*   Common culprits for website performance:
    *   Statistics module (comes with core, try using Google Analytics instead)
    *   Tracker module (comes with core)
    *   XMLSitemap (1.x branch - upgrade!)
    *   Nodewords (not sure if I'm getting rid of this one personally for great keywords and such, might look for alternative solutions though...)
    *   User Relationships module
    *   Access Control Modules (Organic Groups, Taxonomy, Access Control)
    *   Not caching content
    *   Loading lots of media content from the same server
    *   MySQL queries (database is generally the biggest resource sucker)
    *   Server configuration not optimized
    *   Server missing software that could really help juice things up
*   Steps that can be taken to improve performance/scalability:
    *   Enable page caching at admin->settings->performance with a cache lifetime of five minutes (even one minute can help!)
    *   Disable modules that are not needed.
    *   Optimize software (e.g. use [Pressflow](https://pressflow.org/), a 100% compatible replacement for Drupal core - I'm skeptical but will be trying it out for sure and looks VERY well maintained and up-to-date with Drupal changes.)
    *   Try [Boost](https://drupal.org/project/boost) module, caching requests as static HTML files (quick and easy)
    *   Make use of [APC (Another PHP Cache)](https://pecl.php.net/package/APC)
    
    *   Reduces disk access when parsing PHP files by keeping parsed files in memory
    *   Recommended shm\_size = 128M setting in php.ini to fit all of Drupal in memory
    *   See slides for further config info and links
    
    *   Optimize MySQL
        *   Make use of database slave servers if using a multi-server setup, with paged and LIMIT queries hitting the slaver servers.
        *   "Protect" the master database from queries whenever possible (caching content helps with this if not in a multi-server environment)
        *   Turn on query caching and set innoDB buffers (see slides for more details)
    *   Calculate MaxClients for Appache to prevent BAD STUFF from happening
        *   Default ServerLimit and MaxClients of 256 is generally set TOO HIGH.
        *   Run the "top" command to see what average httpd size is
        *   MaxClients \* httpd size = memory usage (figure and allow for other cached items and general server use)
    *   Add server software
        *   [Memcached](https://memcached.org/)
            *   Stores Drupal cache tables and sessions in memory, avoiding the mess that happens with excessive CPU/disk access
            *   When page cache is enabled in Drupal, memcached serves entire pages to anonymous users from memory
            *   Give room to grow, 128MB to start recommended
            *   See Nathan's slides for additional info and links
        *   [Apache Solr](https://lucene.apache.org/solr/)
            *   Great for speeding up searches
            *   Java technology that requires TomCat as host
            *   Best used if on its own machine due to high CPU usage
            *   [Acquia Search](https://www.acquia.com/products-services/acquia-search) is a hosted alternative that makes use of Apache Solr
        *   [Varnish](https://www.varnish-cache.org/)
            *   Reverse-proxy cache that serves images, static files and anonymous pages from memory
            *   Accessed before Apache, allowing for existing configuration to remain in place
            *   Cookie-based skipping of Varnish lets users fall through to Apache
            *   Checout cookie buster script for allowing of anonomous form submissions at https://lb.cm/cache\_buster
        *   [NGINX](https://wiki.nginx.org/)
            *   Alternative to Apache and Varnish
            *   Combined reverse-proxy and HTTP server
            *   Slightly faster than Varnish and Apache (I may skip for my current configuration - don't want to take a site down or change servers at this point...)

Results: For my personal needs, it looks like I could go from X (not sharing) requests per second to over **8,000 requests per second**, without spending extra money!!! HUGE improvement. I also plan on building an expansion and a "when ship hits the fan" plan for when that's needed. Thanks Nathan!

### Q: How big are other design/development teams that make similar sized Drupal websites, and what is the production time looking like for the sites they build?

A: I wanted to know how our production compared to other teams out there and if we needed to step up our game or are undermanned or over-committing in some way.

I attended a case study on [Energy.gov](https://energy.gov/), a website that currently fits the scale and complexity of an upcoming phase of SpaceFoundation.org (soon they will be bigger as they're merging 100's of sites!). Four core developers with up to ten contracted developers (flex, as needed) developed the site in roughly five months, two months being time for discovery. Beautiful site! It was great to see some of the inner workings that made this website come to life.

Other case study websites had closely sized teams. Speaking to other attendees however, there were a lot of smaller teams handling bigger websites. I noticed this especially with education based teams and a few freelancers.

Results: With two designer/developers here, my gut feelings are saying that we should slow down just a touch and take more time for development, or higher additional developers. However, the current state of Space Foundation websites (REALLY OLD), budget (we are non-profit after all) and ambitions organization endeavors (us web people are not the only ones working hard, EVERYONE is) say that we simply need to hunker down and deliver, and deliver we will! :D

### Q: Is it better to develop websites with Drupal 6 or Drupal 7 at the present time (October 2011)?

A: No doubt: [Drupal 7](https://drupal.org/drupal-7.0) for the win! We've been working on a new Drupal 6 website for some time now and D6 is something that I'm very familiar with. After attending Karen Stevenson's session on migrating from D6 to D7, I found out that the upgrade path is not a clean one yet. Views (views 2), content profiles, user profiles and some other content will not simply transfer at this time. The team here unanimously decided that switching to D7 now will cause some pain in a short migration, but will save much blood shed a year or two from now when we have a lot of content that could fall apart from D6. Besides, Drupal 7 is WAY COOL! We're going there.

### Q: How do I migrate a Drupal 6 website to a Drupal 7 website?

A: Five pints of blood. You don't have to lose it all at once as that could be fatal.

[Karen Stevenson](https://www.lullabot.com/about/team/karen-stevenson) showed how to migrate a D6 website to a D7 version. At the time of writing it's not super clean, with the requirement to completely rebuild views and user profiles (to some degree). Other than that, here are some tools/tips/options that may help (get the more detailed presentation files [here](https://lb.cm/4Er)):

*   New D7 Requirements:
    *   PHP 5.3+ is recommended
    *   32MB+ memory (was 16MB, I've had better personal success with a higher number)
    *   PHP Hash and JSON extensions (was installed by default on a couple of my machines)
    *   PHP SSH extension for the D7 update manager (was installed by default on a couple of my machines)
    *   PHP PDO Extension (NOT PECL - I think I was set here by default as well)
    *   PHP Tokenizer extension (try to see what you have for PHP extensions)
*   Look at switching to InnoDB in database tables
*   Always look at the UPGRADE.txt in D7 core files for helpful instructions and developments
*   Read this: https://drupal.org/node/948216
*   Don't overwrite your old site. Instead, make a new one with a new database so that you can start over if it all smashes on the ground.
*   Switch to Garland theme on the new install as both D6 and D7 have that theme.
*   Run update.php on the old site first and make sure all modules are up to date before migrating.
*   Uninstall unused modules before migrating.
*   Use the [Schema](https://drupal.org/project/schema) module to find unused tables in your old install.
*   Use [Hacked!](https://drupal.org/project/hacked) to find altered code which may help troubleshoot some issues before migrating.
*   Use [Variable Cleanup](https://drupal.org/project/variable_clean) to clean out unused variables on the old install before migrating.
*   Upgrade Options:
    *   [Drush](https://drupal.org/project/drush) + [Drush Make](https://drupal.org/project/drush_make): Will remove modules no longer needed (some modules have been absorbed into D7 or replaced with other means), also add new modules and revise module versions.
    *   [Upgrade Status](https://drupal.org/project/upgrade_status) module will check the status of D6->D7 modules
    *   [Migrate](https://drupal.org/project/migrate) + [Migrate Extras](https://drupal.org/project/migrate_extras) modules offer mechanisms for migrating content.
    *   Look into the [profile migrate](https://drupal.org/project/profile_migrate) module for user profile options.

Migrating is definitely possible. It's just not a one-click process. You have to work it! :D

### Q: How do I post news to multiple areas of a site and assign sub-themes that are visible when viewing news in the different areas?

A: This was a rather complicated topic I'm working out. There's a chance I might be producing a custom "multipath" module with noindex meta features to handle some of this, but the [Context](https://drupal.org/project/context) module will help a ton in regards to showing different sub-themes and menu blocks in different "contexts".

### Q: What are the latest techniques for making Drupal websites ready for mobile?

A: Mobile was a BIG theme at Do It With Drupal 2011. I attended keynotes and sessions covering different aspects of mobile including where mobile is at in general today, trends, and even how to start integrating Drupal with mobile apps.

Notes from [Jeffrey Zeldman](https://www.zeldman.com/)'s opening keynote (Jeffrey Zeldman is known as the "king of web standards" - slides available [here](https://dl.dropbox.com/u/108006/1011zeldman.pdf)):

*   Content is a design problem, and our designs are becoming hostile to content.
*   The more we make content hostile, the more people take content into their own hands.
    *   Example: InstiPaper transforms icky cluttered websites into clean and readable documents that can be read online or offline or on the go.
*   We may no longer be in control of the visual experience.
*   So what do we do as designers? Serve the customer! Designs that don't serve the people don't serve business (Do website visitors really want to see what you're showing them, or are you forcing them to view what you want them to see? Hmmm).
*   Don't destroy the customer experience by forcing "dark patterns" on people like bebos did when they had people mass-email invites to their entire address book when signing up for example (more examples to avoid at https://wiki.darkpatterns.org).
*   **Good web design starts with content. Design is topping of the content cake.**
*   **Design is hard when you don't know the content.**
*   The "This content is best view with...." days are over.
*   "[Progressive enhancement is a universal smart default](https://easy-readers.net/)"
*   People doing well have a **mobile strategy**, may get by with a **small screen strategy**.
*   **Responsive web design** is design that responds and adapts to different screen sizes and situations, designed not only for the desktop experience, but also other devices: progressive design taken to the next level.
*   Small screens force us to put the user first (no room for all that extra crap).
*   **mobile first = user first = content first**

Key notes from [Jeff Robbins](https://www.lullabot.com/about/team/jeff-robbins)' keynote:

*   Think about the term, "clik here", because the "click" interaction is changing (examples: "touch", "tap", "hold", "yell" - I'm sure some interface wants you to yell at it).
*   Jeff gave the example of the wifi lamp, a lamp that changes color based on some condition like weather change or number of website visitors. No clicking!
*   Accessibility isn't just about blind users, but perhaps sighted users who are driving down the highway.

Notes from [Josh Clark](https://globalmoxie.com/index.shtml)'s keynote, "Mobile Context Is a Myth" (This guy tweeted his presentation in real time WHOA! - slides available [here](https://globalmoxie.com/jhc/prez/mobile-context-myth.pdf)):

*   Mobile isn't always on the run. It's also on the couch.
*   Don't take out features on a mobile app, otherwise people are likely to leave the mobile version to swim around the huge version (or not swim at all).
*   eBay sells cars via their mobile app.
*   25% of web users exclusively use mobile.
*   8% of adults exclusively use mobile.
*   "Complexity is not a dirty word." (_complications_ is)
*   "Just enough is more for most..."
*   More clicks doesn't mean more bandwidth if caching.
*   click quality vs. click quantity
*   Mobile = **more** (GPS, camera, audio recorder, etc. - Does your desktop have all that?)
*   Don't think in terms of website, but of experiences.
*   Use mobile to focus, remove the surrounding crap.
*   Three reasons people use mobile:
    
    I'm micro-tasking
    
    I'm local
    
    I'm bored
    
*   Create opportunities for exploration.
*   Mobile audiences:
    *   BlackBerry: 40% of global enterprise with text-heavy interaction
    *   iPhone: active lifestyle, biggest buyers, emotional connections, statistically have more sex than Droid users
    *   Android: tech, tools, features, make it your own, younger audience
    *   Windows Mobile: aiming for personal experiences, active families, with personalization
*   Consider SMS apps since so many people use it now (75% adults, 90% kids)
*   API (Application Programming Interface) runs the show: Content and API first, mobile platforms come second. Think service, not app.
*   **A mobile apps is not a strategy. It's an app.**
*   **Thing customers, not technology**.
*   Visit https://www.futurefriend.ly

### Q: How are other web developers going about making mobile apps?

A: I've been experimenting with [Appcelerator](https://www.appcelerator.com/)'s [Titanium Studio](https://www.appcelerator.com/products/titanium-studio/) to develop cross-platform (Droid/iPhone) apps, pulling in data from a custom Drupal based JSON feeds with mild success (lots to share soon on this!). It looks like [Sumit Kataria](https://sumitk.net/) (developer of the DIWD app), [Greg Dunlap](https://nodeone.se/om-nodeone/manniskorna/greg-dunlap) (leading Drupal 8 initiative) and others were on the same track with their sessions (I heard someone was using PhoneGap for their apps, but I could never get this to work for me). It was fun to continue experimenting and get detailed feedback on some of the challenges I've been having with Titanium. The biggest gem of advice I received from Sumit was to start with the iPhone app, then apply an extra 10% of work to get it working in Android. I've been going the opposite direction since I own a Droid phone and have been running into walls that I can see resolved already. In regards to Titanium Studio, there was not a lot of code sharing. Greg Dunlap's pantsquare website may have some examples soon. In the meantime, there's a great "Kitchen Sink" app available that demonstrates a lot of functionality.

### Q: How do I connect my Drupal website to my mobile app?

A: The goal is to get data into portable JSON format and send it to the app to parse, also receiving data and parsing. Also, REST services tend to be the most easy to manage. Greg Dunlap in his session, "Drupal as a mobile application platform" (slides [here](https://www.slideshare.net/heyrocker/drupal-as-a-web-services-platform)) gave some great methods for passing data form Drupal to and from an app and back in a couple of ways:

*   [Services](https://drupal.org/project/services) module is great for handling data that involves user interaction. Users can login and do stuff using services as if they were visiting the website. This is great for mobile apps! The downside is that Services doesn't work with Views module yet (although basic lists of stuff can be created with Services alone).
*   [Views Datasource](https://drupal.org/project/views_datasource) module is a great way to package and send anonymous views. For example, it would be great for getting a list of speakers at an event, but not good for getting a private list of user friends.

Focus here again was on the API, not so much the app. Greg did mention versioning the API so people who don't upgrade right away can still access data that is being provided in the old format (good to know!).

### Q: Why should I use Drush?

A: [Drush](https://drupal.org/project/drush) is awesome, and saves a LOT of development time. Use it.

### Q: How do I \_\_\_\_ with \_\_\_\_ module?

A: You missed it. I was able to get a lot of module specific answers while in New York that were tough to get through forums or IRC. I'd love to hear about some of the questions you had answered.

### Modules of Plenty

When someone asks a question of how to do something in drupal, the answer is usually similar to, "There's a module for that". Below is a list of modules/tools I heard about in various sessions and discussions in New York, some of which I've used, some new, some just worth mentioning and a few that I'm revisiting or giving second chance. Additional modules are listed in a previous blog post from two years ago when I went to Do It With Drupal in New Orleans here. Also, feel free to add a comment if you have one you would like to add to the list. ;)

[Backup and Migrate](https://drupal.org/project/backup_migrate)  
I wish I knew about this module sooner!! The Backup and Migrate module looks like a great option to backup and restore Drupal databases with various compression options available. In combination with supported Drush commands (see below), this module will greatly accelerate database backups and disaster recovery if I mess something up (hey it has happened - this tool will help make those times less noticeable). Backup and Migrate + Drush will cut a lot of prep time for me when making big updates. The migrate part is pretty cool too. Just note that it's not a clean migrate and requires other steps. Check out \[Karren's\] session, "\[session name and link\]" at drupalize.me for more info.

[Boost](https://drupal.org/project/boost)  
Discussed in the "Performance and Scalability" session, Boost is offers static page caching of content for sites that get mostly anonymous user traffic. It removes a lot of need to run big MySQL queries to deliver content as the database queries are the thing that slows down a website the most. I know of one website that this can be applied to right away when I get back.

[Chosen](https://drupal.org/project/chosen)  
This simplish module makes use of the Chosen jQuery plugin to make pretty, user friendly select elements.

[CTools](https://drupal.org/project/ctools) This module is requirement of a lot of other modules mentioned, mentioning this module as a requirement naturally. Use of this module offers several APIs that make the Drupal development experience nice (which is why a lot of modules depend on it).

[Drush](https://drupal.org/project/drush)  
While available for download as a Drupal project, Drush is not a Drupal module. It's the command line tool of awesomeness that runs locally, connecting to local websites and live websites (via SSH), automating a LOT of repetitive Drupal tasks. For example it can manage full website module updates with a few key strokes or backup a database. Many modules installed on a website include Drush commands which offer a lot of wonderful options. I heard about it before and set it aside as I like to interact more with the update and other processes. However, clicking in a GUI a bajilion times to update a website gets OLD. After taking an introductory session on Drush, it's going to become quite the assistant (perhaps even help automate some areas completely).

[Drush Make](https://drupal.org/project/drush_make)  
Also not a module, Drush Make is an extension to Drush. A person can create a "make" file that describes all the pieces of a Drupal website distribution (Drupal core version, modules, themes, patches and external libraries like TinyMCE for example). When running a make file, Drush downloads all the specified stuff. Drush then can be used to turn on modules and configure it all. This is super helpful for quickly gathering and placing common resources for a new website (no more visiting every module page one at a time for the latest download!). Also, make sure to check out \[make.me\] website for a handy online make file generator.

[Display Suite](https://drupal.org/project/ds)  
Does drag-and-drop design sound better than constantly messing with template files? The answer is yes, it sounds awesome! I have not used this module yet, but will investigate as it may allow for more client control over content layout, or make the web team's job simpler. At the moment I'm skeptical as I don't want to install yet another module (as usual), but could change my mind once giving it a shot.

[EVA: Entity Views Attachment](https://drupal.org/project/eva)  
EVA is the D7 solution for D6 [views attach](https://drupal.org/project/views_attach) module. It attaches views to content, allowing one to show related content as one example. One example could be a podcast, attached to it being a list of other podcasts in the same series.

[Hacked!](https://drupal.org/project/hacked)  
This module looks for changes in files. It takes note of current Drupal core, module and theme files, downloads them again, and shows exact changes in conjunction with the diff module. Cool stuff! Note: does not prevent a website from being 'hacked' as mentioned on the project page.

[Heartbeat](https://drupal.org/project/heartbeat)  
I caught this one from a tweet during an unrelated session (maybe from the "Pineapple Store" session? Related or not, I'll definitely be watching that one on drupalize.me when it's available). It looks like it formats and displays a nice list of user activity, great for social sites and for other uses for sure.

[Flag](https://drupal.org/project/flag)  
Flag lets users "flag" content as anything the developer desires (examples: flag as bookmark, active, on/off, to-do, etc.). I like the views functionality that comes with Flag, showing lists of flagged items. New Space Foundation content is getting flagged when content is saved as "Needs Review" for an open workflow (using Rules to apply the flag on save), with a view of content that needs review made available to content editors.

[Migrate](https://drupal.org/project/migrate)  
Migrate was discussed by \[Karren\] in her D6 to D7 migration session as one of the four ways in conjunction with Migrate Extras module (below) to help migrate a Drupal 6 website to a Drupal 7 site, The Migrate module provides a framework for people to migrate not only Drupal websites to another major version, but also other CMS websites in general. One highlight of this module is the "rollback" ability if you migrate something and need a way to undo the damage.

[Migrate Extras](https://drupal.org/project/migrate_extras)  
Migrate Extras module gives the Migrate module more mmph. It extends support for additional modules such as CCK. Notes: Migrate + Migrate Extras doesn't cover everything if migrating from D6 to D7. Views 2 does not have a migrate path (you'll need to recreate your views). User profiles and Content Profile also don't have a migration path (I see fun database fun ahead for me personally, ouch!). For more information, check out \[Karren's\] session titled \[Drupal 6 -> 7\] at drupallize.me.

[Open Atrium](https://openatrium.com/)  
Open Atrium is an entire Drupal distribution produced by \[Phase II\] that focusses on being deployed as an Intranet. It's cool. I've been using it personally to keep track of things. I also LOVE the website design put into this project and project website.

[Panels](https://drupal.org/project/panels)  
Panels allows for the creation of custom layouts using a drag and drop interface for multiple purposes, even more when used with other related modules. This is one of those modules I've been avoiding because two years ago it added a lot of complication to my minimalistic desires. Now that time has passed, I'm planning on giving Panels a second chance on a personal fun website and taking it to the office if I like it.

[Panels Everywhere](https://drupal.org/project/panels_everywhere)  
Panels Everywhere replaces Drupal's default blocks system with advanced panels features. I'm not sure how this works yet but from what I heard it makes block-like administration more fluid the the often clunky feeling blocks page (imaging dragging blocks around after you have 30+ blocks! - lots of scrolling).

[PressFlow](https://pressflow.org/)  
This is an entire replacement for Drupal Core 6. It's optimized for performance, completely API compatible and with its history of staying up to date at almost the same rate as Drupal 6, I want to give it a try… of course now we're moving to Drupal 7 soon so I'm curious how PressFlow will evolve.

[Profile Migrate](https://drupal.org/project/profile_migrate)  
This module migrates core profile fields to nodes for use with the Content Profile module.

[Schema](https://drupal.org/project/schema)  
Schema is great for comparing the website database with the declared database schema that modules declare when they are installed. It will point out issues, really handy when migrating a site or troubleshooting the database. At a higher level, Schema extends Drupal's Schema API.

[Services](https://drupal.org/project/services)  
Menioned by several presenters and developers at Do it with Drupal, Services module offers a solution to integrate external websites and applications (like mobile apps and Flash) via REST, JSON, SOAP, etc.,. Since mobile apps where a huge focus this year (thank you Lullabot), Personally, this module gave me some great inspiration. One major disconnect is that Services doesn't work with Views, and since most of my content on the website that I want in an app are carefully structured with Views I can't use it for most of my current content. Views Datasource is better for that (below, anonymous users only). However, Services excels greatly at handling user authentication and handling user requests making this module a must-have in my near future. For example usage and code, check out the very fun www.pantsquare.me

[Upgrade Status](https://drupal.org/project/upgrade_status)  
Handy when migrating a website from one major version to the next (Drupal 6 to Drupal 7 for example), Upgrade Status helps a person follow upgrade steps and checks the availability for the next major Drupal release.

[Variable Cleanup](https://drupal.org/project/variable_clean)  
Variable Cleanup specials in de-bloating the variable table. Lose the fat! At the time of writing, this module is still in dev. Remember to make backups first.

[Views Bulk Operations (VBO)](https://drupal.org/project/views_bulk_operations)  
VBO is a powerful module that allows operations (actions to be taken) on content in rows of a view. One basic example might be to publish all nodes in a view showing unpublished nodes. It's gotta be nice to create a list of stuff and make stuff happen to all that stuff (my fingers and brain are getting tired, can you tell?).

[Views Datasource](https://drupal.org/project/views_datasource)  
Another great way to get data from a Drupal website out into the wild (or at least a mobile app featuring wild animals). Views Datasource is great for taking a view and transforming it into XML, OPML, Atom, JSON and other formats. The caveat is that it will only provide data for content available to the general public, but not good for providing a list of friends for example (can't get a private list of friends if you can't authenticate the user to figure out who his/her friends are).

### Recommended Books

[A Book Apart](https://www.abookapart.com/)

[Adaptive Web Design: Crafting Rich Experiences with Progressive Enhancement](Crafting Rich Experiences with Progressive Enhancement)

![9/11 Memorial](/images/9-11Memorial.jpg)

After the conference I had a chance to venture out and get to know New York a little better. After jumping on a couple wrong trains (oops!), I managed to find my way to the 9/11 memorial.

![a memorial wall by 9/11 memorial](/images/9-11memorialWall.jpg)

Sadly, I wasn't able to get in to the memorial itself due to limited access requiring a reservation due to all the construction. I was able to walk around and think about what happened there.

![New York Times Square](/images/newYorkTimesSquare2.jpg)

Times Square was a very alluring, bright at night destination. Talk about information overload!

![me, drawn by a great sketch artist by Times Square](/images/meNewYork.jpg)

I found an excellent chalk artist who replaced my twitter profile image right next to the main strip. I've always wanted to try it out at various craft fares and carnivals and it was a god break from the cluttered main street. The drawing was impressive!

Before flying back, I enjoyed a fine breakfast consisting of a "Brooklyn Omelet" and a huge slice of genuine New York cheesecake. YUM!

Flying to New York for Do It with Drupal was totally worth it. I'm back with a new arsenal of digital mayhem and can't wait to deploy it!

Disclaimer: Views and statements contained in this personal blog do not express the views of the Space Foundation.
