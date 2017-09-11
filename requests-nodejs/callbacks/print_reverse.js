const getHTML = require('../step5-makeitamodule');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

const printReverse = html => {
  console.log(
    html
      .split('')
      .reverse()
      .join('')
  );
};

getHTML(requestOptions, printReverse);
