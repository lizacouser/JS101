/*
-input string
-output log longest sentence in string based on number of words
-output 2, log word ocunt of sentence
-word = characters separated by whitespace? (-- counts as a word)
-sentence = string ending in ., !, or ?
-when you output text, make sure to preserve punctuation and capitalization


examples: see below

data:
-strings
-arrays of sentences
-nested arrays of words?

algorithm:
-given a long string
-divide string into array of sentences
//-divide sentences into array of words (' ')
-use reduce to find the longest sentence based on word count
-print that sentence
-print the word count

*/


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';


/*
algorithm:
-given a long string
-divide string into array of sentences
  -create empty sentences array
  -while index of punctuation !== -1
    -slice array from 0 to index + 1 and add to sentences
    -start index search from last index
//-divide sentences into array of words (' ')
-use reduce to find the longest sentence based on word count
-print that sentence
-print the word count

*/

function longestSentence(str) {
  let sentences = splitSentences(str);

  let longestSentence = sentences.reduce((longest, current) => {
    let currentWordCount = getWordCount(current);
    let longestWordCount = getWordCount(longest);
    // eslint-disable-next-line max-len
    return currentWordCount > longestWordCount ? current : longest;
  });

  return (longestSentence + `\nWord count: ${getWordCount(longestSentence)}`);
}

function getWordCount(str) {
  return str.split(' ').length;
}

function splitSentences(str) {
  let sentences = [];

  let searchString = str;
  while (true) {
    let punctuationIndex = searchString.search(/[!.?]/);
    if (punctuationIndex === -1) break;
    sentences.push(searchString.slice(0, punctuationIndex + 1));
    searchString = searchString.slice(punctuationIndex + 2);
  }
  return sentences;
}

console.log(longestSentence(longText));
// Four score and seven years ago our fathers brought forth on this continent
// a new nation, conceived in liberty, and dedicated to the proposition that
// all men are created equal.
//
// The longest sentence has 30 word
console.log(longestSentence(longerText));
// It is rather for us to be here dedicated to the great task remaining
// before us -- that from these honored dead we take increased devotion
// to that cause for which they gave the last full measure of devotion
// -- that we here highly resolve that these dead shall not have died in
// vain -- that this nation, under God, shall have a new birth of freedom
// -- and that government of the people, by the people, for the people,
// shall not perish from the earth.
//
// The longest sentence has 86 word
console.log(longestSentence("Where do you think you're going? What's up, Doc?"));
// Where do you think you're going?
//
// The longest sentence has 6 word
console.log(longestSentence("To be or not to be! Is that the question?"));
// To be or not to be!
//
// The longest sentence has 6 words.