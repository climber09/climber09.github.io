// utillity object to store default popup window values
function PopUpSpecs() {
	this.list = {
		width : 100, 
		height : 100,
		scrollbars : 1,
		resizable : 1,
		top : 0,
		left : 0,
		location : 0,
		locationbar : 0,
		menubar : 0,
		titlebar : 0,
		toolbar : 0,
		status : 0,
		directories : 0,
		channelmode : 0,
		fullscreen : 0
	};
}

var defaultSpecs={width:650,height:550};

PopUpSpecs.prototype.toString = function(){
   var specStr = "";
   for(var i in this.list){
      specStr += i + "=" + this.list[i] + ",";
   }
   return specStr.substring(0, specStr.length -1);
}

function popUp(url, name, userSpecs){
	var popupSpecs = new PopUpSpecs();
	if(userSpecs){
		for(var i in userSpecs){
		   popupSpecs.list[i] = userSpecs[i];
		}
	}
	window.open(url, name, popupSpecs.toString());
	
}
