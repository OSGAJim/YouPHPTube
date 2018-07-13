$(document).ready(function () {
    $('a.galleryLink').click(function (event) {
        event.preventDefault();
        var id = $(this).attr('videos_id');
        $('body').addClass('fullScreen');
        fullscreenOn()
        var div = $('<div id="divIframeFull" style="background-color:black;"><div id="divTopBar" style="position: fixed; top: 0; left: 0; height: 50px; width: 100vw; z-index: 99999; padding:10px; "><span id="closeBtnFull" class="btn pull-right" onclick="closeIframe();" style="opacity: 0.5; filter: alpha(opacity=50);"><i class="fa fa-times"></i></span></div></div>').append('<iframe src="' + webSiteRootURL + 'v/' + id + '" style="background-color:black; position: fixed; top: 0; left: 0; height: 100vh; width: 100vw; z-index: 9999; overflow: hidden;" id="iframeFull">');
        $('body').append(div);
        $("#divIframeFull").fadeIn();
        Cookies.set("autoplay", true, {path: '/', expires: 365});
    });
    
    
    $('a.hrefLink').click(function (event) {
        event.preventDefault();
        var link = $(this).attr('href');
        $('body').addClass('fullScreen');
        fullscreenOn()
        var div = $('<div id="divIframeFull" style="background-color:black;"><div id="divTopBar" style="position: fixed; top: 0; left: 0; height: 50px; width: 100vw; z-index: 99999; padding:10px; "><span id="closeBtnFull" class="btn pull-right" onclick="closeIframe();" style="opacity: 0.5; filter: alpha(opacity=50);"><i class="fa fa-times"></i></span></div></div>').append('<iframe src="' + link + '" style="background-color:black; position: fixed; top: 0; left: 0; height: 100vh; width: 100vw; z-index: 9999; overflow: hidden;" id="iframeFull">');
        $('body').append(div);
        $("#divIframeFull").fadeIn();
        Cookies.set("autoplay", true, {path: '/', expires: 365});
    });

    $(document).on('keyup', function (evt) {
        if (evt.keyCode == 27) {
            closeIframe();
        }
    });

});

function fullscreenOn(){
        var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.msRequestFullscreen) {
            docElm = document.body; //overwrite the element (for IE)
            docElm.msRequestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        }
}

function closeIframe() {
    $("#divIframeFull").fadeOut("slow", function () {
        $('body').removeClass('fullScreen');
        $('#divIframeFull').remove();
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    });


}
