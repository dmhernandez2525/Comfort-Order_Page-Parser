const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PicSlideSchema = new Schema({
    pic: [{
            type: String
        }],
    text: [{
            type: String
        }]

});

module.exports = mongoose.model('picSlide', PicSlideSchema);
