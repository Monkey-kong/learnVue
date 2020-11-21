<template>
  <div :class="[item.isComplate ? 'completed' : '', 'todo-item']">
    <input type="checkbox" v-model="item.isComplate" />
    <label>{{ item.content }}</label>
    <button @click="deleteTodo" />
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      item: Object,
    },
    data() {
      return {}
    },
    methods: {
      deleteTodo() {
        this.$emit('deleteTodo', this.item.id)
      },
      // 不需要这么处理，直接绑定属性就行
      onStateChange() {
        console.log(this.isCompleted)
        this.item.isComplate = this.isCompleted
        console.log(this.item)
        this.$emit('onStateChange', this.item)
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-item
    display: flex
    justify-content: space-between
    padding: 10px
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
    font-size: 24px

    // 鼠标移到元素显示 x
    &:hover
      button:after
        content: 'x'
        font-size: 24px
        color: $lightred

    // 有完成样式时，显示删除线
    &.completed
      label
        color: #d9d9d9
        text-decoration: line-through

    // 为 checkbox 指定宽高、居中、清除默认样式
    input
      width: 50px
      height: 30px
      text-align: center
      cleanDefaultStyle()

      // checkbox 后面加入图片
      &:after
        content: url('~images/unChecked.svg')

      &:checked:after
        content: url('~images/Checked.svg')

    // 让中间 label 占据剩余空间，然后 label 的字自然就在左边了
    label
      flex: 1
      transition: color 0.4s

    button
      width: 40px
      // transparent：透明
      background-color: transparent
      cleanDefaultStyle()
      cursor: pointer
</style>