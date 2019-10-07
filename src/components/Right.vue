<template>
  <div id="home-right">
    <todo-add></todo-add>
    <todo-title></todo-title>
  </div>
</template>

<script>
import TodoTitle from './TodoTitle.vue'
import TodoAdd from './TodoAdd.vue'

export default {
  components: {
    'todo-title': TodoTitle,
    'todo-add': TodoAdd
  }
}
</script>

<style scoped>

</style>
