// dependencies
const fs = require('fs');
const log = require('../log');

const dockerSecret = {};

dockerSecret.read = function read(secretName) {
  try {
    return fs.readFileSync(`/run/secrets/${secretName}`, 'utf8');
  } catch(err) {
    log.error(`An error occurred while trying to read the secret: ${secretName}. Err: ${err}`);
    return false;
  }
};

module.exports = dockerSecret;
