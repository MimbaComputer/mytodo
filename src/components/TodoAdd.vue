<template>
  <div id="todo-add">
    <div class="todo-add">
      <b-form>
        <b-form-input :placeholder="$t('todoAdd.addATodo')" v-model="newTodo.title" @keyup.enter="addTodo"></b-form-input>
        <b-form-input  :placeholder="$t('todoAdd.addATodoDetail')" v-model="newTodo.detail" @keyup.enter="addTodo"></b-form-input>
        <b-button class="button" v-on:click="addTodo" >{{$t('todoAdd.addATodo')}}</b-button>
      </b-form>
      <div>
        <span><strong>{{remainingTodo}}</strong>{{$t('todoAdd.tasksTodo')}}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods:{
    addTodo: function(){
      this.$store.commit('addTodo',{title:this.newTodo.title,detail:this.newTodo.detail,completed:this.newTodo.completed});
      this.newTodo.title=""; this.newTodo.detail="";
    }
  },
  computed:{
    remainingTodo: function(){
      return this.$store.getters.remainingTodo;
    }
  },
  data(){
    return {
      newTodo:{title:"",detail:"",completed:false},
    }
  }
  
}
</script>

<style scoped>
.todo-add{
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 15px;
  text-align: center;
  position: relative;
}

.button{
  border-radius: 5px;
  font-weight: bold;
  background: #35495e;
  color: #fff;
}
</style>
