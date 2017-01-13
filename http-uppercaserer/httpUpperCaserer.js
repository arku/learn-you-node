const http = require('http');
const map = require('through2-map');

const port = Number(process.argv[2]);

function requestHandler(request, response) {
  if (request.method === 'POST')
    request
      .pipe(map(chunk => chunk.toString().toUpperCase()))
      .pipe(response);
  else
    response.end('Please send a POST request');
}

const server = http.createServer(requestHandler);

try {
  server.listen(port);
} catch(err) {
  console.log(err.message);
}