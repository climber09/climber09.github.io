/** {key => {label, posts[..], parent}} */
const topicInfo = {"java": {label: "Java/JEE", posts: ["p/jarfind","p/javadoc_frames_generator","p/javadoc_viewer","p/jdbc_framework","p/jdbc_testing_with_mock_objects","p/web_services_part_1","p/web_services_part_3","p/web_services_part_4","p/xslt_for_dynamic_content_generation","p/xslt_with_jstl"]},
"jdbc": {label: "JDBC", posts: ["p/jdbc_framework","p/jdbc_testing_with_mock_objects"], parent: "java"},
"jsp": {label: "JSP", posts:["p/xslt_with_jstl"], parent: "java"},
"jstl": {label: "JSTL", posts:["p/xslt_with_jstl"], parent: "java"},
"xslt": {label: "XSLT", posts:["p/xslt_for_dynamic_content_generation","p/xslt_with_jstl"], parent: "java"},
"javascript": {label: "JavaScript", posts:["p/dynamic_dom_viewer","p/javadoc_frames_generator","p/javadoc_viewer"]},
"perl": {label: "Perl", posts:["p/find_jars_perl_version","p/web_services_part_2"]},
"testing": {label: "Testing", posts:["p/jdbc_testing_with_mock_objects"]},
"webservices": {label: "Web Services", posts:["p/web_services_part_1","p/web_services_part_2","p/web_services_part_3","p/web_services_part_4"]}};
function defaultContent(container) {
  container.html(`<article class="page type-page status-publish hentry clearfix" style="padding-top:30px"><header class="entry-header"><h1 class="entry-title">Browse</h1></header>
  <div id="article-box" class="entry-content"><ul id="nav2"></ul><div id="content_txt"><div id="entry-box" class="welcome_pg"></div></div></div></article>`);
  const contentBox = container.find("div#article-box div#content_txt div#entry-box");
  $.each(topicInfo, (key, topic)=>{
    contentBox.append(`<div class="card" onclick="window.location.assign('t/?=${key}')"><div class="card-content"><h3>${topic.label}</h3></div></div>`);
  });
}
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
