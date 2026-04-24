const Url = require('../models/url.models');

exports.create = (data) => Url.create(data);
exports.find = (short) => Url.findOne({ short });