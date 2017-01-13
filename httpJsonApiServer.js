const http = require('http');
const URL = require('url');

const port = Number(process.argv[2]);
const parseTimePath = '/api/parsetime';
const unixTimePath = '/api/unixtime';

function getDateTime(url, response) {
  let iso = url.query.iso;
  if (!iso) return null;
  return new Date(iso);
}

function getParsedTime(dateTime) {
  return {
    hour: dateTime.getHours(),
    minute: dateTime.getMinutes(),
    second: dateTime.getSeconds()
  };
}

function getUnixTime(dateTime) {
  return {
    unixtime: dateTime.getTime()
  };
}

function requestHandler(request, response) {
  // docs: https://nodejs.org/api/url.html
  let url = URL.parse(request.url, true),
      pathname = url.pathname,
      dateTime, time;

  if (pathname === parseTimePath || pathname === unixTimePath) {
    dateTime = getDateTime(url);
    if (!dateTime) return response.end('Pass in a ISO time with they key \'iso\'');
  }

  if (pathname === parseTimePath)
    time = getParsedTime(dateTime);
  else if (pathname === unixTimePath)
    time = getUnixTime(dateTime);
  else {
    response.writeHead(404);
    response.end();
  }

  response.writeHead(200, { 'content-type': 'application/json' });
  response.end(JSON.stringify(time));
}

const server = http.createServer(requestHandler);

try {
  server.listen(port);
} catch(err) {
  console.log(err.message);
}