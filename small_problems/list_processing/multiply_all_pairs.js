/*
Problem:
-input two arrays containing a list of numbers
-output new array containing products of all combinations
 of number pairs between the two arrays
-rules
  -output sorted in ascending numerical order
  -first val in array1 with all vals in array 2
  -seconds val in array 1 with all vals in array 2, etc
  -duplicate values allowed
  -neither will be an empty array

Examples:
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
multipleAllPairs([3, 0, 4], [1, 2]); // [0, 0, 3, 4, 6, 8]

Data types:
-input array of numbers
-output array of numbers
-arrays, numbers

Algorithm:
-given two arrays of numbers 'array1' and 'array2'
-create empty array 'products'
-multiply each element in array1 and array2 and push to products
  -for each element1 in array1
    -for each element2 in array2
      -push element1 * element2 to 'products'
-sort products
-return
*/

function multiplyAllPairs(array1, array2) {
  let products = [];
  array1.forEach(element1 => {
    array2.forEach(element2 => {
      products.push(element1 * element2);
    });
  });
  return products.sort((a,b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
multiplyAllPairs([3, 0, 4], [1, 2]); // [0, 0, 3, 4, 6, 8]