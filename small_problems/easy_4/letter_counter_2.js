/*
Modify the wordSizes function from the previous exercise
to exclude non-letters when determining word size.
For instance, the word size of "it's" is 3, not 4.

Examples:

wordSizes('Four score and seven.');
// { "3": 1, "4": 1, "5": 2 }

wordSizes('Hey diddle diddle, the cat and the fiddle!');
// { "3": 5, "6": 3 }

wordSizes("What's up doc?");
// { "2": 1, "3": 1, "5": 1 }

wordSizes('');
// {}

*/

function wordSizes(string) {
  let wordCounts = {};
  let words = string.replace(/[^A-Za-z ]/g, '').split(' ');
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
// { "3": 1, "4": 1, "5": 2 }

wordSizes('Hey diddle diddle, the cat and the fiddle!');
// { "3": 5, "6": 3 }

wordSizes("What's up doc?");
// { "2": 1, "3": 1, "5": 1 }

wordSizes('');
// {}


/*
Problem:
-same as letter_counter_1.js, but exclude characters

Examples above
Data types above + regex?

Algorithm:
-given a string of words
-make an empty object {} wordCounts
-set words to string.split(' ').replace(/[^A-Za-z]/g, '');
-forEach word in words
  -if (!wordCounts[String(word.length)])
    -wordCounts[String(word.length)] = 1;
  -else
    -wordCounts[String(word.length)] += 1;
-return wordCounts;
*/