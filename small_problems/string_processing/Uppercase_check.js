/*
Problem:
-input string
-output boolean if all uppercase
-rules
  -ignore non alphabetic characters (return true)
  -empty string is true

Example:
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

Data:
-input string
-output boolean
-internal string ref by index

Algorithm:
-given a string
-set character index to 0
-while index of character < string length
  -if character at index !== character at index .toUpperCase()
    -return false
-return true

NEVERMIND you can just convert full string to upper case duh
  */


function isUppercase(string) {
  return string.toUpperCase() === string;
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true