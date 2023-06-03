---
title: Brain Dump from Drupalcamp Colorado 2010
type: Blog Post
date: '2010-06-28'
previewImage: /images/dropalCampColorado.jpg
tags:
  - Colorado
  - designers
  - developers
  - Drupal Camp
  - networking
  - Drupal
  - life
---
![drupalcamp](/images/drupalcamp.gif)

Image from [drupalcampcolorado.org](https://drupalcampcolorado.org) website

Over 300 people attended [Drupalcamp Colorado] *-link archived-* over the June 26-27 weekend, including myself and Space Foundation co-worker Luciana. For a mere $30 admission fee (unless waiting untill the last second), Drupal developers, designers, enthusiasts, and interested newcomers met for sessions, networking, and some pretty darn good food (Don't forget the free beer provided by [Volacci](https://www.volacci.com/) Saturday evening!).

I feel the event was totally worth attending. It was a chance to poll others on their development issues, help each other out, and speak the same language for a weekend. Here's some takeaways of interest that helped me out a ton:

### Modules of Interest Discussed in Sessions/Conversations:

I'm sure there's several additional modules discussed in sessions that I didn't attend not listed below (care to share what you picked up?). Here's the ones that stuck with me in sessions and various conversations over the weekend:

**[Contextual Administration](https://drupal.org/project/context_admin)** Deploy custom, more user friendly administrations for different user roles. Design something to make content management easier for your customers.

**[Services](https://drupal.org/project/services)** Acting as "a standardized solution of integrating external applications with Drupal", I feel this module would be great for connecting Flash or mobile apps with a Drupal website via JSON and other data formats.

**[Flag](https://drupal.org/project/flag)** Flag was used to "flag" or "star" events I wanted to attend in my Drupalcamp Colorado schedule. I list it here because it will be a perfect addition to Space Foundation event schedules, making them personalized.

**[jQuery UI](https://drupal.org/project/jquery_ui)** Adding jQuery UI to Drupal allows the ability to add great JavaScript controlled tabs, accordion menus, and other elements that would be more complicated without the module. More information about jQuery UI can be fount [here](https://jqueryui.com/). A great example showcased in [Ken Woodworth] *-link archived-*'s session, 'Enhancing Drupal Interfaces with JavaScript and Flash', is [Adaptive Learning Mechanism](https://www.adaptationlearning.net/). Check out the accordion menu on the right of the home page.

**[jQuery Update](https://drupal.org/project/jquery_update)** On a related note, jQuery Update does what it says. It updates the Drupal built-in version of jQuery to a newer version. The newer version is required for many jQuery widgets and Drupal modules out there.

**[drush](https://drupal.org/project/drush)** Drush is a development tool that runs on the server (plus as a module), performing Drupal maintenance tasks with ease using the command line. I would say a majority of Drupalcamp Colorado presenters used this tool during their presentations. Rachel Makrucki gave a fantastic presentation about developing modules, and gave examples of how to use drush. I watched her turn 30 minutes of the usual downloading, uploading, unzipping, pointing, and clicking into 10 seconds of type->enter->confirm->done (think apt-get for ubuntu). I'll have to talk to my IT guy on getting this set up on the server.

**[devel](https://drupal.org/project/devel)** I already use this module to help pull apart nodes for theming purposes. However, this module comes with a TON of tools and debugging functions to help develop for Drupal websites. On an added note, presenters recommended using this only in test invironments, NOT on the production website.

**[Schema](https://drupal.org/project/schema)** Schema is great for writing .install files, create tables, and writing the code that handles all this. It's a time saver for module developers.

**[Module Builder](https://drupal.org/project/module_builder)** This module lets you select what things you want to develop for (e.g. the menu, hooks, etc), then automatically writes the 'scafolding' php of the module for you. Used by advanced developers and beginners alike, there's actually a checkbox to indicate your experience level. Beginners get extra comments placed in the generated code. This module makes me drool and will save headaches.

**[API](https://drupal.org/project/api)** Generates developer documentation as seen at https://api.drupal.org .

**[Examples for Developers](https://drupal.org/project/examples)** Examples for Developers is a module that gives a wide range of development examples

**[Coder](https://drupal.org/project/coder)** Assists with code review, code manipulation, and code standards.

**[Simpletest](https://drupal.org/project/simpletest)** Testing is necessary. Simpletest helps make testing simpler, and helps identify bugs one may not be aware of.

**[Admin](https://drupal.org/project/admin)** An alternative to [admin\_menu](https://drupal.org/project/admin_menu) that some developers/customers prefer, giving a vertical, hidable menu to the left instead of a drop down menu at the top.

**[Semantic Views](https://drupal.org/project/semanticviews)** Allows for better customization of views, less template files, and more theming options.

**[Semantic CCK](https://drupal.org/project/semantic_cck)** Skips much need for node or field template files. I personally tend to create a lot of these files for formatting control and will use this module instead moving forward.

**[CSS (the module)](https://drupal.org/project/css)** Creates a CSS field that could let people customize CSS per page (not really recommended for general users due to CSS security hacks), but also give the ability to theme different node types more easily. I haven't looked into this too deeply yet, but I'm guessing a content\_type could have a field with a default CSS value, not editable by the general public. (correct me if I'm wrong)

**[LESS CSS Preprocessor](https://drupal.org/project/less)** I feel this one is really cool and a major time saver. It's a CSS preprocessor that allows for variables and functions to be defined in your css file (e.g. you can define a color "@orange: #FF9900;" (that example may need adjusting) and reference it by name everywhere "color: @orange;" instead of "color: #FF9900;". The preprocessor generates the CSS before viewing a page, and caches it in the database to be loaded like a regular CSS file. It's also possible to nest CSS. Check it out!

**[Style Stripper](https://drupal.org/project/stylestripper)** Pick which CSS files should load for themes.

**[@font-your-face](https://drupal.org/project/fontyourface)** Use non-standard fonts (for real) on your website. It's not a font embedded in an image. It's a font, and is cross browser compatible. @font-your-face connects to font services (or fonts hosted on the site from a service), and makes fonts happen on the site. Text is selectable, normal, real.

**[Mobile Tools](https://drupal.org/project/mobile_tools)** Detect what user agent is visiting the site (e.g. normal screen, iPhone, iPad, Droid, etc.), and redirect or switch themes based on that info. It also works with Panels \[https://drupal.org/project/panels\], and much more.

**[Apache Solr Autocomplete](https://drupal.org/project/apachesolr_autocomplete)** Real-time search results when filling out a search form (requires [Apache Solr](https://lucene.apache.org/solr/))

**[Apache Solr AJAX](https://drupal.org/project/apachesolr_ajax)** Perform Solr searches without refreshing the page, also filtering results with additional options without page refresh. (requires [Apache Solr](https://lucene.apache.org/solr/))

**[Ubercart eBay Integration](https://drupal.org/project/uc_ebay)** I guess it's not out yet, but someone is working on making hands free ebay integration with ubercart. Totally cool!

**[Storm](https://drupal.org/project/storm)** Organizations, teams, people, projects, tasks, tickets, timetrackings, notes, knowledgebase, invoices, expenses. It also integrates with Open Atrium \[https://openatrium.com/\] (Anybody else using Storm? What do you think?)

### Themes of Interest

**[.mobi](https://drupal.org/project/mobi)** Great starter theme when building mobile websites for mobile devices

**[Mothership](https://drupal.org/project/mothership)** A clean slate starter theme that strips out as much 'junk' as possible, sometimes 'too much'. It's a great place to start a from-scratch theme, before getting into other theme systems like zen or grid systems.

### Additional Interesting Resources

Recommended Book: [Pro Drupal Development] *-link archived-* by John VanDyk

Chat: IRC #drupal-colorado for Colorado Drupal discussions

Virtual Linux machine for Windows (because "Drupal was designed for Linux"): [VMware Player](https://downloads.vmware.com/d/info/desktop_downloads/vmware_player/3_0) (free, not to be confused with VMware Workstation or other products)

Front end GUI to drush: [Aegir](https://groups.drupal.org/hostmaster2)

Free Code Editor: [Komodo Edit](https://www.activestate.com/komodo-edit/downloads) (Komodo is not free, Komodo Edit is free)

Drupal Forum: [https://drupal.org/forum](https://drupal.org/forum)

Your Local Drupal Users Group (search [https://groups.drupal.org](https://groups.drupal.org/) and [https://www.meetup.com](https://www.meetup.com))

Quote of wisdom: "Drupal is free like kittens are free" --posted on Twitter by [Miles France] *-link archived-*

Words that scared me: "PCI compliance" (It's good to be scared about that though)

Once in a while I start to get that heavy burdened feeling when dealing with the Drupal development/design issues that come up. Drupalcamp Colorado removed that once again however, as I now have fresh perspective on various items that were plaguing my thoughts. It helps to have a great community to bounce ideas off of, pitch in where possible, and gain so much from.

I look forward to seeing everyone next year, and many at the local meetup groups until then!

Hmmmm. Time to rebuild this blog in Drupal and update my H3 tags to NOT red, you think?
