const article_html = `<article id="post-198" class="post-198 post type-post status-publish format-standard hentry category-java category-javascript clearfix">
<header class="entry-header">
<h1 class="entry-title">Javadoc Viewer</h1>
</header>
<div class="entry-content">
<link rel="stylesheet" type="text/css" href="assets/css/modal-image.css"/>
<script type="text/javascript" src="assets/js/modal-image.js"></script></p>
<ul id="nav2"></ul>

<div id="content_txt">
<ul class="page_section_links">
<li><span class="arrow">&raquo;</span>Source Code: <a href="https://github.com/climber09/JavadocViewer" target="_blank">https://github.com/climber09/JavadocViewer</a></li>
</ul>

<div id="modal_pane" class="modal-backdrop"><span id="closeBtn" class="modal-button">&times;</span><br />
<img class="modal-content" id="modal_image"></p>
<div id="caption"></div>
</div>
<div style="margin: 30px 0;">
<img class="image-thumb" src="assets/img/jdv-screenshot.png" alt="" width="300" height="200" onclick="modalView.show(this)" onload="modalView.init()"/>
</div>

<p>Javadoc Viewer is an enhanced Web UI for viewing Javadoc pages. It provides a number of features which help the Java developer work with Javadocs more efficiently and productively.
</p>
<p><!--h3><a href="#features" aria-hidden="true" class="anchor" id="user-content-features"></a>Features:</h3>
--></p>
<ul>
<li>Multiple tab-style display of pages within the class frame.</li>
<li>Multiple accordion-style display of pages within the package frame.</li>
<li>Loading of Javadocs from local and remote sources.</li>
<li>Quick location of package and class pages without the usual search and scroll.</li>
<li>Runs as a standard JEE Web application on any JEE Web server</li>
</ul>
<p>Check out the <a target="_blank" href="http://demo-javadoc-viewer.a3c1.starter-us-west-1.openshiftapps.com/JavadocViewer">live demo</a>.
</p>
<h3 class="entry-sub-sect"><!--a href="#build" aria-hidden="true" class="anchor" id="user-content-build"></a-->Build</h3>
<p>Simply run the Ant build script to build JavadocViewer.war, wherever you unzip and store the distribution files. Then deploy the war to your JEE Web server.
</p>
<pre class="code">
$ cd /../&lt;YOUR-JAVADOCVIEWER-HOME&gt;/
$ ant
</pre>
<p>Optionally, you can specify a <code>server.deploy.dir</code> value in build.properties and run the Ant deploy task, which will build JavadocViewer.war and copy it to the deployment directory specified in build.properties.
</p>
<pre class="code">$ ant deploy</code></pre>
<h3 class="entry-sub-sect"><!--a href="#usage" aria-hidden="true" class="anchor" id="user-content-usage">
</a-->Usage</h3>
<p>When you first open the JavadocViewer application in a web browser you will need to enter the location of the Javadoc sources you want to view in the location widget in the top left corner. Click the &#8220;Browse&#8221; button to open the folder browser and locate the local folder containing the main index.html, or manually enter the file path into the location box. To load Javadocs from a remote source, enter the complete URL in the location box (e.g., <code>http://junit.sourceforge.net/javadoc/</code>).
</p>
<p>In the top right corner you will see another location widget, which can be used to quickly open any package or class page within the class frame. The fully qualified java class name or package must be entered accurately (e.g., <code>java.lang.String</code> or <code>javax.xml.parsers</code>).
</p>

<ul class="page_section_links">
<li><span class="arrow">&raquo;</span>Source Code: <a href="https://github.com/climber09/JavadocViewer" target="_blank">https://github.com/climber09/JavadocViewer</a></li>
</ul>

</div>
</div>
</article>`;
