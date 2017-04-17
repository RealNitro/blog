---
author: RealNitro
comments: true
date: 2007-02-21 20:41:10+00:00
layout: post
link: http://blog.realnitro.be/2007/02/21/emerge-depclean-caused-troubles-a-fix-without-using-a-live-cd/
slug: emerge-depclean-caused-troubles-a-fix-without-using-a-live-cd
title: 'Emerge depclean caused troubles: a fix without using a live-cd'
wordpress_id: 27
---

I have been cleaning up and updating my Gentoo Linux system over the last few days. Tonight I decided to do a `emerge -v depclean`. Unfortunately this messed up my coreutils (I couldn't use ls, mv, cp, …). The error I got was:

> `error while loading shared libraries: libacl.so.1: cannot open shared object file: No such file or directory`

Because of this error, I couldn't fix the problem by re-emerging coreutils without acl support. The only solution was getting libacl.so.1 (and libattr.so.1) and putting them in /lib/ (or /usr/lib/). All solutions I found on Google use a live-cd to fix the problem, but thanks to [Ikke](http://blog.eikke.com/index.php/ikke), I was able to fix the problem without rebooting.

If you're lucky (like me), you have busybox installed. Everytime I needed one of the broken commands while putting the missing files in /lib/, I just replaced them with `busybox $CMD`.

Come to think of it, you don't even need busybox… I got my replacement files from [openswan.org](http://www.openswan.org/download/umlrootfs/basic-root/root/lib/), but I copied them to my server to make sure they will be available:

> `cd /lib/
> wget http://www.realnitro.be/files/code/libacl.so.1
> wget http://www.realnitro.be/files/code/libattr.so.1
> # ls, mv, cp should work again
> echo "sys-apps/coreutils -acl" >> /etc/portage/package.keywords
> emerge -v coreutils
> # clean up, these are no longer needed
> rm /lib/libacl.so.1
> rm /lib/libattr.so.1
> `

I hope this spares someone from having to reboot with a live-cd. Good luck!