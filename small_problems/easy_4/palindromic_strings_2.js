/*
This time your function should be case-insensitive,
and should ignore all non-alphanumeric characters.
*/

function isPalindrome(string) {
  console.log(string === string.split('').reverse().join(''));
}

function isRealPalindrome(string) {
  let realString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  return isPalindrome(realString);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

/*
Problem:
-convert everything to lowercase
-remove non-alphanumeric characters

Examples:
see above

Data types:
-array still

Algorithm:
-regex replace non-alphanumeric
-toLowerCase()
-call isPalindrome from last assignment
*/

