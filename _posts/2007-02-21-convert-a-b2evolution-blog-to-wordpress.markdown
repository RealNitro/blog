---
author: RealNitro
comments: true
date: 2007-02-21 22:16:55+00:00
layout: post
link: http://blog.realnitro.be/2007/02/21/convert-a-b2evolution-blog-to-wordpress/
slug: convert-a-b2evolution-blog-to-wordpress
title: Convert a b2evolution blog to WordPress
tags: Life
wordpress_id: 28
---

About a week ago I decided to move my blog from b2evolution (hosted by [Ikke](http://www.eikke.com/)) to WordPress. I found a convertor-script [here](http://ppleyard.org.uk/index.php?p=72), but it didn't work for my version of b2evolution (and WordPress). So I started hacking away with my beginner-php-skills and [adapted the script](http://www.realnitro.be/files/code/b2evo2wp.php.txt).

Some 'features':

* It transfers your user, posts, comments and categories

* Comments by b2evolution blog members are translated to normal comments, using the nicknames, e-mailadresses and url's from the users table.

* Several changes from the original script to support the current versions of b2evolution and WordPress.

One problem with this script is that post and category 'names' are not converted. I forgot to convert them and fixed them manually in the database as I found out about it when my blog was almost ready. If you want to use fancy urls with your post or category name in them, you will have to change the script to convert them from b2evolution, or just add them manually. Changing the script isn't a lot of work, but I just don't feel like reinstalling WordPress just to test that feature. (I know, I'm lazy. :) )

A quick howto:

1\. Install WordPress on your server. If you can visit your WordPress blog and read the standard WordPress post, you're ready to go.

2\. Upload [the script](http://www.realnitro.be/files/code/b2evo2wp.php.txt) to your server, and rename it to b2evo2wp.php

3\. Surf to the file you just uploaded, fill in the required fields, and if you're lucky, it all works…

Good luck, and let me know how it turned out.
