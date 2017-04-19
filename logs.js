const winston = require('winston');
const config = require('config');

let logger = null;



logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      name: 'info-file',
      filename: config.logs.Info,
      level: 'info'
    }),
    new (winston.transports.File)({
      name: 'error-file',
      filename: config.logs.Error,
      level: 'error'
    })
  ]
});

logger.info('Init logs');

module.exports.logger = logger;
