// Tickets route for where is's @ app

//Models
let Ticket = require('../models/ticket');

module.exports.post = async (req, res) => {
    
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
    }
    catch {
        console.error(err);
        resp.status(400).send(err);
    }
};

//GET
module.exports.get = async (req, res) => {
    
    try {
        let tickets = await Ticket.find({});
        res.status(200).send(tickets);

    } catch (err) {
        res.status(500).send(err);
    }
};

// This is called unique ID
function uid (len) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTVWXYZ0123456789';
    let code = [];

    for(let i=0; i<len; i++) {
        let rand = Math.floor(Math.random()*chars.length);
        code.push(chars[rand]);
    }
    return code.join('');
};
