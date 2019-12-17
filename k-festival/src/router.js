import Vue from 'vue'
import Router from 'vue-router'
import Event from './components/Events/Event.vue';
import Passport from './components/Passport/Passport.vue';
import FreeTickets from './components/FreeTickets/FreeTickets.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    linkExactActiveClass: 'active',
    routes: [
        { 
            path: '/', 
            component: Event 
        },
        { 
            path: '/passport', 
            component: Passport 
        },
        { 
            path: '/free-tickets', 
            component: FreeTickets 
        }
    ]
});