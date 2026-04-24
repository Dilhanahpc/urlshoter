const repo = require('../repositories/url.repository');

exports.createShort = async (long) => {
  const { nanoid } = await import('nanoid');
  const short = nanoid(6);
  return repo.create({ short, long });
};

exports.getLong = async (code) => {
  return repo.find(code);
};