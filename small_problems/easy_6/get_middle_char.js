/*
Get The Middle Character
Write a function that takes a non-empty string argument,
and returns the middle character(s) of the string. If
the string has an odd length, you should return exactly
one character. If the string has an even length, you
should return exactly two characters.

Examples:
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
*/

/*
P:
-input non-empty string
-output middle character of string
-rules:
  -if odd, return one char
  -if even, return two chars

E:
-see above

D:
-input string
-output string
-internal
  -string or array (just needs to be referenced by index)

A:
-given a non-empty string
-set lowerMiddleIndex
  -Math.ceil(string.length / 2) - 1
-if string.length is odd
  -return string[lowerMiddleIndex]
-else
  -return string.substr(lowerMiddleIndex, 2)
*/

function centerOf(string) {
  let lowerMiddleIndex = Math.ceil((string.length / 2) - 1);
  if (string.length % 2 === 0) {
    return string.substr(lowerMiddleIndex, 2);
  } else {
    return string[lowerMiddleIndex];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"