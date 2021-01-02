/*
Combine Two Lists
Write a function that combines two arrays passed as arguments,
and returns a new array that contains all elements from both
array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and
that they have the same number of elements.

Example:
interleave([1, 2, 3], ['a', 'b', 'c']); // [1, "a", 2, "b", 3, "c"]
*/

function interleave(array1, array2) {
  let result = [];
  for (let index = 0; index < array1.length; index += 1) {
    result.push(array1[index], array2[index]);
  }
  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]
console.log(interleave([1, 2], ['a', 'b'])); // [1, "a", 2, "b"]
console.log(interleave([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']));


// with .forEach()
function interleave2(array1, array2) {
  let result = [];
  array1.forEach((elem, idx) => {
    result.push(elem, array2[idx]);
  });
  return result;
}

console.log(interleave2([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]
console.log(interleave2([1, 2], ['a', 'b'])); // [1, "a", 2, "b"]
console.log(interleave2([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']));

// with map()
function interleave3(array1, array2) {
  let result = array1.map((elem, idx) => {
    return [elem, array2[idx]];
  }).flat();
  return result;
}

console.log(interleave3([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]
console.log(interleave3([1, 2], ['a', 'b'])); // [1, "a", 2, "b"]
console.log(interleave3([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']));


// with reduce()
function interleave4(array1, array2) {
  let result = array1.reduce((accum, elem, idx) => {
    accum.push(elem, array2[idx]);
    return accum;
  }, []);
  return result;
}

console.log(interleave4([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]
console.log(interleave4([1, 2], ['a', 'b'])); // [1, "a", 2, "b"]
console.log(interleave4([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']));



/*
Prob:
-input two arrays
-output one array of interwoven array elements
-internal
  -a1, b1, a2, b2 (first array goes first)
  -all have equal num elements

Ex:
console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]
console.log(interleave([1, 2], ['a', 'b'])); // [1, "a", 2, "b"]
console.log(interleave([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']));

Data:
-Arrays

Alg:
-given two arrays
-create new empty array,
-for i in array.length
  -add first element of array 1
  -add first element of array 2, etc
return joined array
*/