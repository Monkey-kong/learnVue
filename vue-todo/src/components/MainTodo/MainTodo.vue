<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="what to do?"
      autofocus
      v-on:keyup.enter="addTodo"
      v-model="content"
    />
    <div class="items-todo">
      <todo-item
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
        @deleteTodo="deleteTodo"
      />
    </div>
    <todo-info
      :total="total"
      @onStatusChange="onStatusChange"
      @onClear="handleClear"
    />
  </div>
</template>

<script>
  import TodoItem from './coms/TodoItem.vue'
  import TodoInfo from './coms/TodoInfo.vue'

  var id = 0

  export default {
    name: 'MainTode',
    data() {
      return {
        itemList: [],
        content: '',
        total: 0,
        status: 'all',
      }
    },
    components: {
      TodoItem,
      TodoInfo,
    },
    methods: {
      addTodo: function (event) {
        if (this.content == '') return
        this.itemList.unshift({
          id: id++,
          content: this.content,
          isComplate: false,
        })
        this.content = ''
      },
      deleteTodo(itemId) {
        console.log('==>', itemId)
        this.itemList.splice(
          this.itemList.findIndex((item) => item.id === itemId),
          1
        )
      },
      onStatusChange(status) {
        this.status = status
      },
      handleClear() {
        this.itemList = this.itemList.filter((item) => item.isComplate == false)
      },
    },
    watch: {
      itemList: {
        deep: true,
        immediate: true,
        handler: function (val, oldVal) {
          this.total = this.itemList.filter(
            (item) => item.isComplate === false
          ).length
        },
      },
    },
    computed: {
      filteredItems() {
        switch (this.status) {
          case 'all':
            return this.itemList
            break
          case 'active':
            console.log('============active')
            return this.itemList.filter((item) => item.isComplate == false)
            break
          default:
            return this.itemList.filter((item) => item.isComplate == true)
            break
        }
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'

  .main-todo
    // 原来还可以这样居中
    margin: 0 auto
    // 为整个组件指定宽度
    width: 600px
    background-color: #fff
    // 为整个组件添加阴影
    box-shadow: 0 0 5px #6666

  // 输入框样式
  .add-todo
    padding: 16px 16px 16px 36px
    width: 100%
    font-size: 24px
    font-family: inherit
    font-weight: inherit
    color: inherit
    cleanDefaultStyle()
    box-sizing: border-box

  .items-todo
    width: 100%
    // 滚动条实现
    height: 300px
    overflow: auto
    border-top: 1px solid rgba(0, 0, 0, 0.1)
</style>