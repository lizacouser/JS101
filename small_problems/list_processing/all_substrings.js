/*
Problem:
-input string
-output array of substrings in order from start position and length
-rules
  -all substrings starting with first letter in order of length
  -all substrings starting with second letter in order of length
  -etc.

Example:
substrings('abcde');
// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

Data types:
-strings, arrays

Algorithm:
-given a string
-creat empty array substrings
-while string length is greater than 0
  -get all substrings starting with first letter
  -append to substrings and flatten
  -string = string.slice(1)
*/

function leadingSubstrings(string) {
  let substrings = [];
  for (let endIndex = 1; endIndex <= string.length; endIndex += 1) {
    substrings.push(string.slice(0, endIndex));
  }
  return substrings;
}

function substrings(string) {
  let substrings = [];
  while (string.length > 0) {
    substrings.push(...leadingSubstrings(string));
    string = string.slice(1);
  }
  return substrings;
}

substrings('abcde');

// with list processing
// split string into array of chars
// map characters by index
//  leadingSubstrings(string.slice(0))
//  leadingSubstrings(string.slice(1))

function substrings2(string) {
  let charArray = string.split('');
  return charArray.reduce((substrings, _, index) => {
    return substrings.concat(...leadingSubstrings(string.slice(index)));
  }, []);
}

substrings2('abcde');