/*
Problem:
-input string
-output array of all palindromic substrings in a string
-rules
  -substring same forwards and backwards
  -substring min length is 2
  -should be sorted by order of appearance in string
  -duplicates included
  -cahrs included (-a- is a palindrome)
  -case + chars matters ('Aba' and 'a ba' are not palindromes)
-questions
  -empty string returns empty array?

Examples:
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

Data types:
-input string
-output array
-internal arrays, string by index?

Algorithm:
-given a string
-create an array of all substrings in string in order of appearance
-set substrings index to 0
-set empty array palindromes
-while index is less than length of substrings list
  -check if substrings[index] is a palindrome
    -split into array of chars
    -if array.join === array.reverse.join && substring.length > 1;
      -return true
  -if substrings[index] is a palindrome
    -push substrings[index] to palindromes
  -index += 1
  //alternatively filter substrings by whether they are palindromes, 
  // and save to palindromes
-return palindromes

*/
function isPalindrome(string) {
  return (string.length > 1) && (string === string.split('').reverse().join(''));
}

function leadingSubstrings(string) {
  let substrings = [];
  for (let endIndex = 1; endIndex <= string.length; endIndex += 1) {
    substrings.push(string.slice(0, endIndex));
  }
  return substrings;
}

function getSubstrings(string) {
  let substrings = [];
  while (string.length > 0) {
    substrings.push(...leadingSubstrings(string));
    string = string.slice(1);
  }
  return substrings;
}

function palindromes(string) {
  let substrings = getSubstrings(string);
  return substrings.filter(substring => isPalindrome(substring));
  // ohhh you should actually write substrings.filter(ispalindrome) 
  // because you don't need to initialize an arrow function
}


palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]