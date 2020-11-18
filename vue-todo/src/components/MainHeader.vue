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
    display: flex
    justify-content: center
    align-items: center

    h1
      margin: 20px
      font-size: 100px
      font-weight: 100
      color: $lightred // 使用变量
      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1)
</style>