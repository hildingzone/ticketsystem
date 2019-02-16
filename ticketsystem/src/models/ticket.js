let mongoose = require("mongoose");

let Schema = mongoose.Schema;

//create schema

let ticketSchema = new Schema({

    code: String,
    name: String,
    price: Number,
    when: {
        date: String,
        from: String,
        to: String,
    }

});

//create model based on schema

let Ticket = mongoose.model("ticket", ticketSchema);


module.exports = Ticket;