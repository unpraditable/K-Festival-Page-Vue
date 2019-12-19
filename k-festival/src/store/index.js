import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eventList : [],
    event : []
  },
  
  getters: {
    // Here we will create a getter
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
    }
  },
  
  mutations: {
    pushEvents(state, eventList) {
        state.eventList = eventList
    },
    viewEvent(state, event) {
        state.event = event
    }
  }
});