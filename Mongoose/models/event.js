let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let eventSchema = new Schema({
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
    }
});

let Event = mongoose.model('event', eventSchema);

module.exports = Event;