// Dependencies
const express = require('express');
const mongoose = require('mongoose');
let app = express();
app.use(express.json());

// Connect to our DB 
mongoose.connect(`mongodb+srv://MrPinkSurfer:${process.env.PASSWORD}@pinksurfers-39rah.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true })
.then(() => {
    console.info('Connected.')
})
.catch(err => {
    console.error(err)
});

// Routes
let tickets = require('./routes/tickets');
let verify = require('./routes/verify');

app.route('/tickets')
.post(tickets.post)
.get(tickets.get);

app.route('/verify/:code')
.get(verify.get)

app.listen(3000, () => {
    console.info('Server is running: 3000.')
});
