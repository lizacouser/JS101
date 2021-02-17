/*
-input 2 sorted arrays
-output merged and sorted array
-rules:
  -can't merge and THEN sort, you have to sort and then merge
  -can't mutate
  -empty arrays go away
  -all have the same data types?

example:
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

data:
-input array
-output array
-internal arrays

algorithm:
-given 2 sorted arrays
-create new empty result array
-compare first elements
  -add smaller element to array
  -arr1 = arr1.slice(1)
*/


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

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

let arrayA = [1, 5, 9];
let arrayB = [2, 6, 8];
console.log(merge(arrayA, arrayB));            // [1, 2, 5, 6, 8, 9]
console.log(arrayA, arrayB);