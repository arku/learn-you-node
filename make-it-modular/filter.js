const fs = require('fs');
const path = require('path');

const filter = function (directory, fileExtension, callback) {
  fs.readdir(directory, (err, filenames) => {
    if (err) return callback(err);

    const filteredFiles = filenames.filter((filename) =>
        path.extname(filename) == `.${fileExtension}`);

    callback(null, filteredFiles);
  });
};

module.exports = filter;