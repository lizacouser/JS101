/*
Problem:
735291 => rotate first digit to end
352917 => rotate second digit to end
329175 => rotate third digit to end
321759 => rotate fourth digit to end
321597 => rotate fifth digit to end
321579 => MAX ROTATION

-input integer
-output max rotation
-rules:
  -can used rotateRightMostDigits
  -rotate at index 0, then 1, then 2, then 3, then 4
  -last rotation is between last two digits (length of number - 2)
  -if there is a 0 and it gets rotated, a leading 0 gets dropped
-questions:
  -input not a number?
  -single digit returns itself
  -print or return?
  -floats?

Examples:
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

//invalid argument
maxRotation('a');             // undefined
maxRotation(NaN);             // undefined

Data types:
-input number
-output number
-internal
  -numbers

Algorithm:
-given an integer
-if not a valid integer, return undefined
-set count to integer length (first digit)
-while count >= 2
  -set rotatedNumber to rotateRightMostDigits(number, count)
  -subtract 1 from count (to be 1 digit closer to right)
return rotatedNumber
*/


function maxRotation(number) {
  if (invalidNumber(number)) return undefined;

  let countFromRight = number.toString().length;

  while (countFromRight >= 2) {
    number = rotateRightmostDigits(number, countFromRight);
    countFromRight -= 1;
  }
  return number;
}

function rotateRightmostDigits(number, countFromRight) {
  if (invalidNumber(number) || invalidNumber(countFromRight)) {
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

function invalidNumber(number) {
  return (Number.isNaN(number) || typeof number !== 'number');
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

//invalid argument
maxRotation('a');             // undefined
maxRotation(NaN);             // undefined