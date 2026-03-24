article_html = `<article id="post-156" class="post-156 post type-post status-publish format-standard hentry category-perl clearfix">
<header class="entry-header">
<h1 class="entry-title">Find Jars &#8211; Perl Version</h1></header><!-- .entry-header -->
<div class="entry-content">
<ul id="nav2"></ul>
<div id="content_txt">
<ul class="page_section_links">
<li><span class="arrow">&raquo;</span>
<a title="You may need to disable your Pop-up Blocker to view" href="javascript:popupUtil.open('assets/findJars.txt','')">findJars.pl</a>
</li>
</ul>
<p>
A number of years ago I wrote this little utility script in Perl. It&#8217;s handy during Java development when you need to locate a particular jar file, but don&#8217;t know which one exactly. It&#8217;s actually a precursor to my <a target="_top" href="p/jarfind">JarFind</a> application written in Java, and essentially does the same thing. This script, <a title="You may need to disable your Pop-up Blocker to view" href="javascript:popupUtil.open('assets/findJars.txt','')">findJars.pl</a>, will execute a recursive search to locate Java jar files that contain a specified class file. So, for example, when you get a <span class="code">NoClassDefFoundError</span>, or <span class="code">ClassNotFoundException</span>, you can use it to locate the right jar to be included in your classpath. The syntax is similar to the standard Unix/Linux <span class="code">find</span> command.
</p>
<pre class="code">
$ perl findJars.pl -help
Usage: perl findJars.pl &lt;start&gt; &lt;pattern&gt; [-exec="&lt;command&gt;"]

  &lt;start&gt;:  The directory where the search begins.
&lt;pattern&gt;:  The name of the Java class, or pattern, to locate. Use of the '*'
            meta-character is allowed, e.g., Parser*, *Binding*, etc.
    -exec:  An optional command can be executed on each Jar file which 
            contains the specified class. The optional command must be in 
            quotes (e.g., -exec="copy {} /common/lib"). Note that the '{}' 
            symbol is replaced with the name of a matched
            Jar file.
    -help:  To view this display.
</pre>
<p><!--
I keep <a title="You may need to disable your Pop-up Blocker to view" href="javascript:popupUtil.open('assets/findJars.txt','')">findJars.pl</a> on my path, so whenever I need to locate a jar, I can do something like this:
--><br />
To locate a jar file, simply execute something like: </p>
<pre class="code">
$ perl findJars.pl ~/workspace OracleDriver
</pre>
<p>And the output will be something like:</p>
<pre class="code">
Search for Jars containing OracleDriver.class starting at /home/jim/workspace:

/home/jim/workspace/lib/oracle.jar:
        oracle/jdbc/driver/OracleDriver.class
        oracle/jdbc/OracleDriver.class

/home/jim/workspace/lib/classes12.jar:
        oracle/jdbc/driver/OracleDriver.class
        oracle/jdbc/OracleDriver.class

Results: found 2 Jar(s)
</pre>
<p>The <span class="code">-exec</span> option is handy when you want to execute some command with each jar file that scores a hit during the search, like, for example, copying each jar to some location:</p>
<pre class="code">
$ perl findJars.pl ~/workspace/oldLib OracleDriver -exec="cp {} ~/workspace/newLib"
</pre>
<p/>
</div><!-- end content_txt -->
</div>
</article>`;
