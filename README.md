# vue_webpack_simple_pro

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### vue-cli 安装webpack-simple项目模板流程：
+ 1.vue init <项目模板名称> 项目名称 vue init webpack-simple vue-webpack-simple-pro
+ 2.cd vue-webpack-simple-pro -> cnpm install
+ 3.修改端口号: package.json -> scripts -> 'dev'中添加"--port 8090"
+ 4.运行: npm run dev

### 引入Element-ui
+ 1.npm install element-ui element-theme babel-plugin-import --save-dev
+ 2..babelrc文件添加：
```
"plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-default"
    }
  ]]]
```
+ 3.main.js中引入:
```javascript
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
```

### 引入animate.css作为路由切换时页面跳转的动画效果
+ 1.bower install animate.css --save
+ 2.main.js中引入：
```javascript
import './bower_components/animate.css/animate.css'
```

### 引入easy-mock快速生成api请求接口
+ 1. 安装：npm install -g easy-mock-cli
+ 2. 生成：easymock init

### promise.prototype.finally 可以使promise方法增加finally函数
+ 1. require('promise.prototype.finally').shim()


