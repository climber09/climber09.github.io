/** {path => excerpt} */
export const postInfo = {'p/dynamic_dom_viewer' : '<article class="post type-post status-publish format-standard hentry clearfix"><header class="entry-header"><h2 class="entry-title"><a href="p/dynamic_dom_viewer" rel="bookmark">Dynamic DOM Viewer</a></h2></header><div class="entry-summary"><p>A handy JavaScript tool. I have worked with JavaScript on numerous web-based projects for dynamic client-side functionality. Quite often I found that I needed to write a little script to expose a JavaScript object’s member functions and properties [&hellip;]</p></div></article>',
    'p/find_jars_perl_version' : '<article class="post type-post status-publish format-standard hentry clearfix"><header class="entry-header"><h2 class="entry-title"><a href="p/find_jars_perl_version" rel="bookmark">Find Jars – Perl Version</a></h2></header><div class="entry-summary"><p>A number of years ago I wrote this little utility script in Perl. It’s handy during Java development when you need to locate a particular jar file, but don’t know which one exactly. [&hellip;]</p></div></article>',
    'p/jarfind' : '<article class="post type-post status-publish format-standard hentry clearfix"><header class="entry-header"><h2 class="entry-title"><a href="p/jarfind" rel="bookmark">JarFind</a></h2></header><div class="entry-summary"><p>JarFind is a Java development tool. It’s purpose is to quickly find jar files which contain a particular Java .class file. [&hellip;]</p></div></article>',
    'p/javadoc_frames_generator' : '<article class="post type-post status-publish format-standard hentry clearfix"><header class="entry-header"><h2 class="entry-title"><a href="p/javadoc_frames_generator" rel="bookmark">Javadoc Frames Generator</a></h2></header><div class="entry-summary"><p>The Java Standard Edition API since version 11 has been published without the traditional HTML frames layout that many developers have become accustomed to. If you want to view the Java edition 11 (or later) API with HTML frames [&hellip;]</p></div></article>',
    'p/javadoc_viewer' : '<article class="post type-post status-publish format-standard hentry clearfix"><header class="entry-header"><h2 class="entry-title"><a href="p/javadoc_viewer" rel="bookmark">Javadoc Viewer</a></h2></header><div class="entry-summary"><p>Javadoc Viewer is an enhanced Web UI for viewing Javadoc pages. It provides a number of features which help the Java developer work with Javadocs more efficiently and productively. [&hellip;]</p></div></article>',
    'p/jdbc_framework' : '<article class="post type-post status-publish format-standard hentry clearfix"><header class="entry-header"><h2 class="entry-title"><a href="p/jdbc_framework" rel="bookmark">JDBC Framework</a></h2></header><div class="entry-summary"><p>Why a JDBC framework? My aim in developing a JDBC framework was to create a simple, flexible, and lightweight framework for running JDBC queries. [&hellip;]</p></div></article>',
    'p/jdbc_testing_with_mock_objects' : '<article class="post type-post status-publish format-standard hentry clearfix"><header class="entry-header"><h2 class="entry-title"><a href="p/jdbc_testing_with_mock_objects" rel="bookmark">JDBC Testing With Mock Objects</a></h2></header><div class="entry-summary"><p>Not long ago I had to design a testing strategy for JDBC code. As I began prototyping I ran into the problem of corrupt data from the database. [&hellip;]</p></div></article>',
    'p/web_services_part_1' : '<article class="post type-post status-publish format-standard hentry clearfix"><header class="entry-header"><h2 class="entry-title"><a href="p/web_services_part_1" rel="bookmark">Web Services – Part 1</a></h2></header><div class="entry-summary"><p>For a Web Service demo I decided to create a simple service with a few methods that would provide access to data that I had been using for my Message Editor application. [&hellip;]</p></div></article>',
    'p/web_services_part_2' : '<article class="post type-post status-publish format-standard hentry clearfix"><header class="entry-header"><h2 class="entry-title"><a href="p/web_services_part_2" rel="bookmark">Web Services – Part 2</a></h2></header><div class="entry-summary"><p>Perl Implementation: The SOAP::Lite module does most of the heavy lifting. Consider this example[&hellip;]</p></div></article>',
    'p/web_services_part_3' : '<article class="post type-post status-publish format-standard hentry clearfix"><header class="entry-header"><h2 class="entry-title"><a href="p/web_services_part_3" rel="bookmark">Web Services – Part 3</a></h2></header><div class="entry-summary"><p>Axis2 Implementation: I implemented the Axis2 version of my web service in the usual way using the code generation tools that come with the Axis2 distribution – java2wsdl.bat and wsdl2java.bat. [&hellip;]</p></div></article>',
    'p/web_services_part_4' : '<article class="post type-post status-publish format-standard hentry clearfix"><header class="entry-header"><h2 class="entry-title"><a href="p/web_services_part_4" rel="bookmark">Web Services – Part 4</a></h2></header><div class="entry-summary"><p>RESTful Implementation: The RESTful version was probably the easiest to implement. I used the JAX-RS/Jersey API to create the service as well as a test client. [&hellip;]</p></div></article>',
    'p/xslt_for_dynamic_content_generation' : '<article class="post type-post status-publish format-standard hentry clearfix"><header class="entry-header"><h2 class="entry-title"><a href="p/xslt_for_dynamic_content_generation" rel="bookmark">XSLT For Dynamic Content Generation</a></h2></header><div class="entry-summary"><p>A number of years ago I came across an article, “XSLT Querying & XML Documents,” by Giuseppe Naccarato, in Dr.Dobb’s Journal, December 2002. In this article Mr. Naccarato described a relatively new use of XSLT [&hellip;]</p></div></article>',
    'p/xslt_with_jstl' : '<article class="post type-post status-publish format-standard hentry clearfix"><header class="entry-header"><h2 class="entry-title"><a href="p/xslt_with_jstl" rel="bookmark">XSLT With JSTL</a></h2></header><div class="entry-summary"><p>XSLT has a variety of advantages and is suitable for a number of tasks that would be more tedious otherwise. XSLT can also be used in conjunction with JSTL tags, as well, to produce consistent and reusable HTML elements. [&hellip;]</p></div></article>'
}

export const topicInfo = {
    "java": {label: "Java/JEE"},
    "javadoc": {label: "Javadoc", parent: "java"},
    "jdbc": {label: "JDBC", parent: "java"},
    "jsp": {label: "JSP", parent: "java"},
    "jstl": {label: "JSTL", parent: "java"},
    "xslt": {label: "XSLT", parent: "java"},
    "javascript": {label: "JavaScript"},
    "perl": {label: "Perl"},
    "testing": {label: "Testing"},
    "webservices": {label: "Web Services"}
};

/** Assign posts to topics */
const postMapping = {
  "p/dynamic_dom_viewer": {javascript:1},
  "p/find_jars_perl_version": {perl:1},
  "p/jarfind": {java:1},
  "p/javadoc_frames_generator": {java:1, javadoc:1, javascript:1},
  "p/javadoc_viewer": {java:1, javadoc:1, javascript:1},
  "p/jdbc_framework": {java:1, jdbc:1},
  "p/jdbc_testing_with_mock_objects": {java:1, jdbc:1, testing:1},
  "p/web_services_part_1": {java:1, webservices:1},
  "p/web_services_part_2": {perl:1, webservices:1},
  "p/web_services_part_3": {java:1, webservices:1},
  "p/web_services_part_4": {java:1, webservices:1},
  "p/xslt_for_dynamic_content_generation": {java:1, xslt:1},
  "p/xslt_with_jstl": {java:1, jsp:1, xslt:1, jstl:1}
};

/** Returns array of posts assigned to the given topic */
export function getPosts(t){
    const _posts = [];
    $.each(postMapping, (p, topics)=>{
        if(topics[t]){
            _posts.push(p);
        }
    });
    return _posts;
}

/** Common HTML for masthead and topic list display, right side-panel*/
const headerHtml = `
<div class="container">
<div class="site-branding col-md-4 col-sm-6 col-xs-12">
<p class="site-title"><a target="_top" href="." rel="home">James Hunter</a></p><p class="site-description">Computer Software &amp; Web Development</p>
</div>
<nav id="mainnav" class="main-navigation col-md-8 col-sm-6 col-xs-12" role="navigation">
<div id="head-menu-container" class="menu-main-menu-container">
<ul id="primary-menu" class="menu">
<li id="menu-item-41" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-41"><a target="_top" href="resume/">resume</a>
<ul class="sub-menu">
<li id="menu-item-51" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51"><a target="_top" href="resume/?=summary">summary</a></li>
<li id="menu-item-220" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-220"><a target="_top" href="resume/?=experience">experience</a></li>
<li id="menu-item-43" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-43"><a target="_top" href="resume/?=education">education</a></li>
</ul>
</li>
<li id="menu-item-47" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47"><a target="_top" href="etc/">etc</a></li>
</ul></div></nav></div>`;

const copyright = `<div style="text-align:center;display:block;margin:0;padding:0;font:normal 8pt 'courier new';color:#666;">Copyright &copy; 2003 - 2026 James P. Hunter</div>`;

export function commonElements(){
  $("#masthead").html(headerHtml);
  const tBox = $('<aside id="categories-2" class="widget widget_categories"><h4 class="widget-title">Topics</h4></aside>');
  const tList = $("<ul></ul>");
  $("aside#secondary").append(tBox.append(tList));
  $.each(topicInfo, (topic, info)=>{
    // const li = `<li id="${topic}" class="cat-item"><a target="_top" href="t/?=${topic}" onmouseover='this.style.color="#8298fa"' onmouseout='this.style.color="#656d6d"'>${info.label}</a></li>`;
    const li = `<li id="${topic}" class="cat-item"><a target="_top" href="t/?=${topic}" class="list-item">${info.label}</a></li>`;
    if(info.parent){
      const parent = $(`li#${info.parent}`);
      const childList = parent.find("ul.children");
      if(childList.length){
        childList.append(li);
      } else{
        $('<ul class="children"></ul>').appendTo(parent).append(li);
      }
    }else{
      tList.append(li);
    }
  });
  $("#content").append(copyright);
}

/** HTML for topic card grid display */
export default () => {
  const html = `<article class="page type-page status-publish hentry clearfix">
  <header class="entry-header"><h1 class="entry-title">Browse</h1></header>
  <div id="article-box" class="entry-content"><ul id="nav2"></ul>
  <div id="content_txt"><div id="entry-box" class="welcome_pg">
  ${$.map(topicInfo, (info, topic)=>{
    return `<div class="card" onclick="window.location.assign('t/?=${topic}')"><div class="card-content"><h3>${info.label}</h3></div></div>`
  }).join("")}
  </div></div></div></article>`;
  return html;
}
