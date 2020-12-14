/*
Write a function that returns true if its
integer argument is palindromic, or false
otherwise. A palindromic number reads the
same forwards and backwards.

Examples:
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
*/

function isPalindromicNumber(num) {
  let numString = String(Number(num));
  console.log(numString === numString.split('').reverse().join(''));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

/*
Problem:
same as isPalindrome, but you have to convert the number to a string...
*/

