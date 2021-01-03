/*
Matching Parentheses?
Write a function that takes a string as argument,
and returns true if all parentheses in the string
are properly balanced, false otherwise. To be
properly balanced, parentheses must occur in
matching '(' and ')' pairs.

Examples:
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
The tests above should log true.

Note that balanced pairs must each start with a (, not a ).
*/

/*
P:
-input string
-output
  -true if balanced parenth
  -false if not
-rules: ( + ) pairs

E:
-see above

D:
-regex
-strings
-number to count

A:
-count each type of parenth
-return left === right

*/
let punctuationPairs = {
  '(': ')',
  '{': '}',
  '[': ']',
  '"': '"',
  "'": "'"
};

function isBalanced(string) {
  let balancedArray = Object.keys(punctuationPairs).map(openPunct => {
    return testPunctBalance(string, openPunct);
  });

  return balancedArray.every(punct => punct === true);
}

function testPunctBalance(string, openPunct) {
  let openCount = 0;
  if (openPunct === "'" || openPunct === '"') {
    let quoteCount = 0;
    for (let idx = 0; idx < string.length; idx++) {
      if (string[idx] === openPunct) quoteCount += 1;
    }
    if (quoteCount % 2 === 1) return false;
  } else {
    for (let idx = 0; idx < string.length; idx++) {
      if (string[idx] === openPunct) {
        openCount += 1;
      } else if (string[idx] === punctuationPairs[openPunct]) {
        openCount -= 1;
      }
      if (openCount < 0) return false;
    }
  }
  return openCount === 0;
}

console.log(isBalanced("Wh'a(t {is) t'h}is?") === true);
console.log(isBalanced("Wh{at is} [this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("He'y!") === false);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);