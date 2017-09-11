const getHTML = require('../step5-makeitamodule');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

const print1337 = html => {
  console.log(html);
};

getHTML(requestOptions, print1337);
