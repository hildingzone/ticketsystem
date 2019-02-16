const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let eventSchema = new Schema({      
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

let Events = mongoose.model('event', eventSchema);

module.exports = Events;