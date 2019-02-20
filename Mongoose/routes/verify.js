//Models
let Ticket = require('../models/event');

module.exports.get = async (req, res) => {

    try {
    // Verify code
    let resp = await Ticket.find({
        code: req.params.code
        })
        if (resp.length == 1) {
            // Ticket is Valid
            res.status(200).send('Ticket is Valid, sir!')
        } else {
            // Ticket is NOT Valid
            res.status(400).send('TIcket aint Valid, bro!')
        }

    } catch (err) {
        res.status(500).send(err);
    }
};