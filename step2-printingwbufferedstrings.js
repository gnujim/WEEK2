const https = require('https');

const getAndPrintHTML = () => {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  https.get(requestOptions, response => {
    response.setEncoding('utf8');
    let rawData = '';

    response.on('data', chunk => {
      rawData += chunk;
    });

    response.on('end', () => {
      console.log(rawData);
    });
  });
};

getAndPrintHTML();
