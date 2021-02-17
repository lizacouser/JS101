/*
-input number (number, countDigits)
-output number, with number at length - countDigit moved to last index
-countDigits = 2 means index of digit to rotate is length - 2
-what to do if input isn't a number?
-what to do if input second argument is out of the boundaries of the number


rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
rotateRightmostDigits(735291, 0);      // 735291
rotateRightmostDigits(735291, -5);      // 735291
rotateRightmostDigits(735291, 7);      // 735291
rotateRightmostDigits("hello", 6);      // return invalid input
rotateRightmostDigits(123, "hello");    // return invalid input
rotateRightmostDigits(hello);           // return invalid input

data:
-input numbers
-output number
-internal
  -array of digits

algorithm:
#given a number and a count of digits from the end of number
(deal with bad input)
split number into array of digits (convert to string)
store index of rotating number
store [...array.slice(0, index), array[index], ...array.slice(index + 1)]
join, convert to number, and return
*/

function rotateRightmostDigits(number, countFromEnd) {
  if (
    Number.isNaN(Number(number)) ||
    Number.isNaN(Number(countFromEnd))) {
    return "invalid input";
  }

  let digits = String(number);
  let rotatedDigitIndex = digits.length - countFromEnd;

  if (countFromEnd > digits.length || countFromEnd <= 0) return number;

  return Number(digits.slice(0, rotatedDigitIndex) +
    digits.slice(rotatedDigitIndex + 1) +
    digits[rotatedDigitIndex]);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
console.log(rotateRightmostDigits(735291, 0));      // 735291
console.log(rotateRightmostDigits(735291, -5));      // 735291
console.log(rotateRightmostDigits(735291, 7));      // 735291
console.log(rotateRightmostDigits("hello", 6));      // return invalid input
console.log(rotateRightmostDigits(123, "hello"));    // return invalid input
console.log(rotateRightmostDigits());                // return invalid input