import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Event from './components/Events/Event.vue';
import Passport from './components/Passport/Passport.vue';
Vue.use(Router)
Vue.use(BootstrapVue)
// import './styles/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false


const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Event },
    { path: '/passport', component: Passport }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

