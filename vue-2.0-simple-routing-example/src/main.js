import Vue from 'vue'
import routes from './routes'

// 创建 vue 实例
const app = new Vue({
  el: '#app',
  data: {
    // 当前路由
    currentRoute: window.location.pathname
  },
  computed: {
    // 计算属性 ViewComponent
    ViewComponent () {
      // 根据路径找到组件
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  // 啥意思？
  render (h) {
    return h(this.ViewComponent)
  }
})

// 监听 popstate 事件，改变当前路由
window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})