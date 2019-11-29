

// A user has a email , a password , a name, a userRole, and an address.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 32
    },
    name: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('user', UserSchema);