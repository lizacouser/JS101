/*
Write a function that takes two arrays as arguments,
and returns an array containing the union of the values
from the two. There should be no duplication of values
in the returned array, even if there are duplicates in
the original arrays. You may assume that both arguments
will always be arrays.

Example:
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
*/

/*
Problem:
-input two arrays
-output combined array with dupes removed

Examples:
-union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
-union([], [3, 6, 9]);    // [3, 6, 9]
-union([1, 3, 3], [3, 6, 9]);    // [1, 3, 6, 9]

Data types:
-input array
-output array
-internal array

Algorithm:
-given two arrays
-concatenate arrays
-loop through array1 by index starting at 0
  -loop through array2 by index starting at 1 + index
    -if array[index] === array[index]
      -array.remove(index)
-return concatenated array with dupes removed
*/

function union(array1, array2) {
  return removeDupes(array1.concat(array2));
}

function removeDupes(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push(array[index]);
    for (let index2 = index + 1; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        newArray.pop();
        break;
      }
    }
  }
  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([], [3, 6, 9]));    // [3, 6, 9]
console.log(union([1, 3, 3], [3, 6, 9]));    // [1, 3, 3, 3, 6, 9]

//  A BETTER SOLUTION

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (resultArray.indexOf(value) === -1) { //check if value is in array!
      resultArray.push(value);
    }
  });
}

// student solution that is also better than mine!
function union2(firstArrayP, secondArrayP) {
  let withRepeats = firstArrayP.concat(secondArrayP);

  return withRepeats.reduce((acc, ele) => {
    if (!(acc.includes(ele))) {
      acc.push(ele);
    }
    return acc;
  }, []);
}

console.log(union2([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union2([], [3, 6, 9]));    // [3, 6, 9]
console.log(union2([1, 3, 3], [3, 6, 9]));    // [1, 3, 3, 3, 6, 9]