/* eslint-disable no-console */
const express = require('express');
const mongoose = require("mongoose");

let app = express();

let tickets = require("./routes/tickets");
let verify = require("./routes/verify");

//connect to database
mongoose.connect(`mongodb+srv://captain:${process.env.PASSWORD}@tickets-c0rbw.mongodb.net/test?retryWrites=true"`, { useNewUrlParser: true })
    .then(() => {
        console.info("Connected")
    })

.catch(err => {
    console.error(err.stack);
})

app.use(express.json());

app.route("/tickets")
    .post(tickets.post)
    .get(tickets.get)



app.route("/verify/:code")
    .get(verify.get)


app.listen(3000, () => {
    console.info("Servern körs på 3000");
})