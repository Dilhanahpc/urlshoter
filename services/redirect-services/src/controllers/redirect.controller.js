const service = require('../services/redirect.service');

exports.redirect = async (req, res) => {
  const url = await service.handle(req.params.code);
  if (!url) return res.sendStatus(404);
  res.redirect(url);
};