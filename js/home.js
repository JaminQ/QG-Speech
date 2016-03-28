(function () {
    var move = true,
        domElement = document.createElement('div'),
        clouds = new Clouds(),
        content = document.createElement('div'),
        header = document.createElement('header'),
        title = document.createElement('h1'),
        introduction = document.createElement('h2'),
        topic = document.createElement('h3'),
        button = document.createElement('button'),
        copyright = document.createElement('footer');

    domElement.className = 'wrapper';
    domElement.style.background = '-moz-linear-gradient(top, #04142e 0%, #1d508f 35%, #5299d1 50%, #1d508f 100%)';
    domElement.style.background = '-webkit-linear-gradient(top, #04142e 0%, #1d508f 35%, #5299d1 50%, #1d508f 100%)';
    domElement.style.background = 'linear-gradient(top, #04142e 0%, #1d508f 35%, #5299d1 50%, #1d508f 100%)';
    domElement.style.textAlign = 'center';

    clouds.getDomElement().style.position = 'absolute';
    clouds.getDomElement().style.left = "0px";
    clouds.getDomElement().style.top = "0px";
    clouds.getDomElement().style.width = window.innerWidth + "px";
    clouds.getDomElement().style.height = window.innerHeight + "px";

    content.className = 'content';

    title.innerHTML = 'QG';
    header.appendChild(title);

    introduction.innerHTML = 'NO QUEST NO GAIN';
    header.appendChild(introduction);

    topic.innerHTML = '打造属于你的编程之路';
    header.appendChild(topic);

    button.innerHTML = 'BEGIN';
    button.addEventListener('click', function () {
        move = false;
        clouds.mouseMove(window.innerWidth / 2, 5 * window.innerHeight, window.innerWidth, window.innerHeight);
        domElement.classList.add('fadeOut');
        setTimeout(function () {
            location.href = 'list.html';
        }, 1800);
    });

    copyright.innerHTML = '&copy; 2016 QGStudio';

    content.appendChild(header);
    content.appendChild(button);
    content.appendChild(copyright);

    domElement.appendChild(clouds.getDomElement());
    domElement.appendChild(content);

    document.body.appendChild(domElement);
    domElement.style.width = window.innerWidth + 'px';
    domElement.style.height = window.innerHeight + 'px';
    clouds.resize(window.innerWidth, window.innerHeight);
    animate();

    document.addEventListener('mousemove', function (event) {
        if (move) {
            clouds.mouseMove(event.clientX, event.clientY, window.innerWidth, window.innerHeight);
        }
    }, false);
    window.addEventListener('resize', function (event) {
        clouds.resize(window.innerWidth, window.innerHeight);
        domElement.style.width = window.innerWidth + 'px';
        domElement.style.height = window.innerHeight + 'px';
    }, false);

    function animate() {
        requestAnimationFrame(animate);
        clouds.update();
    }
})();
