const mongoose = require('mongoose');
const config = require('config');
const { logger } = require('./logs');

let options = {
  server: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS : 30000
    }
  }
};

mongoose.Promise = global.Promise;

let connection = null;

// --

module.exports.initMongo = function() {

  mongoose.connect(config.DBHost, options);

  connection = mongoose.connection;

  connection.once('open', () => {
    logger.info('Db connected');
  });

  connection.on('error', err => {
    logger.error(err);
  });

};

module.exports.m = mongoose;

module.exports.db = connection;