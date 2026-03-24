article_html=`<article id="post-177" class="post-177 post type-post status-publish format-standard hentry category-jsp category-jstl category-xslt clearfix">
<header class="entry-header">
<h1 class="entry-title">XSLT With JSTL</h1>	</header><!-- .entry-header -->	
<div class="entry-content">
<ul id="nav2"></ul>
<div id="content_txt">
<p>
XSLT has a variety of advantages and is suitable for a number of tasks that would be more tedious otherwise. XSLT can also be used in conjunction with JSTL tags, as well, to produce consistent and reusable HTML elements. I found it useful in generating the HTML for hyperlinks throughout this Web site. It&#8217;s superior to the manual <em>cut-and-paste</em> method, which can be tedious and error-prone. The resulting HTML code is much less cluttered, and you only need to edit the links in one place, an XSL stylesheet, to modify every occurence of the affected HTML element. So, for instance, consider this XSL file fragment:
</p>
<pre class="code">
<span class="tag">&lt;xsl:variable</span> <span class="attr">name=</span><span class="strVal">"popupMsg"</span><span class="tag">&gt;</span>You may need to disable your Pop-up Blocker to view<span class="tag">&lt;/xsl:variable&gt;</span>
	
<span class="tag">&lt;xsl:template</span> <span class="attr">match=</span><span class="strVal">"a[@id='messageEditor']"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;a</span> <span class="attr">title=</span><span class="strVal">"{$popupMsg}"</span> <span class="attr">href=</span><span class="strVal">"javascript:popUp('/ajax/msgEditorAjax.jsp','',defaultSpecs)"</span><span class="tag">&gt;</span>Message&#160;Editor<span class="tag">&lt;/a&gt;</span>
<span class="tag">&lt;/xsl:template&gt;</span>
</pre>
<p>
The template defined here can be applied to any tag matching <span class="code">&lt;a id=&#8221;messageEditor&#8221;/&gt;</span>. So then the JSTL XSLT tags can be used in a JSP file to access the XSL stylesheet and inject HTML into the page. First, the XSL stylesheet is imported into the JSP.
</p>
<pre class="code">
<span class="tag">&lt;c:import</span> <span class="attr">url=</span><span class="strVal">"/xsl/jstl-transform.xsl"</span> <span class="attr">var=</span><span class="strVal">"xslFile"</span><span class="tag">/&gt;</span>
</pre>
<p>Then that stylesheet can be applied via the JSTL XSLT tag.</p>
<pre class="code">
<span class="tag">&lt;x:transform</span> <span class="attr">xslt=</span><span class="strVal">"&#36;{xslFile}"</span><span class="tag">&gt;&lt;a</span> <span class="attr">id=</span><span class="strVal">"messageEditor"</span><span class="tag">/&gt;&lt;/x:transform&gt;</span>
</pre>
</p>
<p>
The <span class="code">&lt;a id=&#8221;messageEditor&#8221;/&gt;</span> tag is treated as XML by the XSLT transformer and the entire tag is substituted for the HTML code defined in the XSL stylesheet. The resulting HTML looks like this:
</p>
<pre class="code">
<span class="tag">&lt;a</span> <span class="attr">title=</span><span class="strVal">"You may need to disable your Pop-up Blocker to view"</span> <span class="attr">href=</span><span class="strVal">"javascript:popUp('/ajax/msgEditorAjax.jsp','',defaultSpecs)"</span><span class="tag">&gt;</span>Message&nbsp;Editor<span class="tag">&lt;/a&gt;</span>
</pre>
<p>
The JSP code is much cleaner as a result, and much easier to maintain. An additional advantage is that all the Web site links can be stored and maintained in one file, which is extremely useful if many of the links appear in multiple locations throughout the Web site.
</p>
<div>
</div>
</article>`;
