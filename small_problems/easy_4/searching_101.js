/*
Write a program that solicits six numbers
from the user, then logs a message that
describes whether or not the sixth number
appears amongst the first five numbers.

Examples:
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
*/

const readline = require('readline-sync');

function getNumberFromUser(prompt) {
  let number = readline.question(prompt);
  while (Number.isNaN(Number(number)) || number.trim() === '') {
    number = readline.question('Must be a number. Try again: ');
  }
  return number;
}

function getSixNumbers() {
  let numArray = [];
  numArray.push(getNumberFromUser('Enter the 1st number: '));
  numArray.push(getNumberFromUser('Enter the 2nd number: '));
  numArray.push(getNumberFromUser('Enter the 3rd number: '));
  numArray.push(getNumberFromUser('Enter the 4th number: '));
  numArray.push(getNumberFromUser('Enter the 5th number: '));
  numArray.push(getNumberFromUser('Enter the last number: '));
  return numArray;
}

function sixthNumberSearch() {
  let arrayOfNums = getSixNumbers();

  let sixthNum = arrayOfNums.pop();
  let doesOrDoesntAppear;

  if (arrayOfNums.includes(sixthNum)) {
    doesOrDoesntAppear = 'appears';
  } else {
    doesOrDoesntAppear = 'does not appear';
  }

  console.log(`The number ${sixthNum} ${doesOrDoesntAppear} in ${arrayOfNums}.`);
}

sixthNumberSearch();

// if there was a different condition i'd do a for loop

//how to use array.prototype.some()
let newArray = getSixNumbers();
console.log(newArray.some(num => num > 25));


/*
Problem:
-input
  -user input 6 separate numbers
-output
  -does 6th number also appear in first 5 numbers
  -log 'The number ${num6} ${doesOrDoesntAppear} in ${arrayOfNums};

Examples:
-see above
-should work for floats too tbh

Datatypes:
-input is string number
-internal array of string nums
-output is string

Algorithm:
-enable readline sync
-get user input
  -validate user input
  -add user inputs to array of strings
-check if it appears
  -loop through array, comparing the string @ index 5 to the rest
  -if there's a match, return 'appears'
  -if no match, retun 'does not appear'
-log statement
*/

