/*
Multiplicative Average
Write a function that takes an array of integers as input,
multiplies all of the integers together, divides the
result by the number of entries in the array, and returns
the result as a string with the value rounded to three
decimal places.

Examples:
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

*/


function multiplicativeAverage(arrayOfInts) {
  let count = arrayOfInts.length;
  let product = arrayOfInts.reduce((product, int) => product * int);
  console.log((product / count).toFixed(3));
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

/*
P:
-input array of ints
-output string of multiplicative avg rounded to 3 decimal places
-internal
  -multiply all ints together, divide by length

E:
-see above
-empty array?
-0?
-negative?

D:
-number
-string
-array

A:
-given array of ints
-get array length
-reduce array, multiplying all the elements
-divide that by length
-return result.toFixed(3)
*/
