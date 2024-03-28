const mongoose = require('mongoose');
const {getModel, dbUrl} = require("../routes/dbConnection");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    ticketPrice: { type: Number, required: true },
    ticketsAvailable: { type: Number, required: true },
    status: { type: String, required: true }
});

const Event = getModel('Event', eventSchema, dbUrl);

module.exports = Event;