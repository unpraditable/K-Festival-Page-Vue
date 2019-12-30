import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      eventList : [],
      eventDetail : []
  },
  
  getters: {
      // getEventFromSlug: state => state.eventDetail
      getEventFromSlug: state => {
        return state.eventDetail.filter(e => e.slug === this.$route.params.slug)
      },
      getEventBySlug: (state) => (slug) => {
        return state.eventDetail.find(event => event.slug === slug)
      }
      // getEventFromSlug: state => {
      //     state.event.filter(function(event) {
      //         return event.slug === this.$route.params.slug
      //     })
      // },
      
  },
  
  actions: {
    loadEvents({commit}) {
        axios.get(`http://localhost:8080/data/EventList.json`)
        .then(response => {
            commit('pushEvents', response.data.data.event_list)
        })
    },
    loadEventDetail({commit}) {

        axios.get(`http://localhost:8080/data/EventDetail.json`)
        .then(response => {
            commit('viewEvent', response.data.data.event_detail)
        })
        // const slug = this.$route.params.slug
        // console.log(slug);
        // axios.get(`http://localhost:8080/data/EventDetail.json`)
        // .then(response => {
        //     response.data.data.event_detail.filter(function(c) {
        //         return c.slug === slug;
        //     })[0];
        //     commit('viewEvent', response.data.data.event_detail)
        // })
    }
  },
  
  mutations: {
    pushEvents(state, eventList) {
        state.eventList = eventList
    },
    viewEvent(state, eventDetail) {
        state.eventDetail = eventDetail
        
    }
  }
});