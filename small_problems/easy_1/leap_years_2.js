/*
This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar
in 1752, which was a leap year. Prior to 1752,
they used the Julian Calendar. Under the Julian
Calendar, leap years occur in any year that is evenly
divisible by 4.

Using this information, update the function from
the previous exercise to determine leap years both
before and after 1752.

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true
*/

let isLeapYear = year => {
  year = Number(year);
  if (Number.isNaN(year) || year <= 0 || !Number.isInteger(year)) {
    return 'Must be an integer greater than 0';
  } else if (year >= 1752) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    }
  }
  return (year % 4 === 0);
};

//OR could add if at start that returns true if (year < 1752 && year % 4 === 0)

console.log(isLeapYear(2016));       // true
console.log(isLeapYear(2015));       // false
console.log(isLeapYear(2100));       // false
console.log(isLeapYear(2400));       // true
console.log(isLeapYear(240000));     // true
console.log(isLeapYear(240001));     // false
console.log(isLeapYear(2000));       // true
console.log(isLeapYear(1900));       // false
console.log(isLeapYear(1752));       // true
console.log(isLeapYear(1700));       // true
console.log(isLeapYear(1));          // false
console.log(isLeapYear(100));        // true
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
-same as leap_years.js, BUT
  -if year < 1752, leap years occurred every year that was divisible by 4!

Examples:
-see above

Datatypes:
-see leap_years.js

Algorithm:
-generally same as leap_years.js, but add an extra if statement

-if year >= 1752 {
  -if year % 400 === 0;
    -return true
  -if year % 100 === 0;
    -return false
}
return year % 4 === 0;
*/


