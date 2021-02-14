/*
-input array of ints
-output index where sum on either side of index (not inclusive) are equal
-rule
  -if this index doesn't exist, return -1
  -array to right of index 0 and left of index length - 1 is []
  -value of [] is 0
  - negative numbers included

examples
console.log(findEqualIndex([1, 2, 3, 4, 3, 2, 1]) === 3) // true
console.log(findEqualIndex([1, 100, 50, -51, 1, 1]) === 1) // true
console.log(findEqualIndex([1, 2, 3, 4, 5, 6]) === -1) // true
console.log(findEqualIndex([20, 10, 30, 10, 10, 15, 35]) === 3) // true
console.log(findEqualIndex([20, 10, -80, 10, 10, 15, 35]) === 0) // true
console.log(findEqualIndex([10, -80, 10, 10, 15, 35, 20]) === 6) // true
console.log(findEqualIndex([-1, -2, -3, -4, -3, -2, -1]) === 3) // true


data
-input array
-output number (represents index)
-internally working with arrays


algorithm
-iterate through indices
  -use reduce to sum elements on left (non-inclusive) (intiailze accumulator to 0)
  -use reduce to sum elements on right (non-inclusive)
  -if leftSum === rightSum, return index
-return -1
*/

function findEqualIndex(arr) {
  for (let splitIndex = 0; splitIndex < arr.length; splitIndex += 1) {
    let leftArray = arr.slice(0, splitIndex);
    let rightArray = arr.slice(splitIndex + 1, arr.length);

    if (getArraySum(leftArray) === getArraySum(rightArray)) {
      return splitIndex;
    }
  }

  return -1;
}

function getArraySum(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

console.log(findEqualIndex([1, 2, 3, 4, 3, 2, 1]) === 3) // true
console.log(findEqualIndex([1, 100, 50, -51, 1, 1]) === 1) // true
console.log(findEqualIndex([1, 2, 3, 4, 5, 6]) === -1) // true
console.log(findEqualIndex([20, 10, 30, 10, 10, 15, 35]) === 3) // true
console.log(findEqualIndex([20, 10, -80, 10, 10, 15, 35]) === 0) // true
console.log(findEqualIndex([10, -80, 10, 10, 15, 35, 20]) === 6) // true
console.log(findEqualIndex([-1, -2, -3, -4, -3, -2, -1]) === 3) // true
