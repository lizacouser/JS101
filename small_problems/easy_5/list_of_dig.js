/*
List of Digits
Write a function that takes one argument, a positive integer,
and returns a list of the digits in the number.

Examples:
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
*/

function digitList(int) {
  let digits = [];
  while (int > 0) {
    digits.unshift(int % 10);
    int = Math.floor(int / 10);
  }
  return digits;
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

// using .map()

function digitList2(int) {
  let digitStrings = String(int).split('');
  let digits = digitStrings.map(digit => Number(digit));
  return digits;
}

digitList2(12345);       // [1, 2, 3, 4, 5]
digitList2(7);           // [7]
digitList2(375290);      // [3, 7, 5, 2, 9, 0]
digitList2(444);         // [4, 4, 4]

/*
P:
-input positive int
-output list of digits in int

E:
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
-ignoring padded zeroes...

D:
-numbers
-array

A:
-given an int
-make empty array digits
-while int > 0
  -digits.push(int % 10)
  -int = Math.floor(int / 10)
-return array
*/

