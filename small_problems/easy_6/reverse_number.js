/*
Reverse Number
Write a function that takes a positive integer
as an argument, and returns that number with
its digits reversed.

Examples:
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21
// ^^ Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
*/

/*
P:
-input number
-output reversed number
-implicit: leading zeros in result get dropped

E:
-see above

D:
-input number
-output number
-internal
  -string
  -array of digits
  -reversed array

A:
-given a number num
-turn num to string
-turn string to array
-reverse array
-join array
-convert to number
-return
*/

function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21
// ^^ Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1