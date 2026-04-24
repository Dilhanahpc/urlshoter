const redis = require('../config/redis');
const axios = require('axios');

exports.handle = async (code) => {
  const cached = await redis.get(code);
  if (cached) return cached;

  const res = await axios.get(`http://url-service:3000/${code}`);
  const long = res.data.long;

  await redis.set(code, long, { EX: 3600 });
  return long;
};