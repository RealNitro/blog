---
author: RealNitro
comments: true
date: 2007-08-01 21:25:19+00:00
layout: post
link: http://blog.realnitro.be/2007/08/01/saved-by-dd-wrt-micro/
slug: saved-by-dd-wrt-micro
title: Saved by dd-wrt micro
tags: English Linux
wordpress_id: 35
---

When it was time to replace our old LAN-only Linksys router, I ordered a WRT54G, as those devices are/were known to run Linux, which resulted in [multiple](http://openwrt.org/) [projects](http://www.dd-wrt.com/) releasing alternative software for those devices. Unfortunately the WRT54G version 5 had just been released, so I received a device that had 'neutered' hardware (half the RAM and half the Flash memory) and didn't run Linux. None of the alternative softwares supported those new devices (yet).

But, no harm done, I could just run the default firmware, right? Unfortunately that default firmware, well, sucks. It really, really sucks. Some issues I had:

* Wifi locks up on OSX when using it for max. 30 minutes. Pulling the plug is the only solution.

* About once a day, when under 'heavy use' (i.e.: me and my brother surfing the web), all data traffic stops. Again, only pulling the plug solves the problem.

* Sometimes my brother could keep on working, but there is just no way my laptop could connect. Be it Wifi or LAN, it just wouldn't work. Solution? You guessed it: pulling that plug again.

* Getting my Wii to talk to my router was a pain in the *ss. I got it to work in the end, thanks to Google and some people with the same issue (and router).

But, while searching for a solution for my Wii connection problem, I came across a forum post that advised switching to [dd-wrt](http://www.dd-wrt.com/) micro. [dd-wrt](http://www.dd-wrt.com/) micro is a special version of [dd-wrt](http://www.dd-wrt.com/) that is small enough to be used with WRT54G v5 models. There was just one drawback: I could brick the router (=turn the router useless) when something went wrong. So I descided to keep on pulling the router's plug once or twice (or more) a day.

Until today. :-) I was sick of all the disconnects and started preparing the switch to [dd-wrt](http://www.dd-wrt.com/) micro. Using [this page](http://www.bitsum.com/openwiking/owbase/ow.asp?WRT54G5_CFE) I downloaded the images I needed, created an image with my router's MAC address embedded, and started the flashing procedure. Everything went smoothly and my router has been up for more then 10 hours so far. I've been connected by Wifi for about 4 hours now and my connection has been rock-solid. You've got to love Open Source. :-)
