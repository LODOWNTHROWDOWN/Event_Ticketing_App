const mongoose = require('mongoose');
const {getModel, dbUrl} = require("../routes/dbConnection");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    ticketsPurchased: { type: Number, required: true },
    purchaseDate: { type: Date, default: Date.now },
});

const Booking = getModel('Booking', bookingSchema, dbUrl);

module.exports = Booking;