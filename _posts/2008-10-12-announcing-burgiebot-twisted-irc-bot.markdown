---
author: RealNitro
comments: true
date: 2008-10-12 19:24:33+00:00
layout: post
link: http://blog.realnitro.be/2008/10/12/announcing-burgiebot-twisted-irc-bot/
slug: announcing-burgiebot-twisted-irc-bot
title: 'Announcing: BurgieBot twisted IRC bot'
wordpress_id: 50
---

BurgieBot is a project that was started early 2008 by [Nicolas Trangez](http://eikke.com/) and had some short bursts of development since. Its purpose since has been to run inside a small IRC-channel, logging, and more importantly hosting trivia games. :) 

The trivia plugin is the most important feature of BurgieBot, and the one I enjoyed most over the last months. I didn't announce it back then because it had some small bugs that needed fixing. Those are fixed now, and the bot runs quite nicely. There's a lot that I wanted to fix/change before releasing it, but following the release early, release often philosophy, I'm releasing it now.

**BurgieBot pros**



	
  * Easy to extend with plugins

	
  * Trivia plugin

	
  * Automatic reloading of plugins without restarting the bot



**BurgieBot cons**



	
  * No i18n, most strings are in Dutch

	
  * No docs...

	
  * Automatic reloading of plugins sometimes fails



**Download it**
[Tarball](http://realnitro.be/files/burgiebot/BurgieBot_master.tar.gz), [Zip](http://realnitro.be/files/burgiebot/BurgieBot_master.zip)

**Dependencies**



	
  * Python 2.5 or higher

	
  * SQLAlchemy 0.4.4 or higher

	
  * twisted

	
  * pyinotify (used for reloading modules on the fly)



**How to run it**
Create a settings.py file in the folder containing the burgiebot.py file containing:


<blockquote>`
channels = ['#demochannel',]
host = 'irc.demoserver.org'
port = 6667
nick = 'BurgieBot'
dsn = 'sqlite:///file.db' # Use an sqlite db
colors = True # Display messages in color
`</blockquote>


And run the bot using `python burgiebot.py`

You can browse the code [here](http://code.realnitro.be/burgiebot/tags/burgiebot-0.2/) (yes, that's a Django-based gitweb-like interface, which is WIP and unreleased :) ), or clone the git repository from `http://realnitro.be/git/burgiebot.git/`
