// Look for readline-sync library in node_modules folder and return as object
let rlSync = require('readline-sync');

// Log prompts to console with distinctive prefix
function prompt(message) {
  console.log(`=> ${message}`);
}

//check if input is valid
//calling Number() on anything that isn't a number returns NaN
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Welcome user
prompt('Welcome to Calculator!');

//ask the user for first number
prompt('What\'s the first number?');
let firstNumber = rlSync.question();

//get input again if invalid
while (invalidNumber(firstNumber)) {
  prompt('Hmm... that doesn\'t look like a valid number. Try again.');
  firstNumber = rlSync.question();
}

//ask the user for second number
prompt('What\'s the second number?');
let secondNumber = rlSync.question();

//get input again if invalid
while (invalidNumber(secondNumber)) {
  prompt('Hmm... that really doesn\'t look like a valid number. Try again.');
  secondNumber = rlSync.question();
}

//test here
console.log(firstNumber + ", " + secondNumber);

//ask the user for the type of operation to perform
prompt('What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = rlSync.question();

//get input again if invalid
while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3, or 4. Try again.');
  operation = rlSync.question();
}

// perform the calculation
let output;
switch (operation) {
  case '1' : //note that RL_SYNC always returns a string!
    output = Number(firstNumber) + Number(secondNumber);
    break;
  case '2' :
    output = Number(firstNumber) - Number(secondNumber);
    break;
  case '3' :
    output = Number(firstNumber) * Number(secondNumber);
    break;
  case '4' :
    output = Number(firstNumber) / Number(secondNumber);
    break;
}

// display result
prompt(`The result is ${output}.`);