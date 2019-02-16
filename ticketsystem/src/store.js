import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      tickets: [],
      events: [],
      event: {}
    },
  mutations: {
    setTicket(state, tickets) {
      state.tickets = tickets
    },
    selectedEvent(state, event) {
      state.event = event
    },
    setEvents (state, events) {
      state.events = events
    }
  },
  actions: {
/*    async buy(ctx, buyTicket) {
      let tickets = await axios.get('http://localhost:3000/tickets', buyTicket);
      ctx.commit('setTicket', tickets.data);
    }, */
    async getEvent(ctx) {
      let events = await axios.get('http://localhost:3000/tickets', events);
      ctx.commit('setEvents', events.data);
    }
    
  }
})
