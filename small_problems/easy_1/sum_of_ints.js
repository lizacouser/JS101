/*
Write a program that asks the user to
enter an integer greater than 0, then
asks whether the user wants to determine
the sum or the product of all numbers
between 1 and the entered integer, inclusive.

Examples:
> Please enter an integer greater than 0: 5
> Enter "s" to compute the sum, or "p" to compute the product. s

> The sum of the integers between 1 and 5 is 15.

-----------

> Please enter an integer greater than 0: 6
> Enter "s" to compute the sum, or "p" to compute the product. p

> The product of the integers between 1 and 6 is 720.
*/

let sum = integer => {
  if (integer === 1) return 1;
  else {
    return integer + sum(integer - 1);
  }
};

let product = integer => {
  if (integer === 1) return 1;
  else {
    return integer * product(integer - 1);
  }
};

let readline = require('readline-sync');
let myInt = Number(readline.question('Please enter an integer greater than 0: '));
while (Number.isNaN(myInt) || myInt === 0) {
  myInt = Number(readline.question('Oops! Not valid input. Try again: '));
}

let myOp = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ').toLowerCase();
while (myOp !== 's' && myOp !== 'p') {
  myOp = readline.question('You must type "s" or "p". Try again: ');
}

let result;
if (myOp === 's') {
  result = sum(myInt);
  console.log(`The sum of the integers between 1 and ${myInt} is ${result}`);
} else if (myOp === 'p') {
  result = product(myInt);
  console.log(`The product of the integers between 1 and ${myInt} is ${result}`);
} else {
  console.log('Unknown input.');
}

/*
Problem:
-input
  -user inputs one integer > 0 (string convert to number)
  -user inputs if they want to determine sum or product (string)
-output
  -sum or product of all numbers between 1 and the integer, inclusive
-internal
  -loop through numbers 0 to integer, adding/multiplying as you go

Examples:
input 5, 's' // 1 + 2 + 3 + 4 + 5 = 15
input 6, 'p' // 1 * 2 * 3 * 4 * 5 = 720
input 1, 's' // 1 = 1
input 2, 'p' // 1 * 2 = 2

Datatypes:
-input: string, convert to Number
-output: string 'The product of the integers betweein 1 and 6 is 720
-internal rule options:
  1) Array of numbers from 0 to integer, reduced by algorithm
  2) a for loop of numbers that goes from 5-4-3-2-1
  3) recursion <- lets try this one!

Algorithm:
-enable readline
-ask user for number and save to variable myInt (convert to num)
-ask user for 's' (sum) or 'p') product (convert to lowercase)
 and save to variable operation
-create variable 'result'

For for loop version of this:
-loop through values from i = myInt to i = 1; i -= 1
  -if operation === 's', result += i;
  -if operation === 'p', result *= i;
-return result

For recursive version of this:
-make a function calculate with parameter integer
-if integer === 1, return 1
-else if operation = 's'
  -return calculate(integer - 1) + integer
-else if operation = 'p'
  -return calculate(integer - 1) * integer

*/