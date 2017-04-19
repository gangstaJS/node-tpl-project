const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const morgan = require('morgan');
const { logger } = require('./logs');
const { initMongo, db } = require('./db');

const app = express();

const orderCtrl = require('./controllers/order');
const indexCtrl = require('./controllers/index');

initMongo();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));


// Controllers import
app.use('/orders/:id', orderCtrl.byId);
app.use('/orders', orderCtrl.all);
app.use('/', indexCtrl);

app.listen(config.Port);

module.exports = app;

