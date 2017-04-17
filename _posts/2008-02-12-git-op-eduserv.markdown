---
author: RealNitro
comments: true
date: 2008-02-12 22:52:44+00:00
layout: post
link: http://blog.realnitro.be/2008/02/12/git-op-eduserv/
slug: git-op-eduserv
title: Git op eduserv
wordpress_id: 46
---

Onder invloed van [Nicolas](http://eikke.com/) ben ik een eindje terug git-gebruiker geworden. Git is een snel versiecontrolesysteem (version control system), zoals svn, maar dan anders. :P Een groot verschil is dat git 'distributed' is. Wat dat precies inhoudt ga ik hier niet uitleggen, wikipedia kan dat [veel beter](http://en.wikipedia.org/wiki/Git_(software)#Characteristics).

Vorige week kreeg ik plots het idee om een git-repository te maken op eduserv.ugent.be (of moet ik genix zeggen?). Het leek me handig voor studenten die gebruik wilden maken van een versiecontrolesysteem maar niet over een eigen server beschikten. De rest van deze post is een korte tutorial die je uitlegt hoe je een repository 'pusht' naar eduserv. Ik veronderstel dus dat je al een basiskennis van git hebt.

Log in op eduserv via ssh. Voer volgend commando uit:



<blockquote>`cp /users/j/jgeirega/git-script.sh .`</blockquote>



(Inclusief de '.'!) Als je de inhoud van dit script bekijkt (bijvoorbeeld met "cat git-script.sh"), dan zie je dat je PATH variabele hierdoor veranderd wordt. Dit betekent dat al je bestanden uit mijn home-map (/users/j/jgeirega/bin) zal gebruiken om met git te werken; Als je dit niet vertrouwt (ik kan in feite gelijk welk commando in die map stoppen, maar dat doe ik uiteraard niet) kan je je eigen git compileren, daarover meer op het einde van deze post. Pas nu ook met een editor naar keuze (pico-gebruikers vinden die terug als /opt/csw/bin/pico) je .profile bestand aan, opnieuw om de PATH variabele aan te passen. Voeg volgende regel toe:



<blockquote>`PATH="$PATH:/users/j/jgeirega/bin"`</blockquote>



(Hier geldt dezelfde opmerking als daarnet.) Als je nu uitlogt en opnieuw inlogt zou je op eduserv het commando 'git' moeten kunnen uitvoeren. De output zou moeten beginnen met:



<blockquote>`usage: git [--version] [--exec-path[=GIT_EXEC_PATH]] [-p|--paginate] [--bare] [--git-dir=GIT_DIR] [--help] COMMAND [ARGS]
`</blockquote>



Maak nu waar een map aan waar je je repository wil plaatsen. (Opmerking: gewoonlijk laat men de mapnaam van een git repository eindigen op '.git'. Bijvoorbeeld 'test.git'.) Als je je repository via het internet beschikbaar wil maken kan je het bijvoorbeeld in je WWW map zetten. Navigeer in je repository-map en voer uit:



<blockquote>`git --bare init`</blockquote>



Voer nu uit:



<blockquote>`chmod u+x hooks/post-update`</blockquote>



Zorg dat je het preciese pad van die map kent (gebruik bijvoorbeeld het commando 'pwd'), en je werk op eduserv zit erop!

Terug op je lokale machine open je in je lokale repository het bestand .git/config met een editor naar keuze. Voer daarvoor volgend commando uit:



<blockquote>`git-remote add eduserv ssh://GEBRUIKERSNAAM@eduserv.ugent.be/MAPNAAM`</blockquote>



Vervang GEBRUIKERSNAAM door je gebruikersnaam en MAPNAAM door de naam van de map waarin je zonet een lege (bare) git-repository hebt gemaakt. Om nu de volledige inhoud van je repository naar eduserv te 'pushen' voer je uit:



<blockquote>`git-push --force --all --receive-pack=~/git-script.sh eduserv`</blockquote>



De output zou moeten gelijken op:



<blockquote>`updating 'refs/heads/master'
  from 0000000000000000000000000000000000000000
  to   2318059c3497c80885602654045511a58b37d9c8
Generating pack...
Done counting 6 objects.
Deltifying 6 objects...
 100% (6/6) done
Writing 6 objects...
 100% (6/6) done
Total 6 (delta 0), reused 0 (delta 0)
refs/heads/master: 0000000000000000000000000000000000000000 -> 2318059c3497c80885602654045511a58b37d9c8
`</blockquote>



Vanaf nu mag je de --force en --all na git-push weglaten als je je eduserv-repository wil updaten:



<blockquote>`git-push --receive-pack=~/git-script.sh eduserv`</blockquote>



Merk op dat --receive-pack het script doorgeeft dat je eerder op eduserv hebt gekopieerd. Dat script is (voor zover ik weet, ksh is een raar ding) nodig om te zorgen dat enkele nodige uitvoerbare (git-)bestanden in je PATH zitten.

Als je je repository onder je WWW map hebt gemaakt kan je het nu clonen over http. Bijvoorbeeld voor een van mijn publieke repositories:



<blockquote>`git-clone http://studwww.ugent.be/~jgeirega/git-repos/test.git/</blockquote>

`

Wil je **zelf git compilen op eduserv**? Download dan eerst een git tarball met wget of scp hem naar je account (hier gebruik ik de .tar.gz versie), en extract de tarball met:



<blockquote>`gzip -dc git-1.5.2.5.tar.gz | tar xf -`</blockquote>



Verander git-1.5.2.5.tar.gz naar de versie die je hebt gedownload. Cd in de uitgepakte map en open het bestand Makefile in je favoriete editor. Om git-1.5.2.5 te kunnen compileren moest ik de regels



<blockquote>`ifndef NO_TCLTK
OTHER_PROGRAMS += gitk-wish
endif
`</blockquote>



in commentaar zetten, en in het configuratiegedeelte van SunOs (begint met "ifeq ($(uname_S),SunOS)" en eindigt met "endif" heb ik voor die endif het volgende toegevoegd:



<blockquote>`        # EDUSERV SPECIFIC
        AR = gar
        TAR = tar
        BASIC_CFLAGS += -I/opt/csw/include
        BASIC_LDFLAGS += -L/opt/csw/lib
        NO_TCLTK = NoThanks
        NEEDS_LIBICONV = YesPlease
        ICONVDIR = /opt/csw
        CURLDIR = /opt/csw
`</blockquote>



Zorg dat /opt/csw/bin/ en /opt/csw/gcc4/bin/ in PATH zitten. Voeg daarvoor volgende regel toe aan ~/.profile:



<blockquote>`PATH="/opt/csw/bin:/opt/csw/gcc4/bin:$PATH"`</blockquote>



Log opnieuw in, navigeer opnieuw naar je git-map en voer eerst 'gmake' en daarna 'gmake install' uit. Als alles zonder fouten is verlopen heb je nu in je home-map een map 'bin' met daarin alle uitvoerbare git-bestanden... Succes!

Edit: Enkele kleine aanpassingen. Bedankt [Nicolas](http://eikke.com/). ;)
