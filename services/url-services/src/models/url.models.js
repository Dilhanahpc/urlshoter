const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  short: { type: String, unique: true },
  long: String
});

module.exports = mongoose.model('Url', schema);