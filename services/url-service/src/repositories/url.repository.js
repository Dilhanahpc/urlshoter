const Url = require('../models/url.model');

exports.create = (data) => Url.create(data);
exports.find = (short) => Url.findOne({ short });