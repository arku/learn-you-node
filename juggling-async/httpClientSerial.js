const urls = process.argv.slice(2);
const fetchFiles = require('./fetchFiles.js');

const processResults = (err, results) => {
  if (err) return console.log(err);
  results.forEach((data) => console.log(data));
};

fetchFiles(urls, processResults);

