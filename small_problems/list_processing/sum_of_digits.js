// Questions
// -what if number is one digit
// -what if input is not an integer
//
// Problem
// -input postitive int
// -output sum of digits
// -rules:
//  -do not use for, while, or do... while loops
//
// Data types: numbers
//
// Alg:
// -given an int
// -separate digits into array
//  -convert to string
//  -split by ''
//  -map to numbers
// -reduce array with sum


function sumDigits(number) {
  let numArray = separateByDigit(number);
  return numArray.reduce((sum, digit) => digit + sum);
}

function separateByDigit(number) {
  return String(number).split('').map(digitStr => Number(digitStr));
}

sumDigits(23);           // 5
sumDigits(496);          // 19
sumDigits(123456789);    // 45