import Vue from 'vue'

import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from './router.js'
import vueSmoothScroll from 'vue2-smooth-scroll'
import store from './store/index'

Vue.use(BootstrapVue)
Vue.use(vueSmoothScroll)
// import './styles/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

new Vue({
  store,
  router: Router,
  render: h => h(App),
}).$mount('#app')

