---
author: RealNitro
comments: true
date: 2005-11-17 20:31:01+00:00
layout: post
link: http://blog.realnitro.be/2005/11/17/remote-x-sessions-on-nokia-770/
slug: remote-x-sessions-on-nokia-770
title: Remote X sessions on Nokia 770
wordpress_id: 21
---

[Some topics](http://www.internettablettalk.com/forums/showthread.php?t=361&page=1&pp=10) on [internettablettalk.com](http://www.internettablettalk.com/) have great views on what the N770 might have to offer in the future. One nice possibility is forwarding X sessions to a N770\. I started with forwarding Gedit from my pc to my N770, but later on I had a go at 'oowriter2' (OpenOffice.org 2 Writer), Supertux and The Gimp. My experiences about those apps on the N770 are at the end of this post. First I'll tell you how to try it yourself.

Some basic requirements:

* a computer running the X-server and sshd (a decent linux box ;-) )

* a (fast) network connection between your N770 and the server

* openSSH for the maemo platform

To install openSSH on your N770, download the [openSSH](http://repository.maemo.org/pool/maemo1.1rc6/free/o/openssh/) .deb package to your N770\. Next,open an [X-terminal](http://770.fs-security.com/xterm/), and [gain root access](http://maemo.org/maemowiki/HowDoiBecomeRoot). If the .deb openSSH package is on your mmc, navigate to it:

> `cd /media/mmc1/`

And install openSSH (it doesn't install using the graphical package installer):

> `dpkg -x ssh_*.deb /`

Caution: make sure that your servers sshd allows X forwarding! Time to connect to the server:

> `ssh -X user@server`

Change user to your login-name, and change server to your servers IP or domain name. The first time you log into your server from your N770, ssh wil ask you a question. Answer 'yes'. Then it will ask your password. Enter it. You should get a command prompt as 'user' on your server. Time to execute a program! I use the [Gnome](http://www.gnome.org/) desktop environment, and the default text editor (like notepad in Windows – but waaay better ;-) ) in Gnome is Gedit. The command to start Gedit from a terminal is 'gedit' (duh! :-p ). Execute

> `gedit`

Give it some time to start, and you'll see Gedit running on your N770! To try any other programs, just tap their commands into the terminal and have fun!

But there are a few downsides. The first big downside is text-input: The onscreen-keyboard does not appear when you put the cursor inside a text-field of an X-forwarded window. Copy-pasting text is possible though. Maybe people with working Bluetooth keyboards will be able to type some text. Is somebody willing to try? One other downside is that X-forwarded windows vanish when they are minimized. There seems to be no way to get them back, killing the parent program and restarting it is the only solution. (You can kill the parent program by bringing your X-term back up, opening 'X Terminal'->'Terminal'->'Send Ctrl-some key', and tapping the 'c' keyboard button.) The fullscreen button didn't work aswell. Gedit just doesn't recognise/receive the signal emited by that fullscreen button, I guess.

Beside those little anoyances, Gedit ran quite smooth. So I decided to start the OpenOffice.org 2 Writer. And it worked too! The gui wasn't 100% snappy (i.e. scrolling was laggy), but it seemed fast enough to be usable. Later that day, I decided to give Supertux a try. (Supertux is a Super Mario clone.) The verdict: not playable. The [bluetooth connection](http://blog.eikke.com/index.php/realnitro/2005/11/13/sharing_internet_with_nokia_770_over_blu) between my pc and my N770 just wasn't fast enough to transfer all that graphical goodness without (a LOT of) lag. The Gimp suffers from the same problem. Drawing with your stylus is possible, but the result lags several seconds behind.

A possible solution for the lag problems would be to compress the data that's being sent between the X-server and the client (your N770). A FreeNX-client would be great as the NX protocol is in fact a compressed (and secured) forwarded X-session. (FreeNX is a free alternative to [NoMachine NX](http://www.nomachine.com/).)