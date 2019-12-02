const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BusinessSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    name: {
        type: String,
        required: true
    },
    features: [{
        type: String
    }],
    template: {
        type: String,
        required: true
    },
    bussinessData: [{
        type: String
    }]
});

module.exports = mongoose.model('business', BusinessSchema);
