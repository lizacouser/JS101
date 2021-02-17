/*
A pangram is a sentence that contains every single letter
of the alphabet at least once. For example, the sentence
"The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is
irrelevant).

Given a string, detect whether or not it is a pangram.
Return True if it is, False if not. Ignore numbers and
punctuation.

console.log(isPanagram("The quick brown fox jumps over the lazy dog.")) // true
console.log(isPanagram("This is not a pangram.")) // false
console.log(isPanagram(2)) // false

*/

/*
-input string
-output boolean true if pangram
-rules
  -pangram must contain every letter in alphabet at least once
  -return false if input invalid
  -ignore punctuation
  -case irrelevant (count capitalized letters)

data:
-internal arrays

algorithm:
'abcdefghijklmnopqurstuvwxyz'
given a string
convert string to lowercase
create an empty array seen
iterate through characters of string
  -check if it's alphbetical
  -check if we've seen the character
    if not, add to seen array
-return seen.length === 26

if we see it, remove from alphabet
*/
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function isPanagram(string) {
  let seen = [];

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index].toLowerCase();

    if (!ALPHABET.includes(char)) continue;

    if (!seen.includes(char)) {
      seen.push(char);
    }
  }
  return seen.length === 26;
}

console.log(isPanagram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPanagram("This is not a pangram.")); // false
console.log(isPanagram(2)); // false

function isPanagram2(string) {
  let alphabet = ALPHABET.slice();

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index].toLowerCase();

    if (alphabet.includes(char)) {
      alphabet = alphabet.replace(char, '');
    }

  }
  return alphabet.length === 0;
}

console.log(isPanagram2("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPanagram2("This is not a pangram.")); // false
console.log(isPanagram2(2)); // false