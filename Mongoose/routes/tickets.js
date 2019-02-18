// Tickets route for where is's @ app

//Models
let Ticket = require('../models/ticket');

module.exports.post = async(req, res) => {

    try {
        //Handle post
        let ticket = req.body;

        //Generate a CODE and put it inside of key code: CODE
        ticket.code = uid(6);

        //Create an instant of models Ticket
        let resp = await Ticket.create(ticket);
        console.log(resp);

        //Send it if everything went OK
        res.status(200).send(resp);
    } catch {
        console.error(err);
        resp.status(400).send(err);
    }
};

//POST TICKETS

module.exports.post = async(req, res) => {
    console.log(req.body);

    try {
        // get event info
        let event = await Event.findById(req.body.event);
        console.log(event);

        let tickets = [];

        //loop the amount of ticket ordered    
        for (i = 0; i < req.body.amount; i++) {

            let ticket = {
                event: event,
                code: uid(5),
                used: false
            }

            tickets.push(ticket);

        }
        console.log(tickets);

        // post tickets to mongo

        let resp = await Ticket.create(tickets);

        res.status(200).send(resp);
    } catch (err) {
        res.status(500).send(err.stack);
    }

}

//create tickets



//return tickets





//GET
module.exports.get = async(req, res) => {

    try {
        let tickets = await Ticket.find({});
        res.status(200).send(tickets);

    } catch (err) {
        res.status(500).send(err);
    }
};

// Unique Ticket ID generator
function uid(len) {
    let chars = "ABCDEFGHIJKLMNOPQRSTVWXYZ0123456789";
    let code = [];

    for (let i = 0; i < len; i++) {
        let rand = Math.floor(Math.random() * chars.length);
        code.push(chars[rand]);
    }
    return code.join("");
};