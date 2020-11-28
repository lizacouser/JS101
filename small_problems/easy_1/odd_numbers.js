/*

Log all odd numbers from 1 to 99, inclusive, to the console, 
with each number on a separate line.

Understanding the Problem:
-input: n/a
-output: odd numbers 1-99 on console with line breaks between each number

Examples:
logOddNumbers() // returns 1, 3, 5, 7, ..., 99
logOddNumbers(10) // returns 1, 3, 5, 7, ..., 99
logOddNumbers('liza') // returns 1, 3, 5, 7, ..., 99

Data Types:
-input: n/a
-output: numbers
-internal: n/a

Algorithm:
-for loop from 1 to 99, num += 2
  -print num

START
SET num = 1
WHILE num <= 99
  PRINT num;
  num += 2;
END

*/

let logOddNumbers = () => {
  for (let num = 1; num <= 99; num += 2){
    console.log(num);
  }
}

logOddNumbers() // returns 1, 3, 5, 7, ..., 99
logOddNumbers(10) // returns 1, 3, 5, 7, ..., 99
logOddNumbers('liza') // returns 1, 3, 5, 7, ..., 99