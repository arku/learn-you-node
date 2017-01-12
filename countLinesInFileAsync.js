const fs = require('fs');
const filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, fileContents) => {
  if (err) throw err;

  let numberOfLines = fileContents.split('\n').length;
  console.log(numberOfLines - 1);
});