(function() {
    impress().init();

    // 增加鼠标滑轮切换幻灯片功能
    document.body.onmousewheel = function(event) {
        event = event || window.event;
        if (event.deltaY < 0) {
            impress().next();
        } else if (event.deltaY > 0) {
            impress().prev();
        }
    };
})();