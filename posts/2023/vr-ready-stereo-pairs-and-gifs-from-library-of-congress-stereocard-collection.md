---
title: 'VR-Ready Stereo Pairs and Gifs From Library of Congress Stereocard Collection'
type: Blog
date: '2023-08-02'
previewImage: /images/stererocard-to-vr-stereo-pair.jpg
tags:
    - React
    - 'Node.js'
    - React Testing Library
    - JavaScript
    - TypeScript
    - life
    - VR
---

![stereocard viewer](images/stereocard-viewer.jpg)

As a mild collector of antique stereocards, the VR of the 1800's that was still pretty active in the 1970's in different forms, I was pondering the exploration of all this old 3D data in modern virtual reality. I don't own a VR headset yet (expensive and don't want to punch my kid or cat in Beat Saber). However, there's still room to explore "flat" VR concepts with 3D modeling and interactive programmable worlds such as NeosVR. Why not launch a VR museum featuring antique stereocards? It would be super educational and fun.

This was also a great opportunity to keep sharpening my React skills for happenings at work. React Testing Library needed more practice and I just needed a bigger personal project to keep creating smaller-ish React projects, that would create fun puzzles to solve. It's better to do this at home rather than causing big puzzles at work, right? :D

![Roosevelt's "Rough Rider's" [sic] arrival at Tampa, Fla., U.S.A.](images/service-pnp-stereo-1s00000-1s01000-1s01900-1s01904r.jpg)
Roosevelt's "Rough Rider's" [sic] arrival at Tampa, Fla., U.S.A. ([source](https://www.loc.gov/pictures/resource/stereo.1s01904/?co=stereo))

The first challenge was finding a good set of stereocards I could use freely. I learned that the Library of Congress (LOC) acquired thousands and thousands of [stereocard images](https://www.loc.gov/pictures/collection/stereo/) from the United States Copyright Office. People were copyrighting these images in droves at the time by sending an image that made their way into the collection as the stereocard and at some point for most, a large negative image for the catalogue. 10,000+ images have been digitized so far and can even be accessed via the LOC's somewhat rough on the edges yet still very effective REST API.

With LOC API request limits, I ended up creating a Node.js Express server to cache and throttle requests and deliver to a local React UI. I was able to filter to just stereocard collection images for quicker local browsing and paging than I could manage with the LOC website directly. Often, multiple images were provided per stereocard, so there was an option to pick which one to work from.

![UI to create stereo pair from stereocard](/images/stererocard-to-vr-stereo-pair.jpg)

The next challenge was making stereocards VR-friendly. For that, I needed one image shown to one eye and the other image shown to the other eye. To make that happen optimally in a VR app, a clean stereo pair image would be required. I created an HTML5 canvas editor using [React-Konva](https://konvajs.org/docs/react/Intro.html). Dragging stylized points framed up the images, also defining the optional gap that could sometimes be in the stereocards between images. This data would get sent to the Node server where I generated the actual files using with the largest image image available and that data.

![Rough Riders animated gif](images/rough-riders.gif)

In addition to generating a stereo pair image from the stereocard, I also worked in an animated gif option, great for those like me who don't have a VR headset yet.

Here are additional images that I found super fascinating from this project.

!["Harps of Gold", Stockholm Sweden (1903)](images/harp.gif)
"Harps of Gold"- Home of the United States Consul, Stockholm Sweden (1903) ([source](https://www.loc.gov/pictures/collection/stereo/item/2022643836/))

![Indraprastha colonnade, Delhi, India (1902)](images/indraprastha-colonnade.gif)
Indraprastha colonnade, Delhi, India (1902) ([source](https://www.loc.gov/pictures/collection/stereo/item/2020681520/))

![Hall of Mosaics, Mexico (1903)](images/hall-of-mosaics.gif)
Hall of Mosaics, marvelous relic of prehistoric builders, ruins of Mitla, Mexico (1903) ([source](https://www.loc.gov/pictures/collection/stereo/item/2021636567/))

At the time of writing this post, my little project didn't survive the bricking of my last laptop (Note to future self: Post these small projects to GitHub always!). However, there are still artifacts from the project that survive for purposes of this post. I did learn a ton, with this project serving its purpose in making me stronger in different areas of React.

If anyone has a need to create a virtual gallery of our history in VR, let's connect. :)
