var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  downloads: Number,
  firstVisit: Date,
  lastVisit: Date,
  visits: [Date]
});

module.exports = mongoose.model('users', userSchema);