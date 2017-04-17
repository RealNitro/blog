---
author: RealNitro
comments: true
date: 2012-08-28 13:30:58+00:00
layout: post
link: http://blog.realnitro.be/2012/08/28/gevent-0130-and-mercurial-__init__-got-an-unexpected-keyword-argument-ciphers/
slug: gevent-0130-and-mercurial-__init__-got-an-unexpected-keyword-argument-ciphers
title: 'Gevent 0.13.0 and mercurial: __init__() got an unexpected keyword argument
  ‘ciphers’'
wordpress_id: 60
---

I came across some confusing errors when combining patch_socket, patch_ssl of [Gevent](http://www.gevent.org/) 0.13.0 (the one in Ubuntu 11.10) and [Mercurial](http://mercurial.selenic.com/) today. If you get this error:



<blockquote>`__init__() got an unexpected keyword argument 'ciphers'`</blockquote>



update your Gevent version to at least 0.13.1. That should resolve your issue. Good luck!
