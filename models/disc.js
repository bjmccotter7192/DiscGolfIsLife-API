var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DiscSchema = new Schema({
    discName: String,
    id: Number,
    speed: Number,
    glide: Number,
    turn: Number,
    fade: Number
});

module.exports = mongoose.model('Disc', DiscSchema);