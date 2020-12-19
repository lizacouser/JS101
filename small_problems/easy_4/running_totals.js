/*
Write a function that takes an array of numbers,
and returns an array with the same number of elements,
with each element's value being the running total
from the original array.

Examples:
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
*/

let runningTotal = array => {
  let previousSum = 0;
  let summedArray = [];

  array.forEach(number => {
    summedArray.push(previousSum += number); //all in one line!
  });

  return summedArray;
};

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));

//using Array.map()
let runningTotals = array => {
  let previousSum = 0;
  let summedArray = array.map(number => {
    return (previousSum += number);
  });

  return summedArray;
};

console.log(runningTotals([2, 5, 13]));
console.log(runningTotals([14, 11, 7, 15, 20]));
console.log(runningTotals([3]));
console.log(runningTotals([]));

/*
Proposed solution:

function runningTotal(array) {
  let resultArray = [];
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    resultArray.push((sum += array[idx])); //all in one line!
  }

  return resultArray;
};

*/
/*
Problem:
-input
  -array of numbers
-output
  -array with element value being sum of previous elements

Examples:
-see above

Data types:
-input array of numbers
-output array of numbers
-internal numbers, array methods

Algorithm:
-given an array of numbers
-set previousValue to 0
-set newArray to []
-for i = 0; i < array.length; i++
  -number = number + previousValue
  -newArray.push number
  -set previousValue to number
-return newArray
*/


