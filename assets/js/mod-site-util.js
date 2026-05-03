const modalView = (function(){
    function init(){
        this.modalPane = document.getElementById('modal_pane');
        this.modalImg = document.getElementById("modal_image");
        this.caption = document.getElementById("caption");
        this.closeBtn = document.getElementById("closeBtn");
        this.closeBtn.onclick = ()=>{
            modalView.modalPane.style.display = "none";
        }
        document.onkeyup = (e)=>{
            if(e.keyCode == 27){
                modalView.modalPane.style.display = "none";
            }
        }
        window.onclick = (e)=>{
            if (e.target == modalView.modalPane){
                modalView.modalPane.style.display = "none";
            }
        };
        window.onresize = (e)=>{
            render();
        }
    }
    function render(img, e, {modalImg, modalPane, closeBtn} = modalView){
        if(img){
            modalImg.src = img.src;
            modalPane.style.display = "block";
        }
        closeBtn.style.left = modalImg.offsetLeft + modalImg.offsetWidth + "px";
    }
    return {
        init: init,
        show: render
    }
})();

const popupUtil = (function () {
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
        fullscreen = 0,
        popup = 1) {
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
        this.popup=popup;
    }
    WindowSpecs.prototype.toString = function(){
        const specStr = Object.entries(this).map(([name, value])=>{
            return `${name}=${value}`;
        }).join(",");
        return specStr;
    }
    function open(url, name, specs = new WindowSpecs()){
        if (Array.isArray(specs)){
            specs = new WindowSpecs(...specs);
        }
        window.open(url, name, specs.toString());
    }
    return {
        WindowSpecs : WindowSpecs,
        open : open
    }
})();

export default {
    modal: modalView,
    popup: popupUtil
}
