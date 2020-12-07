/*
Write a function that takes a string of digits, and
returns the appropriate number as an integer. The
string may have a leading + or - sign; if the first
character is a +, your function should return a positive
number; if it is a -, your function should return a
negative number. If no sign is given, you should return
a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods
available in JavaScript, such as parseInt() and Number().
You may, however, use the stringToInteger() function from
the previous lesson.

Examples:
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
*/

/*
Problem:
-input
  -string of digits
-output
  -number as an integer
  -may or may not include a + or - sign
-internal
  -don't worry about decimals

Examples:
see above

Datatypes:
-input string
-output number pos or neg
-internal object, array

Algorithm:
-given a string of digits
-if string starts with '+'
  -return stringToInteger(str.slice(1))
-else if string starts with '-'
  -return 0 - stringToInteger(str.slice(1))
-else
  -return stringToInteger(str)
*/

function stringToInteger(string) {
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
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  //creates array of numbers from string
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  //for each digit in array, multiply the last value by ten, then add next digit
  return value;
}

function stringToSignedInteger(str) {
  if (str.startsWith('+')) {
    return stringToInteger(str.slice(1));
  } else if (str.startsWith('-')) {
    return -stringToInteger(str.slice(1));
  } else {
    return stringToInteger(str);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true


/*
Suggest answer uses a switch statement... makes sense.
*/