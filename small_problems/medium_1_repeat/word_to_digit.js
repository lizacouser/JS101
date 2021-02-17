/*
-input sentence string
-output string with every occurrence of a number word ("zero" "one" "two" "three" etc) converted to digit character
-rules:
  -handle punctuation (regular split doesn't necessarily work)
  -capitalization? (Four => 4)
  -word within a word (sixties => 6ties?)

ex:
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
wordToDigit('Please call me at Five fiVe five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
wordToDigit('Remember the sixties?');
// "Remember the sixties?"

data:
-input string
-output string
-internal
  -translator object ==> search by key 'five', value 5
  -array value at index 5 is "five"?
  -string replace not an array iterator
  -use regex with word-ending?

algorithm:
#given a string
create an array of number word strings from zero go nine
iterate through number words,
make a new regexp with number word on a word ending, global
replace word with index of word
*/

function wordToDigit(sentence) {
  let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  let result = sentence;
  digits.forEach((digit, index) => {
    let regex = new RegExp("\\b" + digit + "\\b", "gi");

    result = result.replace(regex, index);
  });

  return result;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
console.log(wordToDigit('Please call me at Five fiVe five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('Remember the sixties?'));
// "Remember the sixties?"