/*
Multiply Lists
Write a function that takes two array arguments,
each containing a list of numbers, and returns a
new array that contains the product of each pair
of numbers from the arguments that have the same
index. You may assume that the arguments contain
the same number of elements.

Example:
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
*/

function multiplyList(array1, array2) {
  let result = [];
  for (let index = 0; index < array1.length; index += 1) {
    result.push(array1[index] * array2[index]);
  }
  return result;
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

/*
P:
-input two arrays of ints
-output new array product of each pair
-assume same # of elements

E:
-see above

D:
-arrays

A:
-given two arrays
-make empty array
-loop through indexes
  - array.push(array1[index] * array2[index])
return array
*/

