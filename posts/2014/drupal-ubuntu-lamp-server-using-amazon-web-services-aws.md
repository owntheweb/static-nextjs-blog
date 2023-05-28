---
title: Drupal Ubuntu LAMP Server Using Amazon Web Services (AWS)
type: Blog Post
date: '2014-02-03'
previewImage: /images/todo.jpg
tags:
  - amazon
  - cloud
  - server
  - services
  - test
  - web
---
Why:

*   From a business standpoint, it's affordable and powerful (we'll get more into costs shortly).
*   Quick to recover if something goes wrong using snapshots.
*   Quick to replicate a starting point configuration using snapshots.
*   Only use it when you need it. Shut it off to save money.
*   It's scalable. One can start small and grow big without much pain.
*   It's fun!

### Setup an AWS Account

Setup an Amazon Web Services (AWS) account at: [http://aws.amazon.com](http://aws.amazon.com)

### AWS Management Console

### Launch EC2 (Elastic Compute Cloud) Instance

Launch Instance Select "Ubuntu Server 12.04.3 LTS", 64 bit

### Choose Instance Size

For quicker demo purposes, using a "General purpose" \[tab\] m1.medium instance (small would work too, smaller is cheaper, medium $0.12 per hour)

### Configure Instance Before Launch

#Next button (discuss spot instances here, but don't select it) #Discuss stop vs. terminate shutdown behavior #Discuss detailed monitoring, not selecting for demo #Next button, leave storage as-is #Next button, skipping tagging for demo #Next button, create new security group #Keep SSH open to anywhere for demo (discuss security here) #Add Rule: HTTP (keep defaults for demo) #Review and launch button, then Launch button #Create a new key pair, naming mine "drupal-demo-key", then download to a place where it won't get lost #change file permissions of key: `cd /location/of/key chmod 400 drupal-demo-key.pem`

### Launch Instance

#Launch instances button #View instances, wait until fully booted then open up Terminal. Select booting instance then "Connect" button for detailed ssh connect instructions

### Setup Elastic IP (optional)

#discuss elastic IP here...

### Login via SSH/Terminal

#login to server with key from given instructions. Example (address and key location will be different) `ssh -i ~/Documents/keys/drupal-demo-key.pem ubuntu@YOUR.AWS.IP.ADDRESS` #type yes to be sure to connect

### Update apt-get

#apt-get is cool, and helps install things #update apt-get (already installed) `sudo apt-get update`

### Install taskel

#install taskel (already installed I guess) `sudo apt-get install tasksel`

### Install LAMP Stack

#then install LAMP stack `sudo tasksel install lamp-server`

### Test Browser Access

#test in browser: http://YOUR.AWS.IP.ADDRESS "It works!" #Create test PHP file `sudo nano /var/www/test.php` #add following content: `<\?php phpinfo(); \?>` #test in browser: http://YOUR.AWS.IP.ADDRESS/test.php

### Install phpMyAdmin

#install phpmyadmin (!!don't forget to hit spacebar to select apache2 option before hitting enter!!) `sudo apt-get install phpmyadmin` #make sure to press space bar to select "apache2" before pressing enter. This gets me every time!

### Install Drush

#install drush, starting with pear requirement `sudo apt-get install php-pear` #install drush `sudo pear channel-discover pear.drush.org sudo pear install drush/drush sudo drush version sudo chmod -R 777 ~/.drush/` \*temp note: Winn added above command, maybe I can remove “sudo” from drush-specific commands below. #to upgrade drush: `sudo pear upgrade drush/drush`

### Install Drupal

#download fresh Drupal install to local `sudo drush dl drupal --destination=/var --drupal-project-rename=www cd /var/www sudo drush site-install standard --db-url=mysql://root:root@localhost/example --site-name=Example` #check it out!: http://YOUR.AWS.IP.ADDRESS

### Costs

### Sources

LAMP install instructions NEW: https://help.ubuntu.com/community/ApacheMySQLPHP Helpful LAMP setup instructions OLD: http://www.howtoforge.com/ubuntu\_lamp\_for\_newbies 32 bit vs 64 bit discussion: http://stackoverflow.com/questions/534774/amazon-ec2-which-ubuntu-server-to-choose-32bit-or-64bit AWS Pricing: http://aws.amazon.com/ec2/pricing/ Installing Drush: https://drupal.org/node/1248790 https://drupal.org/documentation/install/developers

### To-do

*   Configure Apache to allow clean urls
*   Configure PHP to let Drupal use more RAM
*   Configure MySQL to use a touch more RAM
*   Configure DNS and server for multiple domains
*   Install a nice control panel for basic server administration over the web
*   Setup NGINX (ahhH!)
*   or setup Varnish (ahhH!)
*   Firewall(s)
