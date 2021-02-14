/*
-input two strings
-output boolean if any characters of string 1 can be rearranged to match string 2
-rules
  -only lowercase alphabet characters used
  -


examples:
-rkqodlw, world => true
-katas, steak => false
-cedewaraaossoqqyt, codewars => true
-candy, dayy => false

data
-input strings
-output boolean
-internal
  -array of chars?
  -strings?

algorithm
-check to see if string1 contains all the characters of string2
-chars1 = split string1 into array of chars
//-chars2 = split string2 into array of chars
-iterate through string2 by character
  -if chars1 doesn't include character, return false
  -if chars1 includes character
  -remove character from array
-return true

*/

function scramble(testString, searchString) {

  for (let index = 0; index < searchString.length; index += 1) {
    let searchChar = searchString[index];

    if (!testString.includes(searchChar)) {
      return false;
    }

    testString = testString.replace(searchChar, '');
  }

  return true;
}

console.log(scramble('candy', 'day'));
console.log(scramble('candy', 'dayy')); //false
console.log(scramble('javaass', 'jjss')); //false
console.log(scramble('rkqodlw', 'world'));
console.log(scramble('katas', 'steak')); //false
console.log(scramble('javascript', 'scriptjava'));
console.log(scramble('scriptingjava', 'javascript'));