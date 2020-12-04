/*
Write a function that returns the
next to last word in the String
passed to it as an argument.

Words are any sequence of
non-blank characters.

You may assume that the input String
will always contain at least two words.

Examples:
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
*/


/*
Problem:
-input
  -string with 2+ words (non-blank characters)
-output
  -penultimate word in string
-internal
  -words include any sequence of non-blank characters

Examples:
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate("this sentence has a lot of words @@@ Liza") //logs @@@

Datatypes:
-input string
-output string
-internal array of strings split at " "

Algorithm:
-given a multi-word string
-split by " " into array words
-return word at index words.length - 2
*/

//penultimate
function penultimate(str) {
  let words = str.trimEnd().split(' ');
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate("this sentence has a lot of words @@@ Liza  ")); //logs @@@

//middle
function middle(str) {
  if (str.trim() === '') return "Empty string.";
  let words = str.trim().split(' ');
  if (words.length % 2 === 0) return "There is no middle word.";
  let middleIndex = (words.length - 1) / 2;
  return `The middle word is ${words[middleIndex]}`;
}

console.log(middle("this sentence has a lot of words @@@ Liza")); //logs lot
console.log(middle("this sentence has a lot of words liza ")); //logs a
console.log(middle("this sentence")); //logs this
console.log(middle("sentence")); //logs sentence
console.log(middle("")); //logs "Empty string"


