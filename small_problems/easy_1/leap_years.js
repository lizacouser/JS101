/*
In the modern era under the Gregorian Calendar,
leap years occur in every year that is evenly
divisible by 4, unless the year is also divisible
by 100. If the year is evenly divisible by 100,
then it is not a leap year, unless the year is
also evenly divisible by 400.

Assume this rule is valid for any year greater
than year 0. Write a function that takes any year
greater than 0 as input, and returns true if the
year is a leap year, or false if it is not
a leap year.

Examples:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true
*/

let isLeapYear = year => {
  year = Number(year);
  if (Number.isNaN(year) || year <= 0 || !Number.isInteger(year)) {
    return 'Must be an integer greater than 0';
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return (year % 4 === 0);
  }
};


console.log(isLeapYear(2016));       // true
console.log(isLeapYear(2015));       // false
console.log(isLeapYear(2100));       // false
console.log(isLeapYear(2400));       // true
console.log(isLeapYear(240000));     // true
console.log(isLeapYear(240001));     // false
console.log(isLeapYear(2000));       // true
console.log(isLeapYear(1900));       // false
console.log(isLeapYear(1752));       // true
console.log(isLeapYear(1700));       // false
console.log(isLeapYear(1));          // false
console.log(isLeapYear(100));        // false
console.log(isLeapYear(400));        // true
console.log(isLeapYear('4'));        // true
console.log(isLeapYear(0));          // invalid
console.log(isLeapYear(''));         // invalid
console.log(isLeapYear(null));       // invalid
console.log(isLeapYear(undefined));  // invalid
console.log(isLeapYear('hey'));      // invalid
console.log(isLeapYear(16.5));       // invalid
console.log(isLeapYear(-4));         // invalid

/*
Problem:
-Rules
  -leap year when year number is divisible by 4
  -not leap year when year number is divisible by 100 UNLESS divisible by 400
  -valid for any year greater than 0
-Input
  -year number > 0
-Output
  -boolean
  -true if leap year
  -false if not leap year

Examples:
-see above
-control for 0, null, undefined, string, NaN, float, etc

Data type:
-Input = Number
-Output = Boolean
-Internally = Numbers

Algorithm:
-validate that it is an integer > 0 (log error message otherwise)
  -if Number.isNaN(Number(number)) || number <= 0 || !number.isInteger()
    -log "Must be an integer greater than 0"
-if number % 400 === 0, it is a leap year, return true
-if number % 100 === 0, it is not a leap year, return false
-if number % 4 === 0, it is a leap year, return true
-else return false

*/

