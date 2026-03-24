article_html = `<article id="post-160" class="post-160 post type-post status-publish format-standard hentry category-webservices clearfix">
<header class="entry-header">
<h1 class="entry-title">Web Services &#8211; Part 2</h1></header><!-- .entry-header -->
<div class="entry-content">
<link rel="stylesheet" href="assets/css/custom-button.css"/>
<ul id="nav2"></ul>
<div id="content_txt">
<div class="nav-prev-btn"><a target="_top" class="custom-nav-btn" href="p/web_services_part_1">&#10092; PART 1</a></div>
<div class="nav-next-btn"><a target="_top" class="custom-nav-btn" href="p/web_services_part_3">PART 3 &#10093;</a></div>
<p/>
<p><span class="section">Perl Implementation:</span></p>
<p>
The SOAP::Lite module does most of the heavy lifting. Consider this example:
</p>
<pre class="code" style="padding-left: 25px;"><span class="comment">#!/usr/bin/perl</span>

<span class="keywd">use</span> SOAP::Transport::HTTP;

SOAP::Transport::HTTP::CGI
-> dispatch_to(<span class="strVal">'demo'</span>)
-> handle;

<span class="keywd">package</span> demo;
    ...
1;
</pre>
<p>These few lines of code allow a Web Service client to access the subroutines defined within the <em>demo</em> module using the SOAP protocol over HTTP. Of course the client needs to know what those subroutines look like, but the cool thing here is how simple and easy to use the SOAP::Lite module can be. My Web Service demo is named <span class="code">MessageDemo.cgi</span>. In this example the service address is <span class="code">http://huntrjp.users.sourceforge.net/cgi-bin/MessageDemo.cgi.</span> <span class="code">MessageDemo.cgi</span> serves as a proxy that can dispatch the client&#8217;s calls to the <em>demo</em> module. No configuration or deployment descriptor file is needed. That&#8217;s the gist of it.</p>
<p>Now to expose the Web Service methods to the world a WSDL file is required. To create the WSDL file &#8211; <a title="You may need to disable your Pop-up Blocker to view" href="javascript:popupUtil.open('assets/webservices/MessageDemoService.xml','')">MessageDemoService.wsdl</a> &#8211; I used Sun&#8217;s <em>wscompile</em> tool that comes with the J2EE 1.4 SDK. I also used the <em>wscompile</em> tool to generate the Java client stub code to test the service.
</p>
<p>
A Perl client can access the service very easily using the SOAP::Lite module. For example:
</p>
<pre class="code" style="padding-left: 25px;"><span class="comment">#!/usr/bin/perl</span>

<span class="keywd">use</span> SOAP::Lite;

<span class="field">$categoryList</span> = SOAP::Lite
    -> uri(<span class="strVal">'http://huntrjp.users.sourceforge.net/demo'</span>)
    -> proxy(<span class="strVal">'http://huntrjp.users.sourceforge.net/cgi-bin/MessageDemo.cgi'</span>)
    -> getCategoryNames()
    -> result;

<span class="keywd">foreach</span> <span class="field">$category</span> (<span class="field">@$categoryList</span>) {
    <span class="keywd">print</span> <span class="field">$category</span> . <span class="strVal">"\n"</span>;
}
</pre>
<p>
This Perl program will access the Web Service, call getCategoryNames(), and then display the category names. You can check out the complete Perl source for the Web Service [<a title="You may need to disable your Pop-up Blocker to view" href="javascript:popupUtil.open('assets/webservices/MessageDemo.txt','')">here</a>].
</p>
<p>
For more information about the SOAP::Lite module you can go to <a href="http://search.cpan.org/~byrne/SOAP-Lite-0.60a/lib/SOAP/Lite.pm" target="_blank">http://search.cpan.org/~byrne/SOAP-Lite-0.60a/lib/SOAP/Lite.pm</a>
</p>
<p>In the next <a target="_top" href="p/web_services_part_3">part</a> I&#8217;ll cover the Axis2 version.</p>
<div class="nav-prev-btn"><a target="_top" class="custom-nav-btn" href="p/web_services_part_1">&#10092; PART 1</a></div>
<div class="nav-next-btn"><a target="_top" class="custom-nav-btn" href="p/web_services_part_3">PART 3 &#10093;</a></div>
<p/>
</div><!-- end content_txt -->
</div>
</article>`;
