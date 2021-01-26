/*
BONUS FEATURES

1) Improved Join
- write a function joinOr()
- add an 'or' between the final two elements of 'choose a square' prompt
- example: => Choose a square: 1, 2, 3, 4, 5, 6, 7, 8, or 9
-input array of elements, optnl delimiter (w/ spaces), optnl andOr (w/o spaces)
  -default params are ', ' and 'or '
  -empty array returns empty string
  -if length of array is just two, no comma
  -if length of array is greater than two, yes oxford comma
-LOGIC:
  -if no elements, return empty string
  -if one element, return element
  -if two elements, return elements connected by conjunction
  -if three or more elements
    -if not last element, add element and delimiter
    -if last element, add conjunction and element

Examples:
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"

Data types:
-input array
-output string
-internal arrays

Algorithm:
-given an array, a delimiter, and a conjunction
-create an empty string 'result'
-take an element
  -is it alone? return element
  -is it the first of two? append element
  -is it the last of more than one? append conjunction, then append element
  -is it the first of more than two? append element, then append delimiter
-USE JOIN AND SLICE!!
*/

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}


joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"
