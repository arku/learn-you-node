const http = require('http');
const url = process.argv[2];

http.get(url, (response) => {
  let data = '';

  response.setEncoding('utf8');

  response.on('error', (err) => console.log(err));
  response.on('data', (contents) => data += contents);
  response.on('end', () => {
    console.log(data.length);
    console.log(data);
  });
});