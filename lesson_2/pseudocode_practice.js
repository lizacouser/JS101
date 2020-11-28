
/* 
Informal pseudocode for a function that returns the sum of two numbers:

  Given two numbers
  Add both numbers and save to a variable
  Return sum

Formal pseudocode
  START
  # Given two integers number1, number2
  SET sum = number1 + number2
  PRINT sum
  END
*/

function getSum(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

console.log(getSum(1,2));

/* 
Pseudocode for a function that takes an array of strings, 
and returns a string that is all those strings concatenated together

  Given an array of strings
  Create an empty string and save as vairable
  Iterate through array one by one
    -for each iteration, concatenate the string
  After iterating through the collaction, return the concatenated string


Formal pseudocode:

  START
  # Given an array of strings called "strings"
  SET newString = ""
  SET iterator = 0

  WHILE iterator < length of "strings"
    newString += value at interator index of "strings"
    iterator += 1

  PRINT newString
  END
*/

function concatenateArray(strings) {
  let newString = "";
  strings.forEach(string => {
    newString += string;
  })
  return newString;
}

console.log(concatenateArray(['a', 'e', 'i', 'o', 'u']));

/* 
Pseudocode for a function that takes an array of integers, 
and returns a new array with every other element

  Given an array of numbers
  Create new array
  Append every other element to new array
  return new array

Formal Pseudocode

  START
  # Given an array of numbers called 'numbers'
  SET everyOtherNumbers = []
  SET i = 0
  WHILE i < array.length
    append number[i] to everyOtherNumbers
    i += 2
  PRINT everyOtherNumbers
  END

*/

function everyOther(numbers) {
  let everyOtherNumbers = [];
  for (let i = 0; i < numbers.length; i += 2) {
    everyOtherNumbers.push(numbers[i]);
  }
  return everyOtherNumbers;
}

console.log(everyOther([1, 2, 3, 4, 5]));