/*
Halvsies
Write a function that takes an array as an argument,
and returns an array that contains two elements, each
of which is an array. Put the first half of the original
array elements in the first element of the return value,
and put the second half in the second element. If the
original array contains an odd number of elements, place
the middle element in the first half array.

Examples:
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
*/

function halvsies(array) {
  let splitIndex = Math.ceil(array.length / 2);
  return [array.slice(0, splitIndex), array.slice(splitIndex)];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

/*
Problem:
-input array
-output array of two arrays (first half, and second half)
-for odd arrays, middle element goes in first half

Examples:
see above

Datatypes:
-arrays

Algorithm:
-given an array
-determine split index of that array (round up)
-array1 = array.slice(0, splitIndex)
-array2 = array.slice(splitIndex)
-return [firstHalf, secondHalf]
*/

