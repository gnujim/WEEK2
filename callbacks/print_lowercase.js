const getHTML = require('../step5-makeitamodule');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

const printLowerCase = html => {
  console.log(html.toLowerCase());
};

getHTML(requestOptions, printLowerCase);
