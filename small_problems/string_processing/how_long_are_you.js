/*
Problem:
-input string
-output array fo strings with every word in string + ' ' + word's length
-rules
  -if empty string or no argument, return empty array
  -words include characters (separated by spaces)
  -include duplicates

Examples:
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

Data:
-input string
-output array of strings
-internal
  -array of words

Algorithm:
-given a string (default string = '')
-split string into array of words with ' '
-map array of words to say word + ' ' + word.length
-return mapped array
*/

function wordLengths(string = '') {
  if (string.length < 1) return [];
  return string.split(' ').map(word => `${word} ${word.length}`);
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []
