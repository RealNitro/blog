---
author: RealNitro
comments: true
date: 2006-07-12 18:12:24+00:00
layout: post
link: http://blog.realnitro.be/2006/07/12/automatic-file-sorting/
slug: automatic-file-sorting
title: Automatic file-sorting
tags: Coding
wordpress_id: 23
---

My home directory is a mess. I have all kinds of files on my Desktop, in my downloads directory, in a Media directory, everywhere. The reason for this is that I'm too lazy to move new files into their appropriate directories. Especially when I'm downloading stuff. The ideal situation would be to have all my videos inside my Media/Video directory, my music inside my Media/Music directory (preferably inside an artist/album subdirectory), images in another directory, screenshots inside a subdirectory of that image directory, etc.

The problem is that I'm forced to do all of this by hand, and that I only do it from time to time:

> `jens@dell ~ $ ls downloads/ | wc -l
> 122
> `

The 'algorithm' I use to move the files I download to their destination directories is executed by me, not by my computer.

Some time ago, I started dreaming about an 'active' directory that did this sorting for me. This directory would:

1\. Detect when a file was dropped inside of it

2\. Extract all needed (meta)data from the file

3\. Analyse this data and descide where the file should be moved to

4\. Tag the file

5\. Move the file

The tagging of the file would allow to reconstruct the contents of the 'magic' directory with a saved Beagle search. That way I could still open my downloads directory right after I downloaded a new file, and find that new file inside of it.

Having an idea is one thing, implementing it is another. I would like to implement this idea, but there are a few problems still remaining that keep me from doing so:

* Which technology should I use to make the directory 'active'? And by 'active' I mean that a script or some code would be called for each file that is moved into it. Could this be done in Gnome-VFS, or should some daemon monitor the directory?

* The 'active' folder should be configurable in an easy, intuitive and flexible way. I will need to give this some thinking. The (simple) filtering user-interfaces I know are not flexible enough to use them for this purpose.

If you read this, and have an idea to solve (a part) of these problems, or any other idea about the rest of this post, please leave a comment. ;-)
