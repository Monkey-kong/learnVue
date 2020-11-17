<template>
    <div><h1>this is App</h1></div>
</template>

<script>
// 导入图片
import img from './assets/images/bg.jpg'
// 导入小图片，测试 url-loader
import './assets/images/test.svg'
// 导入 css
// import './assets/styles/test.css'
// 导入 stylus 样式文件
import './assets/styles/global.stylus'

export default {
    name: 'App'
}
</script>

<style lang="stylus" scoped>
    h1 
        color: white
        transform: translate(100px, 100px)
</style>