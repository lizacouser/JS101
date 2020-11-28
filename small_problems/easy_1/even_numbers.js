/*

Log all even numbers from 1 to 99, inclusive, to the console, 
with each number on a separate line.

Understanding the Problem:
-input: n/a
-output: even numbers 1-99 on console with line breaks between each number

Examples:
logEvenNumbers() // returns 2, 4, 6, 8, ..., 98
logEvenNumbers(10) // returns 2, 4, 6, 8, ..., 98
logEvenNumbers('liza') // returns 2, 4, 6, 8, ..., 98

Data Types:
-input: n/a
-output: numbers
-internal: n/a

Algorithm:
-for loop from 2 to 99, num += 2
  -print num

START
SET num = 2
WHILE num <= 99
  PRINT num;
  num += 2;
END

*/

let logEvenNumbers = () => {
  for (let num = 2; num <= 99; num += 2){
    console.log(num);
  }
}

logEvenNumbers() // returns 1, 3, 5, 7, ..., 99
logEvenNumbers(10) // returns 1, 3, 5, 7, ..., 99
logEvenNumbers('liza') // returns 1, 3, 5, 7, ..., 99


/* 
Proposed solution:

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}

*/