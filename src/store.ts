import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {title:'Go to the Medical Centrer',detail:'To by the faher\'s drugs',completed:true},
      {title:'Learn Vue',detail:'Vue is a progressive framework for building user interfaces',completed:false},
      {title:'Implementer UAT',detail:'Implementer le UAT sur le mobile en utilisant Selendroid',completed:false},
      {title:'Install Jenkins',detail:'Install 10 Jenkins slave on AWS',completed:false},
      {title:'Learn Vuex',detail:'Vuex is useful for centralize data access',completed:true},
      {title:'Date with Silviana',detail:'',completed:true},
      {title:'Sport every firday',detail:'Gymn to for fitness',completed:true},
      {title:'Title 4',detail:'The detail 4',completed:false},
      {title:'Scan code with SonarQube',detail:'Use SonarQube to check the quality of code',completed:false},
    ],
    baseUrl: process.env.BASE_URL
  },
  getters : {
    remainingTodo:(state)=>{
      return state.todos.filter(todo => !todo.completed).length;
    },
    doneTodo: (state)=>{
      return state.todos.filter(todo => todo.completed).length;
    },
    listTodo: (state)=>{
      return state.todos.filter(todo => !todo.completed);
    },
    listDone: (state)=>{
      return state.todos.filter(todo => todo.completed);
    }
  },
  mutations: {
    addTodo: (state,newTodo:{title:string,detail:string,completed:boolean}) => {
      state.todos.push(newTodo);
   },
   deleteTodo:(state,todo)=>{
     state.todos= state.todos.filter( t => t!==todo);
   },
   deleteAllDone: (state)=>{
      state.todos= state.todos.filter(todo => !todo.completed);
   }
  },
  actions: {

  }
})
