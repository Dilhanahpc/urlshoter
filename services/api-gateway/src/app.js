const express = require('express');
const proxy = require('http-proxy-middleware').createProxyMiddleware;

const app = express();

app.use('/api', proxy({
  target: 'http://url-service:3000',
  changeOrigin: true
}));

app.use('/', proxy({
  target: 'http://redirect-service:4000',
  changeOrigin: true
}));

module.exports = app;