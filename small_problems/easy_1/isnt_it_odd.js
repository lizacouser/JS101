/*
Write a function that takes one integer argument,
which may be positive, negative, or zero.
This method returns true if the number's absolute value is odd.
You may assume that the argument is a valid integer value.

*/

let isOdd = num => {
  return ((Math.abs(num % 2)) === 1);
};

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

/*

Understand the Problem
Input: one integer (number)
Output: return boolean, true if odd

Examples / Test Cases
+, -, 0 input
even, odd

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true


Data Structure
  - input data = number
  - output data = boolean
  - internal logic is if/ternary

Algorithm

START
# Given a number 'num'
PRINT (absolute value of num % 2) === 1
END

Math.abs finds absolute value

*/