/* eslint-disable no-console */
let Ticket = require("../models/ticket");


module.exports.get = async(req, res) => {

    try {

        let resp = await Ticket.find({ code: req.params.code })

        if (resp.length == 1) {

            res.status(200).send("Ticket is valid");

        } else {

            res.status(400).send("Ticket NOT valid");

        }

    } catch (err) {
        console.log(err);
    }

};