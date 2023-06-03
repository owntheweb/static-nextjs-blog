---
title: Generating Maps of Colorado Springs and Beyond
type: Blog Post
date: '2011-05-09'
previewImage: /images/mapsFeatured.jpg
tags:
  - maps
  - OpenStreetMap
  - GPS
  - Eve Online
  - Colorado Springs
  - Pikes Peak
  - MapBox
---
After quite a bit of research, great Linux madness, and a couple gray hairs, I was able to install a map rendering server from scratch and start generating cool maps. The one pictured above is of my neighborhood in Colorado Springs, Colorado. Memorial Park and its lake can be seen to the bottom right.

![Colorado Springs Blue Map](/images/coloradoSpringsMap2b.png)

Inspired by [Development Seed](https://developmentseed.org/)'s [DC Nightvision](https://demo.mapbox.com/dc-nightvision.html) theme, I designed an 'SF Nightvision' theme in blue (from Space Foundation's color pallet). The map was generated using [Mapnik](https://mapnik.org/) and [mapnik-utils](https://code.google.com/p/mapnik-utils/) such as [Cascadenik](https://github.com/mapnik/Cascadenik/wiki/Cascadenik) (making styling more manageable to work with), and [OpenStreetMap](https://www.openstreetmap.org/) data for the roads, trails, lakes, etc.

![Pikes Peak Hiking Trail with Contours](/images/pikesPeakMapb.png)

In addition to OpenStreetMap data, contour lines were drawn using elevation data provided by the [Earth Resources Observation and Science (EROS) Center](https://eros.usgs.gov), originating from the [Shuttle Radar Topography Mission (STRM)](https://www2.jpl.nasa.gov/srtm/). Pikes Peak can be seen above with a hiking trail leading up to it (just a short hike right?), and a road on the other side.

### It came from space!

[OpenStreetMap](https://openstreetmap.org) data comes from a world-wide community of mapping professionals and enthusiasts using GPS data and satellite imagery to record street paths and other geological highlights. The Shuttle Radar Topography Mission (STRM) elevation data comes from two radars strapped to Shuttle Endeavour that orbited the earth for 11 days in February, 2000. Call me biased but without all those space technology investments my little Colorado Springs map would lack much depth.

### Uses for Custom Maps

Custom maps like this can be used to add great visual impact to websites. Nothing cuts 'blah, another Google map' like 'wow! where did that come from?'. Equally or more importantly the ability to generate maps using custom data allows people to further map [earthquakes](https://developmentseed.org/blog/2010/jan/29/post-earthquake-map-tiles-haiti), [snowfall](https://developmentseed.org/blog/2009/nov/05/snow-cover-hillshade-maps-winter-afghanistan), [crime levels](https://mike.teczno.com/notes/oakland-crime-maps/XI.html), and [flasxseed](https://www.nass.usda.gov/Charts_and_Maps/Crops_County/fx-pl.asp) (some people like to know). The sky is the limit, unless you start mapping galaxies....

![Eve Online galactic map](/images/eveMapSample2.png)

Like this one! This is the first mapping endeavor I went after, thinking it would be simpler to map a fictitious galaxy for [Eve Online](https://secure.eveonline.com/ft/?aid=106839) first before a full blown Earth map.

![Eve Online Map closer](/images/eveMapSample1.png)

Of course it ended up being just a couple steps away from a Colorado Springs map as I had to generate custom 'shapefiles', get a map server running and stay within a world boundary I didn't understand to get a system I didn't understand designed to render world stuff I didn't understand to render a galaxy instead. At least I understand a lot more now regarding how it all works.

### What am I generating custom maps for specifically?

I don't know for sure yet, but every time I get the drive and passion to pursue a project like this I end up using it in real-life applications at an unexpected time, prepared. So far I've gained some javascript and php snippets from related experiments that I've applied directly to a seating chart editor for meal events (odd how that works out). It's also been a great exercise to remind me that anything is possible. :)
