/*
Problem:
-input string
-output sorted array all substrings that start with first letter
-rules
  -substrings start at beginning of string (char at index 0)
  -empty string returns empty array?
  -substrings ordered from shortest to longest
  -capitalization not relevant

Examples:
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

Data types:
-input string
-output array of strings
-internal arrays

Algorithm:
-given a string
-create an empty array 'substrings'
-add all substrings starting with first letter to 'substrings'
  -example:
    -string.slice(0, 1)
    -string.slice(0, 2)
    -string.slice(0, 3) etc until string.slice(0, string.length);
  -for (let endIndex = 1; endIndex <= string.length; endIndex += 1)
    -substrings.push(string.slice(0, endIndex))
-return array
*/

function leadingSubstrings(string) {
  let substrings = [];
  for (let endIndex = 1; endIndex <= string.length; endIndex += 1) {
    substrings.push(string.slice(0, endIndex));
  }
  return substrings;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// with list processing functions:
// split string into 'arrayOfChars' with delimiter ''
// ['a', 'b', 'c']
// arrayofChars.slice[0, 1].join // ['a'] -> a
// arrayofChars.slice[0, 2].join // ['a', 'b'] -> ab
// arrayOfChars.slice[0, 3].join // ['a', 'b', 'c'] -> abc
// map [a, b, c] by index to make sliced arrays and join

function leadingSubstrings2(string) {
  let arrayOfChars = string.split('');
  return arrayOfChars.map((_, index) => arrayOfChars.slice(0, index + 1).join(''));
}

leadingSubstrings2('abc');      // ["a", "ab", "abc"]
leadingSubstrings2('a');        // ["a"]
leadingSubstrings2('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
