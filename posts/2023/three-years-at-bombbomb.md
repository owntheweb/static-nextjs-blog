---
title: "Three Years at BombBomb"
type: Blog
date: "2023-07-10"
previewImage: /images/bombbomb-logo.jpg
tags:
  - BombBomb
  - PostgreSQL
  - Oracle
  - "Node.js"
  - PHP
  - JavaScript
  - React
  - AWS
  - Email Service Provider
  - life
  - JavaScript
  - TypeScript
---

![image](/images/bombbomb-logo.jpg)

I've had the pleasure of working with [BombBomb](https://bombbomb.com) over the last three years as a software engineer, tech lead and senior software engineer. With a mission to re-humanize communication, this was the best place to thrive over a pandemic when I was hired. While BombBomb was helping people connect and build relationships over video asynchronously, I much enjoyed connecting with an excellent team and working on super cool challenges. I also really appreciated how BombBomb gave back to the community in a very personal way (Springs Rescue Mission, Mary's Home, COSILoveYou, Care and Share, Mt. Elgone CarePoint, more I'm missing).

A lot of great things happened over three years. Here are my favorite highlights:

- I spent much time working in React, Node.js, PHP, Oracle (and the process of switching everything to Postgres), plenty of AWS efforts, TypeScript in some areas.
- With BombBomb being an email service provider (ESP), I gained a lot of experience working with fast-paced data and email reputation as we often sent over a million emails per day. This was one focus area for my team.
- For cost savings and backup efficiency, I reduced the production Oracle database to roughly half the size (reduced by several terabytes), migrating a set of infrequently accessed data to S3 while still supporting reads/writes for that data. The process to get this data moved in a very active website without much downtime or any lost data was a blast.
- I played a large part in enabling compliance file transfers so that companies could quickly obtain a copy of their BombBomb videos stored in their own S3 buckets. This involved a Node.js app that would audit and transfer videos after recording with a nightly audit process to transfer anything missed (example: an enterprise customer just signed up for this and needed all past videos transferred).
- A favorite: I joined the philanthropy team as part of the BombBomb people team, helping to support the local community and our neighbors abroad. My favorite related endeavor was helping to internally promote a successful fundraiser. This also involved creating a React/Node.js-powered quiz app for a company-wide remote 80's themed quiz night, with the homemade quiz hosted on a Raspberry Pi (so fun!!). We raised over $3,000 to support a group of kids we were connected with to purchase shoes.
- Being promoted to tech lead, my refocussed security team enabled password protected videos and expiring videos. This was a cross-team effort involving the transfer of videos to secure S3 buckets, signing urls and building out microservices that talked each other and our main web app in a sensible and secure way.
- BombBomb switched from using Oracle to Postgres as it approached a critical cost tier. I handled many query rewrite and other related migration tasks, especially around a large legacy product no one fully understood. We did understand after a great documentation effort to go along with the migration. I grew a lot professionally with this full team endeavor!
- As the team shrunk a bit after pandemic happenings and the workforce reduction with that, I joined a strike team where we redesigned/rebuilt the video browsing experience on the BombBomb website. The team injected the latest React trends and best practices into my brain and I had a chance to build a few neat components while continuing ESP and legacy product support (also involving React).

As pandemic activity settled, a lot had changed with BombBomb's client base, company trajectory and with a company restructuring. This was generally happening with the tech industry as a whole it seemed. As a result, our team shrunk a lot more, triggering a new job search for myself and others.

I move forward with fondness for BombBomb and its continued focus in connecting folks through video. I've been using my BombBomb account to connect with potential employers effectively, potentially giving me an edge to cut through the application noise. I'm excited to see BombBomb succeed in its endeavors while I'll use their service I enjoyed contributing to in my own future work regularly.
