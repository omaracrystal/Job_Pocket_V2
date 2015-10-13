var mongoose = require('mongoose');

var Keywords = new mongoose.Schema({
  add: [],
  avoid: [],
});


module.exports = mongoose.model('Keywords', Keywords);
