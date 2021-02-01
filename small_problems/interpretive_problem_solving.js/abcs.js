/*
Problem:
-two sided blocks, one letter on each
-you can only spell words with one letter from each block

-input string word
-output boolean if word can be spelled with blocks
-rules:
  -case insensitive (jest & JEST are both true)
  -if B is in word, O can't be, etc.
  -checking if word contains both letters on the same block
  -also checking if there are any repeat letters (case insensitive)

-questions?
  -return or print?
  -empty string?

Examples:
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false (U:H)
isBlockWord('jest');       // true
isBlockWord('a');          // true
isBlockWord('');           // true

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

Data types:
-input string
-output is a boolean
-internal
  - [[B, O], [X, K]]
  - {B: O} but we could check word
  - char array vs string

Algorithm:
-given two sided block combinations
-given a word
- make a used characters array
- iterate through the characters in word
- if character block was in used array, return false
- else move the character block to the used array
- return true

*/
let blocks = [['B','O'], ['X', 'K'], ['D','Q'],
  ['C','P'], ['N','A'], ['G','T'], ['R','E'],
  ['F','S'], ['J','W'], ['H','U'], ['V','I'],
  ['L','Y'], ['Z','M']];

function isBlockWord(word) {
  let usedBlocks = [];
  for (let charIdx = 0; charIdx < word.length; charIdx += 1) {
    if (usedBlocks.some(block => block.includes(word[charIdx].toUpperCase()))) {
      return false;
    } else {
      let charBlock = blocks.find(
        block => block.includes(word[charIdx].toUpperCase())
      );
      usedBlocks.push([...charBlock]);
    }
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false (U:H)
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('a'));         // true
console.log(isBlockWord(''));         // true


// with strings
let blocks3 = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

function isBlockWord3(word) {
  let usedLetters = '';
  for (let charIdx = 0; charIdx < word.length; charIdx += 1) {
    let char = word[charIdx].toUpperCase();
    if (usedLetters.includes(char)) {
      return false;
    } else {
      usedLetters += blocks3.find(letterPairs => letterPairs.includes(char));
    }
  }
  return true;
}

console.log(isBlockWord3('BATCH'));      // true
console.log(isBlockWord3('BUTCH'));      // false (U:H)
console.log(isBlockWord3('jest'));       // true
console.log(isBlockWord3('a'));         // true
console.log(isBlockWord3(''));         // true


// with objects
let wordsObj = Object.fromEntries(blocks);

function isBlockWord2(word) {
  let usedKeys = [];
  let usedValues = [];

  for (let charIdx = 0; charIdx < word.length; charIdx += 1) {
    let char = word[charIdx].toUpperCase();
    if (
      usedKeys.includes(char.toUpperCase()) ||
      usedValues.includes(char.toUpperCase())
    ) {
      return false;
    } else {
      let usedBlock = Object.entries(wordsObj).find(block => {
        return block.includes(char.toUpperCase());
      });
      usedKeys.push(usedBlock[0]);
      usedValues.push(usedBlock[1]);
    }
  }
  return true;
}

console.log(isBlockWord2('BATCH'));      // true
console.log(isBlockWord2('BUTCH'));      // false (U:H)
console.log(isBlockWord2('jest'));       // true
console.log(isBlockWord2('a'));         // true
console.log(isBlockWord2(''));         // true
