<template>
  <div id="home-left">
    <router-view></router-view>
  </div>
</template>

<script>
import AllTodo from './AllTodo.vue'
import Todo from './Todo.vue'
import Done from './Done.vue'

export default {
 components: {
   'all-todo': AllTodo,
   'todo': Todo,
   'done': Done
 }
}
</script>

<style scoped>

</style>
