/*
Write a function that takes a string consisting of
zero or more space separated words, and returns an
object that shows the number of words of
different sizes.

Words consist of any sequence of non-space characters.

Examples:
wordSizes('Four score and seven.');
// { "3": 1, "4": 1, "5": 1, "6": 1 }

wordSizes('Hey diddle diddle, the cat and the fiddle!');
// { "3": 5, "6": 1, "7": 2 }

wordSizes("What's up doc?");
// { "2": 1, "4": 1, "6": 1 }

wordSizes('');
// {}

*/

function wordSizes(string) {
  let wordCounts = {};
  let words = string.split(' ');
  words.forEach(word => {
    if (wordCounts[word.length]) {
      wordCounts[word.length] += 1;
    } else if (word !== '') {
      wordCounts[word.length] = 1;
    }
  });
  console.log(wordCounts);
}

wordSizes('Four score and seven.');
// { "3": 1, "4": 1, "5": 1, "6": 1 }

wordSizes('Hey diddle diddle, the cat and the fiddle!');
// { "3": 5, "6": 1, "7": 2 }

wordSizes("What's up doc?");
// { "2": 1, "4": 1, "6": 1 }

wordSizes('');

// {}
/*
Problem:
-input
  -string consisting of 0+ words
-output
  -object with number of words of each different size
-implicit
  -words consist of any sequences of non-space characters
  -key is the word length, value is word count

Examples:
-see above
-edge cases...multiple spaces?

Data types:
-input string
-output object
-internal
  -array? split string into array of words
  -loop through and find lengths
  -count lengths in object counter

Algorithm:
-given a string of words
-make an empty object {} wordCounts
-set words to string.split(' ');
-forEach word in words
  -if (!wordCounts[String(word.length)])
    -wordCounts[String(word.length)] = 1;
  -else
    -wordCounts[String(word.length)] += 1;
-return wordCounts;
*/
