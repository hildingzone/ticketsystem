import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tickets: [],
        events: [],
        event: {},
        verifiedData: null
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
        },
        setVerifiedData(state, data) {
            state.verifiedData = data;
        }
    },
    actions: {
        async buy(ctx, buyTicket) {
            let tickets = await axios.post('http://localhost:3000/tickets', buyTicket);
            ctx.commit('setTickets', tickets.data);
            localStorage.setItem("tickets", JSON.stringify(tickets.data));
        },
        async getEvent(ctx) {
            let events = await axios.get('http://localhost:3000/events');
            ctx.commit('setEvents', events.data);
        },
        async verifyTicket (ctx, code) {
            let verified = await axios.get(`http://localhost:3000/verify/${code}`);
            ctx.commit('setVerifiedData', verified.data);
        },
        getTickets(ctx) {
            let tickets = localStorage.getItem("tickets");
            ctx.commit('setTickets', JSON.parse(tickets));
        },
    }
})
