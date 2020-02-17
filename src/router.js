import Vue from 'vue'
import Router from 'vue-router'
import Event from './components/Events/Event.vue';
import Passport from './components/Passport/Passport.vue';
import FreeTickets from './components/FreeTickets/FreeTickets.vue';
import EventDetail from './components/EventDetail/EventDetail.vue'

Vue.use(Router)

export default new Router({
    base: __dirname,
    linkExactActiveClass: 'active',
    routes: [
        { 
            path: '/', 
            component: Event,
            meta: {
                title: "iLotte K-Festival 2019" 
            }
        },
        { 
            path: '/passport', 
            component: Passport,
            meta: {
                title: "Passport to Korea" 
            }
        },
        { 
            path: '/free-tickets', 
            component: FreeTickets,
            meta: {
                title: "Free Tickets To Korea" 
            }
        },
        {
            path: '/events/:slug',
            component: EventDetail,
            props: true
        }
    ]
});