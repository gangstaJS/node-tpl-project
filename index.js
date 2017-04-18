const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const morgan = require('morgan');
const winston = require('winston');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));


// Controllers import
app.use('/', require('./controllers/app'));

app.listen(config.port);

module.exports = app;

