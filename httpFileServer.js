const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const filePath = process.argv[3];

function requestHandler(request, response) {
  let data = '';
  try {
    const readableStream = fs.createReadStream(filePath);

    response.writeHead(200, { 'content-type': 'text/plain' });
    readableStream.pipe(response);
  } catch(err) {
    console.log(err.message);
    process.exit(-1); // failure
  }
}

const server = http.createServer(requestHandler);

try {
  server.listen(port);
} catch(err) {
  console.log(err.message);
}