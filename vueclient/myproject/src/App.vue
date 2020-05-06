<template>
  <div id="app">
    <h1>{{count}}</h1>
    <!-- 使用子组件 -->
    <son></son>
    <button @click="add">点击我加上1</button>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
// 根组件引入其他组件
import son from "./components/son";

export default {
  // 模板自动绑定了，无需手动绑定
  // 一个组件一个模板，一个模板一个文件
  // 当前组件的数据
  name: 'App',
  data() {
    return {
      count: 1
    }
  },
  methods: {
    // 事件处理函数
    add() {
      this.count++;
    }
  },
  // 当前组件挂载子组件
  components: {
    son
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
