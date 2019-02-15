import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      tickets: [],
      event: [],
      events: {}
    },
  mutations: {
    setTicket(state, tickets) {
      state.tickets = tickets
    },
    selectedEvent(state, event) {
      state.event = event
    }
  },
  actions: {
    async buy(ctx, buyTicket) {
      let tickets = await axios.get('http://localhost:3000/tickets', buyTicket);
      ctx.commit('setTicket', tickets.data);
    },
    async getEvent(ctx) {
      let events = await axios.get('http://localhost:3000/tickets', events);
      console.log(events);
    }
  }
})
