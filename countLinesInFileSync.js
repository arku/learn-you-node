const fs = require('fs');
const filename = process.argv[2]; // third CL argument

const buffer = fs.readFileSync(filename); // buffer object
const fileContents = buffer.toString();
let numberOfLines = fileContents.split('\n').length

// the test file doesn't have newline character at the end
console.log(numberOfLines - 1);