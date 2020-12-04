/*
Write a program that prompts the user for
two positive integers, and then prints the
results of the following operations on those
two numbers: addition, subtraction, product,
quotient, remainder, and power. *****Do not worry
about validating the input.

Example:
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103
*/

let readline = require('readline-sync');

function print(message) {
  console.log('==> ' + message);
}

function doArithmetic() {
  let num1 = parseInt(readline.question('Enter the first number:\n'), 10);
  let num2 = parseInt(readline.question('Enter the second number:\n'), 10);

  print(`${num1} + ${num2} = ${num1 + num2}`);
  print(`${num1} - ${num2} = ${num1 - num2}`);
  print(`${num1} * ${num2} = ${num1 * num2}`);

  if (num2 === 0) {
    print(`${num1} / ${num2} = divide by zero error`);
    print(`${num1} % ${num2} = divide by zero error`);

  } else {
    print(`${num1} / ${num2} = ${Math.round(num1 / num2)}`);
    print(`${num1} % ${num2} = ${num1 % num2}`);
  }
  print(`${num1} ** ${num2} = ${num1 ** num2}`);
}

doArithmetic();

/*
Problem:
-input
  -user inputs 2 positive integers
-output
  -string
  -prints results of +, -, *, /, %, **
-internal
  -custom prompt (==>)
  -round down to nearest integer on divide

Examples:
-see above
-what is second num is 0

Data:
-input = string converted to int (parseInt)
-output = interpolated string
-internal
  -readline sync
  -maybe an array of operators?

Algorithm:
-require readline
-print(message) function to do console.log('==> ' + message)
-ask for two numbers with readline.question()
  -parse to ints and save to variables num1 and num2
-set result;
-calculate result of each operation and save to result
-print ( `${num1}  ${num2} = ${result});
*/


