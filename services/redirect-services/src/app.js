const express = require('express');
const routes = require('./routes/redirect.routes');

const app = express();
app.use('/', routes);

module.exports = app;