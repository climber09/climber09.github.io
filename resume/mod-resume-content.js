import resumeData from "./mod-resume-data.js";

function subtitleHtml(subtitles){
  let _html = "";
  if(subtitles){
    _html = subtitles.map(subtitle=>{
      return `<tr><td colspan="2" class="subtitle">${subtitle}</td></tr>`;
    }).join("");
  }
  return _html;
}

function headerHtml(hd){
  let _html = "";
  if(hd){
    _html = `<table class="resume_tbl"><tr>
    <td style="text-align:left;font-weight:bold">${hd.title.text}</td>
    <td class="resume-dates">${(hd.title.dates)? hd.title.dates: ""}</td></tr>
    ${subtitleHtml(hd.subtitles)}
    </tr></table>`;
  }
  return _html;
}

function itemListHtml(list){
  let _html = "";
  if(list){
    _html = `<ul class="resume-item-list fa-ul">
    ${list.map(item=>{
      return `<li class="resume-item"><span class="fa-li"><i class="fa fa-circle-o"></i></span>${item}</li>`
    }).join("")}
    </ul>`;
  }
  return _html;
}

function blockHtml(block){
  const _html = `<div class="resume_blk"><table style="width:100%"><tr><td>
  ${headerHtml(block.heading)}
  ${itemListHtml(block.item_list)}
  </td></tr></table></div>`;
  return _html;
}

export function hasSection(s){
  return (resumeData[s])? true: false;
}

export default (section) => {
  if (!hasSection(section)){
    section = "summary";
  }
  return resumeData[section].map(blockHtml).join("\n");
}
