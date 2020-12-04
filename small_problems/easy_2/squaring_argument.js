/*
Using the multiply() function from the
"Multiplying Two Numbers" problem, write
a function that computes the square of its
argument (the square is the result of
multiplying a number by itself).

Example:
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
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

let square = num => multiply(num, num);

console.log(square(5)); // 25
console.log(square(-8)); // 64
console.log(square()); // Invalid
console.log(square('hello')); // Invalid


// to generalize to the power of n
function nthPower(num, exponent) {
  let result = num;
  if (typeof exponent !== 'number') {
    return 'Invalid exponent';
  }
  for (let count = 1; count < exponent; count++) {
    result = multiply(num, result);
  }
  return result;
}

console.log(nthPower(2, 3)); // 8
console.log(nthPower(5, 2)); // 25
console.log(nthPower(10, 6)); // 1000000
console.log(nthPower('hi', 3)); // invalid
console.log(nthPower(2, 'hi')); // invalid

/*
Problem:
-input one number
-output square of that number
-internal
  -use multiply function to multiple number by itself

Examples:
console.log(square(5)); // 25
console.log(square(-8)); // 64
console.log(square()); // Invalid
console.log(square('hello')); // Invalid

Algorithm:
-internally call multiply(num, num);
*/

