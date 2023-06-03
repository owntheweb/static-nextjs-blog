---
title: '"Science on the Sphere"'
type: Blog Post
date: '2012-12-18'
previewImage: /images/scienceOnSphereFeatured.jpg
tags:
  - animation
  - video
  - blender
  - ece
  - music
  - noaa
  - Science On a Sphere
  - Space Foundation
---
![Wonders of the Universe Courses at the Space Foundation Visitors Center featuring Science On a Sphere](/images/wondersOfTheUniverse.jpg)

Credit: Space Foundation

Thanks to a very generous donation from Northrop Grumman, the [Space Foundation](https://www.spacefoundation.org) was able to install [Science On a Sphere® (SOS)] *-link archived-* as part of the new Northrop Grumman Science Center, in the continuously growing Space Foundation Visitors Center. SOS is a six-foot diameter sphere that hangs from the ceiling, projected on from all sides that people can walk around and view science (Earth, near-live weather, flight paths, moon phases, Jupiter and 350+ other datasets) on the sphere!

![Science on the Sphere](/images/scienceOnTheSphere.jpg)

Always drawn towards creative+pragmatic adventures, this was a great opportunity to explore some unique 3D rendering, [Blender](https://www.blender.org/) (open source 3D design suite), Python scripting, 3D design, animation and music composition with a purpose. One purpose in this case was to calm visitors, opening their minds and desires to learn cool stuff before scheduled presentations. The other purpose was to add quality brand visibility, some icing to the cake to show Northrop Grumman an investment much appreciated and for visitors to keep the Space Foundation in mind.

### The Final Product

Above is a 3D rendering of the 3D rendering that was projected on the 3D sphere (owe my brain!). The animation loops, transitioning between a Northrop Grumman Science Center and Space Foundation branding while music plays in the background. The ECE version that SOS uses to project on the sphere can be viewed [here](https://vimeo.com/55890714) (no audio). The rendering above doesn't quite do the real thing justice (not even close). For that, you'll need to visit the [Space Foundation Visitors Center](https://www.spacefoundation.org/visit).  
;)

### Music: "Science on the Sphere"

Perhaps my favorite part of this project was composing and recording easy-listening music to set the exploratory tone while people prepared for a presentation. Music is a hobby that was in full force in middle school through mid-college (almost became a music major!), that died off for about ten years while I focused strictly on graphic design, web design and development. The hobby picked up again last year thanks to my wife who supported and missed the composition passion as much as I did. And sure enough, music composition folds in well with other creative projects.

As music fuels much of what I do creatively (the fingers fly faster with headphones on), it was great to actually produce some music being used at my workplace. In fact, I found the composition process to go MUCH faster with a specific goal in mind instead of the free-flowing creative outlet style I usually go with. I hope to continue writing music for future Space Foundation education and other endeavors.

### SOS Data Format

![Equatorial Cylindrical Equidistant (ECE) projection](/images/0006961.jpg)

SOS uses a data format primarily made up of Equatorial Cylindrical Equidistant (ECE) projections. As seen in the animation still above ([animated version available here](https://vimeo.com/55890714)), it's a rectangle, twice as wide as it is high, with imagery getting more stretched near the top and bottom (the poles of the sphere). The left and right edges also connect with each other. Once this image is wrapped around the sphere by NOAA's projection software, a seamless image can be seen wrapped around the sphere. In my case above, the map looks a bit wavy as the globe spins at a tilt. More details on the ECE format can be read at [NOAA's SOS website] *-link archived-*.

### Rendering ECE Images in Blender

![Creating SOS Animations in Blender](/images/blenderSOS.jpg)

Creating ECE images from scratch is a time eating challenge. [Blender](https://www.blender.org/), an open source (and free to use) 3D design suite, has options to render 360° panoramas, but doesn't cover a full 360x180° view and/or in an ECE format out of the box that I was able to figure out. Blender does however support custom Python plugins to make many great things happen.

Thanks to the help of [Ron Proctor](https://vimeo.com/ronproctor) who created a [similar animation for Ott Planetarium] *-link archived-* from which I drew much inspiration, I was directed to [this Blender add-on](https://github.com/Benni-chan/Blender-Fulldome-Addon) designed to help those creating animations for planetariums (180° hemisphere views). With some dirty jerry-rigging, I was able to get it to render full 360° ECE images (If you are interested in this script, let me know and I'll rework and contribute to the original project).

The hardest part for me to wrap my head around was that one can only render ECE images looking out from a central camera. This makes sense if rendering a 180° hemisphere of the sky and horizon for a planetarium where people look out to the sky. But if rendering a full globe to be seen from the outside looking in, one needs to invert the scene inside-out so that the central camera renders the texture on the globe (as seen in above image).

The other challenge was perspective. One would think it would be "easy" to illustrate layers of the earth, drilling down to the core at an angle on the sphere. However, the sphere itself is a flat white sphere. One can't see through the it to the other side like a hologram. Perspective gets distorted if not showing a flat surface looking in at the globe or if not looking out at space. One work-around includes building windows so that people viewing from multiple angles can peer into the sphere with an illusion of depth. In the case of showing Earth's layers, small Earths could be viewed within windows on four sides of the sphere to put the planet back into 3D perspective as seen on a flat screen.

### Fireworks

Soon to be submitted to NOAA as an "extra" to go along with the SOS eyeball, fish aquarium and Death Star, I produced this follow-up animation to be used as part of the [Northrop Grumman Science Center grand opening ribbon cutting ceremony] *-link archived-*. It's not science per say, but a must-have for any future SOS celebration around the world.

### Up Next: A New SOS Kiosk?

![SOS Work-in-progress Kiosk](/images/kioskControls1.jpg)

There's NO GUARANTEE I'll ever be able to get this to work, but the next adventure is to build a new SOS kiosk. It will keep visitors inspired while they control SOS when scheduled presentations are not in session. The current kiosk in use works but is quite dated and left quickly by visitors. Using Flash CS6 and Adobe AIR, so far I've been able to get test scripts to say "hi" with a response from SOS, and work out a fun "sphere dial" ([demo here] *-link archived-* - click and drag for fun). It looks like there are options to possibly get this to work on Windows, Android and iPad tablets but there's still much to learn in that area. I think the biggest challenge will be dealing with audio tracks (SOS treated audio oddly in my opinion last time I checked). It will be a great Space Foundation contribution if it works and has been fun thus far.

Disclaimer: Views and statements contained in this personal blog do not express the views of the Space Foundation.
