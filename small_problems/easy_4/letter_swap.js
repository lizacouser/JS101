/*
Given a string of words separated by spaces,
write a function that swaps the first and
last letters of every word.

You may assume that every word contains at
least one letter, and that the string will
always contain at least one word. You may
also assume that each string contains
nothing but words and spaces, and that there
are no leading, trailing, or repeated spaces.

Examples:
swap('Oh what a wonderful day it is');
// "hO thaw a londerfuw yad ti si"

swap('Abcde');
// "ebcdA"

swap('a');
// "a"

*/


/*
Problem:
-input
  -string of words separated by spaces
-output
  -string of words with first and last letters swapped
-implicit
  -every word contains >= 1 letter
  -string contains >= 1 word
  -strings are always words and spaces, with no excess spaces
  -capitals stay with their letter

Examples:
-see above

Datatypes:
-input string
-output string
-internal
  -array of words split by ' '
  -within words swap indexes

Algorithm:
-given a string of words
-split string into array words (delimiter ' ')
-let swappedWords = map each word in words
  -let firstLetter = word[0];
  -let lastLetter = word[word.length - 1];
  -if firstLetter === lastLetter
    -return word;
  -else
    -return lastLetter + word.slice(0, word.length - 1) + lastLetter;
-return swappedWords.join();
*/

function swap(string) {
  let words = string.split(' ');

  let swappedWords = words.map(word => {
    let firstLetter = word[0];
    let lastLetter = word[word.length - 1];

    if (firstLetter === lastLetter) {
      return word;
    } else {
      return lastLetter + word.slice(1, word.length - 1) + firstLetter; //word.length - 1 could also just be -1
    }
  });
  console.log(swappedWords.join(' '));
}

swap('Oh what a wonderful day it is');
// "hO thaw a londerfuw yad ti si"

swap('Abcde');
// "ebcdA"

swap('a');
// "a"