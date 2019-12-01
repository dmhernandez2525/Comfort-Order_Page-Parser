const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BussnessSchema = new Schema({
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
    templett: {
        type: String,
        required: true
    },
    bussinessData: [{
        type: String
    }]
});

module.exports = Resume = mongoose.model('bussness', BussnessSchema);
