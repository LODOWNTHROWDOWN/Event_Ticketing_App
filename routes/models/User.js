const mongoose = require('mongoose');
const { getModel, dbUrl } = require('../routes/dbConnection');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Hash password before saving a new user
userSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});

const User = getModel('User', userSchema, dbUrl);

module.exports = User;