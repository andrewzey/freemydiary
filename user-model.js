var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  downloads: Number
});

module.exports = mongoose.model('users', userSchema);