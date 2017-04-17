---
author: RealNitro
comments: true
date: 2007-11-15 12:56:40+00:00
layout: post
link: http://blog.realnitro.be/2007/11/15/mythtv-channels-and-echos/
slug: mythtv-channels-and-echos
title: 'Mythtv: channels and echo’s'
wordpress_id: 39
---

Since my [latest post about mythtv](http://blog.realnitro.be/2007/11/12/mythbuntu-troubles-and-fixes/) I set up my channels using a combination of scanning using my tv-card and a channels list that mythtv downloaded. Most of the channels are set up now.

But the audio was echoing when I watched live-tv. As I couldn't find the solution using Google, I'll post it here in case somebody has the same problem: My tv-card (a Pinnacle PCTV Pro) uses the analog-M input of my soundcard for the audio data. Using alsamixer I needed to mute the analog-M channel in Playback mode and mute the PCM channel in Capture mode.

Next up: recording.