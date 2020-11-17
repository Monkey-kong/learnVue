// 从 vue 包中导入 Vue 对象
import Vue from 'vue'

// 导入 App 组件对象
import App from './App.vue'

// 创建 Vue 根实例
new Vue({
    el: '#app',
    components: {
        // 组件名：组件对象
        // ES6 中，当键名和值名相同时可以简写
        App
    },
    // 一个字符串模板作为 Vue 实例的标识使用。
    // 模板将会替换挂载的元素。
    // 挂载元素的内容都将被忽略，除非模板的内容有分发插槽。
    // 使用 App 标签渲染，也就是 App.vue 组件
    // 理解：App 组件将替换 id=app 的元素
    template: '<App/>'
})