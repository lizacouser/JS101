/*
Problem:
-input multi-digit number and count from the end
-output multi-digit number with the digit 'count'
from the right rotated to the end
-rules:
  -count represents number of digits from end (1 is last, 2 is penultimate)
  -just the digit at count gets rotated
  -if count is 1, digit stays in place
-questions:
  -input not a number or blank? (return undefined or NaN)
  -count out of range? (> length of number) (return undefined)
  -return or log?

Examples:
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

// input not a number
rotateRightmostDigits('abcd', 1);      // undefined
rotateRightmostDigits(undefined, 2);   // undefined
rotateRightmostDigits(735291, 'a');    // undefined
rotateRightmostDigits();               // undefined

// count out of range
rotateRightmostDigits(735291, 0);      // 735291 (return given number?)
rotateRightmostDigits(735291, 7);      // undefined (or given number?)


Data types:
-input numbers
-output number
-internal
  -strings

Algorithm:
-given a number and a countFromRight
-convert number to string and split into array (delimiter '')
// ['7', '3', '5', '2', '9', '1']
-initialize variable 'indexToRotate' to array.length - countFromRight
-initialize 'rotatedArray' to [...array.slice(0, indexToRotate), ...array.slice(indexToRotate + 1), array[indexToRotate];
-return Number(rotatedArray.join(''))
*/

function rotateRightmostDigits(number, countFromRight) {
  if (
    typeof number !== 'number' ||
    typeof countFromRight !== 'number' ||
    Number.isNaN(number) ||
    Number.isNaN(countFromRight)
  ) {
    return undefined;
  }

  let numString = number.toString();
  if (countFromRight <= 0 || countFromRight > numString.length) return number;

  let indexToRotate = numString.length - countFromRight;

  let rotatedString = (
    numString.slice(0, indexToRotate) +
    numString.slice(indexToRotate + 1) +
    numString[indexToRotate]
  );
  return Number(rotatedString);
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

// input not a number
rotateRightmostDigits('abcd', 1);      // undefined
rotateRightmostDigits(NaN, 2);         // undefined
rotateRightmostDigits(735291, 'a');    // undefined
rotateRightmostDigits();               // undefined

// count out of range
rotateRightmostDigits(735291, 0);      // 735291
rotateRightmostDigits(735291, 7);      // 735291