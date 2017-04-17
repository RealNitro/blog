---
author: RealNitro
comments: true
date: 2005-11-19 18:54:46+00:00
layout: post
link: http://blog.realnitro.be/2005/11/19/remote-x-on-nokia-770-screenshots/
slug: remote-x-on-nokia-770-screenshots
title: 'Remote X on Nokia 770: schreenshots'
wordpress_id: 22
---

Due to the fact that the [screenshot tool](http://koti.welho.com/jpavelek/tmp/770/) had a bug at the time I gave remote X windows a try on the N770, I could't post any 'proof'.

But, that screenshot-bug has been solved, and I connected my N770 to the fresh install of [Ubuntu Linux](http://ubuntulinux.org/) so I could take shoot some screens. It took me about 4 minutes to make my N770 talk to the pc (Ubuntu recognised my usb bluetooth key immediately, it really wasn't hard at all). I installed the openssh-server on the pc (enabled it in Synaptic, and pressed Apply, easy stuff), started it, and logged in with my N770.

This time I used some new command line options (thank you [daf](http://blog.eikke.com/index.php/realnitro/2005/11/17/remote_x_sessions_on_nokia_770#c3544)):

> `ssh -X user@server -c blowfish -C`

And I started [oowriter2](http://www.openoffice.org) again:

![oowriter2 starting…](http://www.realnitro.be/files/screens/n770_ooo_1_small.png)
([Larger image](http://www.realnitro.be/files/screens/n770_ooo_1.png))

and a few seconds later (the pc is quite old):

![oowriter2 on N770](http://www.realnitro.be/files/screens/n770_ooo_2_small.png)
([Larger image](http://www.realnitro.be/files/screens/n770_ooo_2.png))

Then I gave The Gimp another try, but the lag was still there. It was better a bit faster than without the compression settings for the ssh connection, but nowhere near usable. :-(

btw, has anyone tried [this keyboard](http://shop.brando.com.hk/btsmartkeyboard.php) with the N770 yet? Does it work? Or should/will it work? Plz let me know!