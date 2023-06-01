---
title: Stylized QR Codes for Space Foundation
type: Blog Post
date: '2011-07-08'
previewImage: /images/qrBizCards.jpg
tags:
  - business cards
  - QR
  - quick-response
  - space-foundation
  - Space Foundation
---
![QR code](/images/mobile-business-card-qr-code.jpg)

With the Space Foundation moving to a new headquarters location in Colorado Springs, the marketing team designed and ordered fresh business cards. The new cards contain a cool new feature on the back of each card: a stylized, personalized QR Code.

Contacts who receive the card may scan it with their smart phone camera using a freely available QR scanning app (available for most new phones) to download contact info directly to their phones (vCard). They may also stay connected to the Space Foundation through social media links, and even remember what team members look like with an optional photo. It’s a new high tech way for the Space Foundation to reinforce contact with others.

### What are QR Codes?

QR Codes (abbreviation for Quick Response Codes) are a ‘2D code’ scan-able by newer camera phones and dedicated barcode scanners. Being popular in Japan for several years, popularity has spread around the world and is now vastly growing in popularity in the United States.

QR codes may contain many types of information including web addresses, contact information, events, SMS messages, wi-fi networks and just plain text. The Space Foundation uses them on the business cards to launch a mobile web page with contact info and social media links. The Space Foundation marketing team is also employing QR Codes in magazine ads, print campaigns, [and websites](http://2011.nationalspacesymposium.org/mobile-features) to promote the use of mobile websites.

### Space Foundation Stylized/"Vanity" QR Codes

In my honest opinion QR Codes are fun yet UGLY. When I heard that the Space Foundation was going to use them on business cards, I did a lot of experimenting to see if I could bend the rules and make the code stay on-brand. [Other people were trying it](http://www.beqrious.com/show/custom-qr-code-design), so it seamed reasonable.

The result was an approved stylized or "vanity" QR Code featuring rounded edges, Space Foundation coloring, and the logo globe as registration marks for a more branded high-tech look. The code was tested successfully by several volunteers around the office who had smartphones to play with. Now the Space Foundation is using this QR style for everything that a mobile phone user can benefit from.

### Automating Creation of Stylized QR Codes

Space Foundation "QR Codenator" (demo link unavailable at this time) Designing a custom QR Code put me into potential trouble. Once the design was approved I started receiving requests to produce QR codes for multiple projects. Taking 10 minutes a piece to edit manually in Photoshop, I would go mad if producing them all the time. The solution: automate the production of QR Codes!

I found a great open source PHP library called [phpqrcode](http://phpqrcode.sourceforge.net/) (fitting name) that produced the standard black and white codes. Combining that with a customized jQuery interface, some added PHP and ImageMagick, co-workers are now able to generate QR Codes themselves on demand. I also plugged into [bit.ly](https://bitly.com)'s API to shorten URLs quickly (shorter URLs make for less cluttered, cleaner looking QR Codes). Cool beans!

QR Codes are just one of the new technologies the Space Foundation is using to reach out to others and enhance relationships. Soon we'll be launching a new website and other web and technology endeavors (slightly off topic but you **MUST** check out the new Space Foundation **[Mars Yard](http://www.youtube.com/user/SpaceFoundation#p/a/u/0/9DqmZ9hK6uY)**).
