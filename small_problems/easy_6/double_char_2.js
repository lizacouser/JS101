/*
Double Char (Part 2)
Write a function that takes a string,
doubles every consonant character in
the string, and returns the result as
a new string. The function should not
double vowels ('a','e','i','o','u'),
digits, punctuation, or whitespace.

Examples:
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
*/

/*
P:
-input string
-output string with consonants repeated

E:
-see above
-y counts as consonant
-LOWER CASE!

D:
-array of consonants to cross check
-input string
-output string
-internal array of chars

A:
-create array of consonants
-given a string
-split string to charArray
-create empty string repeated
-for each char in charArray
  if (consonants.includes(char)) {
    repeated += char;
  }
  repeated += char;
-return repeated
*/

const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j',
                    'k', 'l', 'm', 'n', 'p', 'q', 'r',
                    's', 't', 'v', 'w', 'x', 'y', 'z']

function doubleConsonants(string) {
  let repeated = '';
  string.split('').forEach(char => {
    if (CONSONANTS.includes(char.toLowerCase())) {
      repeated += char;
    }
    repeated += char;
  });
  console.log(repeated);
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""