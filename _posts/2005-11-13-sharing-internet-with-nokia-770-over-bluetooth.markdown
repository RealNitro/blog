---
author: RealNitro
comments: true
date: 2005-11-13 19:05:28+00:00
layout: post
link: http://blog.realnitro.be/2005/11/13/sharing-internet-with-nokia-770-over-bluetooth/
slug: sharing-internet-with-nokia-770-over-bluetooth
title: Sharing internet with Nokia 770 over bluetooth
wordpress_id: 20
---

It's been a (very) long time since I have posted here (again), but I bought myself a Nokia 770 last week, and it took me a lot of time to get it on the net, so I thought I'd share how I got it to work.

First off, some interesting links:

* [Host to host bluetooth on the gentoo wiki](http://gentoo-wiki.com/HOWTO_The_host-to-host_Bluetooth)

* [Enable root access on the maemo wiki](http://maemo.org/maemowiki/HowDoiBecomeRoot)

* [Bluetooth networking howto on the Maemo wiki](http://maemo.org/maemowiki/HOWTO-BluetoothNetworking)

* [X Terminal for the Nokia 770](http://770.fs-security.com/xterm/)

* [IP Masquerade howto](http://www.tldp.org/HOWTO/IP-Masquerade-HOWTO/)

You need to have your bluetooth stick working first. Gentoo users should read the first parts of the [host to host bluetooth](http://gentoo-wiki.com/HOWTO_The_host-to-host_Bluetooth) howto, other distro's should consult the proper information on the community forums/wiki. (Don't scan for other devices yet, just setup your kernel and BlueZ.)

Then open the [X Terminal](http://770.fs-security.com/xterm/) on your 770 and [be root](http://maemo.org/maemowiki/HowDoiBecomeRoot). Enter:

> `hcitool scan`

The scan should display your pc's bluetooth name and its bluetooth ID. If the scan cannot find your computer, check again if your bluetooth stick is really working. Scanning for your 770 on your computer is no use, since your 770 will remain invisible. Now let's pair your 770 with the pc. Execute the following on your 770, but replace 00:10:20:30:40:50 with your computer's Bluetooth ID:

> `hcitool cc 00:10:20:30:40:50`

If you get an error, try:

> `rm /etc/bluetooth/link_key`

If the pairing works, you will be asked to enter the PIN code of your pc. There is no need to try to connect from your pc to your 770, it will not work anyway (your pc cannot see your 770, remember). Next, make your computer listen for an incoming (network) connection. As root execute:

> `pand –listen --role NAP`

Now, on your 770, connect to your pc:

> `pand --connect 00:10:20:30:40:50`

(Replace 00:10:20:30:40:50 with your pc's Bluetooth ID again.)

If the connection has been set up, the following command should work on your 770:

> `ifconfig bnep0 192.168.2.2 netmask 255.255.255.0 broadcast 192.168.2.255`

Warning: if your local network already uses the 192.168.2.* subnet, replace the IP with another one that isn't in a subnet your pc is a part of!
On your pc, execute the same command, but change the IP:

> `ifconfig bnep0 192.168.2.1 netmask 255.255.255.0 broadcast 192.168.2.255`

We're almost there now. Your 770 and your pc are part of the same subnet now! Let's try to ping the 770\. On your pc:

> `ping 192.168.2.2`

If you installed the [ssh server](http://maemo.org/maemowiki/InstallSsh), you can run it now, and log into it from your pc.

Now, let's set up the internet connection forwarding. First off, let your 770 know that your pc is its gateway to the internet:

> `route add default gw 192.168.2.1`

Also add a dummy internet connection:

> `gconftool -s -t string /system/osso/connectivity/IAP/DEFAULT/type DUMMY`

On your pc, display the content of /etc/resolv.conf:

> `cat /etc/resolv.conf`

And add the rules to the /etc/resolv.conf file on your 770\. For each line do:

> `echo "line" >> /etc/resolv.conf`

All that's left to do is making your pc act as a router for your 770\. One way to do that (not the easiest one), is to use a program called _iptables_. In this howto I will explain how to setup iptables on gentoo. Again, if you use an other distro, check the community forums and/or wiki. On gentoo, emerge iptables. You might have to recompile your kernel, just follow the 'Kernel Support' chapter of [this howto](http://gentoo-wiki.com/HOWTO_Iptables_for_newbies) on the gentoo wiki. To configure iptables, you can read [this guide](http://www.tldp.org/HOWTO/IP-Masquerade-HOWTO/), or, if you just want a quick solution, use [this script](http://www.tldp.org/HOWTO/IP-Masquerade-HOWTO/firewall-examples.html#RC.FIREWALL-IPTABLES). As root, paste it inside a file. Then comment out _IPTABLES=/usr/local/sbin/iptables_, and uncomment _#IPTABLES=/sbin/iptables_. Change _INTIF="eth1"_ to _INTIF="bnep0"_. You might have to change _EXTIF="eth0"_ too. (I had to change it to vpnlink because I connect to the internet with a vpn.) When you finished changing the script, make it executable, and run it. There _should_ be no errors. Now save the script:

> `/etc/init.d/iptables save`

and start iptables:

> `/etc/init.d/iptables start`

If you want to start iptables everytime you boot, do:

> rc-update add iptables default

You should be able to surf with your 770 now! I plan on writing a few script to make the linking more automatic. Plz share your comments here, and post any mistakes in the howto.