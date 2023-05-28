---
title: DrupalCon Austin 2014
type: Blog Post
date: '2014-06-11'
previewImage: /images/feature.jpg
tags:
  - Needs Tagged
---
![DrupalCon Austin 2014](/images/IMG_20140603_222404b.jpg)

![Downtown Austin, Texas - Rock n Roll Saved My Black Heart and Soul](/images/IMG_20140603_222404b.jpg)

![DrupalCon Drone Photo](/images/crowd.jpg) DrupalCon Austin drone group photo taken by [Michael Schmid](https://twitter.com/Schnitzel)

With many thanks to the [Space Foundation](http://www.spacefoundation.org/), I had a chance to join a record breaking 3,400 web people for a week at DrupalCon Austin 2014! While there are many Drupal related events throughout the year around the world, DrupalCon is the BIG event, reuniting developers world wide to share ideas, work out challenges and propel cyberspace-related endeavors for the better.

For me personally, DrupalCon was a great place to meet with individuals to tackle some development concepts, shop around for improved hosting options, get fresh ideas on how to manage online transactions, fill in security gaps and discover things I never knew to look for. I feel that the event will pay itself off quickly as I head back to work with new contacts, tools and ideas.

Here are some of the highlights from the trip:

### Drupal 8

When should I start migrating everything over to Drupal 8? This was the big looming question that was eating at me on my way to Texas, especially as I've been working with Drupal 7 over the last couple of years and didn't want to miss the plane on the next big project. Dries Buytaert, founder of Drupal, made this clear in his opening keynote: About one to 1.5 years is when Drupal 8 will likely happen. He recommended using Drupal 7 for 99% of projects for now. The 1% of projects covers developers who don't mind working with unstable versions and migrating to new unstable versions (I think I'll happily stick with stable stuff today).

#### What's different in Drupal 8?

In short: A lot, for the better (in my opinion). Here are some of the high level differences:

*   Inline editing - my co-workers will enjoy clicking on what they want to edit and simply edit without going to a separate edit page.
*   More secure - templates are created with [Symfony](http://symfony.com/)/[Twig](https://drupal.org/node/2008464), preventing PHP in templates which increases security big time, and creating a standard way to access databases and such (correct me if I'm wrong on any of that)
*   Improved data modeling tools - more robust ways to access everything when developing
*   More built-in field types like link, phone, date, email, entity reference
*   Lots of "killer modules" used in Drupal 7 built-in to Drupal 8 - Do more to start without the need to install lots of modules right away
*   RESTful from the ground up - allows for simpler mobile app and other external integration right out of the box!
*   All about user experiences: Less awkward things I currently have to train my co-workers to get around.
*   Improved configuration management: Less storing of odd serialized configuration of everything stored in a single database table.
*   Modernized for modern web browsers: All the HTML5 goodness out of the box
*   Tour!: Built-in tours of how things work can be created, great for first-time content contributors or non-technical applicants, etc.
*   ...AND MORE! I have lots of little bullets in my notes. If you think of a big one I missed, let me know and I'll place here!

![Drupal 8: Controller or Handler](/images/controllerHandler.jpg)

Wolfgang Ziegler gave a great overview of Drupal 8's Entity API ([watch it here](https://www.youtube.com/watch?v=9Qb2JNi_C2U&feature=youtu.be)). This was a good, dry (but important) session that covered how to build stuff around the core bits of Drupal 8. Rather than pasting in a bunch of tech stuff here, I recommend watching [the session](https://www.youtube.com/watch?v=9Qb2JNi_C2U&feature=youtu.be).

### Online Purchasing Experiences

One area I'd like to focus on for upcoming Space Foundation projects is the customers' purchasing experience. It's also the scariest topic as it involves PCI compliance, transfer and/or storage of personal information, user accounts, all involving much more attention and responsibility. But this is not a reason to avoid such things, especially with increased ROI potential. With a vision to have users experience seamless purchases, a login area, purchase history, profiles and a way to keep people engaged after purchases, I want to go there!

Short term, I found some ways to better connect our current systems post-purchase for basic user accounts to be created using custom module and database exports (omitting the bulk of personal info). Long term, I found a [great white paper](http://drupalpcicompliance.org) on how to work through PCI compliance requirements via a Drupal site. I also met some people that could help with a more robust set of solutions for contacts, emails, payments, etc. that keep our sites connected but not storing all the personal stuff (oh man, plenty of discussions to be had everywhere soon!). It was great to have so many people with similar challenges and solutions together in one place, not so accessible outside of an event like DrupalCon.

#### Drupal Commerce

I sat in on a session on how to take donations and online subscriptions via Drupal Commerce. It was FAST to setup, and I was impressed with the presentation. Check out [Commerce Kickstart](https://drupal.org/project/commerce_kickstart), a Drupal distribution that has many critical things pre-configured for selling just about anything online. Also watch these two sessions for an excellent walk-through: [lab session 1](https://www.youtube.com/watch?v=_uzndDBjgZg), [lab session 2](https://www.youtube.com/watch?v=XOg_uWiC5MY).

### Website Security

Serving as a web server administrator recently (in addition to development, database management, website building, designer and even logo designer lately - the life of many non-profit web people), I felt there was still more I needed to know about securing the stack from bottom up. Two sessions attended were very enlightening if not a touch sobering, kicking some things I hadn't thought about into gear. This also sparked some discussions with other companies such as [Black Mesh](http://www.blackmesh.com/), [Acquia](http://www.acquia.com/) and [Pantheon](https://www.getpantheon.com/) about value-added hosting services in this area for the future, freeing me up to focus more on user experience and design.

![](/images/security2.jpg)

Mark Stanislav gave an excellent overview of web server security, not Drupal-specific but also covered some excellent Drupal material such as modules that check different things. At the end of his presentation I knew more about how to make our sites more elusive to mass hackings, at the least buying time to resolve known issues while easier fish are cooked. I also learned a bit about two-factor authentication, making logins more secure (also a touch harder for some, but not something to dismiss for sure). View the full session [here](https://www.youtube.com/watch?v=UPGQdxFt0YE&feature=youtu.be).

![](/images/secureTheStack.jpg)

Drupal security superheros Greg Knaddison and Stéphane Corlosquet covered Drupal more specifically. The info hit so fast I have to rewatch the presentation a couple more times to absorb it all. I was very happy to see some basic tests that I can run, covering a bulk of XSS (cross site scripting) attacks, one of Drupal's most commonly encountered attacks. View the full session [here](https://www.youtube.com/watch?v=yhG3QtLwaV4&feature=youtu.be).

### Organization Intranet/Extranet

An intranet or extranet to unite organization functions has been on the plate since I walked in the door five years ago, ever pushed back due to ever-growing customer priorities. No one could deny though that it would be great to submit and track those timesheets online or have some united calendars for meeting room reservations, or find that phone extension no one can ever remember, or have a place where new hires could find all the basic info they need when they walk in. With other pre-built solutions out there not meeting all team requirements, how can a custom, flexible Drupal version be made quickly?

![Mike Potter, Phase2](/images/phase2.jpg)

I had a chance to meet with Mike Potter with Phase2, developer lead for [Atrium 2](http://openatrium.com/#!/), an intranet Drupal distribution. Now, I've tried to use the first Atrium. It was marketed very well and rather difficult to extend (might have been simpler to start from scratch). However, Atrium 2 is much more Drupal-like, with some starting modules and configuration that makes it quicker to get things going. I'm excited to give it another go.

### Project Requirements Gathering

I totally recommend [this session](https://www.youtube.com/watch?v=mImo1WbcLyw&feature=youtu.be) to be watched by my comrades, technical or not, presented by Jordan Hirsch. Not only was it highly entertaining, it served as a great refresher on how to tune in to customers' _needs_ by listening to what they _want_. Gathering requirements for a project requires a bit more than just getting a list of "needs". It requires listening, interpreting and that gut sense of what's missing and where things are going.

### DrupalCon vs. Space Symposium

I couldn't help but notice several parallels between the Drupal community's event, [DrupalCon](https://austin2014.drupal.org), and the space industry's event run by the Space Foundation, the [Space Symposium](http://www.spacesymposium.org) (I did my part in the latter). They were similar in a lot of ways, and also an alternate reality to each other. Both share the interest of getting people together to unite and get work done. Both are organized by an independent non-profit. Both happened on a similar schedule, with extra events happening Monday until grandiose events Monday evening. Both had sessions, exhibitors and side business meetings, etc. Both had very diverse participants and both inspired me a lot.

I think the major differences were dress code, average age, technical focus and some formalities.

![Opening Keynote](/images/criticalTissues.jpg) Git watches as Captain Over-Engineering's minions wrap Dries in "critical tissues" during a pre-keynote skit.

One of the biggest contrasts between Space Symposium and DrupalCon is how things get started. Space Symposium kicks off with an Opening Ceremony, showcasing performing arts, a general industry overview and recognizing accomplishments in space-related endeavors with prestigious awards. DrupalCon seems to really kick off with "pre-opening" humor, celebrating frustrations in the community with a skit and/or song (this year both), followed by a community overview and call to arms.

![DrupalCon Exhibitors](/images/exhibitors.jpg)

Both Space Symposium and DrupalCon feature exhibitors, with lots of ideas and business being achieved. Space Symposium is more formal, with a strict dress code (full suits!) ideal when meeting government and commercial space leaders, not commonly seen at DrupalCon (DrupalCon has more Drupal/developer leaders of course). However, I did see a couple people wearing suits at DrupalCon... as well a guy wearing a pink tie-died rainbow unicorn T-shirt! While dress code differed, both audiences seemed to know how to have fun and get things done.

![Mechanical Bull Ride](/images/bull.jpg)

One thing you won't find at Space Symposium is a mechanical bull (they'll have a cool space module on display instead, some making espresso or fresh baked cookies). At DrupalCon, [azri](http://azrisolutions.com/) provided a mechanical bull for a chance to win an iPad for longest ride... I'll have to see if we can add one of these to the Space Foundation booth at Symposium. ;)

Overall, I observed some potential enhancements to bring over to Space Symposium and maybe a few things to bring to the next DrupalCon. ;)

### Random Cool Stuff Discovered

#### Kalabox

[![Kalabox Interface](/images/kalabox.jpg)](http://www.kalamuna.com/products/kalabox) I was so happy to know that my Kalabox happiness was maximal.

With [Kalabox](http://www.kalamuna.com/products/kalabox), it only took me a few minutes today to install a local and remote dev environment, mixing "VirtualBox and Vagrant into its hot bubbling cauldron of Deep Dark Magic" (and don't forget about Git). I missed the session on this, but man, it's cool. With more experimentation, this has the potential to enhance my team's development workflow. More information is available [here](http://www.kalamuna.com/products/kalabox). You can also support this project on [Kickstarter](bit.ly/kalabox2).

#### Two-Factor Authentication

I learned some interesting bits from Mark Stanislav (he gave a session after we met at lunch, not knowing at first that he was giving a session right after lunch) about two-factor authentication. Basically, an app on your phone or other means lets you know that someone is logging into your account, or requests approval before proceeding with login to your account. This extra authentication greatly increases security, preventing the bad guys from getting in, even if you picked a terrible password like, "password". The app that his company provides for this is called duo. [Here is the website link](https://www.duosecurity.com) (and there's a [Drupal module](https://drupal.org/project/duo) for that).

#### Membership Management

I see memberships of different kinds being managed on Space Foundation websites soon. To that thought, I felt that the [Membership Entity](https://drupal.org/project/membership_entity) module, developed by Colorado's [Monarch Digital](http://www.monarchdigital.com/blog/2014-03-17/announcing-membership-entity-contributed-module-drupal) has a lot of potential in dealing with membership complexities.

### Personal Highlights

First, I had a chance to meet with my best friend who lives 30 minutes away from Austin before DrupalCon began. We traveled to one of his favorite family meeting points, The Catfish Parlor, for some AMAZING catfish, coleslaw and hush-puppies. It was great catching up, getting the lay of the land downtown, and just hanging out.

![Congress Bridge, Austin, TX](/images/congressBridge.jpg)

I was blessed to "live" next to Congress Bridge for a week, where the famous bats in Austin like to dwell. I even had a chance to share a couple of the brightest passings of International Space Station I have ever seen on that bridge.

#### Met Lots of Amazing People

I feel that DrupalCon's best payoff was the ability to meet with all sorts of people individually. I gained more insight and inspiration that way than with the sessions! It was awesome being next to so many talented people.

#### Joined the Drupal Association

Not being a major contributor code-wise just yet (although watch for an awesome module contribution coming soon), I felt the need the contribute in others ways. Joining the [Drupal Association](https://assoc.drupal.org/home) was a start.

#### Explored Downtown Austin

![Downtown Austin at night](/images/austinDowntoenNight.jpg)

Austin was great to visit. It seemed like every other block had a skyscraper being built. The place was bustling and beautiful... and hot... and humid! While thankful for the dry, cool climate I live in, I'll definitely go back for another visit.

#### Saw Someone Wearing a Pink Tie-Died Rainbow Unicorn T-shirt

If only I had a picture...

#### Fun Was Had

![Trivia Night](/images/triviaNight.jpg) Photo taken by [Michael Schmid](https://twitter.com/Schnitzel)

Most activities ended with trivia night (followed by additional core development sprints the next day). Fun and tough, I joined forces with other Colorado participants competing for small prizes in a series of quiz rounds. We didn't place first. We didn't place last either! :D

Many questions were answered on this trip. I can't wait to implement new fuel found at DrupalCon Austin in upcoming Space Foundation projects!

Disclaimer: Views and statements contained in this personal blog do not express the views of the Space Foundation.
