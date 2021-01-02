/*
Double Char (Part 1)
Write a function that takes a string, doubles
every character in the string, and returns the
result as a new string.

Examples:
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
*/

/*
P:
-input string of chars
-output string of doubled chars

E:
-see above
-capitals stay the same
-empty string returns empty string

D:
-input string
-output string
-internal:
  -array of chars + push?
  -string + concat?

A: 
-given a string of chars
-create new empty string repeated
-for each char in string
  -repeated += (char + char)
-return repeated
*/

function repeater(string) {
  let repeated = "";
  for (let charIdx = 0; charIdx < string.length; charIdx += 1) {
    repeated += (string[charIdx] + string[charIdx]);
  }
  return repeated;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

// with array and map
function repeater2(string) {
  let repeated = string.split('').map(char => char + char);
  return repeated.join('');
}

repeater2('Hello');        // "HHeelllloo"
repeater2('Good job!');    // "GGoooodd  jjoobb!!"
repeater2('');             // ""