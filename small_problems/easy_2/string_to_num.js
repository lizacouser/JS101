/*
The parseInt() method converts a string of numeric
characters (including an optional plus or minus sign)
to an integer. The method takes 2 arguments where the
first argument is the string we want to convert and
the second argument should always be 10 for our
purposes. parseInt() and the Number() method behave
similarly. In this exercise, you will create a function
that does the same thing.

Write a function that takes a String of digits, and
returns the appropriate number as an integer. You may
not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor
should you worry about invalid characters; assume all
characters will be numeric.

You may not use any of the standard conversion methods
available in JavaScript, such as String() and Number().
Your function should do this the old-fashioned way and
calculate the result by analyzing the characters in
the string.

Examples:
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
*/


function stringToInteger(str) {
  return Math.round(str);
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("5.55") === 6); // logs true

/*
Since they ask you to parse it, I'll try again:

algorithm:
-create object with integers 0 to 9
  -keys are string numbers, values are numbers
-loop through string
  -if the number matches the key, return that value
  - get it to return your value in the correct place...
    -depending on index in string, multiply by 10?
    -maybe work backwards from ones place
*/

let intDict = {
  1 : 1,
  2 : 2,
  3 : 3,
  4 : 4,
  5 : 5,
  6 : 6,
  7 : 7,
  8 : 8,
  9 : 9,
  0 : 0,
};


function stringToIntParse(str) {
  let digits = Object.keys(intDict);
  let tensPlace;
  let result = 0;
  for (let index = 0; index < str.length; index += 1) {
    tensPlace = ((str.length - 1) - index);
    if (digits.includes(str[index])) {
      result += (intDict[str[index]] * (10 ** tensPlace));
    }
  }
  return result;
}

console.log(stringToIntParse("4321") === 4321); // logs true
console.log(stringToIntParse("570") === 570); // logs true

/* BEST solution

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

*/

/*
Problem:
-input
  -String of digits
-output
  -number as integer
-internal
  -NO parseInt or Number
  -don't worry about + or -
  -don't worry about invalud characters

Examples:
-see above
-floats?

Data types:
-input string
-output number
-internal
  -array of numbers?
  -probably just a string

Algorithm:
-return + str
-OR
-return Math.roung(str);

*/
