const https = require('https');

const getAndPrintHTML = options => {
  https.get(options, response => {
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

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
