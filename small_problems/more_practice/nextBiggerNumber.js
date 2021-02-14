// [1234, 1243, 1324, 1342, 1423, 1432,
//   2134, 2143, 2314, 2341, 2413, 2431,
//   3124, 3142, 3214, 3241, 3412, 3421,
//   4123, 4132, 4213, 4231, 4312, 4321]
// 102 => 120, 201, 210


/*
-input positive integer
-output is next largest positive interger, digits rearragned
- if no bigger numner, return -1

- data
  - make an array of all possible combinations + sort
  - make array of digits, rearrange
  - increase number until we find another number with same digits!
    -test digits with array of chars

-algorithm

-given a positive integer startNum
-compareNum = startNum + 1
-while true
  -if biggestNumber, return -1
  -if compareNum has same digits as startNum, break
  -increment compareNum by 1
-return compareNum


check for biggest number
-if single digit
-if in descending order === number

has same digits
-take two numbrs
-split into digits
-sort digits
-convert back to number
-compare


*/


function nextBiggerNum(startNum) {
  if (isBiggestNumber(startNum)) {
    return -1;
  }

  let compareNum = startNum;
  while (true) {
    compareNum += 1;
    if (hasSameDigits(compareNum, startNum)) {
      break;
    }
  }
  return compareNum;
}

function numberToDigits(number) {
  return String(number).split('').map(char => Number(char));
}

function isBiggestNumber(number) {
  let digits = numberToDigits(number);
  return (
    digits.length === 1 ||
    Number([...digits].sort((a, b) => b - a).join('')) === number
  );
}

function hasSameDigits(number1, number2) {
  let digits1 = numberToDigits(number1);
  let digits2 = numberToDigits(number2);

  let sortedDigits1 = Number([...digits1].sort((a, b) => a - b).join(''));
  let sortedDigits2 = Number([...digits2].sort((a, b) => a - b).join(''));

  return sortedDigits1 === sortedDigits2;
}

console.log(nextBiggerNum(1234));
console.log(nextBiggerNum(2134));
console.log(nextBiggerNum(1324));
console.log(nextBiggerNum(4321));
console.log(nextBiggerNum(123456789));
console.log(nextBiggerNum(987564321));