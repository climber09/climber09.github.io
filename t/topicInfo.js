const topicInfo = {
  "java": {label: "Java/JEE"},
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
  "p/dynamic_dom_viewer": {"javascript":1},
  "p/find_jars_perl_version": {"perl":1},
  "p/jarfind": {"java":1},
  "p/javadoc_frames_generator": {"java":1, "javascript":1},
  "p/javadoc_viewer": {"java":1, "javascript":1},
  "p/jdbc_framework": {"java":1, "jdbc":1},
  "p/jdbc_testing_with_mock_objects": {"java":1, "jdbc":1, "testing":1},
  "p/web_services_part_1": {"java":1, "webservices":1},
  "p/web_services_part_2": {"perl":1, "webservices":1},
  "p/web_services_part_3": {"java":1, "webservices":1},
  "p/web_services_part_4": {"java":1, "webservices":1},
  "p/xslt_for_dynamic_content_generation": {"java":1, "xslt":1},
  "p/xslt_with_jstl": {"java":1, "jsp":1, "xslt":1, "jstl":1}
};

function getPosts(t){
  const _posts = [];
  $.each(postMapping, (key, topics)=>{
    if(topics[t]){
      _posts.push(key);
    }
  });
  return _posts;
}

/** For topic card grid display */
function defaultContent(container) {
  container.html(`<article class="page type-page status-publish hentry clearfix" style="padding-top:30px"><header class="entry-header"><h1 class="entry-title">Browse</h1></header>
  <div id="article-box" class="entry-content"><ul id="nav2"></ul><div id="content_txt"><div id="entry-box" class="welcome_pg"></div></div></div></article>`);
  const contentBox = container.find("div#article-box div#content_txt div#entry-box");
  $.each(topicInfo, (key, info)=>{
    contentBox.append(`<div class="card" onclick="window.location.assign('t/?=${key}')"><div class="card-content"><h3>${info.label}</h3></div></div>`);
  });
}

/** For masthead links and topic list display, right side-panel */
(()=>{$(document).ready(()=>{
  const headLink = `
<ul id="primary-menu" class="menu">
<li id="menu-item-41" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-41"><a target="_top" href="resume/">resume</a>
<ul class="sub-menu">
<li id="menu-item-51" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51"><a target="_top" href="resume/?=summary">summary</a></li>
<li id="menu-item-220" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-220"><a target="_top" href="resume/?=experience">experience</a></li>
<li id="menu-item-43" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-43"><a target="_top" href="resume/?=education">education</a></li>
</ul>
</li>
<li id="menu-item-47" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-47"><a target="_top" href="etc/">etc</a></li>
</ul>`;
  $("div#head-menu-container").html(headLink);
  const tBox = $('<aside id="categories-2" class="widget widget_categories"><h4 class="widget-title">Topics</h4></aside>');
  const tList = $("<ul></ul>");
  $("aside#secondary").append(tBox.append(tList));
  $.each(topicInfo, (key, info)=>{
    const li = `<li id="${key}" class="cat-item"><a target="_top" href="t/?=${key}">${info.label}</a></li>`;
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
})})();
