const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FeatureSchema = new Schema({
    cssName: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    data: [{
        type: String
    }],
    order: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('feature', FeatureSchema);
