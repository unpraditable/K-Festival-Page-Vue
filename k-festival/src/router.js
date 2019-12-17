import Vue from 'vue'
import Router from 'vue-router'
import Event from './components/Events/Event.vue';
import Passport from './components/Passport/Passport.vue';
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        { 
            path: '/', 
            component: Event 
        },
        { 
            path: '/passport', 
            component: Passport 
        }
    ]
});