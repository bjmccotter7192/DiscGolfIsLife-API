var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DiscSchema = new Schema({
    discName: String,
    manufacturer: String,
    speed: Number,
    glide: Number,
    turn: Number,
    fade: Number
});

module.exports = mongoose.model('Disc', DiscSchema);