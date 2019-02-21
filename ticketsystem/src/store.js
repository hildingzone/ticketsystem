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

        async createEvent(ctx, event) {
            try {
                await axios.post("http://localhost:3000/events", event);
                ctx.dispatch("getEvent");
            } catch (err) {
                console.err(err.stack);
            }
        },

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
            // IF code is used, change it to true.
            if (verified.data.verified) {
                var usedCode = localStorage.getItem('tickets');
                usedCode = JSON.parse(usedCode);
                usedCode[0].used = true;
                usedCode = JSON.stringify(usedCode);
                localStorage.setItem('tickets', usedCode);
            }
        },
        getTickets(ctx) {
            let tickets = localStorage.getItem("tickets");
            ctx.commit('setTickets', JSON.parse(tickets));
        },
    }
})