const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const fileExtension = process.argv[3];

fs.readdir(directory, (err, filenames) => {
  if (err) throw err;

  let filteredFiles =
    filenames.filter(filename => path.extname(filename) === `.${fileExtension}`);

  // Not so performant, but readable
  filteredFiles.forEach((filename) => console.log(filename));
});
