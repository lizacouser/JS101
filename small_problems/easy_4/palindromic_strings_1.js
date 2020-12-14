/*
Write a function that returns true if the
string passed as an argument is a palindrome,
or false otherwise. A palindrome reads the same
forwards and backwards. For this problem, the
case matters and all characters matter.

Example:
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
*/

/*
Problem:
-input
  -string
-output
  -is it a palindrom
-internal
  -case matters
  -characters matter
  -returns boolean

Example:
-see above
-even number of chars
-odd number of chars
-non alphanumeric chars (including whitespace?)
-capitals

Data types:
-input string
-output boolean
-internal array? maybe just loop through chars

Algorithm:
-given a string
-let startInd = 0
-let endInd = string.length - 1;
-let palindrome = true;
-while (startInd < endInd)
  -if (string[startIndex] !== string[endIndex])
    -palindrome = false;
    -break;
  -startInd += 1
  -endInd -= 1
-return palindrome;
*/

function isPalindrome(string) {
  let startInd = 0;
  let endInd = string.length - 1;
  let palindrome = true;

  while (startInd < endInd) {
    if (string[startInd] !== string[endInd]) {
      palindrome = false;
      break;
    }
    startInd += 1;
    endInd -= 1;
  }

  console.log(palindrome);
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

// A WAY BETTER SOLUTION BELOW!!!
// shoulda done arrays

function isPalindromeVersionTwo(string) {
  return string === string.split('').reverse().join('');
}

console.log(isPalindromeVersionTwo('this is a better function'));