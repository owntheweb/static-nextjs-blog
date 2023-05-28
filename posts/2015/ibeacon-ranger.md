---
title: iBeacon Ranger
type: Blog Post
date: '2015-05-27'
previewImage: /images/ibeacon-ranger-feature.jpg
tags:
  - Needs Tagged
---
![iBeacon Ranger](/images/lightblue-bean-ibeacons.jpg)

![iBeacon Ranger: iBeacon scanning and diagnostic tool](/images/ibeacon-ranger.jpg)

I finished up a mobile iBeacon diagnostic tool and am sharing the source with you! :D

### What is it?

iBeacon Ranger is an iBeacon diagnostic tool for iOS and Android built with PhoneGap and Adobe PhoneGap Build. Built on [Peter Metz](https://github.com/petermetz)'s [iBeacon Phonegap/Cordova plugin](https://github.com/petermetz/cordova-plugin-ibeacon), range and monitor a specified set of iBeacons in real-time. This app serves as an example of how to utilize iBeacons and as a starting point for creating your own PhoneGap iBeacon app.

### Where To Get It

[Get iBeacon Ranger at GitHub!](https://github.com/owntheweb/ibeacon-ranger)

### Why?

Well, because iBeacons are awesome. That's why. ;)

![LightBlue Beans being used as prototype iBeacons](/images/lightblue-bean-ibeacons.jpg) [LightBlue Beans](https://punchthrough.com/bean/) being used as prototype iBeacons: iBeacons recommended for production use come from several vendors in many shapes and sizes.

iBeacons are exciting, yet 'simple' low-energy Bluetooth (BLE) devices. They repeatedly shout out, "Here's my UUID, major version and minor version!", which in itself is not that exciting. Exciting possibilities happen when adding an app that can listen for their presence or determine their distance. Think self-guided tour, or a map that walks people though it (even inside buildings where GPS doesn't go). Trigger content by simply walking around with a mobile device. Awesome!

### Features

*   Real-time scrolling line chart showcasing iBeacon RSSI (Received Signal Strength Indication)
*   Range a list of iBeacons, categorize them as "immediate", "near", "far" or "unknown", and show their RSSI in real-time
*   The closest calculated iBeacon gets a star (great when thinking about triggering content associated with the closest beacon).
*   Monitor a list of iBeacons, showing whether or not they are inside or outside of range (note: this is allowed to happen even when the app isn't running! - great for some use cases, annoying for others).
*   Lots of scripty goodness to start building your own iBeacon app with. :D

### To-do

*   Theoretically this app works on Android, but hasn't been tested there yet (anyone want to give it a shot?).
*   Adapt to self-build on the desktop rather than Adobe PhoneGap Build for those that want it (I found Adobe PhoneGap Build to be handy when not familiar with the build process and also to build an iOS and someday a Windows Phone app from a Linux machine - whoa!).
*   Feature to manually add one's own iBeacons when the app is running (won't help anyone just scanning for my iBeacons!)

### Wish List

*   Ability to scan ALL nearby iBeacons (currently not supported, see [this discussion](https://github.com/petermetz/cordova-plugin-ibeacon/issues/49) for details - prove me wrong!)

### Usage

#### Adobe PhoneGap Build Usage

1.  Fork this repository. Fork it!
2.  Set iBeacons to monitor in [js/BeaconMonitor.js](https://github.com/owntheweb/ibeacon-ranger/blob/master/js/BeaconMonitor.js)
3.  Visit [Adobe PhoneGap Build](https://build.phonegap.com/) and login.
4.  Add a new app and paste the repository address in the related field. Example: The address for this repository is [https://github.com/owntheweb/ibeacon-ranger](https://github.com/owntheweb/ibeacon-ranger) .
5.  Upload any keys for the desired mobile platform under your project settings.
6.  Choose "Update Code" to pull in the latest committed code from the desired repository. PhoneGap Build will automatically build the app.
7.  Once build is complete, scan the QR code with an authorized mobile device, starting the install process.
8.  Joyfully range and monitor specified iBeacons in the area.

#### PhoneGap Usage (self-build)

\[I need help with this.\]

### Tips for Success

*   It's important to know that this app monitors a specified list of iBeacons. It cannot locate and list all iBeacons in the area.
*   In iOS8, If monitoring iBeacons (inside/outside range, _not_ ranging/distance), the app must request to always access location (as it does by default). It won't monitor otherwise. See end of delegate.didRangeBeaconsInRegion in BeaconMonitor.js.
    *   Note: Use this feature with caution as iOS permission makes it read like the app can always access the user's location, gives impression of "constantly track user via GPS" with active location icon always active (alarming).
*   If only using ranging features, it will work properly when app requests to only access the user's location when the app is active. See end of delegate.didRangeBeaconsInRegion in BeaconMonitor.js with a commented out permissions option.

### Thank You

![Space Foundation](https://camo.githubusercontent.com/71411bcc03e9eff5a8c78d2ead8fff07c760d6c0/687474703a2f2f7777772e7370616365666f756e646174696f6e2e6f72672f6d2f7663617264732f696d616765732f73664c6f676f2e706e67)

In addition to personal time spent on this project, extra special thanks goes to the Space Foundation team, supplying iBeacon hardware, an iOS developer account and even a few on-the-clock training hours to dedicate towards iBeacon research. The Space Foundation is aiming to improve attendee navigational experiences at the annual [Space Symposium](http://www.spacesymposium.org) via a useful app map. We're also exploring options for future use in the [Space Foundation Discovery Center](http://www.spacefoundation.org/museum). You too can help the Space Foundation achieve their mission to inspire, enable and propel, by contributing to this project. :D

### Space Foundation Is Hiring!

[Space Foundation is hiring a web developer/designer](http://www.spacefoundation.org/about/employment-opportunities)

Disclaimer: Views and statements contained in this personal blog do not express the views of the Space Foundation.
