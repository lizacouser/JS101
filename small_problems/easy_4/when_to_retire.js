/*
Build a program that logs when the user will
retire and how many more years the user has
to work until retirement.

Example:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

const readline = require('readline-sync');
const CURRENT_YEAR = new Date().getFullYear();
//without the word 'new', Date() would return a string date, rather than object

function getUserInput(message) {
  let input = readline.question(message);

  while (Number.isNaN(Number(input)) || input.trim() === '') {
    input = readline.question('Sorry, not a number. Try again: ');
  }

  return input;
}

function retirementYear() {
  let currentAge = Number(getUserInput('What is your age? '));
  let retirementAge = Number(getUserInput('At what age would you like to retire? '));
  let yearsLeft = retirementAge - currentAge;

  if (yearsLeft >= 0) {
    console.log(`It's ${CURRENT_YEAR}. You will retire in ${CURRENT_YEAR + yearsLeft}.`);
    console.log(`You have only ${yearsLeft} years of work to go!`);
  } else {
    console.log(`You should have retired ${Math.abs(yearsLeft)} years ago! Enjoy yourself!`);
  }
}

retirementYear();
retirementYear();
retirementYear();

/*
Problem:
-input
  -user input age
  -user input retirement age
-output
  -String 'It's ${year}. You will retire in ${year + retirementAge - Age}
  -`You have only ${retirementAge - Age} years of work to go!`
-internal
  -get year
  -math between years
  -make sure to convert strings to numbers

Examples:
-see above
-what about if you already retired?

Datatypes:
-input string number (convert)
-output string sentence
-internal numbers

Algorithm:
-get user age
-get user retirementAge
-set yearsLeft to retirementAge - age
-if yearsLeft is positive
  -log the string
-else
  -log 'You should have retired ${absval yearsLeft} years ago! Enjoy yourself!'
*/