/*
Alphabetical Numbers
Write a function that takes an array of integers between
0 and 19, and returns an array of those integers sorted
based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight,
nine, ten, eleven, twelve, thirteen, fourteen, fifteen,
sixteen, seventeen, eighteen, nineteen

Example:
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

*/

/*
Problem:
-input array of integers between 0 and 19
-output array of integers sorted alphabetically
-questions
  -what happens if the input is out of bounds
  -a new array or the old array?
  -two of the same number?
  -empty array?
-rules:
  -all numbers between 0 and 19

Example:
-see above

Data types:
-array, ref by index to translate
-input array of numbers
-output array numbers

Algorithm:
-given an array of ints between 0 and 19
-create array 'englishNumbers' of english words corresponding with numeric idx
-translate to english
  -map integers to new array 'translated' by referencing 'englishNumbers'
-sort 'translated'
-translate back to numbers
  -map integers to new array 'translated' by referencing 'englishNumbers'
-return
*/

function alphabeticNumberSort(arrayOfNumbers) {
  let englishNumbers = 'zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen'.split(', ');

  let translated = arrayOfNumbers.map(number => englishNumbers[number]);
  let sorted = translated.sort();
  return sorted.map(translatedNum => englishNumbers.indexOf(translatedNum));
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]); // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

/*
Proposed solution: (writing out sort function without making two translated arrays)

let NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function wordSort(num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return array.sort(wordSort);
}
*/