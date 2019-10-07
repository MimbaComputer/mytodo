<template>
    <div id="todo">
      <div class="todos">
          <div class="todo" v-for="todo in listTodo" :key="todo.title" :class="{completed: todo.completed}">
            <div>
              <input class="done" type="checkbox" v-model="todo.completed">
              <p>{{todo.title}}</p>
              {{todo.detail}}
              <button class="delete" @click="deleteTodo(todo)">x</button>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    computed: {
      listTodo: function() {
        return this.$store.getters.listTodo;
      }
    },
    methods:{
      deleteTodo: function(todo){
        this.$store.commit('deleteTodo',todo);
      }
    }
}
</script>

<style scoped>
.todos{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1rem;
}
.todo{
  border: 1px solid #ccc;
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
p{
  border-radius: 5px;
  background: rgb(145, 207, 145);
  font-weight: bold;
}
.completed{
  background: #35495e;
  color: #fff;
}
</style>
