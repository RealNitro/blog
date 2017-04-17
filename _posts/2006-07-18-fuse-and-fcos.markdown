---
author: RealNitro
comments: true
date: 2006-07-18 18:47:39+00:00
layout: post
link: http://blog.realnitro.be/2006/07/18/fuse-and-fcos/
slug: fuse-and-fcos
title: Fuse and FCO’s
wordpress_id: 24
---

A few days ago [url=http://www.eikke.com/]Ikke[/url] was experimenting with [url=http://fuse.sourceforge.net/]FUSE[/url]. I had read about FUSE on [url=http://planet.gnome.org/]Planet Gnome[/url], but I never really looked into its possibilities. It seems though that FUSE could provide a solution for the first problem I mentioned at the end of [url=http://blog.eikke.com/index.php/realnitro/2006/07/12/automatic_file_sorting]my previous post[/url]. Writing a FUSE filesystem doensn't seem to be all that hard, and there are [url=http://fuse.sourceforge.net/wiki/index.php/LanguageBindings]Python bindings[/url] too! (mmmm, [url=http://python.org/]Python[/url] :-p )

But the more I think about this, and the more I discuss it with [url=http://www.eikke.com/]Ikke[/url], the more I'm convinced that this 'magic' directory should do a lot more than just move files. It should also allow me to browse my files in some set-based way. That brings us to the FCO's, or [url=http://live.gnome.org/ThreePointZero/FirstClassObjects]First Class Objects[/url]: [b]a user should be able to browse his/her FCO's (and their attributes)[/b]. When he/she wants to listen to music of artist Foo, he/she just browses to ~/Music/Artist/Foo/. (This example is based on the functionality of [url=https://gna.org/projects/tagsfs]TagsFs[/url].) Equally, when our user wants to open a file that belongs to a Project he/she is working on (Projects are FCO's), he/she browses to `~/Projects/Bar/`. When the 'Bar' Project has a Subproject called 'Barbar', our user just browses to `~/Projects/Bar/Subprojects/Barbar/`. (I'm assuming here that Project has a 'Subprojects' attribute.)

Not only should our user be able to find his/her files through this interface, it should also work the other way around: when a file is dropped into `~/Projects/Bar/` it should appear there each time that directory is opened. To implement this kind of behaviour, a database of FCO's should be updated each time files are being handled in these 'magic' directories. The files themselves could be moved into a seperate (hidden?) directory where they can be easily retrieved when needed. [url=http://www.eikke.com/]Ikke[/url] has some great ideas about how this could work.

But what if our user wants to group some files together that don't have any relation that can be expressed with an FCO? Answer: tags. There should be an extra 'magic' directory `~/Tags/` that allows the user to browse using tags. `~/Tags/Fun/` would contain all fun files, `~/Tags/Vacation/` should return all files with a 'Vacation' tag. Now let's say that our user wants to view all files that are fun, and have something to do with vacation. A possible path could be `~/Tags/Fun/Vacation/` or `~/Tags/Vacation/Fun/`. The problem with these paths is that only interections between the tag-sets are possible. Unions and complements should be possible too...

This could be solved by adding special keywords to the path: 'and', 'or' and 'not'. The path for an intersection would then be: `~/Tags/Fun/and/Vacation/`. Files that are fun, but do not have anything to do with vacation would be in `~/Tags/Fun/and/not/Vacation/`. And files that are fun or are vacation-related would be in `~/Tags/Fun/or/Vacation/`.

I hope I'll find some time to implement tiny parts of this in the near future. If I get something interesting working, I'll post it here. :-)
