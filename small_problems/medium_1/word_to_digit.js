/*
Problem
-input string
-output string with every number word converted to its digit character
-rules
  -when splitting by ' ', don't forget punction... (four. => 4.)
-questions
  -capitalization shouldn't matter? (Five or five both translate to 5)
  -return or print
  -number within word?
  -what about numbers above nine?

Examples:
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
wordToDigit('I went to Five Guys.'); // 'I went to 5 Guys.'
wordToDigit('fourever'); // '4ever.'

Data:
-input string
-output string
-internal
  -object translator (stringNum: num)
  -split into array of words?

Algorithm:
-given a string
-make translator ('five': 5)
-split string string by ' ' and assign to 'array' variable
-map words in the array
  -for every key in Object.keys(translator) {
    if word.toLowerCase().includes(key)
    return word.replace(key, translator[key]);
  -else return word;
-return mapped array

//how to separate period??

*/

function wordToDigit(string) {
  let wordDigitTranslator = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
    six: 6, seven: 7, eight: 8, nine: 9
  };

  Object.keys(wordDigitTranslator).forEach(numberWord => {
    let numberWordRegex = new RegExp(numberWord, 'gi');
    string = string.replace(numberWordRegex, wordDigitTranslator[numberWord]);
  });

  console.log(string);
}


// student proposed solution using no loop
function wordToDigitNoLoop(string) {
  let wordDigitTranslator = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
    six: 6, seven: 7, eight: 8, nine: 9
  };

  return wordDigitTranslator.replace(/\w+/g, (word) => {
    const key = word.toLowerCase();
    return Object.keys(wordDigitTranslator).includes(key) ?
      wordDigitTranslator[key] :
      word;
  });
}


wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
wordToDigit('I went to Five Guys.'); // 'I went to 5 Guys.'
wordToDigit('fourever'); // '4ever.'