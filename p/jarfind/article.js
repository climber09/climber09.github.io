const article_html = `<article id="post-200" class="post-200 post type-post status-publish format-standard hentry category-java clearfix">
<header class="entry-header">
<h1 class="entry-title">JarFind</h1></header>
<div class="entry-content">
<ul id="nav2"></ul>
<div id="content_txt">

<ul class="page_section_links">
<li><span class="arrow">»</span>Source Code: <a href="https://github.com/climber09/JarFind" target="_blank">https://github.com/climber09/JarFind</a></li>
</ul>

<p><em>JarFind</em> is a Java development tool. It’s purpose is to quickly find jar files which contain a particular Java .class file. Sooner or later as a Java developer you get stymied by the ClassNotFoundException, which is usually thrown when the jvm cannot load a particular class which has been referenced within some running thread. So, if you don’t know which jar file contains that particular class, and where that jar file is located, then you have a quest ahead of you.</p>
<p><em>JarFind</em> will find the jar for you. You just have to point it in the right direction. <em>JarFind</em> takes at least two arguments: a directory under which to search and a Java class name to look for – not unlike the Unix/Linux <em>find</em> command.</p>
<p>Note: <em>JarFind</em> is completely unrelated to the <em>findjar.com</em> website. <em>JarFind</em> locates jar files accessible on your local file system only. I developed <em>JarFind</em> long before I came across <em>findjar.com</em>.</p>
<h3 class="entry-sub-sect"><!--a href="#install" aria-hidden="true" class="anchor" id="user-content-install"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a-->Install</h3>
<p>First, download the <em>JarFind</em> source code from GitHub: <a target="_blank" href="https://github.com/climber09/JarFind">https://github.com/climber09/JarFind</a></p>
<p>The rest of these instructions are geared for Linux/Unix based systems. If you’re working on Windows, you’re on your own.  Ok, let’s say you want to compile the source and create an executable jar named jarfind.jar and put that somewhere convenient (like /opt/java/jarfind.jar or ~/bin/jarfind.jar). So, assuming you have the compiled code under ./build, you could do something like:</p>
<pre class="code">$ jar -cvfe ~/bin/jarfind.jar net/sourceforge/hunterj/jarfind/JarFind -C ./build net
</pre>
<p>This command should create an executable ~/bin/jarfind.jar file. Alternatively, you can just run the ant build script (build.xml) included in the <a target="_blank" href="https://github.com/climber09/JarFind">GitHub repository</a>.</p>
<p>For convenience, I like to invoke <em>JarFind</em> with a simple shell script like this:</p>
<pre class="code">#!/usr/bin/env bash

JARFIND_HOME=$(dirname $(readlink -f $0))
JARFIND_JAR="jarfind.jar"

if [ "$#" -eq 3 ]; then
java $1 -jar $JARFIND_HOME/$JARFIND_JAR $2 $3
else
java -jar $JARFIND_HOME/$JARFIND_JAR $1 $2
fi
exit 0
</pre>
<p>So if you save this shell script in the same directory as jarfind.jar – say, ~/bin/jarfind.sh – you have a handy way of invoking <em>JarFind</em>. Better still, you can create a symbolic link to the script – something like:</p>
<pre class="code">$ sudo ln -s ~/bin/jarfind.sh /usr/local/bin/jarfind
</pre>
<p>Then simply invoke the link.</p>
<h3 class="entry-sub-sect"><!--a href="#usage" aria-hidden="true" class="anchor" id="user-content-usage"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a-->Usage</h3>
<pre class="code">$ jarfind
USAGE: java [-DjarFind.jarEntryMatcher=my.custom.Matcher] net.sourceforge.hunterj.jarfind.JarFind &lt;starting_dir&gt;  &lt;class_name_exp&gt;
$ jarfind ~/workspace TestCase

Looking for TestCase.class under /home/jim/workspace...

/home/jim/workspace/JavaTest/lib/junit-4.12.jar
junit/framework/TestCase.class
</pre>
<p><em>JarFind</em> will display the located jar file(s) as well as the .class file found within that jar.</p>
<p>Sometimes you get multiple results, in which case you will need to manually select the right jar.</p>
<pre class="code">$ jarfind ~/workspace Document

Looking for Document.class under /home/jim/workspace...

/home/jim/workspace/lib/lucened.jar
org/apache/lucene/document/Document.class
/home/jim/workspace/lib/Tidy.jar
org/w3c/dom/Document.class
/home/jim/workspace/lib/jdom.jar
org/jdom/Document.class
</pre>
<p>You can also customize the search by implementing your own <em>net.sourceforge.hunterj.jarfind.JarEntryMatcher</em>. You then provide the fully qualified Java class name of your custom matcher as a jvm system property using the standard “-D” option of the <em>java</em> command. The system property <em>JarFind</em> looks for is <em>“jarFind.jarEntryMatcher”</em>. So, for example if you have created an executable jar file, your command would look something like:</p>
<pre class="code">$ java -DjarFind.jarEntryMatcher=my.custom.Matcher -jar ~/bin/jarfind.jar ~/workspace TestCase
</pre>
<p>If you use the script file above, and create a link to it, then your command would like something like:</p>
<pre class="code">$ jarfind -DjarFind.jarEntryMatcher=my.brilliant.custom.Matcher ~/workspace TestCase
</pre>
<p>You just need to make sure that your custom <em>matcher</em> class is on your Java classpath.</p>
<p>

</p><ul class="page_section_links">
<li><span class="arrow">»</span>Source Code: <a href="https://github.com/climber09/JarFind" target="_blank">https://github.com/climber09/JarFind</a></li>
</ul>
</div>
</div>
</article>`;
