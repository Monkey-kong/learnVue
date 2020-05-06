// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口文件，引入 Vue 框架中 Vue 的构造函数
import Vue from 'vue'
// 引入 Vue 中根组件
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // index.html 中的一个元素
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
