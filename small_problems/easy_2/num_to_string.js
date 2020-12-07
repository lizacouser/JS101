/*
Write a function that converts a non-negative
integer value (e.g., 0, 1, 2, 3, and so on)
to the string representation of that integer.

You may not use any of the standard conversion
functions available in JavaScript, such as
String(), Number.prototype.toString, or an
expression such as '' + number. Your function
should do this the old-fashioned way and
construct the string by analyzing and
manipulating the number.

Examples:
integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"
*/

const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

function integerToString(num) {
  let conversionArray = Object.entries(DIGITS);
  let stringArray = [];
  let myDigit;
  do {
    myDigit = num % 10;
    for (let index = 0; index < conversionArray.length; index += 1) {
      if (conversionArray[index][1] === myDigit) {
        stringArray.unshift(conversionArray[index][0]);
      }
    }
    num = Math.floor(num / 10);
  } while (num > 0);
  return stringArray.join('');
}

console.log(integerToString(4321) === '4321');      // true
console.log(integerToString(0) === '0');         // true
console.log(integerToString(5000) === '5000');      // true
console.log(integerToString(1234567890) === '1234567890');      // true


/*
NOTES FROM SEEING SOLUTION:
-> INDEX IS ALREADY A NUMBER!
-> you don't need an array from object,
  ->you can just use an array ['0', '1', '2', etc.]
  to look up the string of number by index!!
-> you don't need an array of strings
  -> once you've converted to a string, you can just use +

see below:

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

*/

/*
Problem:
-input non-negative integer balue
-output string representation of that int
-internal
  -no + or -
  -don't worry about invalid input

Examples:
-see above

Data types:
-input number
-output string
-internal
  -object converter--search by value to retun key?
  -array to break up number into individual digits?

Algorithm:
-given a number
-break number down into digits
-for each digit, add the string value of that digit into an array
-join the array with "" delimiter

Abstraction:
-break down number into digits with %
  -ex//
    -unshift 5621 % 10 to array // [1]
    -Math.floor(5621/10) // 562
    -unshift 562 % 10 to array //[2, 1]
    -Math.floor(562/10) // 56
    -unshift 56 % 10 to array //[6, 2, 1]
    -Math.floor(56/10) // 5
    -unshift 5 % 10 to array //[5, 6, 2, 1]
    -Math.floor(5/10) // 0

-for each digit add string value of that digit
  -map digit array to string array with a conversion object
    -{1 : 1, 2 : 2}
    -numArray = Object.entries(digits) [[1, 1], [2, 2]]
    -for each index in object.entries(digits)
      if numArray[index][1] === myDigit,
        return numArray[index][0];

-combine these steps:
  -use good old conversion obect
  -make array conversionArray from conversion object (Object.entries())
  -make new empty array strings
  -while (number > 0)
    -find digit using % and save to myDigit
    -for each index in conversionArray
      -if conversionArray[index][1] === myDigit
        -unshift conversionArray[index][0];
    -number = Math.floor(number/10)
*/