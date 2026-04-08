/** For topic to posts mapping */
const postMapping = (()=>{
  const _topics = {
    "java": [],
    "jdbc": [],
    "jsp": [],
    "jstl": [],
    "xslt": [],
    "javascript": [],
    "perl": [],
    "testing": [],
    "webservices": []};

  const _posts = {
    "p/dynamic_dom_viewer": ["javascript"],
    "p/find_jars_perl_version": ["perl"],
    "p/jarfind": ["java"],
    "p/javadoc_frames_generator": ["java", "javascript"],
    "p/javadoc_viewer": ["java", "javascript"],
    "p/jdbc_framework": ["java", "jdbc"],
    "p/jdbc_testing_with_mock_objects": ["java", "jdbc", "testing"],
    "p/web_services_part_1": ["java", "webservices"],
    "p/web_services_part_2": ["perl", "webservices"],
    "p/web_services_part_3": ["java", "webservices"],
    "p/web_services_part_4": ["java", "webservices"],
    "p/xslt_for_dynamic_content_generation": ["java", "xslt"],
    "p/xslt_with_jstl": ["java", "jsp", "xslt", "jstl"]};

  /** Map posts to topics */
  for(let [p, topics] of Object.entries(_posts)){
    topics.forEach((t)=>{
      _topics[t].push(p);
    });
  }

  return {
    byTopic : (t)=>{return _topics[t]}
  };
})();

const topicInfo = {
  "java": {label: "Java/JEE", posts: postMapping.byTopic("java")},
  "jdbc": {label: "JDBC", posts: postMapping.byTopic("jdbc"), parent: "java"},
  "jsp": {label: "JSP", posts: postMapping.byTopic("jsp"), parent: "java"},
  "jstl": {label: "JSTL", posts: postMapping.byTopic("jstl"), parent: "java"},
  "xslt": {label: "XSLT", posts: postMapping.byTopic("xslt"), parent: "java"},
  "javascript": {label: "JavaScript", posts: postMapping.byTopic("javascript")},
  "perl": {label: "Perl", posts: postMapping.byTopic("perl")},
  "testing": {label: "Testing", posts: postMapping.byTopic("testing")},
  "webservices": {label: "Web Services", posts: postMapping.byTopic("webservices")}
}

/** For topic card grid display */
function defaultContent(container) {
  container.html(`<article class="page type-page status-publish hentry clearfix" style="padding-top:30px"><header class="entry-header"><h1 class="entry-title">Browse</h1></header>
  <div id="article-box" class="entry-content"><ul id="nav2"></ul><div id="content_txt"><div id="entry-box" class="welcome_pg"></div></div></div></article>`);
  const contentBox = container.find("div#article-box div#content_txt div#entry-box");
  $.each(topicInfo, (key, topic)=>{
    contentBox.append(`<div class="card" onclick="window.location.assign('t/?=${key}')"><div class="card-content"><h3>${topic.label}</h3></div></div>`);
  });
}

/** For masthead links and topic list display, right side-panel */
(()=>{
  $(document).ready(()=>{
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
  });
})();
