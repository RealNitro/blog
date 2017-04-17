---
author: RealNitro
comments: true
date: 2008-02-11 22:18:32+00:00
layout: post
link: http://blog.realnitro.be/2008/02/11/game-prototyping-with-pygame/
slug: game-prototyping-with-pygame
title: Game prototyping with pygame
wordpress_id: 45
---

I'm subscribed to a few gaming-related blogfeeds and [Lost Garden](http://lostgarden.com/) is one of my favorites. Today Lost Garden's Danc posted a new game prototyping challenge: "[Play With Your Peas](http://lostgarden.com/2008/02/play-with-your-peas-game-prototyping.html)". The challenge is to build a game based on Danc's game idea, using his (free!) graphics. The game idea and the graphics were both very attractive, so I decided to dive in.

I used [Istanbul](http://live.gnome.org/Istanbul) to record a screencast of the result after 10-odd hours of hacking with pygame. Download the .ogg [here](http://realnitro.be/files/peas/Peas.ogg). (I'm too tired/lazy to convert it to another format. If you can't open it with your browser, use right-click and save-as to download it and play it with [VLC](http://www.videolan.org/). I might upload a better version tomorrow.) The basic level-building code is done, the rest isn't. :) Grab the code [here](http://realnitro.be/files/peas/pypeas.zip), but keep in mind that it was written in a rush by a [pygame](http://pygame.org/) noob. ;) I used the code of [this tutorial](http://www.pygame.org/docs/tut/tom/MakeGames.html) as a starting point. One obvious mistake I made was reloading each sprite over and over again but that doesn't keep it from working. The code should run on all OS's that are supported by [pygame](http://pygame.org/). You'll need a copy of Danc's graphics, extracted to a subdirectory called 'data'.

I threw the unfinished code online because I don't know if I'll keep on working on it after today. There is still a lot of work to do on my master thesis so my focus will be there from now on. :)