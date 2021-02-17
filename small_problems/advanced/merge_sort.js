/*
-recursive sorting alg
-break arary into subarrays

1) break into nested sub arrays
[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]

Merge back together in a proper order
[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]

-input array
-output array contains values from input array in sorted order
-same data type
-test strings
-test numbers


Examples:
mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]


Data:
-input array
-output array
-internal nested array

Algorithm:
-have a start condition
-call itself with new argument

# given an array
break down array by finding middle index, and creating 2 subarrays at middle index (use slice)?
break down subarrays
stop breaking down when each of the subArrays has length 1?

# given an array of nested arrays
mergeSort array[0] and array[1]
stop mergesorting when each element of the array is not an array

not sure what to do when there are an odd number of elements
*/


function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let middleIndex = Math.floor(array.length / 2);
  return merge(mergeSort(array.slice(0, middleIndex)), mergeSort(array.slice(middleIndex)));
}


function merge(arr1, arr2) {
  let result = [];

  while (arr1.length > 0 && arr2.length > 0)  {

    if (arr1[0] < arr2[0]) {
      result.push(arr1[0]);
      arr1 = arr1.slice(1);

    } else if (arr2[0] < arr1[0]) {
      result.push(arr2[0]);
      arr2 = arr2.slice(1);
    }
  }

  result.push(...arr1, ...arr2);

  return result;
}

console.log(mergeSort([9, 2, 3]));
console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));

console.log(// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46])));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
