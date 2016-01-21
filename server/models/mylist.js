var mongoose = require('mongoose');

var MylistSchema = new mongoose.Schema({
  url: String,
});


module.exports = mongoose.model('Mylist', MylistSchema);
