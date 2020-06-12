# cms_study

> study summary

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

安装mintui
npm install mint-ui -S
// 引入全部组件
import Vue from 'vue';
import Mint from 'mint-ui';
Vue.use(Mint);

1.swipe
显示不全
加入全局样式global.css 
body {
    margin:0;
}
将header的fixed属性去掉

2.下载axios
npm -i axios -S

3.制作插件
3.1 在插件文件中加入src/plugins/installer.js
// vue插件必须具备Install函数
function Installer () {
    // 自身初始化行为
}

Installer.install = function(Vue) {
    console.log('plugins');
};

export default Installer;

3.2在main.js中声明
//加载自定义插件
import Installer from '@/plugins/installer'
Vue.use(Installer);