let mongoose = require('mongoose');

let Schema = mongoose.Schema;

// Create schema
let ticketSchema = new Schema({
    code: {
        type: String,
    },
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    when: {
        date: {
            type: String,
        },
        start: {
            type: String,
        },
        end: {
            type: String,
        },
    }, 
    where: {
        location: {
            type: String,
        },
        adress: {
            type: String,
        }
    },
    info: String,
});

// A model based on the schema
let Ticket = mongoose.model('ticket', ticketSchema);

module.exports = Ticket;