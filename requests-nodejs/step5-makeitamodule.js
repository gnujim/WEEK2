const https = require('https');

module.exports = (options, callback) => {
  https.get(options, response => {
    response.setEncoding('utf8');
    let rawData = '';

    response.on('data', chunk => {
      rawData += chunk;
    });

    response.on('end', () => {
      callback(rawData);
    });
  });
};
