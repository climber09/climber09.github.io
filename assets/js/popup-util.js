var popupUtil = (function () {
    function WindowSpecs(
        width = 650, 
        height = 550,
        scrollbars = 1,
        resizable = 1,
        top = 0,
        left = 0,
        location = 0,
        locationbar = 0,
        menubar = 0,
        titlebar = 0,
        toolbar = 0,
        status = 0,
        directories = 0,
        channelmode = 0,
        fullscreen = 0) {
        this.width=width;
        this.height=height;
        this.scrollbars=scrollbars;
        this.resizable=resizable;
        this.top=top;
        this.left=left;
        this.location=location;
        this.menubar=menubar;
        this.titlebar=titlebar;
        this.toolbar=toolbar;
        this.status=status;
        this.directories=directories;
        this.channelmode=channelmode;
        this.fullscreen=fullscreen;
    }
    WindowSpecs.prototype.toString = function(){
       var specStr = "";
       for(var i in this){
           if( (typeof this[i]) === 'number') {
               specStr += i + "=" + this[i] + ",";
           }
       }
       return specStr.substring(0, specStr.length -1);
    }
    function open(url, name, specs = new WindowSpecs()){
	    window.open(url, name, specs.toString());
	}
    return {
        WindowSpecs : WindowSpecs,
        open : open
    }
})();
