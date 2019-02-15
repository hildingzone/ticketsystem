let Event = require('mongoose');

module.exports.get = async (req, res) => {
    try {
        res.status(200).send(await Event.find({}));
    } catch (err) {
        res.status(500).send(err.stack);
    }
};