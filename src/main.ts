import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'
import 'es6-promise/auto'
import i18n from './i18n'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

router.beforeEach(( to, from, next) =>{
  let language= to.params.lang;
  if(!language){
    language='en'
  }
  i18n.locale = language
  next()
}
)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
