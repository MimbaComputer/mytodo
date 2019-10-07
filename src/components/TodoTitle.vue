<template>
    <div id="todo-title">
      <div>
          <div class="todo" v-for="todo in todos" :key="todo.title" :class="{completed: todo.completed}">
            <div>
              <input class="done" type="checkbox" v-model="todo.completed">
              {{todo.title}}
              <button class="delete" @click="deleteTodo(todo)">x</button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    todos (){
      return this.$store.state.todos;
    }
  },
  methods:{
    deleteTodo: function(todo){
      this.$store.commit('deleteTodo',todo);
    },
    editTodo: function(todo){
      this.todo=todo;
    }
  }
}
</script>

<style scoped>
.todo{
  border: 0.5px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
}
.delete{
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  border-radius: 5px;
}
.done{
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  cursor: pointer;
}
.completed{
  background: #35495e;
  color: #fff;
}
</style>
