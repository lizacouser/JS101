/*
-input array of lowercase strings
-output new array of all chars that show up in all elements of given array

-rules
  -including duplicates (bella, label, roller) // e, l , l
  - return empty array if no common chars
  -is order significant?
  -order of chars doesn't matter
  -

examples:
  -commonChars(['a', 'b']) // []
  -commonChars(['ab', 'bc']) // ['b']
  -commonChars(['bella', 'label', 'roller']) // ['e', 'l', 'l']
  -commonChars(['cool', 'lock', 'cook']) // ['c', 'o']
  -commonChars(['hello', 'goodbye', 'booya', 'random']) // ['o']
  -commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr']) // []

data:
  -input array of strings
  -output is array of chars
  -internal
    -arrays, strings


algorithm:
  -if we filter through all the characters in the first string
  -then check if every array element has that character
    -if every returns true for that char
    -we'll filter char into new array
    -also replace element with string.replace(character, '');

  calling filter on characters in first word of given array
    -filter's callback function will call every on given array
      -every's callback will check to see if element contains character


  -iterate through characters in first string of given array
  -iterate through elements of a copy of given array
    -if element contains character, reassign element to string.replace(character, '')
*/

function commonChars(arrayOfStrings) {
  let commonChars = [];

  let firstString = arrayOfStrings[0];

  for (let index = 0; index < firstString.length; index += 1) {
    let testChar = firstString[index];

    if (arrayOfStrings.every(string => string.includes(testChar))) {
      commonChars.push(testChar);

      for (let index = 0; index < arrayOfStrings.length; index += 1) {
        arrayOfStrings[index] = arrayOfStrings[index].replace(testChar, '');
      }
    }
  }

  return commonChars;
}

function commonChars2(arrayOfStrings) {
  let firstStringChars = arrayOfStrings[0].split('');

  return firstStringChars.filter(char => {
    let isCommonChar = arrayOfStrings.every(string => {
      return string.includes(char);
    });
    if (isCommonChar) {
      arrayOfStrings.forEach((_, index) => {
        arrayOfStrings[index] = arrayOfStrings[index].replace(char, '');
      });
    }

    return isCommonChar;
  });
}


console.log(commonChars2(['a', 'ba']));
console.log(commonChars2(['ab', 'bc']));
console.log(commonChars2(['bella', 'label', 'roller']));
console.log(commonChars2(['cool', 'lock', 'cook']));
console.log(commonChars2(['hello', 'goodbye', 'booya', 'random']));
console.log(commonChars2(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr']));