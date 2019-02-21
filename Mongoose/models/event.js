let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let eventSchema = new Schema({
    name: String,
    price: Number,
    when: {
        date: String,
        start: String,
        end: String,
    },
    where: {
        location: String,
        adress: String,
    },
    tickets: {
        available: Number,
        sold: Number
    },
    spot: String,
});

let Event = mongoose.model('event', eventSchema);

module.exports = Event;