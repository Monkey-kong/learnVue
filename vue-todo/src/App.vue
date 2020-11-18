<template>
  <MainHeader />
</template>

<script>
  // 导入 stylus 样式文件，设置全局背景
  // import './assets/styles/global.stylus'
  // 导入 MainHeader 组件
  import MainHeader from './components/MainHeader.vue'

  export default {
    name: 'App',
    components: {
      // 引入组件
      MainHeader,
    },
  }
</script>