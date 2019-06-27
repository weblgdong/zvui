# zv-ui 基于vue-cli3.x移动UI库
----

### 安装

```bash
npm i zv-ui --save-dev
```

### 使用
#### 全局注册

```js
// 项目入口js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import zvui from '../libs/index' // 引入组件库

Vue.config.productionTip = false
Vue.use(zvui) // 全局注册

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

```
#### 局部注册

```js
import { alert } from 'zv-ui'
// ……略
```

### 项目目录

```
|-- zv-ui
    |-- README.md
    |-- vue.config.js // vue-cli扩展配置
    |-- dist // build生成打包目录
    |-- document // 文档目录
    |   |-- App.vue // 根文件
    |   |-- main.js // 入口
    |   |-- router.js // 路由
    |   |-- assets // 静态资源
    |   |   |-- logo.png
    |   |-- components // 组件 
    |   |-- views // 页面
    |-- libs // 组件库
    |   |-- index.js // 入口文件
    |   |-- components // 组件库源码
    |   |-- styles // 组件公用样式    
    |   |-- utils // 组件工具函数
    |-- public // 项目公共静态资源
    |   |-- favicon.ico // favicon
    |   |-- index.html // 模板
    |-- tests // 单元测试
        |-- unit
            |-- .eslintrc.js
            |-- example.spec.js
……略

```
