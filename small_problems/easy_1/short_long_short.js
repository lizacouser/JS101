/*
Write a function that takes two strings
as arguments, determines the longer of
the two strings, and then returns the
result of concatenating the shorter string,
the longer string, and the shorter string
once again. You may assume that the
strings are of different lengths.

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
*/

let shortLongShort = (string1, string2) => {
  let longString;
  let shortString;
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return 'Invalid String';
  } else if (string1.length > string2.length) {
    longString = string1;
    shortString = string2;
  } else if (string1.length < string2.length) {
    shortString = string1;
    longString = string2;
  }
  return shortString + longString + shortString;
};

//better version doesn't declare variables longString and shortString
// it just returns 's1 + s2 + s1' or 's2 + s1 + s2'

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));
console.log(shortLongShort('', '  '));
console.log(shortLongShort(1, 'xyz'));
console.log(shortLongShort(null, 'xyz'));
console.log(shortLongShort(undefined, 'xyz'));

/*
Problem:
-input
  -two strings of different lengths
-internal rules
  -compare lengths and save one as long, one as short
  -concatenate short + long + short
-output
  -new string

Examples:
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
shortLongShort('', '  ');          // "   "
shortLongShort(1, 'xyz');          // "Invalid String"
shortLongShort(null, 'xyz');       // "Invalid String"
shortLongShort(undefined, 'xyz');  // "Invalid String"

Data Types:
-input: String
-internal:
  -compare lengths (String.length)
  -concatenate (+)
-output: String

Algorithm:
-function shortLongShort with two string params string1, string2
-if typeof string1 != 'string' || typeof string2 != 'string'
  -return 'Invalid String'
-if string1.length > string2.length
  -SET longString to string1
  -SET shortStrong to string2
-else
  -SET longstring to string1
  -SET shortsting to string2
-return shortString + longString + shortString

*/
