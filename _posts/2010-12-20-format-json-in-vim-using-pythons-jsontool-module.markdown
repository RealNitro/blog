---
author: RealNitro
comments: true
date: 2010-12-20 15:23:13+00:00
layout: post
link: http://blog.realnitro.be/2010/12/20/format-json-in-vim-using-pythons-jsontool-module/
slug: format-json-in-vim-using-pythons-jsontool-module
title: Format JSON in vim using Python’s json.tool module
tags: Life
wordpress_id: 56
---

Based on [this blogpost](http://visibletrap.blogspot.com/2010/05/vim-how-to-format-and-syntax-highlight.html), use this Vim command to format the contents of a JSON file:
`
:%!python -m json.tool
`

That is all.
