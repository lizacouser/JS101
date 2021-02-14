/*
-input two strings
-boolean if a substring appears in both strings
-rules
  -only substrings longer than 1 letter long
  -cpaitalization ignored ('Banana === BANAna')
  -empty string input, false
  -two empty strings, false
  -accepts numeric characters

Examples
-console.log(substringTest('Something', 'Fun'); // false
-console.log(substringTest('Something', 'Home'); // true
-console.log(substringTest('Something', ''); // false
-console.log(substringTest('', 'Fun'); // false
-console.log(substringTest('BANANA', 'banana'); // true
-console.log(substringTest('test', 'lllt'); // false
-console.log(substringTest('', ''); // false
-console.log(substringTest('12345', '54123'); // true
-console.log(substringTest('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou'); // true

data types
-input stings
-output boolean
-internal
  -array of chars?
  -strings + sliced strings

Algorithm:
-iterate through nested for loop of indices, creating array of substrings for word 1
- filter array to only include substrings of length 2 +
-do the same thing, creating array of substrings for word 2
-iterate through substrings1, checking if substrings2 includes any substring (some?)

*/

function substringTest(str1, str2) {
  let substrings1 = getSubstrings(str1.toLowerCase());
  let substrings2 = getSubstrings(str2.toLowerCase());

  return substrings1.some(substr => substrings2.includes(substr));
}

function getSubstrings(str) {
  let substrings = [];
  for (let startIndex = 0; startIndex <= str.length; startIndex += 1) {
    for (let endIndex = startIndex + 1; endIndex <= str.length; endIndex += 1) {
      substrings.push(str.slice(startIndex, endIndex));
    }
  }
  return substrings.filter(substr => substr.length >= 2);
}

console.log(substringTest('Something', 'Fun')); // false
console.log(substringTest('Something', 'Home')); // true
console.log(substringTest('Something', '')); // false
console.log(substringTest('test', 'lllt')); // false
console.log(substringTest('BANANA', 'banana')); // true
console.log(substringTest('', '')); // false
console.log(substringTest('12345', '54123')); // true
console.log(substringTest('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou')); // true
console.log(substringTest('', 'Fun')); // false