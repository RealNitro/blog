---
author: RealNitro
comments: true
date: 2010-02-20 12:29:09+00:00
layout: post
link: http://blog.realnitro.be/2010/02/20/using-the-mercurial-mq-extension/
slug: using-the-mercurial-mq-extension
title: Using the mercurial mq extension
wordpress_id: 51
---

Being a big [git](http://git-scm.com/) fan, I was disappointed when I was forced to use [mercurial](http://mercurial.selenic.com/) at work. In my opinion, mercurial is not as flexible and powerful as git. But lately I've started to use the mq extension of mercurial, which gives me back some of the more powerful features of git I had missed the most.

One thing I liked about git was being able to update my commits to include the name of a reviewer in the commit message, or to include the fixes that resulted from the review in the commit. Read on to see how you can use the mq extension for this.

<!-- more -->

Let's enable the mq extension first. I am assuming you have a recent version of mercurial installed on your machine. Open ~/.hgrc and add the extension by adding this to the file:



<blockquote>`[extensions]
hgext.mq = 
`</blockquote>



If there already is an [extensions] section in your ~/.hgrc file, just add the "hgext.mq = " line at the bottom of that section.

Let's create a toy repository (I am assuming you use Linux) with `mkdir ~/mq_project` and initialize mercurial: `cd ~/mq_project && hg init` Now let's create a simple python script: `echo "print 'hello world'" >> hello_world.py` Add it to mercurial with `hg add hello_world.py` and commit with `hg commit`.

Suppose we want to do three commits on this file, each to be reviewed at a later point in time. In the first commit we will add a license. In the second commit we will move the Hello World code to a method, and in the third and final commit we will turn our script into a module.

We will use the mq extension to allow us to fill in the reviewers in the commit message and possibly update the commits to include remarks by the reviewers.

First we enable mq in our repository: `hg qinit` Then we create a 'patch' (a patch is an mq commit) for the license commit: `hg qnew license` And after that we add the license to the hello_world.py file. The file now looks like this:



<blockquote>`
>     
>     # This program is free software: you can redistribute it and/or modify
>     # it under the terms of the GNU General Public License as published by
>     # the Free Software Foundation, either version 3 of the License, or
>     # (at your option) any later version.
>     
>     # This program is distributed in the hope that it will be useful,
>     # but WITHOUT ANY WARRANTY; without even the implied warranty of
>     # MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
>     # GNU General Public License for more details.
>     
>     # You should have received a copy of the GNU General Public License
>     # along with this program.  If not, see http://www.gnu.org/licenses/.
>     
>     print 'hello world'
> 
> `</blockquote>



We are happy with our work, and decide this commit is done. We now update the license patch to include our latest changes: `hg qrefresh --edit` The qrefresh command 'refreshes' the active patch to the current state of the repository. Because we added the `--edit` argument, we can also fill in our commit message. Let's choose "Added GPLv3 license".

This 'patch' is done, so we create a new one with `hg qnew method` as we will be moving our Hello World code into a method. We update our hello_world.py file with the method:



<blockquote>`
>     
>     # This program is free software: you can redistribute it and/or modify
>     # it under the terms of the GNU General Public License as published by
>     # the Free Software Foundation, either version 3 of the License, or
>     # (at your option) any later version.
>     
>     # This program is distributed in the hope that it will be useful,
>     # but WITHOUT ANY WARRANTY; without even the implied warranty of
>     # MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
>     # GNU General Public License for more details.
>     
>     # You should have received a copy of the GNU General Public License
>     # along with this program.  If not, see http://www.gnu.org/licenses/.
>     
>     def hello_world():
>         print 'hello world'
>     
>     hello_world()
> 
> `</blockquote>



Again we update our 'patch' with `hg qrefresh --edit` and we choose "Hello World is now a method" as our commit message.

Next up is the module 'patch'. But let's suppose we forget to create our new patch and just start writing code. Our hello_world.py file now contains:



<blockquote>`
>     
>     # This program is free software: you can redistribute it and/or modify
>     # it under the terms of the GNU General Public License as published by
>     # the Free Software Foundation, either version 3 of the License, or
>     # (at your option) any later version.
>     
>     # This program is distributed in the hope that it will be useful,
>     # but WITHOUT ANY WARRANTY; without even the implied warranty of
>     # MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
>     # GNU General Public License for more details.
>     
>     # You should have received a copy of the GNU General Public License
>     # along with this program.  If not, see http://www.gnu.org/licenses/.
>     
>     def hello_world():
>         print 'hello world'
>     
>     if __name__ == "__main__":
>         hello_world()
>     
> 
> `</blockquote>



We now notice that we did not create a new patch. No worries, we can create a new patch containing all uncommitted changes with `hg qnew -f --edit module` The `-f` flag imports all uncommitted changes into the patch. The `--edit` flag does the same thing it does for qrefresh: it allows us to edit the commit message.

Now we wait for our patches to be reviewed. We can use `hg serve` to serve our local repository, including patches, over HTTP. The license patch is reviewed by Henry, the method patch is reviewed by Bart, and the module patch is reviewed by Rick. Both Bart and Rick have no remarks, but Henry notices our repository does not contain a COPYING file containing the GNU GPLv3 license.

We're in luck because or license commit is actually an mq patch, which means we can edit it! Right now we have 3 patches applied. We can check the effect with `hg qapplied`:



<blockquote>`% hg qapplied
license
method
module
`</blockquote>



To return to the license patch, we need to remove the method and license patches. We can remove all patches until the license patch is at the top of the stack with `hg qpop license`. We can check this with `hg qapplied`:



<blockquote>`% hg qapplied
license
`</blockquote>



Don't worry, we did not lose the method and module patches. They are still saved somewhere. We can list all patches, even if they are not applied with `hg qseries`:



<blockquote>`% hg qseries
license
method
module
`</blockquote>



Let's edit our license patch. We download the license with `wget "http://www.gnu.org/licenses/gpl.txt" -o COPYING` and add it to our repository: `hg add COPYING` Then we refresh our license patch: `hg qrefresh --edit` We can also include the name of our reviewer in our commit message now.

And that finishes the work on our license patch. We still need to include the reviewers in our method and module patches though. To be able to edit our method patch, we need it to be applied on our repository. With `hg qpush method` we push the method patch back on the stack of patches applied to our repository. Now we can use `hg qrefresh --edit` again to edit the commit message of the method patch. Finally, we push the module patch back on the stack with `hg qpush module` and edit its commit message with `hg qrefresh --edit`

Now we are ready to push our code to a common repository. But we cannot do that just yet. Our commits are no real mercurial commits. We need to convert them from mq patches to mercurial commits first. This is what the `hg qfinish` command is for. We can 'finish' only one patch or all applied patches. The latter is what we want here, so we execute `hg qfinish --applied`

Congratulations! You are now familiar with the mq extension to mercurial! If you want to know more about it, you can find more information [on the mercurial wiki](http://mercurial.selenic.com/wiki/MqExtension). Good luck with using the mq extension for your own projects!
