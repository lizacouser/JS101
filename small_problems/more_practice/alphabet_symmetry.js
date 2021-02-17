/*
Consider the word "abode". We can see that the letter a is
in position 1 and b is in position 2. In the alphabet, a
and b are also in positions 1 and 2. Notice also that d
and e in abode occupy the positions they would occupy in
the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number
of letters that occupy their positions in the alphabet
for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase
and lowercase. No spaces.

*/

/*
-input array of words
-output array of number of letters that occupy alphabet position
-rules
  -input will consist of alphabet characters
  -capitalization ignored (ABc ==> 3)
  -empty string?

examples:
solve(["abode","ABc","xyzD"]) = [4, 3, 1]
solve(['howdy', 'What', '']) = [1, 0, 0]

datatypes:
-internal
  -string of letters in alphabet
  -arrays

algorithm:
# given an array of strings
map each array of strings to number of characters in alphabet position
return mapped array

map function will take a string
create correctCount = 0
loop through characters, index in word
if index is the same as index of character in alphabet
correctCount += 1
return count
*/

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function solve(strings) {
  return strings.map(correctPositionCount);
}

function correctPositionCount(string) {
  let correctCount = 0;

  string.toLowerCase().split('').forEach((char, index) => {
    if (index === ALPHABET.indexOf(char)) {
      correctCount += 1;
    }
  });

  return correctCount;
}

console.log(solve(["abode","ABc","xyzD"])); // [4, 3, 1]
console.log(solve(['howdy', 'What', ''])); // [1, 0, 0]