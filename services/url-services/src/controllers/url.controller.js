const service = require('../services/url.service');

exports.create = async (req, res) => {
  const data = await service.createShort(req.body.url);
  res.json(data);
};

exports.get = async (req, res) => {
  const data = await service.getLong(req.params.code);
  if (!data) return res.sendStatus(404);
  res.json(data);
};