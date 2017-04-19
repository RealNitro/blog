---
author: RealNitro
comments: true
date: 2007-10-07 20:33:29+00:00
layout: post
link: http://blog.realnitro.be/2007/10/07/external-screen-on-a-macbook-running-ubuntu-gutsy/
slug: external-screen-on-a-macbook-running-ubuntu-gutsy
title: External screen on a Macbook running Ubuntu Gutsy
tags: English Linux
wordpress_id: 36
---

A quick post to help people with the same problem:

I upgraded from Ubuntu Feisty Fawn to Gutsy Gibbon beta this weekend. Gutsy comes with xrandr 1.2 which allows for easy configuration of external displays without the need to restart X. Using the graphical "Screen and graphics" tool I just made things worse then they already were (I could no longer start X), so I started Googling. [This](http://www.thinkwiki.org/wiki/Installing_Ubuntu_6.06.1_on_a_ThinkPad_R60e#Ubuntu_7.10_with_Intel_Graphics_Media_Accelerator_950) page is what I needed. In short:

* Backup your /etc/X11/xorg.conf file and generate a new one.

* Edit your new xorg.conf file according to the instructions I just linked. (Add the TV stuff and especially the Virtual line.)

* Restart X.

Now when you attach your external screen, it will show up when you run xrandr, and you can start playing with it! (Read the rest of the page I linked.)

Good luck!
