// Tickets route


//models
let Ticket = require("./models/ticket");

module.exports.post = async(req, res, next) => {

    try {

        let ticket = req.body;

        // generate CODE 
        ticket.code = uid(5);

        //create instants from model Ticket

        let resp = await Ticket.create(ticket);
        console.log(resp);
        res.status(200).send(resp);

    } catch (err) {
        console.error(err);
        res.status(400).send(err);
    }


};

module.exports.get = async(req, res) => {

    try {

        let tickets = await Ticket.find({});

        res.status(200).send(tickets);

    } catch (err) {
        res.status(500).send(err);
    }
}


function uid(len) {

    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = [];

    for (let i = 0; i < len; i++) {
        let rand = Math.floor(Math.random() * chars.length);
        code.push(chars[rand]);

    }

    return code.join('');


}

//console.log(uid(4));