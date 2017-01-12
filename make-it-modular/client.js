const filter = require('./filter.js');

const directory = process.argv[2];
const fileExtension = process.argv[3];

filter(directory, fileExtension, (err, filteredFiles) => {
  if (err) return console.log('Please provide a valid directory');

  filteredFiles.forEach((filename) => console.log(filename));
});