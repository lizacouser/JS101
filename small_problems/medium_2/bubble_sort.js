/*
-input array
-output sorted array
-rules of bubble sort
  -iterates through array comparing
  element at index a and element at index a + 1,
  swapping if first is greater than second
  -repeats iteration until no swaps are made (aka array is sorted)
-YES mutate array
-assume array contains at least 2 elements
-arrays may include characters or numbers

examples:
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


datatypes:
-input array
-output array
-internal
  -working with strings and numbers within arrays

algorithm:
-given an array
-set a variable for if there was a swap
while (true)
-swap = false
-loop through by index of array (index < array length - 1)
  -if array[index] > array[index + 1]
    -swap 1 + 2
    -swap = true
-if swap === false, break
return array

*/

function bubbleSort(array) {
  let swap;

  while (true) {
    swap = false;

    for (let index = 0; index < (array.length - 1); index += 1) {
      if (array[index] > array[index + 1]) {
        // let storedElement = array[index];
        // array[index] = array[index + 1];
        // array[index + 1] = storedElement;
        // !!!in JS you can just swap with array destructuring!
        [array[index], array[index + 1]] = [array[index + 1], array[index]];

        swap = true;
      }
    }

    if (!swap) break;
  }

  return array;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]