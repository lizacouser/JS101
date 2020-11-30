/*
Write a function that determines and returns
the ASCII string value of a string passed in
as an argument. The ASCII string value is the
sum of the ASCII values of every character in
the string.

(You may use String.prototype.charCodeAt() to
determine the ASCII value of a character.)

Examples:
asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

*/


//with strings
let asciiValue = str => {
  if (typeof str !== 'string') return 'Input must be a string.';

  let result = 0;

  for (let index = 0; index < str.length; index += 1) {
    result += str.charCodeAt(index);
  }

  return result;
};

console.log(asciiValue('Four score'));      // 984
console.log(asciiValue('Launch School'));   // 1251
console.log(asciiValue('a'));               // 97
console.log(asciiValue(''));                // 0
console.log(asciiValue(5));                 // 'Input must be a string.'
console.log(asciiValue(undefined));         // 'Input must be a string.'
console.log(asciiValue(true));              // 'Input must be a string.'
console.log(asciiValue(null));              // 'Input must be a string.'

/* With array of chars

let asciiValue2 = str => {
  if (typeof str !== 'string') return 'Input must be a string.';
  if (str === '') return 0;
  let chars = str.split('');
  let codes = chars.map(char => char.charCodeAt());
  let result = codes.reduce((total, currentCode) => total + currentCode);
  return result;
};


console.log(asciiValue2('Four score'));      // 984
console.log(asciiValue2('Launch School'));   // 1251
console.log(asciiValue2('a'));               // 97
console.log(asciiValue2(''));                // 0
console.log(asciiValue2(5));                 // 'Input must be a string.'
console.log(asciiValue2(undefined));         // 'Input must be a string.'
console.log(asciiValue2(true));              // 'Input must be a string.'
console.log(asciiValue2(null));              // 'Input must be a string.'
*/

/*
Problem:
-input
  -string of characters
-internal
  -find value of each character in string
  -sum those values
-output
  -sum of character values

Examples:
-see above
-empty string returns 0! (charCode is NaN...)
-control for not a string

Data types:
-input: string
-output: number
-internal:
  -strings (iterate through by index and sum)
  -OR array of characters (map and reduce)

Algorithm with arrays:
-given a string str
-if empty string, return 0
-split str into array of characters chars using delimiter ''
-SET codes = chars.map(char => char.charCodeAt())
-SET value = codes.reduce((total, currentCode) => total + currentCode);
-return value;

Algorithm with string:
-given a string str
-SET sum = 0
-for (let i = 0; i < string.length; i += 1) {
  sum += string.charCodeAt(i);
} //this returns 0 for empty string cuz it doesn't got through loop
-return sum

*/
