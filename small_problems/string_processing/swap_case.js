/*
Problem:
-input string
-output string with lowercase turned uppercase, and vice versa
-rules
  -non alphabet characters unchanged
  -unrelated to word separations (all character based)
  -how important is it that the characters remain unchanged

Example:
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

Data:
-input string
-output string
-internal array of chars?

Algorithm:
-given a string
-split into array of chars
-map characters, changing case
  -if char === char.toUpperCase, return char.toLowerCase()
  -else return char.toUpperCase()
-join and return
*/

function swapCase(string) {
  return string.split('')
    .map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join('');
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
