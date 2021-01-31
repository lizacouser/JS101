/*
-input array
-output new array rotates first element of array to the end
-rules
  -if input is not an array, return undefined
  -if input is empty array, return []
  -if one element, it stays in place
  -should work with multiple element data types
  -non-mutating
  -if two elements, they switch places
-questions:
  -non mutating
  -if all elements are the same?
  -empty items?
  -print or return?

Examples:
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []
rotateArray([1, undefined]);           // [undefined, 1]
rotateArray([[]]);                     // [[]]

//Deal with empty items
let emptyArray = [];
emptyArray[4] = 2;
rotateArray(emptyArray)        // [<2 empty items>, 2, <1 empty item>]

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined
rotateArray({});                       // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]


Data types:
-input array
-output array
-internal arrays

Algorithm:
given an array input
if input is not an array, return undefined
else make a copy of the array
if the arrayCopy is not empty, shift element and push element to end
return arrayCopy
*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return array;
  if (array.length > 0) {
    let arrayCopy = array.slice();
    arrayCopy.push(arrayCopy.shift());
    return arrayCopy;
  }
}

//OR

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) {
    return array;
  }
  return [...array.slice(1), array[0]];
}


rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []
rotateArray([1, undefined]);           // [undefined, 1]
rotateArray([[]]);                     // [[]]

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined
rotateArray({});                       // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]
