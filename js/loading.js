window.addEventListener("load", function() {
    var load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
})

$(window).on('load',function(){
    $('.preloader').addClass('complete')
})
