/*
Write a function that takes an integer, and
converts it to a string representation.

You may not use any of the standard conversion
functions available in JavaScript, such as
String() and Number.prototype.toString().
You may, however, use integerToString() from
the previous exercise.

You might also want to check the Math.sign()
function.

Examples:
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
*/

/*
Problem:
-same as before but include signs

Examples:
-see above

Data types:
same as before?

Algorithm
-switch statement on Math.sign(num)
  -case -1
    -flip case
    -calculate
    -add '-'
  -case 1
    -calculate
    -add '+'
  -else
    -calculate
  }
*/

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1 :
      return '-' + integerToString(-number);
    case 1 :
      return '+' + integerToString(number);
    default :
      return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");