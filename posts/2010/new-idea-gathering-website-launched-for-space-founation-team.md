---
title: New Idea Gathering Website Launched for Space Founation Team
type: Blog Post
date: '2010-06-16'
previewImage: /images/whatsMissing.jpg
tags:
  - breadcrumbs
  - Drupal
  - JavaScript
  - refresh-view
  - Space Foundation
---
![Space Foundation Redesign Project](/images/redesignwebsitepreview.jpg)

After some brainstorming and planning with team members Luciana and Paul, I built and launched a site to gather ideas for a new [SpaceFoundation.org](http://www.spacefoundation.org) website (link not available to the public at this time). Based on the [Acquia Prosper](http://drupal.org/project/acquia_prosper) theme, the site gathers ideas from team members on an 'as I think of it' basis, rather than throwing everyone in a cramped meeting for two hours yielding little lasting results. The new site also gives team members from all areas of the Foundation the opportunity to contribute, and track the status of submitted ideas.

At the early stage of planning, site activity hasn't quite picked up yet (although some great ideas have been received already!). However, the opportunity to experiment while developing this less formal site has answered many Drupal development questions, benefiting future Space Foundation websites. Here are the bigger questions answered:

- [How do I take full control over breadcrumbs on very large Drupal websites?](#how-do-i-take-full-control-over-breadcrumbs-on-very-large-drupal-websites)
- [How do I create a node without leaving a page, using JavaScript?](#how-do-i-create-a-node-without-leaving-a-page-using-javascript)
- [How do I refresh a view on a page, without refreshing the entire page?](#how-do-i-refresh-a-view-on-a-page-without-refreshing-the-entire-page)
- [What's the best way to bulk import predefined users into a Drupal website, with accounts and profiles?](#whats-the-best-way-to-bulk-import-predefined-users-into-a-drupal-website-with-accounts-and-profiles)
  
### How do I take full control over breadcrumbs on very large Drupal websites?

[Menu Breadcrumb](http://drupal.org/project/menu_breadcrumb) is a great place to _start_. It was used on [NationalSpaceSymposium.org](http://www.nationalspacesymposium.org) in conjunction with the [Auto Menu](http://drupal.org/project/automenu) module (creating disabled links under parent links) to keep breadcrumbs consistent with every content type and parent pages. _However_, after a year of additions the primary menu editing page looks like this:

![Menu Breacrumb menu that never ends!](/images/menubreadcrumbsendlessmenu.jpg)

**OUCH!** This type of functionality would kill a large ongoing website very quickly, or at least the menu editing page.

A better solution for large websites used in the new idea site makes use of [Custom Breadcrumbs](http://drupal.org/project/custom_breadcrumbs) AND [Menu Breadcrumb](http://drupal.org/project/menu_breadcrumb) modules together. Custom Breadcrumbs module is great for tailoring breadcrumb templates for content types like news, blogs, ideas, etc., that always stay in the same section of content. I found Menu Breadcrumb module to be handy for general pages on the site that don't have a specialized purpose, like 'About Us', with its sub-pages.

The 'Home' breadcrumb that Drupal likes to place in content no matter what, causes some inconsistency issues when working with Custom Breadcrumbs module. I couldn't seem to get rid of 'Home', no matter what. For example, you can specify a custom home link in Custom Breadcrumbs, but Drupal will still show 'Home' before that sometimes. While using Custom Breadcrumbs to create a new default home link ("What's missing?" in my case), Here's a quick function placed in template.php that rips out the default breadcrumb:

```
[this code didn't survive one of the blog data migrations...]
```

### How do I create a node without leaving a page, using JavaScript?

The idea website has a form (seen above) that lets people rapid fire ideas on their mind without leaving the page. It breaks the rules of traditional Drupal websites where people are expected to visit a node creation form on its own page. This was achieved by producing a custom module. Don't panic, as it's a great custom module to start with if you're new at Drupal module development. I won't get into the gritty details here, but recommend reading [this fine post](http://acquia.com/blog/migrating-drupal-way-part-i-creating-node) on how to create a node using php, and [this excellent read](http://drupal.org/node/121997) on JavaScript/Drupal interaction.
### How do I refresh a view on a page, without refreshing the entire page?

In the case of the idea website, I had two block views that needed refreshing after an idea was submitted, to show the newly added ideas. [This link](http://groups.drupal.org/node/32650) shed some light on the topic. It's actually pretty simple! Triggering the following javascript will refresh a view, without refreshing a full page (look at page source code to figure out view\_display\_id):

```
$.get(
  "/views/ajax/?view_name=view_name_visible_on_views_list_page&view_display_id=block_1&view_args=",
  function (data) {
    var refreshResult = Drupal.parseJson(data);
    $("div.view-id-idea_lists").html(refreshResult.display);
  }
);
```

### What's the best way to bulk import predefined users into a Drupal website, with accounts and profiles?

I didn't want to make over 45 team members sign up for this idea site (especially since it wasn't open to the public). Instead, the process needed to go away altogether, just importing accounts, generating passwords, and sending login info for instant access.

[Node Import](http://groups.drupal.org/node/32650) module was extremely helpful for this. It set up accounts with info listed in a csv file provided by our awesome HR person. The hardest parts were generating usernames for each user (thanks Luciana!), and importing content profiles ([Content Profile](http://drupal.org/project/content_profile) module) separately, assigning the profiles to the users through the 'authored by' field.

It's almost time to start building the actual Space Foundation website. I'm extremely excited to get this project moving!