/** Base */
function Modal(m){
    this.modalElement = m;
    this.hideCallback;

    //detects [esc] key pressed.
    window.onkeydown = (e)=>{
        if(this.modalElement && !this.modalElement.hidden
            && e.keyCode == 27){
            this.hide();
        }
    }

    // detects mousedown outside of modal content area.
    window.onmousedown = (e)=>{
        if(this.modalElement && !this.modalElement.hidden
            && e.button == 0 && e.target == this.modalElement){
            this.hide();
        }
    }
}

Modal.prototype.set = function(id, name){
    const n = (name)? name: id;
    this[n] =  document.getElementById(id);
    return this[n];
}

Modal.prototype.reveal = function(){
    this.modalElement.style.display = "block";
    this.modalElement.hidden = false;
}

Modal.prototype.hide = function(){
    this.modalElement.style.display = "none";
    this.modalElement.hidden = true;
    if(this.hideCallback) {this.hideCallback()};
}

Modal.prototype.isHidden = function(){
    return this.modalElement.hidden;
}

/** Instance for modal display of images */
const modalImgView = (()=>{
    let m = null;

    function init(){
        m = new Modal(document.getElementById("modalPane"));
        m.set("modalContent");
        m.set("closeBtn").onclick = ()=>{m.hide()};
        window.onresize = (e)=>{
            render();
        }
    }

    function render(img){
        const {modalContent: i, closeBtn: b} = m;
        if(img){
            i.src = img.src;
            m.reveal();
        }
        if (!m.isHidden()) {
            b.style.left = i.offsetLeft + i.offsetWidth + "px";
        }
    }

    return {
        init: init,
        show: render
    }
})();

/** Instance for modal popups */
const modalPopup = (()=>{
    const initWidth = "750px";
    const initHeight = "550px";
    let m = null;

    function init(){
        m = new Modal(document.getElementById("modalPopup"));
        m.set("modalContent");
        m.set("closeBtn").onclick = ()=>{m.hide()};
        m.hideCallback = reset;
        reset();
    }

    function show(obj, modalUri, winUri, classStr, dims, winName){
        const uri = (modalUri)? modalUri: winUri;
        setUri("modalView", uri);
        const label = (obj.title)? obj.title: obj.innerHTML;
        const li = document.getElementById("modalLabel")
        li.innerHTML = `<a class="win-opener" title="Open in new window" href="javascript:null">${label}</a>`
        li.firstChild.onclick = (e)=>{
            m.hide();
            popupUtil.open(winUri, winName, dims);
        }
        m.modalContent.querySelector("li").className = classStr; // not currently impactful
        m.reveal();
    }

    function reset(){
        m.modalContent.style.width = initWidth;
        m.modalContent.style.height = initHeight;
        setUri("modalView", "about:blank");
    }

    function setUri(name, uri) {
        window.frames[name].location.assign(uri);
    }

    return {
        init: init,
        show: show
    }
})();

const popupUtil = (()=>{
    function WindowSpecs(
        width = 750,
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
    modalImg: modalImgView,
    modalPopup: modalPopup,
    popup: popupUtil
}
