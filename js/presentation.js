(function(){
    impress().init();

    document.body.onmousewheel = function(event) {
        event = event || window.event;
        if(event.deltaY < 0){
            impress().next();
        }else if (event.deltaY > 0){
            impress().prev();
        }
    };
})();