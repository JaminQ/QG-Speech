# QG-Speech

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
│   │   ├── ThreeWebGL.js
│   │   └── Tween.js
│   ├── bird.js
│   ├── home.js
│   └── presentation.js
├── index.html
├── presentation.html
└── README.md
```

## 三方库引用说明

* 首页使用了`WebGL`技术，引用`ThreeWebGL.js`以及`Tween.js`三方库。
* PPT页基于`impress.js`三方库。
* 其余均**原生**JavaScript方法。

## 兼容性说明

* 由于准备时间仓促，并且演示当天的设备使用Google Chrome浏览器，因而没有做其它浏览器的兼容测试（所以我也不知道在其它浏览器下会不会出现什么神奇的bug，为保证最佳效果，建议读者在Google Chrome下运行 =_=! ）。
* 为了简写代码，CSS3浏览器前缀也只使用了`-webkit-`前缀。
* `impress.js`的fallback说明也懒得写了。

## 运行时可能会遇到的跨域问题说明

**问题说明：**由于在`ThreeWebGL.js`文件中使用了Ajax动态引入`bird.js`文件（第535行，`(new THREE.JSONLoaderAjax).load({model:"js/bird.js",callback:a})});`），所以如果直接把`index.html`文件拖动到浏览器下运行的话，会出现跨域问题，主要是由于file协议和http协议之间会造成跨域。

**解决方案：**在本地起一个服务器（建议使用`node`）或放到网络服务器上并且访问它。