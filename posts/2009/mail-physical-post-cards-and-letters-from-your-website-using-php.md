---
title: Mail Physical Post Cards and Letters from Your Website Using PHP
type: Blog Post
date: '2009-05-15'
previewImage: /images/snailMailFromWebsite.jpg
tags:
  - automated-mail
  - direct-mail
  - download
  - letters
  - open-source
  - php
  - postal-mail
  - postcard
  - postcards
  - postful
  - postfulcom
  - snail-mail
---
![Snail Mail from a Website!](/images/snailmail.jpg)

### PostfulMail PHP Class

Send genuine snail mail letters and postcards using the PostfulMail PHP class ([download below](#download)) and the [Postful.com](http://postful.com) API. Upload images for postcards (jpg, png, gif), documents for letters (html, txt, pdf, doc, rtf, odt), then send mail automatically. Sweet! Marketers will tell you that you'll get higher conversion/response rates from direct mail campaigns over email blasts. The conversion (phone call and/or sale) may go even higher when sending dynamic direct mail pieces, using custom photos, customer names target specific information (as is the case with dynamic email campaigns as well). The PostfulMail class puts you in the unique position to send that dynamic mail piece (or static/same for everyone) to everyone you know without leaving your website. I developed this class with a fascination for Postful.com's mail API. While Postful's API is still new and rough on the edges, the idea of sending postcards and letters through a personal website made me super excited. Ideas come to mind including sending blog letters to my grandma who doesn't get on the Internet much (or knows what "blog" means), sending birthday letters and postcards to family without ever forgetting, and keeping the mature community connected to twitter through scheduled postcard mailings. The possibilities are limitless!

### Download PostfulMail PHP Class

**[DOWNLOAD: PostfulMail PHP Class v1.0 (with example scripts and files 0.3mb)](/downloads/PostfulMailPHPClass_v1.0.zip)**

### Important Notes

Postful.com's API can be finicky. Efforts were made to relieve the quirks through the PostfulMail PHP class, but it is a VERY good idea to read through Postful.com's API documentation to get into the swing of things: Visit: [http://www.postful.com/developer/guide](http://www.postful.com/developer/guide) Also with postcards, you'll have the best luck if you upload images that are the right dimensions (6" x 4.25"). The API scales images funny sometimes, and I think it treats front and back images differently, so be warned! I chose to use 900px wide by 638px high (150 dpi) as it seemed to print nicely while producing little wait time when uploading images. I leave this to your creative judgment. If you want to send test mail and see how things turn out on postful.com without getting charged, sign up for a sandbox acount WITH A **DIFFERENT EMAIL ADDRESS** THAN YOU WANT TO USE WHEN MAILING REAL LETTERS [here](http://www.postful.com/sandbox/signup). Once signed in, you can add fake funds to your account [here](http://www.postful.com/sandbox/account). When you make API requests, you can preview your postcard orders and such [here](http://www.postful.com/order/list).

### Usage

Example: Mail a postcard (image on front, text on back) `include_once "PostfulMail.php"; $mail = new PostfulMail("yourpostfulemail@whatever.com", "yourpassword"); //upload image to use on front of postcard if(!$frontID = $mail->uploadFile("frontTest.jpg")) { die($mail->errors); } //create a post card with image on the front that scales up until it //"fills" the font of the card, and place text on the back. $mail->postCard($frontID, "", "Hello from my office tent. Hope all is great!\n\nLove,\n\nYour Friend", "fill"); //add address(es) //keep in mind that post cards can only be sent within the United States at the time of creating this script $mail->domesticAddress("Name 1", "Optional Company", "Address 1", "Optional Address 2", "City", "State", "Zip"); $mail->domesticAddress("Name 2", "Optional Company", "Address 1", "Optional Address 2", "City", "State", "Zip"); //send! $orderID = $mail->sendMail(); if($mail->errors == "") { echo "Success! Order ID is: " . $orderID; } else { echo $mail->errors; }` Example: Mail a postcard (image on front AND back) `include_once "PostfulMail.php"; $mail = new PostfulMail("yourpostfulemail@whatever.com", "yourpassword"); //upload image to use on front of postcard if(!$frontID = $mail->uploadFile("frontTest.jpg")) { die($mail->errors); } //upload image to use on back of postcard if(!$backID = $mail->uploadFile("backTest.jpg")) { die($mail->errors); } //create a post card with image on front and back $mail->postcard($frontID, $backID, "", "fill"); //add address(es) //keep in mind that post cards can only be sent within the United States at the time of creating this script $mail->domesticAddress("Name 1", "Optional Company", "Address 1", "Optional Address 2", "City", "State", "Zip"); $mail->domesticAddress("Name 2", "Optional Company", "Address 1", "Optional Address 2", "City", "State", "Zip"); //send! $orderID = $mail->sendMail(); if($mail->errors == "") { echo "Success! Order ID is: " . $orderID; } else { echo $mail->errors; }` Example: Mail a postcard (image on front, text on back) Bonus: Upload 1 image once, then send custom messages to each recipient - oh yeah! Caveat: Multiple API requests at once will take longer and could cause server issues if sending too many at the same time. `include_once "PostfulMail.php"; $mail = new PostfulMail("yourpostfulemail@whatever.com", "yourpassword"); //One image (from above) uploaded, with custom messages for //each postcard sent! Save time by not uploading an image //each time you send a card. This is intended for a //single session. //upload image to use on front of postcard if(!$frontID = $mail->uploadFile("frontTest.jpg")) { die($mail->errors); } //recipient 1 $mail->postcard($frontID, "", "Hello from my office tent. Hope all is great!\n\nLove,\n\nYour Friend", "fill"); $mail->domesticAddress("Name 1", "Company", "Address 1", "Optional Address 2", "City", "State", "Zip"); $mail->sendMail(); //recipient 2 $mail->postcard($frontID, "", "Hey! Let us get some cards sent!\n\nLove,\n\nYour Friend", "fill"); $mail->domesticAddress("Name 2", "Company", "Address 1", "Optional Address 2", "City", "State", "Zip"); $mail->sendMail();` Example: Mail a letter from rtf file `include_once "../PostfulMail.php"; $mail = new PostfulMail("yourpostfulemail@whatever.com", "yourpassword"); //upload rtf file (suported extensions are .htm, .html, .pdf, .doc, .txt, .rtf, .odt if(!$contentID = $mail->uploadFile("letterTest.rtf")) { die($mail->errors); } //create a letter (supported document types are html, pdf, doc, txt, rtf, odt) $mail->letter($contentID, "pdf"); //add address(es) $mail->returnAddress("line 1", "line 2", "line 3", "optional line 4", "optional line 5", "optional line 6", "optional line 7"); $mail->domesticAddress("Name", "Optional Company", "Address 1", "Optional Address 2", "City", "State", "Zip"); //For international addresses, the PostfulMail class will convert //two or three letter country codes into specific country names //required by the postful.com API. $mail->internationalAddress("line 1","line 2","line 3","opt line 4","opt line 5","opt line 6","opt line 7","two or three letter country code"); //send! $orderID = $mail->sendMail(); if($mail->errors == "") { echo "Success! Order ID is: " . $orderID; } else { echo $mail->errors; }`

### Feedback

This class could use some constructive criticism and love. Please feel free to comment below or send me a message on the [contact page](http://www.christopherstevens.cc/contact.php)! :)
