// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'normal' } // Default role
});

const User = mongoose.model('User', userSchema);

module.exports = User;
