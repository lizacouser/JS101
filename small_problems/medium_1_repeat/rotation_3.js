/*
-input number (int)
-output number (max rotation of int)
-rules
  -use rotate rightmost digits

735291 // rotate 7 to end
352917 // hold 2, rotate 5 to end
329175 // hold 32, rotate 9 to end
321759 // hold 321, rotate 7 to end
321597 // hold 3215, rotate 9 to end
321579 ==> output

-examples:
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

-data
  -input number
  -output number
  -internal strings (from rotate rightmost)

-algorithm

# given a number
iterate through indexes of String(number)
  -interate from high to low...
  -first index is String(number).length
  -decrement index
  -stop at 2...
number = rotateRightmostDigits(number, index)

*/

function maxRotation(number) {
  if (Number.isNaN(Number(number))) {
    return "invalid input";
  }

  for (let countFromEnd = String(number).length; countFromEnd >= 2; countFromEnd -= 1) {
    number = rotateRightmostDigits(number, countFromEnd);
  }

  return number;
}

function rotateRightmostDigits(number, countFromEnd) {
  let digits = String(number);
  let rotatedDigitIndex = digits.length - countFromEnd;

  return Number(digits.slice(0, rotatedDigitIndex) +
    digits.slice(rotatedDigitIndex + 1) +
    digits[rotatedDigitIndex]);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
console.log(maxRotation());                // invalid input
console.log(maxRotation("hello"));         // invalid
console.log(maxRotation(0));               // 0