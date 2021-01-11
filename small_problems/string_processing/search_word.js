/*
PART 1
Problem:
-input word and string
-output integer representing # of times word appears in text
-rules
  -word and text inputs always provided
  -all word breaks are spaces
  -words may include characters
  -('est,' count is 2, 'est' count is 0)
  -capitalization ignored when searching ('sed' === 'Sed')

Examples:
const text =
'Sed ut perspiciatis unde omnis iste natus
error sit voluptatem accusantium doloremque
laudantium, totam rem aperiam, eaque ipsa
quae ab illo inventore veritatis et quasi
architecto beatae vitae dicta sunt
explicabo. Nemo enim ipsam voluptatem quia
voluptas sit aspernatur aut odit aut fugit,
sed quia consequuntur magni dolores eos qui
ratione voluptatem sequi nesciunt. Neque
porro quisquam est, qui dolorem ipsum quia
dolor sit amet, consectetur, adipisci velit,
sed quia non numquam eius modi tempora
incidunt ut labore et dolore magnam aliquam
quaerat voluptatem. Ut enim ad minima veniam,
quis nostrum exercitationem ullam corporis
suscipit laboriosam, nisi ut aliquid ex ea
commodi consequatur? Sed quis autem vel est,
iure reprehenderit qui in ea voluptate velit
esse quam nihil molestiae consequatur. Ut
enim ad minima veniam, quis nostrum
exercitationem ullam corporis suscipit
laboriosam, nisi ut aliquid ex ea
commodi consequatur?';

searchWord('sed', text);     // 4
searchWord('est', text);     // 0
searchWord('est,', text);    // 2

Data:
-input strings
-output number
-internal array of words

Algorithm:
option 1
-given a word and a string
-set regex to `/${word}/g`
-return string.match(regex).length;

option 2
-given a word and a text
-create array of lower case words using text.toLowerCase().split(' ')
-set variable count to 0
-for each wordInText in text
  -if wordInText === word.toLowerCase()
    -count += 1
-return count;
*/

function searchWord(word, text) {
  let words = text.split(' ');
  let count = 0;
  words.forEach(wordInText => {
    if (wordInText.toLowerCase() === word.toLowerCase()) {
      count += 1;
    }
  });
  return count;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

searchWord('sed', text);     // 4
searchWord('est', text);     // 0
searchWord('est,', text);    // 2

/*
PART 2
Problem:
-input word, string
-output text with every instance of word uppercase
 and enclosed in '**' '**'

Example:
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';
rchWord('sed', text);
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"

Data:
-input strings
-output string
-internal array of words

Algorithm:
-given a string and words
-split string into array of words
-map words, changing any instance of searchWord to **SEARCHWORD**
-return mapped array.join(' ');
*/

function searchWord(searchWord, text) {
  return text.split(' ')
    .map(word => {
      if (word.toLowerCase() === searchWord.toLowerCase()) {
        console.log(word.toUpperCase());
        return `**${word.toUpperCase()}**`
      }
      return word;
    })
    .join(' ')
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

searchWord('sed', text);
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"

// with REGEX!!
function searchWord(word, text) {
  let regex = new RegExp(word, "gi");
  return text.replace(regex, `**${word.toUpperCase()}**`);
}