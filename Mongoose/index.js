// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3000;

let app = express();
app.use(express.json());
app.use(cors());

// Connect to our DB 
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.info('Connected.')
    })
    .catch(err => {
        console.error(err)
    });

// Routes
let tickets = require('./routes/tickets');
let events = require('./routes/events');
let verify = require('./routes/verify');

app.route('/tickets')
    .post(tickets.post);

app.route('/events')
    .post(events.post)
    .get(events.get);

app.route('/verify/:code')
    .get(verify.get)

app.listen(port, () => {
    console.info(`Server is running: ${port}.`)
});