/*
Reverse It (Part 2)
Write a function that takes a string argument
containing one or more words, and returns a
new string containing the words from the string
argument. All five-or-more letter words should
have their letters in reverse order. The string
argument will consist of only letters and spaces.
Words will be separated by a single space.

Examples:
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
*/

/*
P:
-input string with 1 + words
-output new string with 5+ letter words writtern in reverse order
-rules: only letters and spaces, words separated by single space

E:
-see above

D:
-string
-array

A:
-given a string
-split into words array
-map words to new array with flipIfFive function
return array

-flipIfFive =
  -if word.length >= 5
    -return word.split('').reverse().join('');
  -else
    -return word;
*/

function flipIfFive(word) {
  if (word.length >= 5) {
    return word.split('').reverse().join('');
  } else {
    return word;
  }
}

function reverseWords(string) {
  return string.split(' ').map(word => flipIfFive(word)).join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
