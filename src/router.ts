import Vue from 'vue'
import Router from 'vue-router'
import AllTodo from './components/AllTodo.vue'
import Todo from './components/Todo.vue'
import Done from './components/Done.vue'
import i18n from './i18n'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'*',redirect:`/${i18n.locale}/AllTodo`},
   {
     path:'/:lang',
     component: {
      render(c) { return c('router-view')}
     },
     children:[
      {path:'AllTodo',component: AllTodo},
      {path: 'Todo',component:Todo},
      {path:'Done',component: Done}
     ]
   }
  ]
})
