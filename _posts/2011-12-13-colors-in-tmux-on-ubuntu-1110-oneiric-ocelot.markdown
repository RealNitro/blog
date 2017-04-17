---
author: RealNitro
comments: true
date: 2011-12-13 08:58:32+00:00
layout: post
link: http://blog.realnitro.be/2011/12/13/colors-in-tmux-on-ubuntu-1110-oneiric-ocelot/
slug: colors-in-tmux-on-ubuntu-1110-oneiric-ocelot
title: Colors in tmux on Ubuntu 11.10 Oneiric Ocelot
wordpress_id: 58
---

I wanted my bash prompt colors in tmux on Ubuntu 11.10 Oneiric Ocelot. The internet didn't turn up anything 100% right, but after some trial and error, this worked for me: just add the following line to your .tmux.conf:

> `set -g default-terminal "xterm-color"`

This will make sure the following lines in the default .bashrc are triggered:

> `
> case "$TERM" in
> xterm-color) color_prompt=yes;;
> esac
> `

Hope this helps someone.