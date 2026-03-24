article_html = `<article id="post-172" class="post-172 post type-post status-publish format-standard hentry category-webservices clearfix">
<header class="entry-header">
<h1 class="entry-title">Web Services &#8211; Part 3</h1></header><!-- .entry-header -->
<div class="entry-content">
<link rel="stylesheet" href="assets/css/custom-button.css"/>
<ul id="nav2"></ul>
<div id="content_txt">
<div class="nav-prev-btn"><a target="_top" class="custom-nav-btn" href="p/web_services_part_2">&#10092; PART 2</a></div>
<div class="nav-next-btn"><a target="_top" class="custom-nav-btn" href="p/web_services_part_4">PART 4 &#10093;</a></div>
<p/>
<p><span class="section">Axis2 Implementation:</span></p>
<p>
I implemented the Axis2 version of my web service in the usual way using the code generation tools that come with the Axis2 distribution &#8211; <span class="code">java2wsdl.bat</span> and <span class="code">wsdl2java.bat</span>. After the code generation steps, I simply implemented the specific logic I needed within the service skeleton class. Once I had all the service-specific code completed I used the Apache Ant build script, provided by the Axis2 distribution, to archive the service into MessageEditorService.aar, which worked very nicely, packaging up the <a title="You may need to disable your Pop-up Blocker to view" href="javascript:popupUtil.open('assets/webservices/MessageDemoService.xml','')">MessageDemoService.wsdl</a>  as well as the services.xml file.
</p>
<p>
Thanks to the virtual hosting on my current hosting service provider, I was able to deploy the Axis2 web service in the usual configuration, as illustrated here:
</p>
<p>
<img src="assets/img/axis2deployt.gif" alt="Axis Deployment"/>
</p>
<p>
Lastly, I generated a JUnit test client for the Axis2 version using <span class="code">wsdl2java.bat</span>, which you can download from [<a href="assets/webservices/MessageEditorService-Axis2TestClient.zip">here</a>].
</p>
<div class="nav-prev-btn"><a target="_top" class="custom-nav-btn" href="p/web_services_part_2">&#10092; PART 2</a></div>
<div class="nav-next-btn"><a target="_top" class="custom-nav-btn" href="p/web_services_part_4">PART 4 &#10093;</a></div>
<p/>
</div><!-- end #content_txt -->
</div>
</article>`;
