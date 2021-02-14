/*
-input number representing count of positive integers
-output number difference between:
  -square of sum of first count pos ints AND
  -sum of squares of first count pos integers

3 ==> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)

examples:
console.log(sumSquareDifference(3)); 22
console.log(sumSquareDifference(10)); 2640
console.log(sumSquareDifference(1)); 0
console.log(sumSquareDifference(100)); 25164150

data:
-input number
-output number
-internal
  -array of numbers (1, 2, 3, etc)

algorithm:
-given a count of positive ints
-create numArray of positive ints from 1 to count
-get square of sum
  -given array of numbers
  -reduce array to get sum
  -return sum ** 2
-get sum of squares
  -given array of numbers
  -map to array of squared numbers
  -reduce to find sum of squares and return
-return difference between square of sum and sum of squares
*/

function sumSquareDifference(count) {
  let numArray = [];
  for (let num = 1; num <= count; num += 1) {
    numArray.push(num);
  }

  return squareOfSum(numArray) - sumOfSquares(numArray);
}

function squareOfSum(arr) {
  return arr.reduce((sum, current) => sum + current, 0) ** 2;
}

function sumOfSquares(arr) {
  return arr.map(number => number ** 2)
    .reduce((sum, current) => sum + current, 0);
}


console.log(sumSquareDifference(3)); //22
console.log(sumSquareDifference(10)); //2640
console.log(sumSquareDifference(1)); //0
console.log(sumSquareDifference(100)); //25164150
