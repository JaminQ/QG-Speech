<p align="center">
  <a href="http://github.com/QGStudio">
    <img width="150" src="https://raw.githubusercontent.com/JaminQ/QG-Speech/master/img/favicon.png" alt="QG Logo" />    
  </a>
</p>

# QG-Speech

* [简介](#简介)
* [项目目录结构](#项目目录结构)
* [三方库引用说明](#三方库引用说明)
* [兼容性说明](#兼容性说明)
* [运行时可能会遇到的跨域问题说明](#运行时可能会遇到的跨域问题说明)

## 简介

为QG 2016宣讲会（2016-02-29）所准备的网页版PPT。

该PPT分为两部分：①首页 ②PPT页

## 项目目录结构

```
QG-Speech/
├── css/
│   ├── home.css
│   └── presentation.css
├── img/
│   ├── cloud256.png
│   ├── cute.jpg
│   ├── favicon.png
│   ├── fuck.jpg
│   ├── gay.jpg
│   ├── happy.gif
│   ├── hard.jpg
│   ├── man.gif
│   ├── me.png
│   ├── mengbi.jpg
│   ├── money.jpg
│   ├── nani.jpg
│   └── zhuangbi.jpg
├── js/
│   ├── lib/
│   │   ├── impress.js
│   │   ├── three.js
│   │   └── tween.js
│   ├── bird.js
│   ├── clouds&boid.js
│   ├── home.js
│   └── presentation.js
├── index.html
├── presentation.html
└── README.md
```

## 三方库引用说明

* 首页使用了`WebGL`技术，引用[three.js](http://github.com/mrdoob/three.js)以及[tween.js](http://github.com/sole/tween.js)三方库。
* PPT页基于[impress.js](http://github.com/bartaz/impress.js)三方库。
* 其余均**原生**JavaScript方法。

## 兼容性说明

* 由于准备时间仓促，并且演示当天的设备使用Chrome浏览器，因而没有做其它浏览器的兼容测试（所以我也不知道在其它浏览器下会不会出现什么神奇的bug，为保证最佳效果，建议读者在Chrome浏览器下运行:grin:）。
* 为了简写代码，CSS3浏览器前缀也只使用了`-webkit-`前缀。
* 由于PPT页基于`impress.js`三方库进行开发，因而如果不被支持时会有fallback说明。

## 移动端支持情况说明

由于本来就没有要做移动端支持的打算，所以就顺其自然吧:stuck_out_tongue_closed_eyes:下面说明一下目前已经发现的情况：

* 没有写`viewport`:yum:所以没做移动端分辨率处理。
* 没有做响应式布局:expressionless:。
* `impress.js`好像不支持移动端，所以在移动端上运行PPT页时看不到演示效果（不过PPT的内容还是可以看到的:grimacing:）。

## 运行时可能会遇到的跨域问题说明

**问题说明：**由于在`clouds&boid.js`文件中使用了Ajax动态引入`bird.js`文件（第4行，`(new THREE.JSONLoaderAjax).load({model:"js/bird.js",callback:a})});`），所以如果直接把`index.html`文件拖动到浏览器下运行的话，会出现跨域问题，主要是由于file协议和http协议之间会造成跨域。

**解决方案：**在本地起一个服务器（建议使用`node`）或放到网络服务器上并且访问它。