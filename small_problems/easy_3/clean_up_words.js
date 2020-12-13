/*
Given a string that consists of some words and
an assortment of non-alphabetic characters, write
a function that returns that string with all of
the non-alphabetic characters replaced by spaces.

If one or more non-alphabetic characters occur in
a row, you should only have one space in the result
(i.e., the result string should never have
consecutive spaces).

Examples:
cleanUp("---what's my +*& line?");    // " what s my line "
*/

function cleanUp(string) {
  let regex = /[A-Za-z]/;
  let newString = '';
  let lastCharacterWhiteSpace = false;

  for (let charIndex = 0; charIndex < string.length; charIndex++) {
    let currentCharacter = string[charIndex];

    if (currentCharacter.match(regex)) {
      newString += currentCharacter;
      lastCharacterWhiteSpace = false;
    } else if (!lastCharacterWhiteSpace) {
      newString += ' ';
      lastCharacterWhiteSpace = true;
    }
  }
  return newString;
}

console.log(cleanUp("---what's my +*& line?"));

/*
Problem:
-input
  -string of words and non-alphabetic characters
-output
  -string with non-alphabetic characters replaces by white space
-implicit
  -if mulitple non-alphabetic characters are in a row, you still
  only need one white space (never 2 spaces in a row)

Example:
-see below
-numbers, characters, think about capitalization

Datatypes:
-input string
-output string
-internal regex?

Algorithm:
-given a string string
-set regex = /^[A-Za-z]/g
-string.replace(regex, ' ')

^^ this doesn't acocunt for double space rule
-iterate through string by index
-string.replace non-globally
-if last index matched globally, replace with ''?
*/
