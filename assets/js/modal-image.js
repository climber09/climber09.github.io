var modalView = (function(){
    function init(){
        this.modalPane = document.getElementById('modal_pane');
        this.modalImg = document.getElementById("modal_image");
        this.caption = document.getElementById("caption");
        this.closeBtn = document.getElementById("closeBtn");
        this.closeBtn.onclick = function(e) { 
            hide();            
        }
        document.onkeyup = function(e){
            if(e.keyCode == 27){
                hide();
            }
        }
        window.onclick = function(e){
            if (e.target == modalView.modalPane) {
                hide();
            }
        };
        window.onresize = function(){
            placeCloseBtn();
        }
    }
    function placeCloseBtn(){
        var img = modalView.modalImg;
        this.closeBtn.style.left = img.offsetLeft + img.offsetWidth + "px";
    }
    function show(imgObj){
        this.modalImg.src = imgObj.src;
        this.modalPane.style.display = "block";
        placeCloseBtn();
    }
    function showFile(file){
//        var content = '<iframe src="' + file + '" style="width: 500px; height: 60%; background-color: #eeeeee;"></iframe>';
//        var content = '<div>NEW CONTENT HERE</div>';
//        this.caption.innerHTML = content;
        var container = document.getElementById('containerPane');
        var resizePane = document.getElementById('resizePane');
        this.modalPane.innerHTML = container.innerHTML;
        this.modalPane.style.display = "block";
//        placeCloseBtn();
//        this.closeBtn.style.left = (resizePane.offsetLeft + resizePane.offsetWidth) + "px";
    }
    function hide(){
        modalView.modalPane.style.display = "none";
    }
    return {
        init : init,
        show : show,
        showFile : showFile
    }
})();

