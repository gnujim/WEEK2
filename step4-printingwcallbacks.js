const https = require('https');

const getHTML = (options, callback) => {
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

const printHTML = html => {
  console.log(html);
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
