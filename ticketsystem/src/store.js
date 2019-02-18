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
        setTickets(state, tickets) {
            state.tickets = tickets;
        },
        selectEvent(state, event) {
            state.event = event;
        },
        setEvents(state, events) {
            state.events = events;
        }
    },
    actions: {
        async buy(ctx, buyData) {
            let tickets = await axios.post('http://localhost:3000/tickets', buyData);
            ctx.commit('setTickets', tickets.data);
            localStorage.setItem("tickets", JSON.stringify(tickets.data));

        },

        getTickets(ctx) {
            let tickets = localStorage.getItem("tickets");
            ctx.commit('setTickets', JSON.parse(tickets));


        },

        async getEvent(ctx) {
            let events = await axios.get('http://localhost:3000/events');
            ctx.commit('setEvents', events.data);

        }
    }
})
