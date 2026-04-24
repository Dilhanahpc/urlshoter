const { nanoid } = require('nanoid');
const repo = require('../repositories/url.repository');

exports.createShort = async (long) => {
  const short = nanoid(6);
  return repo.create({ short, long });
};

exports.getLong = async (code) => {
  return repo.find(code);
};