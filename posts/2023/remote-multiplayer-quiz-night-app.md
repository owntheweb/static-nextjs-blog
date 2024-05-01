---
title: "Remote Multiplayer Quiz Night App"
type: Blog
date: "2023-06-01"
previewImage: /images/quiz-thumb.jpg
tags:
  - React
  - "Node.js"
  - JavaScript
  - TypeScript
  - MobX
  - BombBomb
  - Raspberry Pi
  - Auth0
  - balena.io
  - life
---

![answers closed](images/answers-closed.jpg)

I was in a newly remote team that was looking for something new to do as a bonding experience and fundraiser, remotely. As part of BombBomb's People Team, we decided to make a quiz night fundraiser, supporting our friends at [Elgone CarePoint](https://www.hopechest.org/carepoints/mt-elgone/) in Kenya, specifically to raise money for shoes. The kids there were dealing with chiggers, a tiny nasty bug that chews through feet. Shoes were the answer and we had a passion to stomp on that issue.

We weren't finding a good quiz solution at the time for 50-100 participants at once, so I decided to build one from scratch. This gave me a chance to catch up on React MobX state management that was being used at the time (I don't recommend now, try context and/or good composition and useReducer).

![create game](images/create-game.jpg)

The project was an MVP (minimal viable product). Untested (mother approved), yet did use TypeScript and pretty good React and Node work in my opinion. :D The admin for creating a new quiz accepted JSON with sufficient validation and specific errors if anything was malformed or missing.

![join game](images/join-game.jpg)

Once everything was setup, there were two parts of the game: The main display screen shown in Zoom, and the player's phone or optionally desktop browser screen where the game was played. Once everyone was ready to go, the host would use an arrow key to progress the game forward in steps.

The UI design was pretty retro, featuring a pixel font and warp starfield. This inspired the party to be 80's theme for which we also offered prizes for best costume!

![how many donuts in a baker's dozen](images/donuts.jpg)

Hosted on a Raspberry Pi, deployed and anonymized a bit via [balena.io](https://www.balena.io/) (yeah!), socket.io was used to keep everyone in sync in near-realtime without any real issues noticed throughout the game for about 50(?) participants. We had quite a few participants, with _all_ players eligible to win prizes, with or without a donation to remove pressure there. Auth0 (another learning topic for this project) was used to gather team names through a Google login and/or just entering a name and validating via an email link (no huge security enabled for this temporary event).

Once everyone submitted their answers for a question or the timer ran out, a poll of chosen answers was shown, followed by revealing the correct answer and awarding points.

Everything ran very smoothly at the event. Folks had a lot of fun. There was one issue where someone's points weren't being shown as counted the whole game. This ended up being due to her logging in via the phone, then logging in via a desktop computer, which blew my little app up for her experience as I didn't account for that. We were able to get it worked out and she actually had every question answered correctly, winning the big prize! Everyone that participated raised over $3,000 to support Elgone CarePoint. ❤️

So for the first image at the top of this post: Is the lion king of the jungle? The answer may surprise you. It's false. The lion is not king of the jungle. It lives in the savannah.

_Note: This post is backfill for a project completed sometime ago (my sense of time fails, perhaps two years ago from this post)_
