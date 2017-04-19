---
author: RealNitro
comments: true
date: 2010-08-31 18:45:49+00:00
layout: post
link: http://blog.realnitro.be/2010/08/31/git-svn-diff-compatible-with-reviewboard-and-tortoisesvn/
slug: git-svn-diff-compatible-with-reviewboard-and-tortoisesvn
title: Git SVN diff compatible with reviewboard (and TortoiseSVN?)
tags: Life
wordpress_id: 55
---

Recently I needed to upload some patches to [Review Board](http://www.reviewboard.org/). I foolishly tried to upload a patch that was created by `git diff` (I'm a `git-svn` user) but [Review Board](http://www.reviewboard.org) expects an [SVN](http://subversion.tigris.org/) patch… While there are some simple solutions to be found on the web, I could not find any that correctly handled **new files** in the patch. The closest thing I found was a mail on the [KDE panel-devel mailinglist](http://mail.kde.org/pipermail/panel-devel/2008-May/011150.html).

I started looking into `sed` and came up with a slightly more powerful version:

This script supports updated files and new files. I have not tested it yet with deleted files.

Feel free to use it if you need it. Good luck!

Note: a [friend](http://eikke.com/) linked me a [Perl script](http://blog.cyberion.net/2009/04/git-svn-diff-review-board-patch.html) that does the same thing. I haven't tested it yet, so I have no idea how well it works.
