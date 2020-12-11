/*
Write a function that takes one argument,
a positive integer, and returns a string
of alternating '1's and '0's, always
starting with a '1'. The length of the
string should match the given integer.

Examples:
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
*/

/*
Problem:
-input
  -positive integer
-output
  -string of alternating 1s and 0s, starting with 1
  -string length matches length of integer

Examples:
-see above
-stringy(0) should be ""

Datatypes:
-strings, for loop

Algorithm:
-given a positive int lenth
-make an empty string result
-loop through length times
  -if even iteration, result += '1'
  -if odd iteration, result += '0'
*/

function stringy(length) {
  let resultString = '';
  for (let iter = 0; iter < length; iter += 1) {
    if (iter % 2 === 0) {
      resultString += '1';
    } else {
      resultString += '0';
    }
    // alternatively logic
    // let number = ((idx % 2) === 0) ? 1 : 0;
    // result += number;
  }
  console.log(resultString);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
stringy(0);    // ""