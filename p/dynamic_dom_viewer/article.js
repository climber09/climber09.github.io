article_html = `<article id="post-203" class="post-203 post type-post status-publish format-standard hentry category-javascript clearfix">
<header class="entry-header">
<h1 class="entry-title">Dynamic DOM Viewer</h1>	</header><!-- .entry-header -->	
<div class="entry-content">
<ul id="nav2"></ul>
<div id="content_txt">
<p><span class="section">A handy JavaScript tool</span></p>

<ul class="page_section_links">
<li><span class="arrow">&raquo;</span>Source Code: <a href="https://github.com/climber09/Dynamic-DOM-Viewer" target="_blank">https://github.com/climber09/Dynamic-DOM-Viewer</a></li>
<li><span class="arrow">&raquo;</span><a title="You may need to disable your Pop-up Blocker to view" href="javascript:popupUtil.open('assets/ddv/dynamic-dom-viewer.html','')">Demo</a></li>
</ul>

<p>
I have worked with JavaScript on numerous web-based projects for dynamic client-side functionality.
<!--Some examples found here include my work with <a href="/?c=projects&amp;p=ajax">AJAX</a> and my <a title="You may need to disable your Pop-up Blocker to view" href="javascript:popupUtil.open('/ajax/xrequest.txt','')">xrequest</a> API, as well as my <a title="You may need to disable your Pop-up Blocker to view" href="javascript:popupUtil.open('/ajax/msgEditorAjax.jsp','')">Message&nbsp;Editor</a> demo application.</p>
<p-->
Quite often I found that I needed to write a little script to expose a JavaScript object&#8217;s member functions and properties within a browser. This is very useful in having to write cross-browser code. It&#8217;s a fairly simple thing to do in JavaScript using the standard <span class="code">for&#8230; in</span> loop:
</p>
<pre class="code">
<span class="keywd">var</span> display = <span class="strVal">''</span>;
<span class="keywd">for</span> (<span class="keywd">var</span> member <span class="keywd">in</span> window){
    display += member + <span class="strVal">' = '</span> + window[member] + <span class="strVal">'&lt;br&gt;\n'</span>;
}
<span class="keywd">var</span> popup = window.open();
popup.document.open();
popup.document.write(display);
popup.document.close();
</pre>
<p>
Running this example inside a web browser will open a new window displaying all of the window object&#8217;s members with their corresponding values. The code example above will work with most any JavaScript object because JavaScript objects are treated as associative arrays, and object members can be conveniently accessed as key-value pairings.
</p>
<p><!--p>
Native JavaScript Arrays are a little different in that the variable assigned repetitively within each iteration of the 
<span class="code">for... in </span> loop - the <em>member</em> variable used in the above example - 
will store an array index, rather than an object member's name.
</p-->
<p>
Eventually, I decided that it would be useful to create a reusable script that I could refer back to whenever I needed to plumb inside an object and expose it&#8217;s members. The result is <a title="You may need to disable your Pop-up Blocker to view" href="javascript:popupUtil.open('assets/ddv/dynamic-dom-viewer.html','')">Dynamic DOM Viewer</a>. The JavaScript in <a title="You may need to disable your Pop-up Blocker to view" href="javascript:popupUtil.open('assets/ddv/dynamic-dom-viewer.html','')">Dynamic DOM Viewer</a> will, by default, query the window element of the browser and display the results. The initial view displays the first level of elements under the window element. Successive levels can then be viewed by expanding each child element.
</p>
<p>
The resulting tree of DOM elements is similar to what you will see inside Firefox&#8217;s Firebug add-on. But Firebug only works in Firefox, while <a title="You may need to disable your Pop-up Blocker to view" href="javascript:popupUtil.open('assets/ddv/dynamic-dom-viewer.html','')">Dynamic DOM Viewer</a> can be opened in any browser. It&#8217;s standard JavaScript in an HTML file. In addition, a specific element can be entered in the text box at the top of the page. After clicking the &#8220;Query&#8221; button the specified element will then be queried as the root of the resulting tree, thereby simplifying the output. This is useful when you want to drill down to a specific element quickly.
</p>
<p>
It is also handy for inspecting the <span class="code">window.event</span> object. This object won&#8217;t have any members in the default display, as there are no accessible events to record. But just type &#8220;window.event&#8221; into the query box, click the &#8220;Query&#8221; button, or hit the &#8220;Enter&#8221; key, and check out the results. I&#8217;ve tested <a title="You may need to disable your Pop-up Blocker to view" href="javascript:popupUtil.open('assets/ddv/dynamic-dom-viewer.html','')">Dynamic DOM Viewer</a> in Firefox, Internet Explorer, Opera, Google Chrome, and Safari. At the time of this writing, only Firefox does not have the <span class="code">window.event</span> object. It&#8217;s interesting to view the different elements displayed by different browsers with <a title="You may need to disable your Pop-up Blocker to view" href="javascript:popupUtil.open('assets/ddv/dynamic-dom-viewer.html','')">Dynamic DOM Viewer</a>.
</p>

<ul class="page_section_links">
<li><span class="arrow">&raquo;</span>Source Code: <a href="https://github.com/climber09/Dynamic-DOM-Viewer" target="_blank">https://github.com/climber09/Dynamic-DOM-Viewer</a></li>
</ul>
<p/>
</div><!-- end content_txt -->
</div>
</article>`;
