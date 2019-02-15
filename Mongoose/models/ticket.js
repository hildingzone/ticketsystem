let mongoose = require('mongoose');

let Schema = mongoose.Schema;

// Create schema
let ticketSchema = new Schema({
    code: {
        type: [String, 'Code must be a String'],
        required: [true, 'No code found.']
    },
    name: {
        type: [String, 'Name must be a String'],
        required: [true, 'Enter a Name.']
    },
    price: {
        type: [Number, 'Price must be a Number'],
        required: [true, 'Enter a Price.']
    },
    when: {
        date: {
            type: [String, 'Date must be a String'],
            required: [true, 'You gave no Date.']
        },
        start: {
            type: [String, 'Start must be a String'],
            required: [true, 'You gave no Start.']
        },
        end: {
            type: [String, 'End must be a String'],
            required: [true, 'You gave no End.']
        },
    }, /*
    where: {
        location: {
            type: [String, 'Location must be a String'],
            required: [true, 'You gave no Location.']
        },
        adress: {
            type: [String, 'Adress must be a String'],
            required: [true, 'You gave no Adress.']
        }
    },
    info: String,
*/

});

// A model based on the schema
let Ticket = mongoose.model('ticket', ticketSchema);

module.exports = Ticket;