const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BusinessSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    url: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String
    },
    address: {
        type: String
    },
    slogan: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    // features: [{
    //     type: String
    // }], rfq 
    features: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'feature'
    }],
    template: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('business', BusinessSchema);
