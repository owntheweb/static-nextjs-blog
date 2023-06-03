---
title: 'DEVCON: The Developer Condition'
type: Blog Post
date: '2014-08-29'
previewImage: /images/devcon-feature.jpg
tags:
  - Arduino
  - electronics
  - blog
  - life
---
![DEVCON: The Developer Condition](/images/devcon-cube.jpg)

When inquiring about the developer condition, refer to the DEVCON Status system. Think of it as a geeky mood ring powered by the internet. When things are great, it's green. When things are hectic, it's red! There's no longer a need to ask, "How are you today?" Just look the like light and we can skip to more interesting conversations. ;)

![DEVCON front and back](/images/devcon-front-back.jpg)

In an effort to learn some basic electronics, start to figure out the [Arduino](https://arduino.cc/) microprocessor, solder for the first time and make something FUN, this "finished" piece now sits in front of my office informing all who stop by of the "developer condition".

This was also my first attempt at making a creative project _outside_ of the rectangular computer screen, still powered by the internet I love. Sometimes I feel like I'm tied to virtual realities. This was a chance to make something more physical.

![DEVCON graphic overlay](/images/devcon-overlay.gif)

The DEVCON Status system was inspired by the United States Armed Forces _[defense readiness condition (DEFCON)](https://en.wikipedia.org/wiki/DEFCON)_, where DEFCON 5 is a "low readiness" state and DEFCON 1 would mean that nuclear war is eminent. While DEVCON uses a reversed numbering system (bigger numbers = bigger problems!) per personal preference, it follows a similar idea of broadcasting a status in a standardized way. DEVCON conveys peace, love and creative ideas happening in the developer team to websites being down or the toilet paper supply being depleted. There's also a DEVCON PARTY status reserved for times of grand celebrations.

![DEVCON Arduino and other components](/images/devcon-parts.jpg)

### Ingredients

I used a lot of helper components to make this project fun and quick for a newbie like myself:

*   Arduino (an [older one](https://arduino.cc/en/Main/ArduinoBoardDuemilanove), was sitting in a box for a year or more)
*   [BlinkM MaxM](https://thingm.com/products/blinkm-maxm/)
*   Ethernet Shield (the one I found was way old, maybe look into [this one](https://www.sparkfun.com/products/9026) \[caution: may use different pins?\])
*   Prototype shield for soldering it all together ([this one](https://www.sparkfun.com/products/7914) should work)
*   Bipolar stepper motor (I used an [oversized, overpowered one](https://www.sparkfun.com/products/9238), will buy a [small one](https://www.sparkfun.com/products/10551) next time)
*   [EasyDriver](https://www.sparkfun.com/products/10267) stepper motor driver
*   [Pezio speaker/buzzer](https://www.sparkfun.com/products/7950) (or speaker, but I soldered the speaker wrong then tore it apart! The buzzer was handy.)
*   100 Ohm resister for buzzer
*   A nice enclosure I found at Radio Shack ([this one](https://www.radioshack.com/product/index.jsp?productId=2062285) could be it)
*   Soldering equipment
*   Hot glue holds it all together in the enclosure.

### The Code

The code merges several helpful examples that helped me get going. Here it is all mashed together with some customization for your enjoyment. See links to useful resources within.

```
//QUESTIONS
//how to ""turn off"" MaxM? - just fade to black for now

/* DEVCON
 *                   
 * Combines several libraries and examples, customized to communicate
 *     the ""developer condition"" :D
 *
 * 2014, Christopher Stevens, https://christopherstevens.cc
 */
 
////////////////////////
//The Lights
////////////////////////

/*                 
 *
 * BlinkM connections to Arduino
 * PWR - -- gnd -- black -- Gnd
 * PWR + -- +5V -- red   -- 5V
 * I2C d -- SDA -- green -- Analog In 4
 * I2C c -- SCK -- blue  -- Analog In 5
 *
 * Note: This sketch sends to the I2C ""broadcast"" address of 0, 
 *       so all BlinkMs on the I2C bus will respond.
 *
 * 2008, Tod E. Kurt, ThingM, https://thingm.com/
 */

#include ""Wire.h""
#include ""BlinkM_funcs.h""
#include <TimedAction.h>

#define blinkm_addr 0x00

/* Status Integer 
 * 0 = IDLE
 * 1 = DEVCON 1
 * 2 = DEVCON 2
 * 3 = DEVCON 3
 * 4 = DEVCON 4
 * 5 = DEVOCON PARTY YAY!
 */
int statInt = 0;
int colorCount = 8;
int blinkInt = 0;
byte r,g,b;
byte colorPattern[6][8][3] = {
  {
    {0x00, 0x00, 0x00}, //black
    {0x00, 0x00, 0x00}, //black
    {0x00, 0x00, 0x00}, //black
    {0x00, 0x00, 0x00}, //black
    {0x00, 0x00, 0x00}, //black
    {0x00, 0x00, 0x00}, //black
    {0x00, 0x00, 0x00}, //black
    {0x00, 0x00, 0x00}, //black
  }
  ,{
    {0x00, 0x00, 0xff}, //blue
    {0x00, 0x00, 0xdd},
    {0x00, 0x00, 0xbb},
    {0x00, 0x00, 0x99},
    {0x00, 0x00, 0x77},
    {0x00, 0x00, 0x99},
    {0x00, 0x00, 0xbb},
    {0x00, 0x00, 0xdd},
  }
  ,{
    {0x00, 0xff, 0x00}, //green
    {0x00, 0xdd, 0x00},
    {0x00, 0xbb, 0x00},
    {0x00, 0x99, 0x00},
    {0x00, 0x77, 0x00},
    {0x00, 0x99, 0x00},
    {0x00, 0xbb, 0x00},
    {0x00, 0xdd, 0x00},
  }
  ,{
    {0xff, 0xcc, 0x00}, //yellow
    {0xdd, 0xaa, 0x00}, 
    {0xbb, 0x88, 0x00},
    {0x99, 0x66, 0x00}, 
    {0x77, 0x44, 0x00},
    {0x99, 0x66, 0x00},
    {0xbb, 0x88, 0x00},
    {0xdd, 0xaa, 0x00},
  }
  ,{
    {0xff, 0x00, 0x00}, //red
    {0x00, 0x00, 0x00},
    {0xff, 0x00, 0x00},
    {0x00, 0x00, 0x00},
    {0xff, 0x00, 0x00},
    {0x00, 0x00, 0x00},
    {0xff, 0x00, 0x00},
    {0x00, 0x00, 0x00},
  }
  ,{
    {0xff, 0xff, 0xff}, // white
    {0xff, 0x00, 0xff}, // purple
    {0xff, 0xff, 0x00}, // orange
    {0x00, 0xff, 0xff}, // cyan
    {0xff, 0x00, 0x00}, // red
    {0x00, 0xff, 0x00}, // green
    {0x00, 0x00, 0xff}, // blue
    {0xff, 0xff, 0x00}, // yellow
  }
  ,
};

void setupLighting() {
  //blinkm
  BlinkM_beginWithPower();  
  BlinkM_stopScript( blinkm_addr );  // turn off startup script
  BlinkM_fadeToRGB( blinkm_addr, 0x00, 0x00, 0x00 );
}

void animateBlinkM() {
  //lighting
  if(statInt != 0) {
    //set color pattern
    r = colorPattern[statInt][blinkInt][0];
    g = colorPattern[statInt][blinkInt][1];
    b = colorPattern[statInt][blinkInt][2];

    BlinkM_fadeToRGB( blinkm_addr, r,g,b );

    blinkInt++;
    if( blinkInt >= colorCount ) {
      blinkInt = 0;
    }
  }
}
TimedAction animateBlinkMAction = TimedAction(600,animateBlinkM);



////////////////////////
//The Motor
////////////////////////

int dirpin = 2;
int steppin = 4;
int enablepin = 7;

//clock positions in micro rotations
//int posMicro[12] = {0, 133, 267, 399, 533, 666, 799, 933, 1066, 1199, 1333, 1466};
int posMicro[6] = {0, 267, 533, 799, 1066, 1333};

//current micro rotation
int curMicro = 0;

//total micro rotations in a single turn
int totalMicro = 1600;

void moveToPos(int targMicro) {
  //!!! calculate shortest distance and set direction?
  digitalWrite(dirpin, LOW); //set direction to clockwise
  
  digitalWrite(enablepin, LOW); //power motor
  delay(200);
  while(targMicro != curMicro) {
    digitalWrite(steppin, LOW);  // This LOW to HIGH change is what creates the
    digitalWrite(steppin, HIGH); // ""Rising Edge"" so the easydriver knows to when to step.
    delayMicroseconds(600); //250 top speed for tested motor, slower speeds = quieter
    
    curMicro++;
    if(curMicro >= totalMicro) {
      curMicro = 0;
    }
    //!!! save current micro in case power goes off?
  }
  delay(200);
  digitalWrite(enablepin, HIGH); //power motor off
}

void setupMotor() {
   //!!! load curMicro
  pinMode(dirpin, OUTPUT);
  pinMode(steppin, OUTPUT);
  pinMode(enablepin, OUTPUT);
  digitalWrite(enablepin, HIGH); //power motor off
  delay(100);
}



////////////////////////
//The Internet
////////////////////////

/*
  Web client
 
 This sketch connects to a website (https://www.google.com)
 using an Arduino Wiznet Ethernet shield. 
 
 Circuit:
 * Ethernet shield attached to pins 10, 11, 12, 13
 
 created 18 Dec 2009
 by David A. Mellis
 modified 9 Apr 2012
 by Tom Igoe, based on work by Adrian McEwen
 
 DEVCON add-ons by Christopher Stevens
 
 Lots of stuff taken from:
 https://bildr.org/2011/06/arduino-ethernet-client/
 
 */

#include <SPI.h>
#include <Ethernet.h>

// Enter a MAC address for your controller below.
// Newer Ethernet shields have a MAC address printed on a sticker on the shield
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
// if you don't want to use DNS (and reduce your sketch size)
// use the numeric IP instead of the name for the server:
//IPAddress server(74,125,232,128);  // numeric IP for Google (no DNS)
char server[] = ""myhost.com"";    // name address for website (using DNS)

// Set the static IP address to use if the DHCP fails to assign
//IPAddress ip(192,168,0,177);

// Initialize the Ethernet client library
// with the IP address and port of the server 
// that you want to connect to (port 80 is default for HTTP):
EthernetClient client;

char inString[32]; // string for incoming serial data
int stringPos = 0; // string index counter
boolean startRead = false; // is reading?

void setupEthernet() {
  Ethernet.begin(mac);
  Serial.begin(9600);
}

String connectAndRead(){
  //connect to the server

  Serial.println(""connecting..."");

  //port 80 is typical of a www page
  if (client.connect(server, 80)) {
    Serial.println(""connected"");
    //make request
    client.println(""GET /status/status.txt HTTP/1.1"");
    client.println(""Host: myhost.com"");
    client.println(""Connection: close"");
    client.println();

    //Connected - Read the page
    Serial.println(""reading..."");
    return readPage(); //go and read the output

  }else{
    return ""connection failed"";
  }

}

String readPage(){
  //read the page, and capture & return everything between '<' and '>'

  stringPos = 0;
  memset( &inString, 0, 32 ); //clear inString memory

  while(true){

    if (client.available()) {
      char c = client.read();

      if (c == '<' ) { //'<' is our begining character
        startRead = true; //Ready to start reading the part 
      }else if(startRead){

        if(c != '>'){ //'>' is our ending character
          inString[stringPos] = c;
          stringPos ++;
        }else{
          //got what we need here! We can disconnect now
          startRead = false;
          client.stop();
          client.flush();
          Serial.println(""disconnecting."");
          return inString;

        }
      }
    }
  }
}

void checkStatus() {
  int checkStatInt = connectAndRead().toInt();
  if(checkStatInt != statInt) {
    setStatus(checkStatInt);
  }
}
TimedAction checkStatusAction = TimedAction(5000,checkStatus);

////////////////////////
//the tones
////////////////////////

/*
  Melody
 
 Plays a melody
 
 circuit:
 * 8-ohm speaker on digital pin 8
 
 created 21 Jan 2010
 modified 30 Aug 2011
 by Tom Igoe

This example code is in the public domain.
 
 https://arduino.cc/en/Tutorial/Tone
 
 */
 #include ""pitches.h""
int speakerpin = 8;

void setupTones() {
  
}

void playTones3() {
  int tones[] = {NOTE_G1, NOTE_G1, NOTE_G1, NOTE_G1};
  int durs[] = {2,2,2,2};
  for (int thisNote = 0; thisNote < 4; thisNote++) {

    // to calculate the note duration, take one second
    // divided by the note type.
    //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
    int noteDuration = 1000/durs[thisNote];
    tone(8, tones[thisNote],noteDuration);

    // to distinguish the notes, set a minimum time between them.
    // the note's duration + 30% seems to work well:
    int pauseBetweenNotes = noteDuration * 1.30;
    delay(pauseBetweenNotes);
    
    // stop the tone playing:
    noTone(8);
  }
}

void playTones4() {
  int tones[] = {NOTE_B1, NOTE_C2, NOTE_CS2, NOTE_D2, NOTE_DS2, NOTE_E2, NOTE_F2, NOTE_FS2, NOTE_G2, NOTE_GS2, NOTE_A2, NOTE_AS2, NOTE_B2, NOTE_C3, NOTE_D3, NOTE_DS3, NOTE_E3, NOTE_F3, NOTE_FS3, NOTE_G3, NOTE_GS3, NOTE_A3, NOTE_AS3, NOTE_B3};
  int durs[] = {2,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,2};
  for(int rep = 0; rep < 2; rep++) {
    for (int thisNote = 0; thisNote < 24; thisNote++) {
  
      // to calculate the note duration, take one second
      // divided by the note type.
      //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
      int noteDuration = 1000/durs[thisNote];
      tone(8, tones[thisNote],noteDuration);
  
      // to distinguish the notes, set a minimum time between them.
      // the note's duration + 30% seems to work well:
      //int pauseBetweenNotes = noteDuration * 1.30;
      int pauseBetweenNotes = noteDuration;
      delay(pauseBetweenNotes);
      
      // stop the tone playing:
      noTone(8);
    }
    delay(1000);
  }
}

void playTones() {
  if(statInt == 0) {
    //idle, do nothing
  } else if(statInt == 1) {
    
  } else if(statInt == 2) {
    
  } else if(statInt == 3) {
    playTones3();
  } else if(statInt == 4) {
    playTones4();
  } else if(statInt == 5) {
    
  }
}

////////////////////////
//the stuff
////////////////////////

//set the DEVCON status
void setStatus(int sInt) {
  statInt = sInt;
  
  //lighting
  blinkInt = 0;
  if(statInt == 0) { //if idle, fade light to black
    BlinkM_fadeToRGB( blinkm_addr, 0x00, 0x00, 0x00 );
  } else {
    r = colorPattern[statInt][blinkInt][0];
    g = colorPattern[statInt][blinkInt][1];
    b = colorPattern[statInt][blinkInt][2];
    BlinkM_fadeToRGB( blinkm_addr, r,g,b );
  }
  
  //motor
  moveToPos(posMicro[statInt]);
  delay(500);
  playTones();
}

/*
//for testing
void cycleStates() {
  setStatus(statInt);
  statInt++;
  if(statInt >= 6) {
    statInt = 0;
  }
}
TimedAction cycleStateAction = TimedAction(10000,cycleStates);
*/

void setup() {
  setupLighting();
  setupMotor();
  setupEthernet();
}

void loop() {
  animateBlinkMAction.check();
  checkStatusAction.check();
  //cycleStateAction.check(); //for no-internet testing
}
```

### Server Side

![DEVCON PARTY](/images/devcon-party.jpg)

On the server side, there's a basic admin page that sets the status from anywhere there is an internet connection (actually created this a LONG time ago before getting into the hardware while playing with [Foundation](https://foundation.zurb.com/)). The status is saved to a text file that the Android reads and parses.

```
<?php
if(isset($_POST['reason'])) {
	$status = trim(rtrim(strip_tags($_POST['status'])));
	$reason = trim(rtrim(strip_tags(stripslashes($_POST['reason']))));
	
	$filename = ""status/status.txt"";
	$handle = fopen($filename,""w"");
	fwrite($handle, '<' . $status . '>');
	fclose($handle);
	
	$filename = ""status/reason.txt"";
	$handle = fopen($filename,""w"");
	fwrite($handle, $reason);
	fclose($handle);
} else {
	$filename = ""status/status.txt"";
	$handle = fopen($filename,""r"");
	$status = str_replace(array('<','>'), array('',''), fread($handle, filesize($filename)));
	fclose($handle);
	
	$filename = ""status/reason.txt"";
	$handle = fopen($filename,""r"");
	$reason = stripslashes(fread($handle, filesize($filename)));
	fclose($handle);
}

$devconLabel = $status;
if($devconLabel == ""5"") {
	$devconLabel = ""PARTY"";
} else if($devconLabel == ""0"") {
	$devconLabel = ""IDLE"";
}
$devconLabel = ""DEVCON "" . $devconLabel;


//show form
if($_GET['set'] == 1) {
	$showForm = true;
}


?><!DOCTYPE html>

<!--[if IE 8]> <html class=""no-js lt-ie9"" lang=""en"" > <![endif]-->
<!--[if gt IE 8]><!--> <html class=""no-js"" lang=""en"" > <!--<![endif]-->

<head>
<meta charset=""utf-8"">
	<meta name=""viewport"" content=""width=device-width"">
	<title>DEVCON: The ""Developer Condition""</title>

	<link rel=""stylesheet"" href=""/css/foundation.css"">
	<link rel=""stylesheet"" href=""/css/devcon.css"">
	
	<script src=""/js/vendor/custom.modernizr.js""></script>
</head>
<body>
	
<div class=""row"">
	<div class=""large-12 columns"">
		<fieldset>
			<legend>Current DEVCON Status</legend>
			<div class=""devcon devcon-<?php print $status; ?>""><?php print $devconLabel; ?></div>
			<div class=""reason""><b>Reason:</b> <?php print $reason; ?></div>
		</fieldset>
	</div>
</div>

<div class=""row"">
	<div class=""large-12 columns"">
		<?php if($showForm == true) { ?><form class=""custom"" method=""post"" action=""/"" data-abide><?php } ?>
		<fieldset>
			<legend>Update DEVCON Status</legend>
			
			<div class=""row"">
				<div class=""large-3 columns"">
					<div class=""row"">
						<?php if($showForm == true) { ?>
						<div class=""large-2 columns"">
							<input name=""status"" type=""radio"" value=""5"" id=""status5"" style=""display:none;""<?php if($status==""5"") { ?> CHECKED<?php } ?>>
							<span class=""custom radio<?php if($status==""5"") { ?> checked<?php } ?>""></span>
						</div>
						<?php } ?>
						<div class=""large-10 columns"">
							<div class=""devcon-sm devcon-5"">DEVCON PARTY!</div>
						</div>
					</div>
				</div>
				<div class=""large-9 columns"">
					<label for=""status5"">
					It could be DEVCON 5, but there's a party happening, and you should join the party RIGHT NOW! Yeahh! 
					</label>
				</div>
			</div>
			
			<hr>
			
			<div class=""row"">
				<div class=""large-3 columns"">
					<div class=""row"">
						<?php if($showForm == true) { ?>
						<div class=""large-2 columns"">
							<input name=""status"" type=""radio"" value=""4"" id=""status4"" style=""display:none;""<?php if($status==""4"") { ?> CHECKED<?php } ?>>
							<span class=""custom radio<?php if($status==""4"") { ?> checked<?php } ?>""></span>
						</div>
						<?php } ?>
						<div class=""large-10 columns"">
							<div class=""devcon-sm devcon-4"">DEVCON 4</div>
						</div>
					</div>
				</div>
				<div class=""large-9 columns"">
					<label for=""status4"">
					A website is down. We're out of toilet paper. Someone <i>accidentally</i> activated DEVCON 4... 
					</label>
				</div>
			</div>
			
			<hr>
			
			<div class=""row"">
				<div class=""large-3 columns"">
					<div class=""row"">
						<?php if($showForm == true) { ?>
						<div class=""large-2 columns"">
							<input name=""status"" type=""radio"" value=""3"" id=""status3"" style=""display:none;""<?php if($status==""3"") { ?> CHECKED<?php } ?>>
							<span class=""custom radio<?php if($status==""3"") { ?> checked<?php } ?>""></span>
						</div>
						<?php } ?>
						<div class=""large-10 columns"">
							<div class=""devcon-sm devcon-3"">DEVCON 3</div>
						</div>
					</div>
				</div>
				<div class=""large-9 columns"">
					<label for=""status3"">
					Developers are fluently speaking in five scripting languages while English is no longer understood.
					</label>
				</div>
			</div>
			
			<hr>
			
			<div class=""row"">
				<div class=""large-3 columns"">
					<div class=""row"">
						<?php if($showForm == true) { ?>
						<div class=""large-2 columns"">
							<input name=""status"" type=""radio"" value=""2"" id=""status2"" style=""display:none;""<?php if($status==""2"") { ?> CHECKED<?php } ?>>
							<span class=""custom radio<?php if($status==""2"") { ?> checked<?php } ?>""></span>
						</div>
						<?php } ?>
						<div class=""large-10 columns"">
							<div class=""devcon-sm devcon-2"">DEVCON 2</div>
						</div>
					</div>
				</div>
				<div class=""large-9 columns"">
					<label for=""status2"">
					Developers are steadily assimilating the Internet one website at a time. Resistance is futile.
					</label>
				</div>
			</div>
			
			<hr>
			
			<div class=""row"">
				<div class=""large-3 columns"">
					<div class=""row"">
						<?php if($showForm == true) { ?>
						<div class=""large-2 columns"">
							<input name=""status"" type=""radio"" value=""1"" id=""status1"" style=""display:none;""<?php if($status==""1"") { ?> CHECKED<?php } ?>>
							<span class=""custom radio<?php if($status==""1"") { ?> checked<?php } ?>""></span>
						</div>
						<?php } ?>
						<div class=""large-10 columns"">
							<div class=""devcon-sm devcon-1"">DEVCON 1</div>
						</div>
					</div>
				</div>
				<div class=""large-9 columns"">
					<label for=""status1"">
					Strategic planning is underway. Ideas are blossoming. There's peace and love in the world everywhere.
					</label>
				</div>
			</div>
			
			<hr>
			
			<div class=""row"">
				<div class=""large-3 columns"">
					<div class=""row"">
						<?php if($showForm == true) { ?>
						<div class=""large-2 columns"">
							<input name=""status"" type=""radio"" value=""0"" id=""status0"" style=""display:none;""<?php if($status==""0"") { ?> CHECKED<?php } ?>>
							<span class=""custom radio<?php if($status==""0"") { ?> checked<?php } ?>""></span>
						</div>
						<?php } ?>
						<div class=""large-10 columns"">
							<div class=""devcon-sm"">DEVCON IDLE</div>
						</div>
					</div>
				</div>
				<div class=""large-9 columns"">
					<label for=""status0"">
					Go green and save power... or gray because green is already taken.
					</label>
				</div>
			</div>
			<?php if($showForm == true) { ?>
			<hr>
			
			<div class=""row"">
				<div class=""large-12 columns"">
					<div class=""name-field"">
						<label>Reason for Change <small>required</small></label>
						<input type=""text"" name=""reason"" id=""reason"" value=""<?php print $reason; ?>"" required>
						</div>
				</div>
			</div>
			
			<hr>
			
			<div class=""row"">
				<div class=""large-12 columns"">
					<input name=""submit"" type=""submit"" value=""UPDATE DEVCON STATUS"" class=""button round alert small"">
				</div>
			</div>
			<?php } ?>
		</fieldset>
		<?php if($showForm == true) { ?></form><?php } ?>
	</div>
</div>

<script>
document.write('<script src=' +
('__proto__' in {} ? '/js/vendor/zepto' : '/js/vendor/jquery') +
'.js><\/script>')
</script>
<script src=""/js/foundation.min.js""></script>
<script>
	$(document).foundation();
</script>
</body>
</html>
```

### Unfinished Business

*   A few times throughout the day, the device reverts to the startup idle status, then quickly returns to the current status (interesting).
*   It would be nice to write the current motor step to memory for recovery if the system gets shut off. Otherwise, it starts pointing to the wrong status when you turn it back on and you have to manually turn the pointer to its first condition.
*   When turning it on, sometimes it doesn't connect to the internet and the reset button needs to be pressed once or twice to get it going (after that, it's great)
*   If I were to produce this again, I'd recommend using a wireless [Arduino Yun](https://arduino.cc/en/Main/ArduinoBoardYun) as the wireless connection is built into the Arduino (less bulk and one less wire, perhaps more reliable?)

### What's Next?

After some time where my mail was being stolen (they caught the crazy lady) and my car window was shot out with a bb-gun, then my car door was destroyed with a poorly attempted break-in... then some drunk guy and his buddy were kicking my car and others for no logical reason (thanks neighbor for terrorizing them), I want to build a motion detecting security camera system. [Raspberry Pi](https://www.raspberrypi.org) has a lot of community support for building [something like this] *-link archived-* on the cheap. After that I can see getting more creative and fun with electronics in other ways.

Maybe I'll make something with more processing 'mmph' using the [BeagleBone Black](https://beagleboard.org/black). Do you have any thoughts on high powered tiny computers/SBCs?
