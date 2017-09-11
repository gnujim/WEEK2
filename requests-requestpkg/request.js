const request = require('request');
const fs = require('fs');

request
  .get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', err => {
    throw err;
  })
  .on('response', response => {
    console.log(`Response Status Message: ${response.statusMessage}`);
    console.log(`Response Headers: ${response.headers['content-type']}`);
  })
  .on('end', () => {
    console.log(`Downloading complete.`);
  })
  .pipe(fs.createWriteStream('./future.jpg'));

console.log(`Downloading image...`);
