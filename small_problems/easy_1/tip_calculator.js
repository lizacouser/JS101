
let rlSync = require('readline-sync');

let billAmount = Number(rlSync.question('What is the bill? '));
let tipRate = Number(rlSync.question('What percentage is your tip rate? '));

let tipAmount = (billAmount * (tipRate / 100));
let totalPrice = (billAmount + tipAmount);

console.log(`The tip is $${tipAmount.toFixed(2)}. \nThe total is $${totalPrice.toFixed(2)}.`)


/*
Create a simple tip calculator. The program should prompt
for a bill amount and a tip rate.

The program must compute the tip, and then log both the
tip and the total amount of the bill to the console.

You can ignore input validation and assume that the user
will enter numbers.

Example...
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00


Problem:
-Input
  -user input bill amount (number)
  -user input tip rate (number)
-Internal
  -tip amount (number)
  -total price (number)
-Output
  -string describing tip amt, two decimal places
  -string describing total price, two decimal places

Examples:
-input 200, 15 // output 'The tip is $30.00 /nThe total is $230.00'
-input 0, 20 // output 'The tip is $0.00 /nThe total is $0.00'
-input 200, 0 // output 'The tip is $0.00 /nThe total is $200.00'
-input 5, 20 // output 'The tip is $1.00 /nThe total is $6.00'
-input 56.70, 20 // output 'The tip is $11.34 /nThe total is $68.04'
-input 0, 0 // output 'The tip is $0.00 /nThe total is $0.00'

no data val necessary. if there were, I'd test non-number input & white space

Data types:
-input string prompt, convert input to number
-internal numbers, truncate at 2 decimal places
-output string

Algorithm:
-enable readline sync
-ask for bill amount
  -coerce to number
  -save to variable 'billAmount'
-ask for tip rate (percentage)
  -coerce to number
  -save to variable 'tipRate'
-get tip amount
  -multiply billAmount by tipRate/100
  -add two decimal places
    -Number.prototype.toFixed(2)
  -save to variable tipAmount
-get total amount
  -add tipAmount to billAmount
  -add two decimal places
    -Number.toFixed(number, 2)
  -save to variable totalPrice
-log `The tip is $${tipAmount}. /nThe total is $${totalPrice}.`

*/