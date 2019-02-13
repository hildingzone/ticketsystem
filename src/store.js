import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ticket: [
      {
          name: 'Lasse-Stefanz',
          code: 'AE32F',
          price: 1050,
          where: {
              location: 'Globen',
              adress: 'Den stora vita bollen'
          },
          when: {
              date: '22 mar',
              start: '18.00',
              to: '22:00'
          },
          info: 'Sittplats'
      }
    ],
  },
  mutations: {

  },
  actions: {

  }
})
