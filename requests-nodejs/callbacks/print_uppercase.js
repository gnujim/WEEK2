const getHTML = require('../step5-makeitamodule');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

const printUpperCase = html => {
  console.log(html.toUpperCase());
};

getHTML(requestOptions, printUpperCase);
