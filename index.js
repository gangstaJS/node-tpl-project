const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const winston = require('winston');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));


// Controllers import
app.use('/', require('./controllers/app'));

app.listen(3333);

