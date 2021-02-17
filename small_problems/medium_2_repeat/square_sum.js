/*
-input number (count pos ints)
-output number difference between squares of sums and sums of squares
-rules:
  -22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
  -if <= 0 return 'invalid input'

data:
-input number
-output number
-internal
  -numbers

algorithm:
given a number
create array of all positive ints counting up to that number
  -start at 1, for loop, adding to array
square the sum of that array
  = numbers.reduce() for sum
  = return sum ** 2
sum the squares of that array
  = numbers.reduce() for sum, but square in reduce function
return the difference
*/

function sumSquareDifference(num) {
  if (Number.isNaN(Number(num)) || num <= 0) return 'invalid input';

  let numbers = getAllNumbers(num);

  return squareOfSum(numbers) - sumOfSquares(numbers);
}

function squareOfSum(numbers) {
  return numbers.reduce((sum, current) => sum + current) ** 2;
}

function sumOfSquares(numbers) {
  return numbers.reduce((squareSum, current) => squareSum + (current ** 2));
}

function getAllNumbers(num) {
  let array = [];

  for (let count = 1; count <= num; count ++) {
    array.push(count);
  }

  return array;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150