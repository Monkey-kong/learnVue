<template>
  <div class="todo-info">
    <span class="total">{{ total }} item left</span>
    <div class="tabs">
      <a
        :class="['btn', 'primary', 'border', status === item ? 'actived' : '']"
        v-for="(item, index) in states"
        :key="index"
        @click="onStatusChange(item)"
        >{{ item }}</a
      >
    </div>
    <button class="btn info" @click="onClear">Clear Completed</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoInfo',
    data() {
      return {
        states: ['all', 'active', 'completed'],
        status: 'all',
      }
    },
    props: {
      total: Number,
    },
    methods: {
      onStatusChange(status) {
        this.status = status
        this.$emit('onStatusChange', status)
      },
      onClear() {
        this.$emit('onClear')
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-info
    display: flex
    justify-content: space-between
    padding: 5px 10px
    font-weight: 400
    line-height: 30px
    border-top: 1px solid rgba(0, 0, 0, 0.1)

  .total
    color: $red

  .tabs
    display: flex
    justify-content: space-between
    width: 200px

  .btn.primary.border
    primaryBorderBtn()

    &.actived
      primaryBtn()

  .btn.info
    infoBtn()
</style>