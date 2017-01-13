const http = require('http');
const results = [];

const fetchFiles = function (urls, callback) {
  // Process from the first url, in order
  let url = urls.shift();
  let data = '';

  // To catch url parse errors
  try {
    http.get(url, response => {
      response.setEncoding('utf8');

      response.on('err', err => callback(`Check the url - ${url}`));
      response.on('data', chunk => data += chunk);
      response.on('end', () => {
        results.push(data);
        (urls.length) ? fetchFiles(urls, callback) : callback(null, results);
      });

    });
  } catch(err) {
    callback(`${err.message} - ${url}`);
  }
};

module.exports = fetchFiles;