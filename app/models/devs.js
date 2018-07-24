var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var devSchema = mongoose.Schema({

    username: {type: String, required: true},
    email: {type: String, required: true},
    email2: {type: String},



});


module.exports = mongoose.model('Dev', devSchema);