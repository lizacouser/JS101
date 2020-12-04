/*
Create a function that takes two arguments,
multiplies them together, and returns the result.

Example:
console.log(multiply(5, 3) === 15); // logs true
*/

function isValidNumber(num) {
  return (typeof num === 'number');
}

function multiply(num1, num2) {
  if (isValidNumber(num1) && isValidNumber(num2)) {
    return num1 * num2;
  } else {
    return 'Invalid number';
  }
}

console.log(multiply(5, 3)); // 15
console.log(multiply(-1, 7)); // -7
console.log(multiply(1, 2, 3)); // 2
console.log(multiply('hello', 'goodbye')); // Invalid
console.log(multiply('','')); // Invalid
console.log(multiply(2)); // Invalid
console.log(multiply()); // Invalid


/*
Problem:
-input two numbers
-output two numbers multiplied together
-internal validate numbers

Example:
multiply(5, 3) // 15
multiply(-1, 7) // -7
multiply(2) // Invalid numbers
multiply() // Invalid numbers
multiply(1, 2, 3) // 2
multiply('hello', 'goodbye') // Invalid numbers

Data types:
-numbers all around
-booleans to validate

Algorithm:
-given two numbers
-validate that they are numbers
-return numbers multiplied together
*/
