var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var Job = new Schema({
 headline: String,
 description: String,
 date: Number
});


// mongoose.connect(process.env.MONGO_URI);

module.exports = mongoose.model('jobs', Job);
