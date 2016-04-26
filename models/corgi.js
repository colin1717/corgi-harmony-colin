var mongoose = require('mongoose');

var corgiSchema = new mongoose.Schema({
  name: String,
  age: Number,
  picture: String,
  liked: Boolean
});

var Corgi = mongoose.model('Corgi', corgiSchema);

module.exports = Corgi;
