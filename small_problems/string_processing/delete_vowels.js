/*
Problem:
-input array of strings
-output array of strings with vowels removed
-rules
  -capitals don't matter
  -all vowels returns empty string
  -empty array returns empty array
  -mutating? non-mutating?

Examples:
removeVowels(['abcdefghijklmnopqrstuvwxyz']);
// ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);
// ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);
// ["BC", "", "XYZ"]

Data types:
-input array
-output array
-internal array methods (map + split + filter + join)

Algorithm:
-given an array of strings
-map each string to new array removing vowels
  -given a string
  -split string ''
  -filter out vowels
    -!AEIOUaeiou.includes(char)
  -join and return
-return mapped array
*/

function removeVowels(strings) {
  return strings.map(removeVowelsFromString);
}

function removeVowelsFromString(string) {
  return string.split('')
    .filter(char => !'AEIOUaeiou'.includes(char))
    .join('');
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);
// ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);
// ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);
// ["BC", "", "XYZ"]

//with regex
function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}


//if you wanted to mutate
function removeVowels(strings) {
  for (let index = 0; index < strings.length; index += 1) {
    strings[index] = removeVowelsFromString(strings[index]);
  }
  return strings;
}

function removeVowelsFromString(string) {
  return string.split('')
    .filter(char => !'AEIOUaeiou'.includes(char))
    .join('');
}

let testArray = ['green', 'YELLOW', 'black', 'white']
removeVowels(testArray);
testArray;