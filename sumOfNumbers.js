// Skip node and path of the program file
// and convert the rest of arguments to numbers
const numbers = process.argv.slice(2).map(num => Number(num));

const sum = (accumulator, currentValue) => accumulator + currentValue ;

let totalSum = numbers.reduce(sum, 0);
console.log(totalSum);