---
author: RealNitro
comments: true
date: 2007-02-22 19:15:22+00:00
layout: post
link: http://blog.realnitro.be/2007/02/22/kleurtjes-op-eduserv/
slug: kleurtjes-op-eduserv
title: Kleurtjes op eduserv
wordpress_id: 29
---

Deze week wilde ik wat C programmeren in [vim](http://www.vim.org/) op eduserv. Jammergenoeg lukte het me niet om de syntax highlighting aan de gang te krijgen. Ik kreeg enkel wat onderstreepte keywords. Op aanraden van [Ikke](http://www.eikke.com/) heb ik wat geprutst met de TERM variabele, maar niets leek te werken. 's Avonds dan maar een mailtje gestuurd naar de DICT Helpdesk, en vandaag antwoord gekregen. De oplossing is:

> `TERM=xtermc; export TERM`

Aangezien die instelling niet bewaard bleef na uit- en terug inloggen was het wel nodig `TERM=xtermc` toe te voegen aan `.bashrc`. Merci Helpdesk!