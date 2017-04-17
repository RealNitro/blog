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



  
  * [url=http://gentoo-wiki.com/HOWTO_The_host-to-host_Bluetooth]Host to host bluetooth on the gentoo wiki[/url]

  
  * [url=http://maemo.org/maemowiki/HowDoiBecomeRoot]Enable root access on the maemo wiki[/url]

  
  * [url=http://maemo.org/maemowiki/HOWTO-BluetoothNetworking]Bluetooth networking howto on the Maemo wiki[/url]

  
  * [url=http://770.fs-security.com/xterm/]X Terminal for the Nokia 770[/url]

  
  * [url=http://www.tldp.org/HOWTO/IP-Masquerade-HOWTO/]IP Masquerade howto[/url]



You need to have your bluetooth stick working first. Gentoo users should read the first parts of the [url=http://gentoo-wiki.com/HOWTO_The_host-to-host_Bluetooth]host to host bluetooth[/url] howto, other distro's should consult the proper information on the community forums/wiki. (Don't scan for other devices yet, just setup your kernel and BlueZ.)

Then open the [url=http://770.fs-security.com/xterm/]X Terminal[/url] on your 770 and [url=http://maemo.org/maemowiki/HowDoiBecomeRoot]be root[/url]. Enter:


<blockquote>`hcitool scan`</blockquote>


The scan should display your pc's bluetooth name and its bluetooth ID. If the scan cannot find your computer, check again if your bluetooth stick is really working. Scanning for your 770 on your computer is no use, since your 770 will remain invisible.  Now let's pair your 770 with the pc. Execute the following on your 770, but replace 00:10:20:30:40:50 with your computer's Bluetooth ID:


<blockquote>`hcitool cc 00:10:20:30:40:50`</blockquote>


If you get an error, try:


<blockquote>`rm /etc/bluetooth/link_key`</blockquote>


If the pairing works, you will be asked to enter the PIN code of your pc. There is no need to try to connect from your pc to your 770, it will not work anyway (your pc cannot see your 770, remember). Next, make your computer listen for an incoming (network) connection. As root execute:


<blockquote>`pand --listen --role NAP`</blockquote>


Now, on your 770, connect to your pc:


<blockquote>`pand --connect 00:10:20:30:40:50`</blockquote>


(Replace 00:10:20:30:40:50 with your pc's Bluetooth ID again.)

If the connection has been set up, the following command should work on your 770:


<blockquote>`ifconfig bnep0 192.168.2.2 netmask 255.255.255.0 broadcast 192.168.2.255`</blockquote>


Warning: if your local network already uses the 192.168.2.* subnet, replace the IP with another one that isn't in a subnet your pc is a part of!
On your pc, execute the same command, but change the IP:


<blockquote>`ifconfig bnep0 192.168.2.1 netmask 255.255.255.0 broadcast 192.168.2.255`</blockquote>



We're almost there now. Your 770 and your pc are part of the same subnet now! Let's try to ping the 770. On your pc:


<blockquote>`ping 192.168.2.2`</blockquote>


If you installed the [url=http://maemo.org/maemowiki/InstallSsh]ssh server[/url], you can run it now, and log into it from your pc.

Now, let's set up the internet connection forwarding. First off, let your 770 know that your pc is its gateway to the internet:


<blockquote>`route add default gw 192.168.2.1`</blockquote>


Also add a dummy internet connection:


<blockquote>`gconftool -s -t string /system/osso/connectivity/IAP/DEFAULT/type DUMMY`</blockquote>


On your pc, display the content of /etc/resolv.conf:


<blockquote>`cat /etc/resolv.conf`</blockquote>


And add the rules to the /etc/resolv.conf file on your 770. For each line do:


<blockquote>`echo "line" >> /etc/resolv.conf`</blockquote>



All that's left to do is making your pc act as a router for your 770. One way to do that (not the easiest one), is to use a program called [i]iptables[/i]. In this howto I will explain how to setup iptables on gentoo. Again, if you use an other distro, check the community forums and/or wiki. On gentoo, emerge iptables. You might have to recompile your kernel, just follow the 'Kernel Support' chapter of [url=http://gentoo-wiki.com/HOWTO_Iptables_for_newbies]this howto[/url] on the gentoo wiki. To configure iptables, you can read [url=http://www.tldp.org/HOWTO/IP-Masquerade-HOWTO/]this guide[/url], or, if you just want a quick solution, use [url=http://www.tldp.org/HOWTO/IP-Masquerade-HOWTO/firewall-examples.html#RC.FIREWALL-IPTABLES]this script[/url]. As root, paste it inside a file. Then comment out [i]IPTABLES=/usr/local/sbin/iptables[/i], and uncomment [i]#IPTABLES=/sbin/iptables[/i]. Change [i]INTIF="eth1"[/i] to [i]INTIF="bnep0"[/i]. You might have to change [i]EXTIF="eth0"[/i] too. (I had to change it to vpnlink because I connect to the internet with a vpn.) When you finished changing the script, make it executable, and run it. There [i]should[/i] be no errors. Now save the script:


<blockquote>`/etc/init.d/iptables save`</blockquote>


and start iptables:


<blockquote>`/etc/init.d/iptables start`</blockquote>


If you want to start iptables everytime you boot, do:


<blockquote>rc-update add iptables default</blockquote>



You should be able to surf with your 770 now! I plan on writing a few script to make the linking more automatic. Plz share your comments here, and post any mistakes in the howto.
