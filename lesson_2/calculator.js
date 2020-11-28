// Look for readline-sync library in the node_modules folder and return as object
const RL_SYNC = require('readline-sync');

// Welcome user
console.log('Welcome to Calculator!');

//ask the user for first number
console.log('What\'s the first number?');
let firstNumber = RL_SYNC.question();

//ask the user for second number
console.log('What\'s the second number?');
let secondNumber = RL_SYNC.question();

//test here
console.log(firstNumber + ", " + secondNumber);

//ask the user for the type of operation to perform
console.log('What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = RL_SYNC.question();

// perform the calculation
let output;
if (operation === '1') {   //note that RL_SYNC always returns a string!
  output = Number(firstNumber) + Number(secondNumber);
}  else if (operation === '2') {
  output = Number(firstNumber) - Number(secondNumber);
} else if (operation === '3') {
  output = Number(firstNumber) * Number(secondNumber);
} else if (operation === '4') {
  output = Number(firstNumber) / Number(secondNumber);
}

// display result
console.log(`The result is ${output}.`);


