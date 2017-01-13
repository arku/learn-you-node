const net = require('net');
const port = Number(process.argv[2]);

const padZero = function(number) {
  return (number < 10 ? '0' : '') + number;
}

const formattedTime = function(dateTime) {
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1; // getMonth() returns a value from 0-11
  const date = dateTime.getDate();

  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();

  const  formattedDateTime = `${year}-${padZero(month)}-${padZero(date)} ${padZero(hours)}:${padZero(minutes)}`;

  return formattedDateTime;
};

const server = net.createServer(socket => {
  let dateTime = new Date();
  socket.end(formattedTime(dateTime) + '\n');
});

try {
  server.listen(port);
} catch(err) {
  console.log(err.message);
}