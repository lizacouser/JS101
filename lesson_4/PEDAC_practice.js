// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

/*
Input: string
Output: array of all the substrings that are palindromes
Explicit rules:
  -palindrome words are case sensitive
  -all palindromic substrings must be returned
Implicit rules:
  -substrings returned as elements in array
  -substrings should be in order of index
  -no substrings returns empty array
  -empty string retruns empty array
  -substrings must be 2+ characters long

*/