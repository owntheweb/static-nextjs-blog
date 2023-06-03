---
title: Text-To-Speech (TTS) Plugin for TinyMCE
type: Blog Post
date: '2011-03-07'
previewImage: /images/textVoice.jpg
tags:
  - TinyMCE
  - rich text editor
  - SSML
  - text-to-speech
  - tts
---
Note: This post is super old and may no longer work.

![TTS Plugin for TinyMCE](/images/ttsTextEditor1.jpg)

The TTS Plugin for [TinyMCE] *-link archived-* is a web based text-to-speech editor that visually formats text with pitch, rate, volume, emphasis, and breaks. It's able to export basic [SSML](https://www.w3.org/TR/speech-synthesis/) (Speech Synthesis Markup Language) accepted by text-to-speech engines such as [Cepstral](https://cepstral.com/) voices, and accepted by web services like [Voice Forge](https://www.voiceforge.com/). **NOTE:** This plugin does not generate audio or communicate directly with text-to-speech engines or services. It simply formats text in a fun visual way and exports SSML that you can figure out what to do with after it leaves the editor. :)

### What You Can Do With Exported SSML

Here are examples of audio produced using SSML exported from the TTS plugin as seen in the image above (audio generation techniques may be shared in a future blog post): Audio courtesy of [Voice Forge](https://www.voiceforge.com). From left to right: 'Lawrence', 'TopHat' and 'Kayla'

### Download TTS Plugin for TinyMCE

While this plugin is not perfect (it gets temperamental with complex formatting and locks up on occasion), it has been released under the LGPL user license so that you can use it freely in your noncommercial and commercial projects. Heck, you can even contribute code if it brings you joy at [github](https://github.com/owntheweb/tinymce-tts).

### Quick Start Guide

1.  [Download] *-link archived-* and unzip the TinyMCE JavaScript library.
2.  [Download](https://github.com/owntheweb/tinymce-tts/zipball/master) and unzip the TTS Plugin.
3.  Move the 'tts' folder to tinymce/jscripts/tiny\_mce/plugins/
4.  Open 'example.htm' in the 'tts' folder for an example of how to configure TinyMCE and the tts plugin.

### Why?

Text-to-speech is awesome.

### The Future

Future updates may include added support for specifying phonetic spellings of words (e.g. You say tomato, I say...), multiple language support as seen in other TinyMCE plugins, and bug fixes.
