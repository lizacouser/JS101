/*
Find the Duplicate
Given an unordered array and the information that
exactly one value in the array occurs twice (every
other value occurs exactly once), determine which
value occurs twice. Write a function that will find
and return the duplicate value that is in the array.

Examples:
findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73
*/

function findDup(array) {
  let dupeVal;
  array.reduce((testedVals, testVal) => {
    if (!testedVals.includes(testVal)) {
      testedVals.push(testVal);
    } else {
      dupeVal = testVal;
    }
    return testedVals;
  }, []);
  return dupeVal;
}

// in this scenario it's probably better to just use a for loop?
/* function findDup(array) {
  let seen = {};

  for (let idx = 0; idx < array.length; idx += 1) {
    if (seen[array[idx]]) {
      return array[idx];
    } else {
      seen[array[idx]] = true;
    }
  }

  return undefined;
}

*/

/*
function count(array, element) {
  let count = 0;
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === element) {
      count += 1;
    }
  }
  return count;
}

function findDup(array) {
  return array.find(element => count(array, element) === 2);
}

Notes: we use the method Array.prototype.find() to look through
each item in our array. If that item meets some condition we
return it. In this case, the condition we check is that that
item occurs twice. This bit of code will allow us to find the
duplicate element regardless of the size of the array. To
determine the count of the element we use the helper function
count() which implementation is pretty straightforward.
*/

console.log(findDup([1, 5, 3, 1]));
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
   7, 34, 57, 74, 45, 11, 88, 67,  5, 58]))

/*
Problem:
-input unordered array, with 1 value occurring twice
-return value of the duplicate

Examples:
see above

Data types:
arrays

Algorithm:
-given an array
-compare values against each other
  -use accumulator array?
  -accum = []
  -as you loop through values
  -test if it is in the accumulator
  -if not, add to accumulator
  -if values matches another
    -return that value
*/


