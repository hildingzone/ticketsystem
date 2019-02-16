let Event = require('../models/event');

module.exports.get = async (req, res) => {
    try {
        res.status(200).send(await Event.find({}));
    } catch (err) {
        res.status(500).send(err.stack);
    }
};
module.exports.post = async (req, res) => {
    
    try {
    //Handle post
    let event = req.body;

    //Generate a CODE and put it inside of key code: CODE
    event.code = uid(6);

    //Create an instant of models Ticket
    let resp = await Event.create(event);
    console.log(resp);

    //Send it if everything went OK
    res.status(200).send(resp);
    }
    catch {
        console.error(err);
        resp.status(400).send(err);
    }
};

function uid (len) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTVWXYZ0123456789';
    let code = [];

    for(let i=0; i<len; i++) {
        let rand = Math.floor(Math.random()*chars.length);
        code.push(chars[rand]);
    }
    return code.join('');
};