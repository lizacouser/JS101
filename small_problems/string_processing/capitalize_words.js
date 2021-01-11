/*
Problem:
-input string
-output  title case string
-rules
  -word is sequence of non-whitespace chars
  -empty string returns empty
  -quoted words don't get capitalized...
  -all subsequent characters returned lowercase!!!

Examples:
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

Data:
-input string
-output string
-internal array of words

Algorithm:
-given a string
-split into array of words 'words'
-map words, capitalizing each word
  -to capitalize words
    -return word[0].toUpperCase() + word.slice(1)
-return map words, joined by ' '
*/

function wordCap(string) {
  return string.split(' ').map(capitalize).join(' ');
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
