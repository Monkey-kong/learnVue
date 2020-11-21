<template>
  <div class="main-header">
    <h1>TodoList</h1>
  </div>
</template>

<script>
  export default {
    name: 'MainHeader',
  }
</script>

<style lang="stylus" scoped>
  // 引入主题样式
  @import '~styles/theme.styl'

  .main-header
    // 行内元素对齐设置，不会改变快照元素对齐方式
    text-align: center

    h1
      margin: 20px
      font-size: 100px
      font-weight: 100
      // 使用变量
      color: $lightred
      // 文字阴影：水平、垂直、模糊距离、阴影颜色
      // rgba：红、黄、蓝、透明度
      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1)
</style>