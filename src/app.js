const express = require('express');
const compression = require('compression');
const router = require('./router');

const app = express();

app.set('port', 8080);

// Middleware
app.use(compression());

// to parse body of post request || put request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(router);
module.exports = app;
