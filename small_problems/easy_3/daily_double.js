/*
Write a function that takes a string argument and
returns a new string that contains the value of
the original string with all consecutive duplicate
characters collapsed into a single character.

Examples:
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

*/

let crunch = string => {
  if (typeof string !== 'string') return 'Invalid string';

  let characters = string.toLowerCase().split('');

  let result = characters.reduce((singleChars, char) => {
    if (char !== singleChars[singleChars.length - 1]) {
      singleChars.push(char);
    }
    return singleChars;
  }, []);
  return result.join('');
};

console.log(crunch('HhahHahHa'));                  // "hahaha"
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""


//with regular expressions
// i don't understand this yet, but for future reference
function crunch2(string) {
  return string.replace(/[^\w\s]|(.)(?=\1)/g, "");
}

console.log(crunch2('ddaaiillyy ddoouubbllee'));

/*
Problem:
-input
  -string with possible duplicate characters
-output
  -new string with duplicate characters removed
-internal
  -if letter is not a duplicate, keep it in
  -if empty string, return empty string
  -only matters if the letters are next to each other (leters vs letrs)

Examples:
-see above
-should not take non-strings
-should remove duplicate letter even if one duplicate is capitalized

Datatypes:
-input string
-output string
-internal
  -we want to loop through and remove elements, so i think arrays

Algorithm:
-given a string
-if not a string return invalid;
-split string into array of characters
-reduce array (accumulator is the new array)
-join array and return
  */
