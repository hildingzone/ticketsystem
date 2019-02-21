/* eslint-disable no-console */
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
        /* LocalStored tickets */
        setTickets(state, tickets) {
            state.tickets = tickets;
        },
        /* When customer select an Event */
        selectEvent(state, event) {
            state.event = event;
        },
        /* Our Events that exist on DB */
        setEvents(state, events) {
            state.events = events;
        },
        /* Checks if the code is legit or not */
        setVerifiedData(state, data) {
            state.verifiedData = data;
        }
    },
    actions: {
        /* Creates the newly made Event from our Admin site */
        async createEvent(ctx, event) {
            try {
                await axios.post("http://localhost:3000/events", event);
                ctx.dispatch("getEvent");
            } catch (err) {
                console.err(err.stack);
            }
        },
        /* If our customer bought ticket/s they get them both on their localstore here on website but also 
         * on our DB. So we can always verify their tickets if there would be any problems. */
        async buy(ctx, buyTicket) {
            let tickets = await axios.post('http://localhost:3000/tickets', buyTicket);
            ctx.commit('setTickets', tickets.data);
            localStorage.setItem("tickets", JSON.stringify(tickets.data));
        },
        /* Which code we run when we want our events that exist on our DB */
        async getEvent(ctx) {
            let events = await axios.get('http://localhost:3000/events');
            ctx.commit('setEvents', events.data);
        },
        /* Noone should steal, this is for us to verify our customers tickets. After verified, 
         * it will not be able to be used on their localstorage nor on our DB, it will be used. */
        async verifyTicket(ctx, code) {
            let verified = await axios.get(`http://localhost:3000/verify/${code}`);
            ctx.commit('setVerifiedData', verified.data);
            /* IF code is used, change it to true. */
            if (verified.data.verified) {
                var usedCode = localStorage.getItem('tickets');
                usedCode = JSON.parse(usedCode);
                usedCode[0].used = true;
                usedCode = JSON.stringify(usedCode);
                localStorage.setItem('tickets', usedCode);
            }
        },
        /* Where we get our local tickets. */
        getTickets(ctx) {
            let tickets = localStorage.getItem("tickets");
            ctx.commit('setTickets', JSON.parse(tickets));
        },
    }
})