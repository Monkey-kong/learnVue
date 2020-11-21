<template>
  <div>
    <main-header />
    <main-todo></main-todo>
    <main-footer></main-footer>
  </div>
</template>

<script>
  // 导入 stylus 样式文件，设置全局背景
  import './assets/styles/global.styl'
  // 导入组件
  import MainHeader from './components/MainHeader.vue'
  import MainTodo from './components/MainTodo/MainTodo.vue'
  import MainFooter from './components/MainFooter.vue'

  export default {
    name: 'App',
    components: {
      // 引入组件
      MainHeader,
      MainTodo,
      MainFooter,
    },
  }
</script>