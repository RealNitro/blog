---
author: RealNitro
comments: true
date: 2008-04-01 13:13:09+00:00
layout: post
link: http://blog.realnitro.be/2008/04/01/great-error-messages/
slug: great-error-messages
title: Great error messages
wordpress_id: 48
---

I just ran into this error message:

> `$ find . -name "*/version*/*"
> find: warning: UNIX filenames usually don't contain slashes (though pathnames do). That means that '-name */version*/*' will probably evaluate to false all the time on this system. You might find the '-wholename' test more useful, or perhaps '-samefile'. Alternatively, if you are using GNU grep, you could use 'find … -print0 | grep -FzZ */version*/*'.`

I wish I could say the same about [git](http://git.or.cz/). :)